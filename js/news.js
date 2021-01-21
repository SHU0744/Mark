import { hamburger,setText } from './module.js';

hamburger();

setText();

new Vue({
    el: '#app',
    data: {
        selectYears: [
            'All',
            '2020',
            '2019'
        ],
        yearValue: "All",
        selectGategorys: {
            All: 'All',
            release: "プレスリリース",
            notice: 'お知らせ'

        },
        gategoryValue: "All",
        show: true,
        test: {
            dataAll: true,
            year2020: true,
            year2019: true,
            gategoryRelease: true,
            gategoryNotice: true
        }



    },
    watch: {
        yearValue: function (value) {



            //GategoryValueがAllの場合
            if (this.gategoryValue === 'All') {

                //YearがAllの場合はすべて表示
                if (value === 'All') {
                    this.test.year2020 = true
                    this.test.year2019 = true
                    this.test.gategoryRelease = true
                    this.test.gategoryNotice = true

                }
                //Yeaが2020の場合
                if (value === "2020") {
                    //2019年のものを非表示する
                    this.test.year2019 = false
                    this.test.year2020 = true
                    this.test.gategoryRelease = true
                    this.test.gategoryNotice = true

                }
                //Yeaが2019の場合
                if (value === "2019") {
                    //2020年のものを非表示する
                    this.test.year2020 = false
                    this.test.year2019 = true
                    this.test.gategoryRelease = true
                    this.test.gategoryNotice = true
                }
            }

            //GategoryValueがプレスリリースの場合
            if (this.gategoryValue === 'release') {

                //YearがAllの場合はすべて表示
                if (value === 'All') {
                    //2020、2019年の物はすべてture,Noticeのものは非表示
                    this.test.gategoryNotice = false
                    this.test.year2020 = true
                    this.test.year2019 = true
                    this.test.gategoryRelease = true
                }

                if (value === "2020") {
                    //2019年のものを非表示するして、2020年のReleaseは表示Noticeは非表示
                    this.test.year2019 = false
                    this.test.gategoryNotice = false
                    this.test.year2020 = true
                    this.test.gategoryRelease = true

                }

                if (value === "2019") {
                    //2020年のものを非表示するして、2019年のReleaseは表示Noticeは非表示
                    this.test.year2020 = false
                    this.test.gategoryNotice = false
                    this.test.year2019 = true
                    this.test.gategoryRelease = true

                }
            }

            if (this.gategoryValue === 'notice') {

                if (value === 'All') {
                    //2020、2019年の物はすべてture,Releaseのものは非表示
                    this.test.gategoryRelease = false
                    this.test.gategoryNotice = true
                    this.test.year2020 = true
                    this.test.year2019 = true
                }

                if (value === "2020") {
                    //2019年のものを非表示するして、2020年のNoticeは表示,Releaseは非表示
                    this.test.year2019 = false
                    this.test.gategoryRelease = false
                    this.test.year2020 = true
                    this.test.gategoryNotice = true

                }
                if (value === "2019") {
                    //2020年のものを非表示するして、2019年のNoticeは表示,Releaseは非表示
                    this.test.year2020 = false
                    this.test.gategoryRelease = false
                    this.test.gategoryNotice = true
                    this.test.year2019 = true

                }

            }

        },




        gategoryValue: function (value) {



            // yearValueがALLだったら
            if (this.yearValue === "All") {

                //gategoryがAllの場合はすべて表示
                if (value === 'All') {
                    this.test.year2020 = true
                    this.test.year2019 = true
                    this.test.gategoryRelease = true
                    this.test.gategoryNotice = true

                }
                //gategoryがReleaseの場合
                if (value === "release") {
                    //noticeのものを非表示する
                    this.test.gategoryNotice = false
                    this.test.gategoryRelease = true
                    this.test.year2019 = true
                    this.test.year2020 = true

                }
                //gategoryがnoticeの場合
                if (value === "notice") {
                    //releaseのものを非表示する
                    this.test.gategoryRelease = false
                    this.test.gategoryNotice = true
                    this.test.year2020 = true
                    this.test.year2019 = true
                }

            }

            //yearValueが2020だったら
            if (this.yearValue === "2020") {

                //gategoryがAllの場合はすべて表示
                if (value === 'All') {
                    //2019年は非表示、2020年は表示
                    this.test.year2019 = false
                    this.test.gategoryNotice = true
                    this.test.year2020 = true
                    this.test.gategoryRelease = true
                }

                //gategoryがReleaseの場合
                if (value === "release") {
                    //noticeのものを非表示する,2019年は非表示
                    this.test.year2019 = false
                    this.test.gategoryNotice = false
                    this.test.gategoryRelease = true
                    this.test.year2020 = true

                }

                //gategoryがnoticeの場合
                if (value === "notice") {
                    //releaseのものを非表示する,2019年は非表示
                    this.test.gategoryRelease = false
                    this.test.gategoryNotice = true
                    this.test.year2020 = true
                    this.test.year2019 = false
                }

            }
            //yearValueが2019だったら
            if (this.yearValue === "2019") {

                //gategoryがAllの場合はすべて表示
                if (value === 'All') {
                    //2020年は非表示、2019年は表示
                    this.test.year2020 = false
                    this.test.year2019 = true
                    this.test.gategoryNotice = true
                    this.test.gategoryRelease = true
                }

                //gategoryがReleaseの場合
                if (value === "release") {
                    //noticeのものを非表示する,2020年は非表示
                    this.test.year2020 = false
                    this.test.year2019 = true
                    this.test.gategoryNotice = false
                    this.test.gategoryRelease = true

                }

                //gategoryがnoticeの場合
                if (value === "notice") {
                    //releaseのものを非表示する,2020年は非表示
                    this.test.gategoryRelease = false
                    this.test.gategoryNotice = true
                    this.test.year2020 = false
                    this.test.year2019 = true
                }


            }
        }
    }

})
