"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4715],{6711:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>p});var l=i(5893),s=i(1151);const c={sidebar_position:3},r="PWM\u5f00\u53d1\u6307\u5357",t={id:"100ASK-RK3568-Devdocumentation/part5/PwmDrive",title:"PWM\u5f00\u53d1\u6307\u5357",description:"1.PWM \u9a71\u52a8",source:"@site/docs/100ASK-RK3568-Devdocumentation/part5/03-PwmDrive.md",sourceDirName:"100ASK-RK3568-Devdocumentation/part5",slug:"/100ASK-RK3568-Devdocumentation/part5/PwmDrive",permalink:"/docs/100ASK-RK3568-Devdocumentation/part5/PwmDrive",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/100ASK-RK3568-Devdocumentation/part5/03-PwmDrive.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"rk3568Sidebar",previous:{title:"UART\u5f00\u53d1\u6307\u5357",permalink:"/docs/100ASK-RK3568-Devdocumentation/part5/UartDrive"},next:{title:"Can\u5f00\u53d1\u6307\u5357",permalink:"/docs/100ASK-RK3568-Devdocumentation/part5/CanDrive"}},d={},p=[{value:"1.PWM \u9a71\u52a8",id:"1pwm-\u9a71\u52a8",level:2},{value:"1.1 \u9a71\u52a8\u6587\u4ef6",id:"11-\u9a71\u52a8\u6587\u4ef6",level:3},{value:"1.2 DTS \u8282\u70b9\u914d\u7f6e",id:"12-dts-\u8282\u70b9\u914d\u7f6e",level:3},{value:"2.PWM \u6d41\u7a0b",id:"2pwm-\u6d41\u7a0b",level:2},{value:"3.PWM \u4f7f\u7528",id:"3pwm-\u4f7f\u7528",level:2},{value:"4.PWM Backlight",id:"4pwm-backlight",level:2},{value:"4.1 Backlight DTS",id:"41-backlight-dts",level:3},{value:"4.2 PWM Backlight \u8c03\u8bd5",id:"42-pwm-backlight-\u8c03\u8bd5",level:3},{value:"5.\u5e38\u89c1\u95ee\u9898",id:"5\u5e38\u89c1\u95ee\u9898",level:2},{value:"5.1 PWM \u5728 U-Boot \u4e0e kernel \u4e4b\u95f4\u7684\u8854\u63a5\u95ee\u9898",id:"51-pwm-\u5728-u-boot-\u4e0e-kernel-\u4e4b\u95f4\u7684\u8854\u63a5\u95ee\u9898",level:3},{value:"5.2 PWM Regulator \u65f6 PWM pin \u811a\u4e0a\u4e0b\u62c9\u914d\u7f6e\u95ee\u9898",id:"52-pwm-regulator-\u65f6-pwm-pin-\u811a\u4e0a\u4e0b\u62c9\u914d\u7f6e\u95ee\u9898",level:3},{value:"5.3 PWM \u6ce2\u5f62\u793a\u6ce2\u5668\u65e0\u6cd5\u6d4b\u5230",id:"53-pwm-\u6ce2\u5f62\u793a\u6ce2\u5668\u65e0\u6cd5\u6d4b\u5230",level:3}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"pwm\u5f00\u53d1\u6307\u5357",children:"PWM\u5f00\u53d1\u6307\u5357"}),"\n",(0,l.jsx)(e.h2,{id:"1pwm-\u9a71\u52a8",children:"1.PWM \u9a71\u52a8"}),"\n",(0,l.jsx)(e.h3,{id:"11-\u9a71\u52a8\u6587\u4ef6",children:"1.1 \u9a71\u52a8\u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u9a71\u52a8\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e: drivers/pwm/pwm-rockchip.c"}),"\n",(0,l.jsx)(e.p,{children:"3.10 \u548c 4.4 \u53ca\u4ee5\u4e0a\u7248\u672c\u5185\u6838\u4e0b\u9a71\u52a8\u6587\u4ef6\u540d\u5b57\u662f\u540c\u4e00\u4e2a\uff0cpwm-rockchip.c \u53ea\u652f\u6301 Continuous mode, \u4f46\u662f\u91cc\u9762\u7684\u4ee3\u7801\u6709\u4e9b\u5dee\u522b\uff614.4 \u53ca\u4ee5\u4e0a\u5185\u6838\u7248\u672c\u5c06 pwm_config (),pwm_enable () \u548c pwm_disable () \u5305\u88c5\u5728 pwm_apply_state () \u51fd\u6570\u91cc\u9762\uff0c\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u4e00\u6b21\u6539\u53d8\u51e0\u4e2a PWM \u53c2\u6570\uff0c3.10 \u5185\u6838\u7684 PWM \u9a71\u52a8\u8fd8\u662f\u539f\u6765\u7684\u63a5\u53e3\uff61"}),"\n",(0,l.jsx)(e.h3,{id:"12-dts-\u8282\u70b9\u914d\u7f6e",children:"1.2 DTS \u8282\u70b9\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u5185\u6838 3.10 \u7248\u672c\u548c 4.4 \u7248\u672c\u7684 DTS \u8282\u70b9\uff0c\u7565\u6709\u4e0d\u540c\u7684\u5730\u65b9\u5728\u914d\u7f6e\u7684\u53c2\u6570\u4e2a\u6570\u4e0a\uff0c\u5185\u6838 3.10 \u7248\u672c\u914d\u7f6e\u7684\u53c2\u6570\u6570\u76ee\u4e3a 2, \u5185\u6838 4.4 \u7248\u672c\u914d\u7f6e\u7684\u53c2\u6570\u6570\u76ee\u4e3a 2 \u6216\u8005 3; \u53c2\u6570\u6570\u76ee\u4e0e PWM \u8282\u70b9\u4e2d\u7684 \u201cpwm-cells\u201d \u5bf9\u5e94\uff0c\u5982\u679c \u201cpwm-cells\u201d \u914d\u7f6e\u662f 3, \u5219\u9700\u8981\u914d\u7f6e\u53ef\u9009\u7684\u6781\u6027\uff1b\u5982\u679c\u662f 2, \u5c31\u4e0d\u9700\u8981\u914d\u7f6e\u6781\u6027\uff61\u5185\u6838 4.19 \u7248\u672c\u7684 DTS \u8282\u70b9\u914d\u7f6e\u4e0e 4.4 \u76f8\u540c\uff61 DTS \u914d\u7f6e\u53c2\u8003\u6587\u6863 Documentation/devicetree/bindings/pwm/pwm.txt, \u4e3b\u8981\u51e0\u4e2a\u53c2\u6570\u8bf4\u660e\u4e0b:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53c2\u6570 1, \u8868\u793a index (per-chip index of the PWM to request), \u4e00\u822c\u662f 0, \u56e0\u4e3a\u6211\u4eec Rockchip PWM \u6bcf\u4e2a chip \u53ea\u6709\u4e00\u4e2a\uff61"}),"\n",(0,l.jsx)(e.li,{children:"\u53c2\u6570 2, \u8868\u793a PWM \u8f93\u51fa\u6ce2\u5f62\u7684\u65f6\u95f4\u5468\u671f\uff0c\u5355\u4f4d\u662f ns; \u4f8b\u5982\u4e0b\u9762\u914d\u7f6e\u7684 25000 \u5c31\u662f\u8868\u793a\u60f3\u8981\u5f97\u5230\u7684 PWM \u8f93\u51fa\u5468\u671f\u662f 40K \u8d6b\u5179\uff61"}),"\n",(0,l.jsx)(e.li,{children:"\u53c2\u6570 3, \u8868\u793a\u6781\u6027\uff0c\u4e3a\u53ef\u9009\u53c2\u6570\uff1b\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684\u914d\u7f6e\u4e3a\u8d1f\u6781\u6027\uff61"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plaintext",children:'bl: backlight {\n     pwms = <&pwm 0 25000 PWM_POLARITY_INVERTED>;\n     pwm-names = "backlight";\n};\n'})}),"\n",(0,l.jsx)(e.h2,{id:"2pwm-\u6d41\u7a0b",children:"2.PWM \u6d41\u7a0b"}),"\n",(0,l.jsx)(e.p,{children:"PWM \u9a71\u52a8\u6d41\u7a0b\u5728\u4e0d\u540c\u5185\u6838\u7248\u672c\u4e0a\u5927\u81f4\u662f\u4e00\u6837\u7684\uff0c\u4ee5\u5185\u6838 4.4 \u4e3a\u4f8b\uff61"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20241225190921502",src:i(7086).Z+"",width:"655",height:"871"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20241225190936066",src:i(9503).Z+"",width:"652",height:"326"})}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0a\u662f Continuous mode \u7684\u8f6f\u4ef6\u6d41\u7a0b\uff0c\u5982\u679c\u8fd8\u60f3\u4e86\u89e3\u5176\u4ed6\uff0c\u5728 TRM \u4e2d PWM \u7ae0\u8282\u90e8\u5206\u7684 Application Notes \u5c0f\u8282\uff0c\u8fd8\u6709\u5404\u6a21\u5f0f\u4e0b\u7684\u5bc4\u5b58\u5668\u914d\u7f6e\u6d41\u7a0b\uff0c\u53ef\u4ee5\u53c2\u8003\uff0c\u8fd9\u8fb9\u5c31\u4e0d\u518d\u8be6\u7ec6\u53d9\u8ff0\uff61"}),"\n",(0,l.jsx)(e.h2,{id:"3pwm-\u4f7f\u7528",children:"3.PWM \u4f7f\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e PWM \u7684 kernel \u548c user space \u4f7f\u7528\u8bf4\u660e\u5728 Documentation/pwm.txt \u6709\u8bf4\u660e\uff0c\u4e0b\u9762\u91cd\u70b9\u63d0\u4e0b user space \u90e8\u5206\uff61\u5c31\u50cf pwm.txt \u6587\u6863\u91cc\u9762\u8bf4\u7684\uff0cPWM \u63d0\u4f9b\u4e86\u7528\u6237\u5c42\u7684\u63a5\u53e3\uff0c\u5728 /sys/class/pwm/ \u8282\u70b9\u4e0b\u9762\uff0cPWM \u9a71\u52a8\u52a0\u8f7d\u6210\u529f\u540e\uff0c\u4f1a\u5728 /sys/class/pwm/ \u76ee\u5f55\u4e0b\u4ea7\u751f pwmchip0 \u76ee\u5f55\uff1b\u5411 export \u6587\u4ef6\u5199\u5165 0, \u5c31\u662f\u6253\u5f00 pwm \u5b9a\u65f6\u5668 0, \u4f1a\u4ea7\u751f\u4e00\u4e2a pwm0 \u76ee\u5f55\uff0c\u76f8\u53cd\u7684\u5f80 unexport \u5199\u5165 0 \u5c31\u4f1a\u5173\u95ed pwm \u5b9a\u65f6\u5668\u4e86\uff0c\u540c\u65f6 pwm0 \u76ee\u5f55\u4f1a\u88ab\u5220\u9664\uff0c\u8be5\u76ee\u5f55\u4e0b\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6587\u4ef6:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"enable: \u5199\u5165 1 \u4f7f\u80fd pwm, \u5199\u5165 0 \u5173\u95ed pwm;"}),"\n",(0,l.jsx)(e.li,{children:"polarity: \u6709 normal \u6216 inversed \u4e24\u4e2a\u53c2\u6570\u9009\u62e9\uff0c\u8868\u793a\u8f93\u51fa\u5f15\u811a\u7535\u5e73\u7ffb\u8f6c\uff1b"}),"\n",(0,l.jsx)(e.li,{children:"duty_cycle: \u5728 normal \u6a21\u5f0f\u4e0b\uff0c\u8868\u793a\u4e00\u4e2a\u5468\u671f\u5185\u9ad8\u7535\u5e73\u6301\u7eed\u7684\u65f6\u95f4 (\u5355\u4f4d\uff1a\u7eb3\u79d2), \u5728 reversed \u6a21\u5f0f\u4e0b\uff0c\u8868\u793a\u4e00\u4e2a\u5468\u671f\u4e2d\u4f4e\u7535\u5e73\u6301\u7eed\u7684\u65f6\u95f4 (\u5355\u4f4d\uff1a\u7eb3\u79d2);"}),"\n",(0,l.jsx)(e.li,{children:"period: \u8868\u793a pwm \u6ce2\u7684\u5468\u671f (\u5355\u4f4d\uff1a\u7eb3\u79d2);"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f pwmchip0 \u7684\u4f8b\u5b50\uff0c\u8bbe\u7f6e pwm0 \u8f93\u51fa\u9891\u7387 100K, \u5360\u7a7a\u6bd4 50%, \u6781\u6027\u4e3a\u6b63\u6781\u6027:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plaintext",children:"cd /sys/class/pwm/pwmchip0/\necho 0 > export\ncd pwm0\necho 10000 > period\necho 5000 > duty_cycle\necho normal > polarity\necho 1 > enable\n"})}),"\n",(0,l.jsx)(e.h2,{id:"4pwm-backlight",children:"4.PWM Backlight"}),"\n",(0,l.jsx)(e.p,{children:"PWM \u7684\u8fde\u7eed\u6a21\u5f0f\u4f7f\u7528\u6700\u591a\uff0c\u4e14\u80cc\u5149\u4f7f\u7528\u8f83\u4e3a\u9891\u7e41\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"41-backlight-dts",children:"4.1 Backlight DTS"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f DTS \u6587\u4ef6\u4e2d\u80cc\u5149\u5f88\u5e38\u89c1\u7684\u80cc\u5149\u914d\u7f6e\u8282\u70b9:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plaintext",children:'backlight:backlight{\n    compatible = "pwm-backlight";\n    pwms = <&pwm0 0 25000 0>;\n    brightness-levels=<\n        0 1 2 3 4 5 6 7\n        8 9 10 11 12 13 14 15\n        16 17 18 19 20 21 22 23\n        24 25 26 27 28 29 30 31\n        32 33 34 35 36 37 38 39\n        40 41 42 43 44 45 46 47\n        48 49 50 51 52 53 54 55\n        56 57 58 59 60 61 62 63\n        64 65 66 67 68 69 70 71\n        72 73 74 75 76 77 78 79\n        80 81 82 83 84 85 86 87\n        88 89 90 91 92 93 94 95\n        96 97 98 99 100 101 102 103\n        104 105 106 107 108 109 110 111\n        112 113 114 115 116 117 118 119\n        120 121 122 123 124 125 126 127\n        128 129 130 131 132 133 134 135\n        136 137 138 139 140 141 142 143\n        144 145 146 147 148 149 150 151\n        152 153 154 155 156 157 158 159\n        160 161 162 163 164 165 166 167\n        168 169 170 171 172 173 174 175\n        176 177 178 179 180 181 182 183\n        184 185 186 187 188 189 190 191\n        192 193 194 195 196 197 198 199\n        200 201 202 203 204 205 206 207\n        208 209 210 211 212 213 214 215\n        216 217 218 219 220 221 222 223\n        224 225 226 227 228 229 230 231\n        232 233 234 235 236 237 238 239\n        240 241 242 243 244 245 246 247\n        248 249 250 251 252 253 254 255>\n    default-brightness-level = <200>;\n    enable-gpios = <&gpio1 13 GPIO_ACTIVE_HIGH>;\n};\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"pwms = <&pwm0 0 25000 0>"})," \u4e0a\u9762 PWM \u8282\u70b9\u914d\u7f6e\u5c0f\u8282\u4e2d\u6709\u63cf\u8ff0\uff1b"]}),"\n",(0,l.jsx)(e.li,{children:"brightness-lvls \u6570\u7ec4\uff0c\u6211\u4eec\u4e00\u822c\u4ee5\u503c 255 \u4e3a\u4e00\u4e2a scalc, \u6240\u4ee5\u4e00\u822c\u7684 brightness-levels \u4e3a 256 \u4e2a\u5143\u7d20\u7684\u6570\u7ec4\u3002\u5f53 PWM \u8bbe\u7f6e\u4e3a\u6b63\u6781\u6027\u65f6\uff0c\u4ece 0-255 \u8868\u793a\u80cc\u5149\u4e3a\u6b63\u6781\uff0c\u5360\u7a7a\u6bd4\u4ece 0%~100% \u53d8\u5316\uff0c255-0 \u4f4d\u8d1f\u6781\u6027\uff0c\u5360\u7a7a\u6bd4\u4ece 100%~0% \u53d8\u5316\uff1a\u5f53 PWM \u8bbe\u7f6e\u4e3a\u8d1f\u6781\u6027\u65f6\uff0c\u53cd\u4e4b\uff61"}),"\n",(0,l.jsx)(e.li,{children:"defaul-brightness-level \u8868\u793a\u9ed8\u8ba4\u7684\u80cc\u5149\uff0c\u5b83\u5b58\u5728\u4e8e\u5f00\u673a\u65f6\u5019\uff0c\u5982\u80cc\u5149\u9a71\u52a8\u521d\u59cb\u5316\u5230\u5b89\u5353\u7528\u6237\u5c42\u8bbe\u7f6e\u4e0b\u6765\u65b0\u7684\u80cc\u5149\u8fd9\u6bb5\u65f6\u95f4\uff0c\u8868\u793a\u4e3a\u7b2c 200 \u4e2a\u5143\u7d20\u7684\u80cc\u5149\u4eae\u5ea6\uff61"}),"\n",(0,l.jsx)(e.li,{children:"enablcpios \u8868\u793a\u80cc\u5149\u4f7f\u80fd\u811a\uff0c\u8fd9\u4e2a\u6839\u636e\u7535\u8def\u539f\u7406\u56fe\u914d\u7f6e\u5373\u53ef\uff1b\u6709\u7684\u786c\u4ef6\u6ca1\u6709\u8fd9\u4e2a\u80cc\u5149\u4f7f\u80fd\u811a\uff0c\u90a3\u4e48\u5c06\u8fd9\u4e2a\u914d\u7f6e\u5220\u9664\uff0c\u80cc\u5149\u9a71\u52a8\u901a\u8fc7\u914d\u7f6e brighness-levels \u6570\u7ec4\u7684\u7b2c 0 \u4e2a\u5143\u7d20\u5c06\u80cc\u5149\u5173\u95ed\uff61"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"42-pwm-backlight-\u8c03\u8bd5",children:"4.2 PWM Backlight \u8c03\u8bd5"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u4f55\u786e\u5b9a\u80cc\u5149\u706d\u7684 brightness-level \u503c\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u8c03\u8bd5\u80cc\u5149\u4eae\u5ea6\uff0cecho xxx > sys/class/backlight/backlight/brightness"}),"\n",(0,l.jsx)(e.p,{children:"\u5f53 PWM \u8bbe\u7f6e\u4e3a\u6b63\u6781\u6027\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 echo xxx > sys/class/backlight/backlight/brightness \u5230\u80cc\u5149\u8282\u70b9\uff0cxxx \u7684\u8303\u56f4\u4e3a 0~255, \u8fd9\u65f6\u89c2\u5bdf\u4eae\u5ea6\u53d8\u5316\uff0c\u5982 x \u4e3a\u80cc\u5149\u4eae\u5ea6\u4e3a 0 \u7684\u70b9\uff0cy \u4e3a\u5ba2\u6237\u63a5\u53d7\u7684\u80cc\u5149\u6700\u4eae\u7684\u70b9\uff61\u8fd9\u65f6\u91cd\u65b0\u8c03\u6574 brightness-level \u8868\uff0c\u5c31\u53ef\u4ee5\u5c06\u6570\u7ec4\u7b2c\u4e00\u4e2a\u503c\u6539\u4e3a x, \u6700\u5927\u503c\u6539\u4e3a y, \u4e2d\u95f4\u503c\u9700\u5747\u5300\u53d8\u5316\uff0c\u51d1\u6210 256 \u4e2a\u5143\u7d20\uff0c\u4e14\u6709\u4e00\u4e2a\u5143\u7d20\u503c\u4e3a 255\uff61\u5f53 PWM \u4e3a\u8d1f\u6781\u6027\u65f6\uff0c\u5219\u53cd\u4e4b\uff61"}),"\n",(0,l.jsx)(e.h2,{id:"5\u5e38\u89c1\u95ee\u9898",children:"5.\u5e38\u89c1\u95ee\u9898"}),"\n",(0,l.jsx)(e.h3,{id:"51-pwm-\u5728-u-boot-\u4e0e-kernel-\u4e4b\u95f4\u7684\u8854\u63a5\u95ee\u9898",children:"5.1 PWM \u5728 U-Boot \u4e0e kernel \u4e4b\u95f4\u7684\u8854\u63a5\u95ee\u9898"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"U-Boot \u5982\u679c\u6709\u7528 PWM \u8c03\u538b\u529f\u80fd\uff0c\u5230\u4e86 kernel \u9636\u6bb5\uff0c\u6b64\u65f6 PWM \u4ecd\u7136\u662f\u5de5\u4f5c\u72b6\u6001\uff0c\u9700\u8981\u6839\u636e\u5f53\u524d PWM \u7684\u786c\u4ef6\u72b6\u6001\uff0c\u5c06 PWM clock count \u8c03\u6574\u4e0e\u5f53\u524d PWM \u72b6\u6001\u4e00\u81f4\uff61\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0 clock \u67b6\u6784\u53d1\u73b0\u65e0\u4eba\u4f7f\u7528\u7684 PWM clock, \u5c06\u5176\u5173\u95ed\u540e\uff0c\u5bfc\u81f4 PWM \u65e0\u6cd5\u5de5\u4f5c\uff0c\u51fa\u73b0\u7c7b\u4f3c PWM \u8c03\u538b\u7535\u538b\u4e0d\u591f\u5bfc\u81f4\u7684\u6b7b\u673a\u95ee\u9898\u7b49\uff61\u4ee5\u4e0a\u7684\u8865\u4e01\u5df2\u7ecf\u4fee\u6b63\uff0c\u786e\u4fdd PWM \u9a71\u52a8: drivers/pwm/pwm-rockchip.c, \u66f4\u65b0\u5230\u4e0b\u9762\u7684\u63d0\u4ea4\u70b9:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"kernel-4.4: commit e6f2796ef5b660a70102c02d6c15f65ff8701d76"}),"\n",(0,l.jsx)(e.li,{children:"kernel-3.10: commit 5a3d9257d5e379391eb02457ccd70f28a8fb188b"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"U-Boot \u4e0e kernel PWM \u6240\u7528\u7684\u65f6\u949f\u6e90\u7684\u9891\u7387\u4e0d\u540c\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u4e2d\u95f4\u51fa\u73b0\u5207\u6362\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 PWM \u5360\u7a7a\u6bd4\u53d1\u751f\u53d8\u5316\uff0c\u51fa\u73b0\u7c7b\u4f3c PWM \u8c03\u538b\u7535\u538b\u4e0d\u591f\u5bfc\u81f4\u7684\u6b7b\u673a\u95ee\u9898\u7b49\uff0c\u6240\u4ee5\u8981\u4fdd\u6301 U-Boot \u4e0e kernel \u7684\u65f6\u949f\u6e90\u6216\u65f6\u949f\u6e90\u7684\u9891\u7387\u4e00\u81f4\uff61\u786e\u4fdd U-Boot \u7684 GPLL \u9891\u7387\u4e0e kernel \u4fdd\u6301\u4e00\u81f4\uff0c\u56e0\u4e3a PWM \u7684\u65f6\u949f\u73b0\u5728\u90fd\u662f\u6302\u5728 GPLL \u4e0b\u9762\uff1bU-Boot \u7684 GPLL \u9891\u7387\u901a\u8fc7 U-Boot \u7684\u5f00\u673a\u6253\u5370 log \u53ef\u4ee5\u770b\u5230\uff0ckernel \u7684\u9891\u7387\u901a\u8fc7\u67e5\u770b clock tree, cat /sys/kernel/debug/clock/clock_tree | grep gpll\uff61"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"U-Boot \u4e0e kernel \u6240\u914d\u7f6e\u7684\u6781\u6027\u548c\u5468\u671f\u4e0d\u4e00\u81f4\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u4e2d\u95f4\u51fa\u73b0\u5207\u6362\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 PWM \u5360\u7a7a\u6bd4\u53d1\u751f\u53d8\u5316\uff0c\u51fa\u73b0\u7c7b\u4f3c PWM \u8c03\u538b\u7535\u538b\u4e0d\u591f\u5bfc\u81f4\u7684\u6b7b\u673a\u95ee\u9898\u7b49\uff0c\u6240\u4ee5\u8981\u4fdd\u6301 U-Boot \u4e0e kernel \u7684\u6781\u6027\u548c\u5468\u671f\u4e00\u81f4\uff61"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"52-pwm-regulator-\u65f6-pwm-pin-\u811a\u4e0a\u4e0b\u62c9\u914d\u7f6e\u95ee\u9898",children:"5.2 PWM Regulator \u65f6 PWM pin \u811a\u4e0a\u4e0b\u62c9\u914d\u7f6e\u95ee\u9898"}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e\u5728\u505a reboot \u7684\u65f6\u5019\uff0c\u5f88\u591a\u60c5\u51b5\u662f\u4e0d\u590d\u4f4d GRF \u91cc\u9762\u7684\u5bc4\u5b58\u5668\uff0c\u800c PWM \u63a7\u5236\u5668\u4f1a\u53d1\u751f\u590d\u4f4d\uff0c\u8fd9\u5c31\u4f1a\u5728 reboot \u8d77\u6765\u540e\u6539\u53d8 PWM Regulator \u7684\u9ed8\u8ba4\u7535\u538b\uff0c\u6240\u4ee5\u8981\u5728 kernel \u4e2d\u914d\u7f6e PWM pin \u811a\u4e0a\u4e0b\u62c9\u4e0e\u9ed8\u8ba4\u7684\u4e0a\u4e0b\u62c9\u4e00\u81f4\uff0c\u4e0d\u80fd\u914d\u7f6e\u4e3a none\uff61\u8be5\u95ee\u9898\u53ea\u9488\u5bf9 PWM \u4f5c\u4e3a\u8c03\u538b\u65f6\u624d\u9700\u8981\u4fee\u6539\uff0c\u4f5c\u4e3a\u5176\u4ed6\u529f\u80fd\u53ef\u4ee5\u4e0d\u9700\u8981\u5173\u6ce8\uff61"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:'\u901a\u8fc7\u786c\u4ef6\u539f\u7406\u56fe\u786e\u8ba4\u8be5 PWM pin \u7684\u9ed8\u8ba4\u4e0a\u4e0b\u62c9\uff61\u4f8b\u5982 RK3399 \u6316\u6398\u673a\u677f\u5b50 PWM2 \u4f5c\u4e3a\u8c03\u538b\u529f\u80fd\uff0c\u5728\u539f\u7406\u56fe\u4e0a\u627e\u5230 PWM2 pin \u811a: GPIO1_C3/PWM2_d, \u5176\u4e2d\u7684 "d" \u8868\u793a down \u4e3a\u9ed8\u8ba4\u4e0b\u62c9\uff1b\u5982\u679c\u662f "u" \u8868\u793a up \u9ed8\u8ba4\u4e0a\u62c9\uff61'}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20241225191410188",src:i(5195).Z+"",width:"1280",height:"489"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"dtsi \u4e2d\u5b9a\u4e49 PWM pull down pinctrl:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plaintext",children:"pwm2_pin_pull_down: pwm2-pin-pull-down {\n    rockchip,pins =  <1 19 RK_FUNC_1 &pcfg_pull_down>;\n };\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728 dts \u4e2d\u91cd\u65b0 PWM \u8986\u76d6 pinctrl"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:' &pwm2 {\n     status = "okay";\n     pinctrl-names = "active";\n     pinctrl-0 = <&pwm2_pin_pull_down>;\n };\n'})}),"\n",(0,l.jsx)(e.h3,{id:"53-pwm-\u6ce2\u5f62\u793a\u6ce2\u5668\u65e0\u6cd5\u6d4b\u5230",children:"5.3 PWM \u6ce2\u5f62\u793a\u6ce2\u5668\u65e0\u6cd5\u6d4b\u5230"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u793a\u6ce2\u5668\u6d4b\u8bd5\u4e0d\u5230\u6ce2\u5f62\uff0c\u4ece\u4e24\u65b9\u9762\u5165\u624b\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5148\u68c0\u67e5 PWM Counter Register \u5bc4\u5b58\u5668\u7684\u503c\u662f\u5426\u5728\u53d8\u5316\uff0c\u5982\u679c\u6709\u53d8\u5316\u8bf4\u660e PWM \u5728\u5de5\u4f5c (\u6ce8\u610f\uff0c\u5982\u679c \u7528 io \u547d\u4ee4\u6765\u8bfb\u53d6\u5bc4\u5b58\u5668\uff0c\u5728\u4ea7\u54c1\u6587\u6863\u7684\u8868\u683c\u4e2d RK3328 \u548c\u5b83\u4e4b\u540e\u7684\u82af\u7247\u9700\u8981\u518d\u5173\u95ed pclk \u7684 gating\uff0c \u56e0\u4e3a\u8fd9\u4e9b\u82af\u7247 pclk \u548c\u5de5\u4f5c\u65f6\u949f\u662f\u5206\u5f00\u7684)\uff1b\u5982\u679c\u8be5\u5bc4\u5b58\u5668\u7684\u503c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5219\u8bf4\u660e PWM \u5de5\u4f5c\u5f02 \u5e38\u3002\u4e00\u822c\uff0c\u8fd9\u4e9b\u5f02\u5e38\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u65f6\u949f\u95ee\u9898\uff1b"}),"\n",(0,l.jsx)(e.li,{children:"PWM \u672c\u8eab\u5bc4\u5b58\u5668\u914d\u7f6e\u95ee\u9898,PWM \u672a\u4f7f\u80fd\u6216\u8005 duty \u914d\u7f6e\u7684\u503c\u5927\u4e8e period \u7b49\uff1b"}),"\n",(0,l.jsx)(e.li,{children:"RK3368 \u82af\u7247\u9700\u8981\u989d\u5916\u914d\u7f6e GRF \u4e2d GRF_SOC_CON15 \u5bc4\u5b58\u5668\u7684 bit12 \u4e3a 1\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u8bfb\u51fa\u6765\u7684 Counter Register \u5bc4\u5b58\u5668\u7684\u503c\u5728\u53d1\u751f\u53d8\u5316,\u5219\u8bf4\u660e PWM \u5de5\u4f5c\u6b63\u5e38\uff0c\u4f46\u662f\u4ecd\u91cf\u4e0d\u5230\u4fe1 \u53f7\uff0c\u5e94\u8be5\u662f pin \u811a\u7684\u95ee\u9898\uff0c\u4e00\u822c\u4e5f\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u53ef\u80fd\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"iomux \u95ee\u9898\uff1b"}),"\n",(0,l.jsx)(e.li,{children:"io-domain \u914d\u7f6e\u4e0d\u5bf9\uff1b"}),"\n",(0,l.jsx)(e.li,{children:"\u88ab\u5916\u9762\u786c\u4ef6\u5e72\u6270."}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},7086:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/image-20241225190921502-e7b73d11a52bf5e40a3516661c81e92f.png"},9503:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/image-20241225190936066-400956c28078a4d4742ae80babb79abb.png"},5195:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/image-20241225191410188-518c68269d634d3c53f1660deeccf6dd.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>r});var l=i(7294);const s={},c=l.createContext(s);function r(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);