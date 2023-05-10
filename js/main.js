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
        },
        trashTask(i){
            this.taskList.splice(i, 1)
        },
        doneTask(i){
            this.taskList[i].done = true
        }

    },

    mounted() {

    },
}).mount('#app')