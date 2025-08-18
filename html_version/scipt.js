// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Button smooth scroll (could scroll to reservations section)
  document.querySelector('.book-button').addEventListener('click', function() {
    const reservationSection = document.querySelector('#reservations');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Reservations section not found!');
    }
  });
  