import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dishes-stats',
  templateUrl: './dishes-stats.page.html',
  styleUrls: ['./dishes-stats.page.scss'],
})
export class DishesStatsPage implements OnInit {

  public linearDishesByCalories: any = null;
  public pieDishesByPrice: any = null;
  public pie2DishesByNutrition: any = null;

  constructor() { }

  ngOnInit() {

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(175, 192, 92)',
        tension: 0.1
      }, {
        label: 'My Second Dataset',
        data: [20, 25, 30, 35, 40, 55, 70],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    this.linearDishesByCalories = new Chart(document.getElementById('linear-dishes-by-calories') as HTMLCanvasElement, {
      type: 'line',
      data
    });

    const data2 = {
      labels: [
        'Red',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    };

    this.pieDishesByPrice = new Chart(document.getElementById('circle-dishes-by-calories') as HTMLCanvasElement, {
      type: 'pie',
      data: data2
    });

    this.pie2DishesByNutrition = new Chart(document.getElementById('circle2-dishes-by-calories') as HTMLCanvasElement, {
      type: 'pie',
      data: data2
    });

  }

}
