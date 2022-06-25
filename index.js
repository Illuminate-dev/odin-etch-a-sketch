const grid = document.querySelector("#grid");
let mode = 'color';
let color = 'black';

function createGrid(side1, side2) {

    grid.style.gridTemplateRows = `repeat(${side1}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${side2}, 1fr)`;

    for ( i = 0; i < side1*side2; i++) {
        let square = document.createElement('div');
        square.className = 'square';
    
        square.addEventListener('mouseover', (e) => {
            handleSquareMouseover(square);
        });
    
        grid.appendChild(square);
    }

}

function destroyGrid () {
    grid.innerHTML = '';
}


function changeSize (text) {
    let size = prompt(text);
    if (!size) {
        return;
    }
    size = parseInt(size);
    
    if (typeof(size) === 'number' && size > 0 && size <= 100) {
       destroyGrid(); 
       createGrid(size, size)
    } else {
        changeSize('Please enter a number between 0 and 100.');
    }
}


function handleSquareMouseover(square) {
    let bgColor = square.style.backgroundColor;
    let newBgColor = `rgb(${Math.random()*255+1},${Math.random()*255+1},${Math.random()*255+1})`;

    if (mode === 'rainbow' && !!bgColor) {
        newBgColor = 'rgb(';
        colorArr = bgColor.slice(4, -1).split(',');
        for (i = 0; i <colorArr.length; i++) {
            if (i !== 0) {
                newBgColor+= ','
            }
            console.log(colorArr[i])
            colorArr[i] = parseInt(colorArr[i]);
            if (colorArr[i] >= 10) {
                colorArr[i] -= 25;
            } else {
                colorArr[i] = 0;
            }
            newBgColor+= colorArr[i];
           console.log(colorArr[i])
        };
        newBgColor += ')';
    }

    if (mode === 'rainbow') square.style.backgroundColor = newBgColor;
    else square.style.backgroundColor = color;
}

document.querySelector('.size').addEventListener('click', (e) => {
    changeSize('New grid size?');
});



destroyGrid();
createGrid(16, 16);