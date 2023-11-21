// Función que recibe un string (str) y un número (count) para truncar el texto por cantidad de palabras
export function truncateWords(str, count) {
  // Verifica si el string es falsy o vacío, y en ese caso devuelve el mismo string
  if (!str) return str;

  // Divide el string en un array de palabras utilizando el espacio como separador
  const wordsArray = str.split(" ");

  // Toma un subconjunto del array con las primeras 'count' palabras y las une en un nuevo string con espacios
  const truncatedString = wordsArray.slice(0, count).join(" ");

  // Devuelve el string truncado
  return truncatedString;
}
