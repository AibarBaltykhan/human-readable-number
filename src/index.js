module.exports = function toReadable (number) {
  if (number == '') {
      return 'zero';
  }
  let answer = '';
  let hundreds = Math.floor(number/100);
  let dozens = Math.floor((number-hundreds*100)/10);
  let units = number%10;
  if (hundreds === 1) {
    answer += 'one ';
  }
  if (hundreds === 2) {
    answer += 'two ';
  }
  if (hundreds === 3) {
    answer += 'three ';
  }
  if (hundreds === 4) {
    answer += 'four ';
  }
  if (hundreds === 5) {
    answer += 'five ';
  }
  if (hundreds === 6) {
    answer += 'six ';
  }
  if (hundreds === 7) {
    answer += 'seven ';
  }
  if (hundreds === 8) {
    answer += 'eight ';
  }
  if (hundreds === 9) {
    answer += 'nine ';
  }
  if (hundreds > 0) {
      answer += 'hundred';
      if (number%100 != 0 && dozens != 0) {
          answer += ' ';
    }
  }
  if (dozens === 2) {
    answer += 'twenty';
  }
  if (dozens === 3) {
    answer += 'thirty';
  }
  if (dozens === 4) {
    answer += 'forty';
  }
  if (dozens === 5) {
    answer += 'fifty';
  }
  if (dozens === 6) {
    answer += 'sixty';
  }
  if (dozens === 7) {
    answer += 'seventy';
  }
  if (dozens === 8) {
    answer += 'eighty';
  }
  if (dozens === 9) {
    answer += 'ninety';
  }
  if (dozens === 1) {
    if (units === 0) {
        answer += 'ten';
    } 
    if (units === 1) {
        answer += 'eleven';
    }
    if (units === 2) {
        answer += 'twelve';
    }
    if (units === 3) {
        answer += 'thirteen';
    }
    if (units === 4) {
        answer += 'fourteen';
    }
    if (units === 5) {
        answer += 'fifteen';
    }
    if (units === 6) {
        answer += 'sixteen';
    }
    if (units === 7) {
        answer += 'seventeen';
    }
    if (units === 8) {
        answer += 'eighteen';
    }
    if (units === 9) {
        answer += 'nineteen';
    }
  } else {
    if (number > 9 && (number%10 != 0)) {
        answer += ' ';
    } 
    if (units === 1) {
        answer += 'one';
    }
    if (units === 2) {
        answer += 'two';
    }
    if (units === 3) {
        answer += 'three';
    }
    if (units === 4) {
        answer += 'four';
    }
    if (units === 5) {
        answer += 'five';
    }
    if (units === 6) {
        answer += 'six';
    }
    if (units === 7) {
        answer += 'seven';
    }
    if (units === 8) {
        answer += 'eight';
    }
    if (units === 9) {
        answer += 'nine';
    }
  }
  return answer;
}
