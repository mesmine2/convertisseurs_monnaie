import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Convertisseur } from './convertisseur';

describe('Convertisseur', () => {
  let component: Convertisseur;
  let fixture: ComponentFixture<Convertisseur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Convertisseur],
    }).compileComponents();

    fixture = TestBed.createComponent(Convertisseur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
