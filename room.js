var firebaseConfig = {
  apiKey: "AIzaSyB7QCIdKgHnDTjHM3cPIqG7VDgRG48qi2g",
  authDomain: "chatish-d21f5.firebaseapp.com",
  databaseURL: "https://chatish-d21f5-default-rtdb.firebaseio.com",
  projectId: "chatish-d21f5",
  storageBucket: "chatish-d21f5.appspot.com",
  messagingSenderId: "1018403782633",
  appId: "1:1018403782633:web:4d1a78b18fbab12865d578"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
document.getElementById("somename").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
      var room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name",name);
      window.location = "chatish_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
var row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
document.getElementById("output"),innerHTML = row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "chatish_page.html";
}

function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "login.html";
}

