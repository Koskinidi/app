<template>
    <div class="form-container">
        <h1 class="form-title">Форма отправки данных</h1>
        <form @submit.prevent="submitForm" class="data-form">
            <label for="title">Заголовок:</label>
            <input type="text" v-model="form.title" required class="form-input" />

            <label for="body">Текст:</label>
            <textarea v-model="form.body" required class="form-textarea"></textarea>

            <button type="submit" class="submit-button">Отправить</button>
        </form>
    </div>
</template>

<script>
import { ref, useId } from 'vue';
import { useDataStore } from '../stores/dataStore';

export default {
    name: 'Form',
    setup() {
        const store = useDataStore();
        const form = ref({ title: '', body: '', useId: 1});

        const submitForm = () => {
            store.submitForm(form.value);
            alert('Данные успешно отправлены!');
            form.value.title = '';
            form.value.body = '';
        };

        return { form, submitForm };
    },
};
</script>

<style scoped>
.form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.form-title {
    text-align: center;
    margin-bottom: 20px;
}

.data-form {
    display: flex;
    flex-direction: column;
}

.form-input, .form-textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-textarea {
    resize: vertical;
}

.submit-button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.submit-button:hover {
    background-color: #45a049;
}
</style>
