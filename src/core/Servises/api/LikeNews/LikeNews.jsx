import http from "../../interceptor"

export const likedNews = async (id) => {
    try {
        const result = await http.post(`/News/NewsLike/${id}`);
        return result;
    }
    catch  (error) {
        return[];
    }
};
 export const DeletelikedPaper = async (id) =>{
    try{
        const result = await http.delete("/News/DeleteLikeNews" , {data:id});
        return result;
    }
    catch  (error) {
        return[];
 }
};

