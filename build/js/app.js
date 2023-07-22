const rating = document.getElementById('rating-section');
const thanks = document.getElementById('thanks-section');
const btn = document.getElementsByTagName('button')[0];
console.log(btn);
const ratingPoint = document.getElementById('rating-point');

const ratingNumber = document.getElementsByTagName('li')

let rate = null;

Array.from(ratingNumber).forEach((n)=> {
    n.addEventListener("click" , (e)=>{
        const checked = document.querySelector('li#checked');
        if(checked){
            checked.classList.remove('bg-Orange', 'text-white');
            checked.classList.add('bg-Very-Dark-Blue', 'bg-opacity-25', 'hover:bg-gray-500');
            checked.removeAttribute('id' ,'checked');
        }
            const ratingCard =  e.target;
            ratingCard.setAttribute('id' ,'checked');
            ratingCard.classList.remove('bg-Very-Dark-Blue', 'bg-opacity-25', 'hover:bg-gray-500');
            ratingCard.classList.add('bg-Orange','text-white');
            rate = e.target.innerText;
    });    
});

btn.addEventListener('click' , ()=>{
    if(rate){
        ratingPoint.innerText = rate;
        rating.classList.add('hidden');
        thanks.classList.remove('hidden');
    }
});



