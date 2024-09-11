const { createApp } = Vue

createApp({
    data() {
        return {
            email: '',
            booleanApiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailArray: [],
        }
    },
    methods: {
        getRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.booleanApiUrl)
                    .then((response) => { //Il parametro può chiamarsi in qualsiasi modo
                        console.log(response);
                        this.email = response.data.response;
                        console.log(this.email);
                        this.emailArray.push(this.email);
                        console.log(this.emailArray)
                    }
                    );
            }
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