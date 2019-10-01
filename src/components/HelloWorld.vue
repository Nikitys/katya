<template lang="pug">
  div.wrap
    .block
      .container
        header
          a.logo ЛОГОТИП
          main-menu
        main
          todo-list
          h1.title Заголовок
          .postTitle После заловок

</template>

<script>
import MainMenu from "@/components/menu.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    MainMenu,
    TodoList
  },

  props: {}
};
</script>

<style lang="scss">
// Общие стили для проекта
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
}

// Стили для компонента
header {
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 20px;
}

.block {
  background: url("../assets/img/IMAGE.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  .container {
    width: 100%;
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
