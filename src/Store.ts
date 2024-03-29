import { defineStore } from "pinia";


interface Recipe {
    name: string;
    temperature: string;
    creamer: string;
    syrup: string;
    beverage: string;
  }

interface BeverageState {
    recipes: Record<string, Recipe>
}

export const useStore = defineStore("Store", {
    state: (): BeverageState => ({
        recipes: {},
    }),
});