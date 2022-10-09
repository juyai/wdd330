const board = document.querySelector('#board');
// con odd index and even index we can distuiinguish users 1 from user2
const chartamount = 9;
const boxes = new Array(chartamount).fill('').map((data, index)=>index);

const charts = boxes.map((box, index) => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('id', index);
    board.appendChild(div);
    //div.addEventListener('click', click);
}
);

board.addEventListener("click", click);

let counter = 1;
const one = document.getElementById("0");
    const two = document.getElementById("1");
    const three = document.getElementById("2");
    const four = document.getElementById("3");
    const five = document.getElementById("4");
    const six = document.getElementById("5");
    const seven = document.getElementById("6");
    const eight = document.getElementById("7");
    const nine = document.getElementById("8");

function click(event) {
    if((counter % 2 === 0) && event.target.textContent === ""){
        event.target.textContent = "X"
        counter += 1;
    } else if((counter % 2 != 0) && event.target.textContent === ""){
        event.target.textContent = "O"
        counter += 1;
    }

    if( (one.textContent != "") && (one.textContent === two.textContent) && (two.textContent === three.textContent)){
        alert("There's a winner");
        reset()
    }

    if( (four.textContent != "") && (four.textContent === five.textContent) && (five.textContent === six.textContent)){
        alert("There's a winner");
        reset();
    }

    if( (seven.textContent != "") && (seven.textContent === eight.textContent) && (eight.textContent === nine.textContent)){
        alert("There's a winner");
        reset();
    }

    if( (one.textContent != "") && (one.textContent === four.textContent) && (four.textContent === seven.textContent)){
        alert("There's a winner");
        reset()
    }

    if( (two.textContent != "") && (two.textContent === five.textContent) && (five.textContent === eight.textContent)){
        alert("There's a winner");
        reset();
    }

    if( (three.textContent != "") && (three.textContent === six.textContent) && (six.textContent === nine.textContent)){
        alert("There's a winner");
        reset();
    }

    if( (one.textContent != "") && (one.textContent === five.textContent) && (five.textContent === nine.textContent)){
        alert("There's a winner");
        reset()
    }

    if( (three.textContent != "") && (three.textContent === five.textContent) && (five.textContent === seven.textContent)){
        alert("There's a winner");
        reset();
    }

};

function reset(){
    const filled = document.querySelectorAll('.box');

    filled.forEach(el => {
        el.textContent = '';
    });

    counter = 1;
};


const resetb = document.querySelector('#reset');
resetb.addEventListener('click', reset);