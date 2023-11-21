// Importación de axiosClient que  es una instancia de Axios configurada
import axiosClient from '../axiosClient';

// Función para buscar comidas por palabra clave (keyword)
export function searchMeals({ commit }, keyword) {
  // Realiza una petición GET para buscar comidas por palabra clave utilizando Axios
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      // Llama a 'commit' con una mutación 'setSearchedMeals' para almacenar los resultados en el estado
      commit('setSearchedMeals', data.meals)
    })
}

// Función para buscar comidas por letra (letter)
export function searchMealsByLetter({ commit }, letter) {
  // Realiza una petición GET para buscar comidas por letra utilizando Axios
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      // Llama a 'commit' con una mutación 'setMealsByLetter' para almacenar los resultados en el estado
      commit('setMealsByLetter', data.meals)
    })
}

// Función para buscar comidas por ingrediente (ing)
export function searchMealsByIngredient({ commit }, ing) {
  // Realiza una petición GET para buscar comidas por ingrediente utilizando Axios
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      // Llama a 'commit' con una mutación 'setMealsByIngredients' para almacenar los resultados en el estado
      console.log(data.meals);
      commit('setMealsByIngredients', data.meals)
    })
}
