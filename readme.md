monogdb启动：
mongod --dbpath="/Users/mengyue/mongodb/db" --logpath="/Users/mengyue/mongodb/log/log.log" -logappend

shell命令：
mongo
show dbs
show collections
show users

创建与进入:  use database
删除: db.dropDatabase()
集合删除: db.collection.drop()
删除集合中所有数据：db.col.remove()

新增：db.createCollection()
信息：capped集合建制, size, max, autoIndexId

db.addUser(name, password, readyonly)
db.auth(name, word)
db.removeUser(name)

操作数据：
db.foo.find()




git 项目创建：
git init
git add/commit
git remote add origin git@
git push

撤销 add (untracked--->tracked; staged-->commit)
git rm  --cached log/\*.log
撤销 commit
git reset HEAD
撤销 push

撤销修改：git checkout  --file


git log  历史提交
git diff  补丁的格式，哪些暂存，哪些无暂存

git merge 合并到当前分支
git branch --merged/no-merged  已合并或未合并分支


帮助 man git ~~  ;  git help ~~
git config --list
命令别名：git config alias.co checkout/'多重命令'
外部命令：git config alias.co '!命令'



Iterator: 集合, 统一访问机制;  [Symbol.iterator]
1、创建指针对象, 指向数据结构的起始位置;
2、next，指向第一个成员;  返回value与done
3、不断next, 直到数据结构结束位置。
4、return 方法，for  of循环提前退出是执行。

解构：[a,b] = aa, [a, ...b] = set
yield* [a,b,c]

Generator函数：
1、头部
2、遇到yield或return停, 后面的表达式作为返回的value; next是恢复执行。
3、yield 语句在达式内，要放在小括号里
4、next参数为上一个yield的返回值。

对象属性
*method(){}

Symbol.iterator为遍历器函数，执行返回遍历器对象



npm run   无参数, 执行所有脚本。start与test时无需run

命令：输出为另一个输入 | 或npm run 加&&
>     <
也可以是bash脚本


参数：-s 关闭npm的输出, 只输出产生的结果

node: 
module.exports
exports

es6:
export


Linux命令：
grep---搜索文本；搜索字符串模板，包含空白，则必须被引用，模板后字符串被看作文件名。
常用参数：
-a, 二进制文件以text方式搜寻数据
-c, 搜寻字符串的次数
i,  忽略大小写
n,  输出行号
v, 反向选择
--color=auto

* 当前目录文件
-r   当前及其子目录
-l   不显示行
