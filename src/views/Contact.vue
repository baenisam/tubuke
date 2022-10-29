<template>
    <div class="main-wrapper">
        <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" style="background: url('/frontend/img/page-header-bg.svg')no-repeat bottom left">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <h1 class="display-5 fw-bold">{{$t('message.contact')}}</h1>
                        <p class="lead">{{$t('message.contactSection')}}</p>
                    </div>
                </div>
               
            </div>
        </section>
        <!--page header section end-->

        <!--contact us promo section start-->
        <section class="contact-promo ptb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                            <span class="fad fa-comment-alt-lines fa-3x text-primary"></span>
                            <div class="contact-promo-info mb-4">
                                <h5>{{$t('message.contactPage.chat')}}</h5>
                                <p>{{$t('message.contactPage.chatContent')}}
                                </p>
                            </div>
                            <a :href="'mailto:'+settings.email" class="btn btn-link mt-auto">{{$t('message.contactPage.chat')}}</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                            <span class="fad fa-envelope fa-3x text-primary"></span>
                            <div class="contact-promo-info mb-4">
                                <h5>{{$t('message.contactPage.email')}}</h5>
                                <p>{{$t('message.contactPage.emailContent')}}</p>
                            </div>
                            <a :href="'mailto:'+settings.email" class="btn btn-primary mt-auto">{{$t('message.contactPage.email')}}</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                            <span class="fad fa-phone fa-3x text-primary"></span>
                            <div class="contact-promo-info mb-4">
                                <h5>{{$t('message.contactPage.call')}}</h5>
                                <p>{{$t('message.contactPage.callContent')}}
                                </p>
                            </div>
                            <a :href="'tel:'+settings.phone" class="btn btn-link mt-auto">{{settings.phone}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--contact us promo section end-->

        <!--contact us form start-->
        <section class="contact-us-form pt-60 pb-120" style="background: url('/frontend/img/shape/contact-us-bg.svg')no-repeat center bottom">
            <div class="container">
                <div class="row justify-content-lg-between align-items-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="section-heading">
                            <h2>{{$t('message.contactPage.title')}}</h2>
                           
                        </div>
                        <form action="#" class="register-form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="firstName" class="mb-1">{{$t('message.contactPage.form.nom')}}<span
                                            class="text-danger">*</span></label>
                                    <div class="input-group mb-3">
                                        <input type="text" v-model="data.nom" class="form-control" id="firstName" required :placeholder="$t('message.contactPage.form.nom')" aria-label="First name">
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <label for="lastName" class="mb-1">{{$t('message.contactPage.form.post')}}</label>
                                    <div class="input-group mb-3">
                                        <input type="text" v-model="data.post_nom" class="form-control" id="lastName" :placeholder="$t('message.contactPage.form.post')" aria-label="Last name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <label for="phone" class="mb-1">{{$t('message.contactPage.form.phone')}} <span class="text-danger">*</span></label>
                                    <div class="input-group mb-3">
                                        <input type="text" v-model="data.phone" class="form-control" id="phone" required :placeholder="$t('message.contactPage.form.phone')" aria-label="Phone">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <label for="email" class="mb-1">{{$t('message.contactPage.form.email')}}<span class="text-danger">*</span></label>
                                    <div class="input-group mb-3">
                                        <input type="email" v-model="data.email" class="form-control" id="email" required :placeholder="$t('message.contactPage.form.email')" aria-label="Email">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="yourMessage" class="mb-1">Message <span class="text-danger">*</span></label>
                                    <div class="input-group mb-3">
                                        <textarea v-model="data.message" class="form-control" id="yourMessage" required :placeholder="$t('message.contactPage.form.message')" style="height: 120px"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="button" @click="saveNews()" class="btn btn-primary mt-4">
                                <Span v-if="loading" class="spinner-border spinner-border-sm"></Span>
                                <Span v-else>{{$t('message.contactPage.form.btn')}}</Span> 
                                
                                </button>
                        </form>
                    </div>
                    <div class="col-lg-5 col-md-10">
                        <div class="contact-us-img">
                            <img src="/frontend/img/contact-us-img-2.svg" alt="contact us" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
import {getSettings, postNews, postContact} from '../config/serviceProvider';



export default {
    data(){
        return{
            settings:[],
            data:{
                email:'',
                nom:'',
                post_nom:'',
                phone:'',
                message:''
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
            postContact(this.data.nom, this.data.post_nom, this.data.email, this.data.phone, this.data.message).then(
                res => {
                    if(res.status === 1){
                        this.$toast.success(res.message);
                        this.data.email = '',
                        this.data.nom = '',
                        this.data.post_nom = '',
                        this.data.message = '',
                        this.data.phone = '',
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