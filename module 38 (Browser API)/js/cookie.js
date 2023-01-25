const getCookiesByName = name =>{
    const cookiesInString = document.cookie;
    const cookiesInPart = cookiesInString.split('; ');
    const value = country;
    const cookie = cookiesInPart.find(c => c.includes(value));
    if(cookie){
        const cookieValue = cookie.split('=')[1];
        return cookieValue;
    } 
}