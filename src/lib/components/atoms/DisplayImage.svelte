<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="container">
  <img class="image" src="/images/thomas.jpg" alt="Thomas Lamars" />
  <h4 class="badge">{@html $_("firstname") + $_("intro.image")}</h4>
</div>

<style lang="scss">
  @use "../../styles/mixins" as *;

  .container {
    --height: 60rem;

    @include phone-only {
      --height: 40rem;
    }

    @include tablet-only {
      --height: 44rem;
    }

    aspect-ratio: 0.67 / 1;
    border: 0.6rem solid var(--green);
    border-radius: var(--border-radius-m);
    box-sizing: border-box;
    display: flex;
    height: 100%;
    margin: 3rem 3rem 0 0;
    height: var(--height);
    position: relative;
    transform: rotate(5deg);
  }

  .badge {
    background: var(--black);
    border-radius: var(--border-radius-s);
    border: 0.6rem solid var(--green);
    bottom: 5rem;
    left: -6rem;
    padding: 1rem 1.6rem;
    position: absolute;
  }

  .image {
    aspect-ratio: 0.67 / 1;
    border: 0.6rem solid var(--green);
    border-radius: var(--border-radius-m);
    box-sizing: border-box;
    max-height: var(--height);
    left: 3rem;
    position: absolute;
    top: -4rem;
  }
</style>
