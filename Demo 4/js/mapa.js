//Variaveis globais
var markersArray = [],
	markerclusterer,
	map;

$(function () {        
		
		//Opcoes do mapa
		var mapOptions = {
          center: new google.maps.LatLng(-17, -50),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		//Cria o mapa
        map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
		
		//Cria uma instancia do markerClusterer
		markerclusterer = new MarkerClusterer(map, [], { gridSize: 50, maxZoom: 15 });
		
		//Adiciona evento click no mapa. A cada click, add um marker ao mapa
		google.maps.event.addListener(map, 'click', function(event) {
			addMarker(event.latLng);
		});
		
		
		//Click do Botão Enviar
		$("#btnEnviar").click(function(){
		
			var lat = $("#txtLat").val();
			var lon = $("#txtLon").val();
			
			addMarker(new google.maps.LatLng(lat, lon));
		
		});
		
		//Click do Botão Limpar
		$("#btnLimpar").click(function(){
			
			//Seta todos os markers com map null
			setAllMap(null);
		
		});
		
		function addMarker(location){
			
			//cria o marker
			var marker = new google.maps.Marker({
				  position: location				  
			});
			
			//Adiciona o recem criado marker no array
			markersArray.push(marker);
			
			markerclusterer.addMarker(marker);
		}
		
		function setAllMap(map) {			
		
			for (var i = 0; i < markersArray.length; i++) {
				markersArray[i].setMap(map);
			}
			
			markersArray = [];
			
			if(!map)
				markerclusterer.clearMarkers();
		}
});