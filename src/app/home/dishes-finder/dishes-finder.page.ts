import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-finder',
  templateUrl: './dishes-finder.page.html',
  styleUrls: ['./dishes-finder.page.scss'],
})
export class DishesFinderPage implements OnInit {

  public dishes = [
    {
      "dishName": "Chicken Stir Fried",
      "cookingTime": "20 minutos",
      "cookingTotalTime": "25 minutos",
      "portions": 4,
      "totalCost": "$14.00",
      "totalCalories": {
        "carbsPercent": 50,
        "fatPercent": 30,
        "proteinPercent": 20
      },
      "image": "https://example.com/chicken_stir_fried.jpg"
    },
    {
      "dishName": "Jambalaya",
      "cookingTime": "35 minutos",
      "cookingTotalTime": "40 minutos",
      "portions": 6,
      "totalCost": "$31.50",
      "totalCalories": {
        "carbsPercent": 60,
        "fatPercent": 25,
        "proteinPercent": 15
      },
      "image": "https://example.com/jambalaya.jpg"
    },
    {
      "dishName": "Chicken Marsala",
      "cookingTime": "30 minutos",
      "cookingTotalTime": "35 minutos",
      "portions": 3,
      "totalCost": "$14.25",
      "totalCalories": {
        "carbsPercent": 45,
        "fatPercent": 35,
        "proteinPercent": 20
      },
      "image": "https://example.com/chicken_marsala.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
