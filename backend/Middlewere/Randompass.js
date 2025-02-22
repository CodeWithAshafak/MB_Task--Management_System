
const RandomPass=()=>{

    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    let Mypass="";
    for(var i=0; i<8; i++)
    {
        let MyNo=Math.floor(Math.random()*string.length)
        Mypass+=string.charAt(MyNo);
    }
    return Mypass
    }
    module.exports=RandomPass