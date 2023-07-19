import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-plate-form',
  templateUrl: './plate-form.component.html',
  styleUrls: ['./plate-form.component.scss'],
})
export class PlateFormComponent  implements OnInit {
  recetaForm: FormGroup | any;
  fotoPlato: File | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recetaForm = this.formBuilder.group({
      nombreReceta: ['', Validators.required],
      entrada: ['', Validators.required],
      hidratosCarb: ['', Validators.required],
      tiempoPreparacion: ['', Validators.required],
      energiaKcal: ['', Validators.required],
      lipidosG: ['', Validators.required],
      proteinasG: ['', Validators.required]
    });
  }

  handleFileInput(event: any) {
    this.fotoPlato = event.target.files[0];
  }

  submitForm() {
    // Procesar los datos del formulario aquí
    const formData = new FormData();
    formData.append('nombreReceta', this.recetaForm.value.nombreReceta);
    formData.append('entrada', this.recetaForm.value.entrada);
    formData.append('hidratosCarb', this.recetaForm.value.hidratosCarb);
    formData.append('fotoPlato', this.fotoPlato);
    formData.append('tiempoPreparacion', this.recetaForm.value.tiempoPreparacion);
    formData.append('energiaKcal', this.recetaForm.value.energiaKcal);
    formData.append('lipidosG', this.recetaForm.value.lipidosG);
    formData.append('proteinasG', this.recetaForm.value.proteinasG);

    // Enviar formData al servidor o realizar otras acciones necesarias
    // Ejemplo de envío a través de HttpClient:
    // this.http.post('/api/guardar-receta', formData).subscribe(response => {
    //   // Procesar la respuesta del servidor
    // });
  }

  /*
  import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  recetaForm: FormGroup;
  fotoPlato: File;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recetaForm = this.formBuilder.group({
      nombreReceta: ['', Validators.required],
      entrada: ['', Validators.required],
      hidratosCarb: ['', Validators.required],
      tiempoPreparacion: ['', Validators.required],
      energiaKcal: ['', Validators.required],
      lipidosG: ['', Validators.required],
      proteinasG: ['', Validators.required]
    });
  }

  handleFileInput(event: any) {
    this.fotoPlato = event.target.files[0];
  }

  submitForm() {
    // Procesar los datos del formulario aquí
    const formData = new FormData();
    formData.append('nombreReceta', this.recetaForm.value.nombreReceta);
    formData.append('entrada', this.recetaForm.value.entrada);
    formData.append('hidratosCarb', this.recetaForm.value.hidratosCarb);
    formData.append('fotoPlato', this.fotoPlato);
    formData.append('tiempoPreparacion', this.recetaForm.value.tiempoPreparacion);
    formData.append('energiaKcal', this.recetaForm.value.energiaKcal);
    formData.append('lipidosG', this.recetaForm.value.lipidosG);
    formData.append('proteinasG', this.recetaForm.value.proteinasG);

    // Enviar formData al servidor o realizar otras acciones necesarias
    // Ejemplo de envío a través de HttpClient:
    // this.http.post('/api/guardar-receta', formData).subscribe(response => {
    //   // Procesar la respuesta del servidor
    // });
  }
}


  */

}
