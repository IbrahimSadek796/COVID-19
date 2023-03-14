<template>
    <section class="steps" id="steps">
        <div class="container">
            <div class="title">
                <h2>Follow steps to wash hands</h2>
                <RouterLink to="#">why do I need to wash hands <i class="bi bi-arrow-right-short fs-2 fw-bold ms-3"></i></RouterLink>
            </div>
            <div class="row mt-5 py-5">
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-a.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Soap on Hands</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-b.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Plam on Plam</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-c.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Between Fingers</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-d.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Back to Hands</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-e.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Clean with Water</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="box">
                        <div class="image">
                            <img src="@/@/assets/image/hand-f.png" alt="">
                        </div>
                        <div class="text py-4">
                            <span>Focus on Wrist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.steps .title {
    text-align: center;
}
.steps .title a {
    display: flex;
    align-items: center;
    justify-content: center;
}
.steps .box .image img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
}
.steps .box .text span{
    font-weight: bold;
}
</style>