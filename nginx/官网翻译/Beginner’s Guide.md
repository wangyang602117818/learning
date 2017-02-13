## 使用指导 ##
该文档给出了nginx的基本说明，并给出了一些基本案例来配合使用，该文档假设nginx已经在你的机器上安装好了，如果没有安装好，请参考*Installing nginx* 页，该文档概括了怎样 启动 停止 nginx 、重新加载配置文件、配置文件的结构、怎样设置 nginx 让其对外提供静态内容的服务、怎样设置 nginx 为代理服务器、怎样连接到 FastCGI 应用程序

nginx有一个 master process，和多个worker processes，master process的主要工作内容是读取和评估配置文件,管理worker processes。实际的 request 由worker processes来处理，nginx使用基于事件的模型和依赖操作系统的原理来高效的在每个worker processes中分发请求，worker processes的数量在配置文件中定义：可能是一个给出的固定值，也可能是根据cpu的核心数进行自动调整

nginx和它的模块的工作方式在配置文件中定义。默认的，配置文件的名字是 nginx.conf ，可能在 /usr/local/nginx/conf, /etc/nginx, or /usr/local/etc/nginx 这3个文件夹中

###启动，停止，重新加载配置文件###
运行 可执行文件 来启动nginx，一旦nginx启动了，可以运行带参数 -s 参数的可执行文件来控制它，使用下面的语法

nginx -s signal

signal可能是下面中的一个

- stop  快速停止
- quit  优雅的停止
- reload 重新加载配置文件
- reopen 重新打开日志文件

举个例子，结束 nginx 进程并且 等待 worker process 完成当前的请求，可以使用下面的命令

nginx -s quit (该命令应当使用 与启动 nginx 相同的 user 来执行)

改变配置文件并不会立即生效，除非向 nginx 发送重新加载配置文件的命令，或者重启 nginx，重新加载配置文件 执行：

nginx -s reload

一旦  master process 接收到重新加载配置文件的命令，它会检查新的配置文件的合法性，并且尝试着运行新的配置文件，如果成功了，master process 会开启新的 worker process，并且发送消息给旧的worker process：要求他们关闭，否则 master process 回滚改变继续运行旧的配置文件。旧的 worker process，接收到关闭的命令后，停止接收新的连接并且继续执行当前的请求，直到所有的请求都处理完成后，旧的 worker process 关闭。

