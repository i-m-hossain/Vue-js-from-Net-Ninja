<template>
  <div>
    <add-blog></add-blog>
   
  </div>
    
</template>

<script>
import AddBlog from '@/components/AddBlog'

export default {
  components:{
    'add-blog':AddBlog,
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
