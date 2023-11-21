<template>
  <!-- Encabezado de la página -->
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Buscar comidas por letra</h1>
  </div>

  <!-- Enlaces para cada letra del alfabeto -->
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <!-- Iteración para cada letra -->
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <!-- Componente Meals para mostrar las comidas -->
  <Meals :meals="meals" />
</template>

<script setup>
// Importación de funciones y herramientas de Vue
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store"; // Importación del store de Vuex
import Meals from "../components/Meals.vue"; // Importación del componente Meals

// Uso de la ruta actual
const route = useRoute();

// Arreglo de letras del alfabeto
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Computed para obtener las comidas filtradas por letra desde el store de Vuex
const meals = computed(() => store.state.mealsByLetter);

// Función de watcher para buscar comidas cuando cambia la ruta (letra seleccionada)
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

// Función que se ejecuta al montar el componente para buscar comidas por la letra inicial
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
