$(document).ready(function (){

$("#Submit").click(function(){
    var userInput = $('#userInput').val();
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&has_geo=1&extras=geo&api_key=eea149dc8bcfd608a8d301aecd9dde86&tags=" + userInput + "&tagmode=any&format=json&jsoncallback=?",
    function(data){
        console.log(data);
        var photos = []
        photos[0] = {
          latitude:data.photos.photo[0].latitude,
          longitude:data.photos.photo[0].longitude,
        }
        console.log(photos[0]);
    });
})

});
         
     function initMap() { 
        var myLatLng = {photos[0].latitude  , lng:photos.longitude};
        // var 3ndLatLng = {lat:20.700 , lng: -29.923};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: myLatLng
        });
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
        });
        var marker = new google.maps.Marker({
        //   position: 3ndLatLng,
          map: map,
          title: 'Hello World!'
        });
      }









    




//key eea149dc8bcfd608a8d301aecd9dde86

//Secret:
//042027c86592d645



  




// AIzaSyBOfQ-p4jlF0taLr02WGLorfjbgyveKjtg
