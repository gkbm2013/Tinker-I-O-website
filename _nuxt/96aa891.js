(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{307:function(t,e,n){"use strict";n.r(e);n(25),n(77),n(26);var l={props:{light:Boolean},data:function(){return{pageName:""}},created:function(){this.pageName=this.$nuxt.$route.name.split("___")[0]}},r=n(64),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",[e("ul",{staticClass:"nav",class:t.light?"masthead-nav-light":"masthead-nav"},[e("li",{staticClass:"dropdown"},[t._m(0),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:t.switchLocalePath("en")}},[t._v("English")])]),t._v(" "),e("li",[e("a",{attrs:{href:t.switchLocalePath("zh_tw")}},[t._v("繁體中文 (臺灣/中華民國)")])])])]),t._v(" "),e("li",{class:"index"==t.pageName?"active":""},[e("a",{attrs:{href:t.localePath("index")+"/#home"}},[t._v(t._s(t.$t("nav_home")))])]),t._v(" "),e("li",[e("a",{attrs:{href:t.localePath("index")+"#features"}},[t._v(t._s(t.$t("nav_features")))])]),t._v(" "),e("li",[e("a",{attrs:{href:t.localePath("index")+"#authors"}},[t._v(t._s(t.$t("nav_authors")))])]),t._v(" "),e("li",{class:"downloads"==t.pageName?"active":""},[e("a",{attrs:{href:t.localePath("downloads")}},[t._v(t._s(t.$t("nav_downloads")))])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/gkbm2013/tinker-IO",target:"_blank"}},[t._v(t._s(t.$t("nav_github")))])])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"#"}},[this._v("\n                Language\n                "),t("span",{staticClass:"caret"})])}],!1,null,null,null);e.default=component.exports},308:function(t,e,n){t.exports=n.p+"img/logo-v2.7e0380a.png"},319:function(t,e,n){"use strict";n.r(e);var l=n(312),r=n.n(l),o={components:{NavBar:n(307).default},mounted:function(){r()(window).scroll((function(){r()(document).scrollTop()/r()(document).height()*100<2?r()("div#header").fadeIn(400):r()("div#header").fadeOut(400)}))}},c=n(64),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-wrapper"},[e("div",{staticClass:"site-wrapper-inner"},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"masthead clearfix",attrs:{id:"header"}},[e("div",{staticClass:"inner"},[e("NavBar")],1)]),t._v(" "),e("div",{staticClass:"inner cover"},[e("img",{staticClass:"img-responsive",attrs:{src:n(308)}}),t._v(" "),e("div",{staticClass:"text-background"},[e("h1",[t._v(t._s(t.$t("index_home_title")))]),t._v(" "),e("p",{staticClass:"lead"},[t._v(t._s(t.$t("index_home_content")))]),t._v(" "),e("p",{staticClass:"lead"},[e("a",{staticClass:"btn btn-lg btn-default",attrs:{href:t.localePath("downloads")}},[t._v(t._s(t.$t("btn_downloads")))]),t._v(" "),e("a",{staticClass:"btn btn-lg btn-default",attrs:{href:"#features"}},[t._v(t._s(t.$t("btn_features")))])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(307).default})}}]);