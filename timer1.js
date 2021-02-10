//Simple Alarm Clock / Timer App
let alarmNumArr = process.argv.slice(2);
if(alarmNumArr.length === 0) {
  return false;
} else {
  for (let i = 0; i < alarmNumArr.length; i++) {
    if(isNaN(alarmNumArr[i]) === false || (typeof(alarmNumArr[i]) === "number" && alarmNumArr[i] > 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * alarmNumArr[i]);
    } else {
      setTimeout(() => { 
      }, 10);
    }
  }
};
