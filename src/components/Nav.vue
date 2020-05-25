<template>
  <div id="navBar ">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-lg ">
        <router-link to="/">
          <i class="far fa-gem fa-4x ml-4 "></i>
        </router-link>
        <router-link to="/">
          <a class="navbar-brand display-1 ml-5 " >TUTIENDA.COM</a>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav mr-4">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
};
</script>

<style>
</style>