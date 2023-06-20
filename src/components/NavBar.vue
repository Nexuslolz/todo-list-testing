<template>
  <nav class="navbar" :class="{ 'navbar-todo': textColor === 'black' }">
    <router-link to="/">Главная</router-link
    ><span class="devider" :class="{ 'devider-todo': textColor === 'black' }"> | </span>
    <router-link to="/todo-list">ToDO list</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    textColor: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  background-color: transparent;
  padding: 0.5em 2em;
  z-index: 5;
  position: relative;
}

.navbar-todo {
  a {
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.devider {
  color: white;
}

.devider-todo {
  color: black;
}
</style>
