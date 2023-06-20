<template>
  <div v-if="tasks.length > 0" class="task">
    <h3>Список дел</h3>
    <transition-group name="task-list" class="task-list">
      <task-item
        v-for="task in tasks"
        @remove="$emit('remove', task)"
        @edit="$emit('edit', task)"
        @done="$emit('done', task)"
        :key="task"
        :task="task"
        :class="{ 'task-completed': task.isDone === true }"
      />
    </transition-group>
  </div>
  <h2 v-else class="empty">Дел нет!</h2>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  transition: 0.2s;
  padding-right: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    padding: 1em;
    margin: 1em;
  }
}

.task-list-item {
  display: inline-block;
  margin-right: 10px;
}

.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}

.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(310px);
}

.task-list-move {
  transition: transform 0.5s ease;
}

.task-completed {
  border: 2px solid #42b983;
}
</style>
