<script lang="ts">
  import { _ } from "svelte-i18n";
  import initI18n from "./lib/utils/i18n";

  initI18n("nl");
</script>

<main>
  <p>{$_("firstname")}</p>
</main>

<style>
</style>
