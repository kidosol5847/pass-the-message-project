const a = document.querySelector('#b');
const b = document.querySelector('#a');
const c = document.querySelector('#c');

a.addEventListener("click",d)
function d(){
    let con = b.value;
    if(con ===''){
        alert('please enter a valid value')
    } else{
        c.innerHTML = con;
        a.value = '';}
}
