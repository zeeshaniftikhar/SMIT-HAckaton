let userSignOut = (event) => {
    event.prevemntDefalt();


firebase.auth().signOut().then(function() {
    console.log('Signed Out');


    swal({
        title: "Good job!",
        text: "Your Account is Created!",
         icon: "success",
     })
     .then((value) => {
         location.href = "../main/index.html";
     })



  }, function(error) {
    console.error('Sign Out Error', error);
  });


}
