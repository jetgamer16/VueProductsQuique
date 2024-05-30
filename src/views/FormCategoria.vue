<script>
import { useDataStore } from '@/stores/store'
import { mapActions, mapState } from 'pinia'

//import { RouterLink } from 'vue-router'
export default {
    computed:{
        ...mapState(useDataStore, ['categorias','getCatebyId'])
    },
  data() {
    return {
      categoria:{},
      edit:false,
      idEdit: this.$route.params.id
    }
  },
  methods: {
    ...mapActions(useDataStore,['addCategory','editCategory']),
    async addItem() {
      if(this.edit){
       await this.addCategory(this.categoria)
      }else{
       await this.addCategory(this.categoria)
      }
      this.$router.push("/categorias")
    },
  },
mounted(){
  if(this.$route.params.id){
    this.edit=true;
    this.categoria=this.getCatebyId(Number(this.$route.params.id))
  }
}
}
</script>

<template>
<h1>FORMULARIO CATEGORIAS</h1>
  <form @submit.prevent="addItem()" >

  <div v-if="edit">
  <label for="id">Id:</label>
  <input type="text" disabled  v-model="categoria.id"  />
  </div>

  <div>
  <label for="nombre">Nombre:</label>
  <input type="text" v-model="categoria.name" required  />
  </div>

  <div>
  <button id="reset" type="reset" >RESET</button>
  <button id="submit" type="submit"> {{ edit ? 'Editar' : "ANYADIR" }} </button>
  </div>
  </form>
</template>