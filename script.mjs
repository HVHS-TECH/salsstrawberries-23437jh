//var name = document.getElementById("name").value;
// var favoriteFruit = document.getElementById("favoriteFruit").value;
//var fruitQuantity = document.getElementById("fruitQuantity").value;
    
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs', 'color: blue; background-color: white;');
var FB_GAMEDB;

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    update 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
// function to sign into google and connect to data base
function fb_authenticate() {

    const FB_GAMECONFIG = {
        // firebase data
        apiKey: "AIzaSyCtqOoxnHxsj7vs-AfrD8vo-20mA5Sq17A",
        authDomain: "comp-2025-joseph.firebaseapp.com",
        databaseURL: "https://comp-2025-joseph-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-joseph",
        storageBucket: "comp-2025-joseph.firebasestorage.app",
        messagingSenderId: "85501129840",
        appId: "1:85501129840:web:79c64e1947643f22bc70b5",
        measurementId: "G-BEE5KXTKTT"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB);     
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');


    console.log('%c fb_authenticate(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        //✅ Code for a successful authentication goes here
        console.log("Authentication successful");
    })
    .catch((error) => {
        //❌ Code for an authentication error goes here
        console.log("Authentication unsuccessful");
        console.log(error);
    });
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

}
// Function to put information into database
function fb_write(){
var name = document.getElementById("name").value;
var favoriteFruit = document.getElementById("favoriteFruit").value;
var fruitQuantity = document.getElementById("fruitQuantity").value;
 const dbReference= ref(FB_GAMEDB, "UserID/UserInformation");
 var UserInformation = {name: name, favoriteFruit: favoriteFruit, fruitQuantity: fruitQuantity };
    set(dbReference, UserInformation).then(() => {
        console.log("Data sucessfully sent to Database")
        console.log(name);
        console.log(favoriteFruit);
        console.log(fruitQuantity);
        console.log(UserInformation);
    }).catch((error) => {
       console.log(error)
       console.log("Error happened");
    });

    
}

// exsporting functions
export { fb_authenticate };
export { fb_write };
   