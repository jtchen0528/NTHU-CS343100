import Component from  './component.js';
import Role from './role.js';

import './banner.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Banner extends Component {
    static getRootClass() {
        return '.banner';
    }

    constructor(root) {
        super(root);
        this.role = new Role(root.querySelector('.role'));
        this.messageDisplay = root.querySelector('.message');

        this.role.on('circlescored', this.handleCircleScored.bind(this));
        this.reset();
    }

    reset() {
        this.role.reset();
        this.messageDisplay.textContent = "Turn of Circle";
    }

    resets() {
        this.messageDisplay.textContent = "Turn of Circle";
    }

    showCircleWinMessage() {
        this.messageDisplay.textContent = "Circle Win";
    }

    showCircleTurnMessage() {
        this.messageDisplay.textContent = "Turn of Circle";
    }

    showCrossWinMessage() {
        this.messageDisplay.textContent = "Cross Win";
    }

    showCrossTurnMessage() {
        this.messageDisplay.textContent = "Turn of Cross";
    }

    showDrawMessage() {
        this.messageDisplay.textContent = "Draw";
    }

    handleCircleScored(){
        console.log(".banner O score");
        this.role.showCircleScored();
    }

    handleCrossScored(){
        console.log(".banner X score");
        this.role.showCrossScored();
    }

    handleResetCell(){
        this.role.showResetCell();
    }

}
