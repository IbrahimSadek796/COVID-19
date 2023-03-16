<template>
    <section class="symptoms py-5 mt-5" id="symptoms">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">symptoms of covid-19</h2>
                <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose,sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symproms may appear 2-14 days after exposure.</p>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="@/assets/image/symptom-a.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Fever</h5>
                            <p><span>High Fever - </span>this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="@/assets/image/symptom-b.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Cough</h5>
                            <p><span>Continuous cough - </span>this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours(if you usually have a cough, it may be worse than usual)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="@/assets/image/symptom-c.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Shortness of breath</h5>
                            <p><span>Difficulty breathing - </span>Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develop difficulty breathing or shortness of breath</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link text-center mt-5">
                <div class="text">
                    <i class="bi bi-exclamation-triangle-fill fs-2 text-primary me-2"></i>
                    <p><span>Stay at home and call your doctor: </span>If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.</p>
                </div>
                <RouterLink to="/question" class=" btn btn-outline-primary text-light bg-primary p-2"><i class="bi bi-question-circle me-2"></i>  Have question about spreading?</RouterLink>
            </div>
        </div>
    </section>
    </template>
    
    
    <style scoped>
    .main-title h2::before{
        content: "WHAT ARE THE SYMPTOMS OF COVID-19";
    }
    .symptoms .row .box{
        position: relative;
    }
    .symptoms .row .box .image{
        position: absolute;
        top: -50%;
        transform: translateY(20%);
        right: 5%;
    }
    .symptoms .row .box .image img{
    width: 100PX;
    height: 100PX;
    border-radius: 50%;
    }
    .symptoms .row .box .info{
    padding: 10px;
    }
    .symptoms .row .box .info h5{
    color: var(--main-color);
    margin-bottom: 15px !important;
    }
    .symptoms .container > .link {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .symptoms .container > .link .text{
        display: flex;
        max-width: 70%;
        text-align: left;
    }
    .symptoms .container > .link .text p{
        font-size: 18px;
    }
    .symptoms .container > .link .text p span{
        color: var(--main-color);
        font-size: 22px;
    }
    @media (max-width: 767px) {
        .symptoms .container > .link .text p{
            font-size: 14px;
        }
        .symptoms .container > .link .text p span{
            color: var(--main-color);
            font-size: 16px;
        }
    
    }
    .symptoms .container > .link .btn{
    border-radius: 20px !important;
    margin-top: 20px;
    }
    @media (max-width: 767px) {
        .symptoms .container > .link {
            flex-direction: column;
            }
    }
    </style>