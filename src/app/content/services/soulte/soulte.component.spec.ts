import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulteComponent } from './soulte.component';

describe('SoulteComponent', () => {
  let component: SoulteComponent;
  let fixture: ComponentFixture<SoulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoulteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
