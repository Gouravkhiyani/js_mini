var header=document.getElementById('header');
var title=document.getElementById('title');
var excerpt=document.getElementById('excerpt');
var profile_img=document.getElementById('profile-img');
var name=document.getElementById('name');
var date=document.getElementById('date');

const animated_bgs=document.querySelectorAll('.animated-bg');
const animated_bg_text=document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500);

function getData(){
    header.innerHTML=` <img src="https://media.istockphoto.com/photos/silhouettes-of-happy-businessperson-success-of-business-concept-picture-id1166516810?b=1&k=20&m=1166516810&s=170667a&w=0&h=Z2kn6mUfSmhCbD1Cfo4ubI4bz86Ep58j4U9NJdWCpVY=" alt="">`;
    title.innerHTML=`Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus.`;
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/men/0.jpg" alt="">`;
    name.innerHTML=`John Doe`;
    date.innerHTML=`Oct 08,2020`;

    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg')
    });
    animated_bg_text.forEach(bg=>{
        bg.classList.remove('animated-bg-text')
    });
}