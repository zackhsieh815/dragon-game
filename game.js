let player=JSON.parse(localStorage.getItem('dragonSave'))||{
level:1,hp:100,score:0,stage:1
};

let bosses=[
["史萊姆王",300],
["哥布林王",500],
["骷髏騎士",800],
["黑狼王",1200],
["熔岩巨人",1800],
["闇影法師",2500],
["雙頭龍",3500],
["魔龍將軍",5000],
["地獄魔王",7000],
["終焉惡龍",10000]
];

let bossHP=bosses[player.stage-1][1];

function render(){
document.getElementById("stage").innerHTML=
"第"+player.stage+"關："+bosses[player.stage-1][0];
document.getElementById("status").innerHTML=
"等級:"+player.level+" 積分:"+player.score+" HP:"+player.hp;
document.getElementById("boss").innerHTML=
"Boss HP:"+bossHP;
}

function hit(dmg){
bossHP-=dmg;
document.getElementById("log").innerHTML=
"造成 "+dmg+" 傷害";
if(bossHP<=0){
player.score+=500;
player.stage++;
if(player.stage>10){
alert("恭喜擊敗終焉惡龍！");
player.stage=10;
}
bossHP=bosses[player.stage-1][1];
}
save();
render();
}

function attack(){hit(50);}
function skill(){hit(100);}

function save(){
localStorage.setItem("dragonSave",JSON.stringify(player));
}

render();
