<script lang="ts">
    import toast from "svelte-french-toast";

    const apiUrl = import.meta.env.VITE_API_URL;

    interface Subscription {
        _id: string;
        email: string;
        name: string;
        tier: string;
        amount: number;
        first_time: boolean;
        activated_by: string | null;
        expired: boolean;
        expire_time: number;
    }

    let token = localStorage.getItem("token");
    let subs: Subscription[] = null;

    const fetchSubs = () => {
        fetch(`${apiUrl}/subs?token=${token}`)
            .then((res) => res.json())
            .then((data) => (subs = data));
    };

    $: if (token === null) {
        subs = null;
    } else {
        fetchSubs();
    }

    const activateSub = async (subID: string) => {
        const res = await fetch(`${apiUrl}/activate/${subID}?token=${token}`, {
            method: "POST",
        });

        // Refetching subscriptions
        fetchSubs();

        if (res.status !== 200) throw new Error("Something went wrong");
    };
</script>

<div class="my-14 text-center">
    <h1 class="text-5xl font-bold text-zinc-50 mb-6">Subscriptions</h1>
</div>

{#if subs === null}
    <p class="text-2xl text-zinc-300 text-center">
        Please login to view your subscriptions!
    </p>
{:else}
    <table
        class="w-full text-sm text-left text-zinc-300 rounded-md overflow-hidden"
    >
        <thead class="text-xs text-zinc-50 uppercase bg-zinc-900">
            <tr>
                <th scope="col" class="px-6 py-3">ID</th>
                <th scope="col" class="px-6 py-3">Type</th>
                <th scope="col" class="px-6 py-3">Expiry Date</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3" />
            </tr>
        </thead>
        <tbody>
            {#if subs.length === 0}
                <tr class="bg-zinc-850">
                    <td class="px-6 py-4" colspan="6">
                        You have no subscriptions.
                    </td>
                </tr>
            {:else}
                {#each subs as s}
                    <tr class="bg-zinc-850">
                        <th scope="row" class="px-6 py-4 font-medium"
                            >{s._id}</th
                        >
                        <th scope="row" class="px-6 py-4 font-medium"
                            >{s.tier}</th
                        >
                        <td class="px-6 py-4">
                            {new Date(s.expire_time * 1000).toDateString()}
                        </td>
                        <td class="px-6 py-4">${s.amount}</td>
                        <td class="px-6 py-4">
                            {s.expired
                                ? "Expired"
                                : s.activated_by
                                ? "Active"
                                : "Unclaimed"}
                        </td>
                        <td class="px-6 py-4">
                            {#if s.activated_by || s.expired}
                                <button
                                    class="w-full py-2 px-3 bg-zinc-600 rounded-md hover:bg-zinc-500 transition-colors"
                                >
                                    View
                                </button>
                            {:else}
                                <button
                                    class="w-full py-2 px-3 bg-primary rounded-md hover:brightness-125 transition-all text-zinc-50"
                                    on:click={() =>
                                        toast.promise(activateSub(s._id), {
                                            loading: "Loading...",
                                            success: "Activated subscription!",
                                            error: "Failed to activate sibscription",
                                        })}
                                >
                                    Activate
                                </button>
                            {/if}
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
{/if}
