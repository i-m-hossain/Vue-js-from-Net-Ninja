<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form two -- LOG IN </h3>
                <p>Enter your details to login</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="User Name" required>
                <input type="password" placeholder="ENter your Password" required>
            </div>
            <div slot="form-control">
                <button type="submit" v-on:click="handleSubmit"> Submit</button>
            </div>
        </form-helper> 
        
    </div>
</template>

<script>

import FormHelper from '@/components/FormHelper'
export default {
    components:{
        'form-helper':FormHelper
    },
    data() {
        return{

        }
    },
    methods:{

    },


}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>