<template>
  <div class="home">
    <navigation />
    <div class="content">
      <div class="main">
        <div class="top_title">
          <span>开户申请</span>一次注册，所有平台全搞定
        </div>
        <div class="function">
          <div class="function_item">
            <img src="@/assets/images/facebook.png" alt="" />
            <div class="item_title">Meta Ads</div>
            <div class="item_txt">官方授权代理商</div>
            <div class="item_p">
              全球最大的社交平台，亦是全球最佳精准的营销平台之一。依托24亿用户的庞大全球化社群发展您的业务。
            </div>
            <div class="item_row">
              <span>了解更多</span><span>开户须知</span>
            </div>
            <div class="item_btn"><div>提户申请</div></div>
          </div>
          <div class="function_item">
            <img src="@/assets/images/tiktok.png" alt="" />
            <div class="item_title">TikTok Ads</div>
            <div class="item_txt">官方授权代理商</div>
            <div class="item_p">
              抖音国际版，风全球短视频社交平台，海量新潮年轻用户，通过强导流强光的短视频内容带来更高转化率。
            </div>
            <div class="item_row"><span>了解更多</span></div>
            <div class="item_btn"><div>提户申请</div></div>
          </div>
          <div class="function_item">
            <img src="@/assets/images/google.png" alt="" />
            <div class="item_title">Google Ads</div>
            <div class="item_txt">官方授权代理商</div>
            <div class="item_p">
              全球最大的搜索引擎公司，拥有近30亿月活用户，在客户搜索您的产品或服务的那一刻，恰当其时展示广告。
            </div>
            <div class="item_row"><span>了解更多</span></div>
            <div class="item_btn"><div>提户申请</div></div>
          </div>
        </div>
        <div class="nav">
          <div class="nav_content">
            <img src="@/assets/images/snapchat.png" alt="" />
            <div class="nav_txt">
              <div>Snapchat</div>
              <div>
                平均每天有3.19亿人使用，在千禧一代的渗透率达76%，通过全屏数字广告成为Snapchatters日常对话的一部分，这些广告能够帮助吸引潜在优质受众
              </div>
            </div>
            <div class="nav_btn">了解更多</div>
          </div>
          <div class="nav_content">
            <img src="@/assets/images/kwai.png" alt="" />
            <div class="nav_txt">
              <div>kwai</div>
              <div>
                快手短视频、快手直播的火热，在短短的几年时间内已捕获了超过5亿的用户。有流量的地方就可以让自己的产品实现变现，还可以增强噪光率和提升品牌的形象。
              </div>
            </div>
            <div class="nav_btn">了解更多</div>
          </div>
          <div class="nav_content">
            <img src="@/assets/images/twitter.png" alt="" />
            <div class="nav_txt">
              <div>Twitter</div>
              <div>
                覆盖欧美、北美、日韩等流量聚集地，平均月活用户达3.28亿，其中移动用户占比80%，全漏斗解决方案，帮助网站或移动应用提升用户参与度
              </div>
            </div>
            <div class="nav_btn">了解更多</div>
          </div>
          <div class="nav_content">
            <img src="@/assets/images/bing.png" alt="" />
            <div class="nav_txt">
              <div>bing</div>
              <div>
                超过5亿的PC端受众客户，覆盖优质客户集中群，高于一般互联网搜索用户平均消费的38%，多种产品适合不用类型的广告主和不同的业务目标
              </div>
            </div>
            <div class="nav_btn">了解更多</div>
          </div>
          <div class="nav_content">
            <img src="@/assets/images/yahoo.png" alt="" />
            <div class="nav_txt">
              <div>Yahoo</div>
              <div>
                业务遍及24个国家和地区，为全球超过5亿的独立用户提供多元化的网络服务。适合新闻、体育、通讯、财经、娱乐等各种广告类型
              </div>
            </div>
            <div class="nav_btn">了解更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
import navigation from "@/components/website/Navigation.vue";
export default {
  components: { navigation },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.home {
  .content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .main {
    max-width: 1200px;
    overflow: auto;

    .top_title {
      font-size: 40px;
      color: #000000;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      line-height: 47px;
      margin-top: 96px;

      > span {
        color: #0086ff;
        font-weight: 600;
      }
    }
    .function {
      display: flex;
      margin: 72px 0;

      > div:nth-child(1) {
        margin-right: 8px;
      }
      > div:nth-child(2) {
        margin: 0 8px;
      }
      > div:nth-child(3) {
        margin-left: 8px;
      }

      .function_item {
        background-color: #ffffff;
        padding: 72px;
        text-align: center;
        border-radius: 16px;

        > img {
          width: 116px;
          height: 116px;
        }

        .item_title {
          font-size: 32px;
          font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
          font-weight: bold;
          color: #131414;
          margin: 24px 0 8px 0;
        }

        .item_txt {
          font-size: 16px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #0086ff;
        }

        .item_p {
          font-size: 16px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #131414;
          margin: 24px 0 8px 0;
          text-align: left;
        }

        .item_row {
          font-size: 14px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #0086ff;
          line-height: 16px;
          text-align: left;

          > span:nth-child(1) {
            margin-right: 8px;
          }
        }

        .item_btn {
          margin-top: 40px;
          display: flex;
          justify-content: center;

          > div {
            width: 152px;
            height: 42px;
            background-color: #0086ff;
            font-size: 14px;
            font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
            font-weight: 400;
            color: #ffffff;
            line-height: 42px;
            border-radius: 6px;
          }
        }
      }
    }
    .nav {
      > div:nth-child(1) {
        margin-bottom: 8px;
      }

      .nav_content {
        display: flex;
        padding: 32px 24px;
        margin: 8px 0;

        > img {
          width: 96px;
          height: 96px;
        }

        .nav_txt {
          margin: 0 130px 0 32px;

          > div:nth-child(1) {
            font-size: 24px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
            color: #131414;
            line-height: 36px;
          }

          > div:nth-child(1) {
            font-size: 16px;
            font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
            font-weight: 400;
            color: #131414;
            line-height: 24px;
          }
        }

        .nav_btn {
          font-size: 16px;
          font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
          font-weight: 400;
          color: #0086ff;
          line-height: 19px;
          margin: 0 16px;
        }
      }
    }
    .nav:last-child {
      margin-top: 8px;
    }
  }
}
</style>