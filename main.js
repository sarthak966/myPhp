let Product=[["https://5.imimg.com/data5/SELLER/Default/2021/5/RI/NW/BQ/1756364/cricket-jersey-t-shirt-500x500.jpg ", "Man T-Shirt ", "₹", 30, "New", "0123", ["Size:XL", "Brand:Nike", "Washable and Can be used roughly"],["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg"," https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg"],"Dresses or Clothings man tshirt cloth"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "₹", 13, "New", "4895", [],[],"Gadgets and Accessories"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "₹", 13, "New", "25654", [],[],"a"],
    ["https://cdn.shopclues.com/images1/thumbnails/116677/640/1/153184505-116677334-1668705045.jpg", "android Phone", "₹", 30, "Old", "1234",[],[],"a"],
    ["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg", "Man T-Shirt", "₹", 20, "Old", "564654",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "₹", 13, "Old", "8746",[],[],"a"],
    ["Inner_pages/old_new/ProductPics/background3.jpg","test_image","₹",200,"old","00311073",["Details:none"],[],"background"]
]



/*
-----------------
Menu Bar Mobile
-----------------
*/

let btn=document.getElementsByClassName("open")[0];
let menu=document.getElementById("menu_ul");
let btn2=document.getElementsByClassName("close")[0];

if(window.innerWidth<=900){
btn2.style.display="none";
menu.style.display="none";

btn.addEventListener("click",()=>{
    menu.style="display:flex;width:75vw;";
    menu.classList.add("menu_ani1");
    btn.style.display="none";
    btn2.style.display="block";

})

btn2.addEventListener("click",()=>{
    
    
    
        menu.classList.remove("menu_ani1");
        // menu.classList.add("menu_ani2");
    btn2.style.display="none";
    btn.style.display="block";
    
    menu.style.display="none";
    

})
}


/*
section display
*/ let stuff=document.getElementsByClassName("picsliding")[0];

for(let i=0;i<Product.length;i++){
        let item = document.createElement("form");
        // item.action = "complitionEnquiry/index.html";
        item.classList.add("box");
        item.id = i;

        let p = document.createElement("p");
        let price = document.createElement("p");
        price.classList.add("price");
        let img = document.createElement("img");


        img.src = Product[i][0];
        img.classList.add("pic");

        item.appendChild(p);
        item.appendChild(price);
        item.appendChild(img);


        let pText = document.createTextNode(Product[i][1]);
        let priceText = document.createTextNode(Product[i][2] + Product[i][3]);

        p.appendChild(pText);
        price.appendChild(priceText);


        stuff.appendChild(item);


        //buy now button
        let prdts = document.getElementsByClassName("box")[i];
        let pic=document.getElementsByClassName("pic")[i];


        let buybtn = document.createElement("input");
        buybtn.type = "submit";
        buybtn.value = "Buy Now";
        buybtn.classList.add("buybtn");

        // let details = document.createElement("input");
        // details.type = "submit";
        // details.id = "details";
        // details.classList.add("dtlsBtn");
        // details.value = "Details"

        let prId = Product[i][5];
        let prName = Product[i][1];
        let prPrice = Product[i][3];
        let prImg =[Product[i][0],Product[i][7]];
        let prDetails = Product[i][6];
        let condition= Product[i][4];



        prdts.appendChild(buybtn);
        // prdts.appendChild(details);

        //passing id
        buybtn.addEventListener("click", () => {
            item.action = "Inner_pages/old_new/complitionEnquiry/index.html";
            localStorage.setItem("productId", prId);
            localStorage.setItem("productName", prName);
            return false;
        })

        pic.addEventListener("click", () => {
            item.action = "Inner_pages/old_new/index1.html";
            item.submit();
            localStorage.setItem("productId", prId);
            localStorage.setItem("productName", prName);
            localStorage.setItem("productImg",prImg);
            localStorage.setItem("productDetails",prDetails);
            localStorage.setItem("price",prPrice);
            localStorage.setItem("condition",condition);
            return false;
        })

}



let counter=0;

let box=document.getElementsByClassName("box");
console.log(box[0]);
for(let i=0;i<box.length;i++){
    box[i].style.left=`${i*100}%`
}

function slide(){
    counter++
    if(counter===box.length){
        counter=0;
        
    }
    // console.log(counter)
    for(let i=0;i<box.length;i++){
      box[i].style.transform=`translateX(-${counter*100}%)`
    }
}

// let b=document.getElementById("h");

setInterval(slide,3500);

// setInterval(2000,slide)








