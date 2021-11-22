import firebase from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAzbtJPuTFAEPBDcFMtqJkB81AEA3c7Mh4",
        authDomain: "podometro-1f4bb.firebaseapp.com",
        projectId: "podometro-1f4bb",
        storageBucket: "podometro-1f4bb.appspot.com",
        messagingSenderId: "582270746058",
        appId: "1:582270746058:web:96a3c87b46ebddae656333"
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };