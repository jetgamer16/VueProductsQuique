<script>
import  ProductRepository  from '@/repositories/productsRepo';
import   ProductItem  from '@/components/ProdItem.vue'

export default{
  data(){
    return {
      productos:[],
      repoProd: new ProductRepository()
    }
  },
  components:{
    ProductItem
  },
  async mounted(){
    this.productos = await this.repoProd.getAll()
  },
  methods:{
    async deleteProducto (id) {
      if(confirm("estas seguro de que quieres borrar el producto: "+id)){
      await this.repoProd.delItem(id)
      const index = this.productos.findIndex(producto => producto.id==id)
      this.productos.splice(index,1)
      }
    },
     editProducto(producto) {
    this.$router.push({ name: 'FormProd', params: { id: producto.id } });
  },
    async changeUnits(idProd,newUnits){
      await this.repoProd.changeUnitsItem(idProd,newUnits)
    }
  }
}
</script>
<template>
<div>
  <h1>TABLA PRODUCTOS</h1>
  <table>
  <thead>
    <th>id</th>
    <th>Nombre</th>
    <th>Categoria</th>
    <th>Unidades</th>
    <th>Importe</th>
    <th>Precio</th>
    <th>Acciones</th>
  </thead>
  <tbody>
    <ProductItem  v-for="producto in this.productos" @editProducto="editProducto" @deleteProducto="deleteProducto" :key="producto.id" :repoProd="this.repoProd" :product="producto" ></ProductItem>
  </tbody>
</table>
  </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  