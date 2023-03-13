<script setup>
import { RouterLink, RouterView } from 'vue-router'
import mainHeader from './components/main/main-header.vue';
import mainFooter from './components/main/main-footer.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

    <mainHeader/>
    <RouterView />
    <mainFooter/>
</template>

<style scoped>

</style>
