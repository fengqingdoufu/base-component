<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "button-group",
    mounted() {
        for (let node of this.$el.children) {
            let name = node.nodeName.toLowerCase()
            if (name !== 'button') {
                console.warn(`g-button-group 的子元素应该全为g-button,但是你写的是${name}`)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
        border-radius: 0;
        &:first-child {
            border-radius: 4px 0 0 4px;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>
