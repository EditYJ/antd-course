export default {
  singular: true, // 将约定的pages文件夹变为page单数
  // 插件配置
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
      }
    ]
  ],
  // 路由配置
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/",
          component: "HelloWorld"
        },
        {
          path: "/helloworld",
          component: "HelloWorld"
        },
        {
          path: "/puzzlecards",
          component: "puzzlecards"
        },
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "Dashboard/Analysis" },
            { path: "/dashboard/monitor", component: "Dashboard/Monitor" },
            { path: "/dashboard/workplace", component: "Dashboard/Workplace" }
          ]
        }
      ]
    }
  ]
};
