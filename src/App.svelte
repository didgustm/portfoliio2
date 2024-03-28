<script>
    import { onMount } from 'svelte';
    import { scroll } from './assets/js/scroll';
    import '@scss/set/common.scss'
    import Quick from './lib/common/Quick.svelte'
    import Visual from './lib/visual/Visual.svelte';

    onMount(() => {
        scroll()
    })
</script>

<Quick />
<div class="pin">
    <Visual />
</div>