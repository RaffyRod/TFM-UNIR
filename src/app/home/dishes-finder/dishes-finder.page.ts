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
    console.log(this.plato)
  }
  onWillDismiss(event: Event) {
    this.setOpen(false);
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   // this.message = `Hello, ${ev.detail.data}!`;
    // }
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
