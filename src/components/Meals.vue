<template>
  <!-- Contenedor de rejilla para mostrar elementos de comida -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
    <!-- Iteración a través de las comidas para mostrar cada elemento -->
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <!-- Mensaje para mostrar cuando no hay comidas disponibles -->
  <div v-if="!meals.length" class="flex justify-center text-gray-400 p-8">
    No hay comidas
  </div>
</template>

<script setup>
// Importación del componente MealItem
import MealItem from './MealItem.vue';

// Definición de las propiedades usando la sintaxis del nuevo script setup
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
})
</script>
