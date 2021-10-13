import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService:ShoppingListService) { }

ngOnInit(): void {
}
onAddItem(form:NgForm){
const value = form.value;

// const ingName = this.nameInputRef.nativeElement.value;
// const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(value.name, value.amount);
// this.ingredientAdded.emit(newIngredient);
this.slService.addIngredients(newIngredient);

}
}
