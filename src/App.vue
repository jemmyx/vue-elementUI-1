<template>
  <div id="app">
    <Terms />
  </div>
</template>

<script>
import Terms from "./components/Terms";

export default {
  name: "app",
  components: {
    Terms
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
