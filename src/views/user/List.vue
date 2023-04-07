<template>
    <el-table v-loading="loading" :data="tableData" border>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="username" label="用户名" width="180" />
        <el-table-column prop="username" label="密码" />
        <el-table-column fixed="right" label="" width="200">
            <template #default="scope">
                <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <p>
        <el-pagination background layout="total, sizes, prev, pager, next" v-model:current-page="currentPage"
            v-model:page-size="pageSize" :page-sizes="[10, 20, 50, 100]" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
//定义数据类型
interface User {
    username: string,
    password: string,
}
const loading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)
const tableData = ref <User[]> ([])
for (var i = 0; i < 10; i++) {
    tableData.value.push({ username: 'zhangju', password: '123456' })
}
//表操作
const handleSizeChange = (val: number) => {
    console.log(`${pageSize.value} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1000);

}
//行操作
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    ElMessageBox.confirm('确定要删除吗?').then(() => {
        console.log(index, row)
    }).catch(() => { })
}
</script>