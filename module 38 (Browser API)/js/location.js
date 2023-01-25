const showLocation = () => {
    const loc = document.location;
    console.log("Full Location: ", loc.href);
    console.log("Host: ",loc.host);
    console.log("Search: ", loc.search);
}
const youtube = () => {
    window.location.assign('http://www.youtube.com');
}

//assign and href korle history rakhbe
//replace korle history thakbe na
