(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,l,s){"use strict";s.r(l);var a=function(){var e=this,l=e.$createElement,s=e._self._c||l;return s("div",{staticClass:"info"},[s("div",{staticClass:"info__wrapper"},[s("h3",{staticClass:"info__rounds"},[e._v("Раунд: "+e._s(0===e.round?"":e.round))]),e._v(" "),s("h3",{staticClass:"info__levels_title"},[e._v("Уровни:")]),e._v(" "),s("form",{staticClass:"info__form",class:{info__blockChoseLevel:e.blockChoseLevel},on:{change:e.handleChoose}},[s("label",{staticClass:"info__label"},[s("div",{staticClass:"info__subtitle"},[e._v("легкий")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"info__input",attrs:{type:"radio",value:"easy"},domProps:{checked:e._q(e.level,"easy")},on:{change:function(l){e.level="easy"}}})]),e._v(" "),s("label",{staticClass:"info__label"},[s("div",{staticClass:"info__subtitle"},[e._v("средний")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"info__input",attrs:{type:"radio",value:"middle"},domProps:{checked:e._q(e.level,"middle")},on:{change:function(l){e.level="middle"}}})]),e._v(" "),s("label",{staticClass:"info__label"},[s("div",{staticClass:"info__subtitle"},[e._v("сложный")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"info__input",attrs:{type:"radio",value:"hard"},domProps:{checked:e._q(e.level,"hard")},on:{change:function(l){e.level="hard"}}})])])])])};a._withStripped=!0;var t={props:{round:Number,blockChoseLevel:Boolean},data:()=>({level:"easy"}),methods:{handleChoose(){this.$emit("returnLevel",this.level)}}},i=s(1),o=Object(i.a)(t,a,[],!1,null,null,null);o.options.__file="src/components/Info.vue";l.default=o.exports}}]);