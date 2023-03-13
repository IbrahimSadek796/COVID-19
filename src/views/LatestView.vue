<template>
    <section class="latest py-5 mt-5" id="latest">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">latest update</h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5 p-3">
                        <div class="image">
                            <img src="../assets/image/blog-a.jpg" alt="">
                        </div>
                        <div class="info">
                            <h5>Caring for Some One At Home</h5>
                            <p>Most people who get sick with COVID-19 will have only mild illness and shouldrecover at home.Care at home can help stop the spread of COVID-19</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-3 px-3 py-5">
                        <div class="image">
                            <img src="../assets/image/blog-b.jpg" alt="">
                        </div>
                        <div class="info">
                            <h5>15 Ways to kape safe and helthy</h5>
                            <p>Most people who get sick with COVID-19 will have only mild illness and shouldrecover at home.Care at home can help stop the spread of COVID-19</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box bg-body rounded shadow my-5 p-3">
                        <div class="image">
                            <img src="../assets/image/blog-c.jpg" alt="">
                        </div>
                        <div class="info">
                            <h5>If you think you are sick</h5>
                            <p>if you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.main-title h2::before{
    content: "resent from blog";
}
.latest .row .box .image img{
    width: 100%;
}
.latest .row .box .info{
    padding: 10px;
    text-align: center;
}
.latest .row .box .info h5{
    color: var(--font-color);
}
.latest .container > .link .btn{
    border-radius: 20px !important;
    margin-top: 20px;
}
</style>