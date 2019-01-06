/* code goes here */
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("div#hidden-div").addEventListener("load", e => document.getElementById('hidden-div').innerHTML = '301');
})