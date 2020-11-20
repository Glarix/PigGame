// Reloading
const reload = document.querySelector("#reload");

//Selecting the Total points Boards to change color.
let totalPtsBoard1 = document.querySelector('#div-tot-pts1');
let totalPtsBoard2 = document.querySelector('#div-tot-pts2');

//Setting initial color.
totalPtsBoard1.style.backgroundColor = '98FB98';
totalPtsBoard2.style.backgroundColor = '#D3D3D3';

// Selecting Player 1 Items Id.

const rollBtn1 = document.querySelector("#pl1-btn-roll");
const takeBtn1 = document.querySelector("#pl1-btn-take");
const rndPts1 = document.querySelector('#t-pts1');
const rollPts1 = document.querySelector('#roll-pts1');
const rPts1 = document.querySelector('#r-pts1');

//rollBtn2.disabled = true;
//takeBtn2.disabled = true;


//Player 1 object.
const player1 = {
    roundPts: 0,
    totalPts: 0,
    rndPts1Saved: 0
};





//Event Listeners Player 1.

rollBtn1.addEventListener('click', addPts1);
takeBtn1.addEventListener('click', addPtsTot1);







//Event Functions Player 1.

//Round points player1 Function.
function addPts1() {
    let rnd = Math.floor(Math.random() * 6) + 1;
    rollPts1.innerHTML = rnd;


    if (rnd != 1) {
        //let round1;
        player1.roundPts = player1.roundPts + rnd;
        //round1 = player1.roundPts;
        //console.log(round1);

        rPts1.innerHTML = player1.roundPts;
        //HERE I THINK IS THE BUG
        player1.rndPts1Saved = player1.roundPts;



    } else {

        rPts1.innerHTML = 0;
        player1.roundPts = 0;
        //player1.totalPts = 0;    Don't even try to Uncomment!!!!
        player1.rndPts1Saved = 0;
        rollBtn1.disabled = true;
        takeBtn1.disabled = true;
        rollBtn2.disabled = false;
        takeBtn2.disabled = false;
        //Changing total points box colors after hiting a 1.
        totalPtsBoard1.style.backgroundColor = '#D3D3D3';
        totalPtsBoard2.style.backgroundColor = '#98FB98';
    }

}
//Total points player1 Function.
function addPtsTot1() {
    //let total1; 
    player1.totalPts = player1.totalPts + player1.rndPts1Saved;
    total1 = player1.totalPts;
    rndPts1.innerHTML = player1.totalPts;
    //total1 = 0;
    player1.roundPts = 0;
    player1.rndPts1Saved = 0;
    rPts1.innerHTML = 0;
    rollBtn1.disabled = true;
    takeBtn1.disabled = true;
    rollBtn2.disabled = false;
    takeBtn2.disabled = false;
    //Changing total points box colors after take.
    totalPtsBoard1.style.backgroundColor = '#D3D3D3';
    totalPtsBoard2.style.backgroundColor = '#98FB98';

    if (total1 >= 100) {
        console.log('You won');
        winMsg.innerHTML = 'The Winner Is: PLAYER1';
        reload.innerHTML = 'Reload';
        reload.style.border = '1px solid blanchedalmond';
        // Style for boards after win.
        totalPtsBoard1.style.backgroundColor = '#FFD700';
        totalPtsBoard2.style.backgroundColor = 'silver';
        //Disabeling after win.
        rollBtn2.disabled = true;
        takeBtn2.disabled = true;

    }
}



// Selecting Player 2 Items Id.

const rollBtn2 = document.querySelector("#pl2-btn-roll");
const takeBtn2 = document.querySelector("#pl2-btn-take");
const rndPts2 = document.querySelector('#t-pts2');
const rollPts2 = document.querySelector('#roll-pts2');
const rPts2 = document.querySelector('#r-pts2');


//Player 2 object.
const player2 = {
    roundPts2: 0,
    totalPts2: 0,
    rndPts2Saved: 0
};





//Event Listeners Player 2.

rollBtn2.addEventListener('click', addPts2);
takeBtn2.addEventListener('click', addPtsTot2);







//Event Functions Player 2.

//Round points player2 Function.
function addPts2() {
    let rnd = Math.floor(Math.random() * 6) + 1;
    rollPts2.innerHTML = rnd;


    if (rnd != 1) {
        //let round2;
        player2.roundPts2 = player2.roundPts2 + rnd;
        //round2 = player2.roundPts2;
        //console.log(round2);

        rPts2.innerHTML = player2.roundPts2;
        player2.rndPts2Saved = player2.roundPts2;



    } else {
        rPts2.innerHTML = 0;
        player2.roundPts2 = 0;
        //player2.totalPts2 = 0;   Don't even try to Uncomment!!!!
        player2.rndPts2Saved = 0;
        rollBtn2.disabled = true;
        takeBtn2.disabled = true;
        rollBtn1.disabled = false;
        takeBtn1.disabled = false;
        //Changing total points box colors after hiting a 1.
        totalPtsBoard1.style.backgroundColor = '#98FB98';
        totalPtsBoard2.style.backgroundColor = '#D3D3D3';
    }

}
//Total points player2 Function.
function addPtsTot2() {
    //let total2; 
    player2.totalPts2 = player2.totalPts2 + player2.rndPts2Saved;
    total2 = player2.totalPts2;
    rndPts2.innerHTML = player2.totalPts2;
    //total2 = 0;
    player2.roundPts2 = 0;
    player2.rndPts2Saved = 0;
    rPts2.innerHTML = 0;
    //Changing total points box colors after take.
    totalPtsBoard1.style.backgroundColor = '#98FB98';
    totalPtsBoard2.style.backgroundColor = '#D3D3D3';


    //console.log(total2);



    rollBtn2.disabled = true;
    takeBtn2.disabled = true;
    rollBtn1.disabled = false;
    takeBtn1.disabled = false;

    if (total2 >= 100) {
        console.log('You won');
        winMsg.innerHTML = 'The Winner Is: PLAYER2';
        reload.innerHTML = 'Reload';
        reload.style.border = '1px solid blanchedalmond';
        // Style for boards after win.
        totalPtsBoard1.style.backgroundColor = 'silver';
        totalPtsBoard2.style.backgroundColor = '#FFD700';
        //Disabeling after win.
        rollBtn1.disabled = true;
        takeBtn1.disabled = true;


    }
}


//Winning message.

const winMsg = document.querySelector('#winner-txt');


//Showing Rules

//Selecting consts for rules segment

const rulesMenu = document.querySelector("#rulesMenu");
const rules = document.querySelector("#rules");
const hideRules = document.querySelector("#hideRules");

//Show the rules Event and Function
rulesMenu.addEventListener('click', showRules);

function showRules() {
    rules.innerHTML = `Choose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.

    If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the die to the next player.
    
    Play passes from player to player until a winner is determined.

    HOW DO YOU WIN?
    The first player to accumulate 100 or more points wins the game.`;

    hideRules.innerHTML = 'Hide Rules';
    hideRules.style.border = '1px solid blanchedalmond';

}

//Hide the rules Event and Function
hideRules.addEventListener('click', hidingRules);

function hidingRules() {
    rules.innerHTML = '';
    hideRules.innerHTML = '';
    hideRules.style.border = '';
};