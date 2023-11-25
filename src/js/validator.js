
export default class IsValidateInn {
  constructor(paySistem) {
    this.paySistem = paySistem;
  }

algorithmLuna(value) {
    const numCard= String(value).match(/\d/g);
    let sum = 0;
    if (numCard.length % 2 === 0) {
      for (let i = 0; i < numCard.length; i++) {
        if (i % 2 === 0) {
          sum +=
            +numCard[i] * 2 > 9? +numCard[i] * 2 - 9 : +numCard[i] * 2;
        } else {
          sum += +numCard[i];
        }
      }
    } else {
      for (let i = 0; i < numCard.length; i++) {
        if (i % 2 !== 0) {
          sum +=
            +numCard[i] * 2 > 9 ? +numCard[i] * 2 - 9 : +numCard[i] * 2;
        } else {
          sum += +numCard[i];
        }
      }
    }
    return sum % 10 === 0;
  }
    checkPaySystem(value) {
      if (value) {
        this.value = String(value).trim();
        if (this.paySistem[this.value] && this.value.startsWith(this.paySistem[this.value].starts)) {
          return this.paySistem[this.value].name;
        }
      }
      return false;
    }
  }

