document.addEventListener("DOMContentLoaded", function() {
  // wrap for cms all button
  const allWrapper = document.querySelector('.insights-cms-filter-radio');
  const allInput = allWrapper?.querySelector('input[type="radio"]');

  if (allInput && allWrapper) {
    allInput.checked = true; // set checked state
    allWrapper.classList.add('is-list-active'); // add active class
  }
});