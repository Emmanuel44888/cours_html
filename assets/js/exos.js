// Exos-Dom

// Exercice N°1


function changer_Style(){
    var x = document.getElementById('parag1');
    x.style.color = "white";
    x.style.background = "black";
    x.style.border = "dashed";
    x.style.textIndent = "5px";
    }

// Exercice N°1 - Question 2

        // Récupère l'élément HTML "id" et ajoute la nouvelle classe "active" 
function changer_Style(){
    var x = document.getElementById('parag1');
    x.classList.add ('active');

}

// Exercice N°2

function getAttributs() {
    var x = document.getElementById("w3r");
    var href = x.getAttribute('href');
        alert (href);

    var hreflang = x.getAttribute("hreflang");
        alert (hreflang);

    var rel = x.getAttribute("rel");
        alert (rel); 

    var target = x.getAttribute("target");
        alert (target);

    var type = x.getAttribute("type");
        target(type);      
}

// Exercice N°3

    // function getvalueform () {
    //     var x = document.getElementById("form1");
    //     for (var i = 0; i < x.lenght; i++) {
    //         if form.classList ;
    //     }
    //     alert (x);
    // }


