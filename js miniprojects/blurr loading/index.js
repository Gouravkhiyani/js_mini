var loadText=document.querySelector('.loading-text');
var bg=document.querySelector('.bg');

let load=0;


let int=setInterval(blurring,30); 

function blurring(){
    load++;

    if(load>99){
        clearInterval(int);             //helps to break the interval; //break condition
    }
    loadText.innerText=`${load}%`;
    loadText.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}

const scale=(num,in_min,in_max,out_min,out_max)=>{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;    // function to map one range of value to another as 0 to 1 we can map as 1 to 30;
}