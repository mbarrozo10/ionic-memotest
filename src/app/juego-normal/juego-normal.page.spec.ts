import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoNormalPage } from './juego-normal.page';

describe('JuegoNormalPage', () => {
  let component: JuegoNormalPage;
  let fixture: ComponentFixture<JuegoNormalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegoNormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
