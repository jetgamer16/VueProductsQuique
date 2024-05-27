import axios from "axios";

export default class ProductRepository{

async getAll(){
    const response = await axios.get("http://localhost:3000/products")
    return response.data
}

async getProduct(id){
    const response = await axios.get("http://localhost:3000/products/"+id)
    return response.data
}

async addItem(item){
    const response = await axios.post("http://localhost:3000/products",item)
    return response.data
}

async editItem(item){
    const response = await axios.put("http://localhost:3000/products/"+item.id,item)
    return response.data
}

async changeUnitsItem(idProduct,newUnits){
    const response = await axios.patch("http://localhost:3000/products/"+idProduct,{units:newUnits})
    return response.data;
}

async delItem(id){
    const response = await axios.delete("http://localhost:3000/products/"+id)
    return response.data
}
}