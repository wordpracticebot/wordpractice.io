<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Message from "../lib/Message.svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";
    import ActionButton from "../lib/ActionButton.svelte";

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

        // Countdown
        ["top", 200, 400, 600].forEach((n, i) => {
            gsap.to("#number", {
                opacity: 1,
                duration: 20,
                text: i === 3 ? "GO" : (3 - i).toString(),
                scrollTrigger: {
                    trigger: "#number",
                    start: `${n} center`,
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                },
            });
        });

        // Removing the loading image
        // TODO: find better way to do this
        gsap.to("#loading", {
            opacity: 1,
            duration: 20,
            display: "none",
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
        gsap.to("#text", {
            duration: 1000,
            text: "one two three four five six seven eight nine ten eleven twelve",
            scrollTrigger: {
                trigger: "#number",
                start: "750 center",
                end: "1300 center",
                scrub: true,
                // markers: true,
            },
        });

        // Removing text
        gsap.to("#text", {
            opacity: 1,
            duration: 20,
            text: "|",
            scrollTrigger: {
                trigger: "#text",
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
                trigger: "#text",
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
<div class="w-full h-screen rounded-lg flex" id="window">
    <div
        class="w-24 h-full bg-neutral-800 flex flex-end flex-col items-center gap-3"
    >
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as _}
            <div class="w-12 h-12 bg-neutral-200 rounded-full" />
        {/each}
    </div>

    <div class="w-64 h-full bg-neutral-700 lg:block hidden">
        <div class="py-3 border-b-2 border-neutral-800">Server Name</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="bg-neutral-600 grow flex flex-col">
            <div class="border-b-2 border-neutral-800 py-3">Channel Name</div>
            <div
                class="flex flex-col justify-end bg-neutral-600 grow px-6 gap-4"
            >
                <div id="loading" class="opacity-0">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <div id="number" class="text-3xl float-right">3</div>
                        <h3 class="text-lg">Typing Test</h3>
                        <img
                            src="https://cdn.discordapp.com/attachments/771352393689464882/1057488467526959114/loading.png"
                            class="h-32"
                            alt="loading"
                        />
                    </Message>
                </div>

                <div id="test" class="opacity-0 hidden">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <h3 class="text-lg">Typing Test</h3>
                        <img
                            src="https://cdn.discordapp.com/attachments/771352393689464882/1057488490838892544/test.png"
                            class="h-32"
                            alt="loading"
                        />
                    </Message>
                </div>

                <div id="results" class="opacity-0 hidden">
                    <Message
                        img="https://i.imgur.com/BIzs17V.png"
                        name="wordPractice"
                    >
                        <h3 class="text-lg">Typing Test Results</h3>
                    </Message>
                </div>
            </div>
            <p id="text" class="py-3 bg-neutral-500 m-6 rounded-lg">|</p>
        </div>
    </div>
</div>
