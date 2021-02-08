$(document).ready(function(){
  var loginForm = $("form#signup");
  var firstNameInput = $("input#firstName");
  var lastNameInput = $("input#lastName");
  var passwordInput = $("input#password");
  var emailInput = $("input#email");
  var yearInput = $("input#year");
  var monthInput = $("input#month");
  var dayInput = $("input#day");
  loginForm.on("submit", function(event){
    event.preventDefault();
    var userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      day:dayInput.val().trim(),
      month:monthInput.val().trim(),
      year:yearInput.val().trim()
    };

    loginUser(userData.first_name,
      userData.last_name,userData.email,userData.password,
      userData.day,userData.month,userData.year);


  });

  function loginUser(first_name,last_name,email,password,day,month,year){
    $.post("/api/signup",{
      first_name:first_name,
      last_name:last_name,
      email:email,
      password:password,
      day:day,
      month:month,
      year:year
    }).then(function(){
      // window.location.reload();
      console.log("1111")
      console.log(month)
    })
    .catch(function(err){
      console.log(err);
    })
  }


})