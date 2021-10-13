import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
    'A super tasty schnitzel-just awesome',
    'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20),
    ]),
    new Recipe('Chicken Delicious',
    'What else you need to say ?',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg',
    [
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ])
  ];
 constructor(private slService:ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }
  addToShoppingListIngredients(ingredient:Ingredient[]){
    this.slService.addIngredientsToShopList(ingredient);
  }
}
