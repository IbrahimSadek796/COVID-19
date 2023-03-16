<template>
    <div class="container">
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[0]?'active':'']">
                <h6>What is the source of the virus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="0">{{open[0]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[0]">
                <p>
                    Coronaviruses are a large family of viruses. Some cause illness in people and others, such as canine and feline coronaviruses, only infect animals.Rarely, animal coronaviruses tha infect animals have emerged to infect people and can spread between people. This is suspected to have occured for the virus that causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated from animals and then spread to people. More information about the source and spread of COVID_19 is available on the Situation Summary : Source and Spread of the Virus.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[1]?'active':'']">
                <h6>How does the virus spread?</h6>
                <div class="button" @click="change">
                    <h3 data-num="1">{{open[1]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[1]">
                <p>
                    This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person. It's important to note that person-to-person spread ca happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so.
                    
                    The virus that cause COVID_19 seems to be spreading easily and sustainably in the community("community spread") in some affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.
                    
                    Learn what is known about the spread of newly emerged coronaviruses.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[2]?'active':'']">
                <h6>Can someone who has had COVID-19 spread the illness to others?</h6>
                <div class="button" @click="change">
                    <h3 data-num="2">{{open[2]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[2]">
                <p>
                    The virus that causes COVID-19 is spreading from person-to-person. Someone who is actively sick with COVID-19 can spread the illness to others. That is why CDC recommends that these patients be isolated either in the hospital or at home (sepending on how sick they are) until they are better and no longer pose a risk of infecting others.
                    
                    How long someone is actively sick can vary so the decision on when to release someone from isolation is made on a case-by-case basis in consultation with doctors, infection prevention and control experts, and public health officials and involves considering specifics of each situation including disease severity, illness signs and symptoms, and results of laboratory testing for the patient.
                    
                    Current CDC guidance for when it is OK to release someone from isolation is made on a case by case basis and includes meeting all of the following requirements:
                    
                    The patient is free from fever without the use of fever-reduction medications.
                    
                    The patient is no longer showing symptoms, including cough.
                    
                    The Patient has tested negative on at least two consecutive respiratory specimens collected at least 24 hours apart.
                    
                    Someone who has been released from isolation is not considered to pose arisk of infection to others.</p>
            </div>
        </div>

        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[3]?'active':'']">
                <h6>Will warm weather stop the outbreak of COVID-19?</h6>
                <div class="button" @click="change">
                    <h3 data-num="3">{{open[3]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[3]">
                <p>
                    It is not yet known whether weather and temperature impact the spread of COVID- 19. Some other viruses, like the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months. At this time, it is not known whether the spread of COVID-19 will decrease when weather becomes warmer. There is much more to learn about the transmissibility, severity, and other features associated with COVID- 19 and investigations are ongoing.</p>
            </div>
        </div>
        
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[4]?'active':'']">
                <h6>Can the virus that causes COVID-19 be spread through food including refigerated or frozen food?</h6>
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
                <h6>What i community spread?</h6>
                <div class="button" @click="change">
                    <h3 data-num="5">{{open[5]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[5]">
                <p>
                    Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.</p>
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