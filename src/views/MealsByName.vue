<template>
  <!-- Encabezado de la página -->
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Buscar comidas por nombre</h1>
  </div>

  <!-- Campo de búsqueda de comidas por nombre -->
  <div class="px-8 pb-3 flex">
    <input
      type="text"
      v-model="keyword"
      class="rounded bg-transparent border border-gray-500 border-none  focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Buscar por nombre"
      @change="searchMeals"
    />
    <img src="https://cdn-icons-png.flaticon.com/128/200/200941.png" alt="" class="relative h-5 right-10 
     top-3">
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

// Referencia reactiva para el término de búsqueda
const keyword = ref("");

// Computed para obtener las comidas buscadas desde el store de Vuex
const meals = computed(() => store.state.searchedMeals);

// Función para buscar comidas por nombre
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value); // Despacha una acción para buscar comidas por el término ingresado
  } else {
    store.commit("setSearchedMeals", []); // Si no hay término de búsqueda, se vacía la lista de comidas buscadas
  }
}

// Función que se ejecuta al montar el componente
onMounted(() => {
  keyword.value = route.params.name // Obtiene el nombre de la comida de los parámetros de la ruta
  if (keyword.value) {
    searchMeals() // Realiza la búsqueda de comidas si se proporciona un nombre en la ruta al cargar la página
  }
})
</script>
