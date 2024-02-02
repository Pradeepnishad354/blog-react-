import { myAxios, privateAxios } from "./helper"


export const loadAllCategories= async ()=>{

    return myAxios.get("/api/categories/").then(response=>{
        
        return response.data})
    
}



export const addCategory=async(category)=>{

    return await privateAxios.post(`/api/categories/`,category).then((response)=>response.data)
}



export const deleteCategory=async(categoryId)=>{

    return await privateAxios.delete(`/api/categories/${categoryId}`)
}