<template>
    <section class="dont py-5 mt-5" id="dont">
        <div class="container">
            <div class="main-title">
                <h2 class="mb-3">Protact yourself</h2>
                <p>The best thing you can do now is plan for how you can adapt your daily routine. Take few steps to protect yourself as clean your hands often, Avoid close contact, Cover coughs and sneezes, clean saily used surfaces etc. The best way to prevent illness is to avoid being exposed to this virus</p>
            </div>
            <div class="row py-5">
                <div class="col-md-4">
                    <div class="box">
                        <div class="sm-image">
                            <p>Avoid Close Contact</p>
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-a.png" alt="">
                            </div>
                        </div>
                        <div class="sm-image">
                            <p>Don't Touch Face</p>
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-b.png" alt="">
                            </div>
                        </div>
                        <div class="sm-image">
                            <p>Social Distancing</p>
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-c.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-5 pt-4">
                    <div class="image">
                        <img class="w-100" src="../assets/image/protect.png" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="gre-image">
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-a.png" alt="">
                            </div>
                            <p>Avoid Close Contact</p>
                        </div>
                        <div class="gre-image">
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-b.png" alt="">
                            </div>
                            <p>Don't Touch Face</p>
                        </div>
                        <div class="gre-image">
                            <div class="img">
                                <i class="bi bi-x-circle-fill"></i>
                                <img src="../assets/image/donts-c.png" alt="">
                            </div>
                            <p>Social Distancing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-title h2::before{
    content: "Do's & Don't";
}
.dont .container .box {
    color: blue;
    font-weight: bold;
}
.dont .container .box .sm-image,
.dont .container .box .gre-image{
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}
.dont .container .box .sm-image .img,
.dont .container .box .gre-image .img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid red;
    margin: 10px;
    position: relative;
}
.dont .container .box .sm-image .img i,
.dont .container .box .gre-image .img i{
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    color: red;
}
.dont .container .box .sm-image img,
.dont .container .box .gre-image img{
    width: 100%;
}
.dont .container .box .gre-image{
    float: left;
}
.dont .container .box .gre-image .img{
    
    border: 3px solid green;
}
.dont .container .box .gre-image .img i{
    color: green;
}

</style>