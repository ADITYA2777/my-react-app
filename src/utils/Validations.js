 export const checkvaldation = (email, password) => {
  const isEmailValdation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isPasswordvaldation = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValdation) return "Email ID is not valid";
  if (!isPasswordvaldation) return "Password is not valid";

  return null
  

};
