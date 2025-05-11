<script setup>
import { onMounted } from "vue";
import { useApiStore } from "@/stores/api";

const api = useApiStore();

onMounted(() => {
  api.makeQuery();
});
</script>

<template>
    <div class="main-content">
        <h1>Добро пожаловать в наше SPA!</h1>
        <p>Это главная страница.</p>
        <p>Это приложение на Vue.js, которое показывает работу с API и отправку данных через форму.</p>
        <div class="linkDiv">
            <RouterLink class="button-link" to="/api-data">Получить данные с API</RouterLink>
            <RouterLink class="button-link" to="/form">Отправить данные через форму</RouterLink>
        </div>

        
    </div>
</template>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 20px;
}

.linkDiv {
    display: flex;
    gap: 30px;
}

.button-link {
    padding: 1rem 2rem; 
    border: none; 
    border-radius: 5px; 
    background-color: #4CAF50; 
    color: white;
    font-weight: bold; 
    text-decoration: none; 
    transition: background-color 0.3s, transform 0.3s; 
}

.button-link:hover {
    background-color: #45a049; 
    transform: scale(1.05); 
}
</style>