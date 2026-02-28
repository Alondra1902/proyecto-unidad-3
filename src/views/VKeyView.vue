<template>
  <div>
    <h2>Uso de v-bind:key</h2>

    <p>
      La propiedad <strong>v-bind:key</strong> permite identificar de manera única cada elemento
      dentro de un bucle.
    </p>

    <ul>
      <li v-for="alumno in alumnos" :key="alumno.id">
        {{ alumno.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Alumno {
  id: number
  nombre: string
}

const alumnos = ref<Alumno[]>([
  { id: 1, nombre: 'Cesar' },
  { id: 2, nombre: 'Leonardo' },
  { id: 3, nombre: 'Alondra' },
])
</script>
