<script lang="ts">
    export let href: string;
    export let colour: "primary" | "secondary";
    export let size: "sm" | "md" | "lg" = "md";

    let text = size == "sm" ? "text-md" : size === "md" ? "text-lg" : "text-xl";
    let padding =
        size == "sm"
            ? "px-6 py-2"
            : size === "md"
            ? "px-9 py-3"
            : "px-10 py-3.5";

    let colours =
        colour == "primary"
            ? "bg-primary shadow-primary/20"
            : "bg-secondary shadow-secondary/20";
</script>

<a
    {href}
    rel="noreferrer"
    target="_blank"
    class="{text} {padding} {colours} shadow-lg text-zinc-50 rounded-full hover:-translate-y-1 hover:brightness-125 transition-all delay-75"
>
    <slot />
</a>
