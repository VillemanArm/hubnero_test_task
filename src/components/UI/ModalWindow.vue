<script>
import { X } from "lucide-vue"

export default {
    components: { X },
    props: {
        header: {
            type: String,
        },
        close: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden'
    },
    unmounted() {
        document.body.style.overflow = 'auto'
    }
}
</script>

<template>
    <div class="modal__wrapper" @click="close(false)">
        <div @click.stop class="modal">
            <div class="modal__head">
                <h2>{{ header }}</h2>
                <div class="modal__close" @click="close(false)">
                    <X width="100%" height="100%" />
                </div>
            </div>
            <div class="modal__content">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import '@/assets/constants.sass'

    .modal__wrapper
        width: 100vw
        height: 100vh
        position: absolute
        z-index: 2
        top: 0
        left: 0
        display: flex
        justify-content: center
        align-items: center

        background-color: rgb(0, 0, 0, 0.5)
        overflow: hidden

    .modal
        width: 600rem
        padding: 16rem 20rem

        background-color: $block-background-color
        border-radius: 16rem
        

    .modal__head
        margin-bottom: 20rem

    .modal__close
        float: right
        cursor: pointer
        width: 32rem
        height: 32rem

            // &>svg
            //     width: 32rem !important
            //     height: 32rem !important

    h2
        display: inline-block

        font-size: 24rem
        font-weight: 500

    .modal__button
        width: fit-content
        padding: 8rem 16rem
        display: flex
        align-items: center
        gap: 12rem

        color: $tertiary-font-color
        background-color: $accent-color
        border-radius: 8rem
        outline: none
        border: 2rem solid $accent-color  
        cursor: pointer
        transition: all ease 0.2s 

        &:hover          
            background-color: $block-background-color
            color: $accent-color

</style>
