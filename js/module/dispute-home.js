const vue = new Vue({
    el: "#dispute-home-root",
    data: {
        codeImg: "",
        defaultActive: "1-1",
        parentActive: '1',
        menuList: [
            {
                title: '矛盾纠纷多元化解',
                icon: './image/anonymous-letter/menu_zzjg_icon',
                index: 1,
                childrens: [
                    { title: "矛盾纠纷多元化解1", index: '1-1' }
                ],
                childrensIndex: ['1-1']
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