<script lang="ts">
  export let alpha = false;
</script>

<div class="square" class:alpha />

<style lang="scss">
  .square {
    width: 100rem;
    height: 100rem;
    background: var(--green);
    border-radius: var(--border-radius-l);
  }

  .alpha {
    background: var(--green-alpha);
  }
</style>
