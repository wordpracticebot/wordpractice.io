<script lang="ts">
    export let img: string;
    export let name: string;
</script>

<div class="flex gap-3">
    <img src={img} alt="profile" class="w-12 h-12 rounded-full" />
    <div class="grow">
        <h3>{name}</h3>
        <slot />
    </div>
</div>
