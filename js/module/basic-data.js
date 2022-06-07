const vue = new Vue({
    el: "#basic-data-root",
    data: {
        lineDataList: [
            {label: '机构队伍', bg: './image/basic-data/icon_1@2x.png'},
            {label: '实有人口', bg: './image/basic-data/icon_2@2x.png'},
            {label: '特殊人群', bg: './image/basic-data/icon_3@2x.png'},
            {label: '重点青少年', bg: './image/basic-data/icon_4@2x.png'},
            {label: '经济社会组织管理', bg: './image/basic-data/icon_5@2x.png'},
            {label: '社会治安', bg: './image/basic-data/icon_6@2x.png'},
            {label: '矛盾纠纷排查化解', bg: './image/basic-data/icon_7@2x.png'},
            {label: '学校及周边安全', bg: './image/basic-data/icon_8@2x.png'},
            {label: '护路护线', bg: './image/basic-data/icon_9@2x.png'}
        ],
        currentAniClass: 'animated-bounce-down',
    },
    methods:{
        mousemove() {
            this.currentAniClass = "";
        },
        mouseleave(event) {
            event.currentTarget.className = "cl-item";
            this.currentAniClass = "animated-bounce-down";
        },
        clClick(event) {
            event.currentTarget.className = `${event.currentTarget.className} cl-item-click`;
        }
    }
})