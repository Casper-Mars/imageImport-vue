<template>
    <div>
        <el-page-header @back="backToOne" content="导入配置">
        </el-page-header>

        <el-button>test</el-button>
    </div>
</template>

<script>
    export default {
        name: "SpecImage",
        methods: {
            backToOne: function () {
                this.$router.history.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>