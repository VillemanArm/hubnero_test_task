<script>
import NavLink from '@/components/NavPanel/NavLink'

export default {
    components: { NavLink },
}
</script>

<template>
    <div class="nav">
        <div class="nav__block">
            <div class="nav-logo">
                <a href="/works/hubnero_test_task" class="nav-logo__img">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_6161)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.18418 0C0.976328 0 0 0.976347 0 2.18418V20H17.8158C19.0236 20 20 19.0237 20 17.8158V0H2.18418ZM2.76798 3.70409C2.76798 3.18067 3.19072 2.768 3.70407 2.768H7.7101C8.2335 2.768 8.49521 3.40213 8.12279 3.77455L3.77453 8.12281C3.4021 8.49524 2.76798 8.23352 2.76798 7.71012V3.70409ZM17.232 16.296C17.232 16.8194 16.8092 17.232 16.2959 17.232H12.2899C11.7665 17.232 11.5048 16.5979 11.8772 16.2255L16.2254 11.8772C16.5979 11.5048 17.232 11.7665 17.232 12.2899V16.296ZM17.232 8.03224C17.232 10.0554 15.5913 11.686 13.5782 11.686H7.63963L7.62957 15.0478C7.62957 16.2456 6.65322 17.222 5.45545 17.222L2.76798 17.222V11.9477C2.76798 9.92455 4.40866 8.29396 6.42172 8.29396H12.3603L12.3704 4.93212C12.3704 3.73433 13.3467 2.75798 14.5445 2.75798L17.232 2.75796V8.03224Z"
                                fill="#8F20EF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_6161">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </a>
            </div>
            <div class="nav-links">
                <NavLink v-for="(link, index) in $store.state.nav.links" :key="index" :to="link.link" :link="link" />
            </div>
        </div>

        <div class="nav-add">
            <button type="button" class="nav-add__button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V14" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 10H6" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .nav
        min-height: 100vh
        display: grid
        align-content: space-between 

    .nav-logo
        height: 76rem
        display: flex
        justify-content: center
        align-items: center

    .nav-logo__img
        width: 20rem
        height: 20rem

    .nav-add
        height: 76rem
        width: 100%
        display: flex
        align-items: center
        justify-content: center

        border-top: 2rem solid $light-grey

    .nav-add__button
        width: 20rem
        height: 20rem
        display: block

        box-sizing: border-box

        background-color: $background-color
        border: none
        border-radius: 6rem

        & svg
            width: 20rem
            height: 20rem

        &:hover
            background-color: $accent-color

            & svg
                stroke: $block-background-color

</style>