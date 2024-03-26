<script>

export default  {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div 
        :class="{
            team_statistic__item: true,
            right_border: item.line
        }"
    >
        <div class="team-statistic__item-value">
            {{ item.value }}
        </div>
        <div class="team-statistic__item-title">
            {{ item.title }}
        </div>
        <div v-if="item.point" class="team-statistic__item-point">
        </div>      
    </div>

</template>

<style scope lang='sass'>
    @import '@/assets/constants.sass'

    .team_statistic__item
        padding: 0 36rem
        position: relative

    .right_border
        border-right: 2rem solid $light-grey

    .team-statistic__item-value
        font-size: 22rem
        font-weight: 500
        line-height: 130%

    .team-statistic__item-title
        font-size: 12px
        line-height: 150%

        color: $secondary-font-color       

    .team-statistic__item-point
        width: 6rem
        height: 6rem
        position: absolute
        top: 5rem
        right: 33rem

        border-radius: 50%
        background-color: $green

</style>