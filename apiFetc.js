  // Fetch weather data from API
  const apiKey = 'your_api_key';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display weather information on the website
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      document.getElementById('temperature').textContent = temperature;
      document.getElementById('description').textContent = description;
    });
  
  // Apply fade-in animation on scroll
  const elements = document.querySelectorAll('.fade-in');
  const options = {
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);
  
  elements.forEach(element => {
    observer.observe(element);
  });
  