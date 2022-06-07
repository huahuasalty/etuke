const vue = new Vue({
    el: "#anonymous-letter-root",
    data: {
        loginForm: {
            phone: "",
            password: "",
            code: "",
        },
        codeImg: "",
        defaultActive: "1-1",
        parentActive: '1',
        menuList: [
            {
                title: '组织机构',
                icon: './image/anonymous-letter/menu_zzjg_icon',
                index: 1,
                childrens: [
                    { title: "组织机构1", index: '1-1' }
                ],
                childrensIndex: ['1-1']
            },
            {
                title: '运行管理',
                icon: './image/anonymous-letter/menu_yxgl_icon',
                index: 2,
            },
            {
                title: '在线用户',
                icon: './image/anonymous-letter/menu_zxgl_icon',
                index: 3,
                childrens: [
                    { title: "在线用户1", index: '3-1' }
                ],
                childrensIndex: ['3-1']
            },
            {
                title: '系统日志',
                icon: './image/anonymous-letter/menu_xxrz_icon',
                num: 12,
                index: 4
            },
            {
                title: '日志管理',
                icon: './image/anonymous-letter/menu_rzgl_icon',
                index: 5,
                childrens: [
                    { title: "日志管理1", index: '5-1' }
                ],
                childrensIndex: ['5-1']
            },
            {
                title: '经济社会组织管理',
                icon: './image/anonymous-letter/menu_jjshzzgl_icon',
                index: 6
            },
            {
                title: '个人桌面',
                icon: './image/anonymous-letter/menu_grzm_icon',
                index: 7,
                childrens: [
                    { title: "二级标题", index: '7-1' },
                    { title: "严重精神障碍患者", index: '7-2' }
                ],
                childrensIndex: ['7-1', '7-2']
            }
        ]
    },
    methods: {
        handleOpen(index, e) {
            console.log("Open::", index, e)
            this.parentActive =  index;
            let indx = this.menuList.findIndex(v => v.index === index);
            this.defaultActive = this.menuList[indx].childrens[0].index;
        },

        handleSelected(index, e) {
            console.log("Selected::", index, e)
            let currentItem = "";
            this.menuList.forEach(item => {
                if (item.index == index) {
                    currentItem = item;
                    this.parentActive = "";
                    this.$refs.menuRef.close(this.parentActive);
                }
                if (item.childrens && item.childrens.length > 0) {
                    item.childrens.forEach(v => {
                        if (v.index == index) {
                            currentItem = v;
                        }
                    })
                }
            })
            this.defaultActive = currentItem.index;
        },
        handleClose() {
            
        },
        // 返回
        callBack() {
            window.location.href = "./governance-information-platform.html"
        }
    }
})