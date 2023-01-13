<script lang="ts">
    import Modal from "svelte-simple-modal";

    export let modal;
</script>

<Modal
    show={$modal}
    styleWindow={{ backgroundColor: "#1e1e21" }}
    styleCloseButton={{ boxShadow: "none" }}
/>
