import { Component, inject,computed } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConversionService } from '../../services/conversion.service';

@Component({
  selector: 'app-historique',
  imports: [DecimalPipe, DatePipe, RouterLink],
  templateUrl: './historique.html',
  styleUrl: './historique.css'
})
export class Historique {
  service = inject(ConversionService);
  historique = this.service.historique;
  total = computed(() => this.historique().length);
  totalConverti = computed(() =>
    this.historique().reduce((somme, c) => somme + c.resultat, 0)
  );
}