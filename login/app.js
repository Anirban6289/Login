// Initialize Firebase with your project's configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGYnOvWTgRgC2ckRVPp0Cw5DAulq_DU24",
    authDomain: "https://anirban-gayen.firebaseapp.com/__/auth/handler",
    projectId: "anirban-gayen",
    appId: "115518134544"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Sign-In function
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // Google Sign-In is successful, user is authenticated with Firebase
            var user = result.user;
            // Redirect or do further processing
        })
        .catch(function (error) {
            // Handle sign-in failure
            console.log(error.message);
        });
}

// Facebook Sign-In function
function signInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // Facebook Login is successful, user is authenticated with Firebase
            var user = result.user;
            // Redirect or do further processing
        })
        .catch(function (error) {
            // Handle sign-in failure
            console.log(error.message);
        });
}

// GitHub Sign-In function
function signInWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // GitHub Sign-In is successful, user is authenticated with Firebase
            var user = result.user;
            // Redirect or do further processing
        })
        .catch(function (error) {
            // Handle sign-in failure
            console.log(error.message);
        });
}

// Send OTP to the user's phone number
function sendOTP() {
    var phoneNumber = "6289165332"; // Replace this with the user's phone number
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            // OTP sent successfully, display the OTP verification form
            window.confirmationResult = confirmationResult;
        })
        .catch(function (error) {
            // Handle verification failure or other errors
            console.log(error.message);
        });
}

// Verify OTP and authenticate the user
function signInWithOTP() {
    var verificationCode = document.getElementById("verificationCode").value;
    confirmationResult.confirm(verificationCode)
        .then(function (result) {
            // Phone number verification is successful, user is authenticated with Firebase
            var user = result.user;
            // Redirect or do further processing
        })
        .catch(function (error) {
            // Handle verification failure or other errors
            console.log(error.message);
        });
}
