<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <el-header>Logo</el-header>
                <el-menu default-active="2" class="el-menu-vertical" :router="true" :collapse="isCollapse">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><Discount /></el-icon>
                            <span>用户中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/user/list">用户列表</el-menu-item>
                            <el-menu-item index="/user/detail">添加用户</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon><ChatLineSquare /></el-icon>
                            <span>产品管理</span>
                        </template>
                        <el-menu-item index="/product/list">产品列表</el-menu-item>
                        <el-menu-item index="/product/detail">添加产品</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-row>
                        <el-col :span="1"><el-icon @click="isCollapse=!isCollapse" style="cursor:pointer;height:100%;"><Fold v-if="!isCollapse" /><Expand v-else /></el-icon></el-col>
                        <el-col :span="23">
                            <el-menu :default-active="2"  mode="horizontal" :ellipsis="false">
                                <div class="flex-grow" />
                                <el-menu-item index="1">首页</el-menu-item>
                                <el-menu-item index="2">Center</el-menu-item>
                                <el-sub-menu index="3">
                                    <template #title>admin</template>
                                    <el-menu-item index="3-1">退出登录</el-menu-item>
                                </el-sub-menu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isCollapse = ref(false)


</script>
<style>
.el-aside{
    width:auto
}
.flex-grow {
    flex-grow: 1;
}

</style>