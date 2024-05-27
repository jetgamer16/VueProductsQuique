import { defineStore } from 'pinia'
import CategoriesRepository from '../repositories/categoriesRepo.js'
export const useDataStore = defineStore('data', {
  state() {
    return {
      cateRepo: new CategoriesRepository(),
      categorias:[]
    }
  },
  getters:{
    getCatebyId:
      (state) => (id) => state.categorias.find((item) => item.id === id) || {}
  },
  actions: {
    async fillCategories(){
      this.categorias = await this.cateRepo.getCate()
    },
    async addCategory (categoria) {
      if(categoria.id){
        this.editCategory(categoria)
      }else{
      try{
        const response = await this.cateRepo.addItem(categoria)
        this.categorias.push(response.data)
      }catch(e){
        alert("Ha fallado: "+e)
        console.error(e)
      }
    }

    },
    async editCategory(categoria){
      try{
      await this.cateRepo.editItem(categoria)
    }catch(e){
      alert("Ha fallado: "+e)
      console.error(e)
    }
    },
    async deleteCategory (index) {
      if(confirm("Estas seguro de borrar el item con ID: "+index)){
      this.categorias.splice(index,1)
      await this.cateRepo.delItem(index)
      }
    },
  }
})
