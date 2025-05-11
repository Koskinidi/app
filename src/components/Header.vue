<template>
    <header class="app_header">
        <RouterLink class="link" to="/">Главная</RouterLink>
        <RouterLink class="link" to="/form">Форма</RouterLink>
        <RouterLink class="link" to="/api-data">API Данные</RouterLink>
    </header>
</template>

<style scoped>
.app_header {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 10px 20px; 
    background-color: #f8f9fa; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.link {
    text-decoration: none;
    color: #000; 
    transition: color 0.3s, transform 0.3s;
    font-weight: bold;
    font-size: 18px;
}

.link:hover {
    color: #333;
}

</style>