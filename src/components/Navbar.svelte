<script lang="ts">
    import { link } from "svelte-spa-router";
    import ActionButton from "../lib/ActionButton.svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import { onMount } from "svelte";
    import gsap, { Expo } from "gsap";
    import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import FaAngleUp from "svelte-icons/fa/FaAngleUp.svelte";

    const barTl = gsap.timeline({ reversed: true });
    const gTl = gsap.timeline({ reversed: true });

    onMount(() => {
        barTl.set("#bar", {
            className:
                "fixed inset-0 z-10 bg-zinc-900 bg-opacity-80 flex backdrop-blur-lg flex-col justify-center items-center text-4xl gap-7 text-zinc-300",
        });
        barTl.set("#bar a", {
            y: 50,
            opacity: 0,
        });
        barTl.to("#bar", {
            duration: 0.3,
            ease: Expo.easeInOut,
        });
        barTl.to("#bar a", {
            duration: 0.4,
            opacity: 1,
            y: 10,
            stagger: 0.2,
            ease: Expo.easeInOut,
        });
    });

    const toggleNav = () => {
        // Checking if the hamburger nav is visible
        if (
            window
                .getComputedStyle(document.getElementById("toggle"))
                .getPropertyValue("display") === "none"
        )
            return;

        if (barTl.reversed()) {
            barTl.timeScale(1).reversed(false);
        } else {
            barTl.timeScale(1.25).reversed(true);
        }
    };

    const apiUrl = import.meta.env.VITE_API_URL;

    let token = localStorage.getItem("token");
    let userData = null;

    $: if (token === null) {
        userData = null;
    } else {
        fetch(`${apiUrl}/user?token=${token}`)
            .then((res) => res.json())
            .then((data) => (userData = data));
    }

    const toggleDropdown = () => {
        if (gTl.reversed()) {
            gTl.timeScale(1).reversed(false);
        } else {
            gTl.timeScale(1.25).reversed(true);
        }
    };

    let dropdown;

    const onWindowClick = (e) => {
        if (dropdown && dropdown.contains(e.target) == false) {
            gTl.timeScale(1.25).reversed(true);
        }
    };

    $: if (dropdown) {
        gTl.set("#opened", { display: "none" });
        gTl.set("#closed", { display: "block" });

        gTl.from("#dropdown", {
            opacity: 0,
            duration: 0.35,
            translateY: -28,
            display: "none",
            height: 0,
        });
    } else {
        gTl.clear();
    }
</script>

<svelte:window on:click={onWindowClick} />
<header class="flex justify-between items-center py-8">
    <a href="/" use:link>
        <span class="text-3xl text-zinc-50 font-bold hidden sm:block"
            >wordPractice</span
        >
        <img
            src="https://i.imgur.com/BIzs17V.png"
            alt="logo"
            class="h-14 rounded-full block sm:hidden"
        />
    </a>
    <nav
        class="text-zinc-300 text-lg justify-between gap-20 hidden opacity-0 lg:flex lg:opacity-100"
        id="bar"
    >
        <a href="/" use:link on:click={toggleNav}>Home</a>
        <a href="/team" use:link on:click={toggleNav}>Team</a>
        <a
            href="/premium"
            use:link
            on:click={toggleNav}
            class="text-amber-400 flex gap-2 items-center"
        >
            <div class="h-4">
                <FaTrophy />
            </div>
            Premium
        </a>
    </nav>
    {#if userData}
        <button
            bind:this={dropdown}
            class="relative flex gap-3 items-center text-zinc-100"
            on:click={toggleDropdown}
        >
            <img
                src="https://cdn.discordapp.com/avatars/{userData.id}/{userData.avatar}"
                alt="Avatar"
                class="w-9 h-9 rounded-full"
            />

            <div class="text-lg">
                {userData.name}
            </div>
            <div class="w-3.5">
                <div id="opened">
                    <FaAngleDown />
                </div>
                <div class="hidden" id="closed">
                    <FaAngleUp />
                </div>
            </div>

            <div
                class="absolute top-12 p-3 w-full bg-zinc-850 rounded-lg overflow-y-hidden text-left"
                id="dropdown"
            >
                <a
                    href="/profile"
                    use:link
                    class="rounded-md p-3 hover:bg-zinc-900 block transition-colors duration-300"
                >
                    Profile
                </a>
                <a
                    href="/subscriptions"
                    use:link
                    class="rounded-md p-3 hover:bg-zinc-900 block transition-colors duration-300"
                >
                    Subscriptions
                </a>
                <button
                    on:click={() => {
                        localStorage.removeItem("token");
                        token = null;
                    }}
                    class="w-full text-left rounded-md p-3 hover:bg-zinc-900 text-red-300 transition-colors duration-300"
                >
                    Logout
                </button>
            </div>
        </button>
    {:else}
        <ActionButton
            href="{apiUrl}/login"
            newPage={false}
            colour="primary"
            size="md"
            class="hidden lg:block"
        >
            Login
        </ActionButton>
    {/if}

    <button
        class="w-9 h-9 block lg:hidden text-zinc-200 z-50"
        aria-label="toggle navigation"
        id="toggle"
        on:click={toggleNav}
    >
        <FaBars />
    </button>
</header>
