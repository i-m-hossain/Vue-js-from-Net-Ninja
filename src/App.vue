<template>
  <div>
    <!-- <add-blog></add-blog>
    <show-blog></show-blog>
    <list-blogs></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
    
</template>

<script>
// import AddBlog from '@/components/AddBlog'
// import ShowBlog from './components/ShowBlog.vue'
// import ListBlogs from '@/components/ListBlogs'
 import Header from '@/components/Header'
 
export default {
  components:{
    // 'add-blog':AddBlog,
    // 'show-blog':ShowBlog,
    // 'list-blogs':ListBlogs,
    'app-header':Header,
    
  },
  data() {

    return{ 
    
      
    }
   
  },
  methods:{
     
  }
    
}
</script>

<style scoped>
  body{
     margin: 0;
     font-family: 'Nunito SemiBold';
  }
</style>
