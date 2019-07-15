SET NAMES UTF8;
DROP DATABASE IF EXISTS mg;
CREATE DATABASE mg CHARSET=UTF8;
USE mg;


/**笔记本电脑型号家族**/
CREATE TABLE mg_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);


/**笔记本电脑**/
CREATE TABLE mg_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  promise VARCHAR(64),        #服务承诺
  spec VARCHAR(64),           #规格/颜色

  lname VARCHAR(32),          #商品名称
  os VARCHAR(32),             #操作系统
  memory VARCHAR(32),         #内存容量
  resolution VARCHAR(32),     #分辨率
  video_card VARCHAR(32),     #显卡型号
  cpu VARCHAR(32),            #处理器
  video_memory VARCHAR(32),   #显存容量
  category VARCHAR(32),       #所属分类
  disk VARCHAR(32),           #硬盘容量及类型
  details VARCHAR(1024),      #产品详细说明

  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);


/**笔记本电脑图片**/
CREATE TABLE mg_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #笔记本电脑编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);


/**用户信息**/
CREATE TABLE mg_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);


/*******************/
/******数据导入******/
/*******************/
/**笔记本电脑型号家族**/
INSERT INTO mg_laptop_family VALUES
(NULL,'集成吊顶LED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩'),
(NULL,'欧式客厅吊灯 全铜餐厅吊灯铜灯 3头 5头 6头 8头选择 罗马假日'),
(NULL,'欧普照明 装饰餐厅吊灯 精美玻璃灯壁 三头餐吊灯 晨曦'),
(NULL,'现代时尚吊灯 智能调光创意个性吊灯 米伦'),
(NULL,'led餐厅灯 浪漫现代简约 个性创意餐吊灯 月半弯'),
(NULL,'欧普照明 led餐厅吊灯 三头餐吊灯 买就送3个灯泡（4瓦黄光）醉清风'),
(NULL,'led餐厅灯浪漫 头餐吊灯个性 花之密语 买就送灯泡'),
(NULL,'简约灯具套餐 三室一厅 三室两厅 多套餐选择 月疏影'),
(NULL,'led灯泡e14 e27可选 3瓦 4瓦等多瓦数可选 升级款 光芒'),
(NULL,'时尚排插 纯白 多款可选');


/**笔记本电脑图片**/
INSERT INTO mg_laptop_pic VALUES
(NULL, 1, 'imgs/dengju/sm/1.jpg','imgs/dengju/md/1.jpg','imgs/dengju/lg/1.jpg'),
(NULL, 1, 'imgs/dengju/sm/1_1.jpg','imgs/dengju/md/1_1.jpg','imgs/dengju/lg/1_1.jpg'),
(NULL, 1, 'imgs/dengju/sm/1_2.jpg','imgs/dengju/md/1_2.jpg','imgs/dengju/lg/1_2.jpg'),
(NULL, 1, 'imgs/dengju/sm/1_3.jpg','imgs/dengju/md/1_3.jpg','imgs/dengju/lg/1_3.jpg'),
(NULL, 1, 'imgs/dengju/sm/1_4.jpg','imgs/dengju/md/1_4.jpg','imgs/dengju/lg/1_4.jpg'),
(NULL, 1, 'imgs/dengju/sm/1_5.jpg','imgs/dengju/md/1_5.jpg','imgs/dengju/lg/1_5.jpg'),
(NULL, 2, 'imgs/dengju/sm/2.jpg','imgs/dengju/md/2.jpg','imgs/dengju/lg/2.jpg'),
(NULL, 2, 'imgs/dengju/sm/2_1.jpg','imgs/dengju/md/2_1.jpg','imgs/dengju/lg/2_1.jpg'),
(NULL, 3, 'imgs/dengju/sm/3.jpg','imgs/dengju/md/3.jpg','imgs/dengju/lg/3.jpg'),
(NULL, 3, 'imgs/dengju/sm/3_1.jpg','imgs/dengju/md/3_1.jpg','imgs/dengju/lg/3_1.jpg'),
(NULL, 4, 'imgs/dengju/sm/4.jpg','imgs/dengju/md/4.jpg','imgs/dengju/lg/4.jpg'),
(NULL, 5, 'imgs/dengju/sm/5.jpg','imgs/dengju/md/5.jpg','imgs/dengju/lg/5.jpg'),
(NULL, 6, 'imgs/dengju/sm/6.jpg','imgs/dengju/md/6.jpg','imgs/dengju/lg/6.jpg'),
(NULL, 7, 'imgs/dengju/sm/7.jpg','imgs/dengju/md/7.jpg','imgs/dengju/lg/7.jpg'),
(NULL, 8, 'imgs/dengju/sm/8.jpg','imgs/dengju/md/8.jpg','imgs/dengju/lg/8.jpg'),
(NULL, 9, 'imgs/dengju/sm/9.jpg','imgs/dengju/md/9.jpg','imgs/dengju/lg/9.jpg'),
(NULL, 10, 'imgs/dengju/sm/10.jpg','imgs/dengju/md/10.jpg','imgs/dengju/lg/10.jpg'),
(NULL, 11, 'imgs/dengju/sm/10.jpg','imgs/dengju/md/10.jpg','imgs/dengju/lg/10.jpg');


/**笔记本电脑**/
INSERT INTO mg_laptop VALUES
(1,1,'集成吊顶QED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(2,1,'集成吊顶WED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(3,2,'集成吊顶EED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(4,3,'集成吊顶RED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(5,4,'集成吊顶TED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(6,5,'集成吊顶YED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(7,6,'集成吊顶UED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(8,7,'集成吊顶IED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(9,8,'集成吊顶OED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(10,9,'集成吊顶PED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true),
(11,10,'集成吊顶AED灯 平板灯厨卫灯厨房灯卫生间照明灯 明轩','满499减100 满999减300 满1999减600 满2999减900','88','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【经典款银色款】10瓦|300*300mm','明轩','LED','10瓦','300*300mm','【经典款银色款】','其他','其他','其他','其他','<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="imgs/dengju/smt/TB2d2_Oaae5V1Bjy1zjXXa08VXa_!!138006397.jpg">   </div>   </div>  <div class="formwork">   <div class="formwork_img">   <img alt="" class="" src="imgs/dengju/smt/TB2ZnXQXcIa61Bjy0FiXXc1XpXa_!!138006397.jpg">   </div>   </div>   <div class="formwork">   <div class="formwork_text">   技术规格请前往 www.mingu.com/index.html 查看完整版内容。</div></div></div>','2001617','9999',true);

/**用户信息**/
INSERT INTO mg_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');


-- ----------------------------
-- Table structure for `mg_shoppingcart_item`
-- ----------------------------
DROP TABLE IF EXISTS `mg_shoppingcart_item`;
CREATE TABLE `mg_shoppingcart_item` (
  `iid` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `product_id` int(11) default NULL,
  `count` int(11) default NULL,
  `is_checked` tinyint(1) default NULL,
  PRIMARY KEY  (`iid`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Records of mg_shoppingcart_item
-- ----------------------------

CREATE TABLE mg_admin(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
#4:添加一条条测试数据
#限定密码位数足够长 8
INSERT INTO mg_admin VALUES(null,'zzh',md5('123456'));