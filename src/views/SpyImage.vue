<template>
    <div id="top">
        <el-page-header @back="backToOne" content="爬取图片"></el-page-header>
        <el-container>
            <el-main>
                <el-row>
                    <el-input v-model="url" placeholder="输入要爬取的网页的网址"></el-input>
                </el-row>
                <el-row>
                    <el-button type="primary" @click="submitSpy">开始爬取</el-button>
<!--                    <el-button size="mini" class="filter-item" type="primary" icon="el-icon-download"-->
<!--                               @click="handleExport()">下载-->
<!--                    </el-button>-->
                    <!--                    <el-button type="primary" @click="download">下载</el-button>-->
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "SpyImage",
        data() {
            return {
                url: "",
                filename: ""
            }
        },
        methods: {
            backToOne: function () {
                this.$router.history.go(-1);
            },
            submitSpy: function () {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$api.get(
                    "/v1/image/import/spy",
                    {
                        "url": this.url
                    },
                    null,
                    (data) => {
                        console.log(data);
                        if (data.code === "200") {
                            this.filename = data.data
                            loading.close();
                            this.handleExport();
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                )
            },
            download: function () {
                this.$api.get(
                    "/v1/image/import/spy/download",
                    {
                        "filename": this.filename
                    },
                    null,
                    (data) => {
                        console.log(data);
                        if (data.code === "200") {
                            this.filename = data.data
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                )
            },
            handleExport() {
                var elemIF = document.createElement('iframe')
                elemIF.src = 'http://localhost:18080/api/v1/image/import/spy/download?filename=' + this.filename
                elemIF.style.display = 'none'
                document.body.appendChild(elemIF)
            },
        },
    }
</script>

<style scoped>
    #top {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-left: 25%;
        padding-right: 25%;
    }

    .el-row {
        padding: 10px;
    }
</style>