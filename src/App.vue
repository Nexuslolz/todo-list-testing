<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-style: 'sans-serif';
  font-size: 20px;
  font-family: 'Montserrat', 'Arial', sans-serif;

  @media (max-width: 650px) {
    font-size: 1em;
  }
}

.app {
  padding: 0px;
  overflow: hidden;
}

a {
  font-weight: bold;
  color: white;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
