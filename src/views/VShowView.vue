<template>
  <div class="detail-card">
    <header class="detail-header">
      <div class="header-main">
        <span class="box-data">Dato: Visibilidad CSS</span>
        <h2 class="text-green">Directiva v-show</h2>
      </div>
      <p>Alterna la visibilidad de un elemento utilizando la propiedad CSS <code>display</code>. El elemento siempre permanece en el DOM.</p>
    </header>

    <hr class="separator" />

    <section class="demo-section">
      <h3>Monitor de Estilos</h3>
      
      <div class="interactive-area">
        <div v-show="isTransparent" class="status-box active-green">
          <span class="icon">🟢</span>
          <div class="code-info">
            <p><strong>Estado:</strong> Visible</p>
            <code>display: block;</code>
          </div>
        </div>

        <div v-if="!isTransparent" class="info-note">
          <p>Mira el inspector de elementos: el código sigue ahí, pero con <code>display: none;</code></p>
        </div>

        <button @click="isTransparent = !isTransparent" class="btn-green">
          ALTERNAR VISIBILIDAD
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isTransparent = ref(true);
</script>

<style scoped>
/* Contenedor principal estilo tarjeta */
.detail-card {
  background: white;
  max-width: 800px;
  margin: 20px auto;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', sans-serif;
}

.detail-header .header-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* Etiqueta de dato en la esquina */
.box-data {
  background: #f0f9e0;
  color: #7ab800;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.text-green {
  color: #7ab800;
  font-size: 2.2rem;
  margin: 10px 0;
  font-weight: 800;
}

.detail-header p {
  color: #64748b;
  font-size: 1.1rem;
}

.separator {
  border: 0;
  border-top: 1px solid #f1f5f9;
  margin: 30px 0;
}

.demo-section h3 {
  color: #1e293b;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.interactive-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Caja de estado verde */
.status-box.active-green {
  width: 100%;
  padding: 20px;
  background-color: #f0f9e0;
  color: #4a7000;
  border: 1px solid #d4eca7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.code-info code {
  background: rgba(255,255,255,0.5);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.info-note {
  background: #f8fafc;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #cbd5e1;
  color: #64748b;
  width: 100%;
  font-style: italic;
}

/* Botón Verde Slim */
.btn-green {
  background-color: #7ab800;
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.2s;
}

.btn-green:hover {
  background-color: #669900;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(122, 184, 0, 0.3);
}
</style>