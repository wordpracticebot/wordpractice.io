<script lang="ts">
    import Landing from "./components/Landing.svelte";
    import Team from "./components/Team.svelte";
    import Premium from "./components/Premium.svelte";
    import Router, { link } from "svelte-spa-router";

    const routes = {
        "/": Landing,
        "/team": Team,
        "/premium": Premium,
    };
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

<main>
    <Router {routes} />
</main>

<footer>Copyright &copy; 2023 wordPractice</footer>

<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
