<script lang="ts">
    export let title: string = null;
    export let description: string = null;
</script>

<div class="rounded-lg overflow-hidden">
    <div
        class="bg-discord-600 p-4 rounded-r-lg border-l-[5px] border-theme-primary w-max max-w-[17rem] min-[400px]:max-w-[19rem] min-[500px]:max-w-sm sm:max-w-md"
    >
        <div class="flex justify-between gap-3">
            <h3
                class="text-sm md:text-base text-zinc-50 font-semibold basis-full"
            >
                {#if $$slots.title}
                    <slot name="title" />
                {:else}
                    {title}
                {/if}
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
            <p class="text-zinc-300 text-sm">{description}</p>
        {/if}

        <slot name="content" />

        {#if $$slots.image}
            <div
                class="mt-4 max-w-xs sm:max-w-sm md:max-w-md rounded-md overflow-hidden"
            >
                <slot name="image" />
            </div>
        {/if}
    </div>
</div>
