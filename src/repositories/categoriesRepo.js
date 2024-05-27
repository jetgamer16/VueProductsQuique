import axios from "axios";

export default class CategoriesRepository {

    async getCate(){
        const response = await axios.get("http://localhost:3000/categories")
        return response.data
    }

   async addItem(item){
        const response = await axios.post("http://localhost:3000/categories",item)
        return response.data
    }

    async editItem(item){
        const response = await axios.put("http://localhost:3000/categories/"+item.id,item)
        return response.data
    }
    
    async delItem(id){
        const response = await axios.delete("http://localhost:3000/categories/"+id)
        return response.data
    }

}
