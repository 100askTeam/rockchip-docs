---
sidebar_position: 8
---
# 千兆网卡测试

源码SDK编译出的镜像中默认支持千兆网卡功能，本章节讲解如何测试千兆网卡。

## 测试

在进行千兆网卡功能测试前，准备一根可以上网的网线，网卡的位置如下图所示：

![image-20240723103252145](images/image-20240723103252145.png)

> 注意：请确保网线可以正常通过路由器进行联网

1.网线安装完成后，上电启动系统，进入串口终端，查看eth0节点是否存在，输入：

~~~bash
ifconfig -a
~~~

输入完成之后。即可看到eth0节点，如下图所示：

![image-20240723105715822](images/image-20240723105715822.png)

2.使能eth0网络设备节点，输入：

~~~bash
ifconfig eth0 up
~~~

输入完成后，即可通过`ifconfig`查看到使能后的网络设备节点，如下图所示：

![image-20240723105945429](images/image-20240723105945429.png)

3.将网线插入网卡之后，可以看到网卡座子处的绿色灯亮起，此时可以去获取eth0的IP地址，输入：

~~~bash
udhcpc -i eth0
~~~

输入完成后即可获取到路由器分配的ip地址，如下图所示：

![image-20240723110147263](images/image-20240723110147263.png)

可以看到1Gbps/Full。