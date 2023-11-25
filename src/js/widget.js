export default class InnFormWidget {
  constructor() {
    this.container = null;
  }

  static get markup() {
    return `
        <h1 class="container-title">Validate Credit Card Numbers</h1>
        <ul class="credit-card-types">
            <li class="card_item amex"><span class="amex-image"></span></li>
            <li class="card_item diners"><span class="diners-image"></span></li>
            <li class="card_item discover"><span class="discover-image"></span></li>
            <li class="card_item jcb"><span class="jcb-image"></span></li>
            <li class="card_item mastercard"><span class="mastercard-image"></span></li>
            <li class="card_item visa"><span class="visa-image"></span></li>
            <li class="card_item mir"><span class="mir-image"></span></li>
        </ul>
        <form class="form">
            <input placeholder="Enter card number"  class="input">
            <button class="submit" type="submit">Click to Validate</button>
        </form>
        <div class="message">
          <div class="text"></div>
        </div>
        `;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  drawUI() {
    this.container.innerHTML = InnFormWidget.markup;
  }
}
