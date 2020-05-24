<template>
  <div id="navBar">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 ">
        <router-link to="/">
        <i class="fas fa-tshirt fa-3x ml-4 "></i>
        </router-link>
        <a class="navbar-brand display-1 ml-5" href="#">TUTIENDA.COM</a>
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