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
    this.plato.Entrada.ingredientesCantidad = [];
    this.plato.Entrada.preparacion = this.plato.Entrada.Preparación;
    receta.Entrada.Ingredientes.forEach((ingrediente:string,key:number) => {
      let concatenacion = receta.Entrada.Cantidad[key]+' de '+ingrediente;
      this.plato.Entrada.ingredientesCantidad.push(concatenacion);
    });
    console.log(this.plato)
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
