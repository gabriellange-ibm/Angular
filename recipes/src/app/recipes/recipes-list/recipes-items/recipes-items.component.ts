import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from "../../recipes.module";

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {

  @Input() recipe: Recipe
  @Output() recipeChoose = new EventEmitter<void>()


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(){
    this.recipeChoose.emit()
  }
}
