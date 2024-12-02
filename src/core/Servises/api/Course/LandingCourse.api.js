import http from "../../interceptor"
export const landingCourse =async() =>{
 try {
    const res = await http.get('/Home/GetCoursesTop?Count=9')
    return res.data 
 } catch (error) {
    return false
    
 }

}