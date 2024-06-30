class Sistema {
    constructor () {
        
        this.listaProd = [
            new Producto ('Puma Suede XL',10000,[6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14,15,16],['azul','negro'],50,'../img/SNEAKERS/Puma/SuedeXLHairy.jpg'),
            new Producto ('Jordan IV Cacao Wow',12000,[6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11],[],100,'../img/SNEAKERS/Nike/JORDAN IV/CacaoWow.jpg'),
            new Producto ('NOCTA Glide',13000,[8,8.5,9,9.5,10,10.5,11],[],20,'../img/SNEAKERS/Nike/NOCTA Glide x Drake.jpg'),
            new Producto ('KNU Skool',8000,[6,6.5,8,8.5,9,9.5,10,10.5,11],['antelope','black','blackgum','megacheckblack'],100,'../img/SNEAKERS/Vans/KNU SKOOL/Classic.jpg'),

        ]

    }
}


let idProd = 0;
class Producto {
    constructor (name,price,size,color,stock,img) {
        this.name = name,
        this.price = price,
        this.size = size
        this.color = color,
        this.stock = stock,
        this.img = img,
        this.id = `PROD_ID_${idProd++}`
    }
}
