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
//Autenticacion con Google

  $("#googleBtn").click(function(){
    authGoogle();
  })

  function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
  }

  function authentication(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};


// Funcion para compartir un post en timeline
$(document).ready(function(){
$("#share-btn").click(shareStory);


  function shareStory (){

      /*Creando elementos contenedores y agregandoles una clase*/
    var $post = $('<div />').addClass('row post');
    var $imgProfileBox = $('<div />').addClass('col-2');
    var $imgProfile = $("<img/>");
    var $textPostBox = $('<div />').addClass('col-10');
    var $userName = $('<p/>');
    var $postContent = $('<p/>');
    

      /*Agregando texto a elementos creados o cambiando atributos*/
    $postContent.text($("textarea").val());

      /*Linkeando elementos entre sí*/
    $imgProfileBox.append($imgProfile);
    $textPostBox.append($userName);
    $textPostBox.append($postContent);
    $post.append($imgProfileBox);
    $post.append($textPostBox);
    $('.posts-timeline').append($post);

      /*Limpiando caja*/
    $("textarea" ).val("");
  }
  
});



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
