var elements = document.querySelectorAll('.enable-ripple');

Array.prototype.forEach.call(elements, function (button) {             //for each button in the elements array add an event listener
    button.addEventListener('click', ripple);
});

function ripple(event) {
    var el = event.currentTarget;

    var rippleEl = document.querySelector('span.ripple');
    if (!rippleEl) {
        rippleEl = document.createElement('span');
    }
    el.appendChild(rippleEl);

    var max = Math.max(el.offsetWidth, el.offsetHeight);
    rippleEl.style.width= max + 'px';
    rippleEl.style.height=max + 'px';

    var rect = el.getBoundingClientRect();            //this method returns object of size of element and its position related to the viewport
    rippleEl.style.left = event.ClientX - rect.left - (max / 2) + 'px';
    rippleEl.style.top = event.ClientY - rect.top - (max / 2) + 'px';
    rippleEl.classList.add('ripple');
};