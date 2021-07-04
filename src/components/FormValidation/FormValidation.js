import Regex from "./../helper/Regex";
const FormValidation = {
    loginForm:(name, value)=>{
      switch (name) {
        case "email":
          if (!value)  return "Email is Required";
          else if (!Regex.EMAIL_REGEXP.test(value))return "Enter a valid email address";
          else  return "";
        case "password":
          if (!value) return "Password is Required";
          else if (!Regex.PASSWORD_REGEX.test(value)) return "Please fill at least 6 character";
          else return "";
        default: return "";
      }
    },
    registerForm:(name, value)=>{
        switch (name) {
          case "name":
              if (!value)  return "Name is Required";
              else  return "";
          case "email":
              if (!value) return "Email is Required";
              else return "";
          case 'password':
              if (!value) return "Password is Required";
              else return "";
          default: return "";
        }
    },
    validateForm:(form, formErrors, validateFunc)=>{
        const errorObj = {};
        Object.keys(formErrors).map(x => {
          let refValue = null;
          const msg = validateFunc(x, form[x], refValue);
          if (msg) errorObj[x] = msg;
        });
        return errorObj;
    }
  };
  export default FormValidation;
  