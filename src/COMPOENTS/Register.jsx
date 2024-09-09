
import { Link } from 'react-router-dom';

import React, { useEffect } from "react";
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import '../register.css'
function Register() {
  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDiqzKWIPYPLCJ_LWmx4vovUk5_vzm-lc0",
      authDomain: "my-first-project-9cd31.firebaseapp.com",
      projectId: "my-first-project-9cd31",
      storageBucket: "my-first-project-9cd31.appspot.com",
      messagingSenderId: "36408870032",
      appId: "1:36408870032:web:6a5ccff1d14776cbd58415",
      measurementId: "G-F2BD5NY6D2",
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const signupButton = document.getElementById("registerBtn");
    const signinButton = document.getElementById("loginBtn");

    signupButton.addEventListener("click", (e) => {
      e.preventDefault();
      createUserAccount(auth);
    });

    signinButton.addEventListener("click", (e) => {
      e.preventDefault();
      signInUser(auth);
    });

    // Handle authentication state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(`User is signed in: ${uid}`);
      } else {
        console.log("No user signed in");
      }
    });

    // Form-switching animation
    document.getElementById("loginLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".row.main").style.transform = "translateX(-50%)";
    });

    document.getElementById("registerLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".row.main").style.transform = "translateX(0)";
    });
  }, []);

  // Firebase Signup Function
  const createUserAccount = (auth) => {
    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const resultHtml = document.getElementById("overallsignupres");

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        resultHtml.innerHTML = `User Signup successfully! Email: ${user.email}`;
      })
      .catch((error) => {
        const errorMessage = error.message;
        resultHtml.innerHTML = `Error: ${errorMessage}`;
      });
  };

  // Firebase Login Function
  const signInUser = (auth) => {
    const signinEmail = document.getElementById("loginEmail").value;
    const signinPassword = document.getElementById("loginPassword").value;
    const resultHtmlSignin = document.getElementById("overallloginres");

    signInWithEmailAndPassword(auth, signinEmail, signinPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        resultHtmlSignin.innerHTML = `User Logged in successfully! Email: ${user.email}`;
      })
      .catch((error) => {
        const errorMessage = error.message;
        resultHtmlSignin.innerHTML = `Error: ${errorMessage}`;
      });
  };

  
  return (
    <div className="gg">
      <div className="row main mt-5" id="main">
        {/* Sign Up Form */}
        <div className="col-md-6 p-5 form-container" id="signUp">
          <h1 className="display-4 text-center glowing-text">
            "WELCOME" TO (SJT) SIGNUP
          </h1>
          <form className="d-flex justify-content mt-4">
            <div className="w-75">
              <div className="form-group">
                <label htmlFor="signupEmail">Email</label>
                <input type="email" id="signupEmail" required />
              </div>
              <div className="form-group my-4">
                <label htmlFor="signupPassword">Password</label>
                <input type="password" id="signupPassword" required />
              </div>
              <button type="submit" id="registerBtn">
                Register
              </button>
              <div className="d-flex justify-content-between mt-5">
                <a href="#" className="links" id="loginLink">
                  Already have an Account?
                </a>
              </div>
              <div id="overallsignupres"></div>
            </div>
          </form>
        </div>

        {/* Login Form */}
        <div className="col-md-6 p-5 form-container" id="login">
          <h1 className="display-4 text-center glowing-text">
            "WELCOME" TO (SJT) LOGIN
          </h1>
          <form className="d-flex justify-content mt-4">
            <div className="w-75">
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input type="email" id="loginEmail" required />
              </div>
              <div className="form-group my-4">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" required />
              </div>
              <button type="submit" id="loginBtn">
                Login
              </button>
              <div className="d-flex justify-content-between mt-5">
                <a href="#" className="links" id="registerLink">
                  Create an Account
                 
                 
                </a>
               
               
              </div>
              <Link to="/" className="mr-5 hover:text-red-900"> Back to Home</Link>
              <div id="overallloginres"></div>
            </div>

          
          
          </form>
         
         
        </div>
     
     
      </div>


    </div>
  );
}

export default Register;
