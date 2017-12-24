<template>
  <router-view :tasks="tasks"></router-view>
</template>

<script>

export default {
  created(){
    this.getTasks();
  },
  data(){
    return{
      tasks: []
    }
  },
  methods: {
    getTasks(){
      this.$http.get('http://jsonplaceholder.typicode.com/todos').then(response => {
        // get body data
        this.tasks = response.body;
      })
    },

  },


}
</script>
