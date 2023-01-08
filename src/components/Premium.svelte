<script lang="ts">
    import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";
    import MembershipCard from "../lib/MembershipCard.svelte";
</script>

<div class="mt-14">
    <div class="text-center">
        <h2
            class="text-2xl font-bold text-zinc-50 uppercase flex gap-2 items-center justify-center"
        >
            <div class="h-7 text-amber-400">
                <FaTrophy />
            </div>
            <span>Premium</span>
        </h2>
        <h1 class="text-5xl font-bold text-zinc-50 mt-3.5 mb-6">
            Level up your typing skills
        </h1>
        <p class="text-zinc-400">
            Support the continuous development of wordPractice and receive some
            cool perks.
        </p>
    </div>
    <div
        class="flex content-center items-center mt-12 lg:flex-row flex-col lg:gap-0 gap-5"
    >
        <MembershipCard
            name="Light"
            price="2.99"
            benefits={[
                "Premium icon on your profile",
                "Save and view up to 100 tests",
                "Create custom typing test themes",
                "Role on our Discord server",
            ]}
            colour="fuchsia"
            rounded="left"
            large={false}
        />
        <MembershipCard
            name="Premium +"
            price="9.99"
            benefits={[
                "Premium icon on your profile",
                "Save and view up to 500 tests",
                "Custom test pacers",
                "Create custom typing test themes",
                "Export test scores as CSV or JSON files",
                "Reduced command cooldowns",
                "Heatmap of typing accuracy",
                "Role on our Discord server",
            ]}
            colour="indigo"
            large={true}
        />
        <MembershipCard
            name="Premium"
            price="4.99"
            benefits={[
                "Premium icon on your profile",
                "Save and view up to 250 tests",
                "Custom test pacers",
                "Create custom typing test themes",
                "Export test scores as CSV or JSON files",
                "Reduced command cooldowns",
                "Role on our Discord server",
            ]}
            colour="amber"
            rounded="right"
            large={false}
        />
    </div>
</div>
