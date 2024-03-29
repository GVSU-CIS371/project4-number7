import { defineStore } from "pinia";


interface Recipe {
    name: string;
    temperature: string;
    creamer: string;
    syrup: string;
    beverage: string;
  }

export const useStore = defineStore("Store", {
    state: () => ({
        recipes: [] as Recipe[], // array to hold recipes
    }),

    actions: {
        addRecipe(recipe: Recipe) {
            this.recipes.push(recipe);
        },
        findRecipeByName(name: string) {
            return this.recipes.find((recipe) => recipe.name === name);
        },
    },
});