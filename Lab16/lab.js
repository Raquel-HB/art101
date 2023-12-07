






    $.ajax({ 
        url: "https://xkcd.com/614/info.0.json",
        data: { 
           
            method: 123,
            api_key: "blahblahblah",
          }, 
          type: "GET",
          dataType : "json",
          success: function(data) {
            $("#output").append('<div class="text"><p>' + " " + data.title + '</p></div>');

            $("#output").append("<img src= "+ data.img+ " width='100%'>");

            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            
            console.log("Error:", textStatus, errorThrown);
        }
    })
         
    

         

