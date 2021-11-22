import { firebase } from './firebaseclient';


export const login = async (userEmail, userPass) => {

    return firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error :" + errorMessage)
        });

    

}


export const Logout = async () => {
    return firebase.auth().signOut();
}