console.log('💪'.repeat(50));

console.log(
  'HellO ECF 2 for StuDi Almost done by the var(--thebAck-Dev) : Hamadi BAKLOUTI'
);

console.log('💪'.repeat(50));

/* ================= */

const nameEl0 = document.querySelector('.name--0');
const nameEl1 = document.querySelector('.name--1');
const scoreP0El = document.getElementById('score--P0');
const scoreP1El = document.getElementById('score--P1');
// const current_score = document.querySelector('.current-score');
const currentScoreP0 = document.getElementById('current--0');
const currentScoreP1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
// console.log(diceEl);
const new_game_btn = document.getElementById('new-game');
const roll_dice_btn = document.getElementById('roll-dice');
const hold_btn = document.getElementById('hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

/* ============================================================= */

/* les conditions du commencement du jeu */
/*====DRY ===*/
/*====DRY ===*/
/*====DRY ===*/

let current;
let activePlayer;
let score;
let ViensJouerAvecMoi;

const newGame = function () {
  current = 0;
  activePlayer = 0;
  score = [0, 0];
  ViensJouerAvecMoi = true;
  scoreP0El.textContent = 0;
  scoreP1El.textContent = 0;
  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;
  diceEl.classList.add('hidden');

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  /*====DRY ===*/
};
// newGame();
/* =========================La logiQue du btn NeW GaMe ============================= */
// new_game_btn.addEventListener('click', () => {
//   current = 0;
//   score[0] = 0;
//   score[1] = 0;
// éviter au mieux la répétition !!
// });

new_game_btn.addEventListener('click', newGame);

/* ============================================================== */
function changerDeJoueur() {
  //changer de joueur:
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // // remettre le score courant à 0
  current = 0;
  // alterner la classe activePlayer entre les joueur en l'affectant au joueur qui joue!
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

roll_dice_btn.addEventListener('click', () => {
  if (ViensJouerAvecMoi) {
    // lorsque j'appuis sur roll dice btn voilà ce qui va se passer :
    // 1 - Générer une Mise de dé totalement rabdom entre 1 et 6 (inclus!) :
    let randomDicePick = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDicePick);

    // 2 **enlever la class .hidden de l'image du dé:
    diceEl.classList.remove('hidden');

    //3 **afficher le dé qui match notre randomise number generé par JS:
    diceEl.src = `dice-${randomDicePick}.png`;
    console.log(diceEl);
    console.log(diceEl.src);

    //=========================> j'arrive pas à le faire changer de photo de dé !!!

    //=========================> j'arrive pas à le faire changer de photo de dé !!!

    //=========================> j'arrive pas à le faire changer de photo de dé !!!

    // // 5-l'afficher à notre cagnotte actuelle current (mais attention uniquement du joueur avec class:.active)
    // current_score.textContent = current;

    if (randomDicePick != 1) {
      // 4-Si la mise est differente de 1 => l'ajouter à notre current cagnotte :
      current += randomDicePick;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      //changer de joueur:
      changerDeJoueur();
    }
  }
});

hold_btn.addEventListener('click', () => {
  if (ViensJouerAvecMoi) {
    //il va ajouter le current score dans la case de notre joueur actif (dans un Array)
    score[activePlayer] += current;
    //Puis il va la modifier et l'afficher sur le grand score
    document.getElementById(`score--P${activePlayer}`).textContent =
      score[activePlayer];
    // sans oubliant également de reset notre current afin d'éviter les multipiles ajout du même score plusieurs fois successives
    // /*===>*/ current = 0;
    //changer de joueur:
    // changerDeJoueur();
    // console.log(score(activePlayer));

    //Voir si un des 2 joueurs arrive à cumuler 100 pts en premier => sera le Gagnant du Jeu
    if (score[activePlayer] >= 100) {
      ViensJouerAvecMoi = false;

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //mais .. mais il faut pas oubliré la class player--active si non ça va créer des conflits
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Changement de joueur
      changerDeJoueur();
    }
  }
});
//Fin du jeu
