import http from "../../interceptor"
export const landingCourse =async() =>{
 try {
    const res = await http.get('/Home/GetCoursesTop?Count=5')
    return res 
 } catch (error) {
    return false
    
 }

}