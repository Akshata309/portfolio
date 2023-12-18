function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openModal(projectName) {
  document.getElementById('modalContent').innerText = `${projectName}`;
  document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// Close modal if clicked outside the modal content
document.addEventListener('click', function (event) {
  var modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeModal();
  }
});
  