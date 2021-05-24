
//#region Enemies
var enemies = [ {
    "Name" : "NAGA",
    "Enemy Type": "Snake",
    "Special Ability": "its tail is like HP you have to hit it 6 times till the snake is only a head, and poisin bite",
    "health": 50,
    "Dodge": 7,
    "Block": 0,
},   

{
    "Name" : "Centaur",
    "Enemy Type": "Man/Hourse hyprid",
    "Special Ability": "Super fast, back kick, and cand jump high",
    "health": 75,
    "Dodge": 5,
    "Block": 8,
},
{
    "Name" : "Minotaur",
    "Enemy Type": "bull/human hybrid",
    "Special Ability": "Charging, tail whip, and dual attack",
    "health": 100,
    "Dodge": 10,
    "Block": 12,
},
{
    "Name" : "Cerberus",
    "Enemy Type": "Deamon dog",
    "Special Ability": "fier breath, super strength, and paralysis bite",
    "health": 125,
    "Dodge": 0,
    "Block": 0,
},
{
    "Name" : "LICH KING",
    "Enemy Type": "Giant",
    "Special Ability": "frost breath, frost bite, super slash, Kings Wrath",
    "health": 150,
    "Dodge": 10,
    "Block": 0,
},
];
//#endregion

//#region enemy battle controle
var enemyMultiplier  = 0;
function EnemyRoll(){
    random = Math.floor(Math.random() * 4 + 1);
    enemyMultiplier = random
    console.log(enemyMultiplier, enemy.name, "enemyMultiplier")

}

function enemyOption(){
    random = Math.floor(Math.random() * 2 + 1)
    fight = enemies[random];
    console.log(enemy)
}

function enemyBattle(){
head = 50;
body = 25;
legs = 10;
arms = 10;
block = 1;
dodge = 0;
var enemyDamage = [head, body, legs, arms, block, dodge];
random = Math.floor(Math.random() *enemyDamage + 1);
//#endregion

//#region Heros

var heros = [{

    "Name" : "Lucifer",
    "Hero Type": "Holy Knight",
    "Special Ability": "Holy Slash, Divine Light, Holy Wrath, Purge",
    "health": 200,
    "Dodge": 10,
    "Block": 10,
    },

{
    "Name" : "Unknown",
    "Hero Type": "Mage",
    "Special Ability": "Fier ball, Ice Spear, lava bomb, Thunderbolt",
    "health": 150,
    "Dodge": 15,
    "Block": 15,
    },

];
//#endregion

//#region Hero battle controle
var heroMultiplier = 0;
function HeroRoll(){
    random = Math.floor(Math.random() * 3 + 1);
    heroMultiplier = random
    console.log(heroMultiplier, hero.name, "heroMultiplier")

}

function heroOption(){
    random = Math.floor(Math.random() * 2 + 1)
    fight = heros[random];
    console.log(hero)
}


function heroBattle(){
    head = 50;
    body = 25;
    legs = 10;
    arms = 10;
    block = 1;
    dodge = 0;
    var heroDamage = [head, body, legs, arms, block, dodge];
    random = Math.floor(Math.random() *heroDamage + 1)
    }
//#endregion

//#region battle 
if () {
        

} else {
    
}
//#endregion



//#region End Game
if (heroHealth > 0 && enemyHealth <= 0) {
    alert = "gameOver you WIN"

} else {
    alert = "gameOver you lose"
}
//#endregion
