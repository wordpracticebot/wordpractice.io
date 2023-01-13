<script lang="ts">
    export let title: string = null;
    export let content: string[];
</script>

{#if title}
    <h1 class="text-2xl text-zinc-50">{title}</h1>
{/if}
<div class="text-zinc-300 mt-3">
    {#each content as message}
        <p>{message}</p>
    {/each}
</div>
