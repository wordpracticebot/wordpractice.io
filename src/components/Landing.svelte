<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Message from "../lib/Message.svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";
    import ActionButton from "../lib/ActionButton.svelte";
    import Embed from "../lib/Embed.svelte";

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    onMount(() => {
        // Discord Window
        gsap.to("#window", {
            scrollTrigger: {
                trigger: "#window",
                start: "top top",
                end: "+=250%",
                pin: "#window",
                scrub: true,
                // markers: true,
            },
        });

        // Blurred Test Image
        gsap.to("#loading", {
            opacity: 1,
            duration: 20,
            scrollTrigger: {
                trigger: "#loading",
                start: "bottom bottom",
                end: "bottom center",
                scrub: true,
                // markers: true,
            },
        });

        const countdown = ["3", "2", "1", "GO"];

        // Countdown
        countdown.forEach((n, i) => {
            gsap.to("#number", {
                opacity: 1,
                duration: 1,
                text: n,
                scrollTrigger: {
                    trigger: "#number",
                    start: `${i * 200} center`,
                    end: `${
                        Math.min(i + 1, countdown.length - 1) * 200
                    } center`,
                    scrub: true,
                    // markers: true,
                },
            });
        });

        // Removing the loading image
        // TODO: find better way to do this
        gsap.from("#loading", {
            duration: 20,
            display: "block",
            scrollTrigger: {
                trigger: "#number",
                start: "700 center",
                scrub: true,
                // markers: true,
            },
        });

        // Actual Test Image
        gsap.to("#test", {
            opacity: 1,
            duration: 20,
            display: "block",
            scrollTrigger: {
                trigger: "#number",
                start: "700 center",
                end: "800 center",
                scrub: true,
                // markers: true,
            },
        });

        // Typing
        gsap.to("#typing", {
            duration: 1000,
            scrollTrigger: {
                trigger: "#number",
                start: "750 center",
                end: "1300 center",
                scrub: true,
                // markers: true,
            },
        });

        gsap.to("#typing", {
            duration: 1000,
            text: testWords,
            scrollTrigger: {
                trigger: "#number",
                start: "750 center",
                end: "1300 center",
                scrub: true,
                // markers: true,
            },
        });

        // Removing text
        gsap.to("#typing", {
            opacity: 1,
            duration: 20,
            text: "|",
            scrollTrigger: {
                trigger: "#typing",
                start: "1250 center",
                scrub: true,
                // markers: true,
            },
        });

        // Test Results
        gsap.to("#results", {
            opacity: 1,
            duration: 20,
            display: "block",
            scrollTrigger: {
                trigger: "#typing",
                start: "1250 center",
                end: "1400 center",
                scrub: true,
                // markers: true,
            },
        });
    });

    // Prevents scrolltrigger from breaking on page change
    onDestroy(() => {
        ScrollTrigger.getAll().forEach((ST) => ST.kill());
    });

    const testWords =
        "know out small on face old more since plan how nation because general for after fact feel many man help if each seem not can hand such off during move";
</script>

<!-- Hero section -->
<div class="text-center max-w-4xl mx-auto my-28">
    <h1 class="text-6xl font-bold text-zinc-50 mb-8">
        The Typing Test Discord Bot
    </h1>
    <p class="text-zinc-400 text-2xl mb-8">
        Practice your typing skills while having fun. Compete with typists from
        around the world, complete achievements, earn badges and much more.
    </p>
    <div class="flex gap-4 justify-center">
        <ActionButton
            href="https://discord.com/oauth2/authorize?client_id=743183681182498906&scope=bot+applications.commands&permissions=412317248576&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FDHnk46C"
            colour="primary"
            size="lg"
        >
            <span class="text-xl">Invite</span>
        </ActionButton>
        <ActionButton
            href="https://discord.gg/DHnk46C"
            colour="secondary"
            size="lg"
        >
            <span class="text-xl">Join Community</span>
        </ActionButton>
    </div>
</div>

<!-- Typing test demo -->
<div class="w-full h-screen rounded-lg overflow-hidden flex" id="window">
    <div
        class="p-3 h-full bg-discord-800 flex flex-end flex-col items-center gap-3"
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
        <div class="grow flex flex-col">
            <div
                class="p-4 shadow-[0_1px_2px] shadow-discord-800 flex gap-2 items-center"
            >
                <div class="h-4 w-4 bg-discord-400 rounded-sm" />
                <div class="h-3 w-1/3 bg-zinc-50 rounded-full" />
            </div>
            <div class="flex flex-col justify-end grow px-6 gap-4">
                <div id="loading" class="opacity-0 hidden">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <Embed
                            title="Principle#0853 | Medium Dictionary Test (30 words)"
                        >
                            <div
                                class="text-center grid place-items-center bg-zinc-50 h-full"
                                slot="thumbnail"
                            >
                                <span
                                    id="number"
                                    class="text-3xl font-semibold"
                                />
                            </div>
                            <div slot="image" class="relative text-lg">
                                <div
                                    class="break-words bg-theme-secondary text-theme-primary px-3 py-1.5 blur-sm"
                                >
                                    {testWords}
                                </div>
                                <div
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-theme-primary"
                                >
                                    Ready?
                                </div>
                            </div>
                        </Embed>
                    </Message>
                </div>

                <div id="test" class="opacity-0 hidden">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <Embed
                            title="Principle#0853 | Medium Dictionary Test (30 words)"
                        >
                            <div slot="image">
                                <div
                                    class="break-words bg-theme-secondary text-theme-primary px-3 py-1.5 text-lg"
                                >
                                    {testWords}
                                </div>
                            </div>
                        </Embed>
                    </Message>
                </div>

                <div id="results" class="opacity-0 hidden">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <Embed title="Typing Test Results">
                            <img
                                class="h-full"
                                slot="thumbnail"
                                src="https://i.imgur.com/l9sLfQx.png"
                                alt="clipboard"
                            />
                        </Embed>
                    </Message>
                </div>
            </div>
            <div class="py-2.5 px-5 bg-discord-400 m-6 rounded-lg flex gap-2">
                <div class="h-5 w-5 mr-2.5 bg-zinc-400 rounded-full" />
                <p id="typing" class="text-zinc-300 text-base basis-full">|</p>
            </div>
        </div>
    </div>
</div>
