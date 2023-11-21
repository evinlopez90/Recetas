<template>
  <!-- Encabezado de la página -->
  <header class="  h-16 flex flex-col items-center md:flex-row md:justify-between md:items-stretch">
    <!-- Enlace para ir a la página principal -->
    <router-link
      :to="{ name: 'home' }"
      class="py-5 md:ml-24  h-10 md:mt-2 flex justify-center items-center gap-2 md:w-16 "
    >
    
    <img src="https://cdn-icons-png.flaticon.com/128/609/609803.png" alt="Home" class="h-4 ">
    Home
    </router-link>
    <!-- Contenedor para los enlaces de navegación -->
    <div class="flex items-center md:mr-24  gap-1">
      <!-- Enlace para buscar comidas por nombre -->
      <router-link
        :to="{ name: 'byName' }"
        class="  inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
      Buscar comidas
      </router-link>
      <!-- Enlace para buscar comidas por letra -->
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
      Por letra
      </router-link>
      <!-- Enlace para buscar comidas por ingredientes -->
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
      Por Ingredientes
      </router-link>
    </div>
  </header>
</template>
