# RUYISDK docs
文档包括RUYISDK的总体介绍，和各个组成部分的详细说明、构建过程和使用方法

### 使用说明
#### 安装依赖

```
 pip install -U Sphinx
 pip install --user -r requirements-doc.txt
 ```

#### 编译
```
make html
```

#### 运行测试

```
cd build/html
本机访问  ip:8000
python3 -m http.server 8000

允许其他主机访问 ip:8000
python3 -m http.server --bind 0.0.0.0 8000
```
