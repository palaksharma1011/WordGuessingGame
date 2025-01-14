//scroll animations
let observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
        else{
            entry.target.classList.remove('animate');
        }
    });
})

let hidden=document.querySelectorAll('.hidden');
hidden.forEach((element)=>{
    observer.observe(element);
})