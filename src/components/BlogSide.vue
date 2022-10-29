<template>
    <div class="col-lg-4">
        <div
          class="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
        >
          <img
            :src="getImgUrlLogo(settings.short_cut)"
            alt="author"
            width="120"
            class="img-fluid shadow-sm rounded-circle"
          />
          <div class="author-info my-4">
            <h5 class="mb-0">{{settings.app_name}}</h5>
          </div>
          <p class="justify">
          {{about.content}}
          </p>
          <ul
            class="list-unstyled author-social-list list-inline mt-3 mb-0"
          >
            <li class="list-inline-item">
              <a target="_blank" :href="`${settings.linkedin}`"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" :href="`${settings.twitter}`"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" :href="`${settings.youtube}`"><i class="fab fa-youtube"></i></a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" :href="`${settings.facebook}`"><i class="fab fa-facebook-f"></i></a>
            </li>
          </ul>
        </div>
      </div>
</template>
<style>
.justify{
    text-align: justify
}
</style>

<script>
import {getBlogCategory, getSettings, getAbout} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';


export default {
    data(){
        return{
            settings:[],
            about:{},
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

        await getAbout().then(res => { 
            this.about = res.data;
            console.log(this.about)
        }).catch(error => {
            console.log(error)
        })


    },

    methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + 'logo/' + imagePath;
    },
    getImgUrlLogo: function (imagePath) {
      return SOCKET_URL + 'logo/' + imagePath;
      
    },
     handleChange(event){
        localStorage.setItem('lang', event.target.value);
        window.location.reload();

    }
  }
}

   

</script>