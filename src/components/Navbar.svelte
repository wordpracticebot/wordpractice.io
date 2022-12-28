<script lang="ts">
    import { link } from "svelte-spa-router";
</script>

<header class="flex justify-between items-center py-8">
    <a href="/" use:link class="text-3xl text-zinc-50 font-bold">wordPractice</a
    >
    <nav class="flex text-zinc-300 text-lg justify-between gap-20">
        <a href="/" use:link>Home</a>
        <a href="/team" use:link>Team</a>
        <a href="https://discord.gg/DHnk46C">Support</a>
    </nav>
    <a
        href="/premium"
        use:link
        class="text-lg px-10 bg-primary text-zinc-50 py-3 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-1 hover:brightness-125 transition-all delay-75"
        >Premium
    </a>
</header>
