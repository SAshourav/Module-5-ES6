const loadPhone = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data , dataLimit);
};


document.getElementById('btn-search').addEventListener("click", function(){
    //start spinning
    phoneSearch(10);
    
})

const phoneSearch = (dataLimit) =>{
    //start spinning
    spinStart(true);
    const searchText = document.getElementById("search-field").value;
    loadPhone(searchText, dataLimit);
}

//search input enter press handle
document.getElementById('search-field').addEventListener("keypress", function(e) {
    if(e.key == 'Enter'){
        phoneSearch(10);
    }
})

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    //display 10 phone only
    const showBtn = document.getElementById('btn-show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0,10);
        showBtn.classList.remove('d-none');
    }else{
        showBtn.classList.add('d-none');
    }

    //no phone msg
    const noPhoneMsg = document.getElementById('no-phone-msg');
    if(phones.length < 1){
        noPhoneMsg.classList.remove('d-none');
    }else{
        noPhoneMsg.classList.add('d-none');
    }

    //all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card p-3">
                <img src="${phone.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
    //spinner stopper
    spinStart(false);
}

const spinStart = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }else{
        loaderSection.classList.add('d-none');
    }
};

//show all
document.getElementById('btn-show-all').addEventListener("click", function(){
    phoneSearch();
})

const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = (details) =>{
    console.log(details);
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText = details.name;
    phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        
        
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <img src="${details.image}" alt="phone image">
                </div>
                <div class="col">
                    <h2><b>Details</b></h2>
                    <p><b>Release date:</b> ${details.releaseDate} </p>
                    <p><b>Chipset:</b> ${details.mainFeatures.chipSet} </p>
                    <p><b>Display:</b> ${details.mainFeatures.displaySize} </p>
                </div>
            </div>
        </div>
    `
}
loadPhone('apple');