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

    <a-table
        :columns="columns"
        :data-source="table.list"
        :loading="table.loading"
    >
        <template #name="{ text }">
            <a>{{ text }}</a>
        </template>
    </a-table>

    <a-modal v-model:visible="visible" title="操作" @ok="onSubmit" @cancel="resetFields">
        <a-form
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-item label="用户名称" name="name" v-bind="validateInfos.name">
                <a-input v-model:value="modelRef.name" />
            </a-form-item>
            <a-form-item label="手机号" name="phone" v-bind="validateInfos.phone">
                <a-input v-model:value="modelRef.phone" />
            </a-form-item>
            <a-form-item label="年龄" name="age" v-bind="validateInfos.age">
                <a-input v-model:value="modelRef.age" />
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

import { reactive, ref, toRaw, onMounted, nextTick } from "vue";
import { useForm } from "@ant-design-vue/use";

export default {
    setup(props, context) {
        console.log(props, context);
        const { table, getList } = useTable();

        const search = useSearch(getList);

        const modal = useModal();

        const form = useModalForm();

        onMounted(() => {
            getList();
        });

        return { columns, table, ...search, ...modal, ...form };
    },
};

function useTable() {
    const table = reactive({
        list: [],
        loading: false,
    });

    function getList(param) {
        table.loading = true;
        // console.log(param);
        // api.getList(param).then(() => {})
        setTimeout(() => {
            table.list = mockData;
            table.loading = false;
        }, 2000);
    }

    return { table, getList };
}

function useSearch(getList) {
    const search = reactive({
        user: "",
        phone: "",
    });

    function onSearch() {
        getList(search);
    }

    return { search, onSearch };
}

function useModal() {
    let visible = ref(false);

    function toggleModal() {
        visible.value = !visible.value;
    }

    return { visible, toggleModal }
}

function useModalForm() {
    const modelRef = reactive({
        key: "",
        name: "",
        phone: "",
        age: "",
    });
    const rulesRef = reactive({
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
    });
    const { resetFields, validate, validateInfos } = useForm(
        modelRef,
        rulesRef
    );

    const onSubmit = (e) => {
        e.preventDefault();
        validate()
            .then(() => {
                console.log(toRaw(modelRef));
            })
            .catch((err) => {
                console.log("error", err);
            });
    };

    return {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
        validateInfos,
        resetFields,
        modelRef,
        onSubmit,
    };
}
</script>