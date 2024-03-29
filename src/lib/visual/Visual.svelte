<script>
    import { onMount } from 'svelte'
    import '@scss/section/visual.scss'
    import { visualBall } from '@js/visual'
    import Bg from './Bg.svelte'
    import Svg from './Svg.svelte'
    import Scroll from './Scroll.svelte';

    onMount(() => {
        visualBall();
    })
</script>

<section class="visual">
    <Bg />
    <div class="visual_in">
        <Svg />
    </div>
    <Scroll />
    <div class="barba"></div>
</section>