import Joi from 'joi';
//no es una clase es solo un modulo
const joi=Joi;
export type ReturnUpdateUserData= Partial<{
    name:string,
    lastname:string,
    email:string;
    password:string;
    phone:number;
    address:string;
}>;
type ValidationUpdateUserData={
    error:Joi.ValidationError|undefined;
    value:ReturnUpdateUserData;    
}
function validateUpdateUserData(data:any):ValidationUpdateUserData{
    const userSchema=Joi.object({
        name:Joi.string()
        .trim()
        .min(3)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            "string.base": "El nombre debe ser un texto.",
            "string.empty": "El nombre no puede estar vacío.",
            "string.min": "El nombre debe tener al menos 3 caracteres.",
            "string.pattern.base": "El nombre solo puede contener letras y espacios.",
            "any.required": "El nombre es obligatorio."
        }),
        lastname:Joi.string()
        .trim()
        .min(3)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            "string.base": "El apellido debe ser un texto.",
            "string.empty": "El apellido no puede estar vacío.",
            "string.min": "El apellido debe tener al menos 3 caracteres.",
            "string.pattern.base": "El apellido solo puede contener letras y espacios.",
            "any.required": "El apellido es obligatorio."
        }), //se usa un esquema joi para validar que sea string que limpie espacios a inicio y final con trim, que tenga minimo 3 caracteres y finalmente con el pattern que sa expresiones regulares de contenido letras y espacios
        email:Joi.string()
        .email({tlds:{allow:false}})
        .required()
        .messages({
            "string.base": "El correo debe ser un texto.",
            "string.empty": "El correo no puede estar vacío.",
            "string.email": "El correo debe tener un formato válido (ejemplo: usuario@dominio.com).",
            "any.required": "El correo es obligatorio."
        }), //tlds hace referencia a las terminaciones de los correo, lo que se dice ahí es que no valide eso, ejemplo de tlds .edu
        password: Joi.string()
        .min(8)
        .max(20)
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
        .required()
        .messages({
            "string.base": "La contraseña debe ser un texto.",
            "string.empty": "La contraseña no puede estar vacía.",
            "string.min": "La contraseña debe tener al menos 8 caracteres.",
            "string.max": "La contraseña no puede superar los 20 caracteres.",
            "string.pattern.base": "La contraseña debe incluir mayúsculas, minúsculas, números y un carácter especial.",
            "any.required": "La contraseña es obligatoria."
        }),
        phone: Joi.number()
        .integer()
        .min(1000000000) // mínimo 10 dígitos
        .max(9999999999) // máximo 10 dígitos
        .required()
        .messages({
            "number.base": "El teléfono debe ser un número.",
            "number.empty": "El teléfono no puede estar vacío.",
            "number.min": "El teléfono debe tener al menos 10 dígitos.",
            "number.max": "El teléfono no puede superar los 10 dígitos.",
            "any.required": "El teléfono es obligatorio."
        }),
        address: Joi.string()
        .trim()
        .min(5)
        .max(100)
        .required()
        .messages({
            "string.base": "La dirección debe ser un texto.",
            "string.empty": "La dirección no puede estar vacía.",
            "string.min": "La dirección debe tener al menos 5 caracteres.",
            "string.max": "La dirección no puede superar los 100 caracteres.",
            "any.required": "La dirección es obligatoria."
        }),
    }).unknown(false).or("name","lastname","email","password","phone","address"); //no se permiten campos extra u otros fields no conocidos
    //el or se agregó para que no se limite a exigir todo sino que permita que no sean todos los valores los que se modifiquen
    const{error, value}=userSchema.validate(data,{abortEarly:false, stripUnknown:true,convert:true});//abortEarly define cuantos errores soporta mientras va validando si fuera true pararía en el primer error, en este caso como es false solo sigue después de obtener el error
    return{error, value};
}
//funcion de carga de datos
export const loadUpdateUserData=(data:any):ReturnUpdateUserData=>{
    const result=validateUpdateUserData(data);
    if(result.error){
        //une todos los mensajes en una sola cadena
        const message =result.error.details.map((d)=>d.message).join(',');
        throw new Error(message);
    }
    return result.value;
}