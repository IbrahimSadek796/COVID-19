<template>
    <section class="symptoms py-5 mt-5" id="symptoms">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">symptoms of covid-19</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, at error! Dolorem, saepe dolorum error ut esse vel, asperiores animi perspiciatis itaque cum placeat ratione aspernatur dicta odio fugiat minima.</p>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../assets/image/symptom-a.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Fever</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ducimus porro vitae officia nulla provident sunt in nostrum natus repellat?</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../assets/image/symptom-b.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Cough</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ducimus porro vitae officia nulla provident sunt in nostrum natus repellat?</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../assets/image/symptom-c.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Shortness of breath</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ducimus porro vitae officia nulla provident sunt in nostrum natus repellat?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link text-center mt-5">
                <div class="text">
                    <i class="bi bi-exclamation-triangle-fill fs-2 text-primary me-2"></i>
                    <p><span>Stay at home and call your doctor: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam eius illo ipsa eaque accusamus, quaerat voluptatem deleniti dolores voluptatibus neque repudiandae delectus necessitatibus, sapiente similique tempora quod fugiat officia error reiciendis modi itaque earum corporis nulla. Consequatur, enim dignissimos.</p>
                </div>
                <RouterLink to="/question" class=" btn btn-outline-primary text-light bg-primary"><i class="bi bi-question-circle me-2"></i>  Have question about spreading?</RouterLink>
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