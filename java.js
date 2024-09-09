const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', passwordMatch)
function passwordMatch(e){
    const password = document.querySelector('#exampleInputPassword1').value;
    const cnfrmPassword = document.querySelector('#exampleInputPassword2').value;
    console.log(password)
    console.log(cnfrmPassword)
    if(password == cnfrmPassword && password.length >= 8){
        console.log("Hello");
        function openpage(){
            
        } 
    }
    else{
        console.log("Bye")
        e.preventDefault()
    } 
}