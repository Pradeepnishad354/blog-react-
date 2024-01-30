import { myAxios } from "./helper"


export const loadAllCategories= async ()=>{

    return myAxios.get("/api/categories/").then(response=>{
        
        return response.data})
    
}