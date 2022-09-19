"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createRipple(event) {
    const button = event.currentTarget;
    // Calculate the dimensions of the circular span
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.offsetX - radius}px`;
    circle.style.top = `${event.offsetY - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', createRipple);
}
function openSidenav() {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.width = '250px';
    //   document.getElementById('sidenav').style.width = '250px';
}
function closeNav() {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.width = '0';
}
