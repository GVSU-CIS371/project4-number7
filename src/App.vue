<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`rtemp${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`rcreamer${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`rsyrup${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`rbase${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
      <li>
        <span>Name: </span>
        <input 
          type="text"
          name="Name"
          v-model="currentName"
        />
        <button @click="makeBeverage">Make Beverage</button>
      </li>
      <ul>
        <li v-for="(recipe) in store.recipes">
         
          <button @click="loadBeverage(recipe)"> {{recipe.name}}</button>
        </li>
        
      </ul>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useStore } from "./Store"; 

const store = useStore();

// Define reactive data
const temps = ref(["Hot", "Cold"]);
let currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
let currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
let currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
let currentBeverage = ref("Coffee");
const currentName = ref("");

function makeBeverage(){
  store.$patch({
    recipes: {
      [currentName.value]: {
        name: currentName.value,
        temperature: currentTemp.value,
        creamer: currentCreamer.value,
        syrup: currentSyrup.value,
        beverage: currentBeverage.value,
      }
    }
  })

}
function loadBeverage(recipe: { temperature: string; creamer: string; syrup: string; beverage: string; }){
  currentTemp.value = recipe.temperature;
  currentCreamer.value = recipe.creamer;
  currentSyrup.value = recipe.syrup;
  currentBeverage.value = recipe.beverage;

}


</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
