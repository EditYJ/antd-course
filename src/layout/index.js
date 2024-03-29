import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        {/* 侧边栏 */}
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          {/* logo部分 */}
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px"
            }}
          />
          {/* 菜单部分 */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                Helloworld
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/puzzlecards">
                <Icon type="pie-chart" />
                puzzlecards
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link to="/dashboard/analysis">分析页</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/monitor">监控页</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/dashboard/workplace">工作页</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        {/* 右侧部分 */}
        <Layout>
          {/* 头部 */}
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            header
          </Header>

          {/* 主体部分 */}
          <Content style={{ margin: "24px 16px 0" }}>
            <div 
              style={{ padding: 24, background: "#fff", minHeight: "360px" }}
            >
              {this.props.children}
            </div>
          </Content>

          {/* 页脚 */}
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
