<template>
    <section class="footer" id="footer">
        <div class="overlay"></div>
        <div class="container">
            <div class="links">
                <h2 class="navbar-brand" href="#">C<span><img src="../../assets/image/iconnew.png"></span>VID<span>19</span></h2>
                <p>This website is for health information and advice about coronavirus (COVID-19), how to prevent and protect yourself from disease.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, temporibus!</p>
                <div class="row g-2 py-5">
                    <div class="col-md-4">
                        <div class="buttons">
                            <button class="btn btn-outline-primary bg-primary text-white">Find Us On Facebook</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="buttons">
                            <button class="btn btn-outline-info bg-info text-white">Find Us On Twiter</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="buttons">
                            <button class="btn btn-outline-danger bg-danger text-white">Find Us On Instagram</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="quick-link">
                            <h4>QUICK LINK</h4>
                            <a href="">About Corona</a>
                            <a href="">Symptoms</a>
                            <a href="">Prevetion</a>
                            <a href="">Protect Your Self</a>
                            <a href="">FAQs</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="quick-link">
                            <h4>HELPFULL LINK</h4>
                            <a href="">Healthcare Professional</a>
                            <a href="">Healthcare Facilites</a>
                            <a href="">Older Adultes & Medical Condition</a>
                            <a href="">Repare Your Family</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="quick-link">
                            <h4>IMPORTANT LINK</h4>
                            <a href="">HOW Website</a>
                            <a href="">CDC Wabsite</a>
                            <a href="">NHS Wabsite</a>
                            <a href="">Harved Website</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copy-right py-5">
                <div class="text">
                    <p>© 2021 COVID-19 Template Made by <span class="fw-bold">Ibrahim Sadek</span></p>
                    <p>Disclaimer: We hope you find the information on this website useful. This website is for general information and raise awareness of (2019-nCOV) only.All the information based on WHO,NHS and CDC website.Information on our website is meant for awareness, if you have any doubt please verify from respective site.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.footer{
    background-image: url(../../assets/image/shape-a.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.footer .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0%;
    top: 0;
    bottom: 0%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 0;
}
.footer .container {
    position: relative;
    color: #fff;
    padding-top: 50px;

}
.footer .container .links{
    width: 70%;
    border-bottom: 2px solid #ffffff15;
}
.footer .container .links .buttons button{
    width: 100%;
}
.footer .container .links .quick-link{
    display: flex;
    justify-content:left;
    flex-direction: column;
    text-align: left;
}
.footer .container .links .quick-link a{
    margin-bottom: 10px;
    text-align: left;
    color: #fff;
}
.footer .container h2 {
    font-weight: bold;
    font-size: 35px;
}
.footer .container h2 img{
    width: 30px;
    height: 30px;
}
.footer .container h2 span{
    color: var(--font-color);
}
</style>