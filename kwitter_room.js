
var firebaseConfig = {
  apiKey: "AIzaSyDT0opbIK5GkfYrD17WoMl_htbVRm6j3oc",
  authDomain: "kwitter-896d9.firebaseapp.com",
  projectId: "kwitter-896d9",
  storageBucket: "kwitter-896d9.appspot.com",
  messagingSenderId: "546162348630",
  appId: "1:546162348630:web:0c02d7fa20926285f361f7"
};

firebase.initializeApp(firebaseConfig);

function getData()
{
   firebase.database().ref("/").on('value', function(snapshot){
         document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
  {
        childKey  = childSnapshot.key;
   Room_names = childKey;

   console.log("Room Name -"+ Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id'>#"+Room_names+"</div><hr>";
   document.getElementById("output.").innerHTML+=row;
  });
});
}
getData()
function addRoom()
{
  Room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
  });

  localStorage.setItem("room_name", Room_name);

  window.location = "kwitter_pade.html;"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location ="kwitter.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

