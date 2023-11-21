<template>
  <!-- Contenedor principal del elemento de comida -->
  <div class=" md:w-[375px] h-[370px] shadow rounded-xl hover:scale-105 transition-all">
    <!-- Enlace para redirigir a los detalles de la comida usando Vue Router -->
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <!-- Imagen de la comida, enlazada a los detalles de la comida -->
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-44 object-cover"
      />
    </router-link>
    <!-- Contenido de información de la comida -->
    <div class="p-3">
      <!-- Nombre de la comida -->
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <!-- Descripción corta de las instrucciones de preparación -->
      <p class="mb-4 text-[12px] text-gray-400 ">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <!-- Botón para abrir enlace de YouTube relacionado con la comida -->
      <div class="-mt-4">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Importación del componente YouTubeButton
import YouTubeButton from './YouTubeButton.vue';

// Definición de las propiedades usando la sintaxis del nuevo script setup
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
