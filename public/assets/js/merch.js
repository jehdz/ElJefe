const merchData = [

    {
        name: "Black Shirt - Mini Centered Logo",
        price: 24.99,
        imgPath:"assets/img/avatars/merch/jefe-shirt.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Black Shirt - Big Centered Logo",
        price: 24.99,
        imgPath:"assets/img/avatars/merch/jefe-shirt-2.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Black Shirt Logo",
        price: 24.99,
        imgPath:"assets/img/avatars/merch/jefe-shirt-3.png?h=a6dc828db199f191db08f91d9df2b728"
    },

    {
        name: "Black Hoodie - Back Logo",
        price: 39.99,
        imgPath:"assets/img/avatars/merch/jefe-hoodie.png?h=a6dc828db199f191db08f91d9df2b728"
    },

    {
        name: "Black Shirt Long Sleeve",
        price: 29.99,
        imgPath:"assets/img/avatars/merch/jefe-long-sleeve.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Facemask - Jefe Logo",
        price: 7.99,
        imgPath:"assets/img/avatars/merch/jefe-facemask-white.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Facemask - Jefe Logo",
        price: 7.99,
        imgPath:"assets/img/avatars/merch/jefe-facemask-black.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Black Crop Top Hoodie - Jefe Logo",
        price: 39.99,
        imgPath: "assets/img/avatars/merch/jefe-crop-hoodie.png?h=a6dc828db199f191db08f91d9df2b728"
    },
    {
        name: "Black Bandana - Logo",
        price: 9.99,
        imgPath:"assets/img/avatars/merch/jefe-bandana.png?h=a6dc828db199f191db08f91d9df2b728"
    }

];


function merchTemplate(merch){
    return `<div class="col" style="text-align: center;height: 420PX;"><img src="${merch.imgPath}" style="width: 300PX;"> 

                <div style="font-family: Helvetica;"> 
                            <BR>
                            <strong ">  ${merch.name} | $ ${merch.price}</p>  </strong><p>
                            
                           <button class="add-cart-btn"> add to cart</button>
                           
                           <br>
                           <br>
                            
                </div>
            </div>`
}

document.getElementById("merchContent").innerHTML = `
    <div  class="container product">
       <div class="row" style="margin-right: -15px;">
        
        ${merchData.map(merchTemplate).join("")}
        
        </div>
    </div>
     
    
`