const loadSports = () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php'
    fetch(url)
        .then(res => res.json())
        .then(data => displaySports(data.sports))
};
loadSports();

const displaySports = (sports) => {
    const sportsContainer = document.getElementById('sports-container');
    sports.forEach(sport => {
        const sportsDiv = document.createElement('div');
        sportsDiv.classList.add('col');
        sportsDiv.innerHTML = `
        <div onclick="selectedSports(${sport.idSport})" class="card">
            <img  src="${sport.strSportThumb}" class="card-img-top">
            <div class="card-body">
                <p class="card-text">${sport.strSport}</p>
            </div>
        </div>
        `
        sportsContainer.appendChild(sportsDiv);
    });

}
const selectedSports = (id) => {
    console.log(id);
}
