import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'
import ListBlogs from '@/components/ListBlogs'
import SingleBlog from '@/components/SingleBlog'

 
export default [

    { path: '/', component: ShowBlog },
    { path: '/list', component: ListBlogs },
    { path: '/add', component: AddBlog },
    { path: '/blog/:id', component: SingleBlog},
]