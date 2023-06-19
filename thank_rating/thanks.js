window.onload=function(){
Notification.requestPermission().then(result=>{
    if(result==="granted"){
        new Notification("Your rating has been submitted",{
            body:"Thnaks a lot to support us!!!!"
        })
    }
})
}