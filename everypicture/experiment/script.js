(function(){
    'use strict';

    document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector('.cloudImage');
        const wrapper = document.createElement('div');
        //duplicate the image content to ensure seamless scrolling
        wrapper.innerHTML = container.innerHTML + container.innerHTML;
        container.innerHTML = '';
        container.appendChild(wrapper);

        let position = 0;
        const speed = 0.8;
        const width = wrapper.scrollWidth; 

        function animate() {
            position -= speed;
            if (position <= -width) {
                //reset the position to 0
                position = 0;
            }
            wrapper.style.transform = `translateX(${position}px)`;
            console.log(position);
            requestAnimationFrame(animate);
        }

        animate();
    });
})();
