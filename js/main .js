$(window).ready(function(){
    $('#closedbtn').click(function(){
        $('.nav').hide(500);
        $('.sideIcon').css('left','0px');
        $('#closedbtn').addClass('d-none');
        $('#bars').addClass('d-block');
    })
    
})

$('#bars').click(function(){
    $('.nav').show(500); 
    $('#closedbtn').removeClass('d-none');
     $('#bars').removeClass('d-block')
})
let arrRes;

async function getData() {
    let response=await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3ALdndyx-Zi05PJ6biecnTZYOtJMzbwUav0YbuvWAhainHj9ANbIkMka8');
   let  finRes=await response.json();
      arrRes=finRes.results
      console.log(arrRes)
  await display(arrRes);
 
    
}
getData();

function display(arrRes) {
    let cartona=``;
    for(let i=0;i<arrRes.length;i++){

        if(arrRes[i].title ===undefined){
        cartona+=`<div class="col-md-4">
        <div class="movieImage position-relative">
             <img src=" https://image.tmdb.org/t/p/w500${arrRes[i].poster_path}" class="w-100">
             <div class="imageLayer top-0 w-100 h-100 position-absolute text-center ">
                     <h2 >${arrRes[i].name}</h2>
                    <p>${arrRes[i].overview}</p>
                    <h3>${arrRes[i].vote_average}</h3>
                    <h4>${arrRes[i].release_date}</h4>
                
             </div>
        </div>

     </div>`
     

    
    }

 else{
    cartona+=`<div class="col-md-4">
        <div class="movieImage position-relative">
             <img src=" https://image.tmdb.org/t/p/w500${arrRes[i].poster_path}" class="w-100">
             <div class="imageLayer top-0 w-100 h-100 position-absolute text-center ">
                    <h2 >${arrRes[i].title}</h2>
                    <p>${arrRes[i].overview}</p>
                    <h3>${arrRes[i].vote_average}</h3>
                    <h4>${arrRes[i].release_date}</h4>
                
             </div>
        </div>

     </div>`
    
}
}
    document.getElementById('rowData').innerHTML= cartona;
}

// $('.movieImage').mouseenter(function () {
//     $('.imageLayer').slideUp(1000);
    
//  })
//start vailidation//
let nameError=document.getElementById('nameError');
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let emailError=document.getElementById('emailError');
let phoneInput=document.getElementById('phoneInput');
let phoneError=document.getElementById('phoneError');
let ageInput=document.getElementById('ageInput');
let ageError=document.getElementById('ageError');
let passInput=document.getElementById('passInput');
let repassInput=document.getElementById('RepassInput');
let repassError=document.getElementById('repassError');
let passError=document.getElementById('passError');
let searchWord=document.getElementById('searchWord');
let searchWordInput=searchWord.value;
console.log(searchWordInput)
let searchApi=document.getElementById('searchApi');

function validateName() {
   
    let regex=/^[A-Z]{0,1}[a-z]{3,9}$/;
    if(regex.test(nameInput.value)==true && nameInput.value !=""){
        nameInput.classList.add('is-valid');
       nameInput.classList.replace("is-invalid",'is-valid');
       nameError.classList.replace('d-block',"d-none");
    }
    else{
        nameInput.classList.replace('is-vaild','is-invalid');
        nameError.classList.replace('d-none',"d-block");
        return false ;
    }

}
nameInput.addEventListener('input',validateName)
function validateEmail() {
    
    let regex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(regex.test(emailInput.value)==true && emailInput.value !=""){
        emailInput.classList.add('is-valid');
        emailInput.classList.replace('is-invalid','is-valid');
        emailError.classList.replace('d-block',"d-none");
    }
    else{
        emailInput.classList.replace('is-valid','is-invalid');
        emailError.classList.replace('d-none','d-block');
        return false ;

    }
}
//call vilidateName//
 emailInput.addEventListener("input",validateEmail)
    //end//
 function validatePhone() {
    let regex=/^01[5 2 1 0][0-9]{8}$/;
    if(regex.test(phoneInput.value)==true && phoneInput.value !=""){
        phoneInput.classList.add('is-valid');
        phoneInput.classList.replace('is-invalid','is-valid');
        phoneError.classList.replace('d-block','d-none');
    }
    else{
        phoneInput.classList.replace('is-valid','is-invalid');
        phoneError.classList.replace('d-none',"d-block");
        return false ;

    }
}
phoneInput.addEventListener("input",validatePhone);
    
//call vilidatephone//

 function validateAge() {
    let regex=/^([1-7][4-9]|80)$/;
    if(regex.test(ageInput.value)==true && ageInput.value !=""){
        ageInput.classList.add('is-valid');
        ageInput.classList.replace('is-invalid','is-valid');
        ageError.classList.replace("d-block",'d-none');
    }
    else{
        ageInput.classList.replace('is-valid','is-invalid');
        ageError.classList.replace('d-none',"d-block");
        return false ;

    }
}
ageInput.addEventListener("input",validateAge)
    //call vilidateAge//
 

 function validatePassword() {
    let regex=/^#0[12345!@#$%]$/;
    if(regex.test(passInput.value)==true && passInput.value !=""){
        passInput.classList.add('is-valid');
        passInput.classList.replace('is-invalid','is-valid');
        
    }
    else{
        
        passInput.classList.replace('is-valid','is-invalid');
        passError.classList.replace('d-none',"d-block");
        return false ;

    }
}
passInput.addEventListener("input",validatePassword)
    
//call vilidatepass//


 function validateRePassword() {
    
    let regex=/^#0[12345!@#$%]$/;
    if(regex.test(repassInput.value)==true && repassInput.value !=""){
        repassInput.classList.add('is-valid');
       repassInput.classList.replace('is-invalid','is-valid');
       repassError.classList.replace("d-block",'d-none');
    }
    else{
        repassInput.classList.replace('is-valid','is-invalid');
        repassError.classList.replace('d-none',"d-block");
        return false ;

    }
}
repassInput.addEventListener("input",validateRePassword);
//end validation//
    
//search word//

function searchMovie(searchWordInput) {
    let sermovie=[];
    
    for(let i=0; i< arrRes.length; i++){
        if((arrRes[i].title.toLowerCase().includes(searchWordInput.toLowerCase())==true) || 
        (arrRes[i].name.toLowerCase().includes(searchWordInput.toLowerCase())==true)){
            sermovie.push(arrRes[i]);
        }

    }
    display(sermovie);


}
searchWord.addEventListener('input',searchMovie);


 async function searchMovieApi() {
    let movie=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=&language=en-US&page=1&include_adult=false&query=${searchApi.value}`)
   let response=await movie.json();
   let finalRes=response.results;
//    console.log(finalRes)
   await display(finalRes);
    
}
searchApi.addEventListener('input',async function () {
    await searchMovieApi();
    
})