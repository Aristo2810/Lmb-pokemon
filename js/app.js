document.addEventListener("DOMContentLoaded", function() {
    let clickedButtons = 0;
    let selectedImages = [];
  
    function toggleButtonColor(button, image) {
      let isButtonRed = false;
      
      button.addEventListener('click', function() {
        if (!isButtonRed) {
          button.style.backgroundColor = 'red';
          isButtonRed = true;
          clickedButtons++;
          selectedImages.push(image);
  
          if (clickedButtons === 2) {
            let queryParam = new URLSearchParams({ image1: selectedImages[0], image2: selectedImages[1] });
            window.location.href = "fight.html?" + queryParam.toString();
          }
        } else {
          button.style.backgroundColor = '';
          isButtonRed = false;
          clickedButtons--;
          selectedImages = selectedImages.filter((item) => item !== image);
        }
      });
    }
  
    const myButton1 = document.getElementById('bouton1');
    const myImage1 = myButton1.querySelector('img');
    toggleButtonColor(myButton1, myImage1.src);
  
    const myButton2 = document.getElementById('bouton2');
    const myImage2 = myButton2.querySelector('img');
    toggleButtonColor(myButton2, myImage2.src);
  
    const myButton3 = document.getElementById('bouton3');
    const myImage3 = myButton3.querySelector('img');
    toggleButtonColor(myButton3, myImage3.src);
    
    const myButton4 = document.getElementById('bouton4');
    const myImage4 = myButton4.querySelector('img');
    toggleButtonColor(myButton4, myImage4.src);
  });
  