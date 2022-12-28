<script lang="ts">
    import Router from "svelte-spa-router";

    import Landing from "./components/Landing.svelte";
    import Team from "./components/Team.svelte";

    import Navbar from "./components/Navbar.svelte";
    import Footer from "./components/Footer.svelte";

    const routes = {
        "/": Landing,
        "/team": Team,
    };
</script>

<Navbar />

<main>
    <Router {routes} />
</main>

<Footer />

<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
