
<template>
    <a-form
        layout="inline"
        :model="search"
        @submit="onSearch"
        @submit.native.prevent
    >
        <a-form-item>
            <a-input
                v-model:value="search.user"
                placeholder="用户名称"
            ></a-input>
        </a-form-item>

        <a-form-item>
            <a-input
                v-model:value="search.phone"
                placeholder="手机号"
            ></a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit"> 搜索 </a-button>
            <a-button
                type="primary"
                style="margin-left: 10px"
                @click="toggleModal"
            >
                新增
            </a-button>
        </a-form-item>
    </a-form>

    <a-table :columns="columns" :data-source="data" :loading="loading">
        <template #name="{ text }">
            <a>{{ text }}</a>
        </template>
    </a-table>

    <a-modal v-model:visible="visible" title="操作" @ok="onSubmit" @cancel="resetFields">
        <a-form
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-item label="用户名称" name="name">
                <a-input v-model:value="form.name" />
            </a-form-item>
            <a-form-item label="手机号" name="phone">
                <a-input v-model:value="form.phone" />
            </a-form-item>
            <a-form-item label="年龄" name="age">
                <a-input v-model:value="form.age" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
const columns = [
    {
        title: "用户名称",
        dataIndex: "name",
        key: "name",
        slots: { customRender: "name" },
    },
    {
        title: "手机号",
        dataIndex: "phone",
        key: "age",
    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
    },
];

import mockData from "./mockData"; 
// vue2.0 所有的业务数据和逻辑都放在 data 和 methods 里面，代码组织混乱，不方便复用逻辑和阅读。
export default {
    data() {
        return {

            // 搜索
            search: {
                user: "",
                phone: "",
            },

            // 表格
            data: [],
            columns,
            loading: false,
            
            // 新增弹框
            visible: false,
            form: {
                key: "",
                name: "",
                phone: "",
                age: "",
            },
            labelCol: { span: 5 },
            wrapperCol: { span: 16 },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入用户名称",
                        trigger: "blur",
                    },
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入手机",
                        trigger: "blur",
                    },
                ],
                age: [
                    {
                        required: true,
                        message: "请输入年龄",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        onSearch() {
            this.getList();
        },

        getList() {
            this.loading = true;
            console.log(this.search);
            // api.getList(search).then(() => {})
            setTimeout(() => {
                this.data = mockData;
                this.loading = false;
            }, 2000);
        },

        toggleModal() {
            this.visible = !this.visible;
        },

        resetFields() {
            this.form = {};
        },

        onSubmit() {
            this.$refs.ruleForm
                .validate()
                .then(() => {
                    console.log("values", this.form);
                    this.toggleModal();
                })
                .catch((error) => {
                    console.log("error", error);
                });
        },
    },
};
</script>