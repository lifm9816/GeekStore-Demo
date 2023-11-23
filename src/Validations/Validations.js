export const validateName = (name) =>{
    if(name.length > 2 )
    {
        return {
            name: {
                error: false,
                message: ""
            }
        }
    }
    if(name.length === 0){
        return {
            name: {
                error: true,
                message: "El campo de nombre no pude estar vacío"
            }
        }
    }
    else{
        return {
            name: {
                error: true,
                message: "El campo nombre debe tener al menos 3 caractéres"
            }
        }
    }
}

export const validateLastName = (lastName) => {
    if(lastName.length > 2){
        return {
            lastName: {
                error: false,
                message: ""
            }
        }
    }
    if(lastName.length === 0) {
        return {
            lastName: {
                error: true,
                message: "El campo apellido no puede estar vacío"
            }
        }
    }
    else{
        return {
            lastName: {
                error: true,
                message: "El campo apellido debe contener al menos 3 caractéres"
            }
        }
    }
}

export const validateEmail = (email) => {
    if(email.length > 8 && email.includes("@")){
        return {
            email: {
                error: false,
                message: null
            }
        }
    }
    else{
        if(email.length < 8) {
            return {
                email: {
                    error: true,
                    message: "El correo electrónico debe contener al menos 8 caractéres"
                }
            }
        }
        if(email.length === 0)
        {
            return {
                email: {
                    error: true,
                    message: "El campo de correo electrónico no puede estar vacío"
                }
            }
        }
        else
        {
            return {
                email:{
                    error: true,
                    message: "El correo electrónico debe llevar el símbolo @"
                }
            }
        }
    }
}