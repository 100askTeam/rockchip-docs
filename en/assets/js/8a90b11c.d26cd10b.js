"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[519],{177:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=c(5893),d=c(1151);const i={},r="Can Fd\u5f00\u53d1\u6307\u5357",l={id:"100ASK-RK3568-Devdocumentation/part5/CanFdDrive",title:"Can Fd\u5f00\u53d1\u6307\u5357",description:"1.Can Fd \u9a71\u52a8",source:"@site/docs/100ASK-RK3568-Devdocumentation/part5/05-CanFdDrive.md",sourceDirName:"100ASK-RK3568-Devdocumentation/part5",slug:"/100ASK-RK3568-Devdocumentation/part5/CanFdDrive",permalink:"/en/docs/100ASK-RK3568-Devdocumentation/part5/CanFdDrive",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/100ASK-RK3568-Devdocumentation/part5/05-CanFdDrive.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"rk3568Sidebar",previous:{title:"Can\u5f00\u53d1\u6307\u5357",permalink:"/en/docs/100ASK-RK3568-Devdocumentation/part5/CanDrive"}},t={},a=[{value:"1.Can Fd \u9a71\u52a8",id:"1can-fd-\u9a71\u52a8",level:2},{value:"1.1 \u9a71\u52a8\u6587\u4ef6",id:"11-\u9a71\u52a8\u6587\u4ef6",level:3},{value:"1.2 DTS \u8282\u70b9\u914d\u7f6e",id:"12-dts-\u8282\u70b9\u914d\u7f6e",level:3},{value:"1.3 \u5185\u6838\u914d\u7f6e",id:"13-\u5185\u6838\u914d\u7f6e",level:3},{value:"1.4 CAN FD \u901a\u4fe1\u6d4b\u8bd5\u5de5\u5177",id:"14-can-fd-\u901a\u4fe1\u6d4b\u8bd5\u5de5\u5177",level:3},{value:"1.5 CAN FD \u5e38\u7528\u547d\u4ee4\u63a5\u53e3",id:"15-can-fd-\u5e38\u7528\u547d\u4ee4\u63a5\u53e3",level:3}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"can-fd\u5f00\u53d1\u6307\u5357",children:"Can Fd\u5f00\u53d1\u6307\u5357"}),"\n",(0,s.jsx)(e.h2,{id:"1can-fd-\u9a71\u52a8",children:"1.Can Fd \u9a71\u52a8"}),"\n",(0,s.jsx)(e.h3,{id:"11-\u9a71\u52a8\u6587\u4ef6",children:"1.1 \u9a71\u52a8\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u9a71\u52a8\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e:\n",(0,s.jsx)(e.code,{children:"drivers/net/can/rockchip/rockchip_canfd.c"})]}),"\n",(0,s.jsx)(e.h3,{id:"12-dts-\u8282\u70b9\u914d\u7f6e",children:"1.2 DTS \u8282\u70b9\u914d\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3b\u8981\u53c2\u6570:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"interrupts = <GIC_SPI 1 IRQ_TYPE_LEVEL_HIGH>;"}),"\n\u8f6c\u6362\u5b8c\u6210\uff0c\u4ea7\u751f\u4e2d\u65ad\u4fe1\u53f7\uff61"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"clock"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'clocks = <&cru CLK_CAN1>, <&cru PCLK_CAN1>;\nclock-names = "baudclk", "apb_pclk";\nresets = <&cru SRST_CAN1>, <&cru SRST_P_CAN1>;\nreset-names = "can", "can-apb";\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u65f6\u949f\u5c5e\u6027\uff0c\u7528\u4e8e\u9a71\u52a8\u5f00\u5173 clk;reset \u5c5e\u6027\uff0c\u7528\u4e8e\u6bcf\u6b21\u590d\u4f4d\u603b\u7ebf\uff61"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"pinctrl"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'&can1 {\n    assigned-clocks = <&cru CLK_CAN1>;\n    assigned-clock-rates = <200000000>;\n    pinctrl-names = "default";\n    pinctrl-0 = <&can1m1_pins>;\n    status = "okay";\n};\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u65f6\u949f\u9891\u7387\u53ef\u4ee5\u4fee\u6539\uff0c\u5982\u679c CAN \u7684\u6bd4\u7279\u7387\u4f4e\u4e8e\u7b49\u4e8e 3M \u5efa\u8bae\u4fee\u6539 CAN \u65f6\u949f\u5230 100M, \u4fe1\u53f7\u66f4\u7a33\u5b9a\uff61\u9ad8\u4e8e 3M \u6bd4\u7279\u7387\u7684\uff0c\u65f6\u949f\u8bbe\u7f6e 200M \u5c31\u53ef\u4ee5\uff61"}),"\n",(0,s.jsxs)(e.p,{children:["\u914d\u7f6e",(0,s.jsx)(e.code,{children:"can_h"}),"\u548c",(0,s.jsx)(e.code,{children:"can_l"}),"\u7684",(0,s.jsx)(e.code,{children:"iomux"}),"\u4f5c\u4e3a",(0,s.jsx)(e.code,{children:"can"}),"\u529f\u80fd\u4f7f\u7528\uff61"]}),"\n",(0,s.jsx)(e.h3,{id:"13-\u5185\u6838\u914d\u7f6e",children:"1.3 \u5185\u6838\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"Symbol: CANFD_ROCKCHIP [=y]\t\t\t\t\t\t\n| Type : tristate\t\t\t\t\t\n| Prompt: Rockchip CANFD controller\t\t\t\n| Location:\n| -> Networking support (NET [=y])\t\t\t\t\n| -> CAN bus subsystem support (CAN [=y])\t\n| -> CAN Device Drivers\t\t\n| -> Platform CAN drivers with Netlink support (CAN_DEV [=y])\t\n| Defined at drivers/net/can/rockchip/Kconfig:10\t\t\t\n| Depends on: NET [=y] && CAN [=y] && CAN_DEV [=y] && ARCH_ROCKCHIP [=y]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"14-can-fd-\u901a\u4fe1\u6d4b\u8bd5\u5de5\u5177",children:"1.4 CAN FD \u901a\u4fe1\u6d4b\u8bd5\u5de5\u5177"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"canutils"}),"\u662f\u5e38\u7528\u7684 CAN \u901a\u4fe1\u6d4b\u8bd5\u5de5\u5177\u5305\uff0c\u5185\u542b 5 \u4e2a\u72ec\u7acb\u7684\u7a0b\u5e8f:",(0,s.jsx)(e.code,{children:"canconfig"}),"\u3001",(0,s.jsx)(e.code,{children:"candump"}),"\u3001",(0,s.jsx)(e.code,{children:"canecho"}),"\u3001",(0,s.jsx)(e.code,{children:"cansend"}),"\u3001",(0,s.jsx)(e.code,{children:"canscqucnce"}),"\u3002\u8fd9\u51e0\u4e2a\u7a0b\u5e8f\u7684\u529f\u80fd\u7b80\u8ff0\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"canconfig"}),"\n\u7528\u4e8e\u914d\u7f6e CAN \u603b\u7ebf\u63a5\u53e3\u7684\u53c2\u6570\uff0c\u4e3b\u8981\u662f\u6ce2\u7279\u7387\u548c\u6a21\u5f0f\uff61"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"candump"}),"\n\u4ece CAN \u603b\u7ebf\u63a5\u53e3\u63a5\u6536\u6570\u636e\u5e76\u4ee5\u5341\u516d\u8fdb\u5236\u5f62\u5f0f\u6253\u5370\u5230\u6807\u51c6\u8f93\u51fa\uff0c\u4e5f\u53ef\u4ee5\u8f93\u51fa\u5230\u6307\u5b9a\u6587\u4ef6\uff61"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"canecho"}),"\n\u628a\u4ece CAN \u603b\u7ebf\u63a5\u53e3\u63a5\u6536\u5230\u7684\u6240\u6709\u6570\u636e\u91cd\u65b0\u53d1\u9001\u5230 CAN \u603b\u7ebf\u63a5\u53e3\uff61"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"cansend"}),"\n\u5f80\u6307\u5b9a\u7684 CAN \u603b\u7ebf\u63a5\u53e3\u53d1\u9001\u6307\u5b9a\u7684\u6570\u636e\uff61"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"cansequence"}),"\n\u5f80\u6307\u5b9a\u7684 CAN \u603b\u7ebf\u63a5\u53e3\u81ea\u52a8\u91cd\u590d\u9012\u589e\u6570\u5b57\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u63a5\u6536\u6a21\u5f0f\u5e76\u6821\u9a8c\u68c0\u67e5\u63a5\u6536\u7684\u9012\u589e\u6570\u5b57\uff61"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ip"}),"\nCAN \u6ce2\u7279\u7387\u3001\u529f\u80fd\u7b49\u914d\u7f6e\uff61"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f",":busybox"," \u91cc\u4e5f\u6709\u96c6\u6210\u4e86",(0,s.jsx)(e.code,{children:"ip"}),"\u5de5\u5177\uff0c\u4f46 busybox \u91cc\u7684\u662f\u9609\u5272\u7248\u672c\uff61\u4e0d\u652f\u6301 CAN \u7684\u64cd\u4f5c\uff61\u6545\u4f7f\u7528\u524d\u8bf7\u5148\u786e\u5b9a",(0,s.jsx)(e.code,{children:"ip"}),"\u547d\u4ee4\u7684\u7248\u672c (",(0,s.jsx)(e.code,{children:"iproute2"}),")"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u5de5\u5177\u5305\uff0c\u7f51\u7edc\u4e0a\u90fd\u6709\u8be6\u7ec6\u7684\u7f16\u8bd1\u8bf4\u660e\uff61\u5982\u679c\u662f\u81ea\u5df1\u7f16\u8bd1",(0,s.jsx)(e.code,{children:"buildroot"}),", \u76f4\u63a5\u5f00\u542f\u5b8f\u5c31\u53ef\u4ee5\u652f\u6301\u4e0a\u8ff0\u5de5\u5177\u5305:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"BR2_PACKAGE_CAN_UTILS=y\nBR2_PACKAGE_IPROUTE2=y\n"})}),"\n",(0,s.jsx)(e.h3,{id:"15-can-fd-\u5e38\u7528\u547d\u4ee4\u63a5\u53e3",children:"1.5 CAN FD \u5e38\u7528\u547d\u4ee4\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u67e5\u8be2\u5f53\u524d\u7f51\u7edc\u8bbe\u5907:\n",(0,s.jsx)(e.code,{children:"ifconfig -a"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"CAN FD \u542f\u52a8:"}),"\n",(0,s.jsxs)(e.p,{children:["\u5173\u95ed CAN:\n",(0,s.jsx)(e.code,{children:"ip link set can0 down"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u8bbe\u7f6e\u4ef2\u88c1\u6bb5 1M \u6ce2\u7279\u7387\uff0c\u6570\u636e\u6bb5 3M \u6ce2\u7279\u7387:\n",(0,s.jsx)(e.code,{children:"ip link set can0 type can bitrate 1000000 dbitrate 3000000 fd on"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u6253\u5370",(0,s.jsx)(e.code,{children:"can0"}),"\u4fe1\u606f:\n",(0,s.jsx)(e.code,{children:"ip -details link show can0"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u542f\u52a8 CAN:\n",(0,s.jsx)(e.code,{children:"ip link set can0 up"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"CAN FD \u53d1\u9001:"}),"\n",(0,s.jsxs)(e.p,{children:["\u53d1\u9001 (\u6807\u51c6\u5e27\uff0c\u6570\u636e\u5e27\uff0cID:123,date",":DEADBEEF","):\n",(0,s.jsx)(e.code,{children:"cansend can0 123##1DEADBEEF"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u53d1\u9001 (\u6269\u5c55\u5e27\uff0c\u6570\u636e\u5e27\uff0cID:00000123,date",":DEADBEEF","):\n",(0,s.jsx)(e.code,{children:"cansend can0 00000123##1DEADBEEF"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["CAN FD \u63a5\u6536:\n\u5f00\u542f\u6253\u5370\uff0c\u7b49\u5f85\u63a5\u6536:\n",(0,s.jsx)(e.code,{children:"candump can0"})]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},1151:(n,e,c)=>{c.d(e,{Z:()=>l,a:()=>r});var s=c(7294);const d={},i=s.createContext(d);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);