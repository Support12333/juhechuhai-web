<!-- 标准开户申请政策 -->
<template>
  <div>
    <navigation />
    <div class="main">
      <div class="body">
        <div>
          <div class="title">开户申请政策信息</div>
          <div class="content">
            <div class="txt">您的产品类自属于：标准户 APP下载</div>
            <div class="dates">合同执行期限：2022年6月6日起至2023年6月5日</div>
            <div>类目政策：结算政策</div>
            <div>
              1.充值金额（美元）*（汇率+汇损）=人民币付款金额（汇率按中行折算价的实时汇率。汇损5%；返点7%，月度按消耗返点）
            </div>
            <div>2.每个账户首充金额为1000美金</div>
            <div>
              3.如因为乙方渠道返点政策下调或取消对乙方的结算比例，甲乙双方应签署书面补充协议变更或取消结算比例，如双方不能对结算比例的变更或取消达成一致，则任一方有权终止主协议及本服务单，协议终止前已生效的广告消耗及结算依然有效，双方仍应按约定执行。
            </div>
            <div>
              4.甲方开户前需提供投放产品链接供乙方审核，乙方同意开户后，在产品推广中被封户，则被封停账户余额退还给甲方或按照甲方要求将余额转移到其他正常投放账户，如涉及到退款，被封账户余额需扣除返点后退还给甲方。
            </div>
            <div class="connect">
              <div>您的专属开户经理企业微信：</div>
              <img src="@/assets/images/erwm.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_btn">下一步</div>
            <div class="bottom_txt">点击下一步，进入开户审核阶段</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import navigation from "@/components/website/Navigation.vue";
export default {
  components: { navigation },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 103px 0 117px 0;

  .body {
    max-width: 1200px;
    background-color: #ffffff;
    border-radius: 16px;

    > div {
      padding: 80px 240px;
    }

    .title {
      font-size: 32px;
      font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
      font-weight: bold;
      color: #131414;
      line-height: 42px;
      text-align: center;
    }

    .content {
      > div {
        font-size: 20px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: #131414;
        line-height: 30px;
        margin: 8px 0;
      }
      > img {
        width: 164px;
        height: 164px;
      }
      .txt {
        margin: 40px 0 12px 0;
      }
      .dates {
        margin: 12px 0 32px 0;
      }
      .connect {
        margin: 32px 0 40px;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;

      .bottom_btn {
        width: 170px;
        height: 50px;
        background-color: #0086ff;
        border-radius: 6px;
        font-size: 14px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: #ffffff;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
      }
      .bottom_txt {
        font-size: 14px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: #606266;
        line-height: 22px;
        margin-top: 16px;
      }
    }
  }
}
</style>