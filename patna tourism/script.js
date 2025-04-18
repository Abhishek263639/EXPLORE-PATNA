function initMap() {
    // Initialize Google Maps for each location
    const mahavirMandir = { lat: 25.5941, lng: 85.1376 };
    const mapMahavirMandir = new google.maps.Map(document.getElementById('map-mahavir-mandir'), {
      zoom: 15,
      center: mahavirMandir,
    });
    new google.maps.Marker({
      position: mahavirMandir,
      map: mapMahavirMandir,
    });
  
    // Add more maps similarly
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission
      document.getElementById("formMessage").style.display = "block"; // Show success message
      this.reset(); // Clear form fields
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".read-more-btn").forEach(button => {
      button.addEventListener("click", function () {
          let cardBody = this.parentElement;
          let shortText = cardBody.querySelector(".short-text");
          let fullText = cardBody.querySelector(".full-text");

          if (fullText.style.display === "none") {
              fullText.style.display = "block";
              shortText.style.display = "none";
              this.textContent = "Read Less";
          } else {
              fullText.style.display = "none";
              shortText.style.display = "block";
              this.textContent = "Read More";
          }
      });
  });
});
$(document).ready(function () {
    $('.card-img-top').on('click', function () {
        var imageUrl = $(this).attr('src');
        var imageAlt = $(this).attr('alt');
        var imageDescription = $(this).closest('.card-body').find('.card-text').text();

        $('#imageModal .modal-title').text(imageAlt);
        $('#imageModal #modalImage').attr('src', imageUrl);
        $('#imageModal #modalDescription').text(imageDescription);
        $('#imageModal').modal('show');
    });

    $('form').on('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Your response has been recorded. We will reach you soon.");
        $(this).trigger("reset"); // Reset form fields after submission
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize all modals
    const modalTemplate = `
      <div class="modal fade" id="itemModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img id="modalImage" src="" alt="" class="img-fluid">
              <div id="modalDescription"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalTemplate);
  
    // Handle read more buttons
    document.querySelectorAll('.card').forEach(card => {
      const readMoreBtn = card.querySelector('.read-more-btn');
      if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          const title = card.querySelector('.card-title').textContent;
          const imageSrc = card.querySelector('.card-img-top').src;
          const imageAlt = card.querySelector('.card-img-top').alt;
          const fullDescription = card.querySelector('.full-text').innerHTML;
          
          document.getElementById('modalTitle').textContent = title;
          document.getElementById('modalImage').src = imageSrc;
          document.getElementById('modalImage').alt = imageAlt;
          document.getElementById('modalDescription').innerHTML = fullDescription;
          
          $('#itemModal').modal('show');
        });
      }
    });
  
    // Form submission handling (keeps your existing functionality)
    document.getElementById("contactForm")?.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("formMessage").style.display = "block";
      this.reset();
    });
  
    // Google Maps initialization (keeps your existing functionality)
    if (typeof google !== 'undefined') {
      initMap();
    }
  });
  
  function initMap() {
    // Your existing Google Maps code
    const mahavirMandir = { lat: 25.5941, lng: 85.1376 };
    const mapMahavirMandir = new google.maps.Map(document.getElementById('map-mahavir-mandir'), {
      zoom: 15,
      center: mahavirMandir,
    });
    new google.maps.Marker({
      position: mahavirMandir,
      map: mapMahavirMandir,
    });
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
      $('.logo-img').css('height', '30px');
    } else {
      $('.navbar').removeClass('scrolled');
      $('.logo-img').css('height', '40px');
    }
  });