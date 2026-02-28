<template>
  <div>
    <h2>Directiva v-show</h2>

    <p>
      La directiva <strong>v-show</strong> muestra u oculta elementos utilizando CSS sin eliminarlos
      del DOM.
    </p>

    <button @click="mostrar = !mostrar">Mostrar / Ocultar mensaje</button>

    <p v-show="mostrar">Este mensaje se oculta o muestra usando v-show.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mostrar = ref<boolean>(false)
</script>
