//import { isValidateInn } from "./validators";

export class InnFormWidget {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `
        <h1 class="container-title">Validate Credit Card Numbers</h1>
        <ul class="credit-card-types">
            <li class="amex-image card_item"><span class="amex-image"></span></li>
            <li class="diners-image card_item"><span class="diners-image"></span></li>
            <li class="discover-image card_item"><span class="discover-image"></span></li>
            <li class="jcb-image card_item"><span class="jcb-image"></span></li>
            <li class="mastercard-image card_item"><span class="mastercard-image"></span></li>
            <li class="visa-image card_item"><span class="visa-image"></span></li>
            <li class="mir-image card_item"><span class="mir-image"></span></li>
        </ul>
        <form class="form">
            <input placeholder="Enter card number"  class="input">
            <submit class="submit">Click to Validate</submit>
        </form>
        `;
  }

  bindToDOM() {
    this.container.innerHTML = InnFormWidget.markup;
  }
}
