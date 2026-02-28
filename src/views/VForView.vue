<template>
  <div>
    <h2>Directiva v-for</h2>

    <p>
      La directiva <strong>v-for</strong> permite recorrer listas y renderizar elementos
      dinámicamente.
    </p>

    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">{{ index + 1 }} - {{ fruta }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const frutas = ref<string[]>(['Manzana', 'Pera', 'Naranja', 'Mango'])
</script>
