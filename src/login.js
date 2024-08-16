
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyARlS0Pf3KF-vNL_WLl5cZO2Jy-rGffr6o",
    authDomain: "assignment-20b62.firebaseapp.com",
    projectId: "assignment-20b62",
    storageBucket: "assignment-20b62.appspot.com",
    messagingSenderId: "860776131548",
    appId: "1:860776131548:web:3d4e46c2bb0facb1f63d19",
    measurementId: "G-5TQLYHGHH6"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);



//   let create = document.getElementById("btnc")
  let login = document.getElementById("btnl")

  login.addEventListener("click", function(event){

   event.preventDefault()

   
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("logging in")
    window.location.href = "dashboard.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

    console.log(email,password);
  })
  
