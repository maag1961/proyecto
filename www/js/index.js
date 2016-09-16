
var app = {
    // Application Constructor
    initialize: function() {
        console.log("inicializando app");
        document.addEventListener("deviceready", this.onDeviceReady, false);
        console.log("app inicializada");
        
    },
    onDeviceReady: function() {
        console.log("El dispositivo ya esta preparado");
        $("#btnfoto").click(function(event) {
            alert("ahora foto")
        })
    },
 };

app.initialize();