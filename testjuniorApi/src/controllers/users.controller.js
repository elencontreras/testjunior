import { pool } from '../db.js'


export const createUser= async(req, res) => {
    try {
        const {firstname, lastname, documentType, documentNumber, expeditionDate, birthdate, email, phoneNumber} = req.body
        const [con] = await pool.query(`SELECT * from users WHERE documentNumber = ${documentNumber}`)
        if(con.length>0){
            res.send({
                status:403,
                message: 'El usuario ya se encuentra registrado',  
            })
        }else{
            const [rows] = await pool.query(
                'INSERT INTO users(firstname, lastname, documentType, documentNumber, expeditionDate, birthdate, email, phoneNumber) VALUES (?,?,?,?,?,?,?,?)', 
                [firstname,lastname,documentType,documentNumber,expeditionDate,birthdate,email,phoneNumber])
            res.send({
                status:201,
                message: 'User registered',  
                user: {id: rows.insertId}
            })
        }
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
    
}

export const getUserById = async(req, res) => {
    try{
        const {id} = req.params

        const [rows] = await pool.query(`SELECT * from users WHERE id = ${id}`)
        if(rows.length>0){
            res.send({
                status:201,
                message: 'User found',  
                user: rows[0]
            })        
        }else{
            res.send({
                status:404,
                message: 'No se encontró el usuario',  
            })

        }
    }catch(error){
        res.status(500).json({
            message:'Error en el servidor'
        })
        
    }
    
}


