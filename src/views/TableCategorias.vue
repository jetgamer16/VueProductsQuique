<script>
import CateItem from "../components/CateItem.vue"
import { useDataStore } from '@/stores/store'
import { mapActions, mapState } from 'pinia'

//import { RouterLink } from 'vue-router'
export default {
  computed: {
    ...mapState(useDataStore, ['categorias'])
  },
  data() {
    return {
    }
  },
  components: {
    CateItem
  },
  methods:{
    ...mapActions(useDataStore,['fillCategories']),

  }

}
</script>

<template>
  <div>
    <h1>TABLA CATEGORÍAS</h1>
    <ul>
      <CateItem v-for="category in categorias" :key="category.id" :category="category"></CateItem>
    </ul>
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
