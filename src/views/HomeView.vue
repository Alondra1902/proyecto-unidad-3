<template>
  <div class="main-card">
    <header class="card-header">
      <h1>Proyecto Unidad 3</h1>
      <p>Explora las capacidades reactivas de Vue 3 a través de sus directivas fundamentales.</p>
    </header>

    <div class="grid-container">
      <router-link to="/v-if" class="topic-box box-blue">
        <span class="box-data">Dato: Renderizado Físico</span>
        <h3>v-if</h3>
        <p>Renderizado condicional físico en el DOM.</p>
      </router-link>

      <router-link to="/v-show" class="topic-box box-green">
        <span class="box-data">Dato: Visibilidad CSS</span>
        <h3>v-show</h3>
        <p>Control de visibilidad mediante estilos CSS.</p>
      </router-link>

      <router-link to="/v-for" class="topic-box box-orange">
        <span class="box-data">Dato: Listas Dinámicas</span>
        <h3>v-for</h3>
        <p>Iteración de listas y colecciones dinámicas.</p>
      </router-link>

      <router-link to="/v-bind-key" class="topic-box box-purple">
        <span class="box-data">Dato: Optimización</span>
        <h3>v-bind:key</h3>
        <p>Identificadores únicos para optimización.</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.main-card {
  background: white;
  max-width: 950px;
  margin: 40px auto;
  padding: 45px;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

.card-header h1 {
  font-size: 2.8rem;
  color: #1e293b;
  margin: 0;
  font-weight: 800;
}

.card-header p {
  color: #64748b;
  margin: 10px 0 40px;
  font-size: 1.1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.topic-box {
  padding: 35px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  position: relative; /* Necesario para posicionar el dato */
}

.topic-box:hover {
  transform: translateY(-4px);
  filter: saturate(1.2);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

/* Estilo para el dato añadido */
.box-data {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7); /* Texto semi-transparente */
}

.topic-box h3 {
  margin: 15px 0 8px 0; /* Espacio para el dato */
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
}

.topic-box p {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

/* COLORES VIBRANTES */
.box-blue { background-color: #0056b3; }
.box-green { background-color: #7ab800; }
.box-orange { background-color: #f39200; }
.box-purple { background-color: #9d28b0; }

@media (max-width: 700px) {
  .grid-container { grid-template-columns: 1fr; }
}
</style>