<template>
    <div class="main-wrapper">

        <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" style="background: url('frontend/img/page-header-bg.svg')no-repeat center bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading text-center">
                            <h1 class="display-5 fw-bold">{{$t('message.project')}}</h1>
                            </div>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                   
                </div>

            </div>
        </section>
       
        
        <section class="masonary-blog-section ptb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12" v-for="post in posts">
                        <div class="single-article feature-article rounded-custom my-3">
                             <router-link :to="'to'" @click="navigate(post.id_pub, post.slug)" class="article-img">
                                <img :src="getImgUrl(post.image)" alt="article" class="img-fluid">
                             </router-link>
                            <div class="article-content p-4">
                                <div class="article-category mb-4 d-block">

                                </div>
                                 <router-link :to="'to'"  @click="navigate(post.id_pub, post.slug)">
                                    <h2 class="h5 article-title limit-2-line-text">{{post.titre}}</h2>
                                 </router-link>
                                <p class="limit-2-line-text">{{post.content.substring(0,300)+"..."}}</p>

                                <a href="javascript:;">
                                    <div class="d-flex align-items-center pt-4">
                                        <div class="avatar">
                                           
                                        </div>
                                        <div class="avatar-info">
                                            <span class="small fw-medium text-muted">{{post.created}}</span>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                
                </div>


                <!--pagination start-->
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-auto my-1">
                        <a href="#" class="btn btn-soft-primary btn-sm">Previous</a>
                    </div>
                    <div class="col-auto my-1">
                        <nav>
                            <ul class="pagination rounded mb-0">
                                <li class="page-item"><a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-auto my-1">
                        <a href="#" class="btn btn-soft-primary btn-sm">Next</a>
                    </div>
                </div>
                <!--pagination end-->
            </div>
        </section>
    </div>
</template>
<script>
import {getBlogCategory, getPosts, getProjects} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';


export default {
    data(){
        return{
            category:[],
            posts:[],
            url:SOCKET_URL
        }
    },
   async created(){
      await getBlogCategory().then(res => { 
            this.category = res.data;
            console.log(this.category)
        }).catch(error => {
            console.log(error)
        })

        await getProjects().then(res => { 
            this.posts = res.data;
            console.log(this.posts)
        }).catch(error => {
            console.log(error)
        })
    },

    methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + 'posts/' + imagePath;
    },
    navigate(id, slug){
        this.$router.push('/project/' + slug + '/' + id)
    }
  }
}

   

</script>