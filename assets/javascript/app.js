var firebaseConfig = {
    apiKey: "AIzaSyB935yBtyBGTdfN_4_5x1Tk20DdoFM9YuI",
    authDomain: "trainapp-83c42.firebaseapp.com",
    databaseURL: "https://trainapp-83c42.firebaseio.com",
    projectId: "trainapp-83c42",
    storageBucket: "",
    messagingSenderId: "932695329408",
    appId: "1:932695329408:web:070d1dae4a9628af"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

 // Initial Values
 var trainName = "";
 var destination = "";
 var firstTrain = 0;
var frequency = 0;
 

//submit form and capture click 
$(".submit").on("click", function () {
  event.preventDefault();

  //capture user input 
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrain = $("#trainTime").val().trim();
  frequency = $("#freq").val().trim();

// Reference recommendations object in your Firebase database
  var recommendations = firebase.database().ref("recommendations");
  
  //push data to firebase
  recommendations.push({
    "Train Name": trainName,
    "Destination": destination,
    "First Train Time": firstTrain,
    "Frequency ": frequency
  })
  //append data to screen

  console.log(trainName + destination + firstTrain + frequency); 
})