<script>
import QuestionOne from '@/components/questions/c-questioOne.vue'
import QuestionTwo from '@/components/questions/c-questionTwo.vue'
import QuestionThree from '@/components/questions/c-questionThree.vue'
import QuestionFour from '@/components/questions/c-questionFour.vue'
import QuestionFive from '@/components/questions/c-questionFive.vue'
import QuestionSix from '@/components/questions/c-questionSix.vue'
import question from '@/Data/question'
export default {
    components: {
        QuestionOne,
        QuestionTwo,
        QuestionThree,
        QuestionFour,
        QuestionFive,
        QuestionSix,
    },
    data(){
        return{
            question:question,
            activeTap:1,
        }
    },
    methods:{

    },
};
</script>

<template>
    <section class="question py-5 mt-5" id="question">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">common question & answer</h2>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="buttons">
                        <button v-for="question in question" @click="activeTap=question.id" id="btn1" :class="['btn', 'btn-outline-light', 'shadow', 'text-dark', 'mb-3', 'P-2',activeTap== question.id?'active':'']">{{question.question}} <i class="bi bi-caret-right-fill"></i></button> 
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="answers text-dark" id="answers">
                        <QuestionOne v-if="activeTap==1" id="ans1"></QuestionOne>
                        <QuestionTwo v-if="activeTap==2" id="ans2"></QuestionTwo>
                        <QuestionThree v-if="activeTap==3" id="ans3"></QuestionThree>
                        <QuestionFour v-if="activeTap==4" id="ans4"></QuestionFour>
                        <QuestionFive v-if="activeTap==5" id="ans5"></QuestionFive>
                        <QuestionSix v-if="activeTap==6" id="ans6"></QuestionSix>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.main-title h2::before{
    content: "frequently asked question";
}
.active{
    color: var(--main-color) !important;
    border-color: var(--main-color) !important;
}
.question .buttons{
    display: flex;
    flex-direction: column;
    
}
.question .buttons button{
    text-align: left;
    display: flex;
    justify-content: space-between;
}
.question .buttons button:focus{
    border-color: var(--main-color);
    color: var(--main-color) !important;
}
.question .answers{
    border: 1px solid #00000048;
}
@media (max-width: 767px) {
    *{
        padding: 0%;
        margin: 0%;
    }
}
</style>