import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { MongoServiceService } from 'src/app/mongo-service.service';

@Component({
  selector: 'app-dishes-stats',
  templateUrl: './dishes-stats.page.html',
  styleUrls: ['./dishes-stats.page.scss'],
})
export class DishesStatsPage implements OnInit {

  public linearDishesByCalories: any;
  public pieDishesByPrice: any;
  public pie2DishesByNutrition: any;
  public recetas: any;

  constructor(public recetasDB: MongoServiceService) { }

  getDashInfo(){

      this.recetasDB.getDashBoard().then(data => {
        this.recetas = data;
        this.getPieChart(this.recetas);
      })





  }

  getPieChart(recetas:any){
    let tiempos:any = [];
    let labels:any = []

    recetas.forEach((receta:any) => {

      tiempos.push(receta.tiempo_m)
      labels.push(receta.Nombre_receta)

    });

    const data2 = {
      labels: labels,
      datasets: [{
        label: '',
        data: tiempos,
        backgroundColor: [
          'red',
          'blue',
          'orange',
          'purple',
          'gray'
        ],
        hoverOffset: 4
      }]
    };

    this.pieDishesByPrice = new Chart(document.getElementById('circle-dishes-by-calories') as HTMLCanvasElement, {
      type: 'pie',
      data: data2
    });
  }

  ngOnInit() {
    this.getDashInfo();

  }

}
