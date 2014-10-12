//Variaveis globais
var markersArray = [],
	markerclusterer,
	map,
	urlIconeMobile = 'img/mobile.png', //icone para o marcador,
	urlIconLaptop = 'img/laptop.png',
	contador = 0,
	infoWindow;
	
//Defindo custom icons para o markercluster mobile
var clusterStylesMobile = [
  {
      url: 'img/m1.png',
      height: 53,
      width: 53,
      textSize: 14
  },
 {
     url: 'img/m2.png',
     height: 56,
     width: 56,
     textSize: 14
 },
  {
      url: 'img/m3.png',
      height: 66,
      width: 66,
      textSize: 14
  },
   {
       url: 'img/m4.png',
       height: 78,
       width: 78,
       textSize: 14
   },
   {
       url: 'img/m5.png',
       height: 90,
       width: 90,
       textSize: 14
   }
];

$(function () {
		
		//Opcoes do mapa
		var mapOptions = {
          center: new google.maps.LatLng(-17, -50),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		//Configurações markerclusterer mobile
		var mcOptionsMobile = {
			gridSize: 50,
			styles: clusterStylesMobile,
			maxZoom: 15
		};
		
		//Cria o mapa
        map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
		
		//Cria uma instancia do markerClusterer
		markerclusterer = new MarkerClusterer(map, [], mcOptionsMobile);
		
		//Adiciona evento click no mapa. A cada click, add um marker ao mapa
		google.maps.event.addListener(map, 'click', function(event) {
			infoWindow.close();
			addMarker(event.latLng);
		});
		
		//Instancia um objeto InfoWindow
		infoWindow = new google.maps.InfoWindow();
		
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
		
		//Função que adiciona marker ao mapa
		function addMarker(location){
			
			contador++;
			
			//cria o marker
			var marker = new google.maps.Marker({
				position: location,
				icon: (contador % 2 == 0 ? urlIconeMobile : urlIconLaptop),
				id: contador
			});
			
			//Adiciona o recem criado marker no array
			markersArray.push(marker);
			
			//Adiciona o marker ao cluster
			markerclusterer.addMarker(marker);
			
			//Adiciona o evento click ao marker
			addMarkerClick(marker);
		}
		
		//Função de Click no marker
		function addMarkerClick(marker){
			
			google.maps.event.addListener(marker, 'click', function () {
				
				//Fecha para evitar conflitos.
				infoWindow.close();
				
				//Recupera template 1
				var janela = '<div class="infowindow"><h3>Janela do Marcador</h3></div>';				
				
				//Recupera template 2 (mais complexo)
				var janela2 = $('.info-wrapper').html();
				
				var valor = marker.id % 2 == 0;
				
				if(valor)
					janela2 = janela2.replace("{dispositivo}", 'Móvel');
				else
					janela2 = janela2.replace("{dispositivo}", 'Laptop');
					
				janela2 = janela2.replace("{id}", marker.id);
				
				infoWindow.setContent(janela2);
				infoWindow.open(map, marker);        
			});		
		}
		
		//SetAll function.
		function setAllMap(map) {			
		
			for (var i = 0; i < markersArray.length; i++) {
				markersArray[i].setMap(map);
			}
			
			markersArray = [];
			
			if(!map)
				markerclusterer.clearMarkers();
		}
});