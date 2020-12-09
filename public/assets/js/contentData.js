

const coffeeData = [

    {
        name: "Americano" ,
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/americano.png?h=a6dc828db199f191db08f91d9df2b728"
    }
    ,
    {
        name: "Cortado",
        price: 5.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/cortado.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Drip" ,
        price:  4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/drip.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Espresso Shot",
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/espresso-shot.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Flat white",
        price: 5.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/flat-white.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Irish Coffee" ,
        price: 6.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/irish-coffee.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Macchiato",
        price: 6.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/macchiato.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Mocha" ,
        price: 5.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/mocha.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Pour Over",
        price: 3.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/pour-over.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Red Eye",
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/red-eye.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Cold Brew" ,
        price: 5.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/cold-brew.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Light Roast" ,
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/light-roast.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Medium Roast",
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/medium-roast.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Dark Roast",
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/dark-roast.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Extra Dark",
        price: 4.99,
        drink: "hot",
        imgPath: "assets/img/avatars/coffee/extra-dark.png?h=a6dc828db199f191db08f91d9df2b728"
    }
];



function coffeeTemplateCold(coffee){
    if(coffee.drink == "cold"){

        return `<div class="col" style="text-align: center;height: 300PX;"><img src="${coffee.imgPath}" style="width: 300PX;"></div>
            <div> 
               <p> < ${coffee.price} </p>  
                
            </div> `
    }
}


function coffeeTemplateHot(coffee){
    if(coffee.drink == "hot"){

        return `<div class="col" style="text-align: center;height: 370PX;"><img src="${coffee.imgPath}" style="width: 300PX;">
                     <div style="font-family: Helvetica;"> 
                        <span ><strong> $</strong> ${coffee.price} </span>  
                        <br>
                        <button class="add-cart-btn"> add to cart</button>
                      
                        
                    </div>
                </div> `
    }
}

document.getElementById("purchaseContent").innerHTML = `

<div  class="container">
    <div class="row" style="margin-right: -15px;">
            ${coffeeData.map(coffeeTemplateHot).join("")}
                           
    </div>
</div>

`
