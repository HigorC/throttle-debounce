<template>
  <div class="box" @click="clickOnBox()">{{countClick}}</div>
</template>

<script>
import { getRandonInteger } from "../util";
export default {
  name: "Box",
  data: () => ({
    countClick: 0,
    colors: [
      "#01BEFE",
      "#FFDD00",
      "#FF7D00",
      "#FF006D",
      "#FF006D",
      "#ADFF02",
      "#8F00FF"
    ]
  }),
  methods: {
    clickOnBox: function() {
      this.countClick++;
      const randonColor = this.colors[getRandonInteger(this.colors.length)];
      const boxElement = document.querySelector(".box");
      if (boxElement) {
        boxElement.style.backgroundColor = randonColor;
      }
    }
  }
};
</script>

<style scoped>
.box {
  transition: all 0.7s;
  height: 100%;
  width: 100%;
  border: 1px solid black;
}
</style>
