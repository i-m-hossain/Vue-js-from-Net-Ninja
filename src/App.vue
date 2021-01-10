<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Ninjas from '@/components/Ninjas';
import Footer from '@/components/Footer';
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
  },
  data() {
   
  }  
}
</script>

<style scoped>

</style>
