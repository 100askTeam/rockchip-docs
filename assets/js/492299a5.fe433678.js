"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4778],{739:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var s=l(5893),i=l(1151);const c={sidebar_position:2},d="\u79fb\u690dV9.2-LVGL",r={id:"100ASK-RK3568-Devdocumentation/part3/LVGLFast",title:"\u79fb\u690dV9.2-LVGL",description:"\u672c\u7ae0\u8282\u5c06\u8bb2\u89e3\u5982\u4f55\u79fb\u690d LVGL-v9.2 \u5b98\u65b9\u4f8b\u7a0b\u81f3 100ask-RK3568 \u5f00\u53d1\u677f\u3002",source:"@site/docs/100ASK-RK3568-Devdocumentation/part3/02-LVGLFast.md",sourceDirName:"100ASK-RK3568-Devdocumentation/part3",slug:"/100ASK-RK3568-Devdocumentation/part3/LVGLFast",permalink:"/docs/100ASK-RK3568-Devdocumentation/part3/LVGLFast",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/100ASK-RK3568-Devdocumentation/part3/02-LVGLFast.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"rk3568Sidebar",previous:{title:"Hello\u5feb\u901f\u5165\u95e8",permalink:"/docs/100ASK-RK3568-Devdocumentation/part3/HelloWorldFast"},next:{title:"SDK\u5f00\u53d1",permalink:"/docs/category/sdk\u5f00\u53d1"}},t={},a=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u8fde\u63a5\u5f00\u53d1\u677f",id:"\u8fde\u63a5\u5f00\u53d1\u677f",level:2},{value:"\u4ea4\u53c9\u7f16\u8bd1lvgl\u6e90\u7801",id:"\u4ea4\u53c9\u7f16\u8bd1lvgl\u6e90\u7801",level:2},{value:"\u83b7\u53d6lvgl\u6e90\u7801",id:"\u83b7\u53d6lvgl\u6e90\u7801",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u51c6\u5907",id:"\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u51c6\u5907",level:3},{value:"\u7f16\u8bd1\u4f8b\u7a0b",id:"\u7f16\u8bd1\u4f8b\u7a0b",level:3},{value:"\u4e0a\u4f20\u7a0b\u5e8f\u5e76\u8fd0\u884c",id:"\u4e0a\u4f20\u7a0b\u5e8f\u5e76\u8fd0\u884c",level:2},{value:"\u6dfb\u52a0\u89e6\u6478\u529f\u80fd",id:"\u6dfb\u52a0\u89e6\u6478\u529f\u80fd",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u79fb\u690dv92-lvgl",children:"\u79fb\u690dV9.2-LVGL"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7ae0\u8282\u5c06\u8bb2\u89e3\u5982\u4f55\u79fb\u690d LVGL-v9.2 \u5b98\u65b9\u4f8b\u7a0b\u81f3 100ask-RK3568 \u5f00\u53d1\u677f\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u786c\u4ef6\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"TypeC\u7ebf x1"}),"\n",(0,s.jsx)(e.li,{children:"TTL\u8f6c\u4e32\u53e3\u6a21\u5757 x1"}),"\n",(0,s.jsx)(e.li,{children:"12v\u7535\u6e90\u9002\u914d\u5668"}),"\n",(0,s.jsxs)(e.li,{children:["4\u5bf8MiPi\u5c4f ",(0,s.jsx)(e.a,{href:"https://detail.tmall.com/item.htm?spm=a21n57.1.item.47.7a34523cQFFK9o&priceTId=2147815317249010973624408e1cac&utparam=%7B%22aplus_abtest%22:%22be747d2137a72f53186e76e1e5eb9fdc%22%7D&id=732427203033&ns=1&abbucket=7&xxc=taobaoSearch&pisk=fTiiKIxp7Vz6LLtU89r6ke-D3NYpWOZb5jIYMoF28WPCXrPv5j4mMXaqXlHttSl-i-ntDm0CmYMjXdZvClM_coRJw3hmCAZjun_RocjULRHF0irVsAr1QoRJwnbdLPOT0qFBFzeF88NUQ-z4upxUh8Z43rSwKWy0FZ5ZgjkeK-eVbSP406WUB-qV_5z4LyyzHSSa05PeK-NUgcCC07mqADRwqRyTUD-iXR4gimelmRoF2yVPdWScmKegSNHatiSqx2TkjeFwP9FbX5gzIjt5flzmPxemshjZiYiItJlymgFZdY385c-5lzqaOrnavt-ZLkFgzPaGIMMTb5zrfc6NXXU0s2oa-tSqdlP0uqcMsNNZWX47LyWDVJh8TAiZ-K1EQbFgbJzp4LDUu2n_PcdFjuuSBl3qGUQQjxuaxg7N8a-KviweHD7flPyQK7eZvmXlwJiZtpvhPFaadRdJKpbflPyQK7pHKa1_7Jw9w",children:"\u8d2d\u4e70\u94fe\u63a5"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8f6f\u4ef6\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8f6f\u4ef6\uff1a\u7ec8\u7aef\u5de5\u5177 MobaXterm"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fde\u63a5\u5f00\u53d1\u677f",children:"\u8fde\u63a5\u5f00\u53d1\u677f"}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u540e\u9762\u64cd\u4f5c\u524d\uff0c\u9700\u8981\u8fde\u63a5\u597d\u5f00\u53d1\u677f\u3002\u5982\u679c\u4e0d\u6e05\u695a\u5982\u4f55\u8fde\u63a5\u5f00\u53d1\u677f\u767b\u5f55\u4e32\u53e3\u7ec8\u7aef\u548c\u4f7f\u7528ADB\uff0c\u53ef\u4ee5\u5148\u9605\u8bfb\u300a\u542f\u52a8\u5f00\u53d1\u677f\u300b\u7ae0\u8282\u3002\u57fa\u7840\u8fde\u63a5\u4e4b\u540e\uff0c\u8fd8\u9700\u8981\u63a5\u4e0a4\u5bf8MiPi\u5c4f\uff08",(0,s.jsx)(e.strong,{children:"\u5148\u63a5\u4e0a\u5c4f\u5e55\u518d\u7ed9\u5f00\u53d1\u677f\u4e0a\u7535"}),"\uff09\uff0cMIPI\u5c4f\u8fde\u63a5\u53c2\u8003\u300aMIPI\u5c4f\u663e\u793a\u6d4b\u8bd5\u300b\u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4ea4\u53c9\u7f16\u8bd1lvgl\u6e90\u7801",children:"\u4ea4\u53c9\u7f16\u8bd1lvgl\u6e90\u7801"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u6e90\u7801\u6307\u7684\u662f lvgl\u5b98\u65b9 \u63d0\u4f9b\u7684 LVGL on top of Linux graphics stack \u65b9\u6848\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u83b7\u53d6lvgl\u6e90\u7801",children:"\u83b7\u53d6lvgl\u6e90\u7801"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Ubuntu \u4e2d\uff0c\u65b0\u5efa\u7ec8\u7aef\uff0c\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55 ",(0,s.jsx)(e.code,{children:"~/lvgl_v9.2"})," \u7528\u4e8e\u5b58\u653elvgl\u6e90\u7801\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~$ mkdir lvgl_v9.2\nubuntu@ubuntu2004:~$ cd lvgl_v9.2\nubuntu@ubuntu2004:~/lvgl_v9.2$\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff0c\u83b7\u53d6lvgl\u6e90\u7801\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/lvgl/lv_port_linux.git\ncd lv_port_linux/\ngit submodule update --init --recursive\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u8fd9\u4e48\u4e00\u4e9b\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ tree -L 1\n.\n\u251c\u2500\u2500 backends\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 docker\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 lv_conf.defaults\n\u251c\u2500\u2500 lv_conf.h\n\u251c\u2500\u2500 lvgl\n\u251c\u2500\u2500 main.c\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 manifest.json\n\u251c\u2500\u2500 mouse_cursor_icon.c\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 scripts\n\n4 directories, 9 files\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u51c6\u5907",children:"\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u51c6\u5907"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u76ee\u6807\u8bbe\u5907\u4e0a\u8fd0\u884c lvgl \u4f8b\u7a0b\uff0c\u9700\u8981\u4f7f\u7528\u76f8\u5e94\u7684\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u6765\u7f16\u8bd1\u4f8b\u7a0b\u3002100ask-RK3568\u5f00\u53d1\u677f\u7684\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u662f(\u5b9e\u9645\u8def\u5f84\u4e0d\u4e00\u5b9a\u76f8\u540c)\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"/home/ubuntu/100ask-RK3568-SDK/rk3568_4.19_v1.3.2/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u4e0b\u9762\u76ee\u5f55\u4e2d\uff0c\u7f16\u5199 ",(0,s.jsx)(e.code,{children:"toolchain.cmake"})," \uff0c\u65b9\u4fbf\u7528\u4e8e\u6307\u5b9a\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ vi toolchain.cmake\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u5b9e\u9645\u8def\u5f84\uff0c\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'set(CMAKE_SYSTEM_NAME Linux)\nset(CMAKE_SYSTEM_PROCESSOR arm64)\n\nset(tools "/home/ubuntu/100ask-RK3568-SDK/rk3568_4.19_v1.3.2/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu")\nset(CMAKE_C_COMPILER ${tools}/bin/aarch64-none-linux-gnu-gcc)\nset(CMAKE_CXX_COMPILER ${tools}/bin/aarch64-none-linux-gnu-g++)\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u586b\u5199\u5b8c\u6210\u540e\uff0c\u4fdd\u5b58\u9000\u51fa\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u7f16\u8bd1\u4f8b\u7a0b",children:"\u7f16\u8bd1\u4f8b\u7a0b"}),"\n",(0,s.jsxs)(e.p,{children:["\u6307\u5b9a\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u4e4b\u540e\uff0c\u4e3a\u4e86\u66f4\u52a0\u65b9\u4fbf\u6267\u884c\u7f16\u8bd1\u64cd\u4f5c\uff0c\u5728\u4e0b\u9762\u7684\u76ee\u5f55\u4e2d\uff0c\u7f16\u5199\u4e00\u4e2a\u5c0f\u811a\u672c ",(0,s.jsx)(e.code,{children:"build.sh"}),"\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ vi build.sh\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'rm -rf build\nmkdir -p build\ncd build/\ncmake -DCMAKE_TOOLCHAIN_FILE="../toolchain.cmake" ..\nmake -j32\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u6e05\u695a\u4ee5\u4e0a\u5185\u5bb9\u7684\u4f5c\u7528\uff0c\u5efa\u8bae\u4e86\u89e3cmake\u4e00\u822c\u662f\u5982\u4f55\u7f16\u8bd1\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u586b\u5199\u5b8c\u6210\u540e\uff0c\u4fdd\u5b58\u9000\u51fa\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u63a5\u7740\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff0c\u4e3a\u811a\u672c ",(0,s.jsx)(e.code,{children:"build.sh"})," \u8bbe\u7f6e\u6267\u884c\u6743\u9650\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ sudo chmod +x build.sh\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u5207\u51c6\u5907\u5c31\u7eea\uff0c\u542f\u52a8\u811a\u672c\u7f16\u8bd1\u7a0b\u5e8f\uff0c"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"cmake \u7248\u672c\u8981\u5927\u4e8e 3.12.4\uff0c\u5426\u5219\u7f16\u8bd1\u62a5\u9519"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ ./build.sh\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20241112165004584",src:l(1617).Z+"",width:"1589",height:"827"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5e94\u7528\u7a0b\u5e8f ",(0,s.jsx)(e.code,{children:"lvglsim"})," \uff0c\u4fdd\u5b58\u5728\u5f53\u524d\u76ee\u5f55 ",(0,s.jsx)(e.code,{children:"bin/"})," \u6587\u4ef6\u4e0b\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux/bin$ ls\nlvglsim\nubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux/bin$ file lvglsim \nlvglsim: ELF 64-bit LSB executable, ARM aarch64, version 1 (GNU/Linux), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, with debug_info, not stripped\nubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux/bin$\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4e0a\u4f20\u7a0b\u5e8f\u5e76\u8fd0\u884c",children:"\u4e0a\u4f20\u7a0b\u5e8f\u5e76\u8fd0\u884c"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Ubuntu \u4e2d\uff0c\u4f7f\u7528adb\u5de5\u5177\u4e0a\u4f20\u5e94\u7528\u7a0b\u5e8f ",(0,s.jsx)(e.code,{children:"lvglsim"})," \uff0c\u8fd9\u91cc\u4e0a\u4f20\u5230\u5f00\u53d1\u677f ",(0,s.jsx)(e.code,{children:"/mnt/udisk/"})," \u8def\u5f84\u4e0b\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu2004:~/lvgl_v9.2/lv_port_linux$ adb push bin/lvglsim /mnt/udisk/\nbin/lvglsim: 1 file pushed. 6.9 MB/s (2633648 bytes in 0.363s)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fdb\u5165\u5f00\u53d1\u677f\u7ec8\u7aef\uff08\u53ef\u4e32\u53e3\u548cadb\u767b\u5f55\uff09\uff0c\u5728 ",(0,s.jsx)(e.code,{children:"/mnt/udisk/"})," \u8def\u5f84\u4e0b\u53ef\u4ee5\u770b\u5230 ",(0,s.jsx)(e.code,{children:"lvglsim"}),"\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@RK356X:/# cd /mnt/udisk/\nroot@RK356X:/mnt/udisk# ls\nlvglsim\nroot@RK356X:/mnt/udisk#\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5f53\u524d\u8def\u5f84\u4e0b\uff0c\u6267\u884c\u7a0b\u5e8f",(0,s.jsx)(e.code,{children:"lvglsim"}),"\uff0c\u53ef\u4ee5\u770b\u5230\u5c4f\u5e55\u663e\u793a\u4e86 lvgl \u4f8b\u7a0b\uff0c\u5982\u4e0b\u56fe\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20241226172600129",src:l(9918).Z+"",width:"1757",height:"1071"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0\u89e6\u6478\u529f\u80fd",children:"\u6dfb\u52a0\u89e6\u6478\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 lvgl \u6e90\u7801\u4e0a\u6dfb\u52a0\u89e6\u6478\u652f\u6301\u6bd4\u8f83\u7b80\u5355\uff0c\u5728 Ubuntu \u4e2d\uff0c\u8fdb\u5165\u6e90\u7801\u8def\u5f84",(0,s.jsx)(e.code,{children:"/home/ubuntu/lvgl_v9.2/lv_port_linux"}),"\uff0c\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.code,{children:"lv_conf.h"})," \u91cc\uff0c\u542f\u52a8\u4e0b\u9762\u7684\u5b8f\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/*Driver for evdev input devices*/\n#define LV_USE_EVDEV    1\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20241226172716725",src:l(2333).Z+"",width:"1427",height:"348"})}),"\n",(0,s.jsx)(e.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u4fdd\u5b58\u9000\u51fa\uff0c\u91cd\u65b0\u7f16\u8bd1\u4e0a\u4f20\u7a0b\u5e8f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5f00\u53d1\u677f\u7ec8\u7aef\u4e0a\uff0c\u5148\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u6307\u5b9a\u89e6\u6478\u8bbe\u5907\u8282\u70b9\uff0c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'root@RK356X:/mnt/udisk# export LV_LINUX_EVDEV_POINTER_DEVICE="/dev/input/event2"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7136\u540e\u5373\u53ef\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",(0,s.jsx)(e.code,{children:"lvglsim"})," \u3002"]})]})}function o(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1617:(n,e,l)=>{l.d(e,{Z:()=>s});const s=l.p+"assets/images/image-20241112165004584-d271f716ee8bd3940c72f83c380b7385.png"},9918:(n,e,l)=>{l.d(e,{Z:()=>s});const s=l.p+"assets/images/image-20241226172600129-35755f95f6c4d12081e79f94d7d5364d.png"},2333:(n,e,l)=>{l.d(e,{Z:()=>s});const s=l.p+"assets/images/image-20241226172716725-756bab918d45ed6f0d547197636d46e2.png"},1151:(n,e,l)=>{l.d(e,{Z:()=>r,a:()=>d});var s=l(7294);const i={},c=s.createContext(i);function d(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);