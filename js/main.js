
const clockContainer = document.getElementById('clock'),
			clockText = clockContainer.querySelector('h2');

// Function 
const clock = (clockContainer) => {
	const hora = new Date().getHours()
			 minuto = new Date().getMinutes(),
			 segundo = new Date().getSeconds(),
			 time = `${hora}:${minuto}:${segundo}`;

	clockContainer.textContent = time;
}

clock(clockText);


setInterval(() => {
	clock(clockText);
}, 1000);