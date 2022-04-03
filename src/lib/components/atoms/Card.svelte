<div class="card">
  <slot />
</div>

<style lang="scss">
  @use "../../styles/mixins" as *;

  .card {
    background: var(--gray);
    border-radius: var(--border-radius-m);
    padding: 2.8rem;
  }
</style>
