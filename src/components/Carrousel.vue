<template>
  <div id="carrousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../images/girl-691712_1920.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../images/jeans-2979818_1920.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../images/store-984393_1920.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="row text-center">
      <div class="col-12 mt-5 mb-5">
      <span class="text-primary far fa-gem fa-4x"></span>
      <h1 class="text-primary text-h1">TUTIENDA.COM</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel"
};
</script>

<style>
    #carrousel {
      background-color: rgba(0, 0, 0, 0.795);
      box-shadow: 0px 1px 17px 27px  rgba(0, 0, 0, 0.795)
    }

    @media (max-width: 500px){
      .text-h1 {
        font-size: 30px;
      }
    }
</style>