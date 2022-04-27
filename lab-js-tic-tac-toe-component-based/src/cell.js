import Component from  './component.js';

import './cell.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    static random(){
        return cellnumgenerate();
    }


    constructor(root) {
        super(root);
        
        root.addEventListener("click", this.handleDomClick.bind(this));
        this.reset();
    }

    reset() {
        this.cellnum = 2;
        this.root.style.backgroundImage="url(../img/2.png)";
    }

    getCellnum (){
        return this.cellnum ;
    }

    circle(){
        this.cellnum=0;
        this.root.style.backgroundImage="url(../img/0.png)";
    }

    cross(){
        this.cellnum=1;
        this.root.style.backgroundImage="url(../img/1.png)";
    }

    handleDomClick(e) {
        this.fire('click', this.cellnum);
    }
}
