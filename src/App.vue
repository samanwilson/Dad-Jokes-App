<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__fadeIn" appear >
      <router-view>
        <AppIndex></AppIndex>
      </router-view>
    </transition>

  </div>
</template>

<script>
  import Index from "./Index";
export default {
  data () {
    return {

    }
  },
components:{
      AppIndex:Index
}
}
</script>

<style>

</style>
