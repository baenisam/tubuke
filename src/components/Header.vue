<template>
    <main>
        
        <header class="main-header w-100 z-10">
            
            <nav class="navbar navbar-expand-xl navbar-light sticky-header">
                <div class="container d-flex align-items-center justify-content-lg-between position-relative">
                    <router-link  to="/" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                        <img :src="getImgUrl(settings.logo)" alt="logo" class="img-fluid logo-white logo" />
                        <img :src="getImgUrl(settings.logo)" alt="logo" class="img-fluid logo-color logo" />
                    </router-link>

                    <a class="navbar-toggler position-absolute right-0 border-0"
                        role="button">
                        <span class="far fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"
                            aria-controls="offcanvasWithBackdrop"></span>
                    </a>
                
                    <div class="clearfix"></div>
                    <div class="collapse navbar-collapse justify-content-center">
                        <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                            <li>
                                <router-link to="/" class="nav-link active"> {{ $t("message.home") }} </router-link>
                            </li>
                            <li>
                                <router-link to="/about" class="nav-link">{{ $t("message.about") }}</router-link>
                            </li>
                            <li>
                                <router-link to="/services" class="nav-link">{{ $t("message.services") }}</router-link>
                            </li>
                            <li>
                                <router-link to="/project" class="nav-link">{{ $t("message.project") }}</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {{ $t("message.ressources") }}
                                </a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom" style="width:300px">
                                        <div class="dropdown-grid-item">
                                            <router-link to="/gallery/photo" class="dropdown-link">
                                                <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-image"></i></span>
                                                <div class="dropdown-info">
                                                    <div class="drop-title">{{ $t("message.photo") }}</div>
                                                    <p>{{ $t("message.photoMsg") }}</p>
                                                </div>
                                            </router-link>
                                            <router-link to="/gallery/videos" class="dropdown-link">
                                                <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-play"></i></span>
                                                <div class="dropdown-info">
                                                    <div class="drop-title">{{ $t("message.video") }}</div>
                                                    <p>{{ $t("message.videoMsg") }}</p>
                                                </div>
                                            </router-link>
                                            <router-link to='/blog' class="dropdown-link">
                                                <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-edit"></i></span>
                                                <div class="dropdown-info">
                                                    <div class="drop-title">{{ $t("message.blog") }}</div>
                                                    <p>{{ $t("message.blogMsg") }}</p>
                                                </div>
                                            </router-link>
                                            <router-link to="/team" class="dropdown-link">
                                                <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-users"></i></span>
                                                <div class="dropdown-info">
                                                    <div class="drop-title">{{ $t("message.team") }}</div>
                                                    <p>{{ $t("message.teamMsg") }}</p>
                                                </div>
                                            </router-link>
                                           
                                        </div>
                                    
                                    </div>
                                </div>
                            </li>
                        </ul>
                       

                     
                        <div class="language" role="radiogroup" aria-labelledby="language-switcher2">
                            <div class="language__container--left language__container--fr">
                              <input  v-model="lang" class="language__control" value="fr" type="radio" id="language2-1"  v-on:change="handleChange($event)">
                              <label class="language__label" for="language2-1">
                                FR
                              </label>
                            </div>
                            <div class="language__container--right language__container--en">
                              <input v-model="lang" class="language__control" value="en" type="radio" id="language2-2"  v-on:change="handleChange($event)">
                              <label class="language__label" for="language2-2">
                                EN
                              </label>
                            </div>
                            
                          </div>
                     
                          
                    
  



                    </div>
                   
                
                
                    
                    <div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                        <router-link to="/contact" href="" class="btn btn-outline-primary">{{$t("message.contact")}}
                        </router-link>
                       
                    </div>
                </div>
            </nav>
            <!--offcanvas menu start-->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
                <div class="offcanvas-header d-flex align-items-center mt-4">
                    <router-link to="/" href="index.html" class="d-flex align-items-center mb-md-0 text-decoration-none">
                        <img :src="getImgUrl(settings.logo)" alt="logo" class="img-fluid ps-2 logo" />
                    </router-link>
                    <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="far fa-close"></i>
                    </button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                        <li>
                            <router-link to="/" class="nav-link active"> {{ $t("message.home") }} </router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="nav-link">{{ $t("message.about") }}</router-link>
                        </li>
                        <li>
                            <router-link to="/services" class="nav-link">{{ $t("message.services") }}</router-link>
                        </li>
                        <li>
                            <router-link to="/project" class="nav-link">{{ $t("message.project") }}</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ $t("message.ressources") }}
                            </a>
                            <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div class="dropdown-grid rounded-custom" style="width:300px">
                                    <div class="dropdown-grid-item">
                                        <router-link to="/gallery/photo" class="dropdown-link">
                                            <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-image"></i></span>
                                            <div class="dropdown-info">
                                                <div class="drop-title">{{ $t("message.photo") }}</div>
                                                <p>{{ $t("message.photoMsg") }}</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/gallery/videos" class="dropdown-link">
                                            <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-play"></i></span>
                                            <div class="dropdown-info">
                                                <div class="drop-title">{{ $t("message.video") }}</div>
                                                <p>{{ $t("message.videoMsg") }}</p>
                                            </div>
                                        </router-link>
                                        <router-link to='/blog' class="dropdown-link">
                                            <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-edit"></i></span>
                                            <div class="dropdown-info">
                                                <div class="drop-title">{{ $t("message.blog") }}</div>
                                                <p>{{ $t("message.blogMsg") }}</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/team" class="dropdown-link">
                                            <span class="demo-list bg-primary rounded text-white fw-bold"><i class="fa fa-users"></i></span>
                                            <div class="dropdown-info">
                                                <div class="drop-title">{{ $t("message.team") }}</div>
                                                <p>{{ $t("message.teamMsg") }}</p>
                                            </div>
                                        </router-link>
                                       
                                    </div>
                                
                                </div>
                            </div>
                        </li>
                    </ul>
                
                    <div class="action-btns mt-4 ps-3">
                        <router-link to="/contact" class="btn btn-outline-primary">Contact us
                        </router-link>

                        <center style="position:absolute; bottom:20%; left:0px; right:0px">
                        <div class="language" role="radiogroup" aria-labelledby="language-switcher2">
                            <div class="language__container--left language__container--fr">
                              <input v-model="lang" class="language__control" value="fr" type="radio" id="language2-1" name="language-switch2" v-on:change="handleChange($event)">
                              <label class="language__label" for="language2-1">
                                FR
                              </label>
                            </div>
                            <div class="language__container--right language__container--en">
                              <input v-model="lang" class="language__control" value="en" type="radio" id="language2-2" name="language-switch2" v-on:change="handleChange($event)">
                              <label class="language__label" for="language2-2">
                                EN
                              </label>
                            </div>
                          </div>
                        </center>
                    </div>
                </div>
            </div>
            <!--offcanvas menu end-->
        </header>
    </main>
</template>
<style>
.logo{
    width:100px
}
</style>
<script>
import {getBlogCategory, getSettings} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';


export default {
    data(){
        return{
            settings:[],
            lang:localStorage.getItem('lang')
        }
    },
   async created(){
      await getSettings().then(res => { 
            this.settings = res.data;
            console.log(this.settings)
        }).catch(error => {
            console.log(error)
        })


    },

    methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + 'logo/' + imagePath;
    },
    blog(){
      this.$router.push('/blog')
    },
    services(){
      this.$router.push('/services')
    },

     handleChange(event){
        localStorage.setItem('lang', event.target.value);
        window.location.reload();

    }
  }
}

   

</script>


