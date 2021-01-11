<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form One- Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="Name" required>
                <label for="">Your Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
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
    components: {
        'form-helper':FormHelper,
    },
    data(){
        return {

        };
    },
    methods: {
        
        
    }
    
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>