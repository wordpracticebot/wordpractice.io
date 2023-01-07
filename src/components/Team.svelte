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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Facilisis mauris sit amet massa vitae tortor.",
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
                "Hi, I'm Someone, a moderator of the wordPractice Discord bot and server. My typing journey started around the new year of 2020 during Covid year of school, and the following Summer afterwards was when I joined the wordPractice server and began my journey with the bot. I am currently a very busy employed highschool student taking rigorous courses, but when I have time after studying I enjoy coding, typing, and sometimes simply doing nothing but exist because life gets hectic and tiring and I need time to reboot.",
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

<div class="my-14">
    <h1 class="text-center text-5xl font-bold text-zinc-50">Our Team</h1>
</div>

<div class="flex gap-3 justify-center">
    {#each teamMembers as member}
        <div class="px-7 py-5 bg-zinc-900 bg-opacity-70 rounded-lg text-center">
            <img
                src={member.image}
                alt={member.name}
                class="rounded-full w-32 mx-auto"
            />
            <h3 class="text-zinc-100 font-semibold text-xl mt-2">
                {member.name}
            </h3>
            <h4 class="text-zinc-400">{member.role}</h4>
            <!-- <p class="text-sm">{member.description}</p> -->
        </div>
    {/each}
</div>
