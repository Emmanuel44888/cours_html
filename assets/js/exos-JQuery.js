$("#button1").click(function () {
    console.log("Hello world");
})

// $() : la fonction magique qui prend en parametre un selecteur
$("#button1").on("click", function () {
    console.log("Hello world");
});

$(document).ready(function () {
    $("#button1").on("click", function () {
        console.log("Hello world");
    });
});

// Exercice N°1

$('#button1').click(function(){ 
    $("p").add("textarea").css("border", "5px solid red");
    });


// Exercice N°2
$('#button1').click(function(){ 
    $("p").last().addClass("w3r_font_color");
    });

// Exercice N°3 sur les selecteurs jquery

function enleverLiens() {
}
function enleverGras() {  
}  
function enleverItalique() {   
}  
function enleverDecor() {   
}  
function viderBoutons() {  
}  
function voirCode() {  
}  
function liensEnBoutons() {  
}  
function dupliquerTexte() {  
}  
function regrouperLiens() {  
}  
function mettreTitres() {  
}  
function regrouperTitres() {  
}  
function colorer() {  
}  
function semantique() {  
}