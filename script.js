let board = document.querySelector('.board'),
	player = document.querySelector('.gamer'),
	gamer = true,//если true => X
	cell,
	innerCell,
	countNum = 9,
	winner = null;
const gameTable = [[null,null,null],[null,null,null],[null,null,null]];

for(let i = 0; i < 9; i++) {
	cell = document.createElement('div');
	cell.classList.add('cell');
	innerCell = document.createElement('div');
	innerCell.classList.add('inner-cell');
	innerCell.setAttribute('x', (i % 3).toString())
	innerCell.setAttribute('y', parseInt(i / 3).toString())

	innerCell.onclick = clickElem;

	cell.appendChild(innerCell);
	board.appendChild(cell);

	// console.log(innerCell);
}

// document.querySelector('.button').onclick = location.reload();

player.innerText = 'Сейчас ходит X';

function clickElem(){
	if (this.innerText == '') {
		this.innerText = gamer ? 'X' : 'O';
		let y = this.getAttribute('y'), x = this.getAttribute('x');
		gameTable[y][x] = gamer;
		countNum--;

		if ((gameTable[y][0] === gamer && gameTable[y][1] === gamer && gameTable[y][2] === gamer) ||
		(gameTable[0][x] === gamer && gameTable[1][x] === gamer && gameTable[2][x] === gamer) || 
		(gameTable[0][0] === gamer && gameTable[1][1] === gamer && gameTable[2][2] === gamer) || 
		(gameTable[0][2] === gamer && gameTable[1][1] === gamer && gameTable[2][0] === gamer)) {
			winner = gamer;
		}
		gamer = !gamer;
		player.innerText = gamer ? 'Сейчас ходит X' : 'Сейчас ходит O';

		if (countNum == 0 || winner !== null) {
			if (winner !== null) {
				if (confirm('Победили ' + (winner ? 'X' : 'O') + '\nЖелаете сыграть еще раз?'));
				location.reload();
			} else if (confirm('Ничья \nЖелаете сыграть еще раз?')) {
				location.reload();
			}
		}

	} else {
		alert('Этот ход не допустим')
	}
	
	// console.log(this);

}
