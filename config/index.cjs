/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx5cdab9a23a87583f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fd4c9f5e401cb19d92129d7334c84a72',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJjni6vPRDE6bURK_mhHz0PWQBOc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FHG8vyEP51V5ozHfIHsu3Isgjsex_POUKNdFtQQ-Ojc',
      festivals: [
        {
          type: '生日', name: '宝贝老婆', year: '2000', date: '02-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-18' },
        // 相遇纪念日
        { keyword: 'marry_day', date: '2023-12-27' },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'vas1fSPy1_QXkuDfo7Al6Xgp4Ui3X27DfEYreXZ7jRg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJjni6gkAuJAwJiFkGT2z0O9SAgw',
    }
  ],

}

module.exports = USER_CONFIG

