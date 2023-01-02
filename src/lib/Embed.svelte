<script lang="ts">
    export let title: string;
    export let description: string = null;
</script>

<div class="rounded-lg overflow-hidden">
    <div
        class="bg-discord-600 p-4 border-l-[5px] border-theme-primary w-max max-w-md"
    >
        <div class="flex justify-between gap-3">
            <h3 class="text-base text-zinc-50 font-semibold basis-full">
                {title}
            </h3>
            {#if $$slots.thumbnail}
                <div class="basis-16">
                    <div
                        class="float-right h-16 w-16 rounded-lg overflow-hidden"
                    >
                        <slot name="thumbnail" />
                    </div>
                </div>
            {/if}
        </div>
        {#if description !== null}
            <p>{description}</p>
        {/if}
        {#if $$slots.image}
            <div class="mt-4 max-w-md rounded-md overflow-hidden">
                <slot name="image" />
            </div>
        {/if}
    </div>
</div>
