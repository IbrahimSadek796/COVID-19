<template>
    <div class="container">
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[0]?'active':'']">
                <h6>What is a novel coronavirus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="0">{{open[0]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[0]">
                <p>
                    On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak,first identified in Wuhan China. The new name of this disease is coronavirus disease 2019,abbreviated as COVID-19 'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was referred to as '2019 novel coronavirus' or '2019-nCOV'.
                    
                    A novel coronavirus is anew coronavirus that has not been previously identified.The Virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronavirus that commonly circulate among humans and cause mild illnes, like the common cold.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[1]?'active':'']">
                <h6>Why is the disease beingcalled coronavirus disease 2019, COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="1">{{open[1]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[1]">
                <p>
                    On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak,first identified in Wuhan China. The new name of this disease is coronavirus disease 2019,abbreviated as COVID-19 'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was referred to as '2019 novel coronavirus' or '2019-nCOV'.
                    
                    There are many types of human coronavirus including some that commonly cause mild upper-respiratory tract illness. COVID-19 is anew disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name of this disease was selected following the World Health Organization (WHO) best practice external icon for naming of new human infection diseases</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[2]?'active':'']">
                <h6>How can people help stop stigma related to COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="2">{{open[2]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[2]">
                <p>
                    People can fight stigma and help, not hurt, others by providing social support Counter stigma by learning and sharing facts. Communicating the facts that viruses do not target specific racial or ethnic groups and how COVID-19 actually spreads can help stop stigma.</p>
            </div>
        </div>

        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[3]?'active':'']">
                <h6>Why might someone blame or avoid individuals and groups?</h6>
                <div class="button" @click="change">
                    <h3 data-num="3">{{open[3]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[3]">
                <p>
                    People in the U.S. may be worries or anxious about friends and relatives who are living in or visiting areas where COVID-19 is spreading. Some people are worried about the disease. Fear and anxiety can lead to social stigma, for example, towards Chinese or other Asian Americans or people who where in quarantine.
                    
                    Stigma is discrimination against an identifiable group of people, a place , or a nation.Stigma is associated with a lack of knowledge about how COVID-19 spreads, a need to blame someone, fears about disease and death, and gossip that spreads rumors and myths.
                    
                    Stigma hurts everyone by creating more fear or anger towards ordinary people instead of the disease that is causing the problem.</p>
            </div>
        </div>
        
</div>
</template>





<script>
export default{
    data(){
        return{
            open:[true , false , false , false]
        }
    },
    methods:{
        change:function(e){
            let num = e.target.getAttribute('data-num')
            if(this.open[num]){
                return this.open[num] = false
            }
            for(let i=0 ; i<this.open.length ; i++){
                this.open[i]=false
            }
            this.open[num]  = true
        }
    }
}
</script>

<style scoped>
.contain{
    border-bottom: 1px solid #00000048;
    padding: 0%;
    margin: 0;
}
.busters:hover{
    color: var(--main-color);
}
.busters{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0%;
    margin: 0%;
    background-color: rgba(0, 0, 0, .02);
    
}
.busters h6{
    font-size: 20px;
    font-weight: bold;
}
.busters h3{
    font-size: 40px;
    font-weight: bold;
}
.active,
.busters{
    transition: .3s;
}
.active{
    color: var(--main-color);
}
.busters .button{
    background-color: #fff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.busters .button:hover{
    cursor:default;
}
</style>