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
      boxElement.addEventListener("click", () => this.countClick++);
      boxElement.addEventListener(
        "click",
        throttle(
          () => this.changeBoxColor(".throttle-area", that.throttleInfos),
          1500
        )
      );
      boxElement.addEventListener(
        "click",
        debounce(
          () => this.changeBoxColor(".debounce-area", that.debounceInfos),
          1500
        )
      );
      boxElement.addEventListener(
        "click",
        debounce(() => that.resetCounters(), 3000)
      );
    }
  },
  data: () => ({
    countClick: 0,
    throttleInfos: {
      name: 'Throttle',
      countChange: 0,
      indexActualRandonColor: -1
    },
    debounceInfos: {
      name: 'Debounce',
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
  computed: {},
  methods: {
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

        if (
          this.countClick +
            this.throttleInfos.countChange +
            this.debounceInfos.countChange ===
          0
        ) {
          clearInterval(interval);
        }
      }, 20);
    },
    clickOnBox: function() {
      this.countClick++;
      const that = this;
      throttle(
        () => this.changeBoxColor(".throttle-area", that.throttleInfos),
        1000
      );
    },
    changeBoxColor: function(selector, objInfo) {
      objInfo.indexActualRandonColor = getRandonInteger(
        this.colors.length,
        objInfo.indexActualRandonColor
      );
      const randonColor = this.colors[objInfo.indexActualRandonColor];
      const boxElement = document.querySelector(selector);
      if (boxElement) {
        setTimeout(() => {
          boxElement.style.background = randonColor;
        }, 100);
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
    h2 {
      margin: 0;
    }
    position: absolute;
  }

  .throttle-area,
  .debounce-area {
    background-color: #34343a;
    transition: all 0.7s;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    color: #ffffff;
    line-height: 25px;

    // .name-function,
    // .count {
    //   padding: 5px;
    //   background-color: white;
    //   color: black;
    //   font-weight: bold;
    // }

    // .description {
    //   width: 80%;
    //   margin: 0 auto;
    // }
    .title {
      background-color: black;
      padding: 15px 5px;
      width: 300px;
      margin: 0 auto;
    }
  }

  .throttle-area {
    float: left;
  }

  .debounce-area {
    float: right;
  }
}
</style>
 