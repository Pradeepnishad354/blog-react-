
import {  myAxios, privateAxios } from "./helper";



export const createPost = async (postData) => {
       console.log(postData);
    return await privateAxios
      .post(
        `api/user/${postData.userId}/category/${postData.categoryId}/posts`,
        postData
      )
      .then((response) => response.data);
  }

   



  export const loadAllPost= async (pageNumber,pageSize)=>{

   return await myAxios.get(`/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=asc`)
   .then((response)=>response.data)

  } 




  // upload image 
  export const uploadPostImage=async (image,postId) =>{

    const formData =new FormData()
    formData.append("image",image);

return await privateAxios.post(`/api/post/image/upload/${postId}`,formData,{
headers:{
  "Content-Type":"multipart/form-data"
},
}).then((response)=>response.data)
  }



//load single post

export const loadPost= async (postId)=>{

  return await  myAxios.get(`/api/posts/${postId}`).then((response)=>response.data)

}

// create comment

export const createComment=async(comment,postId)=>{

  return await privateAxios.post(`/api/comments/${postId}/post`,comment)
}

//load post by category wise

export const loadPostByCategoryWise=async(categoryId)=>{

  return await privateAxios.get(`/api/category/${categoryId}/posts`).then(response=>response.data)


}


//delete post

export const deletePostService =async(postId)=>{

  return await  privateAxios.delete(`/api/posts${postId}`).then(response=>response.data)
}




 

