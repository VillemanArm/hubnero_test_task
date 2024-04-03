<script>
import HeaderSearch from '@/components/HeaderPanel/HeaderSearch'
import HeaderMenu from '@/components/HeaderPanel/HeaderMenu'
import HeaderUser from '@/components/HeaderPanel/HeaderUser'

export default {
    components: { HeaderSearch, HeaderMenu, HeaderUser },
}

</script>

<template>
    <header class="header">
        <div class="header__block">
            <HeaderMenu />
            <div class="header__title">
                <h1>{{ $route.name[0].toUpperCase() + $route.name.slice(1) }}</h1>
            </div>
        </div>
        <div class="header__block">
            <HeaderSearch />
            <div class="header__notifications">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="#8591AE"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.70801 16.344V16.709C5.70801 17.974 6.73401 19 8.00001 19V19C9.26601 19 10.292 17.974 10.292 16.708V16.343"
                        stroke="evenodd" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M9.83299 3.751V2.833C9.83299 1.821 9.01299 1 7.99999 1V1C6.98699 1 6.16699 1.821 6.16699 2.833V3.751"
                        stroke="evenodd" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.563 8.188V8.188C2.563 5.685 4.592 3.657 7.094 3.657H8.907C11.41 3.657 13.438 5.686 13.438 8.188V8.188V10.985C13.438 11.515 13.649 12.024 14.024 12.399L14.665 13.04C15.04 13.415 15.251 13.924 15.251 14.454V14.454C15.251 15.498 14.405 16.344 13.361 16.344H2.64C1.596 16.344 0.75 15.498 0.75 14.454V14.454C0.75 13.924 0.961 13.415 1.336 13.04L1.977 12.399C2.352 12.024 2.563 11.515 2.563 10.985V8.188Z"
                        stroke="evenodd" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div v-if="$store.state.header.isUnreadNotification" class="header__notifications-alert"></div>
            </div>
            <HeaderUser />
        </div>
    </header>

</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .header
        display: flex
        align-items: center
        justify-content: space-between
        padding: 0 28rem

        background: linear-gradient(90deg, rgba(245,247,251,1) 0%, rgba(255,255,255,1) 5%)

        & svg
            cursor: pointer

    .header__block
        display: flex
        align-items: center
        gap: 28rem
                
    .header__title h1
        margin: 0

        font-weight: 500
        font-size: 22rem

    .header__notifications
        & svg
            width: 24rem
            height: 24rem

            &:hover
                stroke: $accent-color

    .header__notifications
        position: relative

    .header__notifications-alert
        width: 12rem
        height: 12rem
        position: absolute
        z-index: 1
        top: 0
        right: 0

        background-color: $red
        border-radius: 50%
        border: 2px solid $block-background-color


</style>