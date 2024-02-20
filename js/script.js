const { createApp } = Vue;

createApp({
    data() {
        return {

            newTask: '',

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
    },

    methods: {

        deleteTask(taskIndex) {

            this.tasks.splice(taskIndex, 1);

        },

        addTask() {

            this.tasks.push({ text: this.newTask, done: false })

            this.newTask = "";

        },

        todoHandler(currentTask) {

            if (currentTask.done == false) {
                currentTask.done == true;
            } else {
                currentTask.done == false;
            }

        },

    }
}).mount("#app");