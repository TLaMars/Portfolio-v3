<script lang="ts">
  import { _ } from "svelte-i18n";
  import Intro from "./lib/components/organisms/Intro.svelte";
  import initI18n from "./lib/utils/i18n";
  import Navigation from "./lib/components/molecules/Navigation.svelte";
  import { retrievePersisted } from "./lib/utils/store-persisted";
  import { THOMAUR_LOCALE } from "./lib/constants/persisted-keys";

  initI18n(retrievePersisted<string>(THOMAUR_LOCALE) ?? "en");
</script>

<main>
  <Navigation />
  <Intro />
</main>
