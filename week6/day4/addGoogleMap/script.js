function initMap() {
  var dumbo = {lat: 40.700802, lng:73.987602};
  var mapOptions = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      //center: dumbo,
      //zoom: 10
  };
  var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);



};
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }
// //center: {lat: -34.397, lng: 150.644}
// var marker = new google.maps.Marker({
//     position: {lat: 47.3739089, lng: 8.5328035},
//     map: map
//   });

//   var styledMapType = new google.maps.StyledMapType([JSON, styling, object],
//     {name: 'Styled Map'});
    
//     // Create a map object, and include the MapTypeId to add
//     // to the map type control.
//     var map = new google.maps.Map(document.getElementById('map'), {
      
//       mapTypeControlOptions: {
//         mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
//       }
//     });
    
//     //Associate the styled map with the MapTypeId and set it to display.
//     map.mapTypes.set('styled_map', styledMapType);
//     map.setMapTypeId('styled_map');

//     function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
          
//           mapTypeControl: true,
//           mapTypeControlOptions: {
//               style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
//               position: google.maps.ControlPosition.TOP_CENTER
//           },
//           zoomControl: true,
//           zoomControlOptions: {
//               position: google.maps.ControlPosition.LEFT_CENTER
//           },
//           streetViewControl: true,
//           streetViewControlOptions: {
//               position: google.maps.ControlPosition.LEFT_TOP
//           },
//           fullscreenControl: true
//         });
//       }