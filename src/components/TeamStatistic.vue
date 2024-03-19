<script>

export default  {
    components: {},
    props: {
        propsTemplate: {
            type: Function,
            required: true,
        },
        },
    data() {
        return {
        
        }
    },
    methods: {
        sumParams(objectsArr, key) {
            let sum = 0

            objectsArr.forEach((item => {sum += item[key]}))

            return sum
        },

        getWorkDays(date) {
            const formattedDate = date.split('.').reverse().join('.')
            const dateInMs = new Date(formattedDate);
            const nowInMs = Date.now();

            const workMs = Math.abs(nowInMs - dateInMs);
            const workDays = Math.ceil(workMs / (1000 * 60 * 60 * 24));

            return workDays
        }

        

    },
    computed: {
        statistics() {
            const users = this.$store.state.team.users

            const statistics = [
                {
                    title: 'members',
                    value: users.length,
                    line: true,
                },
                {
                    title: 'online',
                    value: this.sumParams(users, 'isOnline'),
                    line: true,
                    point: true
                },
                {
                    title: 'men',
                    value: users.filter(item => item.gender === 'male').length,
                    line: false,
                },
                {
                    title: 'women',
                    value: users.filter(item => item.gender === 'female').length,
                    line: true,
                },
                {
                    title: 'average age',
                    value: Math.round(this.sumParams(users, 'age') / users.length),
                    line: true,
                    point: false
                },
                {
                    title: 'days work on average',
                    value: Math.round(this.workDays.reduce((sum, val) => sum + val) / users.length),
                    line: true,
                    point: false
                },
                {
                    title: 'days work newest employee',
                    value: Math.min(...this.workDays),
                    line: true,
                    point: false
                },
                {
                    title: 'days work oldest employee',
                    value: Math.max(...this.workDays),
                    line: true,
                    point: false
                },
            ]

            return statistics
        },
        workDays() {
            const users = this.$store.state.team.users
            return users.map(user => this.getWorkDays(user.hireDate))
        }
    }
}
</script>

<template>
    <div class="team-statistic">
        <div class="team-statistic__icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="evenodd" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4732 9.15182C12.2868 9.96541 12.2868 11.2845 11.4732 12.0981C10.6596 12.9117 9.34048 12.9117 8.52689 12.0981C7.7133 11.2845 7.7133 9.96541 8.52689 9.15182C9.34048 8.33823 10.6596 8.33823 11.4732 9.15182" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.0448 4.15185C16.8584 4.96544 16.8584 6.28453 16.0448 7.09813C15.2312 7.91172 13.9122 7.91172 13.0986 7.09813C12.285 6.28453 12.285 4.96544 13.0986 4.15185C13.9122 3.33826 15.2312 3.33826 16.0448 4.15185" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 10.2083C16.2775 10.2083 17.5 10.6525 18.3333 11.3191" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.90147 4.15185C7.71507 4.96544 7.71507 6.28453 6.90147 7.09813C6.08788 7.91172 4.76879 7.91172 3.9552 7.09813C3.14161 6.28453 3.14161 4.96544 3.9552 4.15185C4.76879 3.33826 6.08788 3.33826 6.90147 4.15185" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.66667 11.3191C2.5 10.6525 3.7225 10.2083 5 10.2083" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.8258 16.4583C12.855 15.7075 11.46 15.2083 10 15.2083C8.54 15.2083 7.145 15.7075 6.17417 16.4583" stroke="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <span class="team-statistic__title">
            Team
        </span>
        <div class="team-statistic__info">
            <span>i</span>
        </div>

    </div>

</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

    .team-statistic
        height: 79rem
        width: fit-content
        display: flex
        align-items: center
        padding: 16rem 28rem

        background-color: $block-background-color
        border-radius: 12rem

    .team-statistic__icon
        width: 32rem
        height: 32rem
        display: flex
        align-items: center
        justify-content: center

        background-color: $light-blue
        stroke: $blue
        border-radius: 8rem

    .team-statistic__title
        margin-left: 16rem
        font-weight: 500

    .team-statistic__info
        width: 14rem
        height: 14rem
        margin-left: 4rem
        margin-top: -4rem
        display: flex
        align-items: center
        justify-content: center

        font-size: 12rem

        border-radius: 50%
        background-color: $background-color
        cursor: pointer

</style>