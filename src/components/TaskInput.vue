<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'task-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  padding: 10px 15px;
  width: 100%;
  margin-top: 15px;
  border: 1px solid #42b983;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;

  &:focus {
    box-shadow: inset 0 0 0 1px #42b983;
  }
}
</style>
