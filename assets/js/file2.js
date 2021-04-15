$("#but").click(function () {
    console.log("Hello world");
})

// $() : la fonction magique qui prend en parametre un selecteur
$("#but").on("click", function () {
    console.log("Hello world");
});

// Avant de manipuler des elements dans votre page, il faut attendre
// que cette derniere soit correctement chargee (le DOM est bien analyse)

$(document).ready(function () {
    $("#but").on("click", function () {
        console.log("Hello world");
    });
});

// On peut aussi utiliser le raccourci

// Le deuxieme parametre (optionnel) correspond a la zone dans laquelle
// la recherche est effectuee, par defaut la recherche s’effectue dans tout
// le document
$(function () {
    $("#but", "body").on("click", function () {
        console.log("Hello world");
    });
});

// Pour recuperer le contenu d'une balise 
// .html() => .innerHTML en JS
// .text() => .textContent en JS

$(function () {
    $("#but").on("click", function () {
        console.log($("#container").html());
        console.log($("#container").text());
        // ajoute du contenu textuel au debut
        $("#container").prepend("<b>Prepended text</b>");
        // ajoute du contenu textuel a la fin
        $("#container").append("<b>Appended text</b>");

        // La methode .attr()

        // .attr(nomAttribut) : permet de recuperer la valeur de
        // l’attribut passe en parametre

        // .attr(nomAttribut, nouvelleValeur) : permet de
        // modifier la valeur de l’attribut du premier parametre par la valeur
        // du deuxieme parametre (si l’attribut n’existe pas, il sera cree)

        console.log($("p").attr("class"));

        $("img").attr("width", "500");

        // pour tous les paragraphes, on peut la 
        // utiliser la methode each()
        $("p").each(function () {
            console.log($(this).attr("class"));
        })

        // utiliser .length pour d´eterminer le nombre
        // d’elements selectionnes
        console.log($("p").length);

        // choisir l’ element de la selection ayant l’indice i
        console.log($("p:eq(0)"));
        console.log($("p").eq(1));
        console.log($("p")[2]);

        // pour choisir le premier
        console.log($("p").first());
        // pour choisir le dernier
        console.log($("p").last());

        // pour supprimer un attribut
        $("p").eq(0).removeAttr("class");
        $("p").attr("class", "red");

        // .val() : permet de recuperer la valeur de 
        // l’attribut value
        console.log($("#nom").val());

        // permet de remplacer la valeur de
        // l ’attribut value par la valeur de nouvelleValeur
        $("#nom").val("John Wick");

        // .css(nomPropriete) : permet de recuperer la valeur de la
        // propriete CSS passee en parametre
        console.log($("#nom").val());

        // .css(nomPropriete, nouvelleValeur) : permet de
        // modifier la valeur de la propriete CSS (premier parametre) par la
        // valeur du deuxieme parametre (si la propriete n’existe pas, elle
        // sera creee)
        console.log($("p").eq(0).css("color"));
        $("p").eq(0).css("color", "green");

        // Pour un changement multiple de proprietes CSS
        $("p").eq(0).css({ "color": "green", "background-color": "red" });

        // Ajoute une classe au premier element
        $("p:first").addClass("size");
        $("p:first").removeClass("blue");

        // Verifie si le 1er element p a une classe nommée "size"
        alert($("p:first").hasClass("size"));

        // Ici, toggleClass() supprime la classe existante size dans le premier element p
        // sinon il ajoute
        $("p:first").toggleClass("size");

        // Ici, toggleClass() ajoute la classe inexistante weight dans le premier element p
        $("p:first").toggleClass("weight");

        // Filtre les paragraphes ayant un indice different de 0
        // Ecrire un code qui permet de mettre le bleu comme couleur de fond
        // pour tous les paragraphes qui n'a pas d'indice a 0

        $("#container > p").filter(":not(:eq(0))")
            .css("background-color", "skyblue");

        // Filtre les paragraphes, definis dans container, ayant comme enfant un lien hypertexte.
        $("#container > p").filter(":has(a)")
            .css("background-color", "yellow");

        $("#container > p").has("a")
            .css("background-color", "yellow");

        // Filtre les paragraphes d’indice pair parmi ceux qui sont dans container.
        $("#container > p").not(":even")
            .css("background-color", "grey");

        // Ecrire un code qui permet de mettre le bleu comme couleur de fond
        // pour tous les paragraphes qui ne contiennent pas de lien hypertexte
        $("#container > p").filter(":not(:has(a))")
            .css("background-color", "blue");

        $("#container > p").not(":has(a)")
            .css("background-color", "skyblue");

    });
});