import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishesFinderPage } from './dishes-finder.page';

describe('DishesFinderPage', () => {
  let component: DishesFinderPage;
  let fixture: ComponentFixture<DishesFinderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishesFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
