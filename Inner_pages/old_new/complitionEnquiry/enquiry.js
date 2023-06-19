
let prname = document.getElementById("pn");
let pid = document.getElementById("pid");






prname.innerHTML = "";
pid.innerHTML = "";


function passingId() {
    let titleI = localStorage.getItem("productId")
    let titleN = localStorage.getItem("productName")
    let pidIn = document.getElementById("prid1");

    let title = document.getElementsByTagName("title")[0];
    title.innerHTML = "Buying " + titleN + " Product Id: " + titleI;

    prname.innerHTML = "Product Name: " + titleN;
    pid.innerHTML = "Product Id: " + titleI;
    pidIn.value = titleI;

}
passingId();



//passing for order details
function dataSend() {
    let details =
        [
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("pin").value,
            document.getElementById("adress").value,
            document.getElementById("m_no").value,
            document.getElementById("prid1").value

        ]

        localStorage.setItem("u_name",details[0]);
        localStorage.setItem("u_email",details[1]);
        localStorage.setItem("u_pin",details[2]);
        localStorage.setItem("u_adress",details[3]);
        localStorage.setItem("u_no",details[4]);
        

}

let submitbtn=document.getElementById("submitbtn");
submitbtn.addEventListener("click",dataSend);