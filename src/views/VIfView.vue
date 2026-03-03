<template>
  <div class="detail-card">
    <header class="detail-header">
      <div class="header-main">
        <span class="box-data">Dato: Renderizado Físico</span>
        <h2 class="text-blue">Directiva v-if</h2>
      </div>
      <p>Controla la presencia física de un elemento en el DOM basándose en una expresión booleana.</p>
    </header>

    <hr class="separator" />

    <section class="demo-section">
      <h3>Consola de Estado</h3>
      
      <div class="interactive-area">
        <div v-if="isVisible" class="status-box active">
          <span class="icon">🔵</span>
          <p>¡El elemento está renderizado en el DOM!</p>
        </div>
        <div v-else class="status-box inactive">
          <span class="icon">⚪</span>
          <p>El elemento no existe actualmente en el documento.</p>
        </div>

        <button @click="isVisible = !isVisible" class="btn-blue">
          {{ isVisible ? 'ELIMINAR ELEMENTO' : 'RENDERIZAR ELEMENTO' }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);
</script>

<style scoped>
/* Contenedor centralizado (Estilo idéntico al Inicio) */
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

.box-data {
  background: #e0ecff;
  color: #0056b3;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.text-blue {
  color: #0056b3;
  font-size: 2.2rem;
  margin: 10px 0;
  font-weight: 800;
}

.detail-header p {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.5;
}

.separator {
  border: 0;
  border-top: 1px solid #f1f5f9;
  margin: 30px 0;
}

/* Área de consola/ejemplo */
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

.status-box {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.status-box.active {
  background-color: #e0ecff;
  color: #0056b3;
  border: 1px solid #bcd4f5;
}

.status-box.inactive {
  background-color: #f8fafc;
  color: #94a3b8;
  border: 1px solid #e2e8f0;
}

/* Botón estilizado tipo Aprende.org */
.btn-blue {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background 0.2s;
}

.btn-blue:hover {
  background-color: #004494;
}
</style>