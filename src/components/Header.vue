<template>
    
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>

</template>

<script>
import {bus} from '../main';
export default {

    props:{
        title:{
            type:String
        }
    },
    data(){
       
    },
    methods:{
        changeTitle:function(){
            // this.$emit('changeTitle', 'updated title with event')
            this.title = 'Title with event bus';
            bus.$emit('titleChanged', 'Title with event bus');
        }
    }
    
}
</script>

<style scoped>

header{
    background: lightgreen;
    padding:10px;

}
h1{
    color :#222;
    text-align:center;
}


</style>
