document.getElementById('btn-submit').addEventListener('click', function(){

    
    const emailFild = document.getElementById('user-email');

    const email = emailFild.value;
   
    
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
   




if(email === 'wali@gmaild.com' && password === '120120'){

    window.location.href = 'bank.html'

}

else{
    alert('habe na problim ace !!!')
}


});