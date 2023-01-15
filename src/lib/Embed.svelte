<script lang="ts">
    interface Field {
        name?: string;
        value?: string;
        inline?: boolean;
    }
    export let title: string = null;
    export let fields: Field[] = [];
    export let description: string = null;
</script>

<div class="rounded-lg overflow-hidden">
    <div
        class="bg-discord-600 p-4 rounded-r-lg border-l-[5px] border-theme-primary w-max max-w-xs sm:max-w-sm md:max-w-md"
    >
        <div class="flex justify-between gap-3">
            <h3 class="text-base text-zinc-50 font-semibold basis-full">
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

        {#if fields}
            <div
                class="grid justify-between grid-cols-3 gap-x-5 gap-y-3 mt-3 text-sm {$$slots.thumbnail
                    ? 'pr-16'
                    : ''}"
            >
                {#each fields as field}
                    <div class={field?.inline ? "col-span-full" : ""}>
                        {#if field.name}
                            <h5 class="text-zinc-50 font-semibold">
                                {field.name}
                            </h5>
                        {/if}

                        {#if field.value}
                            <p class="text-zinc-300">{field.value}</p>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}

        {#if $$slots.image}
            <div
                class="mt-4 max-w-xs sm:max-w-sm md:max-w-md rounded-md overflow-hidden"
            >
                <slot name="image" />
            </div>
        {/if}
    </div>
</div>
