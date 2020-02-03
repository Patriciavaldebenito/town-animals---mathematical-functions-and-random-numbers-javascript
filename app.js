console.log("app.js ok");
/*var z;for(var i=0;i<10;i++){ z = getRandom(-100,100);document.write(z + ", ");}*/

var town = document.getElementById("town");
var papel = town.getContext("2d");

// elementos a cargar
var backgroundOne = {
    url : 'assets/tile.png',
    loadOk : false // default
};

var vaca = {
    url : 'assets/vaca.png',
    loadOk : false // default
};

var cant = getRandom(0,20);

// crear objetos
backgroundOne.imagen = new Image();// instancia 
backgroundOne.imagen.src =backgroundOne.url;
backgroundOne.imagen.addEventListener("load", loadBackground);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", loadVacas);


// DIBUJAR IMAGEN DE FONDO
function print(){
  if(backgroundOne.loadOk)
  { 
      papel.drawImage(backgroundOne.imagen,0,0);
  }
  
  if(vaca.loadOk)
  { 

    for(var i =0; i<cant;i++)
    {
        console.log("cant:",cant);
        var x = getRandom(0, 7);
        var y = getRandom(0, 7);

        var x = x * 60;
        var y = y * 60;
          papel.drawImage(vaca.imagen,x,y);
    }
 
  }
}

function loadBackground()
{
   backgroundOne.loadOk = true;
   print();
}

function loadVacas()
{
   vaca.loadOk = true;
   print();
}






function getRandom(min, max){
    var result;
    result= Math.floor(Math.random()*( max-min +1 ))+min;

   // console.log(result);
    return result;
}


// desafios
// - dibujar aleatoria cant aleatoria de vacas, cerdos, pollo
// - hacer que un cerdo se mueva por teclado