function myFunction() {
    document.getElementById("demo").style.color = "red";
}

var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*number);
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
