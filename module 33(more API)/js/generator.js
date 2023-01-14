const loadUser = () => {
    const url = 'https://randomuser.me/api/?results=50'
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.results));
}
loadUser();

const displayData = users =>{
    
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('user-info');
        div.innerHTML = `
            <p>User Name: ${user.name.title+' '+user.name.first+' '+user.name.last}</p>
            <p>User Email: ${user.email}</p>
            <p>User Location: ${user.location.state + ', ' + user.location.country}</p>
        `;
        userContainer.appendChild(div);
    }
}