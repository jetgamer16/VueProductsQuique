<script>
import ProductRepository from '@/repositories/productsRepo'
import { useDataStore } from '@/stores/store'
import { mapState } from 'pinia'

//import { RouterLink } from 'vue-router'
export default {
    computed:{
        ...mapState(useDataStore, ['products','categorias'])
    },
  data() {
    return {
      edit:false,
      repoProd: new ProductRepository(),
      producto:{}
    }
  },
  async mounted(){
    if(this.$route.params.id){
      this.edit=true;
      this.producto = await this.repoProd.getProduct(Number(this.$route.params.id))
    }
  },
  methods: {
    async addProduct() {
      if(this.edit){
        await this.repoProd.editItem(this.producto)
      }else{
      await this.repoProd.addItem(this.producto)
      }
      this.$router.push("/")
    },
  }
}
</script>

<template>
<h1>FORMULARIO PRODUCTOS</h1>
<form @submit.prevent="addProduct()">

  <div id="idProd" :hidden="edit">
  <label for="id">Id:</label>
  <input type="text" v-model="producto.id"  />
  </div>

  <div>
  <label for="nombre">Nombre:</label>
  <input type="text" v-model="producto.name" required  />
  </div>

  <div>
  <label for="categoria">Categoria:</label>
  <select id="selectCate" v-model="producto.categoryId">Categoria:
  <option value=''>Selecciona una categoria</option>
  <option  v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
    {{ categoria.name }} 
  </option>
  </select>
  </div>

  <div>
  <label for="precio">Precio:</label>
  <input type="number" step="0.01" v-model="producto.price" required /> €
  </div>
  
  <div>
  <label for="unidades">Unidades:</label>
  <input type="number" v-model="producto.units" required /> 
  </div>

  <div>
  <button id="reset" type="reset" >RESET</button>
  <button id="submit" type="submit">{{ edit ? 'Editar' : "ANYADIR" }}</button>
  </div>
  </form>
</template>