git init 
// 初始化本地仓库

git add .
// 添加全部已经修改的文件，准备commit 提交 

git commit -m ‘提交说明’
// 将修改后的文件提交到本地仓库，
//如：git commit -m ‘增加README.md说明文档’

// 连接到远程仓库，并将代码同步到远程仓库
git remote add origin url // 远程仓库地址

git push -u origin master
// 创建一个 upStream （上传流），并将本地代码通过这个 
// upStream 推送到 别名为 origin 的仓库中的 master 分支上