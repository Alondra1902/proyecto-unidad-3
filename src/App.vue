<template>
  <div>
    <h1>Proyecto Unidad 3</h1>

    <nav>
      <router-link to="/">Inicio</router-link> | <router-link to="/v-if">v-if</router-link> |
      <router-link to="/v-show">v-show</router-link> |
      <router-link to="/v-for">v-for</router-link> |
      <router-link to="/v-key">v-bind:key</router-link>
    </nav>

    <router-view />
  </div>
</template>
