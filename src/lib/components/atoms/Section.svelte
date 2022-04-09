<script lang="ts">
  export let flex = false;
</script>

<section class="section" class:flex>
  <slot />
</section>

<style lang="scss">
  .section {
    margin-left: auto;
    margin-right: auto;
    width: 120rem;
    max-width: calc(100% - 4rem);

    padding-left: 2rem;
    padding-right: 2rem;
  }

  .flex {
    display: flex;
  }
</style>
