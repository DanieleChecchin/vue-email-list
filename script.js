const { createApp } = Vue

createApp({
    data() {
        return {
            email: '',
            booleanApiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.booleanApiUrl)
                .then((response) => { //Il parametro può chiamarsi in qualsiasi modo
                    this.email = response.data.response;
                });
        }
    },
    mounted() {
        this.getRandomEmail();
    }
}).mount('#app')






/**
 * Descrizione:
Attraverso l'apposita API di Boolean
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */