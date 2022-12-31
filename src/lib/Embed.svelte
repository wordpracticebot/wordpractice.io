<script lang="ts">
    export let title: string;
    export let description: string = null;
    export let img: string = null;
</script>

<div
    class="bg-neutral-700 rounded-lg p-4 border-l-[6.5px] border-secondary w-max"
>
    <div class="float-right h-16 w-16 mb-3 rounded-lg overflow-hidden">
        <slot name="thumbnail" />
    </div>
    <h3 class="text-base text-zinc-50 font-semibold">{title}</h3>
    {#if description !== null}
        <p>{description}</p>
    {/if}
    {#if img !== null}
        <img src={img} class="h-16 sm:h-24 md:h-32" alt="embed" />
    {/if}
</div>
