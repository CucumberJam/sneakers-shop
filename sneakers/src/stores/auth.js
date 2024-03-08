import { defineStore } from 'pinia';
import {ref} from "vue";
import {useRouter} from "vue-router";
import {auth} from '../firebase/config.js'
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, signOut, sendPasswordResetEmail} from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        id: '',
        name: '',
        email: ''
    });
    const config = ref({
        error: '',
        success: false,
        isLoading: false,
        isLoggedIn: false
    })

    const router = useRouter();
    const auth = getAuth();

    const authenticateUser = async (type, email, password, name = '') => {
        config.value.error = '';
        config.value.loader = true;
        config.value.success = false;

        if (type === 'signup') {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    try {
                        // save user in DataBase
/*                        await setDoc (doc(db, "users", userCredential.user.uid), {
                            name: name,
                            email: email
                        });*/
                    } catch (error) {
                        throw new Error("Error adding New user in DB: " + error.message);
                    }
                    console.log("New user added in DB with ID: " + userCredential.user);
                }).catch(errorHandler);


        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    user.value = {
                        name: name,
                        token: userCredential.user.accessToken,
                        email: userCredential.user.email,
                        userId: userCredential.user.uid,
                    }
                }).catch(errorHandler);
        }
        config.value.loader = false;
        setTimeout(() => {
            config.value.success = false;
        }, 2000);
    }
    const logOut = () => {
        signOut(auth).then(async () => {

            console.log('Sign-out successful.');
        }).catch(errorHandler);
    }

    const forgotPassword = (emailInput) => {
        sendPasswordResetEmail(auth, emailInput)
            .then(()=> {
                alert('A password reset link has been sent to your email')
            })
            .catch(errorHandler);
    }
    const init = () => {
        onAuthStateChanged(auth, async (userCredentials) => {
            console.log('auth state changed: ' + userCredentials?.uid);
            if (userCredentials) {
                config.value.isLoggedIn = true;
                // query to DB to get user info:

/*                const docRef = doc(db, 'users', userCredentials.uid);
                const docSnap = await getDoc(docRef);

                user.value.id = docSnap.id;
                user.value.name = docSnap.data().name;
                user.value.email = docSnap.data().email;

                await analyseStore.getAllAnalyses();
                await medicalStore.getMedications();*/

                router.push({path: '/orders'});
            }else{
                user.value = {};
                config.value.isLoggedIn = false;
                router.replace({name: 'home'});
            }
        });
    }
    const errorHandler = (err) => {
        config.value.error = err.message;
        setTimeout(() => {
            config.value.error = '';
        }, 3000);
        throw config.value.error;
    }


    return {
        config, init, authenticateUser, forgotPassword
    }
});