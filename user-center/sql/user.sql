use `user-center`;
drop table if exists user;
create table user
(
    id            bigint auto_increment comment 'id'
        primary key,
    username      varchar(256)                       null comment '用户昵称',
    user_account  varchar(256)                       null comment '用户账号',
    avatar_url    varchar(1024)                      null comment '用户头像',
    gender        tinyint                            null comment '性别',
    user_password varchar(512)                       null comment '密码',
    phone         varchar(128)                       null comment '手机号码',
    email         varchar(512)                       null comment '邮箱',
    user_status   int      default 0                 not null comment '用户状态.0 - 正常',
    create_time   datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time   datetime default CURRENT_TIMESTAMP not null comment '更新时间',
    is_delete     tinyint  default 0                 not null comment '是否删除.0 - 正常',
    user_role     int      default 0                 not null comment '用户角色.0-普通用户，1-管理员用户',
    planet_code   varchar(512)                       null comment '星球编号'
)
    comment '用户';

