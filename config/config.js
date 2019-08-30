export default {
  singular: true, // 将约定的pages文件夹变为page单数
  // 插件配置
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true
      }
    ]
  ],
  // 路由配置
  routes: [
    {
      path: "/",
      component: "./HelloWorld"
    }
  ]
};
