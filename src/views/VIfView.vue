<template>
  <div>
    <h2>Directiva v-if / v-else-if / v-else</h2>

    <p>
      La directiva <strong>v-if</strong> permite renderizar contenido condicionalmente según el
      valor de una expresión.
    </p>

    <input v-model="edad" type="number" placeholder="Ingresa tu edad" />

    <p v-if="edad >= 18">Eres mayor de edad</p>
    <p v-else-if="edad > 0">Eres menor de edad</p>
    <p v-else>Ingresa una edad válida</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const edad = ref<number>(0)
</script>
