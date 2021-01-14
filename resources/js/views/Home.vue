<template>
<div class="body">
<div class="multi-button">
  <button class="user"><a href="user">user</a></button>
  <button class="list"><a href="lista">lists</a></button>
  <button class="supers"><a href="supers">supers</a></button>
</div>
</div>

</template>
<script>
export default {
  
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");
.body {
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
}
button a{
  text-decoration: none;
  color: #000000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.multi-button {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
.multi-button button {
  background: white;
  border: 0.125em solid black;
  cursor: pointer;
  font: 600 1.5rem/1.25 "Montserrat", sans-serif;
  letter-spacing: 0.125em;
  margin: 0.5rem;
  padding: 0.5em 0.75em;
  position: relative;
  text-transform: uppercase;
}
.multi-button button:before, .multi-button button:after {
  content: "";
  position: absolute;
  transition: all 0.125s ease-in-out;
}
.multi-button button.user {
  background: none;
  border-color: transparent;
}
.multi-button button.user:before, .multi-button button.user:after {
  transition: all 0.175s ease-in-out;
}
.multi-button button.user:before {
  background: black;
  border: 0px dashed black;
  left: -0.125em;
  top: -0.125em;
  right: -0.125em;
  bottom: -0.125em;
  z-index: -1;
}
.multi-button button.user:hover:before, .multi-button button.user:focus:before {
  background: white;
  border-width: 0.125em;
}
.multi-button button.user:after {
  background: white;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
}
.multi-button button.list:after {
  border: 0.125em dashed black;
  bottom: -0.125em;
  left: -0.125em;
  right: -0.125em;
  top: -0.125em;
  z-index: -1;
}
.multi-button button.list:hover:after, .multi-button button.list:focus:after {
  bottom: -0.375em;
  left: 0.125em;
  right: -0.375em;
  top: 0.125em;
}
.multi-button button.super:after {
  border: 0.125em dashed black;
  bottom: -0.125em;
  left: -0.125em;
  right: -0.125em;
  top: -0.125em;
}
.multi-button button.super:hover:after, .multi-button button.super:focus:after {
  bottom: 0.125em;
  left: 0.125em;
  right: 0.125em;
  top: 0.125em;
}
</style>