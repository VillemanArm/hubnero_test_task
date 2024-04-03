<script>
import HeaderSearch from '@/components/HeaderPanel/HeaderSearch'
import HeaderMenu from '@/components/HeaderPanel/HeaderMenu'
import HeaderUser from '@/components/HeaderPanel/HeaderUser'
import NotificationsMenu from '@/components/HeaderPanel/NotificationsMenu'

export default {
    components: { HeaderSearch, HeaderMenu, HeaderUser, NotificationsMenu },
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
            <NotificationsMenu />
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

    


</style>