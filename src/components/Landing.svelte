<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import gsap, { Sine, Power3 } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";

    import Clock1 from "../assets/clock1.svelte";
    import Dart from "../assets/dart.svelte";
    import PersonRunning from "../assets/person_running.svelte";
    import PersonWalking from "../assets/person_walking.svelte";
    import X from "../assets/x.svelte";
    import Numbers from "../assets/numbers.svelte";
    import Timer from "../assets/timer.svelte";
    import EarthAmericas from "../assets/earth_americas.svelte";
    import Xp from "../assets/xp.svelte";

    import DiscordWindow from "./DiscordWindow.svelte";

    import Message from "../lib/Message.svelte";
    import Embed from "../lib/Embed.svelte";

    interface Feature {
        img: string;
        alt: string;
        title: string;
        description: string;
    }

    const features: Feature[] = [
        {
            img: "images/achievements.png",
            title: "Fun and Engaging",
            alt: "wordpractice achievements command",
            description:
                "Get motivated to improve your typing speed with our fun achievements, daily challenges and tournaments.",
        },
        {
            img: "images/profile2.png",
            title: "Detailed Statistics",
            alt: "wordpractice profile command",
            description:
                "Save hundreds of test scores and track your progress with our detailed statistics and graphs.",
        },
        {
            img: "images/leaderboard.png",
            title: "Competitive",
            alt: "wordpractice leaderboard command",
            description:
                "Our bot features a real-time leaderboard where you can compete with users from around the world. You can also challenge your friends by creating a private race and seeing who can type the fastest.",
        },
        {
            img: "images/test.png",
            title: "Fully Customizable",
            alt: "wordpractice typing test command",
            description:
                "Customize your typing experience to suit your preferences: change your test theme, add a pacer, change the language or adjust the difficulty level to challenge yourself. ",
        },

        {
            img: "images/profile1.png",
            title: "Build Your Profile",
            alt: "wordpractice profile command",
            description:
                "Track your progress and showcase your skill on your profile. Collect badges and trophies through the monthly season and show off your high scores, daily streak and leaderboard rankings.",
        },
    ];

    const botInviteLink =
        "https://discord.com/oauth2/authorize?client_id=743183681182498906&scope=bot+applications.commands&permissions=412317248576&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FDHnk46C";
    const serverInviteLink = "https://discord.gg/DHnk46C";

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    onMount(() => {
        // Typing effect
        gsap.to("#text", {
            text: "The Typing Discord Bot",
            duration: 1.75,
            delay: 0.2,
            ease: Sine.easeInOut,
        });
        gsap.to("#cursor", {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.45,
            delay: 2.2,
            ease: Power3.easeInOut,
        });

        // Discord Window
        gsap.to("#window", {
            scrollTrigger: {
                trigger: "#window",
                start: "top top",
                end: "bottom+=1900 center",
                pin: "#window",
                scrub: true,
                // markers: true,
            },
        });

        gsap.from("#windowTitle", {
            opacity: 0,
            display: "none",
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            scrollTrigger: {
                trigger: "#window",
                start: "top top",
                end: "bottom+=1400 top",
                scrub: true,
                // markers: true,
            },
        });

        // Blurred Test Image
        gsap.to("#loading", {
            opacity: 1,
            scrollTrigger: {
                trigger: "#loading",
                start: "bottom bottom",
                end: "bottom center",
                scrub: true,
                // markers: true,
            },
        });

        const countdown = ["3", "2", "1", "GO"];

        // Countdown
        countdown.forEach((n, i) => {
            gsap.to("#number", {
                opacity: 1,
                text: n,
                scrollTrigger: {
                    trigger: "#number",
                    start: `${i * 200} center`,
                    end: `${
                        Math.min(i + 1, countdown.length - 1) * 200
                    } center`,
                    scrub: true,
                    // markers: true,
                },
            });
        });

        // Removing the loading image
        // TODO: find better way to do this
        gsap.from("#loading", {
            display: "block",
            scrollTrigger: {
                trigger: "#number",
                start: "700 center",
                scrub: true,
                // markers: true,
            },
        });

        // Actual Test Image
        gsap.to("#test", {
            opacity: 1,
            display: "block",
            scrollTrigger: {
                trigger: "#number",
                start: "700 center",
                end: "800 center",
                scrub: true,
                // markers: true,
            },
        });

        // Typing
        gsap.to("#typing", {
            text: testWords,
            scrollTrigger: {
                trigger: "#number",
                start: "750 center",
                end: "1600 center",
                scrub: true,
                // markers: true,
            },
        });

        const changeNumber = () => {
            const seconds = (num.count + 1).toFixed();
            const plural = seconds === "1" ? "" : "s";
            numbers.innerHTML = `${seconds} second${plural} ago`;
        };

        let startCount = 0,
            num = { count: startCount };

        const numbers = document.getElementById("elapsedTime");

        // Elapsed Time
        gsap.timeline({
            scrollTrigger: {
                trigger: "#number",
                start: "850 center",
                end: "1600 center",
                scrub: true,
                // markers: true,
            },
        }).to(num, {
            count: 14,
            duration: 16,
            onUpdate: changeNumber,
        });

        // Removing text
        gsap.to("#typing", {
            opacity: 1,
            text: "|",
            scrollTrigger: {
                trigger: "#typing",
                start: "1550 center",
                scrub: true,
                // markers: true,
            },
        });

        // Test Results
        gsap.to("#results", {
            opacity: 1,
            display: "block",
            scrollTrigger: {
                trigger: "#typing",
                start: "1550 center",
                end: "1950 center",
                scrub: true,
                // markers: true,
            },
        });

        // Scroll Indicator
        gsap.to("#mouse", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#mouse",
                start: "top bottom-=100",
                end: "bottom bottom-=100",
                scrub: true,
                // markers: true,
            },
        });

        const featureElements = gsap.utils.toArray(".feature");

        featureElements.forEach((text: string) => {
            gsap.from(text, {
                opacity: 0,
                y: 60,
                scrollTrigger: {
                    trigger: text,
                    start: "top center+=200",
                    end: "bottom center+=200",
                    // markers: true,
                },
            });
        });
    });

    // Prevents scrolltrigger from breaking on page change
    onDestroy(() => {
        ScrollTrigger.getAll().forEach((ST) => ST.kill());
    });

    const testWords =
        "know out small on face old more since plan how nation because general for after fact feel many man help if each seem not can hand such off during move";
