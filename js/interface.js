let squares = document.querySelectorAll('.square');
var seter = false;
var playerTime = 0;

// Poderia ter adicionado os id's
var gamePosicao = 0;

mudarVisor();

squares.forEach((square) => {
	// Definindo atributos nos quadrados
	square.addEventListener('click', clicar);
	square.setAttribute('colocado', false);
	// Definindo a posição no ARRAY
	gamePosicao += 1;
	square.setAttribute('n', gamePosicao - 1);
});

function clicar() {
	if (playerTime == 0) {
		if (adicionar(this, this.getAttribute('n'), seter)) {
			playerTime = 1;
			mudarVisor();
		}
		seter = gameOver();
	} else {
		if (adicionar(this, this.getAttribute('n'), seter)) {
			playerTime = 0;
			mudarVisor();
		}
		seter = gameOver();
	}
}

function resetClick() {
	reset(squares);
	playerTime = 0;
	seter = false;
	mudarVisor();
}
