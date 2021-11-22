import { db, admin } from './fireBaseAdmin'


export const create = async (apellido_materno, apellido_paterno, fecha_Nacimiento, nombre, numero, resultado, direccion, edad,
    plantel, provider, talla, email, password) => {

    admin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: nombre,
        phoneNumber: '+52'+numero,
        disabled: false
    })
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            db.collection("users").doc(email).set({
                Apellido_materno: apellido_materno,
                Apellido_paterno: apellido_paterno,
                Fecha_Nacimiento: fecha_Nacimiento,
                nombre: nombre,
                Numero: '+52'+numero,
                Resultado: resultado,
                Direccion: direccion,
                edad: edad,
                plantel: plantel,
                provider: "provider",
                "tallda de camisa": talla,
                email: email,
                password: password

            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
        });

}