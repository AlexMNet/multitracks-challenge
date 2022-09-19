function createRipple(event: MouseEvent): void {
  const button = event.currentTarget as HTMLButtonElement;

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

const buttons = document.getElementsByTagName(
  'button'
) as HTMLCollectionOf<HTMLButtonElement>;

for (const button of buttons) {
  button.addEventListener('click', createRipple);
}

function openSidenav(): void {
  const sidenav = document.getElementById('sidenav') as HTMLDivElement;
  sidenav.style.width = '250px';
  //   document.getElementById('sidenav').style.width = '250px';
}

function closeNav() {
  const sidenav = document.getElementById('sidenav') as HTMLDivElement;
  sidenav.style.width = '0';
}

export {};
