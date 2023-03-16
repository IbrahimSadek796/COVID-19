<template>
    <div v-if="up"  class="toUp" @click.prevent="upButton">
        <div class="bi bi-arrow-up-circle-fill text-white fs-2"></div>
    </div>
</template>

<style scoped>
    .toUp{
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--main-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
    }
</style>

<script>
export default{
    created(){
        window.addEventListener('scroll' , this.showbutton);
    },

    destroyed(){
        window.removeEventListener('scroll' , this.showbutton);
    },

    data(){
        return{
            up:false,
        }
    },

    methods:{
        upButton:function(){
            window,scrollTo({
                left:0,
                top:0,
                behavior:'smooth',
            });
        },

        showbutton:function(){
            if(window.scrollY > 150){
                this.up = true
            }
            if(window.scrollY == 0){
            this.up = false
            }
        },
    },
}
</script>