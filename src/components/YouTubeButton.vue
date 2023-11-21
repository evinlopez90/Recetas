<template>
  <!-- Elemento de anclaje con estilos específicos -->
  <a
   
    :href="href"       
    target="_blank"     
    class=" flex justify-center items-center gap-1 w-20 h-7 text-[13px] rounded px-2 py-1 text-white   transition-colors"  
  >
    <slot>YouTube</slot> <!-- Contenido del enlace, por defecto muestra 'YouTube' -->
    <img src="https://cdn-icons-png.flaticon.com/128/11210/11210387.png" alt="" class="h-4">
  </a>
</template>

<script setup>
// Definición de propiedades usando la sintaxis del nuevo script setup
const props = defineProps({
  href: String   // La propiedad href se espera que sea de tipo String -->
})
</script>

