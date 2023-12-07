


$("#clickButton").click(function(){ 
$.ajax({ 
    url: "https://api.chucknorris.io/jokes/random",
    data: { 
        
        id: "hQNnD4sWTR-JVxnKg_RFDw",
        api_key: "blahblahblah",
      }, 
      type: "GET",
      dataType : "json",
      success: function(data) {
        $("#output").append('<div class="text"><p>' + " " + data.value + '</p></div>');
    
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) { 
        
        console.log("Error:", textStatus, errorThrown);
    }
})
     })

