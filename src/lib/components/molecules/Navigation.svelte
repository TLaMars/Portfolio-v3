<script lang="ts">
  import Logo from "../assets/Logo.svelte";
  import LanguageSwitch from "../atoms/LanguageSwitch.svelte";
  import Section from "../atoms/Section.svelte";
</script>

<Section>
  <div class="container">
    <Logo />
    <LanguageSwitch />
  </div>
</Section>

<style>
  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 0;
  }
</style>
