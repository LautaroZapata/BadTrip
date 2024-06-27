function get(id) {
    return document.querySelector('#'+id);
}

get('hamburgerButton').addEventListener('click',()=>{
    get('nav').classList.toggle('navActivo')
    

});

