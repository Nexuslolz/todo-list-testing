<template>
  <form @submit.prevent class="form__content">
    <task-input v-model="task.body" placeholder="Что нужно сделать?"></task-input>
    <main-button @click="createTask">Добавить</main-button>
  </form>
</template>

<script>
import MainButton from './MainButton.vue';
import TaskInput from './TaskInput.vue';
export default {
  components: { MainButton, TaskInput },
  name: 'task-form',
  data() {
    return {
      task: {
        id: '',
        body: '',
        isDone: false,
      },
    };
  },
  methods: {
    createTask() {
      const key = 'plan';

      this.task.id = Date.now();
      this.$emit('create', this.task);

      const prevData = localStorage.getItem(key);
      const keptData = prevData ? JSON.parse(prevData) : [];
      keptData.push(this.task);
      localStorage.setItem(key, JSON.stringify(keptData));

      this.task = {
        id: '',
        body: '',
        isDone: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form__content {
  padding: 20px;
  background: white;
  margin: auto;
  min-height: 200px;
  min-width: 300px;
  border-radius: 10px;
  border: 3px solid #42b983;
  border-radius: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 0;
}
</style>
