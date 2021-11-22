import firebaseAdmin from 'firebase-admin';
import keys from '../secret/podometro-1f4bb-firebase-adminsdk-ao3qy-1f1d60a4fd.json'

let admin = undefined

if (firebaseAdmin.apps.length === 0) {
    admin = firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(keys),
        databaseURL: 'https://podometro-1f4bb.firebaseio.com',
    });

} else {
    admin = firebaseAdmin.apps[0]
}

export { admin }
export const db = admin.firestore();
