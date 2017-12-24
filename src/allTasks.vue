<template>
  <div id="app">
    <div style="width:30%;display:inline-block;padding:20px;vertical-align:top;">
      <h1>All Tasks</h1>
      <ul>
        <li v-for="(task,index) in tasks">
          <span>{{ task.title }}</span>
        </li>
      </ul>
    </div>
    <router-link :to="'/'"><button>Back to Home</button></router-link>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data(){
    return{

    }
  },

}
</script>
