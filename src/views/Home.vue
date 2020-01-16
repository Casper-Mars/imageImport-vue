<template>
    <div id="nav">
        <el-row>
            <el-button @click="toNormalImport">
                导入普通图片
            </el-button>
        </el-row>
        <el-row>
            <el-button @click="toSpecImport">
                导入规格图片
            </el-button>
        </el-row>
        <el-row>
            <el-button @click="toSpyImage">
                爬取图片
            </el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'home',
        methods: {
            toNormalImport: function () {
                this.$router.push("normalImage")
            },
            toSpecImport: function () {
                this.$router.push("specImage")
            },
            toSpyImage: function () {
                this.$router.push("spyImage")
            }
        }
    }
</script>
<style lang="scss">
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .el-row {
        padding: 10px;
    }
</style>