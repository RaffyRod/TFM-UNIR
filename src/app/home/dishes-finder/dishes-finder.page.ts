import { Component, OnInit, ViewChild } from '@angular/core';
import { MongoServiceService } from 'src/app/mongo-service.service';
import { IonModal } from '@ionic/angular';
import { PlateFormComponent } from '../plate-form/plate-form.component';


@Component({
  selector: 'app-dishes-finder',
  templateUrl: './dishes-finder.page.html',
  styleUrls: ['./dishes-finder.page.scss'],
})
export class DishesFinderPage implements OnInit {


  public platos:any;
  public findBar: any;
  public dishes: any;
  public plato:any;
  public selector:any = 'nombre';
  public caloriasBar: any = 0;
  public maxCalorias:number = 100;
  public minCalorias:number = 0;

  @ViewChild(IonModal) modal: IonModal | any;

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cancel() {
    this.setOpen(false);
  }


  cortarTitulo(text:string){
    return text.length>23?text.slice(0,23)+'...':text
  }
  abrirModal(receta:any){
    this.setOpen(true);
    this.plato = receta;
  }
  onWillDismiss(event: Event) {
    this.setOpen(false);
  }

  constructor(public recetasDB: MongoServiceService) { }

  ngOnInit() {
    this.getRecetas();

  }

  filtrarRecetas(){
    this.platos = this.dishes;
    let filtrados:any = [];
    switch(this.selector){
      case 'nombre':
        this.caloriasBar = this.maxCalorias;
        this.dishes.forEach((dish:any) => {
          if(dish.Receta.Nombre_receta.toLowerCase().includes(this.findBar.toLowerCase())){
            filtrados.push(dish);
          }
        });
        this.platos = filtrados;
        break;
      case 'caloria':
        this.platos = [];
        this.findBar = "";
        this.dishes.forEach((plato:any) => {
          if(plato.Energia_Kcal <= this.caloriasBar){
            filtrados.push(plato);
          }
        });
        this.platos = filtrados;
        break;
    }


    this.platos = filtrados;
  }



  getTopesCalorias(){
    let calorias:any = [];
    this.platos.forEach((plato:any) => {
      if(!calorias.includes(plato.Energia_Kcal)){
        calorias.push(plato.Energia_Kcal);
      }
    });
    calorias.sort();
    this.minCalorias = calorias[0];
    this.maxCalorias = calorias[calorias.length-1]+10;
    this.caloriasBar = this.maxCalorias;
  }

  getRecetas(){
    this.recetasDB.getRecetas().then(data => {
      this.platos = data;
      this.dishes = data;
      this.getTopesCalorias();
    })

  }
}
