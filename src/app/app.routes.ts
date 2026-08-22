// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Convertisseur } from './components/convertisseur/convertisseur';
import { Historique } from './components/historique/historique';

export const routes: Routes = [
  { path: '', component: Convertisseur },
  { path: 'historique', component: Historique},
];