<template>
    <div class="publish-content">
        <ul>
            <li>封面图片</li>
            <li>文章标题/编号</li>
            <li>标签</li>
            <li>更新时间</li>
            <li>状态</li>
            <li>操作</li>
        </ul>
        <div class="detail-publish">
            <dl v-for="(item,index) in lists" :key="item.id">
                <dt>
                    <img :src="item.thumbnail" alt="">
                </dt>
                <dd>
                    <p>
                        <span>{{item.title}}</span>
                    </p>
                    <strong>{{item.tag}}</strong>
                    <span>{{item.time}}</span>
                    <span>{{item.status}}</span>
                    <h6>
                        <i>预览</i>
                        <el-button type="text" @click="update(item.id,1)">发布</el-button>
                        <i>编辑</i>
                        <el-button type="text" @click="open(item.id)">删除</el-button>
                    </h6>
                </dd>
            </dl>
        </div>

        <el-pagination background :page-size="pageSize" layout="prev, pager, next" :total="total" @current-change="loginData">
        </el-pagination>
    </div>
</template>
<script>
    import api from "@/api"
    export default {
        data() {
            return {
                lists: [],
                page: 1,
                pageSize: 5,
                total: 0
            }
        },
        methods: {
            loginData(index) {
                this._getData(index);
            },
            _getData(index) {
                this.page = index;
                this.$nextTick(() => {
                    api.list.list({
                        page: this.page,
                        pageSize: this.pageSize
                    }).then((data) => {
                        console.log(data)
                        this.lists = data.data.list;
                        this.total = data.data.count;
                    })
                })

            },
            open(ind) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    api.list.delect({
                        id: ind
                    }).then(data => {
                        console.log(data)
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            update(ind, itemstatus) {
                this.$confirm('是否发布?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //console.log(ind, itemstatus)
                    api.list.update({
                        id: ind,
                        status: itemstatus
                    }).then(data => {
                        for (var i = 0; i < this.lists.length; i++) {
                            if (this.lists[i].id == ind) {
                                this.$set(this.lists[i], 'status', '1');
                            }
                        }
                        console.log(this.lists)
                    })
                    this.$message({
                        type: 'success',
                        message: '发布成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消发布'
                    });
                });
            }
        },
        created() {
            api.list.list({
                page: this.page,
                pageSize: this.pageSize
            }).then((data) => {
                //console.log(data.data.list)
                this.lists = data.data.list;
                this.total = data.data.count;
            })
        },
        mounted() {
            //this._getList()
        }
    }
</script>
<style>
    .publish-content {
        width: 100%;
        height: 600px;
    }

    .publish-content>ul {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #ccc;
    }

    .publish-content>ul>li {
        color: #333;
    }

    .detail-publish {
        width: 100%;
        height: 600px;
        padding: 0 5px;
    }

    .detail-publish dl {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .detail-publish dl dt {
        flex: 1;
    }

    .detail-publish dl dt img {
        width: 100px;
        height: 100px;
    }

    .detail-publish dl dd {
        flex: 9;
        margin-left: 35px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-content: center;
    }

    .detail-publish dl dd p {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .detail-publish dl dd strong {
        flex: 1;
    }

    .detail-publish dl dd span {
        flex: 1.1;
    }

    .detail-publish dl dd h6 {
        flex: 1;
    }

    .detail-publish dl dd h6 i {
        color: rgb(15, 187, 218);
    }

    .el-pagination {
        width: 100%;
        text-align: center;
    }
</style>