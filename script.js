document.addEventListener('DOMContentLoaded', function () {
  let sizeInKilobytes; 
  let initialFileSize;
  let fileName;
  let reductionRate;

  const fileUpload = document.getElementById('fileUpload');
  const showAfterFileUpload = document.getElementById('showAfterFileUpload');
  const burnedImage = document.getElementById('showAfterBurnedClick');
  const hideFileUpload = document.getElementById('hideWhenFileUploaded');
  const showAfterBurnBTN = document.getElementById('showOnlyAfterBurning');
  const fileImg = document.getElementById('fileImage');
  const fileImgBn = document.getElementById('fileImageBurned');
  const hideAfterBurnBTN = document.getElementById('hideAfterBurning');
  const hideAfterBurnBTNAW = document.getElementById('hideAfterBurningAswell');
    
  const refillButton = document.getElementById('showOnlySecTry');
  refillButton.addEventListener('click', restoreFile); // Attach listener here


  // File upload event handler
  fileUpload.addEventListener('change', function () {
    let file = this.files[0];

    if (file) {
      sizeInKilobytes = Math.round(file.size / 1024);
      initialFileSize = sizeInKilobytes;  

      fileName = file.name; // Store the filename
      reductionRate = Math.max(initialFileSize / 35, 2); 

      showAfterFileUpload.querySelector('p').textContent = `${fileName} (${sizeInKilobytes} KB)`;
      showAfterFileUpload.classList.remove('d-none'); 
      hideFileUpload.classList.add('d-none');
    }
  });
  // Burn button click handler
  showAfterFileUpload.querySelector('.btn-primary').addEventListener('click', function () {
    burnedImage.classList.remove('d-none'); 
    showAfterFileUpload.querySelector('p').classList.add('burning');

    let burnInterval = setInterval(function() {
      if (sizeInKilobytes > 0) {
        showAfterFileUpload.querySelector('p').textContent = `${fileName} (${sizeInKilobytes} KB)`; 
        sizeInKilobytes = Math.round(sizeInKilobytes - reductionRate);
      } else {
        showAfterBurnBTN.classList.remove('d-none');
        fileImgBn.classList.remove('d-none');
        fileImg.classList.add('d-none');
        fileImgBn.classList.add('d-md-flex');
        fileImg.classList.remove('d-md-flex');
        hideAfterBurnBTN.classList.add('d-none');
        hideAfterBurnBTNAW.classList.add('d-none');
        burnedImage.classList.add('d-none');
        showAfterFileUpload.querySelector('p').textContent = `${fileName} (0 KB) Verbrand.`;
        clearInterval(burnInterval); 
      }
    }, 100);
  });
    showAfterBurnBTN.addEventListener('click', function () {
        location.reload(); // Reload the page
    });
});

let state = 0;

function restoreFile() {
    console.log(state);
    // Add your file restoration logic and any desired effects here
    // ...
    const fileUpload = document.getElementById('fileUpload');
  const showAfterFileUpload = document.getElementById('showAfterFileUpload');
  const burnedImage = document.getElementById('showAfterBurnedClick');
  const hideFileUpload = document.getElementById('hideWhenFileUploaded');
  const showAfterBurnBTN = document.getElementById('showOnlyAfterBurning');
  const fileImg = document.getElementById('fileImage');
  const fileImgBn = document.getElementById('fileImageBurned');
  const hideAfterBurnBTN = document.getElementById('hideAfterBurning');
  const hideAfterBurnBTNAW = document.getElementById('hideAfterBurningAswell');
    const refillClickBtn = document.getElementById('showOnlySecTry');
    const pname = document.getElementById('pName');
    
    const coffeeOne = document.getElementById('coffee_0')
    const coffeeTwo = document.getElementById('coffee_1')
    const coffeeThree = document.getElementById('coffee_2')
    const coffeeFour = document.getElementById('coffee_3')
    
    
    fileImg.classList.add('d-none');
    fileImg.classList.remove('d-md-flex');
    hideAfterBurnBTN.classList.add('d-none');
    hideAfterBurnBTNAW.classList.add('d-none');
    pname.classList.add('d-none');
    refillClickBtn.classList.remove('d-none');
    
    switch(state){
        case 0:
            coffeeOne.classList.add('d-md-flex');
            coffeeOne.classList.remove('d-none');
            break;
        case 1:
            coffeeOne.classList.add('d-none');
            coffeeOne.classList.remove('d-md-flex');
            coffeeTwo.classList.remove('d-none');
            coffeeTwo.classList.add('d-md-flex');
            break;
        case 2:
            coffeeTwo.classList.add('d-none');
            coffeeTwo.classList.remove('d-md-flex');
            coffeeThree.classList.remove('d-none');
            coffeeThree.classList.add('d-md-flex');
            break;
        case 3:
            coffeeThree.classList.add('d-none');
            coffeeThree.classList.remove('d-md-flex');
            coffeeFour.classList.remove('d-none');
            coffeeFour.classList.add('d-md-flex');
            break;
        default:
            alert("Hoppa! Nou gas erop! Geniet van de koffie!");
            window.location.replace("https://altl.io");
            break;
    }
    state++;
    
}