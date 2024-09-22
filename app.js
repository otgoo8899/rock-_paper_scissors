var cPoint =document.querySelector(".cPoint");
var pPoint =document.querySelector(".pPoint");
var pChoice =document.querySelector(".pChoice");
var cChoice =document.querySelector(".cChoice");
var winner =document.querySelector(".winner");
var computerChoice;
var cCount=0, pCount=0;
console.log(cPoint);
function play(playerChoice){
	//alert(playerChoice);
	pChoice.innerText="Player choice:"+playerChoice;
	var random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		cChoice.innerText ="Computer choice:rock";
		computerChoice="rock";
	}else if(random==1){
		cChoice.innerText ="Computer choice:scissors";
		computerChoice="scissors";
	}else if(random==2){
		cChoice.innerText ="Computer choice:paper";
		computerChoice="paper";
	}
	console.log(computerChoice);
	if (
	(playerChoice=="rock" && computerChoice=="scissors")
	|| (playerChoice=="paper" && computerChoice=="rock")
	|| (playerChoice=="scissors" && computerChoice=="paper")
	){
		winner.innerText="Winner:Player";
		pCount++;
	}else if (playerChoice==computerChoice){
		winner.innerText="Winner:Tie";
	}else{
		winner.innerText="Winner:computer"; 
		// ++ 1-eer nemegduulne -- 1-eer buurulna
		cCount++;
	}	
	cPoint.innerText="Computer"+cCount;
	pPoint.innerText="Player"+pCount
}

function restart(){
	cCount=0;
	pCount=0;
	cPoint.innerText="Computer:0";
	pPoint.innerText="Player:0";
	winner.innerText="Winner:";
	pChoice.innerText="Player Choice:";
	cChoice.innerText="Computer Choice:";
	 
}