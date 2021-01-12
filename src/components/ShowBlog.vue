<template>
    <div  id="show-blogs">

         <h1>All Blog articles</h1>
         <input type="text" placeholder="Search blogs" v-model="search">
         <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.index" >
                 <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow >{{blog.title | to-uppercase}}</h2></router-link> 
                 <article>{{blog.content | snippet}}</article>
         </div>

   </div>
</template>


<script>
import searchMixins from '@/mixins/searchMixins'
export default {


    data(){
        return{
            blogs:[],
            search:'',
        }
    },
    methods:{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    },
    created(){
        this.$http.get('https://net-ninja-vue-project-default-rtdb.firebaseio.com/posts.json').then(function(data){
            return data.json();
        }).then(function(data){  //this is pomise and to get id we need to cycle through the object and return a id
            var blogsArray=[];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs=blogsArray;
        })
    },
    computed:{
        
    },
    filters:{
        // 'to-uppercase':function(value){
        //     return value.toUpperCase();
        // }
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet(value){
            return value.slice(0,100) + '...'
        }
    },

    directives:{
        'rainbow':{
            bind(el){
                el.style.color = '#'+ Math.random().toString().slice(2,8);
            }
        }
    },
    mixins:[searchMixins]
} 
</script>

<style scoped>
    #show-blogs{
        max-width:800px;
        margin:0 auto;
    }
    .single-blog{
        padding: 20px;
        margin:  20px 0;
        box-sizing:border-box;
        background: #eee ;
    }
    input[type='text']{
        width: 100%;
        display: block;
        margin: 0 auto;
    }
</style>