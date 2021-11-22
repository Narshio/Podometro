import {get}from "../../utils/history"

export default (req, res) => {
    const {email}=req.body

    
    get(email).then(carreras => res.json({carreras})).catch(error =>{
        console.log(error)
        res.json({error: "error al resolver peticion"})
    })
}