<template>
  <div id="app">
    <Box />
    <Footer />
  </div>
</template>

<script>
import Box from "./components/Box.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Box,
    Footer
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "PressStart2P";
  src: url("./assets/fonts/PressStart2P-Regular.ttf") format("truetype");
}

$font-main: "PressStart2P", sans-serif;

html,
body,
#app {
  height: 100%;
  margin: 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
#app {
  font-family: $font-main, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// @keyframes pulse {
//   0%   {box-shadow: 0px 0px 10px #fff;}
//   55%   {box-shadow: 0px 0px 25px #fff;}
//   100%  {box-shadow: 0px 0px 10px #fff;}
// }
</style>
