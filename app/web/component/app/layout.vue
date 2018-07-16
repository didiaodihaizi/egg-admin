<template>
    <el-container>
        <el-aside width="200px">
            <slide-bar></slide-bar>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import slideBar from './../slideBar'
export default {
    components: {
        slideBar
    }
}
</script>

