import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConversionService } from '../../services/conversion.service';

@Component({
  selector: 'app-convertisseur',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './convertisseur.html',
  styleUrl: './convertisseur.css'
})
export class Convertisseur {
  service = inject(ConversionService);
  devises = this.service.devises;

  onMontantChange(e: Event) { this.service.montant.set(Number((e.target as HTMLInputElement).value)); }
  onSourceChange(e: Event) { this.service.deviseSource.set((e.target as HTMLSelectElement).value); }
  onCibleChange(e: Event) { this.service.deviseCible.set((e.target as HTMLSelectElement).value); }
}