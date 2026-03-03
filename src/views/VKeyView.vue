<template>
  <div class="detail-card">
    <header class="detail-header">
      <div class="header-main">
        <span class="box-data">Dato: Optimización</span>
        <h2 class="text-purple">Directiva v-bind:key</h2>
      </div>
      <p>Proporciona una identidad única a cada nodo para que Vue pueda rastrear qué elementos han cambiado, se han añadido o eliminado eficientemente.</p>
    </header>

    <hr class="separator" />

    <section class="demo-section">
      <h3>Rastreo de Identidades Únicas</h3>
      
      <div class="key-container">
        <div v-for="usuario in usuarios" :key="usuario.id" class="user-card">
          <div class="id-badge">ID: {{ usuario.id }}</div>
          <div class="user-info">
            <span class="user-avatar">{{ usuario.avatar }}</span>
            <span class="user-name">{{ usuario.nombre }}</span>
          </div>
          <div class="key-label"><code>key="{{ usuario.id }}"</code></div>
        </div>
      </div>

      <div class="info-note-purple">
        <p><strong>¿Por qué es importante?</strong> Sin la <code>key</code>, Vue podría reutilizar componentes de forma incorrecta al ordenar o filtrar, causando errores visuales.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const usuarios = ref([
  { id: 101, nombre: 'Ana García', avatar: '👩‍💻' },
  { id: 102, nombre: 'Carlos Ruiz', avatar: '👨‍🎨' },
  { id: 103, nombre: 'Elena Mora', avatar: '👩‍🔬' }
]);
</script>

<style scoped>
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
  background: #f3f0ff;
  color: #9d28b0;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.text-purple {
  color: #9d28b0;
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

/* Contenedor de tarjetas de usuario */
.key-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fcfaff;
  padding: 15px 20px;
  border-radius: 12px;
  border: 1px solid #e9d5ff;
  transition: all 0.2s ease;
}

.user-card:hover {
  border-color: #9d28b0;
  transform: scale(1.01);
}

.id-badge {
  background: #9d28b0;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  margin-left: 20px;
}

.user-avatar {
  font-size: 1.5rem;
}

.user-name {
  font-weight: 600;
  color: #1e293b;
}

.key-label code {
  color: #9d28b0;
  background: #f3f0ff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.info-note-purple {
  background: #fdfaff;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #9d28b0;
  color: #6b21a8;
}
</style>