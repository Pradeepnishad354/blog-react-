// is logged In
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};


// data set to local storage
export const doLogin = (data,next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next()
};


// logout
export const doLogout = (next) => {
  localStorage.removeItem("data");

  next();
};


// get Token
export const getToken = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};


// get current user
export const getCurrentUserDetail =  () => {
  if (isLoggedIn()) {
    return  JSON.parse(localStorage.getItem("data")).user;
  } else {
    return undefined;
  }
};
