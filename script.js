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


console.log(Player)
function attack (){
    $(".options").show();
    $(".atenemy1").text( Slime.name)
    $(".atenemy1").val(Slime) 
    $(".atenemy2").text( Chicken.name)
    $(".atenemy2").val(Chicken.name) 
}

function target(choice){
    console.log($(".atenemy1").val().name) 
}