import { Injectable, signal, computed } from '@angular/core';

export interface Devise {
  code: string;
  nom: string;
  drapeau: string;
  tauxVersXAF: number;
}

export interface Conversion {
  id: number;
  montant: number;
  deviseSource: string;
  deviseCible: string;
  resultat: number;
  date: Date;
}

@Injectable({ providedIn: 'root' })
export class ConversionService {
  readonly devises: Devise[] = [
    { code: 'XAF', nom: 'Franc CFA', drapeau: '🇨🇲', tauxVersXAF: 1 },
    { code: 'EUR', nom: 'Euro', drapeau: '🇪🇺', tauxVersXAF: 655.96 },
    { code: 'USD', nom: 'Dollar US', drapeau: '🇺🇸', tauxVersXAF: 610.50 },
    { code: 'GBP', nom: 'Livre Sterling', drapeau: '🇬🇧', tauxVersXAF: 765.30 },
    { code: 'NGN', nom: 'Naira nigérian', drapeau: '🇳🇬', tauxVersXAF: 0.40 },
  ];

  montant = signal(1000);
  deviseSource = signal('XAF');
  deviseCible = signal('EUR');

  private readonly _historique = signal<Conversion[]>([]);
  readonly historique = this._historique.asReadonly();
  private prochainId = signal(1);

  resultat = computed(() => {
    const source = this.devises.find(d => d.code === this.deviseSource());
    const cible = this.devises.find(d => d.code === this.deviseCible());
    if (!source || !cible) return 0;
    return (this.montant() * source.tauxVersXAF) / cible.tauxVersXAF;
  });

  inverser(): void {
    const src = this.deviseSource();
    this.deviseSource.set(this.deviseCible());
    this.deviseCible.set(src);
  }

  enregistrerConversion(): void {
    const nouvelle: Conversion = {
      id: this.prochainId(),
      montant: this.montant(),
      deviseSource: this.deviseSource(),
      deviseCible: this.deviseCible(),
      resultat: this.resultat(),
      date: new Date(),
    };
    this._historique.update(liste => [nouvelle, ...liste]);
    this.prochainId.update(n => n + 1);
  }

  effacerHistorique(): void {
    this._historique.set([]);
  }
}