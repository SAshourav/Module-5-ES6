function loadPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPost();

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>User: ${post.userId} </h3>
            <h4>Title: ${post.title} </h4>
            <p>Post Description: ${post.body} </p>
        `
        console.log(post);
        postContainer.appendChild(div);
    }
}