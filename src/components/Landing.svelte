<script lang="ts">
    import { onMount } from "svelte";
    import Message from "./Message.svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    onMount(() => {
        // Discord Window
        gsap.to("#window", {
            scrollTrigger: {
                trigger: "#window",
                start: "top top",
                end: "+=215%",
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

        // Actual Test Image
        gsap.to("#test", {
            opacity: 1,
            duration: 20,
            display: "block",
            scrollTrigger: {
                trigger: "#number",
                start: "600 center",
                end: "700 center",
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
                start: "700 center",
                end: "1000 center",
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
                start: "1000 center",
                end: "1200 center",
                scrub: true,
                // markers: true,
            },
        });
    });
</script>

<div class="text-center max-w-4xl mx-auto my-28">
    <h1 class="text-6xl font-bold text-zinc-50 mb-8">
        The Typing Test Discord Bot
    </h1>
    <p class="text-zinc-400 text-2xl mb-8">
        Practice your typing skills while having fun. Compete with typists from
        around the world, complete achievements, earn badges and much more.
    </p>
    <div>
        <button
            class="px-10 bg-primary text-zinc-50 py-3.5 rounded-full text-xl mr-4 shadow-lg shadow-primary/20 hover:-translate-y-1 hover:brightness-125 transition-all delay-75"
        >
            Invite
        </button>
        <button
            class="px-10 bg-secondary text-zinc-50 py-3.5 rounded-full text-xl shadow-lg shadow-secondary/20 hover:-translate-y-1 hover:brightness-125 transition-all delay-75"
        >
            Join Community
        </button>
    </div>
</div>

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
            <div class="flex flex-col justify-end bg-neutral-600 grow px-6">
                <div id="loading" class="opacity-0">
                    <Message img="https://i.imgur.com/hA9YF2s.png">
                        <div class="bg-neutral-700 h-16">
                            <div id="number" class="text-3xl float-right">
                                3
                            </div>
                        </div>
                    </Message>
                </div>

                <div id="test" class="opacity-0 hidden">
                    <Message img="https://i.imgur.com/hA9YF2s.png">
                        Loading
                    </Message>
                </div>

                <div id="results" class="opacity-0 hidden">
                    <Message img="https://i.imgur.com/hA9YF2s.png">hi</Message>
                </div>
            </div>
            <p id="text" class="py-3 bg-yellow-300 mx-6 mb-6">|</p>
        </div>
    </div>
</div>
