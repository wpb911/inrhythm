$(document).ready(function() {
  var signinForm =$("form#signin");
  var emailInput = $("input#loginEmail");
  var passwordInput = $("input#loginPassword");
  
  signinForm.on("submit",function(event){
    event.preventDefault();
    var userData = {
      email:emailInput.val().trim(),
      password:passwordInput.val().trim()
    };

    if (!userData.email || !userData.password){
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

    function loginUser(email,password){
      // 1) make a call to auth user
      $.post("/api/login",{
        email:email,
        password:password
      })
      .then(function(){
        window.location.replace("/results");
      })
      .catch(function(err){
        console.log(err);
      })
    }


  })
});