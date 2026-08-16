import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
interface Devise {
  code: string;
  nom: string;
  tauxVersXAF: number; // combien de FCFA pour 1 unité de cette devise
}

@Component({
  selector: 'app-root',
  imports: [DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  devises: Devise[] = [
    { code: 'EUR', nom: 'Euro', tauxVersXAF: 655.96 },
    { code: 'USD', nom: 'Dollar US', tauxVersXAF: 610.50 },
    { code: 'GBP', nom: 'Livre Sterling', tauxVersXAF: 765.30 },
    { code: 'XAF', nom: 'Franc CFA', tauxVersXAF: 1 },
  ];

  montant = signal(1000);
  deviseSource = signal('XAF');
  deviseCible = signal('EUR');

  resultat = computed(() => {
    const source = this.devises.find(d => d.code === this.deviseSource());
    const cible = this.devises.find(d => d.code === this.deviseCible());
    if (!source || !cible) return 0;

    const montantEnXAF = this.montant() * source.tauxVersXAF;
    return montantEnXAF / cible.tauxVersXAF;
  });

  onMontantChange(event: Event) {
    const valeur = Number((event.target as HTMLInputElement).value);
    this.montant.set(valeur);
  }

  onDeviseSourceChange(event: Event) {
    this.deviseSource.set((event.target as HTMLSelectElement).value);
  }

  onDeviseCibleChange(event: Event) {
    this.deviseCible.set((event.target as HTMLSelectElement).value);
  }

  inverser() {
    const src = this.deviseSource();
    this.deviseSource.set(this.deviseCible());
    this.deviseCible.set(src);
  }
}