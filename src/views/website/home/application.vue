<!-- 申请开户 -->
<template>
  <div>
    <navigation />
    <div class="main">
      <div class="content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <div class="basic">
            <div class="basic_title">基本信息</div>
            <div class="basic_nav">
              <div class="tit">您的产品类型（非必选）</div>
              <div class="txt">
                <p>
                  <span>注：</span
                  >产品类型自选3个小时即可开户成功，如不进行选择，则需要1-3天方可开户成功
                </p>
                <p>
                  请准确选择您所要开通的产品类型，如产品与您投放链接不符，则此次请求将被驳回如您对自己产品定位不清晰，请联系我们客服或者添加我们客服人员微信：XXXX，获取更准确信息
                </p>
              </div>
            </div>
            <el-table
              class="basic_table"
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="209" align="center">
              </el-table-column>

              <el-table-column prop="categories" label="产品大类">
              </el-table-column>

              <el-table-column prop="type" label="产品类型"> </el-table-column>

              <el-table-column prop="illustrate" label="产品说明">
              </el-table-column>

              <el-table-column prop="imgs" label="产品示例">
                <template v-slot="scope">
                  <img :src="scope.row.img" alt="" width="80" height="80" />
                </template>
              </el-table-column>
            </el-table>
            <el-form-item label="您想开通那些媒体" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="Meta" name="type"></el-checkbox>
                <el-checkbox label="TikTok" name="type"></el-checkbox>
                <el-checkbox label="Kwai" name="type"></el-checkbox>
                <el-checkbox label="Snapchat" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="推广国家" prop="nation">
              <el-input
                v-model="ruleForm.nation"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="推广链接" prop="link">
              <el-input v-model="ruleForm.link" placeholder="请输入"></el-input>
            </el-form-item>

            <div class="hint">
              请确认推广链接是可打开而且是可正常跳转的状态，链接示例：https.mmjuliangtec.com/webinde
            </div>
          </div>

          <div class="info">
            <div class="info_title">主体信息</div>
            <el-form-item label="公司" prop="company">
              <el-input
                v-model="ruleForm.company"
                placeholder="请输入公司名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="统一社会信用代码/注册登记号" prop="credit">
              <el-input
                v-model="ruleForm.credit"
                placeholder="请输入社会信用代码或注册登记号"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input
                v-model="ruleForm.phone"
                placeholder="请输入联系电话"
              ></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                placeholder="请输入电子邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系地址" prop="address">
              <el-input
                v-model="ruleForm.address"
                placeholder="请输入地址"
              ></el-input>
            </el-form-item>
            <el-from-item label="营业执照附件" prop="license">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  <em>点击上传</em> / 拖拽到此区域
                </div>
                <div class="el-upload__tip" slot="tip">
                  上传营业执照（支持PNG/JPG/JPEG，小于10MB）
                </div>
              </el-upload>
            </el-from-item>

            <el-form-item class="submits">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >确认提交</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="开户状态"
      :visible.sync="dialogVisible"
      width="30%"
      center
      class="dialogs"
    >
      <div>状态：开户成功</div>
      <div class="dialog_nav">
        <img src="@/assets/images/erwm.png" alt="" />
        <div>在线合同签署</div>
      </div>
      <div class="dialog_txt">
        合同签署流程：微信扫码 - 进入腾讯电子签 - 查看合同模板 - 手机签名 -
        合同完成
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >已签署合同</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script >
import navigation from "@/components/website/Navigation.vue";
const cityOptions = ["Meta", "TikTok", "Kwai", "Snapchat"];
export default {
  components: { navigation },
  data() {
    return {
      tableData: [
        {
          categories: "标准户",
          type: "APP下载",
          illustrate: "健身APP下载",
          imgs: "@/assets/images/kwai.png",
        },
        {
          categories: "非标准户",
          type: "APP下载",
          illustrate: "棋牌类APP下载",
          imgs: "@/assets/images/kwai.png",
        },
      ],
      multipleSelection: [],
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      ruleForm: {
        nation: "",
        Link: "",
        type: [],
      },
      rules: {
        nation: [{ required: true, message: "请输入", trigger: "blur" }],
        link: [{ required: true, message: "link", trigger: "change" }],
        company: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
        ],
        credit: [
          {
            required: true,
            message: "请输入社会信用代码或注册登记号",
            trigger: "change",
          },
        ],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
        email: [
          { required: true, message: "请输入电子邮箱", trigger: "change" },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        // email: [{ required: true, message: "请输入电子邮箱", trigger: "change" }],
      },
      dialogVisible: false,
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  .content {
    max-width: 1200px;
    width: 100%;
  }
  .basic {
    background-color: #ffffff;
    padding: 56px 80px;
    margin: 96px 0 20px 0;
    border-radius: 16px;

    /deep/.el-checkbox__inner{
      width: 16px;
      height: 16px;
    }
    /deep/.el-checkbox__inner::after{
      border: 2px solid #FFFFFF;
      border-left: 0;
      border-top: 0;
      left: 5px;
    }

    .basic_title {
      font-size: 16px;
      font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
      font-weight: bold;
      color: #131414;
      line-height: 24px;
      margin-bottom: 16px;
    }
    .basic_nav {
      .tit {
        font-size: 14px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: #131414;
        line-height: 22px;
        margin: 8px 0;
      }
      .txt {
        > p {
          font-size: 14px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #606266;
          line-height: 22px;
          width: 547px;
        }
        p:nth-child(2) {
          padding-left: 28px;
        }
      }
    }
    .basic_table {
      margin: 24px 0;

      &:deep(.el-checkbox__inner) {
        width: 24px;
        height: 24px;
      }
      &:deep(.el-table__body-wrapper) {
        color: #131414;
      }
    }
    .hint {
      font-size: 12px;
      font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
      font-weight: 400;
      color: #606266;
      line-height: 22px;
    }
  }
  .info {
    background-color: #ffffff;
    border-radius: 16px;
    margin: 20px 0 124px;
    padding: 56px 80px;

    .info_title {
      font-size: 16px;
      font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
      font-weight: bold;
      color: #131414;
      line-height: 24px;
      margin-bottom: 24px;
    }

    .submits {
      text-align: center;
      margin-top: 56px;

      /deep/.el-button {
        padding: 16px 64px;
        border-radius: 6px;

        > span {
          font-size: 14px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
  }

  /deep/.el-form-item__label {
    color: #131414;
  }
}

.dialogs {
  div {
    font-size: 20px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #131414;
    line-height: 30px;
  }
  /deep/.el-dialog {
    border-radius: 16px;
    padding: 72px 56px;
    width: 840px !important;
  }
  /deep/.el-dialog__title {
    font-size: 32px;
    font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
    font-weight: bold;
    color: #131414;
    line-height: 42px;
  }
  /deep/.el-button--primary {
    font-size: 14px;
    font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
    font-weight: 400;
  }

  .dialog_nav {
    text-align: center;

    > img {
      width: 164px;
      height: 164px;
    }
  }
  .dialog_txt {
    margin: 40px 0;
  }
}
</style>