<script>
    import isabang3 from '@img/thumnail/isabang3.jpg'
    import fasttrack from '@img/thumnail/fasttrack.jpg'
    import evlabs from '@img/thumnail/evlabs.jpg'
    import { register } from 'swiper/element/bundle'
    import Fa from 'svelte-fa'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

    register();
</script>

<div class="grid">
    <swiper-container
        slides-per-view={`auto`}
        space-between={40}
        speed={700}
        scrollbar={true}
    >
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ isabang3 }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">이사방3</p>
                    <p class="hide_txt coment">리얼 이사 매칭 비교견적 서비스</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ fasttrack }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">패스트트랙</p>
                    <p class="hide_txt coment">리스/렌트 즉시출고 견적 서비스</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ evlabs }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">EV LABS</p>
                    <p class="hide_txt coment">수익형 EV 재테크 사업</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ isabang3 }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">이사방3</p>
                    <p class="hide_txt coment">리얼 이사 매칭 비교견적 서비스</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ fasttrack }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">패스트트랙</p>
                    <p class="hide_txt coment">리스/렌트 즉시출고 견적 서비스</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        <swiper-slide>
            <button class="box">
                <div class="img">
                    <img src="{ evlabs }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">EV LABS</p>
                    <p class="hide_txt coment">수익형 EV 재테크 사업</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
    </swiper-container>
</div>