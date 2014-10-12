$(function () {        
		
		//Opcoes do mapa
		var mapOptions = {
          center: new google.maps.LatLng(-17, -50),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		//Cria o mapa
        var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);		
		
			
		//Novo objeto LatLon: Objeto que recebe uma latitude e longitude
		var latLon = new google.maps.LatLng(-20.307044,-48.466181);
		
		//Novo objeto Marker: Instancia um novo marcador
		var marker = new google.maps.Marker({
			  position: latLon, //posicao no mapa
			  map: map, //instancia do nosso mapa
			  title: 'Demo 2!' //Titulo do marker ao passar o mouse
		});
		
		
		/**** EXTRA 1: Adiciona uma lista de markers utilizando o foreach do jQuery ****/
		
		//Cria um array com 2 posições no mapa (Jau e Barra Bonita)
		/*var latLonList = new Array(new google.maps.LatLng(-20.307044,-48.466181),  new google.maps.LatLng(-22.4913408,-48.558808));
		
		$.each(latLonList, function(i, m){
			
			var marker = new google.maps.Marker({				
				position: m, //posicao no mapa
				map: map, //instancia do nosso mapa
				title: 'Demo ' + i //Titulo do marker ao passar o mouse			
			});		
		}); */
		
		/**** EXTRA 2: Centraliza o mapa no marker adicionado ****/
		
		//var bounds = new google.maps.LatLngBounds();
		//bounds.extend(marker.getPosition());		
		//map.fitBounds(bounds);
});