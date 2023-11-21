<template>
  <!-- Encabezado de la página -->
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredientes</h1>
  </div>
  <!-- Contenedor de búsqueda de ingredientes -->
  <div class="px-8">
    <div class="px-8 pb-3 flex">
      <input
      type="text"
      v-model="keyword"
      class="rounded border-none  bg-transparent  focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Buscar por Ingredientes"
    />
    <img src="https://cdn-icons-png.flaticon.com/128/200/200941.png" alt="" class="relative h-5 right-10 
     top-3">
    </div>
    <!-- Listado de ingredientes -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <!-- Iteración sobre los ingredientes -->
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-gray-900 text-gray-400 rounded p-3 mb-3 shadow"
      >
        <h3 class="text-[17px] font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
// Importación de las funciones y herramientas de Vue
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient"; // Importación de Axios
import store from "../store"; // Importación del store de Vuex

// Instancia del enrutador de Vue
const router = useRouter();

// Referencia reactiva para el término de búsqueda
const keyword = ref("");

// Referencia reactiva para almacenar los ingredientes
const ingredients = ref([]);

// Función computada que filtra los ingredientes basados en la búsqueda
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

// Función para abrir un ingrediente y dirigirse a la ruta correspondiente
function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

// Función que se ejecuta al montar el componente
onMounted(() => {
  // Obtiene la lista de ingredientes utilizando una petición GET con Axios
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals; // Almacena los ingredientes obtenidos en la referencia reactiva
  });
});
</script>
