import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../start/single-star.js';

/**
 * @customElement
 * @polymer
 */
class NstarApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <template is="dom-repeat" items="[[nstar]]" as="num">  
        <single-star on-vote="voted" vote="[[vote]]" numid="[[num]]"></single-star>
      </template>
    `;
  }
  static get properties() {
    return {
      num: Number,
      nstar: {
        type: Array,
        value: [],
        readOnly: true,
      }
    }
  }

  ready() {
    super.ready();
    var arrayStar = [];

    for (var i = 1; i <= this.num; i++) {
        arrayStar.push(i);
    }
    this._setNstar(arrayStar);
  }

  voted(e) {
      this.vote = e.detail.id;
  }
}

window.customElements.define('nstar-app', NstarApp);
