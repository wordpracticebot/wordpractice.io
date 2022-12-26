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
    <nav class="flex gap-20 text-zinc-300">
        <a href="/" use:link>Home</a>
        <a href="/about" use:link>Team</a>
        <a href="/premium" use:link>Premium</a>
    </nav>
    <button
        class="px-10 bg-primary text-zinc-50 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-1 hover:brightness-125 transition-all delay-75"
        >Invite</button
    >
</header>
<main>
    <Router {routes} />
</main>

<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
