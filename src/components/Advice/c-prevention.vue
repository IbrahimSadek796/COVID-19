<template>
    <div class="prevention py-5 mt-5">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">prevention & advice</h2>
                <p>There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).<span class="fw-bold">The best way to prevent illness is to avoid being exposed to the virus</span> Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority</p>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="box my-5">
                        <div class="image">
                            <img src="../../assets/image/advice-a.png" alt="">
                        </div>
                        <div class="info">
                            <h5>What your hands frequently</h5>
                            <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box my-5">
                        <div class="image">
                            <img src="../../assets/image/advice-b.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Maintain social distancing</h5>
                            <p>Maintain at least 1 meter (3 feet) distance between yourself &amp; anyone who is coughing or sneezing. If you are too close, get chance to infected</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box my-5">
                        <div class="image">
                            <img src="../../assets/image/advice-c.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Avoid touching face</h5>
                            <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box my-5">
                        <div class="image">
                            <img src="../../assets/image/advice-d.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Practice respiratory hygience</h5>
                            <p>Maintain good respiratory hygine as covering your mouth &amp; nose with your bent elbow or tissue when cough or sneeze</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link text-center mt-5">
                <RouterLink to="#steps" class=" btn btn-outline-primary text-light bg-primary me-3">Check how you wash hand <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
                <RouterLink to="#question" class=" btn text-primary">Q&A on Coronavirus <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.main-title h2::before{
    content: "How coronavirus is spread";
}
.prevention .row .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.prevention .row .box .image img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.prevention .row .box .info{
    
    padding: 10px;
}
.prevention .row .box .info h5{
    color: var(--main-color);
}
.prevention .container > .link {
   display: flex;
   align-items: center;
   justify-content: center;
   
}
.prevention .container > .link .btn{
    border-radius: 30px !important;
    margin-top: 20px;
   display: flex;
   align-items: center;
   width: fit-content;
   justify-content: center;
   flex-direction: row;
}
@media (max-width: 767px) {
    .prevention .container > .link {
        flex-direction: column;
        
     }
     .prevention .container > .link .btn{
         border-radius: 30px !important;
         margin-top: 20px;
        display: flex;
        align-items: center;
        width: fit-content;
        justify-content: center;
        flex-direction: row;
     }
}
</style>