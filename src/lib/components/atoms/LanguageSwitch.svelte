<script lang="ts">
  import { THOMAUR_LOCALE } from "../../constants/persisted-keys";
  import { storePersisted } from "../../utils/store-persisted";
  import { locales, locale } from "svelte-i18n";

  function changeLanguage(language: string) {
    $locale = language;
    storePersisted(THOMAUR_LOCALE, language);
  }
</script>

<div class="container">
  {#each $locales as l}
    <button
      class="language"
      class:active={$locale === l}
      on:click={() => changeLanguage(l)}>{l}</button
    >
  {/each}
</div>

<style lang="scss">
  .language {
    background: var(--gray);
    border: none;
    color: var(--white);
    cursor: pointer;
    font: bold 1.4rem var(--font);
    margin: 0;
    padding: 0.6rem 1rem;
    text-transform: uppercase;

    &:first-child {
      border-top-left-radius: var(--border-radius-xs);
      border-bottom-left-radius: var(--border-radius-xs);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius-xs);
      border-bottom-right-radius: var(--border-radius-xs);
    }
  }

  .active {
    background: var(--green);
  }
</style>
