<script lang="ts">
    import FaCheck from "svelte-icons/fa/FaCheck.svelte";

    export let img: string;
    export let name: string;
    export let isBot: boolean = true;
</script>

<div class="flex gap-2.5 md:gap-3">
    <img src={img} alt="profile" class="w-9 h-9 md:w-11 md:h-11 rounded-full" />
    <div class="grow">
        <div class="flex text-zinc-50 gap-2 items-center mb-1">
            <span>{name}</span>
            {#if isBot}
                <div
                    class="bg-indigo-500 px-1 py-[0.04rem] h-full text-[0.65rem] rounded-[0.15rem] spacing tracking-tighter text-center grid place-items-center"
                >
                    <div class="flex gap-1 items-center">
                        <div class="w-2.5 h-2.5">
                            <FaCheck />
                        </div>
                        <span>BOT</span>
                    </div>
                </div>
            {/if}
            <div />
        </div>
        <slot />
    </div>
</div>
