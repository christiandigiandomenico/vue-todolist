const { createApp } = Vue;

createApp({
    data() {
        return {

            tasks: [

                {
                    text: 'Comprare le patate',
                    done: false
                }, {
                    text: 'Fare esercizio',
                    done: true
                }, {
                    text: 'Portare fuori il cane',
                    done: false
                }, {
                    text: 'Contattare Cassone',
                    done: false
                }, {
                    text: 'Ricordare a Cassone che non mi sta simpatico',
                    done: false
                }, {
                    text: 'Aggiustare il lavandino',
                    done: true
                }

            ]

        }
    }
}).mount("#app");