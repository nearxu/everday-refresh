## mysql 基础知识第一天

知识总结相关文章

# https://segmentfault.com/a/1190000006876419

# http://www.runoob.com/mysql/mysql-administration.html

启动：

1.cd c:\mysql\bin

2.mysqld --console || 2.net start mysql

关闭：

1.cd c:\mysql\bin

2.mysqladmin -uroot shutdown || 2.net stop mysql

// 登录 MySQL
mysql -h 127.0.0.1 -u 用户名 -p
mysql -D 所选择的数据库名 -h 主机名 -u 用户名 -p
mysql> exit # 退出 使用 “quit;” 或 “\q;” 一样的效果
mysql> status; # 显示当前 mysql 的 version 的各种信息
mysql> select version(); # 显示当前 mysql 的 version 信息
mysql> show global variables like 'port'; # 查看 MySQL 端口号
