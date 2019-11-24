$(document).ready(function() {
    var newArtist = $("#artistName");
    var newArtisteMail = $("#exampleInputEmail1");
    var newPhone = $("#phoneNumber");
    var newHome = $("#fromWhere");
    var newAvail= $("#Availability");
    var newGenre = $("#Genre");
    var newFB = $("#facebookLink");
    var newEPK = $("#epk");
    var newTellUs = $("#TellUs");

    $(document).on("click", "#submit_band", insertArtist);  
    
    function insertArtist(event) {
      console.log("insertArtist function called");
        event.preventDefault();
        // if (!neweMail.val().trim().trim()) {
        //   return;
        // }
        $.post("/api/artist", {
            artistName:  newArtist.val(),
            artistEmail: newArtisteMail.val(),
            artistPhone: newPhone.val(),
            artistHome:  newHome.val(),
            artistAvailability: newAvail.val(),
            artistGenre: newGenre.val(),
            artistFB: newFB.val(),
            artistEPK: newEPK.val(),
            artistTellUs: newTellUs.val()  
        }).then(function(data) {
           console.log("fxxxing...ARTIST data is inserted"); 
     })
    
    };
});
