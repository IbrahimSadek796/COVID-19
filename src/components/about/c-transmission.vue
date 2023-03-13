<template>
    <section class="transmission py-5 mt-5" id="transmission">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">transmission of covid-19</h2>
                <p>Because it's a new illness, we do not know exactly how coronavirus spreads from person to person. Similar viruses are
                    spead in cough droplets</p>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../../assets/image/spread-a.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Person-to-Person spread as close contact with infacted</h5>
                            <p>The coronavirus is thought to pread mainly from person to person.This can happen between people who are
                                    in close contact with one another</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../../assets/image/spread-b.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Touching our contact with infacted surfaces of objacts</h5>
                            <p>A person can get COVID-19 by touching a surface or object that has the virus on it and then touching
                                their own mouth, nose or possibly their eyes</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5">
                        <div class="image">
                            <img src="../../assets/image/spread-c.png" alt="">
                        </div>
                        <div class="info">
                            <h5>Droplets that from infacted person coughs or sneezes</h5>
                            <p>The coronavirus is thought to pread mainly from person to person.This can happen between people who are
                                in close contact with one another</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link text-center mt-5">
                <RouterLink to="/question" class=" btn btn-outline-primary text-light bg-primary"><i class="bi bi-question-circle me-2"></i>  Have question about spreading?</RouterLink>
            </div>
        </div>
    </section>
</template>


<style scoped>
.main-title h2::before{
    content: "How coronavirus is spread";
}
.transmission .row .box .image img{
    width: 100%;
}
.transmission .row .box .info{
    border-top: 5px solid #0077b6;
    padding: 10px;
}
.transmission .row .box .info h5{
    color: var(--main-color);
}
.transmission .container > .link .btn{
    border-radius: 20px !important;
    margin-top: 20px;
}
</style>