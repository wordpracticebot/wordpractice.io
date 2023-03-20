<script lang="ts">
    import FaCheck from "svelte-icons/fa/FaCheck.svelte";

    export let name: string;
    export let price: string;
    export let large: boolean;
    export let link: string;
    export let rounded: "left" | "right" = null;
    export let colour: "amber" | "fuchsia" | "indigo";
    export let benefits: string[];

    const cardStyles = large ? "lg:bg-zinc-850 px-7 py-12" : "px-7 py-9";

    const roundedStyles =
        rounded === "left"
            ? "lg:rounded-r-none lg:rounded-l-md"
            : rounded === "right"
            ? "lg:rounded-l-none lg:rounded-l-md"
            : "lg:rounded-md";

    const textColour =
        colour === "amber"
            ? "text-amber-300 shadow-amber-300/60"
            : colour === "fuchsia"
            ? "text-fuchsia-300 shadow-fuchsia-300/60"
            : "text-indigo-300 shadow-indigo-300/60";

    const btnGradient =
        colour === "amber"
            ? "from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-amber-400/20"
            : colour === "fuchsia"
            ? "from-fuchsia-400 to-fuchsia-600 hover:from-fuchsia-300 hover:to-fuchsia-500 shadow-fuchsia-400/20"
            : "from-indigo-400 to-indigo-600 hover:from-indigo-300 hover:to-indigo-500 shadow-indigo-400/20";

    const cardBorder =
        colour == "amber"
            ? "border-amber-400"
            : colour == "fuchsia"
            ? "border-fuchsia-400"
            : "border-indigo-400";
</script>

<div
    class="{roundedStyles} rounded-lg overflow-hidden w-full md:max-w-sm md:w-2/3 shadow-lg"
>
    <div class="bg-zinc-900 border-t-8 {cardBorder} {cardStyles}">
        <div class="text-center">
            <h2
                class="text-2xl font-semibold mb-2 uppercase drop-shadow-lg {textColour}"
            >
                {name}
            </h2>
            <h3 class="text-zinc-50">
                <span class="text-[2.75rem] font-semibold">${price}</span>
                <span>USD</span>
            </h3>
            <span class="text-md text-zinc-400 text-left">Per Month</span>
        </div>
        <div class="flex justify-center">
            <div class="text-zinc-50 my-4 flex flex-col gap-2">
                {#each benefits as benefit}
                    <div class="flex gap-2 items-center">
                        <div class="h-4 text-green-400">
                            <FaCheck />
                        </div>
                        <span class="text-sm">{benefit}</span>
                    </div>
                {/each}
            </div>
        </div>
        <div class="text-center">
            <a
                href={link}
                rel="noreferrer"
                target="_blank"
                class="px-4 py-3 rounded-md inline-block mt-3 bg-gradient-to-bl text-zinc-50 hover:-translate-y-1 hover:scale-105 duration-200 transition-all {btnGradient} shadow-lg"
            >
                Subscribe Now
            </a>
        </div>
    </div>
</div>
