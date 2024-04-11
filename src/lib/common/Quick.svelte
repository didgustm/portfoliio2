<script>
    import '@scss/section/quick.scss'
    import Fa from 'svelte-fa'
    import { faHouse, faUser, faListUl, faMessage } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="quick">
    <svg class="line">
        <path
            d="M20,2 L42,2 Q59,2 59,20 L59,208 Q59,225 42,225 L20,225 Q2,225 2,208 L2,20 Q2,2 20,2"
            fill="rgba(255,255,255,.5)"
            stroke="#ED6075"
            stroke-width="4"
            class="tail"
        />
    </svg>
    <nav>
        <ul>
            <li>
                <a href="">
                    <Fa icon={ faHouse } size="1.2x" />
                </a>
                <div class="balloon">Home</div>
            </li>
            <li>
                <a href="">
                    <Fa icon={ faUser } size="1.2x" />
                </a>
                <div class="balloon">About</div>
            </li>
            <li>
                <a href="">
                    <Fa icon={ faListUl } size="1.2x" />
                </a>
                <div class="balloon">Portfolio</div>
            </li>
            <li>
                <a href="">
                    <Fa icon={ faMessage } size="1.2x" />
                </a>
                <div class="balloon">Contact</div>
            </li>
        </ul>
    </nav>
</div>