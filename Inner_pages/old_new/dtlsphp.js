let proI = localStorage.getItem("productId")
let proN = localStorage.getItem("productName")
let details = localStorage.getItem("productDetails").split(",");
let proImg = localStorage.getItem("productImg").split(",");
let price = localStorage.getItem("price");
let title=document.getElementsByTagName("title")[0];
let condition=localStorage.getItem("condition");

title.innerHTML=proN;


let imgTag=document.getElementsByClassName("image")[0];

let i=0;


imgTag.src=proImg[i];

let nxt=document.getElementById("nxt");
let pvs=document.getElementById("pvs");




nxt.addEventListener("click",()=>{
    i=i+1;
    if(i===proImg.length){
        i=0;
    }
    imgTag.src=proImg[i];
})

pvs.addEventListener("click",()=>{
    i=i-1;
    if(i<0){
        i=proImg.length-1;
    }
    imgTag.src=proImg[i];
})



//section 2


let sec2=document.getElementsByClassName("sec2")[0];

let prodctNameTag=document.createElement("h1");
prodctNameTag.innerHTML=proN;

let priceTag=document.createElement("h3");
priceTag.appendChild(document.createTextNode(`Price: ₹${price}`));
priceTag.style.color="orange"




sec2.appendChild(prodctNameTag);
sec2.appendChild(priceTag)

for(let i=0;i<details.length;i++){
    let prdtailsTag=document.createElement("h3");
    prdtailsTag.classList.add("h3");
    prdtailsTag.innerHTML=details[i];
    sec2.appendChild(prdtailsTag);
}

let newH3=document.createElement("h3");
let conText=document.createTextNode("Condition: "+condition);



newH3.appendChild(conText)
sec2.appendChild(newH3);

//byubtn

// let buybtn=document.getElementById("buyBtn");



let cId=document.getElementById("pId");
cId.value=proI;


//buying option from hare


let subbtn=document.getElementsByClassName("buybtn")[0];
subbtn.addEventListener("click",()=>{
    localStorage.setItem("productId", proI);
    localStorage.setItem("productName", proN);
    return false;
})



