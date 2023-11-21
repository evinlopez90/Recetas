<template>
  <!-- Contenedor principal -->
  <div class="p-8 pb-0 text-orange-500">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold mb-4">Comidas aleatorias</h1>
  </div>
  <!-- Componente Meals para mostrar las comidas -->
  <Meals :meals="meals" />
</template>

<script setup>
// Importación de funciones y componentes de Vue
import { computed, onMounted, ref } from "vue";
import Meals from "../components/Meals.vue"; // Importación del componente Meals
import axiosClient from "../axiosClient.js"; // Importación de Axios (axiosClient)

// Creación de una referencia reactiva para almacenar las comidas
const meals = ref([]);

// Función que se ejecuta cuando el componente está montado
onMounted(async () => {
  // Bucle para obtener 10 comidas aleatorias
  for (let i = 0; i < 10; i++) {
    // Realiza una petición GET para obtener una comida aleatoria utilizando Axios
    axiosClient
      .get(`random.php`)
      .then(({ data }) => {
        // Agrega la primera comida de la respuesta al arreglo de comidas (meals)
        meals.value.push(data.meals[0]);
      });
  }
});
</script>
