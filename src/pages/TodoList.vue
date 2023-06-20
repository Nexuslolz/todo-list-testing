<template>
  <div class="todo-list">
    <nav-bar :textColor="'black'" />
    <div class="list">
      <task-form @create="createTask" />
      <task-desk @remove="removeTask" @edit="editTask" @done="completeTask" :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskDesk from '@/components/TaskDesk.vue';
export default {
  components: { NavBar, TaskForm, TaskDesk },
  data() {
    return {
      color: 'black',
      tasks: this.checkTasks() ?? [],
    };
  },
  methods: {
    createTask(task) {
      this.tasks.push(task);
    },

    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      const tasks = JSON.parse(localStorage.getItem('plan'));

      const taskIndex = tasks.findIndex((item) => item.id === task.id);
      tasks.splice(taskIndex, 1);

      localStorage.setItem('plan', JSON.stringify(tasks));
    },

    completeTask(task) {
      task.isDone = !task.isDone;
      const tasks = JSON.parse(localStorage.getItem('plan'));

      const taskIndex = tasks.findIndex((item) => item.id === task.id);
      tasks[taskIndex].isDone = !tasks[taskIndex].isDone;

      localStorage.setItem('plan', JSON.stringify(tasks));
    },

    checkTasks() {
      const savedData = localStorage.getItem('plan');
      if (!savedData) {
        return;
      }

      const items = JSON.parse(savedData);
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
}
.list {
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
