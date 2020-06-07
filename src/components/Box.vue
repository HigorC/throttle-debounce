<template>
  <div class="box">
    <div class="general-count">
      <h2>
        Você clicou
        <strong>{{countClick}}</strong>
        vezes
      </h2>
    </div>
    <div class="throttle-area">
      <FunctionCart :functionInfos="throttleInfos" />
    </div>
    <div class="debounce-area">
      <FunctionCart :functionInfos="debounceInfos" />
    </div>
  </div>
</template>
<script>
import { getRandonInteger, throttle, debounce } from "../util";
import FunctionCart from "./FunctionCard.vue";

export default {
  name: "Box",
  components: { FunctionCart },
  mounted: function() {
    const that = this;
    const boxElement = document.querySelector(".box");
    
    if (boxElement) {
      //Listener to update general count
      boxElement.addEventListener("click", () => {
        this.countClick++;
        document.querySelector(".general-count strong").style.fonts;
      });
      //Listener to throttle
      boxElement.addEventListener(
        "click", throttle(() => this.changeBoxColor(".throttle-area", that.throttleInfos), 1000)
      );
      //Listener to debounce
      boxElement.addEventListener(
        "click", debounce(() => this.changeBoxColor(".debounce-area", that.debounceInfos), 1000)
      );
      //Listener to reset all counters
      boxElement.addEventListener("click", debounce(() => that.resetCounters(), 5000)
      );
    }
  },
  data: () => ({
    countClick: 0,
    throttleInfos: {
      name: "Throttle",
      countChange: 0,
      indexActualRandonColor: -1
    },
    debounceInfos: {
      name: "Debounce",
      countChange: 0,
      indexActualRandonColor: -1
    },
    colors: [
      "#1e0492",
      "#550fcb",
      "#e07df3",
      "#6a6582",
      "#c4b6cc",
      "#ADFF02",
      "#34343a",
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
    /**
     * Reset all counters, unit per unit
     * @returns { Void }
     */
    resetCounters: function() {
      const interval = setInterval(() => {
        if (this.countClick > 0) {
          this.countClick--;
        }
        if (this.throttleInfos.countChange > 0) {
          this.throttleInfos.countChange--;
        }
        if (this.debounceInfos.countChange > 0) {
          this.debounceInfos.countChange--;
        }
        if (this.countClick + this.throttleInfos.countChange + this.debounceInfos.countChange === 0) {
          clearInterval(interval);
        }
      }, 20);
    },
    /**
     * Change element background to a randon color
     * @param { String } selector
     * @param { Object } objInfo infos of debounce/throttle functions
     * 
     */
    changeBoxColor: function(selector, objInfo) {
      objInfo.indexActualRandonColor = getRandonInteger(
        this.colors.length,
        this.throttleInfos.indexActualRandonColor,
        this.debounceInfos.indexActualRandonColor
      );

      const randonColor = this.colors[objInfo.indexActualRandonColor];
      const boxElement = document.querySelector(selector);

      if (boxElement) {
        setTimeout(() => {
          boxElement.style.background = randonColor;
        }, 50);
      }

      objInfo.countChange++;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    color: #fff;
    text-shadow: 3px 3px 2px #000000;
  }

  .general-count {
    background-color: #000;
    padding: 15px 5px;
    top: 7%;
    width: 550px;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    h2 {
      margin: 0;
    }
  }

  .throttle-area,
  .debounce-area {
    transition: all 0.7s;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    color: #ffffff;
    line-height: 25px;

    .title {
      background-color: black;
      padding: 15px 5px;
      width: 300px;
      margin: 0 auto;
    }
  }

  .throttle-area {
    background-color: #fb7f39;
    border-right: 1px solid #fff;
    box-shadow: inset -8px 0 7px -8px #fff;
    float: left;
  }

  .debounce-area {
    background-color: #6a6582;
    border-left: 1px solid #fff;
    box-shadow: inset 8px 0 7px -8px #fff;
    float: right;
  }
}
</style>
 