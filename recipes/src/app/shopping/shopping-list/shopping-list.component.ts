import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('carrot', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }

  deleteIngredient(){
    this.ingredients.splice(this.ingredients.length-1,1)
  }

  clearIngredients(){
    this.ingredients = []

  }
}
