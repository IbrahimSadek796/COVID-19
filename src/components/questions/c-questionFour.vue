<template>
    <div class="container">
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[0]?'active':'']">
                <h6>What is the symptoms of the COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="0">{{open[0]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[0]">
                <p>
                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don't develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.
                    
                    Read aboutCOVID-19 Symptoms from CDC.gov.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[1]?'active':'']">
                <h6>Shoud I be tested for COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="1">{{open[1]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[1]">
                <p>
                    Not everyone needs to be tested for COVID-19. For information about testing, seetesting for COVID-19</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[2]?'active':'']">
                <h6>Where can I get tested for COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="2">{{open[2]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[2]">
                <p>
                    The process and locations for testing vary from place to place. Contact your state, local, tribal, or territorial department for more information, or reach out to a medical provider. State and local public health departments have received tests from CDC while medical providers are getting tests developed by commercial manufacturers. While supplies of these tests are increasing, it may still be difficult to find someplace to get tested.</p>
            </div>
        </div>

        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[3]?'active':'']">
                <h6>Can a person test negative and later test positive for COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="3">{{open[3]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[3]">
                <p>
                    Using the CDC-developed diagnostic test, a negative result means that the virus that causes COVID-19 was not found in the person's sample. In the early stages of infection, it is possible the virus will not be detected.
                    
                    For COVID-19, a negative test result for a sample collected while a person has symptoms likely means that the COVID-19 virus is not causing their current illness.</p>
            </div>
        </div>
        
        
</div>
</template>





<script>
export default{
    data(){
        return{
            open:[true , false , false , false ]
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