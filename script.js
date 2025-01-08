document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.home');
  const dots = document.querySelectorAll('.dot');
  const images = [
    'images/background.jpg',
    'images/back2.png',
    'images/semeru.jpg',
    'images/bromo.jpg'
  ];

  // Fungsi untuk mengubah gambar latar belakang
  function changeBackground(index) {
    hero.style.backgroundImage = `url(${images[index]})`;
    // Tambahkan kelas active ke dot yang diklik
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Mengatur gambar pertama saat halaman dimuat
  changeBackground(0);

  // Menambahkan event listener ke setiap dot
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      changeBackground(index);
    });
  });
});

// Kode untuk testimonial slider
$(document).ready(function(){
  if ($('.testimonial-slider').length) {
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="prev-btn">&lt;</button>',
      nextArrow: '<button type="button" class="next-btn">&gt;</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      // Hapus kelas 'active' dari semua dot
      dots.forEach(d => d.classList.remove('active'));
      
      // Tambahkan kelas 'active' ke dot yang diklik
      this.classList.add('active');
      
      // Di sini Anda bisa menambahkan logika tambahan,
      // misalnya untuk mengubah gambar yang ditampilkan
      const index = this.getAttribute('data-index');
      console.log('Dot clicked:', index);
    });
  });
});

// Pemesanan ketika klik book now
document.addEventListener('DOMContentLoaded', function() {
  const fromDateInput = document.getElementById('fromDate');
  const toDateInput = document.getElementById('toDate');
  const guestCountSelect = document.getElementById('guestCount');
  const subtotalAmount = document.getElementById('subtotalAmount');
  const bookingForm = document.getElementById('bookingForm');

  function calculateSubtotal() {
      const pricePerGuest = parseInt(guestCountSelect.getAttribute('data-price'));
      const guestCount = parseInt(guestCountSelect.value);
      const fromDate = new Date(fromDateInput.value);
      const toDate = new Date(toDateInput.value);

      if (fromDate && toDate && !isNaN(fromDate) && !isNaN(toDate)) {
          const nights = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));
          const subtotal = pricePerGuest * guestCount * nights;
          subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
      } else {
          subtotalAmount.textContent = '$0.00';
      }
  }

  fromDateInput.addEventListener('change', calculateSubtotal);
  toDateInput.addEventListener('change', calculateSubtotal);
  guestCountSelect.addEventListener('change', calculateSubtotal);

  bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Tambahkan logika pengiriman formulir di sini
      alert('Booking confirmed!');
  });

  // Inisialisasi tanggal minimal untuk input tanggal
  const today = new Date().toISOString().split('T')[0];
  fromDateInput.min = today;
  toDateInput.min = today;

  // Memastikan tanggal "To" tidak lebih awal dari tanggal "From"
  fromDateInput.addEventListener('change', function() {
      toDateInput.min = fromDateInput.value;
  });
});

