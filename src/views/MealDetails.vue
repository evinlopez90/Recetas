<template>
  <!-- Contenedor principal -->
  <div class="max-w-[800px] mx-auto p-8">
    <!-- Título de la comida -->
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <!-- Imagen de la comida -->
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-[430px] rounded-sm">
    
    <!-- Sección de detalles de la comida: categoría, área, tags, instrucciones -->
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Categoria:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Etiquetas:</strong> {{ meal.strTags }}
      </div>
    </div>

    <!-- Instrucciones para preparar la comida -->
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <!-- Listas de ingredientes y medidas -->
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredientes</h2>
        <ul>
          <!-- Iteración para mostrar ingredientes -->
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Medidas</h2>
        <ul>
          <!-- Iteración para mostrar medidas -->
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- Botones para ver video y enlace a la fuente original -->
      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importación de funciones y herramientas de Vue
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient'; // Importación de Axios
import YouTubeButton from '../components/YouTubeButton.vue'; // Importación del componente YouTubeButton

// Uso de la ruta actual
const route = useRoute();

// Referencia reactiva para almacenar los detalles de la comida
const meal = ref({})

// Función que se ejecuta al montar el componente
onMounted(() => {
  // Realiza una petición GET para obtener los detalles de la comida basado en el ID de la ruta
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {} // Almacena los detalles de la comida en la referencia reactiva
    })
})
</script>
