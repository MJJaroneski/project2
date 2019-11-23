$(document).ready(function() {
  var neweMail = $("#email_input");
  var newnameContact = $("#name_input");
  var newfunfact = $("#funfact_input");
  var newfind = $("#find_input");
  //console.log("email from form: " , $("#email_input").val().trim());
  // console.log("neweMail" , neweMail);
  // console.log("newnameContact" , newnameContact);
  // console.log("newfunfact" , newfunfact);
  // console.log("newfind", newfind);
  $(document).on("click", "#submit_contact", insertContact);  
  
  function insertContact(event) {
    console.log("insertContact function called");
      event.preventDefault();
      // if (!neweMail.val().trim().trim()) {
      //   return;
      // }
      $.post("/api/contact", {
          name: newnameContact.val(),
          email: neweMail.val(),
          funfact: newfunfact.val(),
          findout: newfind.val()
      }).then(function(data) {
         console.log("fxxxing...data is inserted"); 
      })
  
   };


// END OF DOC READY 
});  
  







  