</script>

<div
    class="w-10 h-16 border-[3px] border-zinc-400 rounded-3xl fixed z-20 bottom-3 left-1/2 before:w-3 before:h-3 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-100 before:rounded-full before:animate-wheel"
    id="mouse"
/>
<!-- Hero section -->
<div class="text-center max-w-4xl mx-auto my-16 md:my-20 lg:my-24">
    <h1
        class="text-5xl md:text-6xl lg:text-[4.7rem] font-bold text-zinc-50 mb-8"
        aria-label="The Typing Discord Bot"
    >
        <span id="text" />
        <span id="cursor">_</span>
    </h1>
    <p class="text-zinc-400 text-lg md:text-2xl mb-8">
        Practice your typing skills while having fun: compete with typists from
        around the world, complete achievements, earn badges and much more.
    </p>
    <div class="flex gap-4 justify-center flex-col sm:flex-row w-3/4 mx-auto">
        <a
            href={botInviteLink}
            class="bg-primary shadow-primary/20 px-10 py-3.5 text-xl hidden lg:flex items-center justify-center shadow-lg text-zinc-50 rounded-full hover:-translate-y-1 hover:brightness-125 transition-all duration-300"
        >
            Invite
        </a>
        <a
            href={serverInviteLink}
            class="bg-secondary shadow-secondary/20 px-10 py-3.5 text-xl hidden lg:block shadow-lg text-zinc-50 rounded-full hover:-translate-y-1 hover:brightness-125 transition-all duration-300 text-center"
        >
            Join Community
        </a>
    </div>
