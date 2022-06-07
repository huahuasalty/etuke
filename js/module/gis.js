const vue = new Vue({
    el: "#gis-root",
    data: {
        value3: 20,
        input3: '',
        selectValue: {
            value1: '1',
            value2: '1',
            value3: '1',
            value4: '1',
        },
        pageSize: 3,
        pageNum: 0,
        total: 16,
        tableData: [
            {name: '鄂托克前旗第一中学(学校)'},
            {name: '鄂托克前旗敖勒召其镇第二幼儿园'},
            {name: '鄂托克前旗敖勒召其镇第二幼儿园'}
        ],
        activeClass: {
            one: '',
            two: '',
            three: ''
        },
        activeIndex: "4",
        type: 2,
    },
    methods: {
        leftAfterClick(type) {
            if (this.activeClass[type]) {
                this.activeClass[type] = "";
            } else {
                let obj = {
                    one: 1,
                    two: 2,
                    three: 3
                }
                this.activeClass[type] = `block-item-${obj[type]}-active`
            }
        },

        handleSelect(e) {
            this.activeIndex = e;
        },

        typeClick(type) {
            this.type = type;
        }
    }
})