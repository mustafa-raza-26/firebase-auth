import { firebaseConfig } from './firebase-Config.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import {getAuth , createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
const firebase = 'https://userapp-6a08f-default-rtdb.asia-southeast1.firebasedatabase.app/'
console.log('kkkk',firebase);


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
console.log(auth);

const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signupBtn = document.getElementById('signupBtn')

if (signupBtn) {
    signupBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then( async (data)=>{
            console.log(data);
            alert('Account create and email send for werification')
            await sendEmailVerification(data.user)
            window.location.replace('./index.html')
        })
        .catch((error)=>{
            console.log(error);
            alert('Account not create')
        })
    })
}