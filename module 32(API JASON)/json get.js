function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
      .then(response => response.json()) //.json is not similar but close to the json.perse
      .then(json => console.log(json))
}

function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
}

//displaying data from the api in our html file
function displayUsers(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}