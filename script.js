let input = document.querySelector('.input')
let generate  = document.querySelector('.generate')
let copy = document.querySelector('.fa-copy')

generate.addEventListener('click',()=>{
    let pass = ""
    const characters = "ABCDEFGHIJKLMNOPQ&^%$#@!{}|?XYZabcdefghijklmnopqrstuvwxyz0123456789";
    function generating(){
        for(let i = 0;i<=Math.floor(Math.random()*characters.length);i++){
            pass += characters.charAt(Math.floor(Math.random()*characters.length));
        }
    
        if(pass.length<7){
            pass=""
            generating()
        }else{
    
            input.value = (pass)
            console.log(pass)
        }
    }generating()
})

copy.addEventListener('click',()=>{
    input.select()
})