</div>

<!-- Typing test demo -->
<div
    class="fixed z-50 right-0 top-0 md:right-5 md:top-11 bg-indigo-500 max-w-lg p-6 rounded-md shadow-xl shadow-zinc-800/30 text-white"
    id="windowTitle"
>
    <h2 class="text-2xl md:text-3xl font-semibold">
        Practice Typing on Discord
    </h2>
    <p class="mt-2">
        Improve your typing skills right from your Discord server.
    </p>
</div>
<DiscordWindow>
    <div id="loading" class="opacity-0 hidden">
        <Message img="https://i.imgur.com/BIzs17V.png" name="wordPractice">
            <Embed title="Principle#0853 | Medium Dictionary Test (30 words)">
                <div slot="content" class="text-sm">
                    <span class="text-white font-bold">Pacer:</span>
                    <span class="text-zinc-200">None</span>
                </div>
                <div
                    class="text-center grid place-items-center bg-zinc-50 h-full"
                    slot="thumbnail"
                >
                    <span id="number" class="text-3xl font-semibold" />
                </div>
                <div slot="image" class="relative text-lg">
                    <div
                        class="break-words bg-theme-secondary text-theme-primary px-3 py-1.5 blur-sm"
                    >
                        {testWords}
                    </div>
                    <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-theme-primary"
                    >
                        Ready?
                    </div>
                </div>
            </Embed>
        </Message>
    </div>

    <div id="test" class="opacity-0 hidden">
        <Message img="https://i.imgur.com/BIzs17V.png" name="wordPractice">
            <Embed title="Principle#0853 | Medium Dictionary Test (30 words)">
                <div slot="content" class="text-sm mt-3">
                    <div>
                        <span class="text-white font-bold">Pacer:</span>
                        <span class="text-zinc-200">None</span>
                    </div>
                    <div>
                        <span class="text-white font-bold">Started:</span>
                        <span
                            class="p-0.5 bg-discord-400 text-zinc-200 rounded-sm"
                            id="elapsedTime"
                        >
                            1 second ago
                        </span>
                    </div>
                </div>
                <div slot="image">
                    <div
                        class="break-words bg-theme-secondary text-theme-primary px-3 py-1.5 text-lg"
                    >
                        {testWords}
                    </div>
                </div>
            </Embed>
        </Message>
    </div>

    <div id="results" class="opacity-0 hidden">
        <Message img="https://i.imgur.com/BIzs17V.png" name="wordPractice">
            <Embed>
                <img
                    class="h-full"
                    slot="thumbnail"
                    src="https://i.imgur.com/l9sLfQx.png"
                    alt="clipboard"
                />
                <div slot="title">
                    <span>Typing Test Results</span>
                    <br />
                    <br />
                    <span
                        class="bg-discord-800 p-1 rounded-md font-normal tracking-wider"
                    >
                        Statistics
                    </span>
                </div>
                <div slot="content">
                    <div
                        class="grid justify-between grid-cols-3 gap-x-5 gap-y-3 mt-3 text-sm pr-16"
                    >
                        <!-- prettier-ignore -->
                        {#each [
                            { icon: PersonWalking, name: "Wpm", value: "118.37" }, 
                            { icon: PersonRunning, name: "Raw Wpm", value: "122.45" }, 
                            { icon: Dart, name: "Accuracy", value: "96.67%" }, 
                            { icon: Clock1, name: "Time", value: "14.7s" }, 
                            { icon: Xp, name: "Experience", value: "291 (2,175 total)" }, 
                            { icon: X, name: "Mistakes", value: "4" },
                        ] as { icon, name, value }}
                            <div>
                                <h5
                                    class="text-zinc-50 font-semibold flex gap-1 items-center"
                                >
                                    <div class="h-5 w-5 hidden sm:block">
                                        <svelte:component this={icon} />
                                    </div>
                                    <div>{name}</div>
                                </h5>
                                <p class="text-zinc-300">
                                    {value}
                                </p>
                            </div>
                        {/each}
                        <div class="col-span-full">
                            <br />
                            <h5 class="text-zinc-50 font-semibold">
                                Word History
                            </h5>
                            <!-- prettier-ignore -->
                            <p class="text-zinc-300 pl-3 border-l-2 border-discord-400">
                                point lead want as order
                                <span class="line-through">must</span>
                                <span class="font-bold">(must)</span>
                                end
                                <span class="underline">muc hleave</span>
                                large give turn last fact way thing find
                                <span class="line-through">preesnt</span>
                                <span class="font-bold">(present)</span>
                                it into year little use now from keep
                                mean not play home
                            </p>
                        </div>
                        <div class="col-span-full">
                            <br />
                            <div
                                class="bg-discord-800 p-1.5 w-full rounded-md font-normal tracking-wider text-base text-theme-primary mb-1"
                            >
                                Test Settings
                            </div>
                        </div>
                        <!-- prettier-ignore -->
                        {#each [
                            { icon: EarthAmericas, name: "Language", value: "English" }, 
                            { icon: Timer, name: "Pacer", value: "None" }, 
                            { icon: Numbers, name: "Words", value: "30 (150 chars)" }, 
                        ] as { icon, name, value }}
                            <div>
                                <h5
                                    class="text-zinc-50 font-semibold flex gap-1 items-center"
                                >
                                    <div class="h-5 w-5 hidden sm:block">
                                        <svelte:component this={icon} />
                                    </div>
                                    <div>{name}</div>
                                </h5>
                                <p class="text-zinc-300">
                                    {value}
                                </p>
                            </div>
                        {/each}
                    </div>
                </div>
            </Embed>
        </Message>
    </div>
