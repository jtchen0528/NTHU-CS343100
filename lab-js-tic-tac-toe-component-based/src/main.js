import Component from  './component.js';
import Banner from  './banner.js';
import Grid from  './grid.js';
import Reset from  './reset.js';

import './main.css';

var timer;

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.grid = new Grid(root.querySelector('.grid'));
        this.grid.on('crosswinClick', this.handleGridCrossWinClick.bind(this));
        this.grid.on('circlewinClick', this.handleGridCircleWinClick.bind(this));
        this.grid.on('circleturnClick', this.handleGridCircleTurnClick.bind(this));
        this.grid.on('crossturnClick', this.handleGridCrossTurnClick.bind(this));
        this.grid.on('drawClick', this.handleGridDrawClick.bind(this));
        this.grid.on('gameClick', this.handleGridGameClick.bind(this));
        this.banner = new Banner(root.querySelector('.banner'));

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleRestClick.bind(this));
    }

    handleGridCrossWinClick(firer) {
        this.banner.showCrossWinMessage();
        this.banner.handleCrossScored();
        this.banner.handleResetCell();
    //    this.handlereset();
    }

    handleGridCircleWinClick(firer) {
        this.banner.showCircleWinMessage();
        this.banner.handleCircleScored();
        this.banner.handleResetCell();
    //    this.handlereset();
    }

    handleGridCircleTurnClick(firer) {
        this.banner.showCircleTurnMessage();
    }

    handleGridCrossTurnClick(firer) {
        this.banner.showCrossTurnMessage();
    }

    handleGridDrawClick(firer) {
        this.banner.showDrawMessage();
    }

    handleGridGameClick(firer) {
        this.handlereset();
        this.banner.role.resetcellDisplay.textContent="_";
    }

    handleRestClick() {
        this.grid.reset();
        this.banner.reset();
        this.reset.reset();
        this.banner.role.resetcellDisplay.textContent="_";
    }

    handlereset(){
        this.grid.reset();
        this.reset.reset();
    }

}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
