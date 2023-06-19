window.onload=function(){
Notification.requestPermission().then(result=>{
    if(result==="granted"){
        new Notification("Your Order has been placed",{
            body:"You will receive your order soon"
        })
    }
})
}