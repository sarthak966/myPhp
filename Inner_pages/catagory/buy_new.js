
/*
------------------
new products
------------------
*/
let newProduct = [
    ["https://5.imimg.com/data5/SELLER/Default/2021/5/RI/NW/BQ/1756364/cricket-jersey-t-shirt-500x500.jpg", "Man T-Shirt", "$30", "old", "0123"],
    ["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg", "Man T-Shirt", "$20", "old", "365"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4895"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "25654"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4568"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4654"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "564"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "456"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4568"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4568"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "468"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "4568"]

]

/*
------------------
old products
------------------
*/

let oldProduct = [
    ["https://cdn.shopclues.com/images1/thumbnails/116677/640/1/153184505-116677334-1668705045.jpg", "Man T-Shirt", "$30", "old","1234"],
    ["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg", "Man T-Shirt", "$20", "old", "564654"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "8746"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "8795"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "12354"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "12345"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "7894"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "456321"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "78965"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "6543"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "987654"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$13", "old", "134"],
    ["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg", "Man T-Shirt", "$20", "old", "1234"]

]

// localStorage.setItem("new",newProduct);
// localStorage.setItem("old",oldProduct);



let catagory=localStorage.getItem("catagories") ;



//class="box" id="box1"

console.log(catagory);

function newFnc() {

    let stuff = document.getElementById("deals");
    let a = 2;
    const newBtn = document.getElementById("new");
    newBtn.style.borderBottom = "2px solid black";

    for (let i = 0; i < newProduct.length; i++) {
        let item = document.createElement("form");
        item.action="file:///A:/HTML_projects/index.htm";
        item.classList.add("box");
        item.id = i;

        let p = document.createElement("p");
        let price = document.createElement("p");
        price.classList.add("price");
        let img = document.createElement("img");


        img.src = newProduct[i][0];
        img.classList.add("pic");

        item.appendChild(p);
        item.appendChild(price);
        item.appendChild(img);


        let pText = document.createTextNode(newProduct[i][1]);
        let priceText = document.createTextNode(newProduct[i][2]);

        p.appendChild(pText);
        price.appendChild(priceText);


        stuff.appendChild(item);



        // let buy=document.createElement("div");
        // let txt=document.createTextNode("hello");
        // buy.appendChild(txt);

        // item.appendChild(buy);

        //sc engine









    }


    //buying option

    for(let i=0;i<newProduct.length;i++){
        let prdts=document.getElementsByClassName("box")[i];
        let buybtn=document.createElement("input");
        buybtn.type="submit";
        buybtn.classList.add("buybtn");
        prdts.appendChild(buybtn);
        buybtn.style.visibility="hidden";
        buybtn.style.opacity="0";

        let prId=newProduct[i][4];

        
        prdts.addEventListener("mouseover",()=>{
            buybtn.style.visibility="visible";
            buybtn.style.opacity="1";
           
            
        })

        prdts.addEventListener("mouseout",()=>{
            buybtn.style.visibility="hidden";
            buybtn.style.opacity="0";
        })

        //passing id
        buybtn.addEventListener("click",()=>{
            localStorage.setItem("textValue",prId);
            return false;
        })
    }



    let itm = document.getElementById("items");
    let src = document.getElementById("search");
    let srcbtn = document.getElementById("srcbtn");


    window.onload = function () {
        let itm = document.getElementById("items");
        document.onclick = function (event) {
            if (event.target.id !== "search" && event.target.id !== "srcbtn") {
                itm.style.display = "none";
            }
            else {
                itm.style.display = "block";
            }
        }
    }

    src.addEventListener("click", () => {


        itm.innerHTML = "";

        for (let i = 0; i < newProduct.length; i++) {

            let src = document.getElementById("search");
            let itm = document.getElementById("items");
            let a = document.createElement("a");
            a.href = "#" + i;

            let div = document.createElement("div");
            div.classList.add("i_list");
            let img = document.createElement("img");
            img.src = newProduct[i][0];
            let h2 = document.createElement("h2");
            h2.textContent = newProduct[i][1];

            div.appendChild(img);
            div.appendChild(h2);
            a.appendChild(div)
            itm.appendChild(a);

        }
    });

    let btn = document.getElementById("srcbtn");
    btn.addEventListener("click", () => {
        let items = document.getElementsByClassName("i_list");
        let srcBar = src.value.toUpperCase();

        for (let i = 0; i < newProduct.length; i++) {
            let tag = newProduct[i][1];
            // console.log(tag.toUpperCase());
            if (tag) {

                if (tag.toUpperCase().indexOf(srcBar) > -1) {
                    items[i].style.display = ""
                } else {
                    items[i].style.display = "none";
                }

            }
        }
    });


}
newFnc()


function oldFnc() {

    let stuff = document.getElementById("deals");
    let a = 2;


    for (let i = 0; i < oldProduct.length; i++) {
        let item = document.createElement("div");
        item.classList.add("box");
        item.id = i;

        let p = document.createElement("p");
        let price = document.createElement("p");
        price.classList.add("price");
        let img = document.createElement("img");


        img.src = oldProduct[i][0];
        img.classList.add("pic");

        item.appendChild(p);
        item.appendChild(price);
        item.appendChild(img);


        let pText = document.createTextNode(oldProduct[i][1]);
        let priceText = document.createTextNode(oldProduct[i][2]);

        p.appendChild(pText);
        price.appendChild(priceText);


        stuff.appendChild(item);





    }
    let src = document.getElementById("search");



    src.addEventListener("click", () => {
        let itm = document.getElementById("items");

        itm.innerHTML = "";

        for (let i = 0; i < oldProduct.length; i++) {

            let src = document.getElementById("search");
            let itm = document.getElementById("items");

            let a = document.createElement("a");
            a.href = "#" + i;

            // itm.removeChild()
            let div = document.createElement("div");
            div.classList.add("i_list");
            let img = document.createElement("img");
            img.src = oldProduct[i][0];
            let h2 = document.createElement("h2");
            h2.textContent = oldProduct[i][1];

            div.appendChild(img);
            div.appendChild(h2);
            a.appendChild(div);
            itm.appendChild(a);
        }
    })

    function search() {



    }

    let btn = document.getElementById("srcbtn");
    btn.addEventListener("click", () => {
        let items = document.getElementsByClassName("i_list");
        let srcBar = src.value.toUpperCase();

        for (let i = 0; i < newProduct.length; i++) {
            let tag = newProduct[i][1];
            // console.log(tag.toUpperCase());
            if (tag) {

                if (tag.toUpperCase().indexOf(srcBar) > -1) {
                    items[i].style.display = ""
                } else {
                    items[i].style.display = "none";
                }

            }
        }
    });
}
//old and new button bunction mapping

const oldBtn = document.getElementById("old");
const newBtn = document.getElementById("new");

oldBtn.addEventListener("click", () => {
    let stuff = document.getElementById("deals");
    stuff.innerHTML = "";

    oldBtn.style.borderBottom = "2px solid black";
    newBtn.style.borderBottom = "none";
    let src = document.getElementById("search");
    let itm = document.getElementById("items");


    oldFnc();
    // console.log("hello")
})


newBtn.addEventListener("click", () => {
    let stuff = document.getElementById("deals");
    stuff.innerHTML = "";

    oldBtn.style.borderBottom = "none";
    newBtn.style.borderBottom = "2px solid black";
    let src = document.getElementById("search");
    let itm = document.getElementById("items");
    itm.innerHTML = "";
    newFnc();
    // console.log("hello")
})



