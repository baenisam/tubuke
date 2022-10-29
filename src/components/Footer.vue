<template>
     <footer class="footer-section">
            <!--footer top start-->
            <!--for light footer add .footer-light class and for dark footer add .bg-dark .text-white class-->
            <div class="footer-top bg-dark text-white  ptb-60" style="background: url('/frontend/img/page-header-bg.svg')no-repeat bottom right">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                            <div class="footer-single-col">
                                <div class="footer-single-col mb-4">
                                    <img src="" id="ourLogo" alt="logo" class="img-fluid logo-white logo">
                                    <img src="" id="ourLogo" alt="logo" class="img-fluid logo-color logo">
                                </div>
                                <p>{{ $t("message.footerNew") }}</p>

                                <form class="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                                    <input type="text" class="input-newsletter form-control me-2" placeholder="Enter your email" v-model="data.email" required="" autocomplete="off">
                                    <button @click="saveNews()" type="button" class="btn btn-primary mt-3 mt-lg-0 mt-md-0">
                                        <Span v-if="loading" class="spinner-border spinner-border-sm"></Span>
                                        <Span v-else>Subscribe</Span> 
                                    </button>
                                   
                                    
                                </form>
                                <div class="ratting-wrap mt-4">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 mt-4 mt-md-0 mt-lg-0">
                                    <div class="footer-single-col">
                                        <h3>{{settings.app_name}}</h3>
                                        <ul class="list-unstyled footer-nav-list mb-lg-0">
                                            <li><router-link to="/about" class="text-decoration-none">{{$t('message.about')}}</router-link></li>
                                            <li><router-link to="/services" class="text-decoration-none">{{$t('message.services')}}</router-link></li>
                                            <li><router-link to="/project" class="text-decoration-none">{{$t('message.project')}}</router-link></li>
                                            <li><router-link to="/team" class="text-decoration-none">{{$t('message.team')}}</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                               
                                <div class="col-md-6 col-lg-6 mt-4 mt-md-0 mt-lg-0 justify-end">
                                    <div class="footer-single-col">
                                        <h3>Contacts</h3>
                                        <ul class="list-unstyled footer-nav-list mb-lg-0">
                                            <li><a class="text-decoration-none"><i class="fa fa-phone"></i> {{settings.phone}}</a></li>
                                            <li><a class="text-decoration-none"><i class="fa fa-envelope"></i> {{settings.email}}</a></li>
                                            <li><a class="text-decoration-none"><i class="fa fa-map"></i> {{settings.adresse}}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--footer top end-->

            <!--footer bottom start-->
            <div class="footer-bottom bg-dark text-white  py-4">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-7 col-lg-7">
                            <div class="copyright-text">
                                <p class="mb-lg-0 mb-md-0">&copy; {{new Date().getFullYear()}} {{settings.app_name}} All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="footer-single-col text-start text-lg-end text-md-end">
                                <ul class="list-unstyled list-inline footer-social-list mb-0">
                                    <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--footer bottom end-->
        </footer>
</template>
<style>
.logo{
    width:150px
}
</style>
<script>
import {getSettings, postNews} from '../config/serviceProvider';


export default {
    data(){
        return{
            settings:[],
            data:{
                email:''
            },
            loading:false
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

    methods:{
        saveNews(){
            this.loading = true
            postNews(this.data.email).then(
                res => {
                    if(res.status === 1){
                        this.$toast.success(res.message);
                        this.data.email = ''
                        this.loading = false
                    } else {
                        this.$toast.error(res.message);
                        this.loading = false
                    }            
                }
            ).catch(
                error => {
                    if (error.response) {
                        console.log(error.response.data.message);
                        this.$toast.error(error.response.data.message);
                        this.loading = false
                      } else if (error.request) {
                          console.log(error.request.message);
                          this.loading = false
                         
                      }  else {
                          console.log('Error', error.message.message);
                          this.loading = false
                         
                      }
                }
            )
        }
    }
}

</script>