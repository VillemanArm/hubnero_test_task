<script>
import AutoInput from '@/components/UI/AutoInput.vue'

export default  {
    components: { AutoInput },
    setup() {
        return { 
            nameRegExp: /^[A-Z][a-z]+\s[A-Z][a-z]+$/, 
            phraseRegExp: /^[A-Z][a-zA-Z]*(\s[a-zA-Z]*)*$/,
            gmailRegExp: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
            dateRegExp: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
            telegramRegExp: /^@[a-zA-Z0-9_]{5,32}$/,
        }
    },
    data() {
        return {
            name: {
                value: this.$store.state.team.editedUser.name,
                isError: false,
                errorMessage: 'enter the name in the format: Name Surname'
            }, 
            team: {
                value: this.$store.state.team.editedUser.team,
                isError: false,
                errorMessage: 'enter the name in the format: Team name'
            }, 
            role: {
                value: this.$store.state.team.editedUser.role,
                isError: false,
                errorMessage: 'enter the name in the format: Role name'
            }, 
            gmail: {
                value: this.$store.state.team.editedUser.gmail,
                isError: false,
                errorMessage: 'enter the name in the format: example@gmail.com'
            }, 
            birthday: {
                value: this.$store.state.team.editedUser.birthday,
                isError: false,
                errorMessage: 'enter the name in the format: 01.01.2000'
            }, 
            telegram: {
                value: this.$store.state.team.editedUser.telegram,
                isError: false,
                errorMessage: 'enter the telegram nickname in the format: @example'
            }, 
            hireDate: {
                value: this.$store.state.team.editedUser.hireDate,
                isError: false,
                errorMessage: 'enter the name in the format: 01.01.2000'
            }, 
            lastLogin: this.$store.state.team.editedUser.lastLogin,
            isOnline: this.$store.state.team.editedUser.isOnline,
            gender: this.$store.state.team.editedUser.gender,
            avatar: this.$store.state.team.editedUser.avatar,
            isRequiredFieldsNotFilledIn: false,
        }

    },
    computed: {
        age() {
            const now = Date.now()
            const birthday = new Date(this.birthday.value.split('.').reverse().join('.'))
            const usersAge = Math.floor((now - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365))
            return usersAge
        }, 
    },
    methods: {
        handleSubmit(submit) {
            submit.preventDefault()

            if (this.name.value && this.telegram.value && this.hireDate.value && this.birthday.value) {
                this.isRequiredFieldsNotFilledIn = false

                const editedUser = {
                    id: this.$store.state.team.editedUser.id,
                    name: this.name.value,
                    team: this.team.value,
                    role: this.role.value,
                    gmail: this.gmail.value,
                    birthday: this.birthday.value,
                    age: this.age,
                    telegram: this.telegram.value,
                    lastLogin: this.lastLogin,
                    isOnline: this.isOnline,
                    gender: this.gender,
                    hireDate: this.hireDate.value,
                    avatar: this.avatar,
                }

                this.$store.commit('team/replaceUser', editedUser)

                this.$store.commit('team/setIsEditUser', false)
            } else {
                this.isRequiredFieldsNotFilledIn = true
            }
        },
        handleReset() {
            this.isRequiredFieldsNotFilledIn = false
            this.name.isError = false
            this.team.isError = false
            this.role.isError = false
            this.gmail.isError = false
            this.birthday.isError = false
            this.telegram.isError = false
            this.hireDate.isError = false
        },

        validateInput(regExp, variable) {
            return (value) => {
                variable.isError = false
                if (regExp.test(value) || value === '') {
                    variable.value = value;
                } else {
                    variable.isError = true
                }
            }
        },
        
    },
    mounted() {
        this.$refs.genderSelect.value = this.gender
    },
}
</script>

