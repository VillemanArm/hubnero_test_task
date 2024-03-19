<script>

export default  {
    components: {},
    props: {
        // propsTemplate: {
        //     type: Function,
        //     required: true,
        // },
        },
    data() {
        return {
        
        }
    },
    methods: {

    },
    //$route.path
}
</script>

<template>
    <header class="header">
        <div class="header__block">       
            <div class="header__menu">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="#2A355A" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.000999451" y="0.5" width="16" height="1" rx="0.5" fill="evenodd"/>
                    <rect x="0.000999451" y="5.5" width="16" height="1" rx="0.5" fill="evenodd"/>
                    <rect x="0.000999451" y="10.5" width="16" height="1" rx="0.5" fill="evenodd"/>
                </svg>
            </div>
            <div class="header__title">
                <h1>{{ $route.name[0].toUpperCase() +  $route.name.slice(1)}}</h1>
            </div>
        </div>
        <div class="header__block">
            <div class="header__search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0948 5.69849C15.1373 7.74093 15.1373 11.0524 13.0948 13.0948C11.0524 15.1373 7.74095 15.1373 5.6985 13.0948C3.65606 11.0524 3.65606 7.74093 5.6985 5.69849C7.74095 3.65605 11.0524 3.65605 13.0948 5.69849" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.8333 15.8333L13.0917 13.0917" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="header__notifications">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="#8591AE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.70801 16.344V16.709C5.70801 17.974 6.73401 19 8.00001 19V19C9.26601 19 10.292 17.974 10.292 16.708V16.343" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.83299 3.751V2.833C9.83299 1.821 9.01299 1 7.99999 1V1C6.98699 1 6.16699 1.821 6.16699 2.833V3.751" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.563 8.188V8.188C2.563 5.685 4.592 3.657 7.094 3.657H8.907C11.41 3.657 13.438 5.686 13.438 8.188V8.188V10.985C13.438 11.515 13.649 12.024 14.024 12.399L14.665 13.04C15.04 13.415 15.251 13.924 15.251 14.454V14.454C15.251 15.498 14.405 16.344 13.361 16.344H2.64C1.596 16.344 0.75 15.498 0.75 14.454V14.454C0.75 13.924 0.961 13.415 1.336 13.04L1.977 12.399C2.352 12.024 2.563 11.515 2.563 10.985V8.188Z" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div v-if="$store.state.header.isUnreadNotification" class="header__notifications-allert"></div>
            </div>
            <div class="header__user">
                <div class="header__user-avatar">
                    <img :src="$store.state.header.user.avatar" alt="avatar">
                </div>
                <div class="header__user-name">
                    {{$store.state.header.user.name}} {{$store.state.header.user.lastName}}
                </div>
                <div class="header__user-button">
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="#8591AE" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.952393 1.33334L4.28573 4.66668L7.61906 1.33334" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>

        
        </div>
    </header>

</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

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

    .header__menu svg:hover
        fill: $accent-color
                

    .header__title h1
        margin: 0

        font-weight: 500
        font-size: 22rem

    .header__search, .header__notifications
        & svg
            width: 24rem
            height: 24rem

            &:hover
                stroke: $accent-color

    .header__notifications
        position: relative

    .header__notifications-allert
        width: 12rem
        height: 12rem
        position: absolute
        z-index: 1
        top: 0
        right: 0

        background-color: $red
        border-radius: 50%
        border: 2px solid $block-background-color

    .header__user
        padding-left: 28rem
        display: flex
        align-items: center
        gap: 12rem

        border-left: 2px solid $light-grey
        cursor: pointer

        &:hover
            color: $accent-color

            & .header__user-button
                background-color: $accent-color

                & svg
                    stroke: $block-background-color


    .header__user-avatar
        width: 32rem
        height: 32rem

        & img
            border-radius: 8rem

    .header__user-name
        font-weight: 500
        font-size: 14rem

    .header__user-button
        width: 20rem
        height: 20rem
        display: flex
        align-items: center
        justify-content: center

        background-color: $background-color
        border-radius: 6rem

        

</style>