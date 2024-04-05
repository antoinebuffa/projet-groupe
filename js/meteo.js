document.addEventListener("DOMContentLoaded", () => {

document.getElementById('search-button').addEventListener('click', function() {
    searchCity();
});

function searchCity() {
    const postalCode = document.getElementById('postal-code-input').value;
    const citiesList = document.getElementById('cities-list');

    fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            citiesList.innerHTML = ''; // Clear previous results

            if (data.length > 0) {
                data.forEach(cityData => {
                    const cityName = cityData.nom;
                    const li = document.createElement('li');
                    li.textContent = cityName;
                    citiesList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = "Aucune ville trouvée pour ce code postal";
                citiesList.appendChild(li);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

    
})