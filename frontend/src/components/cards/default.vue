<template>
<div :class="background" class="shadow-lg p-6 rounded-[50px]" :style="{ padding: cardPadding, margin: cardMargin, height: cardHeight, width: cardWidth }">
  <slot />
</div>
</template>

<script>
export default {
  props: {

    cardPadding: {
      type: String,
      default: '6px'
    },
    cardMargin: {
      type: String,
      default: '0px'
    },
    cardHeight: {
      type: String,
      default: '100%'
    },
    cardWidth: {
      type: String,
      default: '100%'
    },
    background:{
        type:String,
        default:"gradient-bg"
    }
  }
}
</script>