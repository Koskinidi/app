import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('data', {
    state: () => ({
        apiData: [],
        submittedData: [], 
    }),
    actions: {
        async fetchApiData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.apiData = response.data;
                console.log('Данные получены:', this.apiData);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        submitForm(data) {
        
            this.submittedData.push(data);
            console.log('Данные отправлены:', data);

          
            this.apiData.push({ id: this.submittedData.length + 100, ...data });
        },
    },
});
