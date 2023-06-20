<template>
  <div @mousemove.prevent class="vanta" ref="vantaRef">
    <nav-bar></nav-bar>
    <div class="header-main">
      <h1>ToDo List</h1>
      <h2>Добро пожаловать в тестовый список дел</h2>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      color: 'white',
      backgroundColor: '#13132f',
      THREE: THREE,
      showDots: false,
    });
  },
  beforeUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
.vanta {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.header-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2em;
  position: relative;
  top: 5%;

  h1 {
    font-size: 36px;
    color: white;
  }

  h2 {
    font-size: 18px;
    color: white;

    @media (max-width: 650px) {
      max-width: 350px;
    }
  }
}
</style>
