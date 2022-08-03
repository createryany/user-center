# 后端实现

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