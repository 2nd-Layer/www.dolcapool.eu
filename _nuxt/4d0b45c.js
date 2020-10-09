(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{218:function(t,e,o){"use strict";o.r(e);o(35),o(36),o(11),o(55);var n=o(198),r=o.n(n),l={data:function(){return{pool:null,cardanoLogo:o(122)}},computed:{currentEpochStake:function(){return this.lovelaceToAda(this.pool.active_stake)},lastRewardEpoch:function(){return this.pool.rewards_epoch},taxRatio:function(){return 100*this.pool.tax_ratio},taxFixed:function(){return this.lovelaceToAda(this.pool.tax_fix)},roa:function(){return this.pool.roa},blocksLifetime:function(){return this.pool.blocks_lifetime},blocksEpoch:function(){return this.pool.blocks_epoch},pledge:function(){return this.lovelaceToAda(this.pool.pledge)},rank:function(){return this.pool.rank}},methods:{lovelaceToAda:function(t){return Math.floor(t/Math.pow(10,6)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},mounted:function(){var t=this;r.a.get("https://js.adapools.org/pools/550f5dc96814537404c7544175d348262699e448d74005dfa26540d3/summary.json").then((function(e){200===e.status&&e.data.data&&(t.pool=e.data.data)}))}},c=o(3),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"columns is-vcentered"},[o("div",{staticClass:"column is-2"},[o("div",{staticClass:"token-image mb-40"},[o("nuxt-link",{attrs:{to:"/about-cardano/"}},[o("img",{attrs:{src:t.cardanoLogo,alt:"Cardano Logo"}})])],1)]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"column is-6"},[t.pool?o("div",{staticClass:"box primary-gradient"},[o("h2",{staticClass:"title is-2 is-light is-semibold is-spaced main-title"},[t._v("Live Pool Stats "),o("span",{staticClass:"has-text-weight-light"},[t._v("- Rank: "+t._s(t.rank))])]),t._v(" "),o("div",{staticClass:"columns is-vcentered"},[o("div",{staticClass:"column is-6"},[o("p",[o("b",[t._v("Current Epoch Stake:")]),t._v(" "+t._s(t.currentEpochStake)+" ₳")]),t._v(" "),o("p",[o("b",[t._v("Last Reward Epoch:")]),t._v(" "+t._s(t.lastRewardEpoch))]),t._v(" "),o("p",[o("b",[t._v("Variable Fee:")]),t._v(" "+t._s(t.taxRatio)+"%")]),t._v(" "),o("p",[o("b",[t._v("Fixed Fee:")]),t._v(" "+t._s(t.taxFixed)+" ₳")])]),t._v(" "),o("div",{staticClass:"column is-6"},[o("p",[t._m(1),t._v(" "+t._s(t.roa)+"%")]),t._v(" "),o("p",[o("b",[t._v("Lifetime Blocks:")]),t._v(" "+t._s(t.blocksLifetime))]),t._v(" "),o("p",[o("b",[t._v("Epoch Blocks:")]),t._v(" "+t._s(t.blocksEpoch))]),t._v(" "),o("p",[o("b",[t._v("Owner Pledge:")]),t._v(" "+t._s(t.pledge)+" ₳")])])])]):t._e()])]),t._v(" "),o("section",{staticClass:"section is-medium"},[o("div",{staticClass:"container"},[o("div",{staticClass:"content-wrapper"},[o("div",{staticClass:"columns is-vcentered"},[o("div",{staticClass:"column is-5 is-offset-1"},[o("div",{staticClass:"side-feature-content"},[o("h3",{staticClass:"title is-4 is-light"},[t._v("Network Governance")]),t._v(" "),o("div",{staticClass:"divider"}),t._v(" "),o("p",{staticClass:"is-light my-3"},[o("nuxt-link",{attrs:{to:"/docla-stake-poool-team/"}},[t._v("As team of Stake Pool Owners and Operators")]),t._v(", we feel obliged to provide expert advice to our "),o("strong",[t._v("stake delegates")]),t._v(" about on-chain Governance in the areas of both the "),o("nuxt-link",{attrs:{to:"/about-cardano/"}},[t._v("Technicals of Cardano Blockchain"),o("nuxt-link",[t._v(", as well as investments in "),o("a",{attrs:{href:"https://iohk.io/en/blog/posts/2020/09/10/project-catalyst-voltaire-bring-power-to-the-people/"}},[t._v("Project Catalyst")]),t._v(" ideas.")])],1)],1),t._v(" "),o("p",{staticClass:"is-light my-3"},[t._v("Our team comprises of experts in the fields of Networking, IT infrastructure, "),o("nuxt-link",{attrs:{to:"/partnership-with-dCloud/"}},[t._v("Cloud")]),t._v(", DevOps and "),o("nuxt-link",{attrs:{to:"/about-cardano/"}},[t._v("Blockchain Technology")]),t._v(" as well as Software Development...")],1)])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-4"},[e("h1",{staticClass:"title is-2 is-light is-semibold is-spaced main-title"},[this._v("Cardano Stake Pool")]),this._v(" "),e("h2",{staticClass:"subtitle is-5 is-light is-thin"},[this._v("\n          Cryptocurrency brought to the next level. Join our Stake Pool for supercharged rewards.\n        ")]),this._v(" "),e("p",[e("a",{staticClass:"button k-button k-primary raised has-gradient is-fat is-bold",attrs:{href:"start"}},[e("span",{staticClass:"text"},[this._v("More details")]),this._v(" "),e("span",{staticClass:"front-gradient"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("abbr",{attrs:{title:"Return on Assets"}},[this._v("RoA")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})]),this._v(" "),e("div",{staticClass:"column is-5"},[e("div",{staticClass:"side-feature-content"},[e("h3",{staticClass:"title is-4 is-light"},[this._v("Increased Security")]),this._v(" "),e("div",{staticClass:"divider"}),this._v(" "),e("p",{staticClass:"is-light my-3"},[this._v("Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit.\n                  Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-5 is-offset-1"},[e("div",{staticClass:"side-feature-content"},[e("h3",{staticClass:"title is-4 is-light"},[this._v("Value Stacking")]),this._v(" "),e("div",{staticClass:"divider"}),this._v(" "),e("p",{staticClass:"is-light my-3"},[this._v("Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit.\n                  Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.")])])]),this._v(" "),e("div",{staticClass:"column is-7"},[e("img",{staticClass:"side-feature",attrs:{src:"#",alt:""}})])])}],!1,null,null,null);e.default=component.exports}}]);