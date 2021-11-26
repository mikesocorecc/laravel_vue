//######### ARCHIVO PARA DEFINIR LAS RUTAS##############

// IMPORTAR COMPONENTES PRINCIPALES
const Home = () =>  import("./components/Home.vue")
const Contacto = () =>  import('./components/Contacto.vue')

// Componentes de blog
const Mostrar = () =>  import('./components/blog/Mostrar.vue')
const Crear = () =>  import('./components/blog/Crear.vue')
const Editar = () =>  import('./components/blog/Editar.vue')

// Exporto las rutas
export const routes = [
{
    name:"home",
    path:"/",
    component:Home
},
{
    name:"contacto",
    path:"/contacto",
    component:Contacto
},
{
    name:"home",
    path:"/",
    component:Home
},
{
    name:"mostrarBlogs",
    path:"/blogs",
    component:Mostrar
},
{
    name:"crearBlog",
    path:"/crear",
    component:Crear
},
{
    name:"editarBlog",
    path:"/editar/:id",
    component:Editar
}
]
