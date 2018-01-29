// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAau7Vg5_6obNBGxf19-3e5nwe0w8sNRp0",
    authDomain: "not-alone-41459.firebaseapp.com",
    databaseURL: "https://not-alone-41459.firebaseio.com",
    projectId: "not-alone-41459",
    storageBucket: "",
    messagingSenderId: "971433045993"
  };
  firebase.initializeApp(config);

  var bigOne = document.getElementById("bigOne");
  var ref = firebase.database().ref().child("text");
  ref.on("value", snap => bigOne.innerText = snap.val());


// Funcionalidad 
$(document).ready(function(){
  $("#share-btn").click(shareStory);

  function shareStory (){
    var $post = $('<div />').addClass('row post');
    var $imgProfileBox = $('<div />').addClass('col-2');
    var $imgProfile = $("<img/>");
    var $textPostBox = $('<div />').addClass('col-10');
    var $userName = $('<p/>').addClass('col-10');
    posts-timeline
  }
});

/*<div class="row post">
                    <div class="col-2">
                        <img src="" alt="img-user">
                    </div>
                    <div class="col-10">
                        <p>User Name</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eius similique, dolor ut sapiente!</p>           
                    </div>
                </div>
*/




  // Splash view
  $(document).ready(function() {
    setTimeout(function() {
        $(".container-1").fadeOut(1500);
    },1000);
});


$(document).ready(function() {
    setTimeout(function() {
        $(".container-2").fadeIn(1500);
    },1000);
});

//Carousel
$('.carousel').carousel({
  interval: 2000
})
