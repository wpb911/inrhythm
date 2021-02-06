$(document).ready(function() {
    // This file takes user input for a second person to compile results of the 
    // and the third party on a Chart.js graph. 
    var compatibilityForm = $("form.compatibility");
    var firstNameInput = $("input#compatFirstName");
    var LastNameInput = $("input#compatlastName");
    var yearInput = $("input#compatYear");
    var monthInput = $("input#compatMonth");
    var dayInput = $("input#compatDay");
    compatibilityForm.on("submit", function(event) {
       event.preventDefault();
       var compatData = {
           compat_first: firstNameInput.val().trim(),
           compat_last: LastNameInput.val().trim(),
           yearInput,
           monthInput,
           dayInput,
       } ;

       searchCompat();

       function searchCompat(first_name, last_name, day, month, year) {
        $.post("/api/login", {
            first_name:first_name,
            last_name:last_name,
            day: day,
            month:month,
            year:year
        }).then (function() {
            //window.location.reload();
            console.log(day);
            console.log(month);
            console.log(year);
        })
        .catch(function(err) {
            console.log(err);
        })
           
       }
    })
})