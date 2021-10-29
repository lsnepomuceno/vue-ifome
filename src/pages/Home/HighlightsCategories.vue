<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="(category, i) in homeCategories" :key="i">
      <div class="carousel__item">
        <img :src="category.image" :alt="category.description" />
        <span class="absolute text-subtitle2 text-weight-regular">
          {{ category.description }}
        </span>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import { homeCategories } from '@/mocks/home'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const settings = {
  itemsToShow: 1,
  snapAlign: 'center'
}
const breakpoints = {
  0: {
    itemsToShow: 5.5,
    snapAlign: 'center'
  },
  1007: {
    itemsToShow: 8.5,
    snapAlign: 'center'
  },
  1423: {
    itemsToShow: 4.5,
    snapAlign: 'center'
  }
}
</script>

<style scoped>
.carousel__item img {
  width: 100%;
  position: relative;
  top: -11px;
}

.carousel__item span {
  bottom: -0.5em;
}

.carousel__item {
  width: 150 px;
  font-size: 20px;
  border-radius: 8 px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
