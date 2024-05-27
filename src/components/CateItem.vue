<template>
  <li>
    {{ category.id }} - {{ category.name }}
    <button @click="editCategory(category)">Edit</button>
    <button @click="deleteCategory(category.id)">Delete</button>
  </li>
</template>

<script>
import { useDataStore } from '@/stores/store'
import { mapActions } from 'pinia'
export default {
  data() {
    return {}
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(useDataStore, ['editCategory', 'deleteCategory']),
    async deleteCategoria(id) {
      await this.deleteCategory(id)
      this.product = {}
      this.$router.push('/categorias')
    },
    editCategory(category) {
      this.$router.push('/formCat/'+category.id)
    }
  }
}
</script>
