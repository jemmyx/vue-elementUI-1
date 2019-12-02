<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-menu-item index="11">
        <router-link to="/bar">Go to Bar</router-link>
      </el-menu-item> -->
      <el-menu-item index="1">
        <router-link to="/">Dashboard</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/game">Game</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/terms">Terms</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/profile">Profile</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped></style>
