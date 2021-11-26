<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header"><h4>Crear Blog</h4></div>
          <div class="card-body">
            <form @submit.prevent="crear">
              <div class="row">
                <div class="col-12 mb-2">
                  <div class="form-group">
                    <label for="">Titulo</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="blog.titulo"
                    />
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-floating">
                    <textarea
                      id="floatingTextarea2"
                      class="form-control"
                      style="height: 100px"
                      v-model="blog.contenido"
                    ></textarea>
                    <label for="floatingTextarea2"></label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "crear-blog",
  data() {
    return {
      blog: {
        titulo: "",
        contenido: "",
      },
    };
  },
  methods: {
    async crear() {
      await this.axios
        .post("/api/blog", this.blog)
        .then((res) => {
          this.$router.push({ name: "mostrarBlogs" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>