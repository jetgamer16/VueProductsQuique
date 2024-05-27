<template>
  <tr>
    <td>{{ producto.id }}</td>
    <td>{{ producto.name }}</td>
    <td>{{ categoria.name }}</td>
    <td>{{ producto.units }}</td>
    <td>{{ importe.toFixed(2) }}</td>
    <td>{{ producto.price }}</td>
    <td>
      <button @click="plusUnits()">+</button>
      <button id="minus" @click="minusUnits()" :disabled="producto.units<2">-</button>
      <button @click="editProducto()">Edit</button>
      <button @click="deleteProducto()">Delete</button>
    </td>
  </tr>
</template>

<script>
import ProductRepository from '@/repositories/productsRepo';
import CategoriesRepository from '@/repositories/categoriesRepo';

export default {
  data() {
    return {
      producto: this.product,
      categoria: {},
      repoProd: new ProductRepository(),
      repoCat: new CategoriesRepository()
    }
  },
  async mounted() {
    this.categoria = await this.getCatebyId(this.producto.categoryId);
  },
  computed: {
    importe() {
      return this.producto.price * this.producto.units;
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getCatebyId(categoryId) {
      try {
        const categorias = await this.repoCat.getCate();
        return categorias.find(cat => cat.id === categoryId) || {};
      } catch (error) {
        console.error("Error fetching category:", error);
        return {};
      }
    },
    async plusUnits() {
      this.producto.units += 1;
      await this.repoProd.changeUnitsItem(this.producto.id, this.producto.units);
      document.getElementById('minus').disabled = false;
    },
    async minusUnits() {
      if (this.producto.units > 1) {
        this.producto.units -= 1;
        await this.repoProd.changeUnitsItem(this.producto.id, this.producto.units);

      }
    },
    editProducto() {
      this.$emit('editProducto', this.producto);
    },
    deleteProducto() {
      this.$emit('deleteProducto', this.producto.id);
    }
  }
}
</script>
