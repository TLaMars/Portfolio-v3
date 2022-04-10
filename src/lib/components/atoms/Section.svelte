<script lang="ts">
  export let flex = false;
  export let mobileColumn = false;
</script>

<section class="section" class:flex class:mobile-column={mobileColumn}>
  <slot />
</section>

<style lang="scss">
  @use "../../styles/mixins" as *;

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

  .mobile-column {
    @include phone-only {
      flex-direction: column;
    }
  }
</style>
