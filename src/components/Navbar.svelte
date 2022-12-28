<script lang="ts">
    import { link } from "svelte-spa-router";
    import ActionButton from "../lib/ActionButton.svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";

    let navOpen = false;

    const toggleNav = () => {
        navOpen = !navOpen;
    };
</script>

<header class="flex justify-between items-center py-8">
    <a href="/" use:link class="text-3xl text-zinc-50 font-bold">wordPractice</a
    >
    <nav class="text-zinc-300 text-lg justify-between gap-20 hidden lg:flex">
        <a href="/" use:link>Home</a>
        <a href="/team" use:link>Team</a>
        <a href="https://discord.gg/DHnk46C" target="_blank" rel="noreferrer">
            Support
        </a>
    </nav>

    <ActionButton
        href="https://ko-fi.com/wordpractice"
        colour="primary"
        size="md"
        class="hidden lg:block"
    >
        Premium
    </ActionButton>

    <button
        class="w-9 h-9 block lg:hidden text-zinc-200 z-50"
        on:click={toggleNav}
    >
        <FaBars />
    </button>

    {#if navOpen}
        <div
            class="fixed inset-0 z-10 bg-zinc-800 flex flex-col justify-center items-center text-3xl text-zinc-50 gap-5"
        >
            <a href="/" use:link on:click={toggleNav}>Home</a>
            <a href="/team" use:link on:click={toggleNav}>Team</a>
            <a
                href="https://discord.gg/DHnk46C"
                target="_blank"
                rel="noreferrer"
                on:click={toggleNav}>Support</a
            >
        </div>
    {/if}
</header>
