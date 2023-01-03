<script lang="ts">
    import { link } from "svelte-spa-router";
    import ActionButton from "../lib/ActionButton.svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import { onMount } from "svelte";
    import gsap, { Expo } from "gsap";
    import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";

    const tl = gsap.timeline({ reversed: true });

    onMount(() => {
        tl.set("#bar", {
            className:
                "fixed inset-0 z-10 bg-zinc-900 opacity-90 flex backdrop-blur-lg flex-col justify-center items-center text-4xl gap-7 text-zinc-300",
        });
        tl.set("#bar a", {
            y: 50,
            opacity: 0,
        });
        tl.to("#bar", {
            duration: 0.3,
            ease: Expo.easeInOut,
        });
        tl.to("#bar a", {
            duration: 0.4,
            opacity: 1,
            y: 10,
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
    <nav
        class="text-zinc-300 text-lg justify-between gap-20 hidden opacity-0 lg:flex lg:opacity-100"
        id="bar"
    >
        <a href="/" use:link>Home</a>
        <a href="/team" use:link>Team</a>
        <a
            href="/premium"
            use:link
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
</header>
