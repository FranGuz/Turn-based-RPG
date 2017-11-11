$( document ).ready(function() {

class Hero {
    constructor (name, hp, atk, def){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
    }
}
class Enemy {
    constructor (name,hp,atk,def){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
    }
}
var Player = new Hero ("player",40,10,10);
var Slime = new Enemy ("slime",15,5,5);
var Chicken = new Enemy ("chicken", 10,10,2);
var Turtle = new Enemy ("Turtle", 20,2,7);
var Wolf = new Enemy ("Wolf", 10,12,2);

var enemies = [Slime,Chicken,Turtle,Wolf]
var en1=null;
var en2=null;
function randomEn() {

    var r=Math.floor(Math.random()*enemies.length);
    var r2=Math.floor(Math.random()*enemies.length);
    en1= enemies[r]
    en2= enemies[r2]
    console.log(en1.name,en2)
}
randomEn();
$(".attack").on("click",function (){
    $(".options").show();
    $(".atenemy1").text( en1.name)
    $(".atenemy1").val(en1.name) 
    $(".atenemy2").text( en2.name)
    $(".atenemy2").val(en2.name) 
})

$(".options button").on("click", function () {
    if ($(this).val() === en2.name) {
    console.log("yay!")
    } else {
        console.log("nay")
    }
    $(".options").hide()
})
}); 