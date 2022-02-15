const tagsEl=document.getElementById('tags');
const textarea=document.getElementById('textarea');

textarea.focus();     //automatically gets the cursor on the text area when we go on the page

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

    if(e.key==='Enter')
    {
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomSelect();
    }
})

function createTags(input){
    const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());       //creates an array and adds value when , is encountered
    // filter helps to remove worthless empty spaces from the array elements   *learn more about them*
    
    tagsEl.innerHTML='';

    tags.forEach(tag=>{
        const tagEl=document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerText=tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect(){
    const times=30;                             

    interval=setInterval(()=>{
        const randomTag=pickRandomTag();

        highlightTag(randomTag);

        setTimeout(()=>{
            unHighlightTag(randomTag);
        },100)
    },100);

    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag=pickRandomTag();
            highlightTag(randomTag);
        },100)
    },times*100);
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');               //selects all with class tag
    return tags[Math.floor(Math.random()*tags.length)];         //returns random element
}

function highlightTag(tag){
    tag.classList.add('highlight');                 //adding the class
}
function unHighlightTag(tag){
    tag.classList.remove('highlight');              //removing the class
}