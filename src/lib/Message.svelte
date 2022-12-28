<script lang="ts">
    export let img: string;
    export let name: string;
</script>

<div class="flex gap-3 w-max">
    <img src={img} alt="profile" class="w-8 h-8 md:w-12 md:h-12 rounded-full" />
    <div class="grow">
        <h3>{name}</h3>
        <div class="bg-neutral-700 rounded-lg p-4">
            <slot />
        </div>
    </div>
</div>
