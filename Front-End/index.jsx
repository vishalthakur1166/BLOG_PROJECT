// is LogIn =>

export const isLoggedIn=()=>{

  let data = localStorage.getItem("data");
  if(data != null){
    return true;
  }
  else{
    return false;
  }

};


// Do LogIn => data => set to localStorage............ (token set in Local storage and this token give access to all )

export const doLogin=(data , next)=>{

    localStorage.setItem("data",JSON.stringify(data));
    localStorage.setItem("userData", JSON.stringify(data.user));
    next()

};


// Do LogOut => remove from LocalStorage ............. (if the user get logout then it remove the Token .)

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
};


// Get Current User .................................................................

export const getCurrentUserDetails=()=>{

    if(isLoggedIn){
       return JSON.parse(localStorage.getItem("data")); 
    }else{
        return false;
    }

};




