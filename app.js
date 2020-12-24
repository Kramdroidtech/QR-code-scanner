const preview = document.querySelector('#preview');
const modal = document.querySelector('.modal')

const scanner = new Instascan.Scanner({
  video: preview
});
scanner.addListener('scan', content => {
  if (content.includes('https') || content.includes('http')) {
    window.open(content, '_blank');
  } else {
    const closeBtn = document.querySelector('.closeModal');
    const textModal = document.querySelector('#output');
    textModal.textContent = content;
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    })
    console.log(content)
    modal.classList.add('show');
  }
});

Instascan.Camera.getCameras()
.then(cam => {
  if (cam.length > 0) {
    scanner.start(cam[1]);
  } else {
    console.log('No Cam')
  }
})
.catch(err => console.log(err))