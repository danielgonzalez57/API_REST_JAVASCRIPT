const sequelize = require("../config/conexion");
const {encrypt, compare} = require("../helpers/handleBcrypt");
const {tokenSign} = require("../helpers/generateToken");

// SIGNIN
const singIn = async (req, res) =>{
    try {
        
        const { email_address, password } = req.body
        const user = await sequelize.models.modelMasterUser.findOne({
            where: {
                email_address : email_address,
            }, 
        });
    
        if(!user) {
            res.status(404)
            res.send({error: 'El usuario no existe.'})
        }
    
        // Comparar password
        const checkPassword = await compare(password, user.password);
    
        // JWT
        const tokenSession = await tokenSign(user);
    
        if(checkPassword) {
            res.json({
                username: user.user_name,
                email: user.email_address,
                rol: user.user_rol,
                token: tokenSession
            })
        }
        if(!checkPassword) {
            res.status(409)
            res.send({
                error: 'Contraseña incorrecta.'
            })
        }
    
    } catch (e) {
    
        console.log('error', e)
    }
}

// SIGNUP
const signUp = async (req, res) => {
    try {
        const {
            user_name, 
            email_address,
            password, 
            id_department, 
            user_rol, 
            user_crea
        } = req.body

        // Verifica si el correo existe
        const email = await sequelize.models.modelMasterUser.findOne({
            where: {
                email_address : email_address,
            }, 
        });
        if(email) {
           return res.status(404)
        }

        // Encryptar el password
        const passwordHash = await encrypt(password);

        const newUser = {
            user_name, 
            email_address,
            password: passwordHash, 
            id_department, 
            user_rol, 
            user_crea
        }

        // Crear el usuario
        const rta = await sequelize.models.modelMasterUser.create(newUser); 
        if(rta) {
            // res.status(404)
            res.json({msj: 'Usuario creado'})
        }

    } catch (e) {

        console.log('Error', e);
    }
}

module.exports = {
    singIn,
    signUp
};