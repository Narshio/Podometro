import { db, admin } from './fireBaseAdmin'


export const create = async (email, integrantes,distancia, correos, nombreC) => {
    return db.collection("users").doc(email).collection('carrera').doc().set({
        Integrantes:integrantes,distancia,correos, nombreC
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}