/* code goes here */
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("body").addEventListener("loadstart", e => document.getElementById('hidden-div').innerText = '301' );
})