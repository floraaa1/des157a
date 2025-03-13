(function(){
    'use strict';
    console.log('reading js');
    const startBtn = document.querySelector('#start');
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');

    const rollButton = document.querySelector('#roll');
    const rollAgainButton = document.querySelector('#rollagain');
    const likeButton = document.querySelector('#like');
    const afterRollContainer = document.querySelector('.afterroll');

    //get the dice display containers
    const diceContainer1 = document.querySelector('#dice1');
    const diceContainer2 = document.querySelector('#dice2');

    //get the piece elements for both players
    const piece1 = document.querySelector('.chess1-1'); 
    const piece2 = document.querySelector('.chess1-2');

    const player1Status = document.querySelector('.player1 img');
    const player2Status = document.querySelector('.player2 img');

    const overlay = document.querySelector('.overlay');
    const resultModal = document.querySelector('.result');
    const resultText = document.querySelector('#resultText');
    const closeButton = document.querySelector('#close');

    //add sound
    const clickSound = new Audio('sound/click.mp3');
    const rollDiceSound = new Audio('sound/rollDice.mp3');

    document.addEventListener('click', function() {
        clickSound.currentTime = 0;
        clickSound.play();
    });

    const gameData = {
        dice1:['d1_1.png', 'd1_2.png', 'd1_3.png', 'd1_4.png', 'd1_5.png', 'd1_6.png'],
        dice2:['d2-1.png', 'd2-2.png', 'd2-3.png', 'd2-4.png', 'd2-5.png', 'd2-6.png'],
        players:['player1', 'player2'],
    }

    const player1 = {
        moves:[
            [202, 41],[125, 103],[195, 167],[120, 220],[200, 283],[270, 226],[351, 162], [420, 225],[500, 164],[577, 220],[500, 290],[570,347],[500,400], [429, 457], [350, 397],[280, 460],[354, 520],[423,580], [350,670]
        ],
        index:0,
        winCoord: [350, 670]
    };

    const player2 = {
        moves:[
            [350,670], [423,580], [354, 520], [280, 460], [350, 397], [429, 457],[500,400], [570,347], [500, 290],[577, 220],[500, 164],[420, 225],[351, 162], [270, 226],[200, 283],[120, 220],[195, 167],[125, 103],[202, 41]
        ],
        index:0,
        winCoord: [202, 41]
    };

    startBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('start button clicked');

        page1.style.display = 'none';
        page2.style.visibility = 'visible';
        document.body.style.background = "hidden";
        // document.body.style.backgroundColor = '#FFEEC4';

    });

   //0 => player1, 1 => player2
   let currentTurn = 0;
   let currentRoll = 0;
   let rollAgainUsed = false;

   //show or hide the correct player images
   function updatePlayerStatus() {
       if (currentTurn === 0) {
           player1Status.src = "images/player1_p1.png";
           player2Status.src = "images/player2_p2.png";
       } else {
           player1Status.src = "images/player1_p2.png";
           player2Status.src = "images/player2_p1.png";
       }
   }
   updatePlayerStatus();

   //show the result modal with a message, and overlay
   function showResultModal(winner) {
       resultText.innerHTML = `Congrats! Player ${winner} wins the game!`;
       overlay.style.display = 'block';  
       resultModal.style.display = 'block';
   }

   //close button hides the modal & overlay
   closeButton.addEventListener('click', function() {
       resultModal.style.display = 'none';
       overlay.style.display = 'none';
   });

   //hide after-roll container initially
   afterRollContainer.style.display = "none";

   //roll the dice, show dice image & hide main roll button
   function performRoll() {
        diceContainer1.innerHTML = "";
        diceContainer2.innerHTML = "";
        diceContainer1.style.display = "none";
        diceContainer2.style.display = "none";

       currentRoll = Math.floor(Math.random() * 6) + 1;

        rollDiceSound.currentTime = 0;
        rollDiceSound.play();

       if (currentTurn === 0) {
            diceContainer1.style.display = "block";
            diceContainer1.innerHTML = `
                <img src="images/${gameData.dice1[currentRoll - 1]}" alt="dice roll ${currentRoll}">
                <p>Roll: ${currentRoll}</p>
           `;
       } else {
            diceContainer2.style.display = "block";
            diceContainer2.innerHTML = `
                <img src="images/${gameData.dice2[currentRoll - 1]}" alt="dice roll ${currentRoll}">
                <p>Roll: ${currentRoll}</p>
           `;
       }
       rollButton.style.display = "none";
       afterRollContainer.style.display = "flex";

       //show or hide "Roll again?" button based on usage
       if (!rollAgainUsed) {
           rollAgainButton.style.display = "block";
       } else {
           rollAgainButton.style.display = "none";
       }
   }

   //,ove the piece based on confirmed dice roll
   function movePiece(roll) {
       if (currentTurn === 0) {
           //player1's turn
           if (roll === 1) {
               diceContainer1.innerHTML += `<p>(No movement)</p>`;
               setTimeout(() => {
                   rollButton.style.display = "block";
                   rollAgainUsed = false;
                   currentTurn = 1;
                   updatePlayerStatus();
               }, 1000);
           } else {
               let steps = roll;
               let moveInterval = setInterval(() => {
                   if (steps > 0 && player1.index < player1.moves.length - 1) {
                       player1.index++;
                       let newPos = player1.moves[player1.index];
                       piece1.style.left = newPos[0] + 'px';
                       piece1.style.top = newPos[1] + 'px';
                       //check win condition
                       if (newPos[0] === player1.winCoord[0] && newPos[1] === player1.winCoord[1]) {
                           clearInterval(moveInterval);
                           //show the result modal for player1
                           showResultModal(1);
                           return; 
                       }
                       steps--;
                   } else {
                       clearInterval(moveInterval);
                       currentTurn = 1;
                       updatePlayerStatus();
                       rollButton.style.display = "block";
                       rollAgainUsed = false;
                   }
               }, 300);
           }
       } else {
           //player2's turn
           if (roll === 1) {
               diceContainer2.innerHTML += `<p>(No movement)</p>`;
               setTimeout(() => {
                   rollButton.style.display = "block";
                   rollAgainUsed = false;
                   currentTurn = 0;
                   updatePlayerStatus();
               }, 1000);
           } else {
               let steps = roll;
               let moveInterval = setInterval(() => {
                   if (steps > 0 && player2.index < player2.moves.length - 1) {
                       player2.index++;
                       let newPos = player2.moves[player2.index];
                       piece2.style.left = newPos[0] + 'px';
                       piece2.style.top = newPos[1] + 'px';
                       //check win condition
                       if (newPos[0] === player2.winCoord[0] && newPos[1] === player2.winCoord[1]) {
                           clearInterval(moveInterval);
                           //show the result modal for player2
                           showResultModal(2);
                           return;
                       }
                       steps--;
                   } else {
                       clearInterval(moveInterval);
                       currentTurn = 0;
                       updatePlayerStatus();
                       rollButton.style.display = "block";
                       rollAgainUsed = false;
                   }
               }, 300);
           }
       }
   }

   //button listeners
   rollButton.addEventListener('click', function() {
       rollAgainUsed = false;
       performRoll();
   });

   rollAgainButton.addEventListener('click', function() {
       if (!rollAgainUsed) {
           rollAgainUsed = true;
           performRoll();
           rollAgainButton.style.display = "none";
       }
   });

   likeButton.addEventListener('click', function() {
       afterRollContainer.style.display = "none";
       movePiece(currentRoll);
   });

    closeButton.addEventListener('click', function() {
        // resultModal.style.display = 'none';
        // overlay.style.display = 'none';
        // // Hide the game page and show the start page
        // document.querySelector('.page2').style.display = 'none';
        // page1.style.display = 'block';
        window.location.reload();
    });

})();