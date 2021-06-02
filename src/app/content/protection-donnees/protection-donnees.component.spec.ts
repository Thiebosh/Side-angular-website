import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionDonneesComponent } from './protection-donnees.component';

describe('ProtectionDonneesComponent', () => {
  let component: ProtectionDonneesComponent;
  let fixture: ComponentFixture<ProtectionDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectionDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
