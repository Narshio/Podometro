import { createContext, useEffect, useState } from 'react';
import nookies from 'nookies';
import {firebase as firebaseClient} from '../utils/firebaseclient';
import firebase from 'firebase/app';

export const AuthContext = createContext({
    user: null,
});

export default ({ children })=> {
    const [user, setUser] = useState();

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);
                nookies.set(undefined, 'token', '', { path: '/' });
            } else {
                const token = await user.getIdToken();
                setUser(user);
                nookies.set(undefined, 'token', token, { path: '/' });
            }

        });
    }, []);

    useEffect(() => {
        const handle = setInterval(async () => {
            const user = firebaseClient.auth().currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);

        // clean up setInterval
        return () => clearInterval(handle);
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}