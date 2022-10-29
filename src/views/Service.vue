<template>
    <div class="main-wrapper">

        <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" style="background: url('frontend/img/page-header-bg.svg')no-repeat bottom left">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <h1 class="display-5 fw-bold">{{$t('message.serviceTitle')}}</h1>
                        <p class="lead">{{$t('message.contactSection')}}</p>
                    </div>
                </div>
                  </div>
        </section>
        <!--page header section end-->

        <!--features grid section start-->
        <section class="feature-section ptb-120  bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-10">
                        <div class="section-heading text-center" data-aos="fade-up">
                            <h2>{{$t('message.services')}}</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="feature-grid">
                        
                            
                            <div v-for="service in services" class="feature-card bg-white   shadow-sm rounded-custom p-5" data-aos="fade-up" data-aos-delay="50">
                                <div class="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                                    <i class="fal fa-cog icon-sm text-warning"></i>
                                </div>
                                <div class="feature-content">
                                    <h3 class="h5">{{service.titre}}</h3>
                                    <p class="mb-0" v-if="service.content.length < 100">{{service.content}}</p>
                                    <p class="mb-0" v-else>{{service.content.substring(0,100)+".."}}</p>
                                    
                                </div>
                                <router-link :to="'/service/'+service.slug + '/' + service.id_pub " class="link-with-icon text-decoration-none mt-3">{{$t('message.plus')}}<i class="far fa-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </div>

</template>

<script>
import {getServices} from '../config/serviceProvider';


export default {
    data(){
        return{
            services:[]
        }
    },
   async created(){
      await getServices().then(res => { 
            this.services = res.data;
            console.log(this.services)
        }).catch(error => {
            console.log(error)
        })
    }
}

</script>

<style lang="scss" scoped>

</style>