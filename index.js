/* code goes here */
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("div#hidden-div").addEventListener("click", e => document.getElementByName('div').innerText = '301' );
})