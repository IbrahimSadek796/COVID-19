<template>
    <section class="about mt-5 py-5" id="about">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-6">
                    <div class="text">
                        <h2 class="mb-3">coronavirus (COVID-19)</h2>
                        <p><span class="para fw-bold">COVID-19 is a new ilness that can affect
                            your lungs and airways. </span>It's caused by avirus called coronavirus. it was
                        discovered in December 2019 in Wuhan, Hubei, China.</p>

                        <p>Common signs of infection include repiratory symptoms, fever, cough,
                            shortness of breath and breathing difficulties. In more severe cases, infection can cause
                            pneumonia severe acute respiratory syndrome, kidney failure and even death.</p>

                        <p>Standard recommendations to prevent infection spread include regular
                            hand washing, covering mouth and nose when coughingand sneezing, thoroughly cooking meat and
                            eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as
                            coughing and sneezing.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="links bg-body rounded shadow">
                        <div class="title">
                            <h5>What you need to know</h5>
                        </div>
                        <div class="link">
                            <RouterLink to="/prevention">How coronavirus is spread <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                        <div class="link">
                            <RouterLink to="/symptoms">Symptoms of coronavirus <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                        <div class="link">
                            <RouterLink to="/prevention">How to protact yourself <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                        <div class="link">
                            <RouterLink to="/treatment">Treatment for coronavirus <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                        <div class="link">
                            <RouterLink to="/dont">Myth-Busters of coronavirus <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                        <div class="link">
                            <RouterLink to="/question">Questions & Ansower <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.about .text p{
    text-align: left;
    font-size: 18px;
    color: #5d5d5d;
    line-height: 1.5;
}
.about .text h2{
    position: relative;
    color: var(--font-color);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 40px;
    text-align: left;
    width: fit-content;
}
.about .text h2::before{
    content: "about the deases";
    width: fit-content;
    position: absolute;
    text-transform: uppercase;
    max-width: 200px;
    overflow: hidden;
    flex-wrap: nowrap;
    left: 0%;
    color: var(--main-color);
    top: -50%;
    font-size: 1.2rem;
}
.about .links {
    margin: auto;
    max-width: 75%;
    border: 1px solid #5d5d5d5d;
}
.about .links .title {
    padding: 5px 10px;
}
.about .links .link a{
    position: relative;
    padding: 2px 10px;
    border-top: 1px solid #5d5d5d5d;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media (max-width: 767px) {
    .about .text p{
        font-size: 16px;
        line-height: 1;
    }
    .about .text h2{
        font-size: 25px;
    }
    .about .links {
        max-width: 100%;
        justify-content: center;
        text-align: center;
    }
    .about .links .link a{
        padding: 2px 20px;
    }
}

</style>