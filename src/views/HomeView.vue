<template>
    <section class="home mt-5 py-5" id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="text">
                        <h1 class="mb-3">corona</h1>
                        <p>The coronavirus (COVID-19) was first reported in Wuhan, Hunei,China in December 2019 , the outbreak was later recognized as apandemic by the World Health Organization (WHO) on 11 March 2020..</p>
                    </div>
                    <div class="link">
                        <RouterLink to="/prevention" class="btn btn-outline-primary text-light bg-primary">How To Protect 
                            <i class="bi bi-pentagon-half ms-1"></i>
                        </RouterLink>
                        <RouterLink to="/about">About COVID-19 <i class="bi bi-arrow-right-short fs-2 fw-bold"></i></RouterLink>
                    </div>
  
                    <div class="stats mt-5 d-flex justify-content-between align-content-center mb-5 flex-column flex-lg-row text-center">
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">WORLDWIDE CASES</div>
                            <div class="num fs-3 fw-bold">8,949,671</div>
                        </div>
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">DEATHS</div>
                            <div class="num fs-3 fw-bold">467,432</div>
                        </div>
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">RECOVERD</div>
                            <div class="num fs-3 fw-bold">4,556,091</div>
                        </div>
                    </div>
                    <p class="text-black-50 fst-italic">*Last updated: Jun 21, 2020, 09:24 AM America/Chicago</p>
                
  
  
                </div>
                <div class="col-md-6">
                    <div class="image">
                        <img src="@/assets/image/header-a.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  
  <style>
  .home{
    background-image: url(../assets/image/shape-a.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .home .text{
    text-align: left;
    font-size: 22px;
    color: #5d5d5d;
    line-height: 1.8;
  }
  .home .text h1{
    position: relative;
    color: var(--font-color);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 80px;
    text-align: left;
    max-width: fit-content;
  }
  .home .text h1::before{
    content: "covid-19";
    width: 200px;
    position: absolute;
    text-transform: uppercase;
    overflow: hidden;
    flex-wrap: nowrap;
    left: 100%;
    color: #e63946;
    top: 15%;
    font-size: 1.5rem;
  }
  .home .text h1::after{
    content: "virus";
    width: fit-content;
    position: absolute;
    text-transform: uppercase;
    overflow: hidden;
    flex-wrap: nowrap;
    left: 100%;
    color: var(--font-color);
    bottom: 10%;
    font-size: 1.5rem;
  }
  .home .container .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home .container .link .btn{
    border-radius: 20px !important;
    padding: 10px 20px;
    font-size: 22px;
  }
  .home .container .link a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  .home .image img{
    width:100%;
  }
  @media (max-width: 991px) {
    .home .text h1{
        font-size: 50px;
    }
    .home .text h1::before,
    .home .text h1::after{
        font-size: 1.2rem;
    }
    .home .text p{
        line-height: 1.8;
        font-size: 18px;
        padding: 0%;
    }
    .home .container .link .btn{
        padding: 5px;
        font-size: 18px;
        margin-right: 10px;
    }
    .home .image img{
        width:100%;
    }
  }
  @media (max-width: 767px) {
    .home .text h1{
       
        font-size: 30px;
    }
    .home .text h1::before{
        font-size: 1rem;
        max-width: 100px;
        top: 0%;
    }
    .home .text h1::after{
        font-size: 1rem;
        max-width: 100px;
        bottom: 0%;
    }
    .home .text p{
        line-height: 1.5;
        font-size: 14px;
        margin: 10px 0px;
        padding: 0%;
    }
    .home .container .link a{
        font-size: 10px !important;
    }
    .home .container .link .btn{
        padding: 5px;
        font-size: 10px;
        margin-right: 5px;
    }
    
  }
  </style>
  