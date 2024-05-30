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
        this.categorias.push(response)
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
    async deleteCategory (id) {
      if(confirm("Estas seguro de borrar el item con ID: "+id)){
        try{
          await this.cateRepo.delItem(id)
        }catch(err){
          console.error(err)
        }
        const index = this.categorias.findIndex(categoria => categoria.id == id)
        this.categorias.splice(index,1)
      }
    },
  }
})
