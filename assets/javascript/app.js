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
var minutes = 0; 

$(".submit").on("click", function () {
  //submit form and capture click
  //capture user input 
  event.preventDefault(); 
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  trainTime = $("#trainTime").val().trim();
  frequency = $("#freq").val().trim();




  // Reference trainInformation object in your Firebase database
  database.ref().push({
    "trainName": trainName,
    "destination": destination,
    "trainTime": trainTime,
    "frequency": frequency
  });
});
    // Firebase watcher + initial loader HINT: .on("value")
  //create new rows on click
   // Firebase watcher .on("child_added"
$(".submit").on("click", function () {
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.trainTime);
    console.log(sv.frequency);

    // Change the HTML to reflect
    // $("#name-display").text(sv.trainName);
    // $("#email-display").text(sv.destination);
    // $("#age-display").text(sv.trainTime);
    // $("#comment-display").text(sv.frequency);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % frequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = frequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  nextTrain = moment(nextTrain).format("hh:mm A");

  $("tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + tMinutesTillTrain + "</td></tr>");
  
 });




