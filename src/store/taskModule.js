export const taskModule = {
  state: () => ({
    edittedTasks: [],
  }),

  actions: {
    getTasks({ commit }) {
      const tasks = JSON.parse(localStorage.getItem('plan'));
      if (tasks.length === 0) return;
      commit('setEdittedTask', tasks);
    },
  },

  namespaced: true,
};
