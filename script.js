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
    en1= Object.assign({},enemies[r]);
    en2= Object.assign({},enemies[r2]);
    $(".enemy1").addClass(en1.name);
    $(".enemy2").addClass(en2.name);
    if (en1.name===en2.name){
        en2.name=en2.name+"2";
    }

}
function restart() {
    if ((en1.hp <= 0 && en2.hp <= 0)){
        $(".enemy1").removeClass(en1.name);
        $(".enemy2").removeClass(en2.name);
        randomEn();
        $(".enemy1, .enemy2").fadeIn();
        console.log("yup");
    }
}

randomEn();

$(".attack").on("click",function (){
    $(".atenemy1").text( en1.name)
    $(".atenemy2").text( en2.name)
    // $(".options").show();
    $(".atenemy1 .atenemy2").show();
    // if (en1.hp <= 0){
    //     $(".atenemy1").hide();
    //     restart()
    // }
    // if (en2.hp <= 0){
    //     $(".atenemy2").hide();
    //     restart()
    // }

})
$(".options button").on("click", function () {
    if ($(this).text() === en1.name) {
        en1.hp = en1.hp-(Player.atk - en1.def) ;
        console.log(en1.name +" has " + en1.hp+" hp");
        if (en1.hp <= 0){
            $(".enemy1").fadeOut();
            $(".atenemy1").hide();
            restart()
        }
    } 
    if ($(this).text() === en2.name) {
        en2.hp = en2.hp-(Player.atk - en2.def); 
        console.log(en2.name +" has " + en2.hp +" hp");
        if (en2.hp <= 0){
            $(".enemy2").fadeOut();
            $(".atenemy2").hide();
            restart()
        }
    }
    // $(".options").hide();
})
}); 