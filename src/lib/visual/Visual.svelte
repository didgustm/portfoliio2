<script>
    import { onMount } from 'svelte'
    import '@scss/section/visual.scss'
    import Fa from 'svelte-fa'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
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
    <div class="scroll">
        <p>Scroll Down</p>
        <Fa icon={ faChevronDown } size="sm" />
    </div>
    <div class="barba"></div>
</section>