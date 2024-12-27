"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[399],{4708:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var n=s(5893),c=s(1151);const t={sidebar_position:1},r="SPI\u5f00\u53d1\u6307\u5357",l={id:"100ASK-RK3568-Devdocumentation/part5/SpiDrive",title:"SPI\u5f00\u53d1\u6307\u5357",description:"1.Rockchip SPI \u529f\u80fd\u7279\u70b9",source:"@site/docs/100ASK-RK3568-Devdocumentation/part5/01-SpiDrive.md",sourceDirName:"100ASK-RK3568-Devdocumentation/part5",slug:"/100ASK-RK3568-Devdocumentation/part5/SpiDrive",permalink:"/en/docs/100ASK-RK3568-Devdocumentation/part5/SpiDrive",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/100ASK-RK3568-Devdocumentation/part5/01-SpiDrive.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"rk3568Sidebar",previous:{title:"\u9a71\u52a8\u5f00\u53d1\u5165\u95e8",permalink:"/en/docs/category/\u9a71\u52a8\u5f00\u53d1\u5165\u95e8"},next:{title:"UART\u5f00\u53d1\u6307\u5357",permalink:"/en/docs/100ASK-RK3568-Devdocumentation/part5/UartDrive"}},d={},p=[{value:"1.Rockchip SPI \u529f\u80fd\u7279\u70b9",id:"1rockchip-spi-\u529f\u80fd\u7279\u70b9",level:2},{value:"2.\u5185\u6838\u8f6f\u4ef6",id:"2\u5185\u6838\u8f6f\u4ef6",level:2},{value:"2.1 \u4ee3\u7801\u8def\u5f84",id:"21-\u4ee3\u7801\u8def\u5f84",level:3},{value:"2.2 SPI \u8bbe\u5907\u914d\u7f6e -- RK \u82af\u7247\u4f5c Master \u7aef",id:"22-spi-\u8bbe\u5907\u914d\u7f6e----rk-\u82af\u7247\u4f5c-master-\u7aef",level:3},{value:"2.3 SPI \u8bbe\u5907\u914d\u7f6e --RK \u82af\u7247\u4f5c Slave \u7aef",id:"23-spi-\u8bbe\u5907\u914d\u7f6e---rk-\u82af\u7247\u4f5c-slave-\u7aef",level:3},{value:"2.3.1 Linux 4.4 \u914d\u7f6e",id:"231-linux-44-\u914d\u7f6e",level:4},{value:"DTS \u8282\u70b9\u914d\u7f6e",id:"dts-\u8282\u70b9\u914d\u7f6e",level:5},{value:"2.3.2 Linux 4.19 \u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",id:"232-linux-419-\u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",level:4},{value:"2.3.3 SPI Slave \u6d4b\u8bd5\u987b\u77e5",id:"233-spi-slave-\u6d4b\u8bd5\u987b\u77e5",level:4},{value:"2.4 SPI \u8bbe\u5907\u9a71\u52a8\u4ecb\u7ecd",id:"24-spi-\u8bbe\u5907\u9a71\u52a8\u4ecb\u7ecd",level:3},{value:"2.5 User mode SPI device \u914d\u7f6e",id:"25-user-mode-spi-device-\u914d\u7f6e",level:3},{value:"2.6 cs-gpios \u652f\u6301",id:"26-cs-gpios-\u652f\u6301",level:3},{value:"2.6.1 Linux 4.4 \u914d\u7f6e",id:"261-linux-44-\u914d\u7f6e",level:4},{value:"2.6.2 Linux 4.19 \u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",id:"262-linux-419-\u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",level:4},{value:"3.\u5185\u6838\u6d4b\u8bd5\u8f6f\u4ef6",id:"3\u5185\u6838\u6d4b\u8bd5\u8f6f\u4ef6",level:2},{value:"3.1 \u4ee3\u7801\u8def\u5f84",id:"31-\u4ee3\u7801\u8def\u5f84",level:3},{value:"3.2 SPI \u6d4b\u8bd5\u8bbe\u5907\u914d\u7f6e",id:"32-spi-\u6d4b\u8bd5\u8bbe\u5907\u914d\u7f6e",level:3},{value:"3.3 \u6d4b\u8bd5\u547d\u4ee4",id:"33-\u6d4b\u8bd5\u547d\u4ee4",level:3},{value:"4.\u5e38\u89c1\u95ee\u9898",id:"4\u5e38\u89c1\u95ee\u9898",level:2},{value:"4.1 SPI \u65e0\u4fe1\u53f7",id:"41-spi-\u65e0\u4fe1\u53f7",level:3},{value:"4.2 \u5982\u4f55\u7f16\u5199 SPI \u5e94\u7528\u4ee3\u7801",id:"42-\u5982\u4f55\u7f16\u5199-spi-\u5e94\u7528\u4ee3\u7801",level:3},{value:"4.3 \u5ef6\u8fdf\u91c7\u6837\u65f6\u949f\u914d\u7f6e\u65b9\u6848",id:"43-\u5ef6\u8fdf\u91c7\u6837\u65f6\u949f\u914d\u7f6e\u65b9\u6848",level:3}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"spi\u5f00\u53d1\u6307\u5357",children:"SPI\u5f00\u53d1\u6307\u5357"}),"\n",(0,n.jsx)(i.h2,{id:"1rockchip-spi-\u529f\u80fd\u7279\u70b9",children:"1.Rockchip SPI \u529f\u80fd\u7279\u70b9"}),"\n",(0,n.jsx)(i.p,{children:"SPI (serial peripheral interface), \u4ee5\u4e0b\u662f linux 4.4 SPI \u9a71\u52a8\u652f\u6301\u7684\u4e00\u4e9b\u7279\u6027\ufe30"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u9ed8\u8ba4\u91c7\u7528\u6469\u6258\u7f57\u62c9 SPI \u534f\u8bae"}),"\n",(0,n.jsx)(i.li,{children:"\u652f\u6301 8 \u4f4d\u548c 16 \u4f4d"}),"\n",(0,n.jsx)(i.li,{children:"\u8f6f\u4ef6\u53ef\u7f16\u7a0b\u65f6\u949f\u9891\u7387\u548c\u4f20\u8f93\u901f\u7387\u9ad8\u8fbe 50MHz"}),"\n",(0,n.jsx)(i.li,{children:"\u652f\u6301 SPI 4 \u79cd\u4f20\u8f93\u6a21\u5f0f\u914d\u7f6e"}),"\n",(0,n.jsx)(i.li,{children:"\u6bcf\u4e2a SPI \u63a7\u5236\u5668\u652f\u6301\u4e00\u4e2a\u5230\u4e24\u4e2a\u7247\u9009"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"\u9664\u4ee5\u4e0a\u652f\u6301\uff0clinux 4.19 \u65b0\u589e\u4ee5\u4e0b\u7279\u6027:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u6846\u67b6\u652f\u6301 slave \u548c master \u4e24\u79cd\u6a21\u5f0f"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"2\u5185\u6838\u8f6f\u4ef6",children:"2.\u5185\u6838\u8f6f\u4ef6"}),"\n",(0,n.jsx)(i.h3,{id:"21-\u4ee3\u7801\u8def\u5f84",children:"2.1 \u4ee3\u7801\u8def\u5f84"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"drivers/spi/spi.c spi \u9a71\u52a8\u6846\u67b6\ndrivers/spi/spi-rockchip.c rk spi \u5404\u63a5\u53e3\u5b9e\u73b0\ndrivers/spi/spidev.c \u521b\u5efa spi \u8bbe\u5907\u8282\u70b9\uff0c\u7528\u6237\u6001\u4f7f\u7528\uff61\ndrivers/spi/spi-rockchip-test.c spi \u6d4b\u8bd5\u9a71\u52a8\uff0c\u9700\u8981\u81ea\u5df1\u624b\u52a8\u6dfb\u52a0\u5230 Makefile \u7f16\u8bd1\nDocumentation/spi/spidev_test.c \u7528\u6237\u6001 spi \u6d4b\u8bd5\u5de5\u5177\n"})}),"\n",(0,n.jsx)(i.h3,{id:"22-spi-\u8bbe\u5907\u914d\u7f6e----rk-\u82af\u7247\u4f5c-master-\u7aef",children:"2.2 SPI \u8bbe\u5907\u914d\u7f6e -- RK \u82af\u7247\u4f5c Master \u7aef"}),"\n",(0,n.jsx)(i.p,{children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Device Drivers ---\x3e\n\t[*] SPI support ---\x3e\n\t\t<*> Rockchip SPI controller driver\n"})}),"\n",(0,n.jsx)(i.p,{children:"DTS \u8282\u70b9\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'&spi1{\n    status = "okay";\n    //assigned-clock-rates = <200000000>; // \u9ed8\u8ba4\u4e0d\u7528\u914d\u7f6e,SPI\u8bbe\u5907\u5de5\u4f5c\u65f6\u949f\u503c,io\u65f6\u949f\u7531\u5de5\u4f5c\u65f6\u949f\u5206\u9891\u83b7\u53d6\n    dma-names = "tx","rx"; // \u4f7f\u80fdDMA\u6a21\u5f0f,\u901a\u8baf\u957f\u5ea6\u5c11\u4e8e32\u5b57\u8282\u4e0d\u5efa\u8bae\u7528,\u7f6e\u7a7a\u8d4b\u503c\u53bb\u6389\u4f7f\u80fd,\u5982 "dma-names;";\n    //rx-sample-delay-ns = <10>; // \u9ed8\u8ba4\u4e0d\u7528\u914d\u7f6e,\u8bfb\u91c7\u6837\u5ef6\u65f6,\u8be6\u7ec6\u53c2\u8003 \u201c\u5e38\u89c1\u95ee\u9898\u201d\u201c\u5ef6\u65f6\u91c7\u6837\u65f6\u949f\u914d\u7f6e\u65b9\u6848\u201d \u7ae0\u8282\n    spi_test@10 {\n        compatible ="rockchip,spi_test_bus1_cs0"; //\u4e0e\u9a71\u52a8\u5bf9\u5e94\u7684\u540d\u5b57\n        reg=<0>; //\u7247\u90090\u6216\u80051\n        spi-cpha; //\u8bbe\u7f6eCPHA=1,\u4e0d\u914d\u7f6e\u5219\u4e3a0\n        spi-cpo1; spi-1sb-first; //\u8bbe\u7f6eCPOL=1,\u4e0d\u914d\u7f6e\u5219\u4e3a0 //IO\u5148\u4f20\u8f931sb\n        spi-max-frequency =<24000000>; //spic1k\u8f93\u51fa\u7684\u65f6\u949f\u9891\u7387,\u4e0d\u8d85\u8fc750M\n        status = "okay"; //\u4f7f\u80fd\u8bbe\u5907\u8282\u70b9\n    );\n);\n'})}),"\n",(0,n.jsx)(i.p,{children:"spilk assigned-clock-rates \u548c spi-max-frcquney \u7684\u914d\u7f6e\u8bf4\u660e:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"spiimax-fqueney \u662f SPI \u7684\u8f93\u51fa\u65f6\u949f\uff0c\u7531 SPI \u5de5\u4f5c\u65f6\u949f spiclk assignd-clockrates \u5185\u90e8\u5206\u9891\u540e\u8f93\u51fa\uff0c\u7531\u4e8e\u5185\u90e8\u81f3\u5c11 2 \u5206\u9891\uff0c\u6240\u4ee5\u5173\u7cfb\u662f spiclk assigned-lock-rates>=2*spi-max-frcquency:"}),"\n",(0,n.jsxs)(i.li,{children:["\u5047\u5b9a\u9700\u8981 50MHz \u7684 SPIO \u901f\u7387\uff0c\u53ef\u4ee5\u8003\u8651\u914d\u7f6e (\u8bb0\u4f4f\u5185\u90e8\u5206\u9891\u4e3a\u5076\u6570\u5206\u9891) ",(0,n.jsx)(i.code,{children:"spi_clkassind-lock ratcs=<10000000"}),",",(0,n.jsx)(i.code,{children:"pi-max-ficquency=<50000000"}),", \u5373\u5de5\u4f5c\u65f6\u949f 100MHz (PLL \u5206\u9891\u5230\u4e00\u4e2a\u4e0d \u5927\u4e8e 100MHz \u4f46\u6700\u63a5\u8fd1\u7684\u503c), \u7136\u540e\u5185\u90e8\u4e8c\u5206\u9891\u6700\u7ec8 10 \u63a5\u8fd1 50 MHz:"]}),"\n",(0,n.jsx)(i.li,{children:"spiclk assigned-lock-rates \u4e0d\u8981\u4f4e\u4e8e 24M, \u5426\u5219\u53ef\u80fd\u6709\u95ee\u9898\uff1b"}),"\n",(0,n.jsxs)(i.li,{children:["\u5982\u679c\u9700\u8981\u914d\u7f6e spi-cpha \u7684\u8bdd\uff0c\u8981\u6c42 ",(0,n.jsx)(i.code,{children:"spiclk assigned-clock-rates<=6M,1M<=spi-max-fequeney> 3M"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"23-spi-\u8bbe\u5907\u914d\u7f6e---rk-\u82af\u7247\u4f5c-slave-\u7aef",children:"2.3 SPI \u8bbe\u5907\u914d\u7f6e --RK \u82af\u7247\u4f5c Slave \u7aef"}),"\n",(0,n.jsx)(i.p,{children:"SPI \u505a slave \u4f7f\u7528\u7684\u63a5\u53e3\u548c master \u6a21\u5f0f\u4e00\u6837\uff0c\u90fd\u662f spi read \u548c spi_writc\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"231-linux-44-\u914d\u7f6e",children:"2.3.1 Linux 4.4 \u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"\u5185\u6838\u8865\u4e01"}),"\n",(0,n.jsx)(i.p,{children:"\u8bf7\u5148\u68c0\u67e5\u4e0b\u81ea\u5df1\u7684\u4ee3\u7801\u662f\u5426\u5305\u542b\u4ee5\u4e0b\u8865\u4e01\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u624b\u52a8\u6253\u4e0a\u8865\u4e01:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'diff --git a/drivers/spi/spi-rockchip.c b/drivers/spi/spi-rockchip.c \nindex 060806e..38eecde 100644\n--- a/drivers/spi/spi-rockchip.c\n+++ b/drivers/spi/spi-rockchip.c\n@@ -519,6 +519,8 @@ static void rockchip_spi_config(struct rockchip_spi *rs) \n\tcr0 |= ((rs->mode & 0x3) << CRO_SCPH_OFFSET); \n\tcr0 |= (rs->tmode << CRO_XFM_OFFSET);\n\tcr0 |= (rs->type << CR0_FRF_OFFSET);\n+       if (rs->mode & SPI_SLAVE_MODE)\n+\t\t\tcr0 |= (CR0_OPM_SLAVE << CR0_OPM_OFFSET);\n\n \t\tif(rs->use_dma){\n\t \t\tif (rs->tx)\n@@ -734,7 +736,7 @@ static int rockchip_spi_probe(struct platform_device *pdev)\n\n\t\tmaster->auto_runtime_pm = true; \n\t\tmaster->bus_num = pdev->id;\n-\t\tmaster->mode_bits = SPI_CPOL | SPI_CPHA | SPI_LOOP;\n+\t\tmaster->mode_bits = SPI_CPOL | SPI_CPHA | SPI_LOOP | SPI_SLAVE_MODE;\n\t\tmaster->num_chipselect = 2;\n\t\tmaster->dev.of_node = pdev->dev.of_node;\n\t\tmaster->bits_per_word_mask = SPI_BPW_MASK(16) | SPI_BPW_MASK(8);\ndiff --git a/drivers/spi/spi.c b/drivers/spi/spi.c\nindex dee1cb8..4172da1 100644\n--- a/drivers/spi/spi.c\n+++ b/drivers/spi/spi.c\n@@ -1466,6 +1466,8 @@ of_register_spi_device(struct spi_master *master, struct device_node *nc)\n\t\tspi->mode |= SPI_3WIRE;\n\tif (of_find_property(nc, "spi-lsb-first", NULL))\n\t\tspi->mode |= SPI_LSB_FIRST;\n+\tif (of_find_property(nc, "spi-slave-mode", NULL))\n+\t\tspi->mode |= SPI_SLAVE_MODE;\n\n\t/*Device DUAL/QUAD mode*/\n\tif (!of_property_read_u32(nc, "spi-tx-bus-width", &value)) {\ndiff --git a/include/linux/spi/spi.h b/include/linux/spi/spi.h\nindex cce80e6..ce2cec6 100644\n--- a/include/linux/spi/spi.h\n+++ b/include/linux/spi/spi.h\n@@ -153,6 +153,7 @@ struct spi_device {\n #define        SPI_TX_QUAD\t\t0x200  /* transmit with 4 wires */\n #define        SPI_RX_DUAL\t\t0x400  /* receive with 2 wires */\n #define        SPI_RX_QUAD\t\t0x800  /* receive with 4 wires */\n+#define\t\tSPI_SLAVE_MODE  0x1000 /* enable SPI slave mode*/\n        int       irq;              \n        void      *controller_state;               \n        void      *controller_data;\n'})}),"\n",(0,n.jsx)(i.h5,{id:"dts-\u8282\u70b9\u914d\u7f6e",children:"DTS \u8282\u70b9\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'&spi0{\n    assigned-clocks = <&pmucru CLK_SPI0>; //\u6307\u5b9a\u6b63\u786e\u7684SPI sclk,\u53ef\u4ee5\u901a\u8fc7\u67e5\u770bdtsi\u4e2d\u547d\u540d\u4e3aspiclk\u7684\u65f6\u949f \n    assigned-clock-rates = <200000000>; //\u76f8\u5e94clock\u5728\u89e3\u6790dts\u65f6\u5b8c\u6210\u8d4b\u503c \n    spi_test@01{\n        compatible = "rockchip,spi_test_bus0_cs1";\n        id=<1>;\n        reg=<1>; \n        //spi-max-frequency=<24000000>;\u8fd9\u4e0d\u9700\u8981\u914d spi-slave-mode;//\u4f7f\u80fdslave\u6a21\u5f0f,\u53ea\u9700\u6539\u8fd9\u91cc\u5c31\u884c\u3002\n    };\n};\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u6ce8\u610f:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["The working clock must be more than 6 times of the IO clock sent by the master. For example, ",(0,n.jsx)(i.code,{children:"if the assigned clock rates are<48000000>"}),",hen the clock sent by the master must be less than 8m"]}),"\n",(0,n.jsxs)(i.li,{children:["\u5185\u6838 4.4 \u6846\u67b6\u5e76\u672a\u5bf9 SPIslave \u505a\u7279\u6b8a\u4f18\u5316\uff0c\u6240\u4ee5\u4f20\u8f93\u5b58\u5728\u4ee5\u4e0b\u4e24\u79cd\u72b6\u6001:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:'DMA \u4f20\u8f93\uff1a\u4f20\u8f93\u53d1\u8d77\u540e\u6d41\u7a0b\u8fdb\u5165\u7b49\u5f85 completion \u7684\u8d85\u65f6\u673a\u5236\uff0c\u53ef\u4ee5\u901a\u8fc7 dts \u8c03\u6574 "dma-names;" \u6765\u5173\u95ed DMA \u4f20\u8f93 dma-names'}),"\n",(0,n.jsx)(i.li,{children:"CPU \u4f20\u8f93\uff1awhile \u5728\u5e95\u5c42\u9a71\u52a8\u7b49\u5f85\u4f20\u8f93\u5b8c\u6210\uff0cCPU \u5fd9\u7b49"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\u4f7f\u7528 RK SPI \u4f5c\u4e3a slave, \u53ef\u4ee5\u8003\u8651\u4ee5\u4e0b\u51e0\u79cd\u573a\u666f:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"\u5173\u95ed DMA, \u4ec5\u4f7f\u7528 CPU \u963b\u585e\u4f20\u8f93"}),"\n",(0,n.jsx)(i.li,{children:"\u4f20\u8f93\u5747\u8bbe\u7f6e\u5927\u4e8e 32 byte, \u8d70 DMA \u4f20\u8f93\uff0c\u4f20\u8f93\u7b49\u5f85 completion \u8d85\u65f6\u673a\u5236"}),"\n",(0,n.jsx)(i.li,{children:"\u4e3b\u4ece\u4e4b\u95f4\u589e\u52a0\u4e00\u4e2a gpio, \u4e3b\u8bbe\u5907\u8f93\u51fa\u6765\u901a\u77e5\u4ece\u8bbe\u5907 transfer ready \u6765\u51cf\u5c11 CPU \u5fd9\u7b49\u65f6\u95f4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"232-linux-419-\u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",children:"2.3.2 Linux 4.19 \u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Device Drivers ---\x3e\n\t[*] SPI support ---\x3e\n\t\t[*] SPI slave protocol handlers\n"})}),"\n",(0,n.jsx)(i.p,{children:"DTS \u8282\u70b9\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'&spi1 {\n    status = "okay";\n    dma-names = "tx","rx";\n    spi-slave;  //     \u4f7f\u80fdslave\u6a21\u5f0f\n    slave {     //     \u6309\u7167\u6846\u67b6\u8981\u6c42,SPI slave\u5b50\u8282\u70b9\u7684\u547d\u540d\u9700\u4ee5 "slave" \u5f00\u59cb\n        compatible ="rockchip,spi_test_bus1_cs0";\n        reg = <0>;\n        id = <0>;\n    };\n};\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u6ce8\u610f:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u53ef\u4ee5\u8003\u8651\u4e3b\u4ece\u4e4b\u95f4\u589e\u52a0\u4e00\u4e2a gpio, \u4e3b\u8bbe\u5907\u8f93\u51fa\u6765\u901a\u77e5\u4ece\u8bbe\u5907 transfer ready \u6765\u51cf\u5c11 CPU \u5fd9\u7b49\u65f6\u95f4"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"233-spi-slave-\u6d4b\u8bd5\u987b\u77e5",children:"2.3.3 SPI Slave \u6d4b\u8bd5\u987b\u77e5"}),"\n",(0,n.jsx)(i.p,{children:"spi \u505a slave, \u8981\u5148\u542f\u52a8 slave read, \u518d\u542f\u52a8 master write, \u4e0d\u7136\u4f1a\u5bfc\u81f4 slave \u8fd8\u6ca1\u8bfb\u5b8c\uff0cmaster \u5df2\u7ecf\u5199\u5b8c\u4e86\uff61\nslave write,master read \u4e5f\u662f\u9700\u8981\u5148\u542f\u52a8 slave write, \u56e0\u4e3a\u53ea\u6709 master \u9001\u51fa clk \u540e\uff0cslave \u624d\u4f1a\u5de5\u4f5c\uff0c\u540c\u65f6 master \u4f1a\u7acb\u5373\u53d1\u9001\u6216\u63a5\u6536\u6570\u636e\uff61"}),"\n",(0,n.jsxs)(i.p,{children:["\u4f8b\u5982\uff1a\u5728\u7b2c\u4e09\u7ae0\u8282\u7684\u57fa\u7840\u4e0a:\n\u5148 slave : ",(0,n.jsx)(i.code,{children:"echo write 0 1 16 > /dev/spi_misc_test"}),"\n\u518d master: ",(0,n.jsx)(i.code,{children:"echo read 0 1 16 > /dev/spi_misc_test"})]}),"\n",(0,n.jsx)(i.h3,{id:"24-spi-\u8bbe\u5907\u9a71\u52a8\u4ecb\u7ecd",children:"2.4 SPI \u8bbe\u5907\u9a71\u52a8\u4ecb\u7ecd"}),"\n",(0,n.jsx)(i.p,{children:"\u8bbe\u5907\u9a71\u52a8\u6ce8\u518c:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'#include <linux/init.h>\n#include <linux/module.h>\n#include <linux/platform_device.h>\n#include <linux/of.h>\n#include <linux/spi/spi.h>\nstatic int spi_test_probe(struct spi_device *spi)\n{\n    int ret;\n    if(!spi)\n         return -ENOMEM;\n    spi->bits_per_word= 8;\n    ret= spi_setup(spi);\n    if(ret < 0) {\n         dev_err(&spi->dev,"ERR: fail to setup spi\\n");\n         return-1;\n    }\n    return ret;\n}\nstatic int spi_test_remove(struct spi_device *spi)\n{\n    printk("%s\\n",__func__);\n    return 0;\n}\nstatic const struct of_device_id spi_test_dt_match[]=(\n\t{.compatible = "rockchip,spi_test_bus1_cs0",),\n\t{.compatible = "rockchip,spi_test_bus1_cs1",),\n\t{},\n);\nMODULE_DEVICE_TABLE(of, spi_test_dt_match);\n\nstatic struct spi_driver spi_testdriver={\n\t.driver={\n\t\t.name = "spi_test"\n\t\t.owner = THIS_MODULE,\n\t\t.of_match_table = of_match_ptr(spi_test_dt_match),\n),\n\t\t.probe = spi_test_probe,\n\t\t.remove= spi_test_remove,\n);\nstatic int __init spi_test_init(void)\n{\n    int ret=0;\n    ret = spi_register_driver(&spi_test_driver);\n    return ret;\n}\nmodule_init (spi_test_init) ;\nstatic void __exit spi_test_exit(void)\n{\n    return spi_unregister_driver(&spi_test_driver);\n }\nmodule_exit(spi_test_exit);\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u5bf9 SPI \u8bfb\u5199\u64cd\u4f5c\u8bf7\u53c2\u8003 include/linux/spi/spi.h, \u4ee5\u4e0b\u7b80\u5355\u5217\u51fa\u51e0\u4e2a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"static inline int\nspi_write(struct spi_device *spi,const void *buf, size_t len)\nstatic inline int\nspi_read(struct spi_device *spi,void *buf, size_t len)\nstatic inline int\nspi_write_and_read(structspi_device *spi, const void *tx_buf, void *rx_buf,size_t len)\n\n"})}),"\n",(0,n.jsx)(i.h3,{id:"25-user-mode-spi-device-\u914d\u7f6e",children:"2.5 User mode SPI device \u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"User mode SPI device \u6307\u7684\u662f\u7528\u6237\u7a7a\u95f4\u76f4\u63a5\u64cd\u4f5c SPI \u63a5\u53e3\uff0c\u8fd9\u6837\u65b9\u4fbf\u4f17\u591a\u7684 SPI \u5916\u8bbe\u9a71\u52a8\u8dd1\u5728\u7528\u6237\u7a7a\u95f4\uff0c\u4e0d\u9700\u8981\u6539\u5230\u5185\u6838\uff0c\u65b9\u4fbf\u9a71\u52a8\u79fb\u690d\u5f00\u53d1\uff61"}),"\n",(0,n.jsx)(i.p,{children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Device Drivers ---\x3e\n\t[*] SPI support ---\x3e\n\t\t[*] User mode SPI device driver support\n"})}),"\n",(0,n.jsx)(i.p,{children:"DTS \u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'&spi0 {\n    status = "okay";\n    max-freq = <50000000>;\n    spi_test@00 {\n        compatible = "rockchip,spidev";\n        reg = <0>;\n        spi-max-frequency = <5000000>;\n    };\n};\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,n.jsx)(i.p,{children:"\u9a71\u52a8\u8bbe\u5907\u52a0\u8f7d\u6ce8\u518c\u6210\u529f\u540e\uff0c\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u8fd9\u4e2a\u540d\u5b57\u7684\u8bbe\u5907\uff1a/dev/spidev1.1"}),"\n",(0,n.jsx)(i.p,{children:"\u8bbe\u5907\u8282\u70b9\u7684\u8bfb\u5199\u64cd\u4f5c\u4f8b\u7a0b\u8bf7\u53c2\u7167:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u5185\u6838 4.4 Documentation/spi/spidev_test.c"}),"\n",(0,n.jsx)(i.li,{children:"\u5185\u6838 4.19 \u53ca\u4ee5\u540e tools/spi/spidev_test.c"}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u53ef\u5728\u5185\u6838\u5de5\u7a0b\u7f16\u8bd1\u540e\uff0c\u8fdb\u5165\u5bf9\u5e94\u8def\u5f84\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u76f4\u63a5\u7f16\u8bd1\u6807\u51c6 SPI app \u7a0b\u5e8f:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"make CROSS_COMPILE=~/path-to-toolchain/gcc-xxxxx-toolchain/bin/xxxx-linux-gnu-   #\u9009\u62e9kernel\u6240\u7528CROSS_COMPILE\n"})}),"\n",(0,n.jsx)(i.p,{children:'\u652f\u6301\u914d\u7f6e\u4e3a SPIslave \u8bbe\u5907\uff0c\u53c2\u8003 "SPI \u8bbe\u5907\u914d\u7f6e --RK \u82af\u7247\u505a Slave \u7aef", \u5176\u4e2d DTS \u914d\u7f6e sub node \u5e94\u4fdd\u6301\u4e3a "rockhip.pidev"'}),"\n",(0,n.jsx)(i.h3,{id:"26-cs-gpios-\u652f\u6301",children:"2.6 cs-gpios \u652f\u6301"}),"\n",(0,n.jsxs)(i.p,{children:["\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 spi-bus \u7684 cs-gpios \u5c5e\u6027\u6765\u5b9e\u73b0 gpio \u6a21\u62df cs \u4ee5\u6269\u5c55 SPI \u7247\u9009\u4fe1\u53f7\uff0ccs - gpios \u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u67e5\u9605\u5185\u6838\u6587\u6863 ",(0,n.jsx)(i.code,{children:"Docentation/devicetree/binding/spi/spi-bus.txt"}),"\u3002"]}),"\n",(0,n.jsx)(i.h4,{id:"261-linux-44-\u914d\u7f6e",children:"2.6.1 Linux 4.4 \u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"\u8be5\u652f\u6301\u9700\u8981\u8f83\u591a\u652f\u6301\u8865\u4e01\uff0c\u8bf7\u8054\u7cfb RK \u5de5\u7a0b\u5e08\u83b7\u53d6\u76f8\u5e94\u7684\u8865\u4e01\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"262-linux-419-\u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e",children:"2.6.2 Linux 4.19 \u53ca\u4ee5\u4e0a\u5185\u6838\u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"\u4ee5 SPI1 \u8bbe\u5b9a GPIO0C4 \u4e3a spil cs2n \u6269\u5c55\u811a\u4e3a\u4f8b\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u8bbe\u7f6e cs - gpio \u811a\u5e76\u5728 SPI \u8282\u70b9\u4e2d\u5f15\u7528"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'diff --git a/arch/arm/boot/dts/rv1126-evb-v10.dtsi b/arch/arm/boot/dts/rv1126-evb-v10.dtsi\nindex 144e9edf1831..c17ac362289e 100644\n--- a/arch/arm/boot/dts/rv1126-evb-v10.dtsi\n+++ b/arch/arm/boot/dts/rv1126-evb-v10.dtsi\n\n&pinctrl{\n\t\xb7\xb7\xb7\n+\n+   spi1{\n+       spi1_cs0n:spi1-cs1n{\n+          \trockchip,pins=\n+           \t<0 RK_PC2 RK_FUNC_GPIO &pcfg_pull_up_drv_level_0>;\n+        };    \n+       spi1_cs1n: spi1-cs1n {\n+           rockchip,pins =\n+           \t<0 RK_PC3 RK_FUNC_GPIO &pcfg_pull_up_drv_level_0>;\n+       };\n+       spi1_cs2n: spi1-cs2n {\n+           rockchip,pins =\n+           <0 RK_PC4 RK_FUNC_GPIO &pcfg_pull_up_drv_level_0>;\n+       };\n+   };\n};\ndiff --git a/arch/arm/boot/dts/rv1126.dtsi b/arch/arm/boot/dts/rv1126.dtsi\nindex 351bc668ea42..986a85f13832 100644\n--- a/arch/arm/boot/dts/rv1126.dtsi\n+++ b/arch/arm/boot/dts/rv1126.dtsi\n\nspi1: spi@ff5b0000 {\n    compatible = "rockchip,rv1126-spi", "rockchip,rk3066-spi";\n    reg = <0xff5b0000 0x1000>;\n    interrupts = <GIC_SPI 11 IRQ_TYPE_LEVEL_HIGH>;\n    #address-cells = <1>;\n    #size-cells = <0>;\n    clocks = <&cru CLK_SPI1>, <&cru PCLK_SPI1>;\n    clock-names = "spiclk", "apb_pclk";\n    dmas = <&dmac 3>, <&dmac 2>;\n    dma-names = "tx", "rx";\n    pinctrl-names = "default", "high_speed";\n-   pinctrl-0 = <&spi1m0_clk &spi1m0_cs0n &spi1m0_cs1n &spi1m0_miso &spi1m0_mosi>;\n-   pinctrl-1 = <&spi1m0_clk_hs &spi1m0_cs0n &spi1m0_cs1n &spi1m0_miso_hs &spi1m0_mosi_hs>;\n+   pinctrl-0 = <&spi1m0_clk &spi1_cs0n &spi1_cs1n &spi1_cs2n &spi1m0_miso &spi1m0_mosi>;\n+   pinctrl-1 = <&spi1m0_clk_hs &spi1_cs0n &spi1_cs1n &spi1_cs2n &spi1m0_miso_hs &spi1m0_mosi_hs>\n    status = "disabled";\n};\n'})}),"\n",(0,n.jsx)(i.p,{children:"SPI \u8282\u70b9\u91cd\u65b0\u6307\u5b9a cs \u811a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'+&spi1(\n+   status = "okay";\n+   max-freq = <48000000>;\n+   cs-gpios = <&gpio0 RK_PC2 GPIO_ACTIVE_LOW>, <&gpio0 RK_PC3 GPIO_ACTIVE_LOW>, <&gpio0 RK_PC4 GPIO_ACTIVE_LOW>;\n    spi_test@00 {\n        compatible = "rockchip,spi_test_bus1_cs0";\n...\n+   spi_test@02 {\n+       compatible = "rockchip,spi_test_bus1_cs2";\n+       id=<2>;\n+       reg=<0x2>;\n+       spi-cpha;\n+       spi-cpol;\n+       spi-1sb-first;\n+       spi-max-frequency =<16000000>;\n+       };\n    };\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u6ce8\u91ca:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u5982\u679c\u8981\u6269\u5c55 cs - gpio\uff0c\u5219\u6240\u6709 cs \u90fd\u8981\u8f6c\u4e3a gpio function\uff0c\u7528 c - gpios \u6269\u5c55\u6765\u652f\u6301\u3002"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"3\u5185\u6838\u6d4b\u8bd5\u8f6f\u4ef6",children:"3.\u5185\u6838\u6d4b\u8bd5\u8f6f\u4ef6"}),"\n",(0,n.jsx)(i.h3,{id:"31-\u4ee3\u7801\u8def\u5f84",children:"3.1 \u4ee3\u7801\u8def\u5f84"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"drivers/spi/spi-rockchip-test.c\n"})}),"\n",(0,n.jsx)(i.h3,{id:"32-spi-\u6d4b\u8bd5\u8bbe\u5907\u914d\u7f6e",children:"3.2 SPI \u6d4b\u8bd5\u8bbe\u5907\u914d\u7f6e"}),"\n",(0,n.jsx)(i.p,{children:"\u5185\u6838\u8865\u4e01"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u7f16\u8bd1:\ndrivers/spi/Makefile\nobj-y +=spi-rockchip-test.o\n"})}),"\n",(0,n.jsx)(i.p,{children:"DTS \u914d\u7f6e"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:'&spi0{\n    status = "okay";\n    spi_test@00 {\n        compatible = "rockchip,spi_test_bus0_cs0";\n        id = <0>;   //\u8fd9\u4e2a\u5c5e\u6027spi-rockchip-test.c\u7528\u6765\u533a\u5206\u4e0d\u540c\u7684spi\u4ece\u8bbe\u5907\u7684\n        reg=<0>; //chip select 0:cs0 1:cs1\n        spi-max-frequency=<24000000>; //spi output clock\n    };\n    spi_test@01 {\n        compatible = "rockchip,spi_test_bus0_cs1";\n        id=<1>;\n        reg=<1>;\n        spi-max-frequency =<24000000>;\n    };\n};\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u9a71\u52a8 log"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"[ \t0.457137]\nrockchip_spi_test_probe:name=spi_test_bus0_cs0,bus_num=0,cs=0,mode=11,speed=16000000\n[ \t0.457308]\nrockchip_spi_test_probe:name=spi_test_bus0_cs1,bus_num=0,cs=1,mode=11,speed=16000000\n"})}),"\n",(0,n.jsx)(i.h3,{id:"33-\u6d4b\u8bd5\u547d\u4ee4",children:"3.3 \u6d4b\u8bd5\u547d\u4ee4"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"echo write 0 10 255 > /dev/spi_misc_test\necho write 0 10 255 init.rc > /dev/spi_misc_test\necho read 0 10 255 > /dev/spi_misc_test\necho loop 0 10 255 > /dev/spi_misc_test\necho setspeed 0 1000000 > /dev/spi_misc_test\n"})}),"\n",(0,n.jsx)(i.p,{children:"echo \u7c7b\u578b id \u5faa\u73af\u6b21\u6570 \u4f20\u8f93\u957f\u5ea6 > /dev/spi_misc_test"}),"\n",(0,n.jsx)(i.p,{children:"echo setspeed id \u9891\u7387(\u5355\u4f4dHz) > /dev/spi_misc_test"}),"\n",(0,n.jsx)(i.p,{children:"\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u81ea\u5df1\u4fee\u6539\u6d4b\u8bd5 case\uff61"}),"\n",(0,n.jsx)(i.h2,{id:"4\u5e38\u89c1\u95ee\u9898",children:"4.\u5e38\u89c1\u95ee\u9898"}),"\n",(0,n.jsx)(i.h3,{id:"41-spi-\u65e0\u4fe1\u53f7",children:"4.1 SPI \u65e0\u4fe1\u53f7"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u8c03\u8bd5\u524d\u786e\u8ba4\u9a71\u52a8\u6709\u8dd1\u8d77\u6765\u3002"}),"\n",(0,n.jsx)(i.li,{children:"\u786e\u4fdd SPI 4 \u4e2a\u5f15\u811a\u7684 IOMUX \u914d\u7f6e\u65e0\u8bef\u3002"}),"\n",(0,n.jsx)(i.li,{children:"\u786e\u8ba4 TX \u9001\u65f6\uff0cTX \u5f15\u811a\u6709\u6b63\u5e38\u7684\u6ce2\u5f62\uff0cCLK \u6709\u6b63\u5e38\u7684 CLOCK \u4fe1\u53f7\uff0cCS \u4fe1\u53f7\u6709\u62c9\u4f4e\u3002"}),"\n",(0,n.jsx)(i.li,{children:"\u5982\u679c clk \u9891\u7387\u8f83\u9ad8\uff0c\u53ef\u4ee5\u8003\u8651\u63d0\u9ad8\u9a71\u52a8\u5f3a\u5ea6\u6765\u6539\u5584\u4fe1\u53f7\u3002"}),"\n",(0,n.jsx)(i.li,{children:"\u5982\u4f55\u7b80\u5355\u5224\u65ad SPI DMA \u662f\u5426\u4f7f\u80fd\uff0c\u4e32\u53e3\u6253\u5370\u5982\u65e0\u4ee5\u4e0b\u5173\u952e\u5b57\u5219 DMA \u4f7f\u80fd\u6210\u529f:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"[    0.457137] Failed to request TX DMA channel\n[    0.457237] Failed to request RX DMA channel\n"})}),"\n",(0,n.jsx)(i.h3,{id:"42-\u5982\u4f55\u7f16\u5199-spi-\u5e94\u7528\u4ee3\u7801",children:"4.2 \u5982\u4f55\u7f16\u5199 SPI \u5e94\u7528\u4ee3\u7801"}),"\n",(0,n.jsx)(i.p,{children:"\u8bf7\u9009\u62e9\u5408\u9002\u7684\u76ee\u6807\u51fd\u6570\u63a5\u53e3\u518d\u7f16\u5199\u9a71\u52a8\uff61"}),"\n",(0,n.jsx)(i.p,{children:"\u81ea\u5b9a\u4e49 SPI \u8bbe\u5907\u9a71\u52a8"}),"\n",(0,n.jsx)(i.p,{children:"\u53c2\u8003 \u201cSPI \u8bbe\u5907\u9a71\u52a8\u4ecb\u7ecd\u201d \u7f16\u5199\uff0c\u5b9e\u4f8b\u5982: drivers/spi/spi-rockchip-test.c\uff61"}),"\n",(0,n.jsx)(i.p,{children:"\u57fa\u4e8e spidev \u6807\u51c6\u8bbe\u5907\u8282\u70b9\u7f16\u5199\u7684\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,n.jsx)(i.h3,{id:"43-\u5ef6\u8fdf\u91c7\u6837\u65f6\u949f\u914d\u7f6e\u65b9\u6848",children:"4.3 \u5ef6\u8fdf\u91c7\u6837\u65f6\u949f\u914d\u7f6e\u65b9\u6848"}),"\n",(0,n.jsx)(i.p,{children:"\u5bf9\u4e8e SPI io \u901f\u7387\u8f83\u9ad8\u7684\u60c5\u5f62\uff0c\u6b63\u5e38 SPI mode \u53ef\u80fd\u4f9d\u65e7\u65e0\u6cd5\u5339\u914d\u5916\u63a5\u5668\u4ef6\u8f93\u51fa\u5ef6\u65f6\uff0cRK SPI master read \u53ef\u80fd\u65e0\u6cd5\u91c7\u5230\u6709\u6548\u6570\u636e\uff0c\u9700\u8981\u542f\u7528 SPI rsd \u903b\u8f91\u6765\u5ef6\u8fdf\u91c7\u6837\u65f6\u949f\uff61"}),"\n",(0,n.jsx)(i.p,{children:"RK SPI rsd (read sample delay) \u63a7\u5236\u903b\u8f91\u6709\u4ee5\u4e0b\u7279\u6027:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u53ef\u914d\u503c\u4e3a 0,1,2,3\u3002"}),"\n",(0,n.jsx)(i.li,{children:'\u5ef6\u65f6\u5355\u4f4d\u4e3a 1 spi_clk cycle\uff0c\u5373\u63a7\u5236\u5668\u5de5\u4f5c\u65f6\u949f\uff0c\u8be6\u89c1 "SPI \u8bbe\u5907\u914d\u7f6e\u7ae0\u8282 \u201c'}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"rx - sample - delay\u3002\u5b9e\u9645\u5ef6\u65f6\u4e3a dts \u8bbe\u5b9a\u503c\u6700\u63a5\u8fd1\u7684 rsd \u6709\u6548\u503c\u4e3a\u51c6\uff0c\u4ee5 spi_clk 200MHz\uff0c\u5468\u671f 5ns \u4e3a\u4f8b: rsd \u5b9e\u9645\u53ef\u914d\u5ef6\u8fdf\u4e3a 0,5ns,10ns,15ns\uff0crx-sample-delay \u8bbe\u5b9a 12ns\uff0c\u63a5\u8fd1\u6709\u6548\u503c 10ns\uff0c\u6240\u4ee5\u6700\u7ec8\u4e3a 10ns \u5ef6\u65f6\uff61"})]})}function o(e={}){const{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>l,a:()=>r});var n=s(7294);const c={},t=n.createContext(c);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);