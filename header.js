(function() {
    const target     = document.getElementById('header'),
          height     = 80;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;
  
    function onScroll() {
      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('header-active');
        } else {
          target.classList.remove('header-active');
        }
        offset = lastPosition;
      }
    }
  
    window.addEventListener('scroll', function(e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();