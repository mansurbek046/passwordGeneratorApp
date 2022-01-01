// function getAllDate(){
//   let parent = new Date();
//   let year = parent.getFullYear();
//   let month = parent.getMonth();
//   let day = parent.getDate();
//   let hour = parent.getHours();
//   let minut = parent.getMinutes();
//   if (minut<10){
//     minut='0'+minut
//   }
//   return(`${year}.${month}.${day}/${hour}:${minut}`)
// }
let dsc=0;
let ul=document.querySelector('ul');
let passwords;
let s='qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
let newp='';
let p=document.querySelector('p');
function coder(){
  newp='';
  for(let i=1; i<17; i++){
    newp+=s[Math.floor(Math.random()*s.length)];
    p.innerHTML=newp;
  }
  dsc=0;
}


function saveLocalpass(new_password){
    if(localStorage.getItem('passwords') === null){
        passwords = [];
    }else{
        passwords = JSON.parse(localStorage.getItem('passwords'))
    }
    passwords.push(new_password);
    localStorage.setItem("passwords",JSON.stringify(passwords))
}
p.addEventListener('click',function(event){
    navigator.clipboard.writeText(p.textContent);
    if(dsc==0){
    saveLocalpass(p.textContent);
    d();
    dsc+=1;
  }
});
sc=0;
document.querySelector('mark').addEventListener('click',function(){
  sc+=1;
  d();
})

const d=()=>{
      if (sc == 2) {
      ul.setAttribute('class', 'none');
      sc = 0;
    }
    if (localStorage.getItem('passwords') !== null && sc!==0) {
      ul.setAttribute('class','block');
      ul.innerHTML = '';
      JSON.parse(localStorage.getItem('passwords')).map(function(e) {
        let li = document.createElement('li');
        li.innerHTML = e;
        li.addEventListener('click',function(){
          navigator.clipboard.writeText(li.textContent);
        })
        ul.appendChild(li);
      })
    }
  }
