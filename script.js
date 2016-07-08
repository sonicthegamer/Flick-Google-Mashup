 
var map;



     function initMap() { 
        //var myLatLng = {lat:photos[0].latitude, lng:photos[0].longitude};

          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          styles: [
             {
    featureType: "all",
    stylers: [
      { saturation: 20 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#ff66cc" },
      { saturation: 500 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
            ]
        });
        


      }


$(document).ready(function (){

$("#Submit").click(function(){
    var userInput = $('#userInput').val();
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&has_geo=1&extras=geo, url_o&api_key=eea149dc8bcfd608a8d301aecd9dde86&tags=" + userInput + "&tagmode=any&format=json&jsoncallback=?",
    function(data){
   //     console.log(data);
          
          
          
  //      var photos = [];
    //    photos[0] = {
      //    latitude:data.photos.photo[0].latitude,
        //  longitude:data.photos.photo[0].longitude,
          //url:data.photos.photo[0].url_o,
      //  }

        var lat = photos[0].latitude;
        var long = photos[0].longitude;
        console.log(lat,long);
         var myLatLng = {lat:5,lng:5};
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

          var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
        });
    });
});


    





    




//key eea149dc8bcfd608a8d301aecd9dde86

//Secret:
//042027c86592d645



  




// AIzaSyBOfQ-p4jlF0taLr02WGLorfjbgyveKjtg
});