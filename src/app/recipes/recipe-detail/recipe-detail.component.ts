import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
 onAddToShoppingList(){
   console.log(this.recipe.ingredients);
this.recipeService.addToShoppingListIngredients(this.recipe.ingredients);
// for(var i = 0; i < this.recipe.ingredients.length; i++){
//   this.slService.addIngredients(this.recipe.ingredients[i]);
// }

 }
 onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route});
  // this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route}); // one step above navigation
 }
}
