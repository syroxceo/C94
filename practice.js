
var firebaseConfig = {
    apiKey: "AIzaSyAr3tK-hcJkoTntSfyfOab71OzjMY9VpUs",
    authDomain: "kwitter-7f500.firebaseapp.com",
    databaseURL: "https://kwitter-7f500-default-rtdb.firebaseio.com",
    projectId: "kwitter-7f500",
    storageBucket: "kwitter-7f500.appspot.com",
    messagingSenderId: "907415998937",
    appId: "1:907415998937:web:f9050f30ad23005ba389c8",
    measurementId: "G-CLYQ2QTSZ1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}