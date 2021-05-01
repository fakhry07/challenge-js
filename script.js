function ageInDays(){
    var birthYear = prompt('What year were you born...Friend?');
    var ageInDay = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ' ' + ageInDay + ' ' + 'days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image=document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "catt.gif";
    div.appendChild(image);
}
