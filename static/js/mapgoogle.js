$(function(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getCoords,getError);

	}else{

	}
	function getCoords(position){
		var lat=position.coords.latitude;
		var lng=position.coords.longitude;
		initialize(lat,lng);
	}
	function getError(err){
		initialize(13.30272,-87.194107);



	}
	function initialize(lat,lng){
		var latlng=new google.maps.LatLng(lat,lng);
		mapSettings={
			center:latlng,
			zoom:15,
			mapTypedId:google.maps.MapTypeId.ROADMAP
		}
		map= new  google.maps.Map($('#mapa').get(0),mapSettings);
		var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		var marker=new google.maps.Marker({
			position:latlng,
			map:map,
			draggable:true,
			title:"arrastame!",
			icon: iconBase + 'schools_maps.png'
		});
		google.maps.event.addListener(marker,'position_changed',function(){
			
			getMarkerCoords(marker);

		});

	}
	function getMarkerCoords(marker){
		var markerCoords=marker.getPosition();
		$('#id_lat').val(markerCoords.lat());
		$('#id_lng').val(markerCoords.lng());
	}

	$('form').submit(function(e){

		
		
		$.post('/hola/coords/save',$(this).serialize(),function(data){
				alert(data);
				if(data.OK){
						$('#data').html(data.msg);
				}else{
					alert(data.msg);
				}
			},'json');
	});

})