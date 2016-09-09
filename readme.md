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



帮助 man git ~~  ;  git help ~~
git config --list
