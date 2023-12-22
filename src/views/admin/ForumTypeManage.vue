<script setup>
// import { useUserStore } from '@/stores';
import { computed, ref, reactive } from 'vue';
// const useStore = useUserStore();
const search = ref('');
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.category.toLowerCase().includes(search.value.toLowerCase())
  )
);
let edit = false;
const handleEdit = (index, row) => {
  console.log(index, row);
  formModel.id = row.id;
  formModel.category = row.category;
  formModel.addTime = row.addTime;
  edit = true;
  DialogVisible.value = true;
};
const handleDelete = async (index, row) => {
  console.log(index, row);
  // await deleteAnnouncementService(row.id);
  ElMessage.success('删除成功');
  // getAnnouncementList();
};

const tableData = ref([
  {
    category: '斗破苍穹',
    addTime: '2021-05-01'
  }
]);

// 获取公告列表
const getAnnouncementList = async () => {
  // const res = await getAnnouncementListService();
  // console.log(res);
  // tableData.value = res.data.data;
};

// 新增公告
const addAnnouncement = async () => {
  DialogVisible.value = true;
};

getAnnouncementList();

const DialogVisible = ref(false);
const defaultData = reactive({
  category: '',
  addTime: ''
});
const form = ref(null);
const formModel = reactive({
  id: '',
  category: '',
  addTime: ''
});

const onsubmit = async () => {
  await form.value.validate(); //校验函数
  DialogVisible.value = false;
  console.log('提交');

  // 重新获取公告列表

  dataInit();
};

const dataInit = () => {
  formModel.category = defaultData.category;
  formModel.description = defaultData.description;
};

const cancel = () => {
  DialogVisible.value = false;
  dataInit();
};

const rules = {
  category_name: [{ required: true, message: '请输入分类名', trigger: 'blur' }],
  description: [
    { required: false, message: '请输入分类描述', trigger: 'blur' },
    { min: 2, message: '长度在 2 以上或者为空', trigger: 'blur' }
  ]
};
</script>

<template>
  <div>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="分类名" prop="category" />
      <el-table-column label="加入时间" prop="addTime" />
      <el-table-column align="right">
        <template #header>
          <el-button
            type="primary"
            @click="addAnnouncement"
            v-model="search"
            size="small"
            >新增</el-button
          >
          <el-input v-model="search" size="small" placeholder="搜索分类名" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <a-popconfirm
            title="确定要删除该推荐吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
            ok-text="确认"
            cancel-text="取消"
          >
            <el-button size="small" type="danger">删除</el-button>
          </a-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-model="DialogVisible"
      :title="edit ? '编辑公告' : '新增分类'"
      width="50%"
      align-center
    >
      <span>
        <el-form @submit.prevent ref="form" :rules="rules" :model="formModel">
          <el-form-item prop="category">
            <el-input v-model="formModel.category" placeholder="请输入分类名">
            </el-input>
          </el-form-item>

          <span class="dialog-footer">
            <el-button type="primary" @click="onsubmit"> 确认 </el-button>
            <el-button @click="cancel">取消</el-button>
          </span>
        </el-form>
      </span>
    </el-dialog>
  </div>
</template>
