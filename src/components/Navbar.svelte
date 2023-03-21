<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import gsap, { Expo } from "gsap";

    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import FaAngleUp from "svelte-icons/fa/FaAngleUp.svelte";
    import MdExitToApp from "svelte-icons/md/MdExitToApp.svelte";
    import FaTimes from "svelte-icons/fa/FaTimes.svelte";

    const barTl = gsap.timeline({ reversed: true });
    const gTl = gsap.timeline({ reversed: true });

    onMount(() => {
        barTl.set("#bar", {
            className:
                "fixed inset-0 z-30 bg-zinc-900 bg-opacity-80 flex backdrop-blur-lg flex-col justify-center items-center text-4xl gap-7 text-zinc-300",
        });
        barTl.set("#bar > *", {
            y: 50,
            opacity: 0,
        });
        barTl.set("#open", {
            display: "none",
            duration: 0,
        });
        barTl.to("#close", {
            display: "block",
            duration: 0,
        });
        barTl.to("#bar", {
            duration: 0.3,
            ease: Expo.easeInOut,
        });
        barTl.to("#bar > *", {
            duration: 0.35,
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
            barTl.reversed(true).time(0);
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

    const logout = () => {
        localStorage.removeItem("token");
        token = null;
        window.location.href = "/";
    };
</script>

<svelte:window on:click={onWindowClick} />
<header class="flex justify-between items-center py-8">
    <a href="/" use:link>
        <span class="text-3xl text-zinc-50 font-bold hidden sm:block">
            wordPractice
        </span>
        <img
            src="https://i.imgur.com/BIzs17V.png"
            alt="logo"
            class="h-12 rounded-full block sm:hidden"
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
            <div class="h-5 w-5 lg:h-4 lg:w-4">
                <FaTrophy />
            </div>
            Premium
        </a>
        <div class="lg:hidden">
            <a
                href="{apiUrl}/login"
                on:click={toggleNav}
                class="flex gap-2 items-center lg:hidden text-zinc-50
                {userData ? 'hidden' : ''}"
            >
                <div class="h-9">
                    <MdExitToApp />
                </div>
                Login
            </a>
            <button
                on:click={logout}
                on:click={toggleNav}
                class="flex gap-2 items-center lg:hidden text-zinc-50 
                {!userData ? 'hidden' : ''}"
            >
                <div class="h-9">
                    <MdExitToApp />
                </div>
                Logout
            </button>
        </div>
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
            <div class="w-3.5 h-3.5">
                <div id="opened">
                    <FaAngleDown />
                </div>
                <div class="hidden" id="closed">
                    <FaAngleUp />
                </div>
            </div>

            <div
                class="absolute top-12 p-3 w-full bg-zinc-850 rounded-lg text-zinc-300 overflow-y-hidden text-left shadow-md"
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
                    on:click={logout}
                    class="w-full text-left rounded-md p-3 hover:bg-zinc-900 text-red-300 transition-colors duration-300"
                >
                    Logout
                </button>
            </div>
        </button>
    {:else}
        <a
            href="{apiUrl}/login"
            class="bg-primary shadow-primary/20 px-9 py-3 text-lg hidden lg:block shadow-lg text-zinc-50 rounded-full hover:-translate-y-1 hover:brightness-125 transition-all duration-300 text-center"
        >
            Login
        </a>
    {/if}

    <button
        class="w-9 h-9 block lg:hidden text-zinc-200 z-50"
        aria-label="toggle navigation"
        id="toggle"
        on:click={toggleNav}
    >
        <div id="open">
            <FaBars />
        </div>
        <div id="close" class="hidden">
            <FaTimes />
        </div>
    </button>
</header>
