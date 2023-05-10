const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: {
                task: "",
                done: false
            },
            taskList: []
        }
    },

    methods: {
        addNewTask(){
            let addedTask = { ...this.newTask };
            this.taskList.unshift(addedTask);
            this.newTask.task = "";
        }

    },

    mounted() {

    },
}).mount('#app')