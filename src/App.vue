<template>
  <div>
    <keep-alive>
            <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import FormOne from '@/components/FormOne';
import FormTwo from '@/components/FormTwo';

export default {
  components: {
    'form-one':FormOne,
    'form-two':FormTwo,
    
  },
  data() {

    return{ 
    
      component: 'form-two',
    }
   
  },
  methods:{
      handleSubmit: function(){
            alert('thanks for submitting');
        }
  }
    
}
</script>

<style scoped>
  body{
     margin: 0;
     font-family: 'Nunito SemiBold';
  }
</style>
