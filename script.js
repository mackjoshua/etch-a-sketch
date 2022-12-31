const gridContainer = document.querySelector('.grid-container');
const newGridBtn = document.querySelector('#create-grid');


function createGrid (num) {
    let squaredNum = num * num;
    for (let i = 0; i < squaredNum; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('sketchbox');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.setProperty('background-color', 'black');
        })
        gridContainer.append(gridSquare);
    }
    gridContainer.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${num}, 1fr)`);
    

}

// createGrid(20);

newGridBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let userNum = prompt("Enter grid's side length");
    createGrid(userNum);
    console.log('clicked');
});