<template>
    <el-aside width="200px" style="background-color:#00152a">
        <el-menu router :default-active="$route.path">
            <div class="el-submenu__title" style="background:#00284c;text-align:center;">BigNoNo</div>
            <el-submenu index="/index">
                <template slot="title">
                    <i class="el-icon-message"></i>商品管理
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/publish">商品发布</el-menu-item>
                    <el-menu-item index="/index/manage">商品管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>推文管理</template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">文章列表</el-menu-item>
                    <el-menu-item index="2-2">标签管理2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-setting"></i>用户管理</template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script></script>
<style>
    .el-submenu__title,
    .el-menu-item-group {
        background-color: #00152a;
        color: #fff;
    }

    .el-menu-item {
        background: #000c18;
        color: #999;
    }

    .el-menu-item.is-active {
        background: #1890ff;
        color: #fff;
    }
</style>