console.log('Hello');


const selectElement =(element)=>document.querySelector(element);

// selectElement('.menu-icons').addEventListener('click',()=>{
//     selectElement('nav').classList.add('active');
// })





const backtoTop = document.querySelector('#backtoTop');
window.addEventListener('scroll', scrollFunction);


function scrollFunction() {

    if (window.pageYOffset > 300) {
        backtoTop.style.display = 'block';
    } else {
        backtoTop.style.display = 'none';
    }
}