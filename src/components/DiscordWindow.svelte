<div class="w-full h-screen overflow-hidden rounded-lg flex" id="window">
    <div
        class="p-3 h-full bg-discord-800 hidden sm:flex flex-end flex-col items-center gap-3"
    >
        <div class="w-12 h-12 bg-discord-500 rounded-full" />
        <div class="w-8 h-0.5 bg-discord-400 rounded-full" />
        {#each [1, 2, 3, 4, 5, 6] as i}
            {#if i == 1}
                <div class="relative">
                    <div class="w-12 h-12 bg-indigo-400 rounded-xl" />
                    <div
                        class="w-1 h-10 bg-zinc-50 rounded-r-lg absolute -left-3 top-1"
                    />
                </div>
            {:else}
                <div class="w-12 h-12 bg-discord-500 rounded-full" />
            {/if}
        {/each}
    </div>

    <div class="w-72 h-full bg-discord-600 lg:flex hidden flex-col">
        <div
            class="p-4 shadow-[0_1.5px_3px] shadow-discord-800 flex gap-2 items-center"
        >
            <div class="h-4 w-4 bg-discord-400 rounded-full" />
            <div class="h-3 w-3/4 bg-zinc-50 rounded-full" />
        </div>
        <div class="px-3 py-5 grow flex flex-col gap-8">
            {#each [1, 2, 3] as _}
                <div>
                    <div class="flex gap-1.5">
                        <div class="h-1.5 w-1.5 bg-discord-400 rounded-md" />
                        <div class="h-1.5 w-1/3 bg-discord-400 rounded-full" />
                    </div>
                    <div class="ml-3.5 mt-3 flex flex-col gap-4">
                        <div class="h-2.5 w-3/4 bg-discord-400 rounded-full" />
                        <div class="h-2.5 w-4/5 bg-discord-400 rounded-full" />
                        <div class="h-2.5 w-2/3 bg-discord-400 rounded-full" />
                        <div class="h-2.5 w-1/3 bg-discord-400 rounded-full" />
                        <div class="h-2.5 w-3/4 bg-discord-400 rounded-full" />
                    </div>
                </div>
            {/each}
        </div>

        <div class="py-2 px-2.5 bg-discord-700 items-center flex gap-3">
            <div class="w-9 h-9 rounded-full bg-zinc-50 relative">
                <div
                    class="w-4 h-4 rounded-full bg-green-400 absolute -right-0.5 -bottom-0.5 border-discord-700 border-[3px]"
                />
            </div>
            <div class="grow">
                <div class="h-3 w-full bg-discord-400 rounded-full" />
                <div class="h-2 w-1/2 bg-discord-400 mt-1 rounded-full" />
            </div>
            <div class="flex gap-1.5">
                <div class="h-4 w-4 bg-discord-400 rounded-full" />
                <div class="h-4 w-4 bg-discord-400 rounded-full" />
                <div class="h-4 w-4 bg-discord-400 rounded-full" />
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full bg-discord-500">
        <div class="grow flex flex-col overflow-hidden">
            <div
                class="p-4 shadow-[0_1px_2px] shadow-discord-800 flex gap-2 items-center"
            >
                <div class="h-4 w-4 bg-discord-400 rounded-sm" />
                <div class="h-3 w-1/3 bg-zinc-50 rounded-full" />
            </div>
            <div
                class="flex flex-col justify-end grow px-3 md:px-5 gap-4 overflow-auto"
            >
                <slot />
            </div>
            <div class="py-2.5 px-5 bg-discord-400 m-5 rounded-lg flex gap-2">
                <div class="h-5 w-5 mt-0.5 mr-2.5 bg-zinc-400 rounded-full" />
                <p id="typing" class="text-zinc-300 text-base basis-full">|</p>
            </div>
        </div>
    </div>
</div>
