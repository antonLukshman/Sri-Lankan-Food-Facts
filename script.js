fetch('food_facts.json')
    .then(response => response.json())
    .then(data => {
        const factsContainer = document.getElementById('facts-container');
        data.sri_lankan_food_facts.forEach(item => {
            const factDiv = document.createElement('div');
            factDiv.className = 'fact';
            factDiv.innerHTML = `<h2>${item.fact}</h2><p>${item.description}</p>`;
            factsContainer.appendChild(factDiv);
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error));
