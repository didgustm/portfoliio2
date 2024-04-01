<script>
    import Fa from 'svelte-fa'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<ul class="list">
    <li class="list01">
        <span class="img">
            <Fa icon={faEnvelope} size="4x" />
        </span>
        <dl>
            <dt>Email</dt>
            <dd><a href="">didgustm12@naver.com</a></dd>
        </dl>
    </li>
    <li class="list02">
        <span class="img">
            <Fa icon={faGithub} size="4x" />
        </span>
        <dl>
            <dt>Github</dt>
            <dd><a href="">https://github.com/didgustm?tab=repositories</a></dd>
        </dl>
    </li>
    <li class="list03">
        <span class="img">
            <Fa icon={faInstagram} size="4x" />
        </span>
        <dl>
            <dt>Instagram</dt>
            <dd><a href="">https://www.instagram.com/jegalryanghyun/</a></dd>
        </dl>
    </li>
</ul>