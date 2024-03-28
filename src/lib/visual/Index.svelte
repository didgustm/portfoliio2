<script>
    import { onMount } from 'svelte'
    import '@scss/section/visual.scss'
    import { visualBall } from '@js/visual'
    import Svg from "./Svg.svelte";

    onMount(() => {
        visualBall();
    })
</script>

<section class="visual">
    <div class="visual_in">
        <Svg />
    </div>
</section>