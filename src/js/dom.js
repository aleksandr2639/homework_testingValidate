import IsValidateInn from './validator';

export default class DomApp {
  constructor(widget, sistem) {
    this.widget = widget;
    this.sistem = sistem;
    this.text = this.widget.querySelector('.text');
    this.message = this.widget.querySelector('.message');
    this.input = this.widget.querySelector('.input');
    this.item = this.widget.querySelectorAll('.card_item');
    this.types = this.widget.querySelector('.credit-card-types');
    this.validator = new IsValidateInn(this.sistem);
    this.button = this.widget.querySelector('.submit');
    this.form = this.widget.querySelector('.form');
  }

  eventApp() {
    this.input.addEventListener('input', () => this.showValidate());
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.showMessage();
    });
  }

  showValidate() {
    const valueLength = this.input.value.length;
    if (valueLength < 2) {
      this.cleanStyle();
      this.removeMessage();
    }
    if (valueLength === 2) {
      const nameCard = this.getPaySistem(this.input.value);
      if (nameCard) {
        this.removeMessage();
        this.addStyle(nameCard);
      } else this.addMessage('Error, enter card number!');
    }
  }

  showMessage() {
    const { value } = this.input;
    if (this.getPaySistem(value) && this.validator.algorithmLuna(value)) {
      const shortName = this.getPaySistem(value);
      this.addStyle(shortName);
      this.addMessage('The card is valid');
    } else {
      this.addMessage('The card is not valid');
      this.cleanStyle();
    }
  }

  getPaySistem(value) {
    const pos = value.split('');
    const temp = pos[0] + pos[1];
    if (this.sistem[pos[0]] || this.sistem[temp]) {
      return this.validator.checkPaySystem(pos[0]) || this.validator.checkPaySystem(temp);
    }
    return false;
  }

  addStyle(shortName) {
    this.types.querySelector(`.${shortName}`).classList.add('selection');
    this.item.forEach((e) => {
      e.classList.add('blur');
    });
  }

  cleanStyle() {
    this.item.forEach((e) => {
      e.classList.remove('selection', 'blur');
    });
  }

  addMessage(text) {
    this.text.textContent = text;
  }

  removeMessage() {
    this.text.textContent = '';
  }
}
