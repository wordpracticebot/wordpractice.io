<script lang="ts">
    import { link } from "svelte-spa-router";
    import ActionButton from "../lib/ActionButton.svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import { onMount } from "svelte";
    import gsap, { Expo } from "gsap";
    import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";

    const tl = gsap.timeline({ reversed: true });

    onMount(() => {
        tl.from("#bar", {
            duration: 0.5,
            opacity: 0,
            zIndex: -10,
            display: "hidden",
            ease: Expo.easeInOut,
        });
        tl.from("#bar a", {
            duration: 0.4,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: Expo.easeInOut,
        });
    });

    const toggleNav = () => {
        tl.reversed(!tl.reversed());
    };
</script>

<header class="flex justify-between items-center py-8">
    <a href="/" use:link class="text-3xl text-zinc-50 font-bold">
        wordPractice
    </a>
    <nav class="text-zinc-300 text-lg justify-between gap-20 hidden lg:flex">
        <a href="/" use:link>Home</a>
        <a href="/team" use:link>Team</a>
        <a
            href="https://ko-fi.com/wordpractice"
            target="_blank"
            rel="noreferrer"
            class="text-amber-400 flex gap-2 items-center"
        >
            <div class="h-4">
                <FaTrophy />
            </div>
            Premium
        </a>
    </nav>

    <ActionButton
        href="https://ko-fi.com/wordpractice"
        colour="primary"
        size="md"
        class="hidden lg:block"
    >
        Login
    </ActionButton>

    <button
        class="w-9 h-9 block lg:hidden text-zinc-200 z-50"
        on:click={toggleNav}
    >
        <FaBars />
    </button>

    <nav
        id="bar"
        class="fixed inset-0 z-10 bg-zinc-900 opacity-90 flex backdrop-blur-lg flex-col justify-center items-center text-4xl text-zinc-50 gap-7"
    >
        <a href="/" use:link on:click={toggleNav}>Home</a>
        <a href="/team" use:link on:click={toggleNav}>Team</a>
        <a
            href="https://discord.gg/DHnk46C"
            target="_blank"
            rel="noreferrer"
            on:click={toggleNav}>Support</a
        >
    </nav>
</header>
