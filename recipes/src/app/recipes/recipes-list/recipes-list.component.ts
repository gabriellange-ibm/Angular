import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipes.module";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dogão', 'tasty enough', 'https://assets.folhavitoria.com.br/images/ea01fac0-10eb-11ec-808c-8f76f82badb8--minified.jpg'),
    new Recipe('Feijuca','that shit is prety good', 'https://img.cybercook.com.br/receitas/776/feijoada-840x480.jpeg?q=75')
  ];

  @Output() recipeChoose = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipeClicked: Recipe) {
    this.recipeChoose.emit(recipeClicked)
  }

}
