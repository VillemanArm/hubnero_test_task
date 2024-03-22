<script>

export default  {
    components: {},
    props: {
        handleInput: {
            type: Function,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: false
        }
    },
    data() {
        return {
        
        }
    },
    methods: {
        debounce(callback, delay) {
            let timeoutId;
            return (...args) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    callback.apply(this, args);
                }, delay);
            };
        },
    },
}
</script>

<template>
    <input type="text" class='text-input' :placeholder="placeholder"
        @input="debounce((event) => {handleInput(event.target.value, id)}, 500)"
    />

</template>

<style scoped lang='sass'>
    @import '../../assets/constants.sass'

    .text-input
        height: 24rem
        padding: 0 6rem

        font-size: 14rem

        border: 2rem solid $light-grey
        border-radius: 6rem
        outline-color: $accent-color

</style>

