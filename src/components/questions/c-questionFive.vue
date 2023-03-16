<template>
    <div class="container">
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[0]?'active':'']">
                <h6>What should I do if there is an outbreak in my community?</h6>
                <div class="button" @click="change">
                    <h3 data-num="0">{{open[0]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[0]">
                <p>
                    During an outbreak, stay calm and put your preparedness plan to work. Follow the steps below:
                    
                    Protect yourself and others
                    
                    Stay home if you are sick. Keep away from people who are sick. Limit close contact with others as much as possible (about 6 feet).
                    Put your household plan into action
                    
                    Stay informed about the local COVID-19 situation. Be aware of temporary school dismissals in your area, as this may affect your household's daily routine.
                    practicing everyday preventive actions. Cover coughs and sneezes with a tissue and wash your hands often with soap and water for at least 20 seconds. If soap and water are not available, use a hand sanitizer that contains 60% alcohol. Clean frequently touched surfaces and objects daily using a regular household detergent and water.
                    Notify your workplace as soon as possible if your regular work schedule changes.Ask to work from home or take leave if you or someone in your household gets sick with COVID-19 symptoms, or if your child's school is dismissed temporarily. Learn how businesses and employers can plan for and respond to COVID-19.
                    Stay in touch with others by phone or email. If you have a chronic medical condition and live alone, ask family, friends, and health care providers to check on you during an outbreak. Stay in touch with family and friends, especially those at increased risk of developing severe illness, such as older adults and people with severe chronic medical conditions.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[1]?'active':'']">
                <h6>How do I prepare my children in case of COVID-19 outbreak in our community?</h6>
                <div class="button" @click="change">
                    <h3 data-num="1">{{open[1]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[1]">
                <p>
                    Outbreaks can be stressful for adults and children. Talk with your children about the outbreak, try to stay calm, and reassure them that they are safe. If appropriate, explain to them that most illness from COVID-19 seems to be mild.
                    
                    Children respond differently to stressful situations than adults</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[2]?'active':'']">
                <h6>What steps shoul parents take to protect children during a community outbreak?</h6>
                <div class="button" @click="change">
                    <h3 data-num="2">{{open[2]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[2]">
                <p>
                    This is a new virus and we are still learning about it, but so far, there does not seem to be a lot of illness in children. Most illness, including serious illness, is happening in adults of working age and older adults. If there cases of COVID-19 that impact your child's school, the school may dismiss students. Keep track of school dismissals in your community. Read or watch local media sources that report school dismissals. If schools are dismissed temporarily, use alternative childcare arrangements, if needed.
                    
                    If your child/children become sick with COVID-19, notify their childcare facility or school. Talk with teachers about classroom assignments and activities they can do from home to keep up with their schoolwork.
                    
                    Discourage children and teens from gathering in other public places while school is dismissed to help slow the spread of COVID-19 in the community.</p>
            </div>
        </div>

        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[3]?'active':'']">
                <h6>Will schools be dismissed if there is an outbreak in my community?</h6>
                <div class="button" @click="change">
                    <h3 data-num="3">{{open[3]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[3]">
                <p>
                    Depending on the situation, public health officials may recommend community actions to reduce exposures to COVID-19, such as school dismissals. Read or watch local media sources that report school dismissals or and watch for communication from your child's school. If schools are dismissed temporarily, discourage students and staff from gathering or socializing anywhere, like at a friend's house, a favorite restaurant, or the local shopping mall.</p>
            </div>
        </div>
        
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[4]?'active':'']">
                <h6>Can the virus that causes COVID-19 be spread through food, including refigerated or frozen food?</h6>
                <div class="button" @click="change">
                    <h3 data-num="4">{{open[4]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[4]">
                <p>
                    Coronaviruses are generally thought to be spread from person-to-person through respiratory droplets. Currently there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for 20 seconds for general food safety. Throughout the day wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom.
                    
                    It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.
                    
                    In general, because of poor survivability of these coronaviruses on surfaces, there is likely very low risk of spread from food products or packaging that are shipped over a period of days or weeks at ambient, refrigerated, or frozen temperatures.
                    
                    Learn what is known about the spread of COVID-19.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[5]?'active':'']">
                <h6>Should I go to work if there is an outbreak in my community?</h6>
                <div class="button" @click="change">
                    <h3 data-num="5">{{open[5]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[5]">
                <p>
                    Follow the advice of your local health officials. Stay home if you can. Talk to your employer to discuss working from home, taking leave if you or someone in your household gets sick with COVID-19 symptoms, or if your child's school is dismissed temporarily. Employers should be aware that more employees may need to stay at home to care for sick children or other sick family members than is usual in case of a community outbreak.</p>
            </div>
        </div>
        
</div>
</template>





<script>
export default{
    data(){
        return{
            open:[true , false , false , false ,false ,false]
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