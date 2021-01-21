import { hamburger,setText } from './module.js';

hamburger();

setText();


//フォームバリデーション
//名前
//1文字以上 20文字以下
const nameRegex = /^.{1,20}$/;

//全角カタカナ
const kanaRegex = /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/;

// emailの正規表現
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 電話番号の正規表現
//電話番号(ハイフンなし10桁or11桁)
const telRegex = /^\d{10}$|^\d{11}$/;

//会社名
//1文字以上 100文字以下
const companyRegex = /^.{1,100}$/;

//テキストエリア
//10文字以上 500文字以下
const $textareaRegex = /^.{10,500}$/;


var app = new Vue({

    el: '#app',
    data: {

        firstName: "",
        lastName: "",
        nameMessage: "お名前を入力してください",
        alertName: true,

        firstFri: "",
        lastFri: "",
        furiMessage: "全角カタカナで入力してください",
        alertFri: true,

        mail: "",
        mailMessage: "メールアドレスを入力してください",
        alertMail: true,

        tel: "",
        telMessage: "電話番号を入力してください(ハイフンなし)",
        alertTel: true,

        company: "",
        companyMessage: "会社名を入力してください",
        alertCompany: true,

        entry: "",
        entryMessage: "お問い合わせ内容を入力してください(10文字以上)",
        alertEntry: true,

        count: 0,
        type: "button",

        checked: false,

    },
    watch: {

        firstName: function (value) {

            if (!nameRegex.test(value)) {
                //
                this.alertName = false
                this.nameMessage = "名字を入力してください"
            } else if (!nameRegex.test(this.lastName)) {
                this.alertName = false
                this.nameMessage = "名前を入力してください"
            } else {
                this.alertName = true

            }

        },
        lastName: function (value) {

            if (!nameRegex.test(this.firstName)) {
                //
                this.alertName = false
                this.nameMessage = "名字を入力してください"
            } else if (!nameRegex.test(value)) {
                this.alertName = false
                this.nameMessage = "名前を入力してください"
            } else {
                this.alertName = true

            }

        },
        firstFri: function (value) {

            if (!kanaRegex.test(value)) {
                this.alertFri = false
                this.furiMessage = "名字を全角カタカナで入力してください"
            } else if (!kanaRegex.test(this.lastFri)) {
                this.alertFri = false
                this.furiMessage = "名前を全角カタカナで入力してください"
            } else {
                this.alertFri = true

            }

        },
        lastFri: function (value) {

            if (!kanaRegex.test(this.firstFri)) {
                this.alertFri = false
                this.furiMessage = "名字を全角カタカナで入力してください"
            } else if (!kanaRegex.test(value)) {
                this.alertFri = false
                this.furiMessage = "名前を全角カタカナで入力してください"
            } else {
                this.alertFri = true
            }
        },
        mail: function (value) {
            if (emailRegex.test(value)) {

                this.alertMail = true
            } else {
                this.alertMail = false

            }
        },
        tel: function (value) {
            if (telRegex.test(value)) {

                this.alertTel = true
            } else {
                this.alertTel = false

            }
        },
        company: function (value) {
            if (companyRegex.test(value)) {

                this.alertCompany = true
            } else {
                this.alertCompany = false

            }
        },
        entry: function (value) {
            if ($textareaRegex.test(value)) {

                this.alertEntry = true

            } else {
                this.alertEntry = false

            }
        }

    },
    methods: {
        formBtn: function () {
            // name
            if (nameRegex.test(this.firstName) && nameRegex.test(this.lastName)) {

                this.count++
                this.alertName = true
            } else {
                this.alertName = false

            }
            // furigana
            if (kanaRegex.test(this.firstFri) && kanaRegex.test(this.lastFri)) {
                this.count++
                this.alertFri = true

            } else {
                this.alertFri = false
            }

            // mail
            if (emailRegex.test(this.mail)) {
                this.count++
                this.alertMail = true
            } else {
                this.alertMail = false
            }

            // tel
            if (telRegex.test(this.tel)) {
                this.count++
                this.alertTel = true
            } else {
                this.alertTel = false
            }

            // company

            if (companyRegex.test(this.company)) {
                this.count++
                this.alertCompany = true
            } else {
                this.alertCompany = false
            }


            if ($textareaRegex.test(this.entry)) {
                this.count++
                this.alertEntry = true

            } else {
                this.alertEntry = false
            }

            if (this.count === 6) {

                this.type = "submit";


            } else {

                this.count = 0;

            }

        }
    }
})
