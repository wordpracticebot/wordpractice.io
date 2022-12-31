<script lang="ts">
    export let img: string;
    export let name: string;
    export let isBot: boolean = true;
</script>

<div class="flex gap-3">
    <img src={img} alt="profile" class="w-8 h-8 md:w-12 md:h-12 rounded-full" />
    <div class="grow">
        <div class="flex text-zinc-50 gap-2 items-center">
            <h3 class="mb-1">{name}</h3>
            {#if isBot}
                <div
                    class="bg-indigo-500 px-2 h-full text-xs rounded-sm text-center grid place-items-center"
                >
                    BOT
                </div>
            {/if}
            <div />
        </div>
        <slot />
    </div>
</div>
