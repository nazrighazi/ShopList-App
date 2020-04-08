import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { parseTemplate } from '@angular/compiler';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]= [
        new Recipe('Udang Berlada', 'Ada udang la','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',[new Ingredient( 'prawn',1 ), new Ingredient('onion',1), new Ingredient('sugar', 1)]),
        new Recipe('Ayam Masak Merah', 'Ada ayam','https://1.bp.blogspot.com/-puhJ3p8CbNo/ULhh7PpEoII/AAAAAAAAAHA/6kQH_SwXEic/s1600/IMG_9832.JPG',[ new Ingredient('chicken',1), new Ingredient('salt',1) ])
      ];

      constructor(private shopListService: ShoppingListService){

      }

      getRecipes() {
          return this.recipes.slice();
      }
    
      getRecipe(index:number){
        return this.recipes.slice()[index];
      }
      addIngredientToShopList(ingredients: Ingredient[]){
        this.shopListService.addIngredients(ingredients);
      }
}