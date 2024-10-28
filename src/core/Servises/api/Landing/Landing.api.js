import http from "../../interceptor"
export const Landing =async() =>{
 try {
    const res = await http.get('/Home/LandingReport')
    return res 
 } catch (error) {
    return false
    
 }

}