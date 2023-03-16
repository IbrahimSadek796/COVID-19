<script setup>
import { RouterLink, RouterView } from 'vue-router'
import mainHeader from './components/main/main-header.vue';
import mainFooter from './components/main/main-footer.vue';
import ToUp from './components/icons/ToUp.vue'

</script>

<template>
    <body>
        <header><mainHeader/></header>
    
        <RouterView />
        <ToUp/>

        <footer><mainFooter/></footer>
    </body>
</template>

<style scoped>
</style>