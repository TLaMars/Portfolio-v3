<script>
  import { _ } from "svelte-i18n";
  import DisplayImage from "../atoms/DisplayImage.svelte";
  import Section from "../atoms/Section.svelte";
</script>

<Section flex mobileColumn>
  <div class="left">
    <h1 class="title">{@html $_("firstname") + $_("intro.title")}</h1>
    <h2 class="subtitle">{@html $_("intro.subtitle")}</h2>
    <p class="about">{$_("intro.about")}</p>
  </div>
  <div class="right">
    <DisplayImage />
  </div>
</Section>

<style lang="scss">
  @use "../../styles/mixins" as *;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 4rem;
    min-height: 71rem;

    @include phone-only {
      min-height: 60vh;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 4rem 1.2rem 4rem 4rem;
    height: calc(100%);
    min-height: 71rem;

    @include tablet-and-smaller {
      justify-content: center;
    }

    @include phone-only {
      justify-content: center;
      min-height: auto;
    }
  }

  .left,
  .right {
    flex: 1 1 0;
  }

  .title {
    font-size: 6rem;
    margin: 0;

    @include phone-only {
      font-size: 4rem;
    }

    @include tablet-only {
      font-size: 5rem;
    }
  }

  .subtitle {
    font-size: 2.8rem;
    font-weight: 400;
    margin: 0 0 1.6rem 0;

    @include phone-only {
      font-size: 2rem;
    }

    @include tablet-only {
      font-size: 2.4rem;
    }
  }

  .about {
    font-weight: 400;
    font-size: 2rem;
    max-width: 56rem;
    width: 100%;
    margin: 0;

    @include phone-only {
      font-size: 1.6rem;
    }

    @include tablet-only {
      font-size: 1.8rem;
    }
  }
</style>
