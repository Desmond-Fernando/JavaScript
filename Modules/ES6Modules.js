// import module1 from 'module1'; // {fight}
// import module2 from 'module2';

export function jump() {}

const harry = 'potter';
const voldemort = 'He who must not be named';

export default function fight(char1, char2) {
  // export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  console.log(attack1);
  console.log(attack2);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

// import { fight } from 'fightscript'; // in the other file
import fight from 'fightscript'; // in the other file
import fight, { jump } from 'fightscript'; // in the other file

console.log(fight('ron', 'hedwig'));

{
  /* <script type="module"></script>; */
}
