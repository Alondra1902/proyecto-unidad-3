<template>
  <div class="detail-card">
    <header class="detail-header">
      <div class="header-main">
        <span class="box-data">Dato: Listas Dinámicas</span>
        <h2 class="text-orange">Directiva v-for</h2>
      </div>
      <p>Permite renderizar una lista de elementos basándose en un arreglo o un objeto, repitiendo la estructura por cada ítem.</p>
    </header>

    <hr class="separator" />

    <section class="demo-section">
      <h3>Inventario de Frutas Animado</h3>
      
      <div class="list-container">
        <div v-for="(item, index) in frutas" :key="index" class="list-item">
          <div class="item-index">{{ index + 1 }}</div>
          <div class="item-content">
            <span class="item-name">
              <span class="fruit-emoji">{{ item.emoji }}</span> {{ item.nombre }}
            </span>
            <span class="item-tag">Disponible</span>
          </div>
        </div>
      </div>

      <button @click="agregarFruta" class="btn-orange">
        ➕ AGREGAR FRUTA ALEATORIA
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Lista inicial con objetos para manejar nombre y emoji
const frutas = ref([
  { nombre: 'Manzana', emoji: '🍎' },
  { nombre: 'Plátano', emoji: '🍌' },
  { nombre: 'Fresa', emoji: '🍓' },
  { nombre: 'Uva', emoji: '🍇' }
]);

const agregarFruta = () => {
  const extras = [
    { nombre: 'Mango', emoji: '🥭' },
    { nombre: 'Piña', emoji: '🍍' },
    { nombre: 'Sandía', emoji: '🍉' },
    { nombre: 'Kiwi', emoji: '🥝' },
    { nombre: 'Cereza', emoji: '🍒' }
  ];
  const nueva = extras[Math.floor(Math.random() * extras.length)];
  
  // Evitar duplicados simples para el ejemplo
  if (!frutas.value.some(f => f.nombre === nueva.nombre)) {
    frutas.value.push(nueva);
  }
};
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
  background: #fff4e5;
  color: #f39200;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.text-orange {
  color: #f39200;
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

.list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.list-item {
  display: flex;
  align-items: center;
  background: #f8fafc;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.list-item:hover {
  transform: scale(1.02);
  border-color: #f39200;
  background-color: #fffaf0;
}

.item-index {
  background: #f39200;
  color: white;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  margin-right: 15px;
}

.item-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.item-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fruit-emoji {
  font-size: 1.5rem;
}

.item-tag {
  font-size: 0.75rem;
  background: #dcfce7;
  color: #15803d;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 700;
}

.btn-orange {
  background-color: #f39200;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  font-size: 1rem;
}

.btn-orange:hover {
  background-color: #d68100;
  box-shadow: 0 6px 20px rgba(243, 146, 0, 0.3);
}
</style>