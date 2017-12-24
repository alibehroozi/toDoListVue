<template>
  <div id="app">
    <div style="width:30%;display:inline-block;padding:20px;vertical-align:top;">
      <h1>To Do List</h1>
      <ul>
        <li v-for="(task,index) in tasks" v-if="task.completed == false">
          <span>{{ task.title }}</span><span style="margin-left:10px;"><button v-on:click="doneTask(index)">Done!</button><button v-on:click="deleteTask(index)">Delete</button></span>
        </li>
      </ul>
      <input id="addtaskName" v-model="addtaskName" type="text"><button v-on:click="addTask(addtaskName)">Add Task</button>
    </div>
    <div style="vertical-align:top;width:30%;display:inline-block;padding:20px;border-left:2px solid black;">
      <h1>Tasks Completed</h1>
      <ul>
        <li v-for="(task,index) in tasks" v-if="task.completed == true">
          <span>{{ task.title }}</span><span style="margin-left:10px;"></span>
        </li>
      </ul>
      <router-link :to="'/allTasks'"><button>All Tasks</button></router-link>
    </div>
  </div>
</template>

<script>

export default {

  props: ['tasks'],

  data(){
    return{
    }
  },
  methods: {
    addTask(title) {

      this.tasks.push({
        title: title,
        completed: false
      });
      title = "";
      this.addtaskName = "";

    },
    deleteTask(index){
      this.tasks.splice(index, 1);
    },
    doneTask(index){
      this.tasks[index].completed = true;
    }
  }


}
</script>
