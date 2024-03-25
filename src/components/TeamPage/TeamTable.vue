<script>
import TeamTableItem from '@/components/TeamPage/TeamTableItem'
import TeamTableIRow from '@/components/TeamPage/TeamTableIRow'

export default  {
    components: { TeamTableItem, TeamTableIRow },
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
                    sortOption: 'name',
                },
                {
                    name: "Team",
                    isSortable: true,
                    isSearchable: false,
                    sortOption: 'team',
                },
                {
                    name: "Role",
                    isSortable: true,
                    isSearchable: false,
                    sortOption: 'role',
                },
                {
                    name: "Gmail",
                    isSortable: true,
                    isSearchable: true,
                    sortOption: 'gmail',
                },
                {
                    name: "Birthday",
                    isSortable: true,
                    isSearchable: false,
                    sortOption: 'birthday',
                },
                {
                    name: "Telegram",
                    isSortable: true,
                    isSearchable: false,
                    sortOption: 'telegram',
                },
                {
                    name: "Last Login",
                    isSortable: true,
                    isSearchable: false,
                    sortOption: 'lastLogin',
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
                <TeamTableItem v-for="item in tableColumns" :key="item.name" :item="item" />
            </div>
            <TeamTableIRow v-for="user in $store.getters['team/sortedAndSearchedUsers']" :key="user.id" :user="user"/>
            
        </div>
        <div class="team-table__nav">
        </div>
    </div>

</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .team-table
        width: 1788rem        

        &>div
            padding: 16rem

            background-color: $block-background-color
            border-radius: 12rem

    .team-table__head
        background-color: $background-color
        border-radius: 12rem

    .row
        display: grid
        grid-template-columns: repeat(8, 1fr)
    // .team-table__list

    // .team-table__nav



</style>