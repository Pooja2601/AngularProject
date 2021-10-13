import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredientsToShopList(ingredients:Ingredient[]){
    //It will emit lots of event
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient);
    // }
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.next(this.ingredients.slice());
  }
}
