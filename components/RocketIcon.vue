<template>
  <div id="ship-container">
    <svg
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      id="Ship"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="lucide:rocket">
        <g id="Group">
          <path
            id="Body"
            d="M12 15L9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13C14.7367 13.7984 13.3967 14.4684 12 15Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Wings"
            d="M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Fire"
            d="M2.5 21.5C2.5 21.5 3 17.76 4.5 16.5C4.91088 16.1537 5.43516 15.9714 5.97223 15.988C6.50929 16.0046 7.02131 16.219 7.41 16.59C8.2 17.37 8.21 18.66 7.5 19.5C6.24 21 2.5 21.5 2.5 21.5Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
#Fire {
  animation: fire 2s linear infinite;
  transform-origin: top;
  translate: 1px 0px;
}

#Ship {
  animation: ship 2s linear infinite;
}

#ship-container {
  animation: movement linear;
  animation-timeline: scroll();
}

@keyframes movement {
  0% {
  }
  10% {
    transform: rotate(100deg);
  }
  10% {
    translate: 5rem 20rem;
  }
  20% {
    translate: 10rem 30rem;
    transform: rotate(100deg);
  }
  25% {
    translate: 20rem 40rem;
    transform: rotate(80deg);
  }
  30% {
    translate: 20rem 50rem;
    transform: rotate(130deg);
  }
  35% {
    translate: 20rem 70rem;
    transform: rotate(130deg);
  }
  40% {
    translate: 20rem 90rem;
    transform: rotate(130deg);
  }
  100% {
    translate: 20rem 270rem;
    scale: 0.6;
    transform: rotate(130deg);
  }
}

@keyframes fire {
  0%,
  100% {
    transform: translate(-1px, 0px);
  }
  25% {
    transform: translate(0px, 1px);
  }
  50% {
    transform: translate(1px, 0px);
  }
  75% {
    transform: translate(0px, -1px);
  }
}

@keyframes ship {
  0%,
  100% {
    transform: translate(-2px, 0px);
  }
  25% {
    transform: translate(0px, 2px);
  }
  50% {
    transform: translate(2px, 0px);
  }
  75% {
    transform: translate(0px, -2px);
  }
}
</style>
