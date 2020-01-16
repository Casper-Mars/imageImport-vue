<template>
    <div id="top">
        <el-page-header @back="backToOne" content="导入配置"></el-page-header>
        <el-container>
            <el-main>
                <!--                <form method="post" enctype="multipart/form-data" action="http://localhost:18080/api/v1/file/upload">-->
                <!--                    <div>-->
                <!--                        <radio_group>-->
                <!--                            <input name="mode" type="radio" value="1"/>模式1-->
                <!--                            <input name="mode" type="radio" value="2"/>模式2-->
                <!--                        </radio_group>-->
                <!--                    </div>-->
                <!--                    <div>-->
                <!--                        <input type="file" name="file"/>-->
                <!--                    </div>-->
                <!--                    <button type="submit">提交</button>-->
                <!--                </form>-->
                <el-row>
                    <el-radio v-model="mode" label="1">模式1</el-radio>
                    <el-radio v-model="mode" label="2">模式2</el-radio>
                </el-row>
                <el-row>
                    <el-upload
                            class="upload-demo"
                            :action="getUploadUrl"
                            :file-list="targetFiles"
                            :limit="1"
                            :headers="getHeader"
                            :auto-upload="false"
                            ref="upload"
                            name="file"
                            :data="getData()"
                    >
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">提交
                        </el-button>
                        <div slot="tip" class="el-upload__tip">只能上传zip文件</div>
                    </el-upload>
                </el-row>
            </el-main>
            <el-footer>
                <h3>说明</h3>
                <p>
                    默认情况下是用模式1。 模式1和模式2在处理<strong>详情图片</strong>时有差异，模式1会自动识别出图片中的关键词（overview，size等）并对识别出来的图片进行排序，
                    准确率不高，偶尔会出现误判。模式2没有自动处理这个过程，会按照图片的名称升序进行导入。
                </p>
                <p>
                    如果是已经排好序了，建议用模式2。
                </p>
                <p>
                    如果对准确率没有要求，只是节省工作量，可以用模式1
                </p>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "NormalImage",
        methods: {
            backToOne: function () {
                this.$router.history.go(-1);
            },
            getData: function () {
                return {
                    "mode": this.mode
                }
            },
            submitUpload: function () {
                console.log(this.targetFiles)
                this.$refs.upload.submit()
            }
        },
        computed: {
            getHeader: function () {
                return {
                    // "Content-Type": "multipart/form-data"
                }
            },
            getUploadUrl: function () {
                return "http://localhost:18080/api/v1/image/import/normal"
            },
        },
        data() {
            return {
                mode: "1",
                targetFiles: []
            }
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