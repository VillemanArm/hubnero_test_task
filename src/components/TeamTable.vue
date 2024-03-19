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
}
</script>

<template>
    <div class="team-table">
        <div class="team-table__list"></div>
        <div class="team-table__nav"></div>
    </div>

</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

    .team-table
        width: 1792rem
        padding: 16rem

        &>div
            background-color: $block-background-color
            border-radius: 12rem

    // .team-table__list

    // .team-table__nav



</style>