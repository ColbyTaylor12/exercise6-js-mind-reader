function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

const url = 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
function list() {
    var x = document.createElement("LI");


    document.getElementById("aList").appendChild(x);
}


var igloo = window.FontAwesome.icon({ prefix: 'fas', iconName: 'igloo' })