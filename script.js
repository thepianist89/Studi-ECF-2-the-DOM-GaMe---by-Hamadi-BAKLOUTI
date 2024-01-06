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
console.log(diceEl);
const new_game_btn = document.getElementById('new-game');
const roll_dice_btn = document.getElementById('roll-dice');
const hold_btn = document.getElementById('hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

/* ============================================================= */

/* les conditions du commencement du jeu */
let current = 0;
let activePlayer = 0;
const score = [0, 0];
let playing = true;

/* ============================================================== */
new_game_btn.addEventListener('click', () => {
  scoreP0El.textContent = 0;
  scoreP1El.textContent = 0;
  current_score.textContent = 0;
  current = 0;
  diceEl.classList.add('hidden');
});
/* ========Start ela va être la loGiQue FiNAle du Jeu========= */
/* Si le Joueur joue : */
// if (playing) {
//   // le joueur lance le dé et tente sa chance:
//   // le joueur garde sa cagnotte (sa ou ses mises additionnées):
// } else {
//   //GAME Over  => le joueur gagnant prends la classe .winner + tous les compteur se mettent à 0 plus aucun bouton qui marche => fin du jeu
// }

/* ========End ela va être la loGiQue FiNAle du Jeu========= */

roll_dice_btn.addEventListener('click', () => {
  // lorsque j'appuis sur roll dice btn voilà ce qui va se passer :
  // 1 - Générer une Mise de dé totalement rabdom entre 1 et 6 (inclus!) :
  let randomDicePick = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDicePick);

  // 2 **enlever la class .hidden de l'image du dé:
  diceEl.classList.remove('hidden');

  //3 **afficher le dé qui match notre random mise:
  diceEl.src = `dice/dice-${randomDicePick}.png`;
  console.log(diceEl);
  console.log(diceEl.src);

  // // 5-l'afficher à notre cagnotte actuelle current (mais attention uniquement du joueur avec class:.active)
  // current_score.textContent = current;

  if (randomDicePick != 1) {
    // 4-Si la mise est differente de 1 => l'ajouter à notre current cagnotte :
    current += randomDicePick;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    console.log(current);
  } else {
    //changer de joueur:
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // // remettre le score courant à 0 et changer de joueur
    current = 0;
    // alterner la classe activePlayer entre les joueur en l'affectant au joueur qui joue!
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

hold_btn.addEventListener('click', () => {
  //il va ajouter le current score dans la case de notre joueur actif (system d'array)
  score[activePlayer] += current;
  //Puis il va la modifier et l'afficher sur le grand score
  document.getElementById(`score--P${activePlayer}`).textContent =
    score[activePlayer];
  // sans oubliant également de reset notre current afin d'éviter les multipiles ajout du même score plusieurs fois successives
  current = 0;
});
// player0
//player1
