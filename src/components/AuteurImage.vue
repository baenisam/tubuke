<template>
    <div class="avatar">
        <img :src="getImgUrl(settings.logo)" alt="avatar" width="40" class="img-fluid rounded-circle me-3">
    </div>
</template>
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
        getImgUrl: function (imagePath) {
      return SOCKET_URL + 'logo/' + imagePath;
    },
    }
}

</script>