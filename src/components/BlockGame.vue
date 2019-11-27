<template
  ><div>
    BlockGame
    <canvas ref="game" width="640" height="480" style="border:2px solid red" />
    <p>
      <!-- //6 -->
      <button v-on:click="move('right')">Right</button>
      <button v-on:click="move('left')">Left</button>
      <button v-on:click="move('up')">Up</button>
      <button v-on:click="move('down')">Down</button>
    </p>
  </div>
</template>
<script>
// 1
import io from "socket.io-client";
export default {
  name: "BlockGame",
  data() {
    // 2
    return {
      socket: {},
      context: {},
      position: {
        x: 0,
        y: 0,
      },
    };
  },
  created() {
    // 3
    this.socket = io("http://localhost:3000");
  },
  mounted() {
    // 4
    this.context = this.$refs.game.getContext("2d");
    this.socket.on("position", (data) => {
      this.position = data;
      this.context.clearRect(
        0,
        0,
        this.$refs.game.width,
        this.$refs.game.height,
      );
      console.log("socket:data", data);
      this.context.fillRect(this.position.x, this.position.y, 20, 20);
    });
  },
  methods: {
    // 5
    move(direction) {
      this.socket.emit("move", direction);
    },
  },
};
</script>
<style scoped></style>
