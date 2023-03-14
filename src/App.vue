<script setup>
import { RouterLink, RouterView } from 'vue-router'
import mainHeader from './components/main/main-header.vue';
import mainFooter from './components/main/main-footer.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <header><mainHeader/></header>
    <body><RouterView /></body>
    <footer><mainFooter/></footer>
    
</template>

<style scoped>

</style>
