<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    buttonProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 2px solid #42b983;
  color: teal;
  border-radius: 5px;
  text-shadow: black;
  padding: 5px 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: white;
    background: #42b983;
  }

  &:active {
    background: teal;
    border: 2px solid teal;
  }
}
</style>
