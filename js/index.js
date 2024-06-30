let sistema = new Sistema;
function get(id) {
    return document.querySelector('#'+id);
}

get('hamburgerButton').addEventListener('click',()=>{
    get('nav').classList.toggle('navActivo')
    

});

cardsProductos()

function cardsProductos() {
    let card = '';
    for(let i=0; i< sistema.listaProd.length; i++) {
        let prodActual = sistema.listaProd[i];
        card += `
            <article class='articleProd p-0 m-md-3 my-3'>
                <figure class='text-center p-0 m-0'>
                    <img src='${prodActual.img}' class='img-fluid h-100'>
                </figure>
                <div class='p-2 d-flex col flex-wrap'>
                    <p class='col-8 text-start my-0'>${prodActual.name}</p>
                    <p class='col-4 text-end my-0'>$${prodActual.price}</p>
                    <p class='col-12 text-end stockDispo'>Disponibles: ${prodActual.stock}</p>



                </div>
                <button id='${prodActual.id}' class='btnCart'><img src='${'../img/cart.svg'}' class='img-fluid'></button>

            </article>
        `
    }
    
    get('divProductos').innerHTML = card   
}

