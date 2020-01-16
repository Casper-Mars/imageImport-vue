<template>
    <el-upload
            class="upload-demo"
            action="http://localhost:18080/api/v1/file/upload"
            :limit="1"
            :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传zip文件</div>
    </el-upload>
</template>

<script>
    export default {
        name: "UploadFile",
        data() {
            return {
                fileList: []
            }
        }
    }
</script>

<style scoped>

</style>