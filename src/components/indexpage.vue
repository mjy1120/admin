<template>
    <el-container style="height: 100%;">
        <Aside/>
        <el-container class="content">
            <Eheader/>
            <Ebread/>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>
<script>
    import Aside from "./home/aside"
    import Eheader from "./home/eheader"
    import Ebread from "./home/bread"
    export default {
        data() {
            return {
            }
        },
        components: {
            Aside,
            Eheader,
            Ebread
        }
    }
</script>
<style>
    .content {
        flex-direction: column;
    }

    .el-main {
        padding: 0;

    }
</style>