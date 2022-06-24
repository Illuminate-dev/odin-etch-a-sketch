const grid = document.querySelector("#grid");

function createGrid(side1, side2) {

    grid.style.gridTemplateRows = `repeat(${side1}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${side2}, 1fr)`;

    for ( i = 0; i < side1*side2; i++) {
        let square = document.createElement('div');
        square.className = 'square';
    
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'black';
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

document.querySelector('.size').addEventListener('click', (e) => {
    console.log('test');
    changeSize('New grid size?');


});




destroyGrid();
createGrid(16, 16);