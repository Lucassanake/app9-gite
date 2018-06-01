// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});

function onDeviceReady() {
	getPosition ();
});
}

 function onDeviceReady(){
	 $('#position').on('click',function () {
		 getPosition ();
	 });
	 
	 $('#watch').on('click',function(){
		 watchPosition ();
	 }(;
	 
 }
 
 function getPosition() {
	 var options = {
		 enableHighAccuracy :true, 
		 maximumAge: 3600000
	 }
	 
	 var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
	  function onSuccess(position) {
		  alert('Latitude:'    +position.coords.latitude    +'\n'+
		       'Longituded:'    +position.coords.longitude   +'\n'+
			   'Altitude:'    +position.coords.altitude    +'\n'+
		       'Accuracy:'    +position.coords.accuracy   +'\n'+
			   'Altitude Accuaracy:'    +position.coords.altitudeAccuaracy    +'\n'+
		       'Heading:'    +position.coords.heading   +'\n'+
			   'Speed:'    +position.coords.speed    +'\n'+
		       'Timestamp:'    +position.coords.timestamp   +'\n'+
	  };
	  
	  function onError(error){
		  alert('code:' +error.code +'\n' + 'message:' + error.message +'\n');
	  }
 }
 function wathcPosition() {
	 var options={
		 maximunAge : 3600000,
		 timeout : 3000,
		 enableHighAccuracy : true, 
	 }
	 
	 var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
	 function onSuccess(position){
		$('#latitud').html(position.coords.latitude);
		$('#longitud').html(position.coords.longitude);
	    $('#altitud').html(position.coords.altitude);
		$('#accuracy').html(position.coords.accuracy);
	    $('#aaccuracy').html(position.coords.altitudeAccuaracy);
		$('#headingg').html(position.coords.heading);
	    $('#speed').html(position.coords.speed);
		$('#timestamp').html(position.coords.timestamp);
	 };
	 
	 function onError(error) {
		 alert('code:'  +error.code +'\n' + 'message:' +error.message+'\n');
	 }
 }

