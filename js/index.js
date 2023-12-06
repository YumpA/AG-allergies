function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

document.querySelectorAll('.dropdown-header').forEach(function(span) {
  span.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
  });

  document.querySelectorAll('.modal .close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
      var modalId = this.parentElement.id;
      closeModal(modalId);
    });
  });