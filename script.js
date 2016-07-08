
var map;
var photos = [];


     function initMap() { 
        //var myLatLng = {lat:photos[0].latitude, lng:photos[0].longitude};

          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 40, lng: -95.644},

          styles: [
            {
    featureType: "all",
    stylers: [
      { saturation: 200 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#FF5555" },
      { saturation: 500 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "water",
    elementType: "all",
    stylers: [
      { hue: "#OOffc4"},
      { color: "#448080"},
      ]
  }
            ]
        });


     }


$(document).ready(function (){

$("#Submit").click(function(){
  $.getJSON("https://api.flickr.com/services/rest/?method=flickr.places.find&query=United States&has_geo=1&extras=geo, url_o&api_key=eea149dc8bcfd608a8d301aecd9dde86&tags=" + userInput + "&tagmode=any&format=json&jsoncallback=?",
  
function(data){
  console.log(data);
    var userInput = $('#userInput').val();
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&has_geo=1&extras=geo, url_o&api_key=eea149dc8bcfd608a8d301aecd9dde86&woe_id=23424977&tags=" + userInput + "&tagmode=any&format=json&jsoncallback=?",
    function(data){
        console.log(data);
          newMarker(data);
          
          
    });
});
});
});
            
        
    function newMarker(data){
            for(var i=0;i<20;i++){
            photos[i] = {
            latitude:data.photos.photo[i].latitude,
            longitude:data.photos.photo[i].longitude,
            url:data.photos.photo[i].url_o,
            };
            var lat = photos[i].latitude;
            var long = photos[i].longitude;
            var image = photos[i].url;
            var contentString = "luis sucks";
            console.log(lat,long);
  
            var myLatLng = new google.maps.LatLng(parseFloat(lat),parseFloat(long));
  
            var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon:image});
            }
          }


    





    




//key eea149dc8bcfd608a8d301aecd9dde86

//Secret:
//042027c86592d645



  

