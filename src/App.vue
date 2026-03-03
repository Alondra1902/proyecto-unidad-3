<template>
  <div class="app-container">
    <div class="top-stripe"></div>

    <nav class="navbar">
      <div class="nav-wrapper">
        <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
        <router-link to="/v-if" class="nav-link text-blue" active-class="active">v-if</router-link>
        <router-link to="/v-show" class="nav-link text-green" active-class="active">v-show</router-link>
        <router-link to="/v-for" class="nav-link text-orange" active-class="active">v-for</router-link>
        <router-link to="/v-bind-key" class="nav-link text-purple" active-class="active">v-bind:key</router-link>
      </div>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Estilos Globales Seguros */
body {
  margin: 0;
  padding: 0;
  background-color: #f4f7f9;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.top-stripe {
  height: 45px;
  background-color: #0056b3;
  width: 100%;
}

.navbar {
  background-color: white;
  border-bottom: 1px solid #e1e8ed;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #1a1a1a; /* Color por defecto */
  font-weight: 700;
  font-size: 1.1rem;
  padding: 20px 5px;
  position: relative;
  transition: color 0.2s;
}

/* Clases de color específicas para los enlaces de directivas */
.nav-link.text-blue { color: #0056b3; }
.nav-link.text-green { color: #7ab800; }
.nav-link.text-orange { color: #f39200; }
.nav-link.text-purple { color: #9d28b0; }

/* Estilo para el link activo (Inicio y otros) */
.nav-link.active {
  color: #0056b3; /* Color azul para el activo */
}

/* La línea azul debajo del link activo */
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #0056b3; /* Mismo azul que el activo */
  border-radius: 2px 2px 0 0;
}

.content {
  padding: 20px;
}
</style>