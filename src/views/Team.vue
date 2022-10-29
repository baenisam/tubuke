<template>
    <div class="main-wrapper">
        
        <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" style="background: url('frontend/img/page-header-bg.svg')no-repeat bottom left">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <h1 class="display-5 fw-bold">{{$t('message.teamTitle')}}</h1>
                        <p class="lead">
                           {{$t('message.teamSection')}}
                        </p>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="team-section ptb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading text-center">
                            <h5 class="h6 text-primary">{{$t('message.team')}}</h5>
                            <h2>{{$t('message.teamTitle')}}</h2>
                            <p>
                                {{$t('message.teamSection')}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-for="team in teams" class="col-lg-3 col-md-6">
                        <div class="team-single-wrap mt-5">
                            <div class="team-img rounded-custom">
                                <img :src="getImgUrl(team.photo)" alt="team" class="img-fluid position-relative" />
                                <ul class="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li class="list-inline-item">
                                        <a target="_blank" :href="`${team.linkedin}`"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a target="_blank" :href="`${team.twitter}`"><i class="fab fa-twitter"></i></a>
                                    </li>
                
                                    <li class="list-inline-item">
                                        <a target="_blank" :href="`${team.facebook}`"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="team-info mt-4 text-center">
                                <h5 class="h6 mb-1">{{team.nom}} {{team.post_nom}}</h5>
                                <p class="text-muted small mb-0">{{team.fonction}}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>
<script>
import {getTeam} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';


export default {
    data(){
        return{
            teams:[]
        }
    },
   async created(){
      await getTeam().then(res => { 
            this.teams = res.data;
            console.log(this.teams)
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + 'team/' + imagePath;
    }
}
}

</script>