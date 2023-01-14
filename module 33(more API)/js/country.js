const loadUser = () => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}


const displayData = users =>{
    
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('user-info');
        div.innerHTML = `
            <p>Name : ${user.name.common}</p>
            <p>Capital : ${user.capital}</p>
            <p>Is Independent? : ${user.independent}</p>
            <button onclick="loadDetails('${user.cca2}')"> Details </button>
        `;
        userContainer.appendChild(div);
        
    }
}
const loadDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(response => response.json())
        .then(country => displayCountryDetails(country[0]))
}

const displayCountryDetails = country => {
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.innerHTML = `
            <p>Name : ${country.name.common}</p>
            <p>Capital : ${country.capital}</p>
            <img src="${country.flags.png}"/>
        `;
        window.scrollTo(0, 0);
        
    }


loadUser();