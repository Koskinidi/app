<template>
    <div class="api-data-container">
        <h1>Данные с API</h1>
        <button @click="fetchData" class="fetch-button">Получить данные</button>
        <div v-if="apiData.length > 0" class="data-list">
            <div v-for="post in apiData" :key="post.id" class="data-item">
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-body">{{ post.body }}</p>
            </div>
        </div>
        <div v-else>
            <p>Данные отсутствуют. Нажмите кнопку для их получения.</p>
        </div>
    </div>
</template>

<script setup>
import { useDataStore } from '../stores/dataStore';
import {computed} from "vue"

const apiData= computed(() => store.apiData);
const store = useDataStore();
const fetchData = () => {
    store.fetchApiData();
};

</script>

<style scoped>
.api-data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.fetch-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
    margin-bottom: 20px;
}

.fetch-button:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

.data-list {
    width: 100%;
    max-width: 600px; 
    margin-top: 20px;
}

.data-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s;
}

.data-item:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.post-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px 0;
}

.post-body {
    font-size: 16px;
    color: #555;
}
</style>

