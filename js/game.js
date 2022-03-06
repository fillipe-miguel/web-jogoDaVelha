var game = [];
var peca = ['🦁', '🦓'];

for (let i = 0; i < 9; i++) {
	game[i] = { posicao: i, valor: '' };
}

let combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function adicionar(element, value, seter) {
	if (!seter) {
		if (element.getAttribute('colocado') == 'false') {
			element.setAttribute('colocado', true);
			element.innerHTML = `<h2> ${peca[playerTime]} </h2>`;
			game[value] = peca[playerTime];
			return true;
		} else {
			alert('Peça já colocada!');
			return false;
		}
	}
}

function gameOver() {
	for (let i of combinations) {
		let val1 = i[0];
		let val2 = i[1];
		let val3 = i[2];

		if (
			game[val1] == game[val2] &&
			game[val1] == game[val3] &&
			game[val1] != ''
		) {
			setTimeout(() => {
				alert(`Jogador ${game[val1]} ganhou!`);
			}, 200);
			return true;
		}
	}
	return false;
}

function reset(element) {
	for (let i = 0; i < 9; i++) {
		game[i] = { posicao: i, valor: '' };
	}

	for (let i = 0; i < 9; i++) {
		element[i].setAttribute('colocado', false);
		element[i].innerHTML = `<h2> </h2>`;
	}
}

function mudarVisor() {
    let divPlayerTime = document.getElementById('playerTime');
    divPlayerTime.innerHTML = `Vez do jogador ${peca[playerTime]}`;
}