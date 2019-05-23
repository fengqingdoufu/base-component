<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
export default {
    name: "icon",
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.g-icon {width: 1em; height: 1em;}
</style>
