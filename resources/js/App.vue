<template>
  <div>
    <div class="nav">
      <div>
        <div class="logo">
          <img
            src="https://image.flaticon.com/icons/png/512/107/107831.png"
            width="50px"
            height="50px"
            alt=""
          />
        </div>
      </div>
      <ul>
        <li><a class="nav-btn" href="ingreso">SIGN UP</a></li>
        <li><a class="nav-btn" href="\">HOME</a></li>
      </ul>
    </div>
    <hr />

    <div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

* {
  outline: 0;
}
:root {
  --font: "DM Sans", sans-serif;
}
body {
  background: linear-gradient(
    102.7deg,
    #fddaff 8.2%,
    #dfadfc 19.6%,
    #adcdfc 36.8%,
    #adfcf4 73.2%,
    #caf8d0 90.9%
  );
  background-attachment: fixed;
  font-size: 16px;
  color: #586b6a;
  overflow: hidden;
}
#app {
  font-family: var(--font);
  margin: 2em auto;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  transition: all ease 0.65s;
  z-index: 100;
  position: relative;
  z-index: 1;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  margin-right: 15px;
}
.nav a {
  font: "Montserrat", sans-serif;
  margin: 0px 1px;
  text-decoration: none;
  color: #000000;
  display: inline-block;
  border: 2px solid #000000;
  padding: 6px 30px;
  border-radius: 20px;
}
.nav-btn {
  background-color: #ffffff;
}
hr {
  border: 0.5px solid lightgray;
}
</style>
