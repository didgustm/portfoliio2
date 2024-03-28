<script>
    import Fa from 'svelte-fa';
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="btn_top">
    <button>
        <span>
            <Fa 
                icon={ faChevronUp }
                size="1.5x"
            />
        </span>
        <svg class="line">
            <circle class="tail" r="28" cx="30" cy="30" stroke-width="3" stroke="#F05F75" fill="#fff" />
        </svg>
    </button>
</div>