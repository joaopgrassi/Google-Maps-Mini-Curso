$(function () {        
		
		var mapOptions = {
          center: new google.maps.LatLng(-17, -50),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };	
		
        var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);	  
});