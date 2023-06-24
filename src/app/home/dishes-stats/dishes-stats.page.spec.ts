import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishesStatsPage } from './dishes-stats.page';

describe('DishesStatsPage', () => {
  let component: DishesStatsPage;
  let fixture: ComponentFixture<DishesStatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishesStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
