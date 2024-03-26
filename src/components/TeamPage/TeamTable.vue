<script>
import TeamTableItem from '@/components/TeamPage/TeamTableItem'
import TeamTableRow from '@/components/TeamPage/TeamTableRow'
import TeamTableNav from '@/components/TeamPage/TeamTableNav'

export default  {
    components: { TeamTableItem, TeamTableRow, TeamTableNav },
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
    computed: {
        firstItemIndex() {
            return this.$store.state.team.usersByPage * (this.$store.state.team.currentPage - 1)     
        },
        lastItemIndex() {
            return this.firstItemIndex + this.$store.state.team.usersByPage     
        },
    },
}
</script>

<template>
    <div class="team-table__wrap">
        <div class="team-table">
            <div class="team-table__head row">
                <TeamTableItem v-for="item in tableColumns" :key="item.name" :item="item" />
            </div>
            <TeamTableRow
                v-for="user in $store.getters['team/sortedAndSearchedUsers'].slice(firstItemIndex, lastItemIndex)"
                :key="user.id" :user="user" />
        </div>

        <TeamTableNav />    
    </div>
</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .team-table__wrap > div
        width: 1788rem  
        padding: 16rem     

        background-color: $block-background-color
        border-radius: 12rem

    .team-table
        margin-bottom: 28rem  

    .team-table__head
        background-color: $background-color
        border-radius: 12rem

    .row
        display: grid
        grid-template-columns: repeat(8, 1fr)
    
</style>