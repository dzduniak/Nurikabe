(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    kotlinx: Kotlin.definePackage(null, /** @lends _.kotlinx */ {
      html: Kotlin.definePackage(null, /** @lends _.kotlinx.html */ {
        dom: Kotlin.definePackage(null, /** @lends _.kotlinx.html.dom */ {
          JSDOMBuilder: Kotlin.createClass(function () {
            return [Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TagConsumer];
          }, function (document) {
            this.document = document;
            this.path_jou8ah$ = Kotlin.modules['stdlib'].kotlin.collections.arrayListOf_9mqe4v$([]);
            this.lastLeaved_j571nb$ = null;
          }, /** @lends _.kotlinx.html.dom.JSDOMBuilder.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              var tmp$0, tmp$1, tmp$2;
              if (tag.namespace != null) {
                tmp$2 = this.document.createElementNS((tmp$0 = tag.namespace) != null ? tmp$0 : Kotlin.throwNPE(), tag.tagName);
              }
               else
                tmp$2 = Kotlin.isType(tmp$1 = this.document.createElement(tag.tagName), HTMLElement) ? tmp$1 : Kotlin.throwCCE();
              var element = tmp$2;
              var tmp$3;
              tmp$3 = tag.attributesEntries.iterator();
              while (tmp$3.hasNext()) {
                var element_0 = tmp$3.next();
                element.setAttribute(element_0.key, element_0.value);
              }
              if (!this.path_jou8ah$.isEmpty()) {
                Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).appendChild(element);
              }
              this.path_jou8ah$.add_za3rmp$(element);
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              if (this.path_jou8ah$.isEmpty())
                throw new Kotlin.IllegalStateException('No current tag');
              else if (!Kotlin.equals(Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).tagName.toLowerCase(), tag.tagName.toLowerCase()))
                throw new Kotlin.IllegalStateException('Wrong current tag');
              else {
                var node = Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$);
                if (value == null) {
                  node.removeAttribute(attribute);
                }
                 else {
                  node.setAttribute(attribute, value);
                }
              }
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              if (this.path_jou8ah$.isEmpty())
                throw new Kotlin.IllegalStateException('No current tag');
              else if (!Kotlin.equals(Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).tagName.toLowerCase(), tag.tagName.toLowerCase()))
                throw new Kotlin.IllegalStateException('Wrong current tag');
              else
                Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$)[event] = value;
            },
            onTagEnd_tkgjla$: function (tag) {
              if (this.path_jou8ah$.isEmpty() || !Kotlin.equals(Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).tagName.toLowerCase(), tag.tagName.toLowerCase())) {
                throw new Kotlin.IllegalStateException("We haven't entered tag " + tag.tagName + ' but trying to leave');
              }
              this.lastLeaved_j571nb$ = this.path_jou8ah$.removeAt_za3lpa$(Kotlin.modules['stdlib'].kotlin.collections.get_lastIndex_a7ptmv$(this.path_jou8ah$));
            },
            onTagContent_6bul2c$: function (content) {
              if (this.path_jou8ah$.isEmpty()) {
                throw new Kotlin.IllegalStateException('No current DOM node');
              }
              Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).appendChild(this.document.createTextNode(content.toString()));
            },
            onTagContentEntity_ws8or7$: function (entity) {
              var tmp$0;
              if (this.path_jou8ah$.isEmpty()) {
                throw new Kotlin.IllegalStateException('No current DOM node');
              }
              var s = Kotlin.isType(tmp$0 = this.document.createElement('span'), HTMLElement) ? tmp$0 : Kotlin.throwCCE();
              s.innerHTML = entity.text;
              var tmp$1 = Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$);
              var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_d3eamn$(s.childNodes);
              var destination = new Kotlin.ArrayList();
              var tmp$3;
              tmp$3 = $receiver.iterator();
              while (tmp$3.hasNext()) {
                var element = tmp$3.next();
                if (element.nodeType === Node.TEXT_NODE) {
                  destination.add_za3rmp$(element);
                }
              }
              tmp$1.appendChild(Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(destination));
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              var $this = new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DefaultUnsafe();
              block.call($this);
              Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).innerHTML = Kotlin.modules['stdlib'].kotlin.collections.last_a7ptmv$(this.path_jou8ah$).innerHTML + $this.toString();
            },
            finalize: function () {
              var tmp$0, tmp$1;
              tmp$1 = (tmp$0 = this.lastLeaved_j571nb$) != null ? this.asR(tmp$0) : null;
              if (tmp$1 == null)
                throw new Kotlin.IllegalStateException("We can't finalize as there was no tags");
              return tmp$1;
            },
            asR: function ($receiver) {
              return $receiver;
            }
          }, /** @lends _.kotlinx.html.dom.JSDOMBuilder */ {
          }),
          createTree_4wc2mi$: function ($receiver) {
            return new _.kotlinx.html.dom.JSDOMBuilder($receiver);
          },
          get_create_4wc2mi$: {value: function ($receiver) {
            return new _.kotlinx.html.dom.JSDOMBuilder($receiver);
          }},
          f: function (closure$result, this$append) {
            return function (it, partial) {
              if (!partial) {
                closure$result.add_za3rmp$(it);
                this$append.appendChild(it);
              }
            };
          },
          append_dvfs1y$: function ($receiver, block) {
            var result = new Kotlin.ArrayList();
            block.call(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.consumers.onFinalize_s52ojt$(_.kotlinx.html.dom.createTree_4wc2mi$(_.kotlinx.html.dom.get_ownerDocumentExt($receiver)), _.kotlinx.html.dom.f(result, $receiver)));
            return result;
          },
          get_append_y4uc6y$f: function (this$append) {
            return function (element, partial) {
              if (!partial) {
                this$append.appendChild(element);
              }
            };
          },
          get_append_y4uc6y$: {value: function ($receiver) {
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.consumers.onFinalize_s52ojt$(_.kotlinx.html.dom.createTree_4wc2mi$(_.kotlinx.html.dom.get_ownerDocumentExt($receiver)), _.kotlinx.html.dom.get_append_y4uc6y$f($receiver));
          }},
          get_ownerDocumentExt: {value: function ($receiver) {
            var tmp$0;
            if (Kotlin.isType($receiver, Document))
              return $receiver;
            else {
              tmp$0 = $receiver.ownerDocument;
              if (tmp$0 == null)
                throw new Kotlin.IllegalStateException('Node has no ownerDocument');
              return tmp$0;
            }
          }},
          EventAttribute: Kotlin.createObject(null, null, /** @lends _.kotlinx.html.dom.EventAttribute.prototype */ {
            set_tcnl1j$: function (tag, name, value) {
              tag.consumer.onTagEvent_tcnl1j$(tag, name, value);
            }
          })
        }),
        js: Kotlin.definePackage(null, /** @lends _.kotlinx.html.js */ {
          a_6v4gr4$f: function () {
          },
          a_6v4gr4$: function ($receiver, href, target, classes, block) {
            var tmp$0;
            if (href === void 0)
              href = null;
            if (target === void 0)
              target = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.a_6v4gr4$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.A(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['href', href, 'target', target, 'class', classes]), $receiver), $receiver, block), HTMLAnchorElement) ? tmp$0 : Kotlin.throwCCE();
          },
          abbr_bwfe0o$f: function () {
          },
          abbr_bwfe0o$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.abbr_bwfe0o$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.ABBR(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          address_37regx$f: function () {
          },
          address_37regx$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.address_37regx$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.ADDRESS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          area_1e9mv2$f: function () {
          },
          area_1e9mv2$: function ($receiver, shape, alt, classes, block) {
            var tmp$0;
            if (shape === void 0)
              shape = null;
            if (alt === void 0)
              alt = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.area_1e9mv2$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.AREA(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['Shape', shape != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(shape) : null, 'alt', alt, 'class', classes]), $receiver), $receiver, block), HTMLAreaElement) ? tmp$0 : Kotlin.throwCCE();
          },
          article_aewsqn$f: function () {
          },
          article_aewsqn$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.article_aewsqn$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.ARTICLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          aside_yr7zr7$f: function () {
          },
          aside_yr7zr7$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.aside_yr7zr7$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.ASIDE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          audio_pxzye9$f: function () {
          },
          audio_pxzye9$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.audio_pxzye9$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.AUDIO(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLAudioElement) ? tmp$0 : Kotlin.throwCCE();
          },
          b_mhlbbn$f: function () {
          },
          b_mhlbbn$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.b_mhlbbn$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.B(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          base_l7jjtk$f: function () {
          },
          base_l7jjtk$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.base_l7jjtk$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BASE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLBaseElement) ? tmp$0 : Kotlin.throwCCE();
          },
          bdi_tm41xq$f: function () {
          },
          bdi_tm41xq$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.bdi_tm41xq$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BDI(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          bdo_m2zrd4$f: function () {
          },
          bdo_m2zrd4$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.bdo_m2zrd4$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BDO(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          blockQuote_g6ai$f: function () {
          },
          blockQuote_g6ai$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.blockQuote_g6ai$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BLOCKQUOTE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          body_5zbeh3$f: function () {
          },
          body_5zbeh3$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.body_5zbeh3$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BODY(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLBodyElement) ? tmp$0 : Kotlin.throwCCE();
          },
          br_yxiqu1$f: function () {
          },
          br_yxiqu1$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.br_yxiqu1$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BR(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLBRElement) ? tmp$0 : Kotlin.throwCCE();
          },
          button_6faghk$f: function () {
          },
          button_6faghk$: function ($receiver, formEncType, formMethod, type, classes, block) {
            var tmp$0;
            if (formEncType === void 0)
              formEncType = null;
            if (formMethod === void 0)
              formMethod = null;
            if (type === void 0)
              type = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.button_6faghk$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.BUTTON(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'type', type != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver), $receiver, block), HTMLButtonElement) ? tmp$0 : Kotlin.throwCCE();
          },
          canvas_ohvnbw$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          canvas_ohvnbw$: function ($receiver, classes, content) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.CANVAS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.js.canvas_ohvnbw$f(content)), HTMLCanvasElement) ? tmp$0 : Kotlin.throwCCE();
          },
          canvas_cmh19r$f: function () {
          },
          canvas_cmh19r$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.canvas_cmh19r$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.CANVAS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLCanvasElement) ? tmp$0 : Kotlin.throwCCE();
          },
          caption_z7tj75$f: function () {
          },
          caption_z7tj75$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.caption_z7tj75$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.CAPTION(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          cite_95jwuq$f: function () {
          },
          cite_95jwuq$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.cite_95jwuq$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.CITE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          code_nwb30c$f: function () {
          },
          code_nwb30c$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.code_nwb30c$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.CODE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          col_pb9fud$f: function () {
          },
          col_pb9fud$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.col_pb9fud$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.COL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          colGroup_lnopre$f: function () {
          },
          colGroup_lnopre$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.colGroup_lnopre$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.COLGROUP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          command_x628cb$f: function () {
          },
          command_x628cb$: function ($receiver, type, classes, block) {
            if (type === void 0)
              type = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.command_x628cb$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.COMMAND(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver), $receiver, block);
          },
          dataList_6o9dzz$f: function () {
          },
          dataList_6o9dzz$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dataList_6o9dzz$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DATALIST(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLDataListElement) ? tmp$0 : Kotlin.throwCCE();
          },
          dd_pbflqv$f: function () {
          },
          dd_pbflqv$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dd_pbflqv$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DD(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          del_agxtjq$f: function () {
          },
          del_agxtjq$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.del_agxtjq$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DEL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          details_7335tf$f: function () {
          },
          details_7335tf$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.details_7335tf$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DETAILS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLDetailsElement) ? tmp$0 : Kotlin.throwCCE();
          },
          dfn_j50ma1$f: function () {
          },
          dfn_j50ma1$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dfn_j50ma1$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DFN(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          dialog_zhiqu9$f: function () {
          },
          dialog_zhiqu9$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dialog_zhiqu9$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DIALOG(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLDialogElement) ? tmp$0 : Kotlin.throwCCE();
          },
          div_cxc924$f: function () {
          },
          div_cxc924$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.div_cxc924$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DIV(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLDivElement) ? tmp$0 : Kotlin.throwCCE();
          },
          dl_bojz6n$f: function () {
          },
          dl_bojz6n$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dl_bojz6n$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          dt_1ybndl$f: function () {
          },
          dt_1ybndl$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.dt_1ybndl$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.DT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          em_s65iwv$f: function () {
          },
          em_s65iwv$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.em_s65iwv$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.EM(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          embed_tuj4is$f: function () {
          },
          embed_tuj4is$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.embed_tuj4is$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.EMBED(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLEmbedElement) ? tmp$0 : Kotlin.throwCCE();
          },
          fieldSet_xss933$f: function () {
          },
          fieldSet_xss933$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.fieldSet_xss933$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.FIELDSET(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLFieldSetElement) ? tmp$0 : Kotlin.throwCCE();
          },
          figcaption_7n573t$f: function () {
          },
          figcaption_7n573t$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.figcaption_7n573t$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.FIGCAPTION(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          figure_lpkp1h$f: function () {
          },
          figure_lpkp1h$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.figure_lpkp1h$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.FIGURE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          footer_w0h5f6$f: function () {
          },
          footer_w0h5f6$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.footer_w0h5f6$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.FOOTER(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          form_kmde2w$f: function () {
          },
          form_kmde2w$: function ($receiver, action, encType, method, classes, block) {
            var tmp$0;
            if (action === void 0)
              action = null;
            if (encType === void 0)
              encType = null;
            if (method === void 0)
              method = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.form_kmde2w$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.FORM(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', method != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(method) : null, 'class', classes]), $receiver), $receiver, block), HTMLFormElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h1_f1smtc$f: function () {
          },
          h1_f1smtc$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h1_f1smtc$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H1(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h2_v1rcqn$f: function () {
          },
          h2_v1rcqn$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h2_v1rcqn$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H2(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h3_647abi$f: function () {
          },
          h3_647abi$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h3_647abi$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H3(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h4_itcs3n$f: function () {
          },
          h4_itcs3n$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h4_itcs3n$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H4(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h5_ra77gc$f: function () {
          },
          h5_ra77gc$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h5_ra77gc$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H5(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          h6_2cn517$f: function () {
          },
          h6_2cn517$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.h6_2cn517$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.H6(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHeadingElement) ? tmp$0 : Kotlin.throwCCE();
          },
          head_qhl2mh$f: function () {
          },
          head_qhl2mh$: function ($receiver, block) {
            var tmp$0;
            if (block === void 0)
              block = _.kotlinx.html.js.head_qhl2mh$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.HEAD(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.emptyMap, $receiver), $receiver, block), HTMLHeadElement) ? tmp$0 : Kotlin.throwCCE();
          },
          header_uwnup0$f: function () {
          },
          header_uwnup0$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.header_uwnup0$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.HEADER(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          hGroup_30r8wi$f: function () {
          },
          hGroup_30r8wi$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.hGroup_30r8wi$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.HGROUP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          hr_ek5t0f$f: function () {
          },
          hr_ek5t0f$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.hr_ek5t0f$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.HR(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLHRElement) ? tmp$0 : Kotlin.throwCCE();
          },
          html_y5qwic$f: function () {
          },
          html_y5qwic$: function ($receiver, block) {
            var tmp$0;
            if (block === void 0)
              block = _.kotlinx.html.js.html_y5qwic$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.HTML(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.emptyMap, $receiver), $receiver, block), HTMLHtmlElement) ? tmp$0 : Kotlin.throwCCE();
          },
          i_9z31o4$f: function () {
          },
          i_9z31o4$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.i_9z31o4$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.I(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          iframe_59g1ll$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          iframe_59g1ll$: function ($receiver, sandbox, classes, content) {
            if (sandbox === void 0)
              sandbox = null;
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.IFRAME(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver), $receiver, _.kotlinx.html.js.iframe_59g1ll$f(content));
          },
          iframe_rgssuw$f: function () {
          },
          iframe_rgssuw$: function ($receiver, sandbox, classes, block) {
            if (sandbox === void 0)
              sandbox = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.iframe_rgssuw$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.IFRAME(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver), $receiver, block);
          },
          img_wretrm$f: function () {
          },
          img_wretrm$: function ($receiver, alt, src, classes, block) {
            var tmp$0;
            if (alt === void 0)
              alt = null;
            if (src === void 0)
              src = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.img_wretrm$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.IMG(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['alt', alt, 'src', src, 'class', classes]), $receiver), $receiver, block), HTMLImageElement) ? tmp$0 : Kotlin.throwCCE();
          },
          input_fx7xbo$f: function () {
          },
          input_fx7xbo$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
            var tmp$0;
            if (type === void 0)
              type = null;
            if (formEncType === void 0)
              formEncType = null;
            if (formMethod === void 0)
              formMethod = null;
            if (name === void 0)
              name = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.input_fx7xbo$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.INPUT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'formenctype', formEncType != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver), $receiver, block), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
          },
          ins_7ti2k9$f: function () {
          },
          ins_7ti2k9$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.ins_7ti2k9$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.INS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          kbd_6zkamg$f: function () {
          },
          kbd_6zkamg$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.kbd_6zkamg$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.KBD(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          keyGen_v56v4w$f: function () {
          },
          keyGen_v56v4w$: function ($receiver, keyType, classes, block) {
            if (keyType === void 0)
              keyType = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.keyGen_v56v4w$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.KEYGEN(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['keytype', keyType != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(keyType) : null, 'class', classes]), $receiver), $receiver, block);
          },
          label_pqfp8h$f: function () {
          },
          label_pqfp8h$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.label_pqfp8h$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.LABEL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLLabelElement) ? tmp$0 : Kotlin.throwCCE();
          },
          legEnd_ino0s$f: function () {
          },
          legEnd_ino0s$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.legEnd_ino0s$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.LEGEND(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          li_befqc4$f: function () {
          },
          li_befqc4$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.li_befqc4$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.LI(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLLIElement) ? tmp$0 : Kotlin.throwCCE();
          },
          link_qn5vzh$f: function () {
          },
          link_qn5vzh$: function ($receiver, href, rel, type, block) {
            var tmp$0;
            if (href === void 0)
              href = null;
            if (rel === void 0)
              rel = null;
            if (type === void 0)
              type = null;
            if (block === void 0)
              block = _.kotlinx.html.js.link_qn5vzh$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.LINK(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['href', href, 'rel', rel, 'type', type]), $receiver), $receiver, block), HTMLLinkElement) ? tmp$0 : Kotlin.throwCCE();
          },
          map_mb8qh3$f: function () {
          },
          map_mb8qh3$: function ($receiver, name, classes, block) {
            var tmp$0;
            if (name === void 0)
              name = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.map_mb8qh3$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.MAP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['name', name, 'class', classes]), $receiver), $receiver, block), HTMLMapElement) ? tmp$0 : Kotlin.throwCCE();
          },
          mark_qgxhwk$f: function () {
          },
          mark_qgxhwk$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.mark_qgxhwk$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.MARK(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          math_5tgb8f$f: function () {
          },
          math_5tgb8f$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.math_5tgb8f$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.MATH(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          mathml_ohvnbw$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          mathml_ohvnbw$: function ($receiver, classes, content) {
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.MATHML(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.js.mathml_ohvnbw$f(content));
          },
          mathml_wsse2q$f: function () {
          },
          mathml_wsse2q$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.mathml_wsse2q$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.MATHML(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          meta_smkt6y$f: function () {
          },
          meta_smkt6y$: function ($receiver, name, content, block) {
            var tmp$0;
            if (name === void 0)
              name = null;
            if (content === void 0)
              content = null;
            if (block === void 0)
              block = _.kotlinx.html.js.meta_smkt6y$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.META(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['name', name, 'content', content]), $receiver), $receiver, block), HTMLMetaElement) ? tmp$0 : Kotlin.throwCCE();
          },
          meter_klzqz8$f: function () {
          },
          meter_klzqz8$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.meter_klzqz8$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.METER(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLMeterElement) ? tmp$0 : Kotlin.throwCCE();
          },
          nav_k5tf5a$f: function () {
          },
          nav_k5tf5a$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.nav_k5tf5a$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.NAV(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          noScript_l2mxjx$f: function () {
          },
          noScript_l2mxjx$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.noScript_l2mxjx$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.NOSCRIPT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          object__9lupt7$f: function () {
          },
          object__9lupt7$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.object__9lupt7$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OBJECT_(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          ol_a5vogc$f: function () {
          },
          ol_a5vogc$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.ol_a5vogc$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          optGroup_omly5t$f: function () {
          },
          optGroup_omly5t$: function ($receiver, label, classes, block) {
            var tmp$0;
            if (label === void 0)
              label = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.optGroup_omly5t$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OPTGROUP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['label', label, 'class', classes]), $receiver), $receiver, block), HTMLOptGroupElement) ? tmp$0 : Kotlin.throwCCE();
          },
          option_ohvnbw$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          option_ohvnbw$: function ($receiver, classes, content) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OPTION(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.js.option_ohvnbw$f(content)), HTMLOptionElement) ? tmp$0 : Kotlin.throwCCE();
          },
          option_cn0i6k$f: function () {
          },
          option_cn0i6k$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.option_cn0i6k$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OPTION(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLOptionElement) ? tmp$0 : Kotlin.throwCCE();
          },
          output_eojbl4$f: function () {
          },
          output_eojbl4$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.output_eojbl4$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.OUTPUT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLOutputElement) ? tmp$0 : Kotlin.throwCCE();
          },
          p_slcnb9$f: function () {
          },
          p_slcnb9$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.p_slcnb9$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.P(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLParagraphElement) ? tmp$0 : Kotlin.throwCCE();
          },
          param_gbjjiu$f: function () {
          },
          param_gbjjiu$: function ($receiver, name, value, block) {
            var tmp$0;
            if (name === void 0)
              name = null;
            if (value === void 0)
              value = null;
            if (block === void 0)
              block = _.kotlinx.html.js.param_gbjjiu$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.PARAM(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['name', name, 'value', value]), $receiver), $receiver, block), HTMLParamElement) ? tmp$0 : Kotlin.throwCCE();
          },
          pre_58px1u$f: function () {
          },
          pre_58px1u$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.pre_58px1u$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.PRE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLPreElement) ? tmp$0 : Kotlin.throwCCE();
          },
          progress_xifxrw$f: function () {
          },
          progress_xifxrw$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.progress_xifxrw$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.PROGRESS(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLProgressElement) ? tmp$0 : Kotlin.throwCCE();
          },
          q_3nskw4$f: function () {
          },
          q_3nskw4$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.q_3nskw4$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.Q(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          rp_6sn0tn$f: function () {
          },
          rp_6sn0tn$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.rp_6sn0tn$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.RP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          rt_lwh6vt$f: function () {
          },
          rt_lwh6vt$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.rt_lwh6vt$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.RT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          ruby_nf2yb5$f: function () {
          },
          ruby_nf2yb5$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.ruby_nf2yb5$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.RUBY(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          samp_ndm1s8$f: function () {
          },
          samp_ndm1s8$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.samp_ndm1s8$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SAMP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          script_58pswt$f: function () {
          },
          script_58pswt$: function ($receiver, type, src, block) {
            var tmp$0;
            if (type === void 0)
              type = null;
            if (src === void 0)
              src = null;
            if (block === void 0)
              block = _.kotlinx.html.js.script_58pswt$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SCRIPT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver), $receiver, block), HTMLScriptElement) ? tmp$0 : Kotlin.throwCCE();
          },
          section_wkajao$f: function () {
          },
          section_wkajao$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.section_wkajao$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SECTION(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          select_6c9l5f$f: function () {
          },
          select_6c9l5f$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.select_6c9l5f$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SELECT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLSelectElement) ? tmp$0 : Kotlin.throwCCE();
          },
          small_nbsh8y$f: function () {
          },
          small_nbsh8y$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.small_nbsh8y$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SMALL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          source_9ljnpq$f: function () {
          },
          source_9ljnpq$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.source_9ljnpq$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SOURCE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLSourceElement) ? tmp$0 : Kotlin.throwCCE();
          },
          span_fmsbxb$f: function () {
          },
          span_fmsbxb$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.span_fmsbxb$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SPAN(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLSpanElement) ? tmp$0 : Kotlin.throwCCE();
          },
          strong_1y2uni$f: function () {
          },
          strong_1y2uni$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.strong_1y2uni$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.STRONG(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          style_ohvnbw$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          style_ohvnbw$: function ($receiver, type, content) {
            var tmp$0;
            if (type === void 0)
              type = null;
            if (content === void 0)
              content = '';
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.STYLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver), $receiver, _.kotlinx.html.js.style_ohvnbw$f(content)), HTMLStyleElement) ? tmp$0 : Kotlin.throwCCE();
          },
          style_dlkakk$f: function () {
          },
          style_dlkakk$: function ($receiver, type, block) {
            var tmp$0;
            if (type === void 0)
              type = null;
            if (block === void 0)
              block = _.kotlinx.html.js.style_dlkakk$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.STYLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver), $receiver, block), HTMLStyleElement) ? tmp$0 : Kotlin.throwCCE();
          },
          sub_wt0qx7$f: function () {
          },
          sub_wt0qx7$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.sub_wt0qx7$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SUB(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          sup_qp9exl$f: function () {
          },
          sup_qp9exl$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.sup_qp9exl$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SUP(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          svg_ohvnbw$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          svg_ohvnbw$: function ($receiver, classes, content) {
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SVG(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.js.svg_ohvnbw$f(content));
          },
          svg_6ymgdr$f: function () {
          },
          svg_6ymgdr$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.svg_6ymgdr$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.SVG(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          table_fxp8h3$f: function () {
          },
          table_fxp8h3$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.table_fxp8h3$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TABLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableElement) ? tmp$0 : Kotlin.throwCCE();
          },
          tbody_rnfie7$f: function () {
          },
          tbody_rnfie7$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.tbody_rnfie7$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TBODY(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableSectionElement) ? tmp$0 : Kotlin.throwCCE();
          },
          td_wabemf$f: function () {
          },
          td_wabemf$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.td_wabemf$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TD(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableCellElement) ? tmp$0 : Kotlin.throwCCE();
          },
          textArea_6iwxjg$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          textArea_6iwxjg$: function ($receiver, rows, cols, wrap, classes, content) {
            var tmp$0;
            if (rows === void 0)
              rows = null;
            if (cols === void 0)
              cols = null;
            if (wrap === void 0)
              wrap = null;
            if (classes === void 0)
              classes = null;
            if (content === void 0)
              content = '';
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TEXTAREA(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver), $receiver, _.kotlinx.html.js.textArea_6iwxjg$f(content)), HTMLTextAreaElement) ? tmp$0 : Kotlin.throwCCE();
          },
          textArea_iquu53$f: function () {
          },
          textArea_iquu53$: function ($receiver, rows, cols, wrap, classes, block) {
            var tmp$0;
            if (rows === void 0)
              rows = null;
            if (cols === void 0)
              cols = null;
            if (wrap === void 0)
              wrap = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.textArea_iquu53$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TEXTAREA(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver), $receiver, block), HTMLTextAreaElement) ? tmp$0 : Kotlin.throwCCE();
          },
          tfoot_r0u80j$f: function () {
          },
          tfoot_r0u80j$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.tfoot_r0u80j$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TFOOT(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableSectionElement) ? tmp$0 : Kotlin.throwCCE();
          },
          th_80l4nf$f: function () {
          },
          th_80l4nf$: function ($receiver, scope, classes, block) {
            var tmp$0;
            if (scope === void 0)
              scope = null;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.th_80l4nf$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TH(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_kand9s$(['scope', scope != null ? Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributes.enumEncode_m4whrx$(scope) : null, 'class', classes]), $receiver), $receiver, block), HTMLTableColElement) ? tmp$0 : Kotlin.throwCCE();
          },
          thead_3q1qe7$f: function () {
          },
          thead_3q1qe7$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.thead_3q1qe7$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.THEAD(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableSectionElement) ? tmp$0 : Kotlin.throwCCE();
          },
          time_ha8d98$f: function () {
          },
          time_ha8d98$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.time_ha8d98$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TIME(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTimeElement) ? tmp$0 : Kotlin.throwCCE();
          },
          title_omt6y6$f: function (closure$content) {
            return function () {
              this.unaryPlus_pdl1w0$(closure$content);
            };
          },
          title_omt6y6$: function ($receiver, content) {
            var tmp$0;
            if (content === void 0)
              content = '';
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TITLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.emptyMap, $receiver), $receiver, _.kotlinx.html.js.title_omt6y6$f(content)), HTMLTitleElement) ? tmp$0 : Kotlin.throwCCE();
          },
          title_4tz5n5$f: function () {
          },
          title_4tz5n5$: function ($receiver, block) {
            var tmp$0;
            if (block === void 0)
              block = _.kotlinx.html.js.title_4tz5n5$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TITLE(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.emptyMap, $receiver), $receiver, block), HTMLTitleElement) ? tmp$0 : Kotlin.throwCCE();
          },
          tr_q6k2mt$f: function () {
          },
          tr_q6k2mt$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.tr_q6k2mt$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TR(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLTableRowElement) ? tmp$0 : Kotlin.throwCCE();
          },
          ul_a7h9da$f: function () {
          },
          ul_a7h9da$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.ul_a7h9da$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.UL(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          var__lju2vj$f: function () {
          },
          var__lju2vj$: function ($receiver, classes, block) {
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.var__lju2vj$f;
            return Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.VAR_(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
          },
          video_zc7ikm$f: function () {
          },
          video_zc7ikm$: function ($receiver, classes, block) {
            var tmp$0;
            if (classes === void 0)
              classes = null;
            if (block === void 0)
              block = _.kotlinx.html.js.video_zc7ikm$f;
            return Kotlin.isType(tmp$0 = Kotlin.modules['kotlinx.html.shared'].kotlinx.html.visitAndFinalize_6oj4h2$(new Kotlin.modules['kotlinx.html.shared'].kotlinx.html.VIDEO(Kotlin.modules['kotlinx.html.shared'].kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block), HTMLVideoElement) ? tmp$0 : Kotlin.throwCCE();
          },
          get_onAbortFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onAbort");
          }},
          set_onAbortFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onabort', newValue);
          }},
          get_onBlurFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onBlur");
          }},
          set_onBlurFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onblur', newValue);
          }},
          get_onCanPlayFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onCanPlay");
          }},
          set_onCanPlayFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'oncanplay', newValue);
          }},
          get_onCanPlayThroughFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onCanPlayThrough");
          }},
          set_onCanPlayThroughFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'oncanplaythrough', newValue);
          }},
          get_onChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onChange");
          }},
          set_onChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onchange', newValue);
          }},
          get_onClickFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onClick");
          }},
          set_onClickFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onclick', newValue);
          }},
          get_onContextMenuFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onContextMenu");
          }},
          set_onContextMenuFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'oncontextmenu', newValue);
          }},
          get_onDoubleClickFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDoubleClick");
          }},
          set_onDoubleClickFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondblclick', newValue);
          }},
          get_onDragFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDrag");
          }},
          set_onDragFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondrag', newValue);
          }},
          get_onDragEnterFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDragEnter");
          }},
          set_onDragEnterFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondragenter', newValue);
          }},
          get_onDragLeaveFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDragLeave");
          }},
          set_onDragLeaveFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondragleave', newValue);
          }},
          get_onDragOverFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDragOver");
          }},
          set_onDragOverFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondragover', newValue);
          }},
          get_onDragStartFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDragStart");
          }},
          set_onDragStartFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondragstart', newValue);
          }},
          get_onDropFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDrop");
          }},
          set_onDropFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondrop', newValue);
          }},
          get_onDurationChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onDurationChange");
          }},
          set_onDurationChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ondurationchange', newValue);
          }},
          get_onEmptiedFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onEmptied");
          }},
          set_onEmptiedFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onemptied', newValue);
          }},
          get_onEndedFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onEnded");
          }},
          set_onEndedFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onended', newValue);
          }},
          get_onErrorFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onError");
          }},
          set_onErrorFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onerror', newValue);
          }},
          get_onFocusFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onFocus");
          }},
          set_onFocusFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onfocus', newValue);
          }},
          get_onFormChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onFormChange");
          }},
          set_onFormChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onformchange', newValue);
          }},
          get_onFormInputFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onFormInput");
          }},
          set_onFormInputFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onforminput', newValue);
          }},
          get_onInputFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onInput");
          }},
          set_onInputFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'oninput', newValue);
          }},
          get_onInvalidFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onInvalid");
          }},
          set_onInvalidFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'oninvalid', newValue);
          }},
          get_onKeyDownFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onKeyDown");
          }},
          set_onKeyDownFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onkeydown', newValue);
          }},
          get_onKeyPressFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onKeyPress");
          }},
          set_onKeyPressFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onkeypress', newValue);
          }},
          get_onKeyUpFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onKeyUp");
          }},
          set_onKeyUpFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onkeyup', newValue);
          }},
          get_onLoadFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onLoad");
          }},
          set_onLoadFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onload', newValue);
          }},
          get_onLoadedDataFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onLoadedData");
          }},
          set_onLoadedDataFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onloadeddata', newValue);
          }},
          get_onLoadedMetaDataFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onLoadedMetaData");
          }},
          set_onLoadedMetaDataFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onloadedmetadata', newValue);
          }},
          get_onLoadStartFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onLoadStart");
          }},
          set_onLoadStartFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onloadstart', newValue);
          }},
          get_onMouseDownFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseDown");
          }},
          set_onMouseDownFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmousedown', newValue);
          }},
          get_onMouseMoveFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseMove");
          }},
          set_onMouseMoveFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmousemove', newValue);
          }},
          get_onMouseOutFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseOut");
          }},
          set_onMouseOutFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmouseout', newValue);
          }},
          get_onMouseOverFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseOver");
          }},
          set_onMouseOverFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmouseover', newValue);
          }},
          get_onMouseUpFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseUp");
          }},
          set_onMouseUpFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmouseup', newValue);
          }},
          get_onMouseWheelFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onMouseWheel");
          }},
          set_onMouseWheelFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onmousewheel', newValue);
          }},
          get_onPauseFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onPause");
          }},
          set_onPauseFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onpause', newValue);
          }},
          get_onPlayFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onPlay");
          }},
          set_onPlayFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onplay', newValue);
          }},
          get_onPlayingFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onPlaying");
          }},
          set_onPlayingFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onplaying', newValue);
          }},
          get_onProgressFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onProgress");
          }},
          set_onProgressFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onprogress', newValue);
          }},
          get_onRateChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onRateChange");
          }},
          set_onRateChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onratechange', newValue);
          }},
          get_onReadyStateChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onReadyStateChange");
          }},
          set_onReadyStateChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onreadystatechange', newValue);
          }},
          get_onScrollFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onScroll");
          }},
          set_onScrollFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onscroll', newValue);
          }},
          get_onSeekedFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onSeeked");
          }},
          set_onSeekedFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onseeked', newValue);
          }},
          get_onSeekingFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onSeeking");
          }},
          set_onSeekingFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onseeking', newValue);
          }},
          get_onSelectFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onSelect");
          }},
          set_onSelectFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onselect', newValue);
          }},
          get_onShowFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onShow");
          }},
          set_onShowFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onshow', newValue);
          }},
          get_onStalledFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onStalled");
          }},
          set_onStalledFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onstalled', newValue);
          }},
          get_onSubmitFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onSubmit");
          }},
          set_onSubmitFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onsubmit', newValue);
          }},
          get_onSuspendFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onSuspend");
          }},
          set_onSuspendFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onsuspend', newValue);
          }},
          get_onTimeUpdateFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onTimeUpdate");
          }},
          set_onTimeUpdateFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'ontimeupdate', newValue);
          }},
          get_onVolumeChangeFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onVolumeChange");
          }},
          set_onVolumeChangeFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onvolumechange', newValue);
          }},
          get_onWaitingFunction_fxodxi$: {value: function ($receiver) {
            throw new Kotlin.UnsupportedOperationException("You can't read variable onWaiting");
          }},
          set_onWaitingFunction_fxodxi$: {value: function ($receiver, newValue) {
            _.kotlinx.html.dom.EventAttribute.set_tcnl1j$($receiver, 'onwaiting', newValue);
          }}
        }),
        injector: Kotlin.definePackage(function () {
          {
            var propertyRefClassMetadataCache = {zeroArg: {mutable: {value: null, implementedInterface: function () {
              return Kotlin.modules['stdlib'].kotlin.reflect.KMutableProperty0;
            }}, immutable: {value: null, implementedInterface: function () {
              return Kotlin.modules['stdlib'].kotlin.reflect.KProperty0;
            }}}, oneArg: {mutable: {value: null, implementedInterface: function () {
              return Kotlin.modules['stdlib'].kotlin.reflect.KMutableProperty1;
            }}, immutable: {value: null, implementedInterface: function () {
              return Kotlin.modules['stdlib'].kotlin.reflect.KProperty1;
            }}}};
            var getPropertyRefMetadata = function (cache) {
              if (cache.value === null) {
                cache.value = {baseClasses: [cache.implementedInterface()], baseClass: null, classIndex: Kotlin.newClassIndex(), functions: {}, properties: {}, types: {}, staticMembers: {}};
              }
              return cache.value;
            };
            var _getPropertyRefClass = function (name, getFun, getName, setFun, setName, cache) {
              var obj = getFun;
              var isMutable = typeof setFun === 'function';
              obj.$metadata$ = getPropertyRefMetadata(isMutable ? cache.mutable : cache.immutable);
              obj[getName] = getFun;
              if (isMutable) {
                obj[setName] = setFun;
              }
              obj.constructor = obj;
              return obj;
            };
            Kotlin.getCallableRefForTopLevelProperty = function (packageName, name, isVar) {
              var getFun = Function('p', 'return function ' + name + "() { return p['" + name + "']; }")(packageName);
              var setFun = isVar ? function (value) {
                packageName[name] = value;
              } : null;
              return _getPropertyRefClass(name, getFun, 'get', setFun, 'set_za3rmp$', propertyRefClassMetadataCache.zeroArg);
            };
            Kotlin.getCallableRefForMemberProperty = function (name, isVar) {
              var getFun = Function('return function ' + name + "(receiver) { return receiver['" + name + "']; }")();
              var setFun = isVar ? function (receiver, value) {
                receiver[name] = value;
              } : null;
              return _getPropertyRefClass(name, getFun, 'get_za3rmp$', setFun, 'set_wn2jw4$', propertyRefClassMetadataCache.oneArg);
            };
          }
          this.z = Kotlin.getCallableRefForExtensionProperty = function (name, getFun, setFun) {
            var getFunWrapper = Function('return function ' + name + '(receiver, extensionReceiver) { return getFun(receiver, extensionReceiver) }')();
            return _getPropertyRefClass(name, getFunWrapper, 'get_za3rmp$', setFun, 'set_wn2jw4$', propertyRefClassMetadataCache.oneArg);
          };
        }, /** @lends _.kotlinx.html.injector */ {
          injectTo_vx85ip$: function ($receiver, bean, field) {
            field.set_wn2jw4$(bean, $receiver);
          },
          injectToUnsafe: function ($receiver, bean, field) {
            _.kotlinx.html.injector.injectTo_vx85ip$($receiver, bean, field);
          },
          InjectCapture: Kotlin.createTrait(null),
          InjectByClassName: Kotlin.createClass(function () {
            return [_.kotlinx.html.injector.InjectCapture];
          }, function (className) {
            this.className = className;
          }),
          InjectByTagName: Kotlin.createClass(function () {
            return [_.kotlinx.html.injector.InjectCapture];
          }, function (tagName) {
            this.tagName = tagName;
          }),
          InjectRoot: Kotlin.createObject(function () {
            return [_.kotlinx.html.injector.InjectCapture];
          }, null),
          CustomCapture: Kotlin.createTrait(function () {
            return [_.kotlinx.html.injector.InjectCapture];
          }),
          InjectorConsumer: Kotlin.createClass(function () {
            return [Kotlin.modules['kotlinx.html.shared'].kotlinx.html.TagConsumer];
          }, function (downstream, bean, rules) {
            this.downstream = downstream;
            this.bean = bean;
            var destination = new Kotlin.ArrayList();
            var tmp$10;
            tmp$10 = rules.iterator();
            while (tmp$10.hasNext()) {
              var element = tmp$10.next();
              if (Kotlin.isType(element.first, _.kotlinx.html.injector.InjectByClassName)) {
                destination.add_za3rmp$(element);
              }
            }
            var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
            var tmp$11;
            tmp$11 = destination.iterator();
            while (tmp$11.hasNext()) {
              var item = tmp$11.next();
              var tmp$13;
              destination_0.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$(Kotlin.isType(tmp$13 = item.first, _.kotlinx.html.injector.InjectByClassName) ? tmp$13 : Kotlin.throwCCE(), item.second));
            }
            var destination_1 = new Kotlin.LinkedHashMap();
            var tmp$15;
            tmp$15 = destination_0.iterator();
            while (tmp$15.hasNext()) {
              var element_0 = tmp$15.next();
              var key = element_0.first.className;
              var tmp$14;
              var value = destination_1.get_za3rmp$(key);
              if (value == null) {
                var answer = new Kotlin.ArrayList();
                destination_1.put_wn2jw4$(key, answer);
                tmp$14 = answer;
              }
               else {
                tmp$14 = value;
              }
              var list = tmp$14;
              list.add_za3rmp$(element_0.second);
            }
            this.classesMap_5d6mb0$ = destination_1;
            var destination_2 = new Kotlin.ArrayList();
            var tmp$17;
            tmp$17 = rules.iterator();
            while (tmp$17.hasNext()) {
              var element_1 = tmp$17.next();
              if (Kotlin.isType(element_1.first, _.kotlinx.html.injector.InjectByTagName)) {
                destination_2.add_za3rmp$(element_1);
              }
            }
            var destination_3 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination_2, 10));
            var tmp$18;
            tmp$18 = destination_2.iterator();
            while (tmp$18.hasNext()) {
              var item_0 = tmp$18.next();
              var tmp$20;
              destination_3.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$(Kotlin.isType(tmp$20 = item_0.first, _.kotlinx.html.injector.InjectByTagName) ? tmp$20 : Kotlin.throwCCE(), item_0.second));
            }
            var destination_4 = new Kotlin.LinkedHashMap();
            var tmp$22;
            tmp$22 = destination_3.iterator();
            while (tmp$22.hasNext()) {
              var element_2 = tmp$22.next();
              var key_0 = element_2.first.tagName.toLowerCase();
              var tmp$21;
              var value_0 = destination_4.get_za3rmp$(key_0);
              if (value_0 == null) {
                var answer_0 = new Kotlin.ArrayList();
                destination_4.put_wn2jw4$(key_0, answer_0);
                tmp$21 = answer_0;
              }
               else {
                tmp$21 = value_0;
              }
              var list_0 = tmp$21;
              list_0.add_za3rmp$(element_2.second);
            }
            this.tagNamesMap_xqo8fc$ = destination_4;
            var destination_5 = new Kotlin.ArrayList();
            var tmp$24;
            tmp$24 = rules.iterator();
            while (tmp$24.hasNext()) {
              var element_3 = tmp$24.next();
              if (Kotlin.equals(element_3.first, _.kotlinx.html.injector.InjectRoot)) {
                destination_5.add_za3rmp$(element_3);
              }
            }
            var destination_6 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination_5, 10));
            var tmp$25;
            tmp$25 = destination_5.iterator();
            while (tmp$25.hasNext()) {
              var item_1 = tmp$25.next();
              destination_6.add_za3rmp$(item_1.second);
            }
            this.rootCaptures_tuaw79$ = destination_6;
            var destination_7 = new Kotlin.ArrayList();
            var tmp$27;
            tmp$27 = rules.iterator();
            while (tmp$27.hasNext()) {
              var element_4 = tmp$27.next();
              if (Kotlin.isType(element_4.first, _.kotlinx.html.injector.CustomCapture)) {
                destination_7.add_za3rmp$(element_4);
              }
            }
            var destination_8 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination_7, 10));
            var tmp$28;
            tmp$28 = destination_7.iterator();
            while (tmp$28.hasNext()) {
              var item_2 = tmp$28.next();
              var tmp$30;
              destination_8.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$(Kotlin.isType(tmp$30 = item_2.first, _.kotlinx.html.injector.CustomCapture) ? tmp$30 : Kotlin.throwCCE(), item_2.second));
            }
            this.customCaptures_4t1rho$ = destination_8;
          }, /** @lends _.kotlinx.html.injector.InjectorConsumer.prototype */ {
            onTagEnd_tkgjla$: function (tag) {
              var tmp$0;
              this.downstream.onTagEnd_tkgjla$(tag);
              var node = this.downstream.finalize();
              if (!this.classesMap_5d6mb0$.isEmpty()) {
                var $receiver_0 = Kotlin.modules['stdlib'].kotlin.dom.asList_u75qis$(node.classList);
                var destination = new Kotlin.ArrayList();
                var tmp$4;
                tmp$4 = $receiver_0.iterator();
                while (tmp$4.hasNext()) {
                  var element = tmp$4.next();
                  var tmp$5;
                  var list = (tmp$5 = this.classesMap_5d6mb0$.get_za3rmp$(element)) != null ? tmp$5 : Kotlin.modules['stdlib'].kotlin.collections.emptyList();
                  Kotlin.modules['stdlib'].kotlin.collections.addAll_fwwv5a$(destination, list);
                }
                var tmp$6;
                tmp$6 = destination.iterator();
                while (tmp$6.hasNext()) {
                  var element_0 = tmp$6.next();
                  _.kotlinx.html.injector.injectToUnsafe(node, this.bean, element_0);
                }
              }
              if (!this.tagNamesMap_xqo8fc$.isEmpty()) {
                var tmp$7;
                if ((tmp$0 = this.tagNamesMap_xqo8fc$.get_za3rmp$(node.tagName.toLowerCase())) != null) {
                  var forEach_lcecrh$result;
                  var tmp$8;
                  tmp$8 = tmp$0.iterator();
                  while (tmp$8.hasNext()) {
                    var element_1 = tmp$8.next();
                    _.kotlinx.html.injector.injectToUnsafe(node, this.bean, element_1);
                  }
                  tmp$7 = forEach_lcecrh$result;
                }
                 else
                  tmp$7 = null;
                tmp$7;
              }
              var $receiver_4 = this.customCaptures_4t1rho$;
              var destination_0 = new Kotlin.ArrayList();
              var tmp$9;
              tmp$9 = $receiver_4.iterator();
              while (tmp$9.hasNext()) {
                var element_2 = tmp$9.next();
                if (element_2.first.apply_lt8gi4$(node)) {
                  destination_0.add_za3rmp$(element_2);
                }
              }
              var destination_1 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination_0, 10));
              var tmp$10;
              tmp$10 = destination_0.iterator();
              while (tmp$10.hasNext()) {
                var item = tmp$10.next();
                destination_1.add_za3rmp$(item.second);
              }
              var tmp$12;
              tmp$12 = destination_1.iterator();
              while (tmp$12.hasNext()) {
                var element_3 = tmp$12.next();
                _.kotlinx.html.injector.injectToUnsafe(node, this.bean, element_3);
              }
            },
            finalize: function () {
              var node = this.downstream.finalize();
              var tmp$0;
              tmp$0 = this.rootCaptures_tuaw79$.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                _.kotlinx.html.injector.injectToUnsafe(node, this.bean, element);
              }
              return node;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              return this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
            },
            onTagContent_6bul2c$: function (content) {
              return this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              return this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              return this.downstream.onTagContentUnsafe_4yqypv$(block);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              return this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            },
            onTagStart_tkgjla$: function (tag) {
              return this.downstream.onTagStart_tkgjla$(tag);
            }
          }, /** @lends _.kotlinx.html.injector.InjectorConsumer */ {
          }),
          inject_lwrrkg$: function ($receiver, bean, rules) {
            return new _.kotlinx.html.injector.InjectorConsumer($receiver, bean, rules);
          },
          appendAndInject_t4760b$f: function (closure$bean, closure$rules, closure$block) {
            return function () {
              closure$block.call(new _.kotlinx.html.injector.InjectorConsumer(this, closure$bean, closure$rules));
              Kotlin.modules['stdlib'].kotlin.Unit;
            };
          },
          appendAndInject_t4760b$: function ($receiver, bean, rules, block) {
            return _.kotlinx.html.dom.append_dvfs1y$($receiver, _.kotlinx.html.injector.appendAndInject_t4760b$f(bean, rules, block));
          }
        })
      })
    })
  });
  Kotlin.defineModule('kotlinx.html.js', _);
}(Kotlin));
