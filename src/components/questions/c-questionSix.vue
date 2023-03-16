<template>
    <div class="container">
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[0]?'active':'']">
                <h6>COVID-19 virus can be transmitted in areas with hot annd humid climates?</h6>
                <div class="button" @click="change">
                    <h3 data-num="0">{{open[0]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[0]">
                <p>
                    From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[1]?'active':'']">
                <h6>Cold weather and snow CANNOT kill the new coronavirus</h6>
                <div class="button" @click="change">
                    <h3 data-num="1">{{open[1]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[1]">
                <p>
                    There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[2]?'active':'']">
                <h6>aking a hot bath does not prevent the new coronavirus disease</h6>
                <div class="button" @click="change">
                    <h3 data-num="2">{{open[2]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[2]">
                <p>
                    Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.</p>
            </div>
        </div>

        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[3]?'active':'']">
                <h6>The new coronavirus CANNOT be transmitted through mosquito bites</h6>
                <div class="button" @click="change">
                    <h3 data-num="3">{{open[3]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[3]">
                <p>
                    To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.</p>
            </div>
        </div>
        
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[4]?'active':'']">
                <h6>Are hand dryres effective in killing the new coronavirus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="4">{{open[4]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[4]">
                <p>
                    No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[5]?'active':'']">
                <h6>Can an ultraviolet disinfection lamp kill the new coronavirus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="5">{{open[5]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[5]">
                <p>
                    UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[6]?'active':'']">
                <h6>How effective are thermal scanners in detecting people infected with the new coronavirus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="6">{{open[6]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[6]">
                <p>
                    Thermal scanners are effective in detecting people who have developed a fever (i.e. have a higher than normal body temperature) because of infection with the new coronavirus.
                    
                    However, they cannot detect people who are infected but are not yet sick with fever. This is because it takes between 2 and 10 days before people who are infected become sick and develop a fever.</p>
            </div>
        </div>
        <div class="contain">
            <div :class="['busters','p-3', 'shadow', open[7]?'active':'']">
                <h6>Do vaccines against pneumonia protect you against the new coronavirus?</h6>
                <div class="button" @click="change">
                    <h3 data-num="7">{{open[7]? '-': '+'}}</h3>
                </div>
            </div>
            <div class="answer" v-if="open[7]">
                <p>
                    No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus.
                    
                    The virus is so new and different that it needs its own vaccine. Researchers are trying to develop a vaccine against 2019-nCoV, and WHO is supporting their efforts.
                    
                    Although these vaccines are not effective against 2019-nCoV, vaccination against respiratory illnesses is highly recommended to protect your health.</p>
            </div>
        </div>
</div>
</template>





<script>
export default{
    data(){
        return{
            open:[true , false , false , false ,false ,false, false, false]
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
.busters:hover{
    color: var(--main-color);
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