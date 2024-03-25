<script>
import AutoInput from '@/components/UI/AutoInput.vue'

export default  {
    components: { AutoInput },
    props: {
        // propsTemplate: {
        //     type: Function,
        //     required: true,
        // },
        },
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
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: Name Surname'
            }, 
            team: {
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: Team name'
            }, 
            role: {
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: Role name'
            }, 
            gmail: {
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: example@gmail.com'
            }, 
            birthday: {
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: 01.01.2000'
            }, 
            telegram: {
                value: '',
                isError: false,
                errorMessage: 'enter the telegram nickname in the format: @example'
            }, 
            hireDate: {
                value: '',
                isError: false,
                errorMessage: 'enter the name in the format: 01.01.2000'
            }, 
            lastLogin: '',
            isOnline: '',
            gender: '',
            avatar: 'https://insight-webstudio.ru/files_for_another_projects/no_avatar.png',
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
            //  не стал закрывать окно после добавления, чтобы было удобно заводить несколько сотрудников сразу
            submit.preventDefault()

            if (this.name.value && this.telegram.value && this.hireDate.value && this.birthday.value) {
                this.isRequiredFieldsNotFilledIn = false

                const newUser = {
                    id: Date.now(),
                    name: this.name.value,
                    team: this.team.value,
                    role: this.role.value,
                    gmail: this.gmail.value,
                    birthday: this.birthday.value,
                    age: this.age,
                    telegram: this.telegram.value,
                    lastLogin: '',
                    isOnline: false,
                    gender: this.gender,
                    hireDate: this.hireDate.value,
                    avatar: 'https://insight-webstudio.ru/files_for_another_projects/no_avatar.png',
                }

                this.$store.commit('team/addUser', newUser)

                submit.target.reset()
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
                if (regExp.test(value)) {
                    variable.value = value;
                } else {
                    variable.isError = true
                }
            }
        }


    },
}
</script>

<template>
    <form class="employee-add" v-on:submit.prevent="(submit) => { handleSubmit(submit)}" @reset="handleReset()">
        <!-- если бы не понадобился select вывел бы строки через v-for -->
        <!-- нет добавления аватара, потому что некуда его отправлять -->
        <div class="employee-add__row">
            <label for="name" class="employee-add__label">Name*:</label>
            <div>
                <AutoInput name="name" class="employee-add__input" :placeholder="'Name Surname'"
                    :handleInput="validateInput(nameRegExp, name)" />
                <div v-if="name.isError" class="employee-add__error">{{ name.errorMessage }}</div>
            </div>
        </div>

        <div class=" employee-add__row">
            <label for="team" class="employee-add__label">Team:</label>
            <div>
                <AutoInput name="team" class="employee-add__input" :placeholder="'Team name'"
                    :handleInput="validateInput(phraseRegExp, team)" />
                <div v-if="team.isError" class="employee-add__error">{{ team.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-add__row">
            <label for="role" class="employee-add__label">Role:</label>
            <div>
                <AutoInput name="role" class="employee-add__input" :placeholder="'Role name'"
                    :handleInput="validateInput(phraseRegExp, role)" />
                <div v-if="role.isError" class="employee-add__error">{{ role.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-add__row">
            <label for="gmail" class="employee-add__label">Gmail:</label>
            <div>
                <AutoInput name="gmail" class="employee-add__input" :placeholder="'example@gmail.com'"
                    :handleInput="validateInput(gmailRegExp, gmail)" />
                <div v-if="gmail.isError" class="employee-add__error">{{ gmail.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-add__row">
            <label for="telegram" class="employee-add__label">Telegram*:</label>
            <div>
                <AutoInput name="telegram" class="employee-add__input" :placeholder="'@example'"
                    :handleInput="validateInput(telegramRegExp, telegram)" />
                <div v-if="telegram.isError" class="employee-add__error">{{ telegram.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-add__row">
            <label for="hireDate" class="employee-add__label">Hire date*:</label>
            <div>
                <AutoInput name="hireDate" class="employee-add__input" :placeholder="'01.01.2000'"
                    :handleInput="validateInput(dateRegExp, hireDate)" />
                <div v-if="hireDate.isError" class="employee-add__error">{{ hireDate.errorMessage }}</div>
            </div>
        </div>

        <div class="employee-add__row">
            <label for="birthday" class="employee-add__label">Birthday*:</label>
            <div>
                <AutoInput name="birthday" class="employee-add__input" :placeholder="'01.01.2000'"
                    :handleInput="validateInput(dateRegExp, birthday)" />
                <div v-if="birthday.isError" class="employee-add__error">{{ birthday.errorMessage }}</div>
            </div>
        </div>

        <div class=" employee-add__row">
            <label for="gender" class="employee-add__label">Gender:</label>
            <select name="gender" class="employee-add__input" v-model="gender">
                <option value='' selected></option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </div>

        <div class="employee-add__error-wrapper">
            <div class="employee-add__error" v-if="isRequiredFieldsNotFilledIn">Fill in the required fields (marked with
                an asterisk)</div>
        </div>

        <div class="employee-add__buttons">
            <button type="submit" class="button modal__button">Add</button>
            <button type="reset" class="button modal__button">Clear</button>
        </div>

    </form>

</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .employee-add__row
        display: grid
        grid-template-columns: 130rem 1fr
        min-height: 44rem
        margin-bottom: 6rem

        font-size: 14rem

    .employee-add__label
        margin-top: 8rem

        font-weight: 500

    .employee-add__input
        width: 100%
        height: 28rem
        padding: 0 6rem

        font-size: 14rem

        border: 2rem solid $light-grey
        border-radius: 6rem
        outline-color: $accent-color

    .employee-add__error
        margin-left: 6rem

        font-size: 12rem

        color: $red

    .employee-add__error-wrapper
        min-height: 18rem
        display: flex
        justify-content: end

    .employee-add__buttons
        display: flex
        justify-content: end
        gap: 12rem


    

</style>