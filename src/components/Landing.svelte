<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    onMount(() => {
        gsap.to("#page", {
            scrollTrigger: {
                trigger: "#page",
                start: "top top",
                end: "+=150%",
                pin: "#page",
                scrub: true,
                // markers: true,
            },
        });
        gsap.to("#hi", {
            opacity: 1,
            duration: 20,
            scrollTrigger: {
                trigger: "#hi",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            },
        });
        gsap.to("#hi2", {
            opacity: 1,
            duration: 20,
            scrollTrigger: {
                trigger: "#hi2",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            },
        });

        gsap.to("#text", {
            duration: 1000,
            text: "one two three four five six seven eight nine ten eleven twelve",
            scrollTrigger: {
                trigger: "#hi2",
                start: "bottom top",
                end: "400 top",
                scrub: true,
                // markers: true,
            },
        });

        gsap.to("#hi3", {
            opacity: 1,
            duration: 20,
            scrollTrigger: {
                trigger: "#text",
                start: "bottom top",
                end: "300 top",
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

<div class="bg-indigo-400 w-full h-screen rounded-lg flex" id="page">
    <div class="w-24 h-full bg-red-400">hi</div>
    <div class="w-64 h-full bg-green-400">
        <div class="bg-cyan-400 h-16">Server Name</div>
    </div>
    <div class="flex flex-col w-full">
        <div class="bg-orange-400 grow">
            <div class="bg-indigo-300 h-16">Channel Name</div>
            <div id="hi" class="bg-pink-400 h-48 opacity-0">
                Typing Test Image
            </div>
            <div id="hi2" class="bg-blue-400 h-48 opacity-0">
                Typing Test Image
            </div>
            <div id="hi3" class="bg-purple-400 h-48 opacity-0">
                Typing Test Image
            </div>
        </div>
        <p id="text" class="py-6" />
    </div>
</div>
