import Component from './component.js';
import Cell from './cell.js';

import './grid.css';
import { createDecipher } from 'crypto';

/*
 * [Event name: params]
 * wrongClick: this
 * rightClick: this, pickedColor
 */
export default class Gird extends Component {
    static getRootClass() {
        return '.grid';
    }

    constructor(root) {
        super(root);
        this.gameOver = false;
        this.gameOver2 = false;
        this.cells = [];
        this.turn = 0;
    //    root.addEventListener("click", this.handleGridClick.bind(this));
        const els = root.querySelectorAll(Cell.getRootClass());
        for (let el of els) {
            const cell = new Cell(el);
            cell.on('click', this.handleCellClick.bind(this));
            this.cells.push(cell);
        }
    }

    reset() {
        this.gameOver = false;
        this.gameOver2 = false;
        this.turn=0;
        for (let cell of this.cells)
            cell.reset();
    }

    handleCellClick(firer, cellnum ) {
        console.log(this.gameOver2);
        if(this.gameOver2)
            return;
        if (this.gameOver){
            this.gameOver2=true;
            this.fire('gameClick');
        //    return;
        }else{
        if (cellnum===2){
            if(this.turn===0){
                firer.circle();
                this.showcellnums();
                console.log(this.cells);
                this.fire('crossturnClick');
                this.turn=1;
            }else{
                firer.cross();
                this.showcellnums();
                console.log(this.cells);
                this.fire('circleturnClick');
                this.turn=0;
            }
        }else{
        }
        }
        this.checkwin();
    }

    showcellnums() {
        console.log(this.cells[0].cellnum, this.cells[1].cellnum, this.cells[2].cellnum);
        console.log(this.cells[3].cellnum, this.cells[4].cellnum, this.cells[5].cellnum);
        console.log(this.cells[6].cellnum, this.cells[7].cellnum, this.cells[8].cellnum);
    }

    handleGridClick(e) {
        this.fire('gameclick');
    }

    checkwin() {
        if(((this.cells[0].cellnum===1)&&(this.cells[1].cellnum===1)&&(this.cells[2].cellnum===1))||
        ((this.cells[3].cellnum===1)&&(this.cells[4].cellnum===1)&&(this.cells[5].cellnum===1))||
        ((this.cells[6].cellnum===1)&&(this.cells[7].cellnum===1)&&(this.cells[8].cellnum===1))||
        ((this.cells[0].cellnum===1)&&(this.cells[3].cellnum===1)&&(this.cells[6].cellnum===1))||
        ((this.cells[1].cellnum===1)&&(this.cells[4].cellnum===1)&&(this.cells[7].cellnum===1))||
        ((this.cells[2].cellnum===1)&&(this.cells[5].cellnum===1)&&(this.cells[8].cellnum===1))||
        ((this.cells[0].cellnum===1)&&(this.cells[4].cellnum===1)&&(this.cells[8].cellnum===1))||
        ((this.cells[2].cellnum===1)&&(this.cells[4].cellnum===1)&&(this.cells[6].cellnum===1))){
            this.gameOver = true;
            console.log("cross win");
            this.fire('crosswinClick');
        }else if(((this.cells[0].cellnum===0)&&(this.cells[1].cellnum===0)&&(this.cells[2].cellnum===0))||
        ((this.cells[3].cellnum===0)&&(this.cells[4].cellnum===0)&&(this.cells[5].cellnum===0))||
        ((this.cells[6].cellnum===0)&&(this.cells[7].cellnum===0)&&(this.cells[8].cellnum===0))||
        ((this.cells[0].cellnum===0)&&(this.cells[3].cellnum===0)&&(this.cells[6].cellnum===0))||
        ((this.cells[1].cellnum===0)&&(this.cells[4].cellnum===0)&&(this.cells[7].cellnum===0))||
        ((this.cells[2].cellnum===0)&&(this.cells[5].cellnum===0)&&(this.cells[8].cellnum===0))||
        ((this.cells[0].cellnum===0)&&(this.cells[4].cellnum===0)&&(this.cells[8].cellnum===0))||
        ((this.cells[2].cellnum===0)&&(this.cells[4].cellnum===0)&&(this.cells[6].cellnum===0))){
            this.gameOver = true;
            console.log("circle win");
            this.fire('circlewinClick');
        }else if((this.cells[0].cellnum!==2)&&(this.cells[3].cellnum!==2)&&(this.cells[6].cellnum!==2)&&
        (this.cells[1].cellnum!==2)&&(this.cells[4].cellnum!==2)&&(this.cells[7].cellnum!==2)&&
        (this.cells[2].cellnum!==2)&&(this.cells[5].cellnum!==2)&&(this.cells[8].cellnum!==2)){
            this.gameOver = true;
            console.log("draw");
            this.fire('drawClick');
        }
        console.log("checkwining");
    }

}
