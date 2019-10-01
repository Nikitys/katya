<template lang="pug">
  ul.menu
    li.item
      router-link(
        to="/kate"
      ) КАТЕ
    li.item(
      v-for="item in menu" 
    ) 
     a.link(
       v-text="item.link"
       :href="item.link"
     )
    button(
      @click="addLink"
    ) Кнопка
</template>

<script>
export default {
  props: {},

  data() {
    return {
      menu: [
        {
          name: "Ссылка",
          link: "vk.com"
        },
        {
          name: "Ссылка 1",
          link: "vk.com"
        },
        {
          name: "Ссылка 2",
          link: "vk.com"
        },
        {
          name: "Ссылка 3",
          link: "vk.com"
        }
      ]
    };
  },

  methods: {
    addLink() {
      this.menu.push({
        name: "Ссылка",
        link: "vk.com"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  .item {
    margin-right: 0.5rem;
  }
}
</style>
