# 用户中心
适用于所有系统的用户中心，能作为模板系统去使用

# 后端实现(user-center/*)
## 需求分析

1. **登录 / 注册**
2. **用户管理（仅管理员可见）对用户的查询或者修改**
3. 用户校验

## 技术选型

- java
- spring（依赖注入框架，帮助你管理 Java 对象，集成一些其他的内容）
- springmvc（web 框架，提供接口访问、restful接口等能力）
- mybatis（Java 操作数据库的框架，持久层框架，对 jdbc 的封装）
- mybatis-plus（对 mybatis 的增强，不用写 sql 也能实现增删改查）
- springboot（**快速启动** / 快速集成项目。不用自己管理 spring 配置，不用自己整合各种框架）
- junit 单元测试库
- mysql 数据库

## 开发笔记

三种初始化Java的方法

 	1. Github搜索相关的项目代码
 	2. SpringBoot 官方的模板生成器（https://start.spring.io/）
 	3. 直接在 IDEA 开发工具中生成 （推荐）

如果要引入 java 的包，可以去 maven 中心仓库寻找（http://mvnrepository.com/）



## 数据库设计

有哪些表（模型）？表中有哪些字段？字段的类型？数据库字段添加索引？

表与表之间的关联~

**性别是否需要加索引？**



用户表：

id（主键）bigint

username 昵称  varchar

user_account 登录账号 

avatar_url 头像 varchar

gender 性别 tinyint

user_password 密码  varchar

phone 电话 varchar

email 邮箱 varchar

user_status 用户状态 int  0 - 正常 

---

create_time 创建时间（数据插入时间）datetime

update_time 更新时间（数据更新时间）datetime

is_delete 是否删除 0 1（逻辑删除）tinyint



## 自动生成器

MyBatisX 插件，自动根据数据库生成 domain 实体对象、mapper（操作数据库的对象）、mapper.xml（定义了 mapper对象和数据库的关联，可以在里面自己写 SQL）、service（包含常用的增删改查）、serviceImpl（具体实现 service）



## 功能逻辑与实现

### 注册逻辑

1. 用户在前端输入账户和密码、以及校验码（TODO）
2. 校验用户的账户、密码、校验密码，是否符合要求
   1. 非空
   2. 账户长度 **不小于** 4 位
   3. 密码 **不小于** 8 位
   4. 账户不能重复
   5. 账户不包含特殊字符
   6. 密码和校验密码相同
3. 对密码进行加密（密码千万不要直接以明文存储到数据库中）
4. 向数据库插入用户数据

### 登录逻辑

接收参数：用户账户、密码

请求参数：POST

请求体：JSON格式（RPC了解）

> 请求参数很长时不建议用get请求

返回值：用户信息（**脱敏**）

	#### 逻辑

1. 校验用户账户和密码是否合法
   1. 非空
   2. 账户长度 **不小于** 4 位
   3. 密码 **不小于** 8 位
   4. 账户不包含特殊字符

2. 校验密码是否输入正确，要和数据库中的密文密码进行对比
3. 用户信息脱敏，隐藏敏感信息，防止数据库中的敏感字段泄露
4. 记录用户的登录状态（session），将其保存到服务器上（使用 SpringBoot 框架封装的服务器 Tomcat 去记录）cookie
5. 返回脱敏后的用户信息

##### 如何记录用户登录状态？

1. 连接服务端后，得到一个 session 状态，返回给前端

2. 登录成功后，得到了登录成功的 session，变更且给改 session 设置一些值（比如：用户信息），返回给前端一个设置 cookie 的“命令”

   **session => cookie**

3. 前端接收到命令后，设置 cookie，保存到浏览器内

4. 前端再次请求后端的时候（相同的域名），再请求头中带上 cookie 去请求

5. 后端拿到前端传来的 cookie，找到对应的 session

6. 后端从 session 中取出基于该 session 保存的变量（用户登录信息、登录名...）



## 控制层 Controller 封装请求

```java
@RestController 适用于编写 restful 风格的 api，返回值默认为 json 类型
```

controller 层倾向于对请求参数本身的校验，不涉及业务逻辑本身（越少越好）

service 层对业务逻辑的校验（有可能被 controller 之外的类调用）

## 用户管理接口

！！！ 必须鉴权

1. 查询用户
   1. 允许根据用户名查询
2. 删除用户
