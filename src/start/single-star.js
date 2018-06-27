import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'

/**
 * @customElement
 * @polymer
 */
class SingleStar extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: inline;
        }
        @keyframes latidos {
            from { transform: none; }
            50% { transform: scale(1.5); }
            to { transform: none; }
        }
        iron-icon:hover {
          --iron-icon-fill-color: gold;
          animation-name: latidos;
          animation-duration: .5s;
          animation-iteration-count: 5;
        }
        .icon_gold {
           --iron-icon-fill-color: gold;
        }
        .icon_gray {
            --iron-icon-fill-color: gray;
        }
      </style>
      <iron-icon class$="[[color_icon]]" on-click="toggle" icon="[[icon]]"></iron-icon>
    `;
    }
    static get properties() {
        return {
            numid: Number,
            vote: {
                type: Number,
                value: 0
            },
            icon: {
                type: String,
                computed: '_calculateIcon(vote)'

            },
            color_icon: {
                type: String,
                computed: '_calculateColorIcon(vote)'
            },
        }
    }

    toggle() {
        this.dispatchEvent(new CustomEvent('vote', {
            detail: {
                id: this.numid,
            },
        }));
    }

    _calculateIcon(vote) {
        if(vote >= this.numid) {
            return 'icons:star';
        }
        return 'icons:star-border';
    }

    _calculateColorIcon(vote) {
        if(vote >= this.numid) {
            return 'icon_gold';
        }
        return 'icon_gray';
    }
}

window.customElements.define('single-star', SingleStar);
