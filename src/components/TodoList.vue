<template lang="pug">
  div
    ul.list
      li.item(
        v-for="item, index in todo"
      ) 
        span(
          v-text="item.name"
        )
        button.remove(
          @click="removeTodo(index)"
        ) Удалить
    input(
      v-model="inputText"
    )
    .actions
      button.add(
        @click="addTodo"
      ) Добавить
</template>

<script>
export default {
  props: {},

  data() {
    return {
      todo: [
        {
          name: "тодо 1"
        }
      ],
      inputText: ""
    };
  },

  methods: {
    addTodo() {
      let lengthInput = this.inputText.length;
      if (lengthInput === 0) {
        confirm("Пустой инпут");
        return;
      }
      this.todo.push({
        name: this.inputText
      });
      this.inputText = "";
    },

    removeTodo(_index) {
      this.todo.splice(_index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  width: 300px;
  .item {
    background: #fff;
    color: #000;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 10px;
  }
}
</style>
