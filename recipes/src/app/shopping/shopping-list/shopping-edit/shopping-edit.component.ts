import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static:false }) amountInputRef: ElementRef

  @Output() newIngredient = new EventEmitter<Ingredient>()
  @Output() removeIngredient = new EventEmitter<void>()
  @Output() clear = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  // addIngredients(ingredientAdd: Ingredient){
  //   this.newIngredient.emit(ingredientAdd)
  // }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const nIngredient = new Ingredient(ingName, ingAmount)
    this.newIngredient.emit(nIngredient)
  }

  deleteIngredient(){
    this.removeIngredient.emit()
  }

  clearIngredients(){
    this.clear.emit()
  }
}
