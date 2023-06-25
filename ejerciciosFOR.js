/*** 1. crea un programa que imprima en consola los nùmeros impares del 1 al 50. ***/
let numeroImpar = 1;

for (numeroImpar; numeroImpar < 50; numeroImpar++) {
    if(numeroImpar % 2 != 0){
        console.log("El numero " + numeroImpar + " es impar");
    }
}

/*** 2. Crea un programa que pregunte al usuario un nùmero. usando el archivo de arreglo de pokémons. mostrar solo los nombres de los pokémons cuyos números que son multiplos de 5 desde 1 hasta el número introducido por el usuario. ***/
var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ];

let numeroUsuario = parseInt(prompt("Digite un número"));
let ciclos = 1;

for (ciclos; ciclos <= numeroUsuario; ciclos++) {
    if(ciclos % 5 === 0){
        console.log("Pokemon: " + pokemons[ciclos]);
    }
}

/*** 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número. ***/
let datosUsuario = [4,"dos",8,"tres",5,9,1,"cero"];

for(i=0; i<datosUsuario.length; i++){
    let arregloUsuario = datosUsuario[i];
    if(!isNaN(arregloUsuario)){
        console.log(arregloUsuario);
    }
}