<template>
    <div ref="button" class="ui-button" :class="classArr" @click="handleClick"><a>
        <slot></slot>
    </a></div>
</template>
<script>
    export default {
        name: "button",
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'normal'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            }
        },
        methods: {
            handleClick(evt) {
                !this.disabled && this.$emit('click', evt);
            }
        },
        computed: {
            classArr() {
                return `ui-button-${this.type ? this.type : 'primary'} ui-button-${this.size ? this.size : 'normal'} ${this.disabled ? 'disabled' : ''}`;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "button.scss";
</style>