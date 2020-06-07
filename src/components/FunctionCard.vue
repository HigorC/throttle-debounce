<template>
  <div class="description">
    <p class="text">
      Mas a função
      <span class="highlight">{{functionInfos.name}}</span>
      só deixou a cor mudar
    </p>
    <p class="highlight count">{{functionInfos.countChange}} vezes</p>
  </div>
</template>

<script>
export default {
  props: ["functionInfos"]
};
</script>

<style scoped lang="scss">
.description {
  width: 70%;
  margin: 0 auto;
  text-shadow: 3px 3px 2px #000000;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }

  .highlight {
    padding: 5px;
    background-color: white;
    color: black;
    font-weight: bold;
    text-shadow: none;
    box-shadow: 0px 0px 20px #fff;

    &.count {
      font-size: 25px;
      padding: 10px 5px;

      @media screen and (max-width: 900px) {
        font-size: 15px;
        padding: 5px;
      }
    }
  }
}
</style>