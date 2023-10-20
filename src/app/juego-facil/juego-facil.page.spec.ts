import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoFacilPage } from './juego-facil.page';

describe('JuegoFacilPage', () => {
  let component: JuegoFacilPage;
  let fixture: ComponentFixture<JuegoFacilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegoFacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
