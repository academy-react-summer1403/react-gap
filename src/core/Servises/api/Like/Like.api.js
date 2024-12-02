import http from "../../interceptor"

export const liked = async (id) => {
    try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
        return result;
    }
    catch  (error) {
        return[];
    }
};
 export const disLiked = async (id) =>{
    try{
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
        return result;
    }
    catch  (error) {
        return[];
 }
};


export const deletliked = async (data) =>{
    try{
        const result = await http.delete(`/Course/DeleteCourseLike,{data:data,}`)
        return result;
    }
    catch  (error) {
        return[];
    };
}