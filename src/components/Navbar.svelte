<script lang="ts">
    import { link } from "svelte-spa-router";
    import ActionButton from "../lib/ActionButton.svelte";
</script>

<header class="flex justify-between items-center py-8">
    <a href="/" use:link class="text-3xl text-zinc-50 font-bold">wordPractice</a
    >
    <nav class="flex text-zinc-300 text-lg justify-between gap-20">
        <a href="/" use:link>Home</a>
        <a href="/team" use:link>Team</a>
        <a href="https://discord.gg/DHnk46C">Support</a>
    </nav>
    <ActionButton
        href="https://ko-fi.com/wordpractice"
        colour="primary"
        size="md"
    >
        Premium
    </ActionButton>
</header>
