// 参考 http://wiki.ubuntu.org.cn/Ubuntu%E6%A1%8C%E9%9D%A2%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97#1.3.1..E2.80.83.E7.9B.AE.E5.BD.95.E5.92.8C.E6.96.87.E4.BB.B6.E7.B3.BB.E7.BB.9F

查看目录： ls
ls(List) 用不同颜色、经过排列的文本列出目录下的文件。
创建目录： mkdir(目录名)
mkdir(MaKeDIRectory) 命令可以创建目录。
切换目录： cd(directory / location)
cd(ChangeDirectory) 命令可以从您的当前目录切换到您指定的任意目录。
复制文件 / 目录： cp(源文件或目录名)(目标目录或文件名)
cp(CoPy) 命令会拷贝您指定的任意文件。cp - r 命令则可以拷贝您指定的任意目录（注：包括该目录里的文件和子目录）。
删除文件 / 目录： rm （文件或目录名）
rm(ReMove) 可以删除您指定的任意文件。rm - rf 命令则可以删除您指定的任意目录（注：包括该目录里的文件和子目录）。
重命名文件 / 目录： mv （文件或目录名）
mv(MoVe) 命令可以重命名 / 移动您指定的任意文件或目录。


安装软件包：
sudo apt - get install packagename
删除软件包：
sudo apt - get remove packagename
获取新的软件包列表：
sudo apt - get update
升级有可用更新的系统：
sudo apt - get upgrade
列出更多命令和选项：
apt - get help