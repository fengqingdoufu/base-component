<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon v-if="icon && !loading" :icon="icon" class="icon"></g-icon>
        <g-icon v-if="loading" icon="loading" class="loading icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: "button",
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right'
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
    @keyframes spin {
       0% {
           transform: rotate(0deg);
       }
       100% {
           transform: rotate(360deg);
       }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {outline: none;}
        > .icon {
            order: 1;
            margin: 0 0.3em 0 0;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin: 0 0 0 0.3em;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }

</style>
