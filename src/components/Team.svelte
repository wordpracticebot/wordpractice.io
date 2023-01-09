<script lang="ts">
    interface TeamMember {
        name: string;
        role: string;
        image: string;
        description: string;
    }

    const teamMembers = [
        {
            name: "Principle#0853",
            role: "Developer / Vector Art",
            image: "https://i.imgur.com/Z4QEDUE.png",
            description:
                "Hello, I am the developer of wordPractice. I started this project during the pandemic as a way to explore my interest in typing. When I first began working on it, I was still learning how to code, so the initial version was very basic. However, as my coding skills improved, so did the bot, becoming what it is today. Outside of coding, like playing table tennis, rowing and sleeping in my free time.",
        },
        {
            name: "Harold#2398",
            role: "Art / Ideas",
            image: "https://i.imgur.com/osX1ED9.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Facilisis mauris sit amet massa vitae tortor.",
        },
        {
            name: "someone#9878",
            role: "Ideas / Moderation",
            image: "https://i.imgur.com/AWaP4Ki.png",
            description:
                "Hi, I'm Someone, my typing journey started around the new year of 2020 during Covid year of school, and the following Summer afterwards was when I joined the wordPractice server and began my journey with the bot. I am currently a very busy employed highschool student taking rigorous courses, but when I have time after studying I enjoy coding, typing, and sometimes simply doing nothing but exist because life gets hectic and tiring and I need time to reboot.",
        },
        {
            name: "Berny#2366",
            role: "Helper",
            image: "https://i.imgur.com/Ro2m4Ag.png",
            description:
                "Hello, I am Berny (known to others as syrupsandwich). I’ve been practicing typing for about 5 years now, ever since 6th grade. As a 15 year old sophomore, I also enjoy eating ramen, playing the trumpet, and playing/watching volleyball. I joined the WordPractice community in October of 2021 and have been active within it ever since.",
        },
        {
            name: "blitzen#4768",
            role: "Helper",
            image: "https://i.imgur.com/y6jen33.png",
            description:
                "Yooooo it's Blitzen here; some of my interests include playing basketball, watching movies, and of course...typing! In Grade 5 (11 years old at the time), I was first introduced to typing when our school had a friendly typing competition between my peers and me. I've been with the wordPractice Community since the beginning and it's honestly just amazing to see the bot grow and expand.",
        },
    ];
</script>

<div class="my-14 text-center">
    <h1 class="text-5xl font-bold text-zinc-50 mb-6">Our Team</h1>
    <p class="text-zinc-400">Everyone who helps make this bot possible.</p>
</div>

<div class="flex gap-4 justify-center flex-wrap">
    {#each teamMembers as member}
        <div
            class="grid place-items-center shadow-lg hover:block px-5 py-1 bg-zinc-850 rounded-lg text-center grow-0 h-64 basis-72 group hover:scale-125 hover:bg-zinc-900 transition-transform duration-300"
        >
            <div>
                <img
                    src={member.image}
                    alt={member.name}
                    class="rounded-full w-32 mx-auto group-hover:hidden"
                />
                <h3
                    class="text-zinc-100 font-semibold text-2xl mt-3 group-hover:mb-1 group-hover:text-xl"
                >
                    {member.name}
                </h3>
                <h4 class="text-zinc-400 group-hover:hidden">{member.role}</h4>
                <p class="text-xs text-zinc-400 hidden group-hover:block">
                    {member.description}
                </p>
            </div>
        </div>
    {/each}
</div>
