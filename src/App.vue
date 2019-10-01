<template lang="pug">
  div(id="app")
    //- hello-world
    hello-world-kate
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorldKate from "@/components/katya/helloWorld.vue";

export default {
  components: {
    HelloWorld,
    HelloWorldKate
  }
};
</script>
<style lang="scss">
</style>
