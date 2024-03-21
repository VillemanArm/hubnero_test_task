<script>
import TeamTableItem from '@/components/TeamTableItem'

export default  {
    components: {TeamTableItem},
    props: {
        // propsTemplate: {
        //     type: Function,
        //     required: true,
        // },
        },
    data() {
        return {
            tableColumns: [
                {
                    name: "Business Name",
                    isSortable: true,
                    isSearchable: true,
                },
                {
                    name: "Team",
                    isSortable: true,
                    isSearchable: false,
                },
                {
                    name: "Role",
                    isSortable: true,
                    isSearchable: false,
                },
                {
                    name: "Gmail",
                    isSortable: true,
                    isSearchable: true,
                },
                {
                    name: "Birthday",
                    isSortable: true,
                    isSearchable: false,
                },
                {
                    name: "Telegram",
                    isSortable: true,
                    isSearchable: false,
                },
                {
                    name: "Last Login",
                    isSortable: true,
                    isSearchable: false,
                },
                {
                    name: "User permissions",
                    isSortable: false,
                    isSearchable: false,
                },
            ]
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="team-table">
        <div class="team-table__list">
            <div class="team-table__head row">
                <TeamTableItem v-for="item in tableColumns" :key="item.name" :item="item"/>
            </div>

            <div class="team-table__row row"></div>
        </div>
        <div class="team-table__nav"></div>
    </div>

</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

    .team-table
        width: 1792rem        

        &>div
            padding: 16rem

            background-color: $block-background-color
            border-radius: 12rem

    .team-table__head
        background-color: $background-color

    .row
        display: grid
        grid-template-columns: repeat(8, 1fr)
    // .team-table__list

    // .team-table__nav



</style>