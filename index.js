'use strict';

// getting data from input card

const switchBtn = document.querySelector('.switch');
const switchBtnInput = document.querySelector('.switch input');
switchBtn.addEventListener('click', () => {

  if (switchBtnInput.checked) {
    alert('checked');
  }
});
