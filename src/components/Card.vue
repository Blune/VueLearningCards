<script>
import cardData from "../cards.json";

export default {
  data(){
    return {
      flipped: false,
      index: 0,
      cards: cardData.cards
    }
  },
   methods: {
    flipCard: function(){
    this.flipped = !this.flipped;
    },
    next: function(){
      this.index = Math.min(this.index+1, this.cards.length -1);
    },
    previous: function(){
      this.index = Math.max(this.index-1, 0);
    }
  },
  computed: {
    front(){
      return this.cards[this.index].front;
    },
    back(){
      return this.cards[this.index].back;
    }
  }
}
</script>

<template>
  <div class="card" @click="flipCard">
    <h2 v-if="!flipped" v-text="front"></h2>
    <h2 v-else v-text="back"></h2>
  </div>
  <div>
    <button @click="previous">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<style scoped>


.card {
  background-color: bisque;
  width: 500px;
  height: 300px;
  align-content: center;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin: auto;
  padding: 10px;
}
</style>