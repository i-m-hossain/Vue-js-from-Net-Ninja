<template>
  <div>
     <form-helper>
       <div slot="form-header">
         <h3>This is the title of the form </h3>
         <p>information about the form</p>

       </div>
       <div slot="form-fields">
          <input type="text" placeholder="Name" required>
          <input type="password" placeholder="Password" required>
       </div>
       <div slot="form-control">
         <button type="submit" v-on:click="handleSubmit"> Submit</button>
       </div>
       
     </form-helper>
  </div>
</template>

<script>
import FormHelper from '@/components/FormHelper';
export default {
  components: {
    'form-helper':FormHelper
    
  },
  data() {

    return{
    
      
    }
   
  },
    
}
</script>

<style scoped>

</style>
