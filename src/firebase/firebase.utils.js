import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config ={
    
        apiKey: "AIzaSyDi5KhYWxvNTPKPkWFFRTt3BPGefuenNyM",
        authDomain: "crwn-db-4c07d.firebaseapp.com",
        projectId: "crwn-db-4c07d",
        storageBucket: "crwn-db-4c07d.appspot.com",
        messagingSenderId: "933431175823",
        appId: "1:933431175823:web:7501af1810d34fb98cdefa",
        measurementId: "G-FYW461KD1C"
      
};
firebase.initializeApp(config);
export const creatUserProfileDocument=async (userAuth,additionalData)=>
{
if(!userAuth)return;
const userRef=firestore.doc(`user/${userAuth.uid}`);
const snapShot=await userRef.get();
if(!snapShot.exists)
{
        const {displayName,email}=userAuth;
       const createdAt=new Date();
        try{
                await userRef.set({
                        displayName,email,createdAt,...additionalData
                });

        }catch(error)
        {
          console.log("error creating user",error.message);
        }
}
return userRef;

};

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
