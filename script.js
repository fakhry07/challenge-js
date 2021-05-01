function ageInDays(){
    var birthYear = prompt('Tahun berapa anda lahir?');
    var ageInDay = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Umur Anda' + ' ' + ageInDay + ' ' + 'Hari');
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

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['batu', 'gunting', 'kertas'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'batu': {'gunting': 1, 'batu': 0.5, 'kertas': 0},
        'kertas': {'batu': 1, 'kertas': 0.5, 'gunting': 0},
        'gunting': {'kertas': 1, 'gunting': 0.5, 'batu': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'Anda Kalah!', 'color': 'red'};
    }else if (yourScore === 0.5){
        return {'message': 'Seri!', 'color': 'yellow'};
    }else if (yourScore === 1){
        return {'message': 'Anda Menang!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
    var imageDatabase = {
        'batu':document.getElementById('batu').src,
        'gunting':document.getElementById('gunting').src,
        'kertas':document.getElementById('kertas').src
    }

    document.getElementById('batu').remove();
    document.getElementById('gunting').remove();
    document.getElementById('kertas').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src= '" + imageDatabase[humanImgChoice] + "' height=150 width=150 style='box-shadow 0px 10px 50px rgba(37, 50, 223, 1);'>"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding: 30px'>" + finalMessage['message'] + "</h1>";

    botDiv.innerHTML = "<img src= '" + imageDatabase[botImgChoice] + "' height=150 width=150 style='box-shadow 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}