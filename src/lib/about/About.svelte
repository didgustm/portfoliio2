<script>
    import '@scss/section/about.scss'
    import Title from './Title.svelte'
    import Info from './Info.svelte'
    import Career from './Career.svelte'
    import Skills from './Skills.svelte';
</script>

<section class="about">
    <div class="inner">
        <div class="top">
            <div>
                <Title />
                <Info />    
            </div>
            <Career />
        </div>
        <Skills />
    </div>
</section>