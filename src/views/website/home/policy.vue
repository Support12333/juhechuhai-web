<!-- 标准开户申请政策 -->
<template>
  <div class="main">
    <div class="body">
      <div class="title">开户申请政策信息</div>
      <div class="content">
        <div>您的产品类自属于：标准户 APP下载</div>
        <div>合同执行期限：2022年6月6日起至2023年6月5日</div>
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
        <div>您的专属开户经理企业微信：</div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;

  .body {
    max-width: 1200px;
    background-color: #ffffff;
    padding: 80px 240px;
    margin: 103px 0 117px 0;

    .title {
      font-size: 32px;
      font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
      font-weight: bold;
      color: #131414;
      line-height: 42px;
    }

    .content {
      > div {
        font-size: 20px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: #131414;
        line-height: 30px;
      }
    }
  }
}
</style>