</DiscordWindow>

{#each features as feature, i}
    {@const imageLeft = i % 2 === 0}
    <div
        class="feature my-24 lg:my-36 grid lg:grid-cols-7 gap-8 lg:gap-16 text-center lg:text-left lg:w-full md:w-[600px] w-full mx-auto"
    >
        <h2 class="text-white text-4xl sm:text-[2.75rem] font-bold lg:hidden">
            {feature.title}
        </h2>
        <img
            src={feature.img}
            alt={feature.alt}
            class="max-w-[400px] md:max-w-[475px] w-full rounded-lg mx-auto {imageLeft
                ? 'lg:col-span-3'
                : 'lg:col-span-4 lg:order-1'}"
        />

        <div
            class="flex flex-col justify-center {imageLeft
                ? 'lg:col-span-4'
                : 'lg:col-span-3'}"
        >
            <h2
                class="text-white text-4xl sm:text-[2.75rem] font-bold hidden lg:block"
            >
                {feature.title}
            </h2>
            <p class="text-zinc-400 lg:mt-10 text-lg">{feature.description}</p>
        </div>
    </div>
{/each}

<div class="h-screen flex sticky top-0" id="prompt">
    <div class="m-auto flex flex-col items-center text-center">
        <h2 class="text-white text-5xl font-semibold mb-5">
            Ready to Start Typing?
        </h2>
        <p class="text-zinc-400 mb-5 text-lg">
            What are you waiting for? Invite our bot to your server and start
            typing away!
        </p>
        <a
            href={botInviteLink}
            class="bg-primary shadow-primary/20 px-10 py-3.5 text-xl hidden lg:block shadow-lg text-zinc-50 rounded-full hover:-translate-y-1 hover:brightness-125 transition-all duration-300 text-center"
        >
            Add to Discord
        </a>
    </div>
</div>
