
    // The debounce() function forces a function to wait a certain amount of time before running again
    //wait for 20 milisecond scroll so scroll count number is not high
        function debounce(func, wait = 20, immediate = true) {
          var timeout;
          return function() {
            var context = this, args = arguments;
            var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        }

    function checkSlide(e){
      // console.count(e);
      sliderImages.forEach(sliderImage=> {
        //Half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;

        //Bottom of the image
        //offsetTop tell us the top of the image is how far from the top of the window
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add("active");
        }else {
          sliderImage.classList.remove("active");
        }
      })
    }

    const sliderImages = document.querySelectorAll('.slide-in');

    //(checkSLide, 500) for 500ms for 1 scroll count
    window.addEventListener('scroll', debounce(checkSlide));