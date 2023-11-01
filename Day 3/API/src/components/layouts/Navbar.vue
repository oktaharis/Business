<template>
  <div>
    <div class="tapnav container" :class="{ responsive: navbarActive }">
      <div class="logo">
        <div><img src="@/assets/img/logo.png" alt="logo"></div>
        <a class="icon">
          <img src="@/assets/img/hamburger.svg" @click="navbar" alt="hamburger"/>
        </a>
      </div>
      <div class="menu">
        <a href="">Home</a>
        <a href="">Portofolio</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarActive: false
    }
  },
  methods: {
    navbar() {
      if (this.navbarActive) {
        this.navbarActive = false;
      } else {
        this.navbarActive = true;
      }
    }
  },
}
</script>
<style scope>
.tapnav {
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tapnav a {
  float: left;
  color: #000;
  text-align: center;
  padding: 15px 18px;
  text-decoration: none;
  font-size: 17px;
}

.tapnav a:hover {
  border-bottom: 2px solid #4c55c4;
}
.tapnav a:hover {
  color: black;
}
.tapnav a.active {
  background-color: #04aa60;
  color: white;
}

.tapnav .icon {
  display: none;
}

.logo {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 10px;
}

@media screen and (max-width: 600px) {
  .tapnav {
    display: block;
    padding: 0;
  }
  .tapnav .menu a {
    display: none;
  }

  .tapnav a.icon {
    float: right;
    display: block;
  }
}
@media screen and (max-width: 600px) {
  .tapnav.responsive {
    position: relative;
    display: block;
  }
  .tapnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
