const ball = document.querySelector(`img`)
const input = document.querySelector(`input`)
const answer = document.querySelector(`.answer`)
const error = document.querySelector(`.error`)
const answers = [
	`Tak!`,
	`Nie!`,
	`Nie wiem!`,
	`Nie chcesz tego wiedzieć...`,
	`Zadaj pytanie jeszcze raz, bo muszę się dowiedzieć`,
]

const randomAnswer = () => {
	const random = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[random]}`
}

const checkInput = () => {
	if (input.value == '') {
		error.textContent = 'Zadaj pytanie!'
	} else {
		if (input.value.slice(-1) !== `?`) {
			error.textContent = `Pytanie musi być zakończone "?"`
		} else {
			randomAnswer()
		}
	}
	ball.classList.remove(`shake-animation`)
}

const ballShake = () => {
	ball.classList.add(`shake-animation`)
	error.textContent = ''
	answer.innerHTML = ''
	setTimeout(checkInput, 1000)
}

const enter = e => {
	if (e.key === `Enter`) {
		ballShake()
	}
}

ball.addEventListener(`click`, ballShake)
input.addEventListener(`keyup`, enter)
