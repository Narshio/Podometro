import { db, admin } from './fireBaseAdmin'


export const get = async (email) => {
    const carreras = await db.collection('users').doc(email).collection("carreras").get();

    let mCarreras = []
    carreras.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        mCarreras.push({ N: doc.id, ...doc.data() })
    });

    return mCarreras
}