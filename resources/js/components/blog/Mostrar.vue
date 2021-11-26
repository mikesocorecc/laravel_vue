<template>
<div class="container">
  <div class="row">
    <div class="col-12 mb-2">
      <router-link :to='{ name: "crearBlog" }' class="btn btn-success"
        ><i class="fas fa-plus-circle"></i
      ></router-link>
    </div>
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>TITULO</th>
              <th>CONTENIDO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
              <td>{{ blog.id }}</td>
              <td>{{ blog.titulo }}</td>
              <td>{{ blog.contenido }}</td>
              <td>
                <router-link
                  :to="{ name: 'editarBlog', params: { id: blog.id } }"
                  class="btn btn-info"
                >
                  <i class="far fa-edit"></i
                ></router-link>
                  <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "blogs",
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.mostrarBlogs();
  },
  methods: {
    async mostrarBlogs() {
      await this.axios
        .get("/api/blog")
        .then((res) => {
          this.blogs = res.data;
        })
        .catch((e) => {
          this.blog = [];
        });
    },
    borrarBlog(id) {
      if (confirm("Eliminar el registro")) {
        this.axios
          .delete(`/api/blog/${id}`)
          .then((res) => {
           this.mostrarBlogs()
          })
          .catch((e) => {
              console.log(e);
          });
      }
    },
  },
};
</script>
