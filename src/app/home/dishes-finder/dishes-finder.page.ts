import { Component, OnInit } from '@angular/core';
import { MongoServiceService } from 'src/app/mongo-service.service';

@Component({
  selector: 'app-dishes-finder',
  templateUrl: './dishes-finder.page.html',
  styleUrls: ['./dishes-finder.page.scss'],
})
export class DishesFinderPage implements OnInit {

  public platos:any;

  public findBar: any;

  public dishes: any;


  constructor(public recetasDB: MongoServiceService) { }

  ngOnInit() {
    this.getRecetas();
  }

  filtrarRecetas(){
    this.platos = this.dishes;
    let filtrados = [];
    filtrados = this.platos.filter((plato: { Nombre_receta: string })=>plato.Nombre_receta.toLowerCase().includes(this.findBar.toLowerCase()))
    this.platos = filtrados;
  }



  getRecetas(){
    this.recetasDB.getRecetas().then(data => {
      this.platos = data;
      this.dishes = data;
    })

  }
}
