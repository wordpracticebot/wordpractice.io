<script lang="ts">
    import toast from "svelte-french-toast";
    import { bind } from "svelte-simple-modal";
    import { writable } from "svelte/store";

    import Modal from "../lib/Modal.svelte";
    import Popup from "../lib/Popup.svelte";

    const modal = writable(null);

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

    const getSubStatus = (s: Subscription) => {
        return s.expired ? "Expired" : s.activated_by ? "Active" : "Unclaimed";
    };

    const getDateFromUnixTime = (unixTime: number) => {
        const date = new Date(unixTime * 1000);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }).format(date);
    };

    const viewSub = (s: Subscription) => {
        modal.set(
            // @ts-ignore
            bind(Popup, {
                title: `Transaction ${s._id}`,
                content: [
                    `Email: ${s.email}`,
                    `Name: ${s.name}`,
                    `Tier: ${s.tier}`,
                    `Price: $${s.amount}`,
                    `Expire Time: ${getDateFromUnixTime(s.expire_time)}`,
                ],
            })
        );
    };
</script>

<Modal {modal} />

<div class="my-14 text-center">
    <h1 class="text-5xl font-bold text-zinc-50 mb-6">Subscriptions</h1>
</div>

{#if subs === null}
    <p class="text-2xl text-zinc-300 text-center">
        Please login to view your subscriptions!
    </p>
{:else}
    <table
        class="mx-auto max-w-max text-sm text-left text-zinc-300 rounded-md overflow-hidden hidden lg:block shadow-md"
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
                        <th scope="row" class="px-6 py-4 font-medium">
                            {s._id}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium">
                            {s.tier}
                        </th>
                        <td class="px-6 py-4">
                            {getDateFromUnixTime(s.expire_time)}
                        </td>
                        <td class="px-6 py-4">${s.amount}</td>
                        <td
                            class="px-6 py-4 {s.activated_by &&
                                !s.expired &&
                                'text-green-300'}"
                        >
                            {getSubStatus(s)}
                        </td>
                        <td class="px-6 py-4">
                            {#if s.activated_by || s.expired}
                                <button
                                    class="w-full py-2 px-3 bg-zinc-600 rounded-md hover:bg-zinc-500 transition-colors"
                                    on:click={() => viewSub(s)}
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

    <div class="lg:hidden overflow-hidden rounded-md">
        {#each subs as s}
            <div
                class="flex justify-between gap-4 bg-zinc-850 p-5 items-center"
            >
                <div>
                    <div class="flex gap-5 text-zinc-50 items-center mb-1.5">
                        <h4 class="font-semibold text-lg">{s.tier}</h4>
                        <div
                            class="px-2 py-1 text-sm rounded-full 
                                {s.expired
                                ? 'bg-zinc-600'
                                : s.activated_by
                                ? 'bg-green-600'
                                : 'bg-amber-500'}
                            "
                        >
                            {getSubStatus(s)}
                        </div>
                    </div>
                    <p class="text-zinc-300">{s._id}</p>
                    <p class="text-zinc-300">
                        Until {getDateFromUnixTime(s.expire_time)}
                    </p>
                </div>
                <div>
                    {#if s.activated_by || s.expired}
                        <button
                            class="py-2 px-3 bg-zinc-600 rounded-md hover:bg-zinc-500 transition-colors text-zinc-50"
                            on:click={() => viewSub(s)}
                        >
                            View
                        </button>
                    {:else}
                        <button
                            class="py-2 px-3 bg-primary rounded-md hover:brightness-125 transition-all text-zinc-50"
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
                </div>
            </div>
        {/each}
    </div>
{/if}
