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
    else{
        return {
            name: {
                error: true,
                message: "El campo nombre debe tener al menos 3 caracteres"
            }
        }
    }
}