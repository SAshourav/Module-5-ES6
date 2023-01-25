document.getElementById('btn-add-name').addEventListener('click', function(){
    const text = document.getElementById('name-field').value;
    localStorage.setItem('Name', text);
})
document.getElementById('btn-add-age').addEventListener('click', function(){
    const age = document.getElementById('name-field').value;
    localStorage.setItem('Age', age);
})
document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('Name');
})
document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('Age');
})
document.getElementById('clear-all-btn').addEventListener('click', function(){
    localStorage.clear();
})