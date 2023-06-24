import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-preference',
  templateUrl: './user-preference.page.html',
  styleUrls: ['./user-preference.page.scss'],
})
export class UserPreferencePage implements OnInit {

  public user = {
    documentID: '40345039395395035',
    image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    fullname: 'Otto Tito Rivas López',
    username: 'Ottotito_9',
    menuType: ['normal'],
    allergies: [],
    pricePreference: null,
    nutriotionalValue: {
      carbs: 10,
      proteins: 90,
      fat: 40
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
