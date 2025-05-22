<template>
  <div class="crud-container">
    <h1>CRUD de tasques</h1>
    <form @submit.prevent="addTask" class="task-form">
      <input
          v-model="newTask"
          placeholder="Tasca nova"
          class="task-input"
          autocomplete="off"
      />
      <button type="submit" class="add-btn">Afegir</button>
    </form>

    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <label>
          <input type="checkbox" v-model="task.done" />
          <span :class="{ done: task.done }">{{ task.text }}</span>
        </label>
        <button @click="removeTask(task.id)" class="remove-btn" aria-label="Eliminar tasca">
          ✕
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'

const tasks = ref([])
const newTask = ref('')

// Cargar tareas desde localStorage al iniciar
onMounted(() => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
})

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    text: newTask.value.trim(),
    done: false,
  })
  newTask.value = ''
}

function removeTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

// Guardar en localStorage cada vez que cambian las tareas
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })
</script>


<style scoped>
.crud-container {
  max-width: 480px;
  margin: 50px auto;
  padding: 20px 30px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.07);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 24px;
  font-weight: 700;
}

.task-form {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.task-input {
  flex: 1;
  padding: 10px 14px;
  font-size: 1rem;
  border: 2px solid #42b983;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.task-input:focus {
  outline: none;
  border-color: #2a6f3a;
}

.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.add-btn:hover {
  background-color: #2a6f3a;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(66, 185, 131, 0.1);
  transition: box-shadow 0.3s ease;
}

.task-item:hover {
  box-shadow: 0 6px 18px rgba(66, 185, 131, 0.2);
}

.task-item label {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  cursor: pointer;
  font-size: 1.05rem;
  user-select: none;
}

.task-item input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #888d94;
}

.remove-btn {
  background: transparent;
  border: none;
  color: #ff4d4f;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0 6px;
  transition: color 0.25s ease;
  user-select: none;
}

.remove-btn:hover {
  color: #b22222;
}
@media (max-width: 500px) {
  .footer {
    font-size: 0.8rem;
    padding: 8px 0;
  }
}

</style>
