<script>
export default {
  data(){
    return {
      flipped: false,
      front: 'Who wrote this?',
      back: 'me',
    }
  },
   methods: {
    handleClick: function(){
    this.flipped = !this.flipped;
    }
  }  
}
</script>

<template>
  <div class="center" >
    <h2 v-if="!flipped" v-text="front"></h2>
    <h2 v-else v-text="this.back"></h2>
    <button @click="handleClick">Flip</button>

  </div>
</template>

<style scoped>
.center {
  margin: auto;
  width: 500px;
  height: 300px;
  padding: 10px;
}

button {
  position: relative;
  bottom:   -100px;
}
div {
  background-color: bisque;
  width: 500px;
  height: 300px;
  align-content: center;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
</style>