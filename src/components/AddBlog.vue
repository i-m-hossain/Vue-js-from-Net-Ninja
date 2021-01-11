<template>
  <div id="add-blog" >
      <h2>Add a  new blog post</h2>
      <form action="" v-if="!submitted" >
        <label for=""> Blog title</label>
        <input type="text" v-model="blog.title" required>
        <label for="">Blog content</label>
        <textarea name="" id="" cols="15" rows="10" v-model="blog.content" required></textarea>
        <div id="checkboxes">
            <label for="">Ninjas</label>
            <input type="checkbox" name="" id="" value="Ninjas" v-model="blog.categories">
            <label for="">Imran</label>
            <input type="checkbox" name="" id="" value="Imran" v-model="blog.categories">
            <label for="">Sadia</label>
            <input type="checkbox" name="" id="" value="Sadia" v-model="blog.categories">
            <label for="">Zoey</label>
            <input type="checkbox" name="" id="" value="Zoey" v-model="blog.categories">
        </div>
        <label for="">Authors</label>
        <select name="" id="" v-model="blog.author">
            <option v-for="author in authors" :key="author.index">{{author}}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
          <h3>You Post is submittted successfully</h3>
      </div>
      <div id="preview">
          <h3>Preview of the blog post</h3>
          <p>Blog Title: {{blog.title}}</p>
          <p>Blog content: </p>
          <p>{{blog.content}}</p>
          <p>Blog Categories</p>
          <ul>
              <li v-for="category in blog.categories" :key="category.index">{{category}}</li>
          </ul>
          <p>Author: {{blog.author}}</p>
      </div>
     
  </div>
    
</template>

<script>


export default {
  
  data() {

    return{ 
        blog:{
            title:"",
            content:"",
            categories:[],
            author:"",
        },
        authors:['Imran', 'Sadia', 'Zoey', 'Aladin'],
        submitted:false,

      
    }
   
  },
  methods:{
     post:function(){
         this.$http.post('https://jsonplaceholder.typicode.com/posts',{
             title: this.blog.title,
             body: this.blog.content,
             userId:1
         }).then(function(data){
             console.log(data);
             this.submitted = true;
         });
     }
  }
    
}
</script>

<style scoped>
    #add-blog*{
      box-sizing: border-box;
      }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }  
    input[type="text"], textarea{
        display: block;
        width: 100%;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
</style>
