"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4469],{9135:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var c=n(5893),s=n(1151);const l={sidebar_position:7},r="I2C \u5f00\u53d1\u6307\u5357",d={id:"Dshanpi-R1-Docs/part5/I2cDrive",title:"I2C \u5f00\u53d1\u6307\u5357",description:"1. I2C \u6d41\u7a0b",source:"@site/docs/Dshanpi-R1-Docs/part5/07-I2cDrive.md",sourceDirName:"Dshanpi-R1-Docs/part5",slug:"/Dshanpi-R1-Docs/part5/I2cDrive",permalink:"/docs/Dshanpi-R1-Docs/part5/I2cDrive",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/Dshanpi-R1-Docs/part5/07-I2cDrive.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"rk3568Sidebar",previous:{title:"Pinctrl\u5f00\u53d1\u6307\u5357",permalink:"/docs/Dshanpi-R1-Docs/part5/PinctrlDrive"}},t={},o=[{value:"1. I2C \u6d41\u7a0b",id:"1-i2c-\u6d41\u7a0b",level:2},{value:"1.1 Trasmint only mode (I2C_CON[1:0]=2\u2019b00)",id:"11-trasmint-only-mode-i2c_con102b00",level:2},{value:"1.2 Mix mode (I2C_CON[1:0]=2\u2019b01 or I2C_CON[1:0]=2\u2019b11)",id:"12-mix-mode-i2c_con102b01-or-i2c_con102b11",level:2},{value:"1.3 Receive only mode (I2C_CON[1:0]=2\u2019b10)",id:"13-receive-only-mode-i2c_con102b10",level:2},{value:"2.1 i2c-rk3x.c \u914d\u7f6e",id:"21-i2c-rk3xc-\u914d\u7f6e",level:2},{value:"2.2 i2c-rockchip.c \u914d\u7f6e",id:"22-i2c-rockchipc-\u914d\u7f6e",level:2},{value:"3.1 Kernel space",id:"31-kernel-space",level:2},{value:"3.2 User space",id:"32-user-space",level:2},{value:"6.1 i2c-rk3x.c \u9a71\u52a8",id:"61-i2c-rk3xc-\u9a71\u52a8",level:2},{value:"6.2 i2c-rockchip.c \u9a71\u52a8",id:"62-i2c-rockchipc-\u9a71\u52a8",level:2},{value:"6.3 Debug \u4e4b I2C \u6ce2\u5f62",id:"63-debug-\u4e4b-i2c-\u6ce2\u5f62",level:2}];function h(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h1,{id:"i2c-\u5f00\u53d1\u6307\u5357",children:"I2C \u5f00\u53d1\u6307\u5357"}),"\n",(0,c.jsx)(i.h2,{id:"1-i2c-\u6d41\u7a0b",children:"1. I2C \u6d41\u7a0b"}),"\n",(0,c.jsxs)(i.p,{children:["I2C \u7684\u6d41\u7a0b\u5728\u4e24\u4e2a\u9a71\u52a8\u4e0a\u5927\u81f4\u662f\u4e00\u6837\uff0c\u5199\u662f\u5355\u7eaf\u7684 TX \u6a21\u5f0f ",(0,c.jsx)(i.code,{children:"(I2C_CON[1:0]=2\u2019b00)"}),"\uff0c\u800c\u8bfb\u4e00\u822c\u4f7f\u7528 TRX \u6a21\u5f0f ",(0,c.jsx)(i.code,{children:"(I2C_CON[1:0]=2\u2019b01)"}),"\u3002\u4e0b\u9762\u7684 I2C \u63a7\u5236\u5668\u64cd\u4f5c\u6d41\u7a0b\u56fe\u662f\u63cf\u8ff0\u8f6f\u4ef6\u5982\u4f55\u901a\u8fc7\u8fd9\u4e2a I2C \u63a7\u5236\u5668\u5bc4\u5b58\u5668\u6765\u914d\u7f6e\u548c\u6267\u884c I2C \u4efb\u52a1\u3002\u63cf\u8ff0\u5206\u4e3a 3 \u90e8\u5206\uff1a\u4f20\u8f93\u6a21\u5f0f\uff0c\u6df7\u5408\u6a21\u5f0f\u548c\u63a5\u6536\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsx)(i.h2,{id:"11-trasmint-only-mode-i2c_con102b00",children:"1.1 Trasmint only mode (I2C_CON[1:0]=2\u2019b00)"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"\u6d41\u7a0b\u56fe\u5360\u4f4d",src:n(2535).Z+"",width:"260",height:"978"})}),"\n",(0,c.jsx)(i.h2,{id:"12-mix-mode-i2c_con102b01-or-i2c_con102b11",children:"1.2 Mix mode (I2C_CON[1:0]=2\u2019b01 or I2C_CON[1:0]=2\u2019b11)"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"\u6d41\u7a0b\u56fe\u5360\u4f4d",src:n(7001).Z+"",width:"428",height:"860"})}),"\n",(0,c.jsx)(i.h2,{id:"13-receive-only-mode-i2c_con102b10",children:"1.3 Receive only mode (I2C_CON[1:0]=2\u2019b10)"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"\u6d41\u7a0b\u56fe\u5360\u4f4d",src:n(2334).Z+"",width:"260",height:"860"})}),"\n",(0,c.jsx)(i.p,{children:"\u4ee5\u4e0a\u4e3a I2C \u7684\u4e3b\u8981\u6d41\u7a0b\uff0c\u8be6\u7ec6\u5b9e\u73b0\u53c2\u8003\u9a71\u52a8\u4ee3\u7801\u3002"}),"\n",(0,c.jsx)(i.h1,{id:"2-i2c-\u9a71\u52a8\u53c2\u6570\u914d\u7f6e",children:"2. I2C \u9a71\u52a8\u53c2\u6570\u914d\u7f6e"}),"\n",(0,c.jsx)(i.p,{children:"I2C \u7684\u53c2\u6570\u914d\u7f6e\u6700\u4e3b\u8981\u5c31\u662f I2C \u9891\u7387\u7684\u914d\u7f6e\u3002\u53ef\u914d I2C frequency \u9664\u4e86\u4e0e\u82af\u7247\u6709\u5173\u5916\uff0c\u4e3b\u8981\u662f\u7531 I2C SCL rise time \u51b3\u5b9a\u7684\uff0c\u56e0\u4e3a I2C \u534f\u8bae\u6807\u51c6\u91cc\u9762\u5bf9\u4e0a\u5347\u6cbf\u548c\u4e0b\u964d\u6cbf\u65f6\u95f4\u6709\u89c4\u5b9a\u8981\u6c42\uff0c\u7279\u522b\u662f\u4e0a\u5347\u6cbf\u65f6\u95f4\u3002\u5982\u679c\u8d85\u8fc7\u4e86\u534f\u8bae\u89c4\u5b9a\u7684\u6700\u5927\u503c\uff0c\u5219 I2C \u901a\u8baf\u53ef\u80fd\u5931\u8d25\u3002\u4e0b\u9762\u662f\u534f\u8bae\u91cc\u9762\u89c4\u5b9a\u7684\u6700\u5927\u6700\u5c0f\u503c\u8303\u56f4\uff0c\u4e0b\u56fe\u8868\u793a\u4e86\u4e8c\u8005\u4e4b\u95f4\u7684\u5173\u7cfb\uff1a"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"\u4e0a\u5347\u6cbf\u4e0e\u4e0b\u964d\u6cbf\u7684\u5173\u7cfb\u56fe",src:n(5823).Z+"",width:"903",height:"168"})}),"\n",(0,c.jsxs)(i.p,{children:["\u4e0a\u5347\u6cbf ",(0,c.jsx)(i.code,{children:"Tr"})," \u548c\u4e0b\u964d\u6cbf ",(0,c.jsx)(i.code,{children:"Tf"}),"\uff0c\u9700\u8981\u7528\u793a\u6ce2\u5668\u6d4b\u91cf\uff0c\u53c2\u8003\u4e0b\u9762\u793a\u56fe\uff1a"]}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"\u793a\u6ce2\u5668\u793a\u56fe",src:n(5031).Z+"",width:"915",height:"285"})}),"\n",(0,c.jsxs)(i.p,{children:["I2C \u7684\u9a71\u52a8 ",(0,c.jsx)(i.code,{children:"i2c-rk3x.c"})," \u4e0e ",(0,c.jsx)(i.code,{children:"i2c-rockchip.c"})," \u4e24\u4e2a\u914d\u7f6e\u65b9\u5f0f\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u533a\u522b\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(i.h2,{id:"21-i2c-rk3xc-\u914d\u7f6e",children:"2.1 i2c-rk3x.c \u914d\u7f6e"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"i2c-rk3x.c"})," \u9a71\u52a8\u7684\u914d\u7f6e\u90fd\u5728 DTS\uff0c\u53c2\u8003\u6587\u4ef6 ",(0,c.jsx)(i.code,{children:"Documentation/devicetree/bindings/i2c/i2c-rk3x.txt"}),"\u3002\u91cd\u70b9\u8bf4\u660e\u5176\u4e2d\u914d\u7f6e\u9879\uff0c",(0,c.jsx)(i.code,{children:"i2c-scl-rising-time-ns"}),"\uff0c",(0,c.jsx)(i.code,{children:"i2c-scl-falling-time-ns"}),"\uff1a"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"clock-frequency"}),"\uff1a\u9ed8\u8ba4 frequency \u4e3a 100k \u53ef\u4e0d\u914d\u7f6e\uff0c\u5176\u5b83 I2C \u9891\u7387\u9700\u8981\u914d\u7f6e\uff0c\u6700\u5927\u53ef\u914d\u7f6e\u9891\u7387\u7531 ",(0,c.jsx)(i.code,{children:"i2c-scl-rising-time-ns"})," \u51b3\u5b9a\u3002\u4f8b\u5982\u914d\u7f6e 400k\uff1a",(0,c.jsx)(i.code,{children:"clock-frequency=<400000>"}),"\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"i2c-scl-rising-time-ns"}),"\uff1aSCL \u4e0a\u5347\u6cbf\u65f6\u95f4\u7531\u786c\u4ef6\u51b3\u5b9a\uff0c\u6539\u53d8\u4e0a\u62c9\u7535\u963b\u53ef\u8c03\u8282\u8be5\u65f6\u95f4\uff0c\u9700\u901a\u8fc7\u793a\u6ce2\u5668\u91cf\u6d4b\uff0c\u53c2\u8003\u4e0a\u56fe\u3002\u4f8b\u5982\u6d4b\u5f97 SCL \u4e0a\u5347\u6cbf 365ns\uff1a",(0,c.jsx)(i.code,{children:"i2c-scl-rising-time-ns=<365>"}),"\u3002(\u9ed8\u8ba4\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u4f46\u5fc5\u987b\u4fdd\u8bc1\u5f53\u524d\u7684\u4e0a\u5347\u6cbf\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7\u6240\u914d\u7f6e\u9891\u7387\u4e0b\u7684 I2C \u6807\u51c6\u6240\u5b9a\u4e49\u7684\u6700\u5927\u4e0a\u5347\u6cbf\u65f6\u95f4)\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"i2c-scl-falling-time-ns"}),"\uff1aSCL \u4e0b\u964d\u6cbf\u65f6\u95f4\uff0c\u4e00\u822c\u4e0d\u53d8\uff0c\u7b49\u540c\u4e8e ",(0,c.jsx)(i.code,{children:"i2c-sda-falling-time-ns"}),"\u3002(\u9ed8\u8ba4\u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e)"]}),"\n"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'&i2c1 {\n    status = "okay";\n    i2c-scl-rising-time-ns = <265>;\n    i2c-scl-falling-time-ns = <11>;\n    clock-frequency = <400000>;\n    \n    es8316: es8316@10 {\n        #sound-dai-cells = <0>;\n        compatible = "everest,es8316";\n        reg = <0x10>;\n        clocks = <&cru SCLK_I2S_8CH_OUT>;\n        clock-names = "mclk";\n        spk-con-gpio = <&gpio0 11 GPIO_ACTIVE_HIGH>;\n        hp-det-gpio = <&gpio4 28 GPIO_ACTIVE_LOW>;\n    };\n };\n'})}),"\n",(0,c.jsx)(i.h2,{id:"22-i2c-rockchipc-\u914d\u7f6e",children:"2.2 i2c-rockchip.c \u914d\u7f6e"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"i2c-rockchip.c"})," \u9a71\u52a8\u4ecd\u7136\u9075\u5faa I2C frequency \u4e0e SCL \u4e0a\u5347\u6cbf\u7684\u7ea6\u675f\u5173\u7cfb\uff0c\u80fd\u5426\u7528\u66f4\u9ad8\u7684\u9891\u7387\u53d6\u51b3\u4e8e ",(0,c.jsx)(i.code,{children:"i2c-scl-rising-time-ns"}),"\u3002I2C \u9891\u7387\u5728\u4ee3\u7801\u4e0a\u9762\u914d\u7f6e\uff0c\u76f4\u63a5\u914d\u7f6e ",(0,c.jsx)(i.code,{children:"i2c_msg"})," \u7ed3\u6784\u4f53\u4e0a\u7684 ",(0,c.jsx)(i.code,{children:"scl_rate"})," \u6210\u5458\uff0c\u9ed8\u8ba4 frequency \u4ecd\u4e3a 100k\u3002\u4f8b\u5982\u4e0b\u9762\u7684 200K \u914d\u7f6e\uff1a"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"struct i2c_msg xfer_msg;\n\nxfer_msg[0].addr = client->addr;\nxfer_msg[0].len = num;\nxfer_msg[0].flags = client->flags;\nxfer_msg[0].buf = buf;\nxfer_msg[0].scl_rate = 200 * 1000; /* 200K i2c clock frequency */\n"})}),"\n",(0,c.jsx)(i.h1,{id:"3-i2c-\u4f7f\u7528",children:"3. I2C \u4f7f\u7528"}),"\n",(0,c.jsxs)(i.p,{children:["\u5bf9\u4e8e I2C \u7684\u4f7f\u7528\u8bf4\u660e\uff0c\u5728 ",(0,c.jsx)(i.code,{children:"Documentation/i2c/"})," \u4e2d\u6709\u6bd4\u8f83\u8be6\u7ec6\u7684\u5185\u5bb9\u53ef\u4f9b\u67e5\u9605\u3002\u4e0b\u9762\u91cd\u70b9\u63d0\u5230\u8bfb\u5199\u90e8\u5206\uff1a"]}),"\n",(0,c.jsx)(i.h2,{id:"31-kernel-space",children:"3.1 Kernel space"}),"\n",(0,c.jsxs)(i.p,{children:["Rockchip I2C \u7684\u8bfb\u5199\u901a\u4fe1\u4f7f\u7528\u7684\u662f Linux \u7684\u6807\u51c6\u63a5\u53e3\u3002\u8bf7\u53c2\u8003 kernel \u76ee\u5f55\u4e0b\u7684 ",(0,c.jsx)(i.code,{children:"Documentation/i2c/writing-clients"})," \u6587\u6863\u8bf4\u660e\uff0c\u5176\u4e2d\u7684 ",(0,c.jsx)(i.code,{children:"Sending and receiving"})," \u90e8\u5206\u6709\u7cfb\u7edf\u7684\u4ecb\u7ecd\u3002"]}),"\n",(0,c.jsx)(i.h2,{id:"32-user-space",children:"3.2 User space"}),"\n",(0,c.jsxs)(i.p,{children:["\u901a\u5e38\uff0cI2C \u8bbe\u5907\u7531\u5185\u6838\u9a71\u52a8\u7a0b\u5e8f\u63a7\u5236\u3002\u4f46\u4e5f\u53ef\u4ee5\u4ece\u7528\u6237\u6001\u8bbf\u95ee\u603b\u7ebf\u4e0a\u7684\u6240\u6709\u8bbe\u5907\uff0c\u901a\u8fc7 ",(0,c.jsx)(i.code,{children:"/dev/i2c-%d"})," \u63a5\u53e3\u6765\u8bbf\u95ee\u3002kernel \u76ee\u5f55\u4e0b\u7684 ",(0,c.jsx)(i.code,{children:"Documentation/i2c/dev-interface"})," \u6587\u6863\u6709\u8be6\u7ec6\u8bf4\u660e\u4e0e\u793a\u4f8b\u3002"]}),"\n",(0,c.jsx)(i.h1,{id:"4-i2c-tools",children:"4. I2C tools"}),"\n",(0,c.jsxs)(i.p,{children:["I2C tool \u662f\u4e00\u4e2a\u5f00\u6e90\u5de5\u5177\uff0c\u9700\u81ea\u884c\u4e0b\u8f7d\u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\uff0c\u4ee3\u7801\u4e0b\u8f7d\u5730\u5740\uff1a  ",(0,c.jsx)(i.a,{href:"https://www.kernel.org/pub/software/utils/i2c-tools/",children:"https://www.kernel.org/pub/software/utils/i2c-tools/"})]}),"\n",(0,c.jsx)(i.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"<git clone git://git.kernel.org/pub/scm/utils/i2c-tools/i2c-tools.git>"})}),"\n",(0,c.jsx)(i.p,{children:"\u7f16\u8bd1\u540e\u4f1a\u751f\u6210 i2cdetect\uff0ci2cdump\uff0ci2cset\uff0ci2cget \u7b49\u5de5\u5177\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e0a\u8c03\u8bd5\u4f7f\u7528\uff1a"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"i2cdetect"})," \u2013 \u7528\u6765\u5217\u4e3e I2C bus \u548c\u4e0a\u9762\u6240\u6709\u7684\u8bbe\u5907"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"i2cdump"})," \u2013 \u663e\u793a I2C \u8bbe\u5907\u6240\u6709 register \u7684\u503c"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"i2cget"})," \u2013 \u8bfb\u53d6 I2C \u8bbe\u5907\u67d0\u4e2a register \u7684\u503c"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"i2cset"})," \u2013 \u5199\u5165 I2C \u8bbe\u5907\u67d0\u4e2a register \u7684\u503c"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["I2C tool \u90fd\u662f\u5f00\u6e90\u7684\uff0c\u7f16\u8bd1\u4e0e\u4f7f\u7528\u8bf7\u53c2\u8003\u5176\u4e2d\u7684 ",(0,c.jsx)(i.code,{children:"README"})," \u4e0e\u5e2e\u52a9\u8bf4\u660e\u3002"]}),"\n",(0,c.jsx)(i.h1,{id:"5-gpio-\u6a21\u62df-i2c",children:"5. GPIO \u6a21\u62df I2C"}),"\n",(0,c.jsxs)(i.p,{children:["I2C \u7528 GPIO \u6a21\u62df\uff0c\u5185\u6838\u5df2\u7ecf\u6709\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6587\u6863\uff1a",(0,c.jsx)(i.br,{}),"\n",(0,c.jsx)(i.code,{children:"Documentation/devicetree/bindings/i2c/i2c-gpio.txt"})]}),"\n",(0,c.jsx)(i.p,{children:"\u4e0b\u9762\u662f\u4f7f\u7528\u7684\u4f8b\u5b50\uff0c\u5728 DTS \u4e0b\u914d\u7f6e I2C \u8282\u70b9\uff1a"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-dts",children:'i2c@4 {\n    compatible = "i2c-gpio";\n    gpios = <&gpio5 9 GPIO_ACTIVE_HIGH>, /* sda */\n    <&gpio5 8 GPIO_ACTIVE_HIGH>; /* scl */\n    i2c-gpio,delay-us = <2>;        /* ~100 kHz */\n    #address-cells = <1>;\n    #size-cells = <0>;\n    pinctrl-names = "default";\n    pinctrl-0 = <&i2c4_gpio>;\n    status = "okay";\n    \n    gt9xx: gt9xx@14 {\n        compatible = "goodix,gt9xx";\n        reg = <0x14>;\n        touch-gpio = <&gpio5 11 IRQ_TYPE_LEVEL_LOW>;\n        reset-gpio = <&gpio5 10 GPIO_ACTIVE_HIGH>;\n        max-x = <1200>;\n        max-y = <1900>;\n        tp-size = <911>;\n        tp-supply = <&vcc_tp>;\n        status = "okay";\n    };\n};\n'})}),"\n",(0,c.jsx)(i.p,{children:"\u4e00\u822c\u4e0d\u63a8\u8350\u4f7f\u7528 GPIO\uff0c\u56e0\u4e3a\u6548\u7387\u4e0d\u9ad8\u3002"}),"\n",(0,c.jsx)(i.h1,{id:"6-i2c-\u5e38\u89c1\u95ee\u9898",children:"6. I2C \u5e38\u89c1\u95ee\u9898"}),"\n",(0,c.jsx)(i.p,{children:"\u56e0\u4e3a\u6211\u4eec\u6709\u4e24\u4e2a i2c \u9a71\u52a8\uff0c\u6240\u4ee5\u4ecd\u7136\u5206\u4e24\u90e8\u5206\uff1a"}),"\n",(0,c.jsx)(i.h2,{id:"61-i2c-rk3xc-\u9a71\u52a8",children:"6.1 i2c-rk3x.c \u9a71\u52a8"}),"\n",(0,c.jsx)(i.p,{children:"\u5982\u679c\u8c03\u7528 I2C \u4f20\u8f93\u63a5\u53e3\u8fd4\u56de\u503c\u4e3a -6(-ENXIO)\u65f6\u5019\uff0c\u8868\u793a\u4e3a NACK \u9519\u8bef\uff0c\u5373\u5bf9\u65b9\u8bbe\u5907\u65e0\u5e94\u7b54\u54cd\u5e94\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e00\u822c\u4e3a\u5916\u8bbe\u7684\u95ee\u9898\uff0c\u5e38\u89c1\u7684\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"I2C \u5730\u5740\u9519\u8bef\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C slave \u8bbe\u5907\u5904\u4e8e\u4e0d\u6b63\u5e38\u5de5\u4f5c\u72b6\u6001\uff0c\u6bd4\u5982\u6ca1\u6709\u4e0a\u7535\uff0c\u9519\u8bef\u7684\u4e0a\u7535\u65f6\u5e8f\u4ee5\u53ca\u8bbe\u5907\u5f02\u5e38\u7b49\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u65f6\u5e8f\u4e0d\u7b26\u5408 slave \u8bbe\u5907\u6240\u8981\u6c42\u4e5f\u4f1a\u4ea7\u751f NACK \u4fe1\u53f7\uff0c\u6bd4\u5982 slave \u8bbe\u5907\u9700\u8981\u7684\u662f stop \u4fe1\u53f7,\u800c\u4e0d\u662f repeat start \u4fe1\u53f7\u7684\u65f6\u5019\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u603b\u7ebf\u53d7\u5916\u90e8\u5e72\u6270\u5bfc\u81f4\u7684\uff0c\u7528\u793a\u6ce2\u5668\u6d4b\u91cf\u53ef\u4ee5\u770b\u5230\u662f\u4e00\u4e2a ACK \u6ce2\u5f62\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0 I2C \u7684 log\uff1a"timeout, ipd: 0x00, state: 1"\u65f6\uff0c\u6b64\u65f6 I2C \u63a7\u5236\u5668\u5de5\u4f5c\u5f02\u5e38\uff0c\u65e0\u6cd5\u4ea7\u751f\u4e2d\u65ad\u72b6\u6001\uff0cstart \u65f6\u5e8f\u65e0\u6cd5\u53d1\u51fa\uff0c\u6709\u4ee5\u4e0b\u51e0\u79cd\u53ef\u80fd\uff1a'}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"I2C SCL \u6216\u8005 SDA Pin \u811a iomux \u9519\u8bef\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u7684\u4e0a\u62c9\u7535\u538b\u4e0d\u5bf9\uff0c\u5982\u7535\u538b\u4e0d\u591f\u6216\u8005\u4e0a\u62c9\u7535\u6e90\u6ca1\u6709\u7b49\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C Pin \u811a\u88ab\u5916\u8bbe\u62c9\u4f4f\uff0c\u7535\u538b\u4e0d\u5bf9\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u65f6\u949f\u672a\u5f00\uff0c\u6216\u8005\u65f6\u949f\u6e90\u592a\u5c0f\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u540c\u65f6\u914d\u7f6e\u4e86 CON_START \u548c CON_STOP \u4f4d\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0 I2C \u7684 log\uff1a"timeout, ipd: 0x10, state: 1"\u65f6\uff0c\u6b64\u65f6 I2C \u63a7\u5236\u5668\u5de5\u4f5c\u6b63\u5e38\uff0c\u4f46\u662f cpu \u65e0\u6cd5\u54cd\u5e94 I2C \u4e2d\u65ad\uff0c\u6b64\u65f6\u53ef\u80fd cpu0 \u88ab\u963b\u585e\u4e86\uff08\u4e00\u822c I2C \u4e2d\u65ad\u90fd\u5728 cpu0 \u4e0a\u9762\uff0c\u901a\u8fc7 cat /proc/interrups \u53ef\u4ee5\u67e5\u770b\uff09\uff0c\u6216\u8005\u53ef\u80fd\u662f I2C \u4e2d\u65ad\u4f4d\u88ab\u5173\u95ed\u4e86\u3002'}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0 I2C \u7684 log \u7c7b\u4f3c\uff1a"timeout, ipd: 0x80, state: 1"\u65f6\uff0c\u770b\u5230 ipd \u4e3a 0x80 \u6253\u5370\uff0c\u53ef\u4ee5\u8bf4\u660e\u5f53\u524d SCL \u88ab slave \u62c9\u4f4f\uff0c\u8981\u5224\u65ad\u88ab\u54ea\u4e2a slave \u62c9\u4f4f\uff1a'}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"\u4e00\u662f\u6392\u9664\u6cd5\uff0c\u9002\u7528\u4e8e\u5916\u8bbe\u4e0d\u591a\u7684\u60c5\u51b5\uff0c\u800c\u4e14\u590d\u73b0\u6982\u7387\u9ad8\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"\u4e8c\u662f\u9700\u8981\u4fee\u6539\u786c\u4ef6\uff0c\u5728 SCL \u603b\u7ebf\u4e0a\u4e32\u5165\u7535\u963b\uff0c\u901a\u8fc7\u7535\u963b\u4e24\u7aef\u4ea7\u751f\u7684\u538b\u5dee\u6765\u786e\u5b9a\uff0c\u7535\u538b\u66f4\u4f4e\u7684\u90a3\u7aef\u5916\u8bbe\u4e3a\u62c9\u4f4e\u7684 slave\uff0c\u7535\u963b\u7684\u9009\u53d6\u4ee5\u4e0d\u5f71\u54cd I2C \u4f20\u8f93\u4e14\u53ef\u4ee5\u770b\u51fa\u538b\u5dee\u4e3a\u6807\u51c6\uff0c\u4e00\u822c\u4e0a\u62c9\u7535\u963b\u7684 1/20 \u4ee5\u4e0a\u90fd\u53ef\u4ee5\uff0c\u5982\u679c\u662f host \u62c9\u4f4e\u4e5f\u53ef\u4ee5\u770b\u51fa\u3002\u53e6\u5916\u5728\u6b64\u57fa\u7840\u4e0a\u901a\u8fc7\u793a\u6ce2\u5668\u6765\u6293\u53d6\u6ce2\u5f62\u66f4\u52a0\u76f4\u89c2\uff0c\u6bd4\u8f83\u4e0d\u540c slave \u548c host \u7684\u4f4e\u7535\u5e73\u5927\u5c0f\uff0c\u4e0e\u6700\u540e\u51fa\u95ee\u9898\u65f6\u7684\u4f4e\u7535\u5e73\u5927\u5c0f\u6bd4\u8f83\uff0c\u76f8\u7b49\u7684\u5c31\u662f\u62c9\u4f4e\u603b\u7ebf\u7684\u201c\u5143\u51f6\u201d\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:'\u5e38\u89c1\u7684\u60c5\u51b5\u662f sda \u88ab\u62c9\u4f4e\uff0c\u8bc1\u660e\u662f\u8c01\u62c9\u4f4e\u7684\uff0c\u540c\u6837\u53c2\u8003\u4e0a\u9762 \u201cSCL \u88ab\u62c9\u4f4e" \u7684\u65b9\u6cd5\u4e24\u79cd\u3002'}),"\n",(0,c.jsx)(i.h2,{id:"62-i2c-rockchipc-\u9a71\u52a8",children:"6.2 i2c-rockchip.c \u9a71\u52a8"}),"\n",(0,c.jsx)(i.p,{children:"\u5982\u679c\u8c03\u7528 I2C \u4f20\u8f93\u63a5\u53e3\u8fd4\u56de\u503c\u4e3a -11(-EAGAIN )\u65f6\u5019\uff0c\u8868\u793a\u4e3a NACK \u9519\u8bef\uff0c\u5373\u5bf9\u65b9\u8bbe\u5907\u65e0\u5e94\u7b54\u54cd\u5e94\uff0c\u8fd9\n\u79cd\u60c5\u51b5\u4e00\u822c\u4e3a\u5916\u8bbe\u7684\u95ee\u9898\uff0c\u5e38\u89c1\u7684\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"I2C \u5730\u5740\u9519\u8bef\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C slave \u8bbe\u5907\u5904\u4e8e\u4e0d\u6b63\u5e38\u5de5\u4f5c\u72b6\u6001\uff0c\u6bd4\u5982\u6ca1\u6709\u4e0a\u7535\uff0c\u9519\u8bef\u7684\u4e0a\u7535\u65f6\u5e8f\u4ee5\u53ca\u8bbe\u5907\u5f02\u5e38\u7b49\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u65f6\u5e8f\u4e0d\u7b26\u5408 slave \u8bbe\u5907\u6240\u8981\u6c42\u4e5f\u4f1a\u4ea7\u751f NACK \u4fe1\u53f7\uff0c\u6bd4\u5982 slave \u8bbe\u5907\u9700\u8981\u7684\u662f stop \u4fe1\u53f7,\u800c\u4e0d\u662f repeat start \u4fe1\u53f7\u7684\u65f6\u5019\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u603b\u7ebf\u53d7\u5916\u90e8\u5e72\u6270\u5bfc\u81f4\u7684\uff0c\u7528\u793a\u6ce2\u5668\u6d4b\u91cf\u53ef\u4ee5\u770b\u5230\u662f\u4e00\u4e2a ACK \u6ce2\u5f62\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0 I2C \u7684 log\uff1a"timeout, ipd: 0x00, state: 1"\u65f6\uff0c\u6b64\u65f6 I2C \u63a7\u5236\u5668\u5de5\u4f5c\u5f02\u5e38\uff0c\u65e0\u6cd5\u4ea7\u751f\u4e2d\u65ad\u72b6\u6001\uff0cstart\n\u65f6\u5e8f\u65e0\u6cd5\u53d1\u51fa\uff0c\u6709\u4ee5\u4e0b\u51e0\u79cd\u53ef\u80fd\uff1a'}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"I2C SCL \u6216\u8005 SDA Pin \u811a iomux \u9519\u8bef\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u7684\u4e0a\u62c9\u7535\u538b\u4e0d\u5bf9\uff0c\u5982\u7535\u538b\u4e0d\u591f\u6216\u8005\u4e0a\u62c9\u7535\u6e90\u6ca1\u6709\u7b49\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C Pin \u811a\u88ab\u5916\u8bbe\u62c9\u4f4f\uff0c\u7535\u538b\u4e0d\u5bf9\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u65f6\u949f\u672a\u5f00\uff0c\u6216\u8005\u65f6\u949f\u6e90\u592a\u5c0f\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"I2C \u540c\u65f6\u914d\u7f6e\u4e86 CON_START \u548c CON_STOP \u4f4d\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0  I2C \u7684  log\uff1a"timeout, ipd: 0x10, state: 1"\u65f6\uff0c\u6b64\u65f6 I2C \u63a7\u5236\u5668\u5de5\u4f5c\u6b63\u5e38\uff0c\u4f46\u662f cpu \u65e0\u6cd5\u54cd\u5e94 I2C \u4e2d\u65ad\uff0c\u6b64\u65f6\u53ef\u80fd cpu0 \u88ab\u963b\u585e\u4e86\uff08\u4e00\u822c I2C \u4e2d\u65ad\u90fd\u5728 cpu0 \u4e0a\u9762\uff0c\u901a\u8fc7 cat /proc/interrups \u53ef\u4ee5\u67e5\u770b\uff09\uff0c\u6216\u8005\u53ef\u80fd\u662f I2C \u4e2d\u65ad\u4f4d\u88ab\u5173\u95ed\u4e86\u3002'}),"\n",(0,c.jsx)(i.p,{children:'\u5f53\u51fa\u73b0  I2C \u7684  log \u7c7b\u4f3c\uff1a"timeout, ipd: 0x80, state: 1"\u65f6\uff0c\u770b\u5230 ipd \u4e3a 0x80 \u6253\u5370\uff0c\u6216\u8005\u770b\u5230"scl  was hold by slave\u201d\u7684\u6253\u5370\uff0c\u53ef\u4ee5\u8bf4\u660e\u5f53\u524d SCL \u88ab slave \u62c9\u4f4f\uff0c\u8981\u5224\u65ad\u88ab\u54ea\u4e2a slave \u62c9\u4f4f\uff1a'}),"\n",(0,c.jsx)(i.p,{children:"\u4e00\u662f\u6392\u9664\u6cd5\uff0c\u9002\u7528\u4e8e\u5916\u8bbe\u4e0d\u591a\u7684\u60c5\u51b5\uff0c\u800c\u4e14\u590d\u73b0\u6982\u7387\u9ad8\uff1b\n\u4e8c\u662f\u9700\u8981\u4fee\u6539\u786c\u4ef6\uff0c\u5728 SCL \u603b\u7ebf\u4e0a\u4e32\u5165\u7535\u963b\uff0c\u901a\u8fc7\u7535\u963b\u4e24\u7aef\u4ea7\u751f\u7684\u538b\u5dee\u6765\u786e\u5b9a\uff0c\u7535\u538b\u66f4\u4f4e\u7684\u90a3\u7aef\u5916\u8bbe\u4e3a\u62c9\u4f4e\u7684 slave\uff0c\u7535\u963b\u7684\u9009\u53d6\u4ee5\u4e0d\u5f71\u54cd I2C \u4f20\u8f93\u4e14\u53ef\u4ee5\u770b\u51fa\u538b\u5dee\u4e3a\u6807\u51c6\uff0c\u4e00\u822c\u4e0a\u62c9\u7535\u963b\u7684 1/20 \u4ee5\u4e0a\u90fd\u53ef\u4ee5\uff0c\u5982\u679c\u662f host \u62c9\u4f4e\u4e5f\u53ef\u4ee5\u770b\u51fa\u3002\u53e6\u5916\u5728\u6b64\u57fa\u7840\u4e0a\u901a\u8fc7\u793a\u6ce2\u5668\u6765\u6293\u53d6\u6ce2\u5f62\u66f4\u52a0\u76f4\u89c2\uff0c\u6bd4\u8f83\u4e0d\u540c slave \u548c host \u7684\u4f4e\u7535\u5e73\u5927\u5c0f\uff0c\u4e0e\u6700\u540e\u51fa\u95ee\u9898\u65f6\u7684\u4f4e\u7535\u5e73\u5927\u5c0f\u6bd4\u8f83\uff0c\u76f8\u7b49\u7684\u5c31\u662f\u62c9\u4f4e\u603b\u7ebf\u7684\u201d\u5143\u51f6\u201c\u3002"}),"\n",(0,c.jsx)(i.p,{children:'\u5e38\u89c1\u7684\u60c5\u51b5\u662f SDA \u88ab\u62c9\u4f4e\uff0c\u8bc1\u660e\u662f\u8c01\u62c9\u4f4e\u7684\uff0c\u540c\u6837\u53c2\u8003\u4e0a\u9762 \u201c scl  was hold by slave"\u7684\u65b9\u6cd5\u4e24\u79cd\u3002'}),"\n",(0,c.jsx)(i.p,{children:"\u5f53\u51fa\u73b0 log \u201ci2c is not in idle(state = \xd7)\u201d\u7684 log \u65f6\uff0c\u8868\u793a I2C \u603b\u7ebf\u81f3\u5c11\u4e00\u4e2a\u4e3a\u4f4e\uff0c\u89e3\u51b3\u529e\u6cd5\u53c2\u8003\u4e0a\u9762\uff1a"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"\u201cstate=1\u201d \u8868\u793a SDA \u4e3a\u4f4e\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"\u201cstate=2\u201d \u8868\u793a SCL \u4e3a\u4f4e\uff1b"}),"\n",(0,c.jsx)(i.li,{children:"\u201cstate=3\u201d \u8868\u793a SCL \u548c SDA \u90fd\u4e3a\u4f4e\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"63-debug-\u4e4b-i2c-\u6ce2\u5f62",children:"6.3 Debug \u4e4b I2C \u6ce2\u5f62"}),"\n",(0,c.jsx)(i.p,{children:"\u5982\u679c\u9047\u5230\u7684 I2C \u95ee\u9898\u4ee5\u4e0a\u60c5\u51b5\u90fd\u4e0d\u662f\uff0c\u6700\u597d\u7684\u529e\u6cd5\u662f\u6293\u53d6 I2C  \u51fa\u9519\u65f6\u5019\u7684\u6ce2\u5f62\uff0c\u901a\u8fc7\u6ce2\u5f62\u6765\u5206\u6790 I2C \u95ee\u9898\uff0cI2C \u7684\u6ce2\u5f62\u975e\u5e38\u6709\u7528\uff0c\u5927\u90e8\u5206\u7684\u95ee\u9898\u90fd\u80fd\u5206\u6790\u51fa\u6765\uff1b\u53ef\u4ee5\u5728\u51fa\u9519\u7684\u5730\u65b9\u8ba9 cpu \u5361\u4f4f\uff08\u6bd4\u5982 while(1) \u7b49\uff09\uff0c\u4e0d\u53d1\u8d77\u65b0\u7684 I2C \u4efb\u52a1\uff0c\u6700\u540e\u6293\u5230\u7684\u6ce2\u5f62\u5e94\u8be5\u5c31\u662f\u51fa\u9519\u7684\u6ce2\u5f62\uff0c\u5982\u679c\u9700\u8981\u8fc7\u6ee4\u8fd8\u53ef\u4ee5\u52a0\u5165\u8bbe\u5907 I2C \u5730\u5740\u7684\u5224\u65ad\u6761\u4ef6\u7b49\u3002"})]})}function x(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},2535:(e,i,n)=>{n.d(i,{Z:()=>c});const c=n.p+"assets/images/1-cddb3c532a30e6004baa0ec9b68e67fd.png"},7001:(e,i,n)=>{n.d(i,{Z:()=>c});const c=n.p+"assets/images/2-a7261b5211d3d550618e6705d69c3bd1.png"},2334:(e,i,n)=>{n.d(i,{Z:()=>c});const c=n.p+"assets/images/3-d48be6ac4f894c3bf2fd49ed964f2a4c.png"},5823:(e,i,n)=>{n.d(i,{Z:()=>c});const c=n.p+"assets/images/4-bd5b6d33bb7fefdb2874e1ecfb35c53a.png"},5031:(e,i,n)=>{n.d(i,{Z:()=>c});const c=n.p+"assets/images/5-3b201b6a157a702beb597b7bf9a345eb.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var c=n(7294);const s={},l=c.createContext(s);function r(e){const i=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(l.Provider,{value:i},e.children)}}}]);