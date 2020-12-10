(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{263:function(t,e,n){"use strict";n.r(e);n(32),n(33),n(11),n(48),n(25);var o=n(6),r=n(227),c=n.n(r),l={data:function(){return{pool:null,cardanoLogo:n(147)}},computed:{currentEpochStake:function(){return this.lovelaceToAda(this.pool.active_stake)},lastRewardEpoch:function(){return this.pool.rewards_epoch},taxRatio:function(){return 100*this.pool.tax_ratio},taxFixed:function(){return this.lovelaceToAda(this.pool.tax_fix)},roa:function(){return this.pool.roa},blocksLifetime:function(){return parseInt(this.pool.blocks_lifetime)+parseInt(this.pool.blocks_epoch)},blocksEpoch:function(){return this.pool.blocks_epoch},pledge:function(){return this.lovelaceToAda(this.pool.pledge)},rank:function(){return this.pool.rank}},mounted:function(){var t=this;c.a.get("https://js.adapools.org/pools/550f5dc96814537404c7544175d348262699e448d74005dfa26540d3/summary.json").then((function(e){200===e.status&&e.data.data&&(t.pool=e.data.data)}))},methods:{copyPoolID:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="550f5dc96814537404c7544175d348262699e448d74005dfa26540d3",t.next=3,navigator.clipboard.writeText(e);case 3:alert("Pool ID: "+e+" has been coppied into clipboard!");case 4:case"end":return t.stop()}}),t)})))()},lovelaceToAda:function(t){return Math.floor(t/Math.pow(10,6)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},v=n(4),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-2"},[n("div",{staticClass:"token-image mb-40"},[n("nuxt-link",{attrs:{to:"/about-cardano/"}},[n("img",{attrs:{src:t.cardanoLogo,alt:"Cardano Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"column is-4"},[n("h1",{staticClass:"title is-2 is-light is-semibold is-spaced main-title"},[t._v("\n          "+t._s(t.$t("cardanoStakePool"))+"\n        ")]),t._v(" "),n("h2",{staticClass:"subtitle is-5 is-light is-thin"},[t._v("\n          "+t._s(t.$t("cardanoStakePoolText"))+"\n        ")]),t._v(" "),n("p",[n("a",{staticClass:"button k-button k-primary raised has-gradient is-fat is-bold",attrs:{href:"start"}},[n("span",{staticClass:"text"},[t._v(t._s(t.$t("moreDetails")))]),t._v(" "),n("span",{staticClass:"front-gradient"})])])]),t._v(" "),n("div",{staticClass:"column is-6"},[t.pool?n("div",{staticClass:"box primary-gradient"},[n("h2",{staticClass:"title is-2 is-light is-semibold is-spaced main-title"},[n("span",[t._v(t._s(t.$t("livePoolStats")))]),t._v(" "),n("span",{staticClass:"has-text-weight-light"},[t._v("\n              - "+t._s(t.$t("rank"))+": "+t._s(t.rank)+"\n            ")])]),t._v(" "),n("h3",{staticClass:"subtitle is-4 is-light is-spaced has-text-centered"},[n("abbr",{attrs:{title:"Click on DOLCA Ticker to place Pool ID into clipboard!"}},[t._v("\n              Stake Pool Ticker")]),t._v(": \n              "),n("strong",[n("a",{on:{click:function(e){return t.copyPoolID()}}},[t._v("DOLCA")])])]),t._v(" "),n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-6"},[n("p",[n("b",[t._v(t._s(t.$t("currentEpochStake"))+":")]),t._v("\n                "+t._s(t.currentEpochStake)+" ₳\n              ")]),t._v(" "),n("p",[n("b",[t._v(t._s(t.$t("lastRewardEpoch"))+":")]),t._v(" "+t._s(t.lastRewardEpoch)+"\n              ")]),t._v(" "),n("p",[n("b",[t._v(t._s(t.$t("taxRatio"))+":")]),t._v(" "+t._s(t.taxRatio)+"%\n              ")]),t._v(" "),n("p",[n("b",[t._v(t._s(t.$t("taxFixed"))+":")]),t._v(" "+t._s(t.taxFixed)+" ₳\n              ")])]),t._v(" "),n("div",{staticClass:"column is-6"},[n("p",[n("b",[n("abbr",{attrs:{title:t.$t("returnOnAssets")}},[t._v(t._s(t.$t("roa")))]),t._v("\n                  :\n                ")]),t._v("\n                "+t._s(t.roa)+"%\n              ")]),t._v(" "),n("p",[n("b",[n("abbr",{attrs:{title:t.$t("blocksLifetimeDescription")}},[t._v(t._s(t.$t("blocksLifetime")))]),t._v(":")]),t._v(" "+t._s(t.blocksLifetime)+"\n              ")]),t._v(" "),n("p",[n("b",[t._v(t._s(t.$t("blocksEpoch"))+":")]),t._v(" "+t._s(t.blocksEpoch)+"\n              ")]),t._v(" "),n("p",[n("b",[t._v(t._s(t.$t("pledge"))+":")]),t._v(" "+t._s(t.pledge)+" ₳\n              ")])])])]):t._e()])]),t._v(" "),n("section",{staticClass:"pt-6 section is-medium"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-5 is-offset-1"},[n("div",{staticClass:"side-feature-content"},[n("h3",{staticClass:"title is-4 is-light"},[t._v("\n                  "+t._s(t.$t("networkGovernance"))+"\n                ")]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("p",{staticClass:"is-light my-3"},[n("nuxt-link",{attrs:{to:"/dolca-stake-pool-team/"}},[t._v("\n                    As a team of Stake Pool Owners and Operators\n                  ")]),t._v("\n                  , we feel obliged to provide expert advice to our\n                  "),n("strong",[t._v("stake delegates")]),t._v(" about on-chain Governance\n                  in the areas of both the\n                  "),n("nuxt-link",{attrs:{to:"/about-cardano/"}},[t._v("\n                    Technicals of Cardano Blockchain\n                  ")]),t._v("\n                  , as well as investments in\n                  "),n("a",{attrs:{href:"https://iohk.io/en/blog/posts/2020/09/10/project-catalyst-voltaire-bring-power-to-the-people/"}},[t._v("\n                    Project Catalyst\n                  ")]),t._v("\n                  ideas.\n                ")],1),t._v(" "),n("p",{staticClass:"is-light my-3"},[n("nuxt-link",{attrs:{to:"/dolca-stake-pool-team/"}},[t._v("Our team")]),t._v("\n                  comprises of experts in the fields of Networking,\n                  "),n("nuxt-link",{attrs:{to:"/dolca-stake-pool-technology/"}},[t._v("IT infrastructure")]),t._v("\n                  ,\n                  "),n("nuxt-link",{attrs:{to:"/partnership-with-dCloud/"}},[t._v("Cloud")]),t._v("\n                  , DevOps and\n                  "),n("nuxt-link",{attrs:{to:"/about-cardano/"}},[t._v("Blockchain Technology")]),t._v("\n                  as well as Software Development...\n                ")],1)])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"columns is-vcentered"},[t._m(1),t._v(" "),n("div",{staticClass:"column is-5"},[n("div",{staticClass:"side-feature-content"},[n("h3",{staticClass:"title is-4 is-light"},[t._v("\n                  "+t._s(t.$t("increasedSecurity"))+"\n                ")]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("p",{staticClass:"is-light my-3"},[n("strong",[t._v("DOLCA")]),t._v(" has a long-term commitment to "),n("strong",[t._v("security")]),t._v(", that is why\n                  "),n("nuxt-link",{attrs:{to:"/dolca-stake-pool-team/"}},[t._v("our team")]),t._v("\n                  not only has Information Security practitioners among it's members. We also work with external\n                  3"),n("sup",[t._v("rd")]),t._v(" party Information Security partners such as "),n("a",{attrs:{href:"https://trustica.cz/en/"}},[t._v("Trustica")]),t._v("\n                  and "),n("a",{attrs:{href:"https://citadelo.com/en/"}},[t._v("CITADELO")]),t._v(".\n                ")],1)])])]),t._v(" "),n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-5 is-offset-1"},[n("div",{staticClass:"side-feature-content"},[n("h3",{staticClass:"title is-4 is-light"},[t._v(t._s(t.$t("valueStacking")))]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("p",{staticClass:"is-light my-3"},[t._v(t._s(t.$t("valueStackingText1")))])])]),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);