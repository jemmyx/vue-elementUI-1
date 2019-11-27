<template>
  <div id="app">
    <Header />
    <BlockGame />
    <Terms />
  </div>
</template>

<script>
import BlockGame from "./components/BlockGame";
import Terms from "./components/Terms";
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Terms,
    BlockGame,
    Header
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app * {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
