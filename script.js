const gridContainer = document.querySelector('.grid-container');


function createGrid (num) {
    let squaredNum = num * num;
    for (let i = 0; i < squaredNum; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('sketchbox');
        gridContainer.append(gridSquare);
    }
    gridContainer.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${num}, 1fr)`);
}

createGrid(20);
