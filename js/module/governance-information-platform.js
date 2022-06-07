const vue = new Vue({
    el: "#governance-information-platform-root",
    data: {
        currentAniClass: 'animated-bounce-down',
        currentAniClass1: 'animated-bounce-down',
        jumpTimer: null,
        removeClassTimer: null
    },
    methods:{
        mousemove(key) {
            if (key === 1) {
                this.currentAniClass1 = "";
            } else {
                this.currentAniClass = "";
            }
        },
        mouseleave(event, key) {
            if (key === 1) {
                this.currentAniClass1 = "animated-bounce-down";
            } else {
                event.currentTarget.className = "bo-item";
                this.currentAniClass = "animated-bounce-down";
            }
        },
        // 元素点击
        handleItem(event, name) {
            event.currentTarget.className = `${event.currentTarget.className} bo-item-click`;
            switch(name) {
                case '基础数据': {
                    this.pageJump('./basic-data.html');
                    break;
                }
                case '网格管理': {
                    break;
                }
                case 'GIS应用': {
                    this.pageJump('./gis.html');
                    break;
                }
                case '矛盾纠纷多元化解': {
                    break;
                }
                case '矛盾纠纷专家库': {
                    break;
                }
                case '辅助决策': {
                    break;
                }
                case '综合业务': {
                    break;
                }
                case '绩效考核': {
                    break;
                }
                case '视频应用': {
                    break;
                }
                case '系统管理': {
                    this.pageJump('./anonymous-letter.html');
                    break;
                }
            }
        },

        pageJump(url) {
            if (this.jumpTimer) return;
            this.jumpTimer = setTimeout(() => {
                window.location.href = url;
            }, 400)
        }
    },
    beforeDestroy(){
        clearTimeout(this.jumpTimer);
    }
})