export const changePass = async (user) => {
    try {
      const response = await http.post("/SharePanel/ChangePassword", user);
  
      return response;
    } catch (error) {
      return false;
    }
  };