// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBjoCjuCVt0vB6WODG3f7w4Az8dnvL72KE",
    authDomain: "paraguay-courier.firebaseapp.com",
    projectId: "paraguay-courier",
    storageBucket: "paraguay-courier.appspot.com",
    messagingSenderId: "588168558953",
    appId: "1:588168558953:web:2bbb6ff177f2c03a2e25f8",
    measurementId: "G-N65ZD2EBXZ"
  }
};


// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/