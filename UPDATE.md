##########################

12.26
```
    项目今天开始，之后记录下每天的总结。
    
    首先，项目开始用的是create-react-app脚手架，因为之前学习mobX时，安装babel的decorator插件，老是运作不了报错，后来发现要
eject再配置才行。所以这次为了方便配置，新建好项目后我就直接执行了eject弹出，但问题来了，因为安装了antd，依赖less，但create-
react-app本身没有提供支持，需要自己配置。然后我根据antd的文档，按里面的步骤，安装了一大堆应用，还是不行，才知道antd官方文
档上写的方法都是基于没有eject的步骤，上面写着eject后请自己研究，我去~~后来网上百度文章，在webpack.config.js里添加less-
loader就行，到此就解决了这个问题，愉快地用上less ：—）
   
```


##########################

12.27
```
    按着antd文档的组件介绍，写好了静态页面和css，设计好大致布局，然后定好整个项目结构，还顺带写了几个相对简单的公用组件，
例如发布/修改文章的按钮组件和页面返回的组件。

    之后就写了一个DB.json文档，模拟后台数据，但因为不是真正的服务器，所以只能get，不能post和put，因此采用百度大法，网上
都推荐用mockjs和json-server去做mock，但看了下mockjs，感觉有点麻烦，因为我的json数据比较简单，而且只是用来测试get和post，
所以感觉用不上，就只用了json-server，安装好后在package.json的scripts项添加一个mock接口，下次直接yarn mock就行，方便调试。

    弄好json-server后，就开始写api去尝试get和post。我的DB.json里有4个分类，users记录用户信息；boards记录板块信息，有
boardId之类的；posts记录文章的信息，例如postId，所在板块的boardId，内容等；comments记录每条评论的commentId，对应文章
的postId等。

    根据官方文档，我是按http://localhos:port/target/id这种方式去尝试获取数据，但当我通过axios去post数据的时候，发现
总是会清空原数据，返回的错误信息是id为空，于是看文档，知道每个根类下的每项数据都必须设置一个id，因此我按文档方法去更改
id，但发现整个文档的id键名是一样的，因此无论post还是comment都必须要id项，不能用自己定义的postId和commentId键名作为id值。

    无奈之下我更改了DB.json里所有的关于id的数据，之后就能正常获取到了，然后根据文档介绍，用filter方式正常post和get到
数据了，之后封装好axios的get方法，方便日后使用。之后配置好路由，本身想用react.lazy和suspense去做code-splitting的，
但发现react-route报错，网上也没有相关的文章，花了不少时间。无奈之下使用react-loadable代替，问题解决了，为了方便，
也把loadable封装了一下。
    
```

##########################

12.28
```
    之前学习redux时也写过一些小demo，例如经典的todo list之类的，但都没有涉及异步操作，这次引入了redux-saga是想通过
这次去熟悉下异步action的操作，在网上看了半天文档，因为之前有了解过redux-thunk，所以理解redux-saga的基本用法没有很
大的困难，难就难在理清saga和reducers的关系，网上中文文档感觉说得挺迷糊，后来就去看了些DVA的文档看看。之前知道DVA是
对react全家桶的一个封装，我没有用过，但看文档觉得很清晰，个人理解嘛，感觉它的models跟vuex的store很类似，把所有数据
包含在一个地方调用，毕竟大家都知道，redux和redux-saga要写大量的reducer，action，saga文件，对我这种菜鸟来说会挺复
杂的。但因为本着学习的心态，所以我没有一开始就用DVA，还是用了官方推荐的create-react-app，不过我感觉如果真正工作的话，
用DVA应该会比较方便。

    言归正传，看了DVA的文档感觉理清了一点reducer和saga的关系，就开始上手撸代码了。
    
    根据之前写好的fetch api，写好相应的actionsTyeps，还有reducers的初始state，之后就按步骤将数据注入store并且
用connect连接组件和store，一开始是板块列表，文章列表和评论列表各有一个saga去负责，感觉高度重复，就合为一个saga，
actionsTypes也减少了不少，只留下获取list和post的type，然后写了一个过滤函数，调用时返回相应的数据库路径filter，然
后通过saga异步获取数据，加载到list里面，然后文章内容的post组件也完成了。
    
```
##########################

12.29
```
    继续昨天的剩下的工作，因为在加载文章信息，文章列表和评论列表三个组件里，需要写上发布者名称，但因为数据库只有
发布者的userId，因此需要加载时根据props传入的userId去异步获取相应的的用户名，我在postList里先做尝试，但发现直接在
组件的compinentDidMount里，用axios.get()去获取数据时，能成功获取信息，但有个bug，会不停地在后台发送请求，导致应用
卡死，在这里花了好多时间，还是解决不到，感觉不能再浪费时间，先放一放。

    因为之前注入state的时候，发现路由的match对象还是通过props的形式去传递，因为部分组件分了容器组件和UI组件，然后只
提供一个出口文件，因此这样传递有点麻烦，全部组件都必须要{...props}这样去传递路由信息，之所以发现是因为之前部分页面的
连接出问题，原来是我忘记在某个出口添加props，用redux不就是避免这种情况吗，于是我又看看github，发现有个connected-react-
router，把location数据封装在router里面，注入到store，然后在原本<Router>标签的位置用它提供的<ConnectedRouter>替换
掉就可以，另外需要注入history，还有如果需要使用它提供的action api，需要添加中间件。

    之后就约会去了哈哈

```