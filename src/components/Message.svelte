<script lang="ts">
    export let img: string;
</script>

<div class="">
    <img src={img} alt="profile" />
    <slot />
</div>
