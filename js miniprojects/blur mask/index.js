var blurArea=document.getElementById('blur-area');

document.onmousemove=function(e){
    blurArea.style.transform=`translate(${e.pageX}px, ${e.pageY}px)`;
}
