// function changerStyle() {
//     var p = document.getElementById('parag1');
//     p.style.color = "white";
//     p.style.backgroundColor = "#bbb";
//     p.style.border = "1px solid gray";
//     p.style.padding = "5px";
// }

function changerStyle() {
    var p = document.getElementById('parag1');
    p.classList.add("active");
}

function getAttributes() {
    var u = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : ' + u);
    var v = document.getElementById("w3r").hreflang;
    alert('The value of the hreflang attribute of the link is : ' + v);
    var w = document.getElementById("w3r").rel;
    alert('The value of the rel attribute of the link is : ' + w);
    var x = document.getElementById("w3r").target;
    alert('The value of the taget attribute of the link is : ' + x);
    var y = document.getElementById("w3r").type;
    alert('The value of the type attribute of the link is : ' + y);
}

function getFormvalue() {
    var x = document.getElementById("form1");
    for (var i = 0; i < x.length; i++) {
        if (x.elements[i].value != 'Submit') {
            alert(x.elements[i].value);
        }
    }
}

function retournormal () {
    document.documentElement.style.backgroundColor='white';
    document.documentElement.style.color='black';
    document.getElementById('bnuit').style.color='black';
}