import { myAxios } from "./helper"

// create Post .....................API *********************

export const createPost = (postData)=>{

    
    return myAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData).then(Response => Response.data);

};


// getAllPostByUser ....................API *********************
export const getPostsByUser = (userId) => {
  return myAxios.get(`/user/${userId}/posts`).then(res => res.data);
};

// delete post ....API ********************
export const deletePost = (postId) => {
  return myAxios.delete(`/posts/${postId}`).then(res => res.data);
};