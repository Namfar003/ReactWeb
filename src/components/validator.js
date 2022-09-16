export default function validateInfo(values) {
    let errors = {}

    if(!values.firstname) {
        errors.firstname = "firstname is required"
    }

     if(!values.lastname) {
        errors.lastname = "lastname is required"
     }

     if(!values.email) {
        errors.email="Email is required"
     } else if(!/^[A-Z0-9._%+]+@[A-Z0-9-]+\.[A-Z]{2,}$/i.test(values.email)) {
       errors.email="Email address is invalid" 
     }

     if(!values.password) {
        errors.password="password is required"
     }
     if(!values.profile) {
      errors.profile = "profile is required"
     }
     return errors;  
}