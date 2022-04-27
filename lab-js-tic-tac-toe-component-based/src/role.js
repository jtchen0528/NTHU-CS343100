import Component from  './component.js';

import './role.css';

/*
 * [Event name: params]
 * click: this, color
 */

 var Xscore=0;
 var Oscore=0;

export default class Role extends Component {
    static getRootClass() {
        return '.role';
    }

    constructor(root) {
        super(root);

        this.circlescoreDisplay = root.querySelector('.circle');
        this.crossscoreDisplay = root.querySelector('.cross');
        this.resetcellDisplay = root.querySelector('.resetcell');
        this.reset();
    }

    reset(){
        Oscore=0;
        Xscore=0;
        this.circlescoreDisplay.textContent="O=0";
        this.crossscoreDisplay.textContent="X=0";
    }

    showCircleScored(){
        console.log(".role O score");
        Oscore++;
        this.circlescoreDisplay.textContent="O=" + Oscore;
    }

    showCrossScored(){
        console.log(".role O score");
        Xscore++;
        this.crossscoreDisplay.textContent="X="+ Xscore;
    }

    showResetCell(){
        this.resetcellDisplay.textContent="press cell to reset";
    }
}