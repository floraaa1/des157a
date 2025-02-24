(function() {
    'use strict';
    console.log('js reading');

    window.addEventListener('load', function() {
        const sections = document.querySelectorAll('.scrollSection');
        let currentIndex = 0;
        const totalSections = sections.length;
    
        //show first section
        if (totalSections > 0) {
          sections[0].classList.add('active');
        }
    
        const scrollPart = document.querySelector('.scrollPart');
        scrollPart.addEventListener('scroll', function() {
          // viewport height
          const viewportHeight = scrollPart.clientHeight;
          // position of scroll bar
          const scrollTop = scrollPart.scrollTop;
          
          // calculate the newindex
          let newIndex = Math.floor(scrollTop / viewportHeight);
          // limited the range of index
          if (newIndex < 0) {
            newIndex = 0;
          } else if (newIndex >= totalSections) {
            newIndex = totalSections - 1;
          }
          
          if (newIndex !== currentIndex) {
            sections[currentIndex].classList.remove('active');
            currentIndex = newIndex;
            sections[currentIndex].classList.add('active');
          }
        });
      });

  })();
  