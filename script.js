const main = document.getElementById('weather-cards');

// Dados do clima para cada cidade
const weatherData = [
    { city: 'Myeongdong', temperature: '15°C', forecast: ['Seg', 'Ter', 'Qua'] },
    { city: 'Tóquio', temperature: '18°C', forecast: ['Qua', 'Qui', 'Sex'] },
    { city: 'Nova York', temperature: '10°C', forecast: ['Ter', 'Qua', 'Qui'] },
    { city: 'Londres', temperature: '22°C', forecast: ['Seg', 'Seg', 'Seg'] },
    { city: 'POA', temperature: '22°C', forecast: ['Seg', 'Seg', 'Seg'] },
    { city: 'Paris', temperature: '22°C', forecast: ['Seg', 'Seg', 'Seg'] }
    
];


function generateWeatherCards() {
    // Para cada conjunto de dados do clima
    weatherData.forEach(data => {
        // Criar elementos HTML para o card de clima
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('weather-card-container');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('weather-image-container', 'w3-display-container', 'w3-text-white');

        const infoBox = document.createElement('div');
        infoBox.classList.add('weather-info-box', 'w3-xlarge', 'w3-display-bottomleft', 'w3-padding');
        infoBox.textContent = `${data.city} ${data.temperature}`;

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const image = document.createElement('img');
        image.src = `img/${data.city}.png`;
        image.alt = data.city;
        image.style.width = '100%';

        imageWrapper.appendChild(image);
        imageContainer.appendChild(infoBox);
        imageContainer.appendChild(imageWrapper);

        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('weather-forecast-container', 'w3-row');

        const weatherIcons = ['sun', 'rain', 'cloudy']; 

        data.forecast.forEach((day, index) => {
            const dayBox = document.createElement('div');
            dayBox.classList.add('weather-day-box', 'w3-third', 'w3-center');
            dayBox.innerHTML = `<h3>${day}</h3><img src="img/${weatherIcons[index]}.png" alt="${weatherIcons[index]}" style="width:80px">`;
            forecastContainer.appendChild(dayBox);
        });

        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(forecastContainer);
        main.appendChild(cardContainer);
    });
}

// Chamando a função para gerar os cards de clima
generateWeatherCards();