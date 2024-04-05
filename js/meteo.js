function getCityNameByPostalCode(postalCode) {
    const url = `https://api-adresse.data.gouv.fr/search/?postcode=${postalCode}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.features.length > 0) {
            const cityName = data.features[0].properties.city;
            console.log("Nom de la ville:", cityName);
        } else {
            console.log("Ville non trouvée");
        }
    })
    .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
    });
}

const postalCode = "78000";
getCityNameByPostalCode(postalCode);
