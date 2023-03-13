<template>
    <header class="bg-white">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <RouterLink class="navbar-brand" to="/">C<img src="../../assets/image/TitleIcon.png">VID19</RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse positio-relative" id="navbarScroll">
                      <ul class="navbar-nav my-lg-0">
                        <li @click="hideMenu" class="nav-item  me-2">
                          <RouterLink @click="ChangeStyle" data-num="0" :class="['nav-link' , isSelected[0]?'change':'' ]" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li @click="hideMenu" class="nav-item me-2">
                          <RouterLink @click="ChangeStyle" data-num="1" :class="['nav-link' , isSelected[1]?'change':'']" to="/about">About Corona</RouterLink>
                        </li>
                        <li @click="hideMenu" class="nav-item me-2">
                          <RouterLink @click="ChangeStyle" data-num="2" :class="['nav-link' , isSelected[2]?'change':'']" to="/symptoms">Symptoms</RouterLink>
                        </li>
                        <li @click="hideMenu" class="nav-item me-2">
                          <RouterLink @click="ChangeStyle" data-num="3" :class="['nav-link' , isSelected[3]?'change':'']" to="/prevention">Prevention</RouterLink>
                        </li>
                        <li @click="hideMenu" class="nav-item  me-2">
                            <RouterLink @click="ChangeStyle" data-num="4" :class="['nav-link' , isSelected[4]?'change':'']" to="/treatment">Treatment</RouterLink>
                          </li>
                          <li @click="hideMenu" class="nav-item me-2">
                            <RouterLink @click="ChangeStyle" data-num="5" :class="['nav-link' , isSelected[5]?'change':'']" to="/question">FAQ</RouterLink>
                          </li>
                          <li @click="hideMenu" class="nav-item me-2">
                            <RouterLink @click="ChangeStyle" data-num="6" :class="['nav-link' , isSelected[6]?'change':'']" to="/latest">News</RouterLink>
                          </li>
                          <li @click="hideMenu" class="nav-item me-2">
                            <RouterLink @click="ChangeStyle" data-num="7" to="/dont" :class="['nav-link' , isSelected[7]?'change':'' , 'btn' ,  'btn-outline-primary' ,  'text-light' ,  'bg-primary' ,  'rounded-5' ,  'ms-2']">Do & Don't</RouterLink>
                          </li>
                      </ul>
                      <div @click="hideMenu" class="close position-absolute d-flex justify-content-center align-items-center text-white">
                        <i class="bi bi-x-circle-fill fs-1"></i>
                      </div>
                    </div>
                  </div>
              </nav>
    </header>
</template>

<style>
header{
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
    z-index: 99;
}
.navbar .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar .container > a{
    font-weight: 900;
    color: var(--font-color);
    font-size: 22px;
    
}
.navbar .container > a >img {
    max-width: 30px;
    max-height: 30px;
}
.navbar .container > .collapse{
    width: 70%;
    justify-content: end !important;
}
.navbar .container > .collapse .navbar-nav  .nav-link{
    font-weight: bold;
    font-size: 20px;
    color: var(--font-color);
}
.navbar .container > .collapse .navbar-nav .change{
  color: var(--main-color) !important;
}
.navbar .container > .collapse .navbar-nav  .nav-link:hover{
    color: var(--main-color) !important;
}
.navbar .container > .collapse .close{
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  display: none;
  opacity: 0;
  z-index: -1;
}
@media (max-width: 991px) {
  .navbar .container{
    width: 100%;
  }
  .navbar .container > .collapse{
    background-color: #2d4062b1;
        min-height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
  }
  .navbar-nav{
    text-align: left;
    background-color: white;
    padding: 40px !important;
    height: 100%;
    max-width: 65%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: flex-start;
}
.navbar .container > .collapse .close{
  display: block;
  opacity: 1;
  z-index: 999;
}
}
</style>

<script>
export default{
  data(){
    return{
      isSelected: [ true , false , false , false ,false , false , false ,false]
    }
  },
  methods:{
    hideMenu:function(){
            let collapse = document.querySelector('.collapse')
            collapse.classList.remove('show')
        },
        ChangeStyle:function(e){

          window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });

          for (let index = 0; index < this.isSelected.length; index++) {
           this.isSelected[index] = false ;
            
          }
          let num = e.target.getAttribute('data-num')
          this.isSelected[num] = true ;
        },
  },
}
</script>