<template>
  <!-- Encabezado de la página -->
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Comidas por {{ ingredient.strIngredient }}</h1>
    <!-- Muestra el nombre del ingrediente para el cual se están mostrando las comidas -->
  </div>

  <!-- Componente Meals para mostrar las comidas -->
  <Meals :meals="meals" />
</template>

<script setup>
// Importación de funciones y herramientas de Vue
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store"; // Importación del store de Vuex
import Meals from '../components/Meals.vue' // Importación del componente Meals

// Uso de la ruta actual
const route = useRoute();

// Uso de la información del ingrediente desde el store de Vuex
const ingredient = computed(() => store.state.ingredient);

// Uso de las comidas asociadas al ingrediente desde el store de Vuex
const meals = computed(() => store.state.mealsByIngredient);
console.log(meals.value);
// Función que se ejecuta al montar el componente para buscar comidas por ingrediente
onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
  // Despacha una acción para buscar comidas por el ingrediente proporcionado en la ruta
});
</script>

