/* code goes here */
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("div#hidden-div").addEventListener("loadstart", e => document.getElementById('hidden-div').innerText = '301');
})