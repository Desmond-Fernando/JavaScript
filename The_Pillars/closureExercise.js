function callMeMaybe() {
  const callMe = 'Hi! I am now here!';
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
}
callMeMaybe();

// following also works
// Becoause of the power of the Closure
function callMeMaybee() {
  setTimeout(() => {
    console.log(callMe);
  }, 4000);

  const callMe = 'Hi! I am now here!';
}

callMeMaybee();

// Memory Effecient
//this will create array each time
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😀');
  console.log('created!');
  return bigArray[index];
}

heavyDuty(688);
heavyDuty(700);
heavyDuty(908);

//This closure implementation will create the array only once
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😀');
  console.log('created again!');
  return function (index) {
    return bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(648));
console.log(getHeavyDuty(750));
console.log(getHeavyDuty(876));

// Encapsulation
//least privilege
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  };
  setInterval(passTime, 1000);
  return {
    // launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
ohno.totalPeaceTime();
// ohno.launch();