<template>
    <form class="employee-edit" v-on:submit.prevent="(submit) => { handleSubmit(submit)}" @reset="handleReset()">
        <!-- если бы не понадобился select вывел бы строки через v-for -->
        <!-- нет добавления аватара, потому что некуда его отправлять -->
        <div class="employee-edit__row">
            <label for="name" class="employee-edit__label">Name*:</label>
            <div>
                <AutoInput name="name" class="employee-edit__input" :placeholder="'Name Surname'"
                    :handleInput="validateInput(nameRegExp, name)" :value="name.value" />
                <div v-if="name.isError" class="employee-edit__error">{{ name.errorMessage }}</div>
            </div>
        </div>

        <div class=" employee-edit__row">
            <label for="team" class="employee-edit__label">Team:</label>
            <div>
                <AutoInput name="team" class="employee-edit__input" :placeholder="'Team name'"
                    :handleInput="validateInput(phraseRegExp, team)" :value="team.value" />
                <div v-if="team.isError" class="employee-edit__error">{{ team.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-edit__row">
            <label for="role" class="employee-edit__label">Role:</label>
            <div>
                <AutoInput name="role" class="employee-edit__input" :placeholder="'Role name'"
                    :handleInput="validateInput(phraseRegExp, role)" :value="role.value" />
                <div v-if="role.isError" class="employee-edit__error">{{ role.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-edit__row">
            <label for="gmail" class="employee-edit__label">Gmail:</label>
            <div>
                <AutoInput name="gmail" class="employee-edit__input" :placeholder="'example@gmail.com'"
                    :handleInput="validateInput(gmailRegExp, gmail)" :value="gmail.value" />
                <div v-if="gmail.isError" class="employee-edit__error">{{ gmail.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-edit__row">
            <label for="telegram" class="employee-edit__label">Telegram*:</label>
            <div>
                <AutoInput name="telegram" class="employee-edit__input" :placeholder="'@example'"
                    :handleInput="validateInput(telegramRegExp, telegram)" :value="telegram.value" />
                <div v-if="telegram.isError" class="employee-edit__error">{{ telegram.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-edit__row">
            <label for="hireDate" class="employee-edit__label">Hire date*:</label>
            <div>
                <AutoInput name="hireDate" class="employee-edit__input" :placeholder="'01.01.2000'"
                    :handleInput="validateInput(dateRegExp, hireDate)" :value="hireDate.value" />
                <div v-if="hireDate.isError" class="employee-edit__error">{{ hireDate.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-edit__row">
            <label for="birthday" class="employee-edit__label">Birthday*:</label>
            <div>
                <AutoInput name="birthday" class="employee-edit__input" :placeholder="'01.01.2000'"
                    :handleInput="validateInput(dateRegExp, birthday)" :value="birthday.value" />
                <div v-if="birthday.isError" class="employee-edit__error">{{ birthday.errorMessage }}</div>
            </div>
        </div>

        <div class=" employee-edit__row">
            <label for="gender" class="employee-edit__label">Gender:</label>
            <select ref="genderSelect" name="gender" class="employee-edit__input" v-model="gender">
                <option value='' selected></option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </div>

        <div class="employee-edit__error-wrapper">
            <div class="employee-edit__error" v-if="isRequiredFieldsNotFilledIn">Fill in the required fields (marked
                with
                an asterisk)</div>
        </div>

        <div class="employee-edit__buttons">
            <button type="submit" class="button modal__button">Save changes</button>
            <button type="reset" class="button modal__button">Clear</button>
        </div>

    </form>

</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .employee-edit__row
        display: grid
        grid-template-columns: 130rem 1fr
        min-height: 44rem
        margin-bottom: 6rem

        font-size: 14rem

    .employee-edit__label
        margin-top: 8rem

        font-weight: 500

    .employee-edit__input
        width: 100%
        height: 28rem
        padding: 0 6rem

        font-size: 14rem

        border: 2rem solid $light-grey
        border-radius: 6rem
        outline-color: $accent-color

    .employee-edit__error
        margin-left: 6rem

        font-size: 12rem

        color: $red

    .employee-edit__error-wrapper
        min-height: 18rem
        display: flex
        justify-content: end

    .employee-edit__buttons
        display: flex
        justify-content: end
        gap: 12rem

</style>