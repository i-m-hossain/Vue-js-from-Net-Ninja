import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'
import ListBlogs from '@/components/ListBlogs'


export default [

    { path: '/', component: ShowBlog },
    { path: '/list', component: ListBlogs },
    { path: '/add', component: AddBlog }
]