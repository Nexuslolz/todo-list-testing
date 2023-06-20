<template>
  <div class="task-item">
    <div class="task-content">
      <h4>{{ new Date(task.id).toLocaleDateString() }}</h4>
      <task-input v-if="isEdit" :model-value="newBody" @update:model-value="editNewTasks"></task-input>
      <div v-else>{{ newBody === '' ? task.body : newBody }}</div>
    </div>
    <div class="btns">
      <main-button :class="{ 'btn-not-completed': !task.isDone }" @click.stop="editTask">{{
        isEdit ? 'Готово' : 'Изменить'
      }}</main-button>
      <main-button :class="{ 'btn-not-completed': !task.isDone }" @click.stop="$emit('remove', task)"
        >Удалить</main-button
      >
      <main-button :class="{ 'btn-not-completed': !task.isDone }" @click.stop="$emit('done', task)"
        >Сделано!</main-button
      >
    </div>
  </div>
</template>

<script>
import MainButton from './MainButton.vue';
import TaskInput from './TaskInput.vue';
import { mapActions } from 'vuex';

export default {
  components: { MainButton, TaskInput },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
      newBody: this.task.body,
    };
  },
  methods: {
    ...mapActions({
      getTasks: 'task/getTasks',
    }),
    editTask() {
      this.isEdit = !this.isEdit;
    },
    editNewTasks(event) {
      const tasks = JSON.parse(localStorage.getItem('plan'));
      if (tasks.length === 0) return;

      const taskIndex = tasks.findIndex((item) => item.id === this.task.id);
      tasks[taskIndex].body = event;
      this.newBody = tasks[taskIndex].body;

      localStorage.setItem('plan', JSON.stringify(tasks));
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<style lang="scss" scoped>
.task-item {
  margin-top: 15px;
  border: 2px solid rgb(172, 42, 42);
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
  max-width: 800px;
  width: 100%;
  min-width: 350px;
  transition: 0.2s;

  @media (max-width: 750px) {
    flex-direction: column;
  }
}
.btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  gap: 10px;

  * {
    width: 100%;
    min-width: 115px;
  }

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    margin-top: 2em;

    * {
      width: 25%;
    }
  }
}

.task-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}
.btn-not-completed {
  border: 2px solid rgb(172, 42, 42);
  color: black;

  &:hover {
    border: 2px solid rgb(238, 161, 161);
    background: transparent;
    color: black;
  }
}
</style>
