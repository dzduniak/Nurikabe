(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    kotlinx: Kotlin.definePackage(null, /** @lends _.kotlinx */ {
      html: Kotlin.definePackage(function () {
        var $receiver = _.kotlinx.html.Dir.values();
        var tmp$0, tmp$1, tmp$2;
        var capacity = $receiver.length / 0.75 + 1;
        var result = new Kotlin.LinkedHashMap(Math.max(capacity | 0, 16));
        tmp$0 = $receiver, tmp$1 = tmp$0.length;
        for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
          var element = tmp$0[tmp$2];
          result.put_wn2jw4$(element.realValue, element);
        }
        this.dirValues_57a1fn$ = result;
        var $receiver_0 = _.kotlinx.html.Draggable.values();
        var tmp$5, tmp$4, tmp$3;
        var capacity_0 = $receiver_0.length / 0.75 + 1;
        var result_0 = new Kotlin.LinkedHashMap(Math.max(capacity_0 | 0, 16));
        tmp$5 = $receiver_0, tmp$4 = tmp$5.length;
        for (var tmp$3 = 0; tmp$3 !== tmp$4; ++tmp$3) {
          var element_0 = tmp$5[tmp$3];
          result_0.put_wn2jw4$(element_0.realValue, element_0);
        }
        this.draggableValues_7puf5p$ = result_0;
        var $receiver_1 = _.kotlinx.html.RunAt.values();
        var tmp$8, tmp$7, tmp$6;
        var capacity_1 = $receiver_1.length / 0.75 + 1;
        var result_1 = new Kotlin.LinkedHashMap(Math.max(capacity_1 | 0, 16));
        tmp$8 = $receiver_1, tmp$7 = tmp$8.length;
        for (var tmp$6 = 0; tmp$6 !== tmp$7; ++tmp$6) {
          var element_1 = tmp$8[tmp$6];
          result_1.put_wn2jw4$(element_1.realValue, element_1);
        }
        this.runAtValues_66urn0$ = result_1;
        this.ATarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        this.ARel = Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        });
        this.AType = Kotlin.createObject(null, function () {
          this.textAsp = 'text/asp';
          this.textAsa = 'text/asa';
          this.textCss = 'text/css';
          this.textHtml = 'text/html';
          this.textJavaScript = 'text/javascript';
          this.textPlain = 'text/plain';
          this.textScriptLet = 'text/scriptlet';
          this.textXComponent = 'text/x-component';
          this.textXHtmlInsertion = 'text/x-html-insertion';
          this.textXml = 'text/xml';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
        });
        var $receiver_2 = _.kotlinx.html.AreaShape.values();
        var tmp$11, tmp$10, tmp$9;
        var capacity_2 = $receiver_2.length / 0.75 + 1;
        var result_2 = new Kotlin.LinkedHashMap(Math.max(capacity_2 | 0, 16));
        tmp$11 = $receiver_2, tmp$10 = tmp$11.length;
        for (var tmp$9 = 0; tmp$9 !== tmp$10; ++tmp$9) {
          var element_2 = tmp$11[tmp$9];
          result_2.put_wn2jw4$(element_2.realValue, element_2);
        }
        this.areaShapeValues_xtig3u$ = result_2;
        this.AreaTarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        this.AreaRel = Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        });
        this.BaseTarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        var $receiver_3 = _.kotlinx.html.ButtonFormEncType.values();
        var tmp$14, tmp$13, tmp$12;
        var capacity_3 = $receiver_3.length / 0.75 + 1;
        var result_3 = new Kotlin.LinkedHashMap(Math.max(capacity_3 | 0, 16));
        tmp$14 = $receiver_3, tmp$13 = tmp$14.length;
        for (var tmp$12 = 0; tmp$12 !== tmp$13; ++tmp$12) {
          var element_3 = tmp$14[tmp$12];
          result_3.put_wn2jw4$(element_3.realValue, element_3);
        }
        this.buttonFormEncTypeValues_i0hsuk$ = result_3;
        var $receiver_4 = _.kotlinx.html.ButtonFormMethod.values();
        var tmp$17, tmp$16, tmp$15;
        var capacity_4 = $receiver_4.length / 0.75 + 1;
        var result_4 = new Kotlin.LinkedHashMap(Math.max(capacity_4 | 0, 16));
        tmp$17 = $receiver_4, tmp$16 = tmp$17.length;
        for (var tmp$15 = 0; tmp$15 !== tmp$16; ++tmp$15) {
          var element_4 = tmp$17[tmp$15];
          result_4.put_wn2jw4$(element_4.realValue, element_4);
        }
        this.buttonFormMethodValues_8o24rf$ = result_4;
        this.ButtonFormTarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        var $receiver_5 = _.kotlinx.html.ButtonType.values();
        var tmp$20, tmp$19, tmp$18;
        var capacity_5 = $receiver_5.length / 0.75 + 1;
        var result_5 = new Kotlin.LinkedHashMap(Math.max(capacity_5 | 0, 16));
        tmp$20 = $receiver_5, tmp$19 = tmp$20.length;
        for (var tmp$18 = 0; tmp$18 !== tmp$19; ++tmp$18) {
          var element_5 = tmp$20[tmp$18];
          result_5.put_wn2jw4$(element_5.realValue, element_5);
        }
        this.buttonTypeValues_i7s3a2$ = result_5;
        var $receiver_6 = _.kotlinx.html.CommandType.values();
        var tmp$23, tmp$22, tmp$21;
        var capacity_6 = $receiver_6.length / 0.75 + 1;
        var result_6 = new Kotlin.LinkedHashMap(Math.max(capacity_6 | 0, 16));
        tmp$23 = $receiver_6, tmp$22 = tmp$23.length;
        for (var tmp$21 = 0; tmp$21 !== tmp$22; ++tmp$21) {
          var element_6 = tmp$23[tmp$21];
          result_6.put_wn2jw4$(element_6.realValue, element_6);
        }
        this.commandTypeValues_vxi3$ = result_6;
        var $receiver_7 = _.kotlinx.html.FormEncType.values();
        var tmp$26, tmp$25, tmp$24;
        var capacity_7 = $receiver_7.length / 0.75 + 1;
        var result_7 = new Kotlin.LinkedHashMap(Math.max(capacity_7 | 0, 16));
        tmp$26 = $receiver_7, tmp$25 = tmp$26.length;
        for (var tmp$24 = 0; tmp$24 !== tmp$25; ++tmp$24) {
          var element_7 = tmp$26[tmp$24];
          result_7.put_wn2jw4$(element_7.realValue, element_7);
        }
        this.formEncTypeValues_29bbgm$ = result_7;
        var $receiver_8 = _.kotlinx.html.FormMethod.values();
        var tmp$29, tmp$28, tmp$27;
        var capacity_8 = $receiver_8.length / 0.75 + 1;
        var result_8 = new Kotlin.LinkedHashMap(Math.max(capacity_8 | 0, 16));
        tmp$29 = $receiver_8, tmp$28 = tmp$29.length;
        for (var tmp$27 = 0; tmp$27 !== tmp$28; ++tmp$27) {
          var element_8 = tmp$29[tmp$27];
          result_8.put_wn2jw4$(element_8.realValue, element_8);
        }
        this.formMethodValues_ewcw0j$ = result_8;
        this.FormTarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        this.IframeName = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        var $receiver_9 = _.kotlinx.html.IframeSandbox.values();
        var tmp$32, tmp$31, tmp$30;
        var capacity_9 = $receiver_9.length / 0.75 + 1;
        var result_9 = new Kotlin.LinkedHashMap(Math.max(capacity_9 | 0, 16));
        tmp$32 = $receiver_9, tmp$31 = tmp$32.length;
        for (var tmp$30 = 0; tmp$30 !== tmp$31; ++tmp$30) {
          var element_9 = tmp$32[tmp$30];
          result_9.put_wn2jw4$(element_9.realValue, element_9);
        }
        this.iframeSandboxValues_g7xr21$ = result_9;
        var $receiver_10 = _.kotlinx.html.InputType.values();
        var tmp$35, tmp$34, tmp$33;
        var capacity_10 = $receiver_10.length / 0.75 + 1;
        var result_10 = new Kotlin.LinkedHashMap(Math.max(capacity_10 | 0, 16));
        tmp$35 = $receiver_10, tmp$34 = tmp$35.length;
        for (var tmp$33 = 0; tmp$33 !== tmp$34; ++tmp$33) {
          var element_10 = tmp$35[tmp$33];
          result_10.put_wn2jw4$(element_10.realValue, element_10);
        }
        this.inputTypeValues_rherxi$ = result_10;
        var $receiver_11 = _.kotlinx.html.InputFormEncType.values();
        var tmp$38, tmp$37, tmp$36;
        var capacity_11 = $receiver_11.length / 0.75 + 1;
        var result_11 = new Kotlin.LinkedHashMap(Math.max(capacity_11 | 0, 16));
        tmp$38 = $receiver_11, tmp$37 = tmp$38.length;
        for (var tmp$36 = 0; tmp$36 !== tmp$37; ++tmp$36) {
          var element_11 = tmp$38[tmp$36];
          result_11.put_wn2jw4$(element_11.realValue, element_11);
        }
        this.inputFormEncTypeValues_8b1mmk$ = result_11;
        var $receiver_12 = _.kotlinx.html.InputFormMethod.values();
        var tmp$41, tmp$40, tmp$39;
        var capacity_12 = $receiver_12.length / 0.75 + 1;
        var result_12 = new Kotlin.LinkedHashMap(Math.max(capacity_12 | 0, 16));
        tmp$41 = $receiver_12, tmp$40 = tmp$41.length;
        for (var tmp$39 = 0; tmp$39 !== tmp$40; ++tmp$39) {
          var element_12 = tmp$41[tmp$39];
          result_12.put_wn2jw4$(element_12.realValue, element_12);
        }
        this.inputFormMethodValues_sb0hd1$ = result_12;
        this.InputFormTarget = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        var $receiver_13 = _.kotlinx.html.KeyGenKeyType.values();
        var tmp$44, tmp$43, tmp$42;
        var capacity_13 = $receiver_13.length / 0.75 + 1;
        var result_13 = new Kotlin.LinkedHashMap(Math.max(capacity_13 | 0, 16));
        tmp$44 = $receiver_13, tmp$43 = tmp$44.length;
        for (var tmp$42 = 0; tmp$42 !== tmp$43; ++tmp$42) {
          var element_13 = tmp$44[tmp$42];
          result_13.put_wn2jw4$(element_13.realValue, element_13);
        }
        this.keyGenKeyTypeValues_6m8br2$ = result_13;
        this.LinkRel = Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        });
        this.LinkMedia = Kotlin.createObject(null, function () {
          this.screen = 'screen';
          this.print = 'print';
          this.tty = 'tty';
          this.tv = 'tv';
          this.projection = 'projection';
          this.handheld = 'handheld';
          this.braille = 'braille';
          this.aural = 'aural';
          this.all = 'all';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
        });
        this.LinkType = Kotlin.createObject(null, function () {
          this.textAsp = 'text/asp';
          this.textAsa = 'text/asa';
          this.textCss = 'text/css';
          this.textHtml = 'text/html';
          this.textJavaScript = 'text/javascript';
          this.textPlain = 'text/plain';
          this.textScriptLet = 'text/scriptlet';
          this.textXComponent = 'text/x-component';
          this.textXHtmlInsertion = 'text/x-html-insertion';
          this.textXml = 'text/xml';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
        });
        var $receiver_14 = _.kotlinx.html.MenuType.values();
        var tmp$47, tmp$46, tmp$45;
        var capacity_14 = $receiver_14.length / 0.75 + 1;
        var result_14 = new Kotlin.LinkedHashMap(Math.max(capacity_14 | 0, 16));
        tmp$47 = $receiver_14, tmp$46 = tmp$47.length;
        for (var tmp$45 = 0; tmp$45 !== tmp$46; ++tmp$45) {
          var element_14 = tmp$47[tmp$45];
          result_14.put_wn2jw4$(element_14.realValue, element_14);
        }
        this.menuTypeValues_fk7ed5$ = result_14;
        this.MetaHttpEquiv = Kotlin.createObject(null, function () {
          this.contentLanguage = 'content-language';
          this.contentType = 'content-type';
          this.defaultStyle = 'default-style';
          this.refresh = 'refresh';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['contentLanguage', 'contentType', 'defaultStyle', 'refresh']);
        });
        this.ObjectName = Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        });
        var $receiver_15 = _.kotlinx.html.ScriptType.values();
        var tmp$50, tmp$49, tmp$48;
        var capacity_15 = $receiver_15.length / 0.75 + 1;
        var result_15 = new Kotlin.LinkedHashMap(Math.max(capacity_15 | 0, 16));
        tmp$50 = $receiver_15, tmp$49 = tmp$50.length;
        for (var tmp$48 = 0; tmp$48 !== tmp$49; ++tmp$48) {
          var element_15 = tmp$50[tmp$48];
          result_15.put_wn2jw4$(element_15.realValue, element_15);
        }
        this.scriptTypeValues_u4spo3$ = result_15;
        this.StyleType = Kotlin.createObject(null, function () {
          this.textCss = 'text/css';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$('textCss');
        });
        this.StyleMedia = Kotlin.createObject(null, function () {
          this.screen = 'screen';
          this.print = 'print';
          this.tty = 'tty';
          this.tv = 'tv';
          this.projection = 'projection';
          this.handheld = 'handheld';
          this.braille = 'braille';
          this.aural = 'aural';
          this.all = 'all';
          this.values = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
        });
        var $receiver_16 = _.kotlinx.html.TextAreaWrap.values();
        var tmp$53, tmp$52, tmp$51;
        var capacity_16 = $receiver_16.length / 0.75 + 1;
        var result_16 = new Kotlin.LinkedHashMap(Math.max(capacity_16 | 0, 16));
        tmp$53 = $receiver_16, tmp$52 = tmp$53.length;
        for (var tmp$51 = 0; tmp$51 !== tmp$52; ++tmp$51) {
          var element_16 = tmp$53[tmp$51];
          result_16.put_wn2jw4$(element_16.realValue, element_16);
        }
        this.textAreaWrapValues_x1312m$ = result_16;
        var $receiver_17 = _.kotlinx.html.ThScope.values();
        var tmp$56, tmp$55, tmp$54;
        var capacity_17 = $receiver_17.length / 0.75 + 1;
        var result_17 = new Kotlin.LinkedHashMap(Math.max(capacity_17 | 0, 16));
        tmp$56 = $receiver_17, tmp$55 = tmp$56.length;
        for (var tmp$54 = 0; tmp$54 !== tmp$55; ++tmp$54) {
          var element_17 = tmp$56[tmp$54];
          result_17.put_wn2jw4$(element_17.realValue, element_17);
        }
        this.thScopeValues_et6ll6$ = result_17;
        this.attributeStringString_igy03y$ = new _.kotlinx.html.attributes.StringAttribute();
        this.attributeSetStringStringSet_pbdck2$ = new _.kotlinx.html.attributes.StringSetAttribute();
        this.attributeBooleanBoolean_pb22sw$ = new _.kotlinx.html.attributes.BooleanAttribute();
        this.attributeBooleanBooleanOnOff_lhmq3k$ = new _.kotlinx.html.attributes.BooleanAttribute('on', 'off');
        this.attributeBooleanTicker_fayr6m$ = new _.kotlinx.html.attributes.TickerAttribute();
        this.attributeButtonFormEncTypeEnumButtonFormEncTypeValues_rxeoz3$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonFormEncTypeValues_i0hsuk$);
        this.attributeButtonFormMethodEnumButtonFormMethodValues_rwlfmp$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonFormMethodValues_8o24rf$);
        this.attributeButtonTypeEnumButtonTypeValues_jbi423$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonTypeValues_i7s3a2$);
        this.attributeCommandTypeEnumCommandTypeValues_gos7w1$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.commandTypeValues_vxi3$);
        this.attributeDirEnumDirValues_jnixan$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.dirValues_57a1fn$);
        this.attributeDraggableEnumDraggableValues_6czmof$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.draggableValues_7puf5p$);
        this.attributeFormEncTypeEnumFormEncTypeValues_xge833$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.formEncTypeValues_29bbgm$);
        this.attributeFormMethodEnumFormMethodValues_5b3idf$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.formMethodValues_ewcw0j$);
        this.attributeIframeSandboxEnumIframeSandboxValues_se0w1d$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.iframeSandboxValues_g7xr21$);
        this.attributeInputFormEncTypeEnumInputFormEncTypeValues_dj9t33$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputFormEncTypeValues_8b1mmk$);
        this.attributeInputFormMethodEnumInputFormMethodValues_xxmjld$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputFormMethodValues_sb0hd1$);
        this.attributeInputTypeEnumInputTypeValues_6dor0x$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputTypeValues_rherxi$);
        this.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues_yv135b$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.keyGenKeyTypeValues_6m8br2$);
        this.attributeMenuTypeEnumMenuTypeValues_ve5pr9$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.menuTypeValues_fk7ed5$);
        this.attributeRunAtEnumRunAtValues_v16ys1$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.runAtValues_66urn0$);
        this.attributeScriptTypeEnumScriptTypeValues_o7xwcd$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.scriptTypeValues_u4spo3$);
        this.attributeTextAreaWrapEnumTextAreaWrapValues_hyb1ob$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.textAreaWrapValues_x1312m$);
        this.attributeThScopeEnumThScopeValues_nr17v5$ = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.thScopeValues_et6ll6$);
        this.emptyMap_krxeaj$ = Kotlin.modules['stdlib'].kotlin.emptyMap();
      }, /** @lends _.kotlinx.html */ {
        consumers: Kotlin.definePackage(function () {
          this.PredicateResults = Kotlin.createObject(null, function () {
            this.PASS = _.kotlinx.html.consumers.PredicateResult.object.PASS;
            this.SKIP = _.kotlinx.html.consumers.PredicateResult.object.SKIP;
            this.DROP = _.kotlinx.html.consumers.PredicateResult.object.DROP;
          });
        }, /** @lends _.kotlinx.html.consumers */ {
          TraceConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.id_mmqiut$ = 'ID-' + (new Date()).getTime() % 16384;
            this.path_dhg2cr$ = new Kotlin.ArrayList(1024);
          }, /** @lends _.kotlinx.html.consumers.TraceConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
              this.path_dhg2cr$.add_za3rmp$(tag.tagName);
              Kotlin.println('[' + this.id_mmqiut$ + ']  open ' + tag.tagName + ' path: ' + Kotlin.modules['stdlib'].kotlin.join_raq5lb$(this.path_dhg2cr$, ' > '));
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
              this.path_dhg2cr$.remove_za3lpa$(Kotlin.modules['stdlib'].kotlin.get_lastIndex_fvq2g0$(this.path_dhg2cr$));
              Kotlin.println('[' + this.id_mmqiut$ + '] close ' + tag.tagName + ' path: ' + Kotlin.modules['stdlib'].kotlin.join_raq5lb$(this.path_dhg2cr$, ' > '));
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
              Kotlin.println('[' + this.id_mmqiut$ + ']     ' + tag.tagName + '.' + attribute + ' changed to ' + Kotlin.toString(value));
            },
            finalize: function () {
              var v = this.downstream.finalize();
              Kotlin.println('[' + this.id_mmqiut$ + '] finalized: ' + v.toString());
              return v;
            },
            onTagContent_6bul2c$: function (content) {
              return this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              return this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              return this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            }
          }),
          trace_hbthkp$: function ($receiver) {
            return new _.kotlinx.html.consumers.TraceConsumer($receiver);
          },
          DelayedConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.delayed_y0ozld$ = null;
          }, /** @lends _.kotlinx.html.consumers.DelayedConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.processDelayedTag();
              this.delayed_y0ozld$ = tag;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              if (this.delayed_y0ozld$ == null || !Kotlin.equals(this.delayed_y0ozld$, tag)) {
                throw new Kotlin.IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
              }
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              if (this.delayed_y0ozld$ == null || !Kotlin.equals(this.delayed_y0ozld$, tag)) {
                throw new Kotlin.IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
              }
            },
            onTagEnd_tkgjla$: function (tag) {
              this.processDelayedTag();
              this.downstream.onTagEnd_tkgjla$(tag);
            },
            onTagContent_6bul2c$: function (content) {
              this.processDelayedTag();
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.processDelayedTag();
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            finalize: function () {
              this.processDelayedTag();
              return this.downstream.finalize();
            },
            processDelayedTag: function () {
              var tmp$0;
              (tmp$0 = this.delayed_y0ozld$) != null ? Kotlin.modules['stdlib'].kotlin.let_7hr6ff$(tmp$0, _.kotlinx.html.consumers.DelayedConsumer.processDelayedTag$f(this)) : null;
            }
          }, /** @lends _.kotlinx.html.consumers.DelayedConsumer */ {
            processDelayedTag$f: function (this$DelayedConsumer) {
              return function (tag) {
                this$DelayedConsumer.delayed_y0ozld$ = null;
                this$DelayedConsumer.downstream.onTagStart_tkgjla$(tag);
              };
            }
          }),
          delayed: function ($receiver) {
            return Kotlin.isType($receiver, _.kotlinx.html.consumers.DelayedConsumer) ? $receiver : new _.kotlinx.html.consumers.DelayedConsumer($receiver);
          },
          FinalizeConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream, block) {
            this.downstream = downstream;
            this.block = block;
            this.level_iudat5$ = 0;
          }, /** @lends _.kotlinx.html.consumers.FinalizeConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
              this.level_iudat5$++;
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
              this.level_iudat5$--;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            },
            onTagContent_6bul2c$: function (content) {
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            finalize: function () {
              return this.block(this.downstream.finalize(), this.level_iudat5$ > 0);
            }
          }),
          onFinalize_s52ojt$f: function (block) {
            return function (to, partial) {
              block(to, partial);
              return to;
            };
          },
          onFinalize_s52ojt$: function ($receiver, block) {
            return new _.kotlinx.html.consumers.FinalizeConsumer($receiver, _.kotlinx.html.consumers.onFinalize_s52ojt$f(block));
          },
          onFinalizeMap_v5sgtx$: function ($receiver, block) {
            return new _.kotlinx.html.consumers.FinalizeConsumer($receiver, block);
          },
          PredicateResult: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun() {
            $fun.baseInitializer.call(this);
          }, function () {
            return {
              PASS: new _.kotlinx.html.consumers.PredicateResult(),
              SKIP: new _.kotlinx.html.consumers.PredicateResult(),
              DROP: new _.kotlinx.html.consumers.PredicateResult()
            };
          }),
          FilterTagConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream, predicate) {
            this.downstream = downstream;
            this.predicate = predicate;
            this.currentLevel_6s7ijm$ = 0;
            this.skippedLevels_602ies$ = new Kotlin.PrimitiveNumberHashSet();
            this.dropLevel_69l90i$ = null;
          }, /** @lends _.kotlinx.html.consumers.FilterTagConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              var tmp$0;
              this.currentLevel_6s7ijm$++;
              if (this.dropLevel_69l90i$ == null) {
                tmp$0 = this.predicate(tag);
                if (tmp$0 === _.kotlinx.html.consumers.PredicateResult.object.PASS)
                  this.downstream.onTagStart_tkgjla$(tag);
                else if (tmp$0 === _.kotlinx.html.consumers.PredicateResult.object.SKIP)
                  this.skippedLevels_602ies$.add_za3rmp$(this.currentLevel_6s7ijm$);
                else if (tmp$0 === _.kotlinx.html.consumers.PredicateResult.object.DROP)
                  this.dropLevel_69l90i$ = this.currentLevel_6s7ijm$;
              }
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              throw new Kotlin.UnsupportedOperationException("this filter doesn't support attribute change");
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              throw new Kotlin.UnsupportedOperationException("this filter doesn't support attribute change");
            },
            onTagEnd_tkgjla$: function (tag) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagEnd_tkgjla$(tag);
              }
              this.skippedLevels_602ies$.remove_za3rmp$(this.currentLevel_6s7ijm$);
              if (this.dropLevel_69l90i$ === this.currentLevel_6s7ijm$) {
                this.dropLevel_69l90i$ = null;
              }
              this.currentLevel_6s7ijm$--;
            },
            onTagContent_6bul2c$: function (content) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagContent_6bul2c$(content);
              }
            },
            onTagContentEntity_ws8or7$: function (entity) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagContentEntity_ws8or7$(entity);
              }
            },
            canPassCurrentLevel: function () {
              return this.dropLevel_69l90i$ == null && !this.skippedLevels_602ies$.contains_za3rmp$(this.currentLevel_6s7ijm$);
            },
            finalize: function () {
              return this.downstream.finalize();
            }
          }),
          filter$f: function (predicate) {
            return function (it) {
              return predicate.call(_.kotlinx.html.consumers.PredicateResults, it);
            };
          },
          filter: function ($receiver, predicate) {
            return _.kotlinx.html.consumers.delayed(new _.kotlinx.html.consumers.FilterTagConsumer($receiver, _.kotlinx.html.consumers.filter$f(predicate)));
          },
          TimedResult: Kotlin.createClass(null, function (result, time) {
            this.result = result;
            this.time = time;
          }, /** @lends _.kotlinx.html.consumers.TimedResult.prototype */ {
            component1: function () {
              return this.result;
            },
            component2: function () {
              return this.time;
            },
            copy_hffbl0$: function (result, time) {
              return new _.kotlinx.html.consumers.TimedResult(result === void 0 ? this.result : result, time === void 0 ? this.time : time);
            },
            toString: function () {
              return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.result) | 0;
              result = result * 31 + Kotlin.hashCode(this.time) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time))));
            }
          }),
          get_out_gp06rh$: {value: function ($receiver) {
            return $receiver.result;
          }},
          TimeMeasureConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.start_tvef5u$ = new Date();
          }, /** @lends _.kotlinx.html.consumers.TimeMeasureConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
            },
            onTagContent_6bul2c$: function (content) {
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            finalize: function () {
              return new _.kotlinx.html.consumers.TimedResult(this.downstream.finalize(), Kotlin.Long.fromInt((new Date()).getTime()).subtract(Kotlin.Long.fromInt(this.start_tvef5u$.getTime())));
            }
          }),
          measureTime_hbthkp$: function ($receiver) {
            return new _.kotlinx.html.consumers.TimeMeasureConsumer($receiver);
          }
        }),
        EM: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'em', consumer, initialAttributes);
          this.$consumer_uli6gg$ = consumer;
        }, /** @lends _.kotlinx.html.EM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_uli6gg$;
            }
          }
        }),
        EMBED: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'embed', consumer, initialAttributes);
          this.$consumer_9u1qon$ = consumer;
        }, /** @lends _.kotlinx.html.EMBED.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9u1qon$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        FIELDSET: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'fieldset', consumer, initialAttributes);
          this.$consumer_8gh1e8$ = consumer;
        }, /** @lends _.kotlinx.html.FIELDSET.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8gh1e8$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        legEnd_1$f: function () {
        },
        legEnd_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LEGEND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        FIGURE: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'figure', consumer, initialAttributes);
          this.$consumer_3gw230$ = consumer;
        }, /** @lends _.kotlinx.html.FIGURE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3gw230$;
            }
          }
        }),
        legEnd_2$f: function () {
        },
        legEnd_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LEGEND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        FOOTER: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'footer', consumer, initialAttributes);
          this.$consumer_ymh6xv$ = consumer;
        }, /** @lends _.kotlinx.html.FOOTER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ymh6xv$;
            }
          }
        }),
        FORM: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'form', consumer, initialAttributes);
          this.$consumer_5x2o30$ = consumer;
        }, /** @lends _.kotlinx.html.FORM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_5x2o30$;
            }
          },
          acceptCharset: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'accept-charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'accept-charset', newValue);
            }
          },
          action: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'action');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'action', newValue);
            }
          },
          autoComplete: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBooleanOnOff_lhmq3k$.get_txhc1s$(this, 'autocomplete');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBooleanOnOff_lhmq3k$.set_lamm2d$(this, 'autocomplete', newValue);
            }
          },
          encType: {
            get: function () {
              return _.kotlinx.html.attributeFormEncTypeEnumFormEncTypeValues_xge833$.get_txhc1s$(this, 'enctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeFormEncTypeEnumFormEncTypeValues_xge833$.set_lamm2d$(this, 'enctype', newValue);
            }
          },
          method: {
            get: function () {
              return _.kotlinx.html.attributeFormMethodEnumFormMethodValues_5b3idf$.get_txhc1s$(this, 'method');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeFormMethodEnumFormMethodValues_5b3idf$.set_lamm2d$(this, 'method', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          novalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'novalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'novalidate', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'target', newValue);
            }
          }
        }),
        OBJECT_: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'object', consumer, initialAttributes);
          this.$consumer_o0el0w$ = consumer;
        }, /** @lends _.kotlinx.html.OBJECT_.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_o0el0w$;
            }
          },
          data: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'data');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'data', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          usemap: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'usemap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'usemap', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          classId: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'classid');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'classid', newValue);
            }
          }
        }),
        param$f: function () {
        },
        param: function ($receiver, name, value, block) {
          if (name === void 0)
            name = null;
          if (value === void 0)
            value = null;
          if (block === void 0)
            block = _.kotlinx.html.param$f;
          _.kotlinx.html.visit(new _.kotlinx.html.PARAM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('value', value)])), $receiver.consumer), block);
        },
        OL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ol', consumer, initialAttributes);
          this.$consumer_ksdbq3$ = consumer;
        }, /** @lends _.kotlinx.html.OL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ksdbq3$;
            }
          },
          start: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'start');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'start', newValue);
            }
          },
          reversed: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'reversed');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'reversed', newValue);
            }
          }
        }),
        li_1$f: function () {
        },
        li_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        OPTGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'optgroup', consumer, initialAttributes);
          this.$consumer_aoyfu4$ = consumer;
        }, /** @lends _.kotlinx.html.OPTGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_aoyfu4$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'label', newValue);
            }
          }
        }),
        option_2$f: function () {
        },
        option_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        option_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        option_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.option_3$f(content));
        },
        OPTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'option', consumer, initialAttributes);
          this.$consumer_8gmcjh$ = consumer;
        }, /** @lends _.kotlinx.html.OPTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8gmcjh$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          selected: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'selected');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'selected', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'label', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        OUTPUT: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'output', consumer, initialAttributes);
          this.$consumer_k1fy89$ = consumer;
        }, /** @lends _.kotlinx.html.OUTPUT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_k1fy89$;
            }
          },
          for_: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'for');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'for', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        CommonAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.CommonAttributeGroupFacade.prototype */ {
          enableTheming: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'EnableTheming');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'EnableTheming', newValue);
            }
          },
          enableViewState: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'EnableViewState');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'EnableViewState', newValue);
            }
          },
          skinID: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'SkinID');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'SkinID', newValue);
            }
          },
          visible: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'Visible');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'Visible', newValue);
            }
          },
          accessKey: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'accesskey');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'accesskey', newValue);
            }
          },
          classes: {
            get: function () {
              return _.kotlinx.html.attributeSetStringStringSet_pbdck2$.get_txhc1s$(this, 'class');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeSetStringStringSet_pbdck2$.set_lamm2d$(this, 'class', newValue);
            }
          },
          contentEditable: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'contenteditable');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'contenteditable', newValue);
            }
          },
          contextMenu: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'contextmenu');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'contextmenu', newValue);
            }
          },
          dataFolderName: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'data-FolderName');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'data-FolderName', newValue);
            }
          },
          dataMsgId: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'data-MsgId');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'data-MsgId', newValue);
            }
          },
          dir: {
            get: function () {
              return _.kotlinx.html.attributeDirEnumDirValues_jnixan$.get_txhc1s$(this, 'dir');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeDirEnumDirValues_jnixan$.set_lamm2d$(this, 'dir', newValue);
            }
          },
          draggable: {
            get: function () {
              return _.kotlinx.html.attributeDraggableEnumDraggableValues_6czmof$.get_txhc1s$(this, 'draggable');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeDraggableEnumDraggableValues_6czmof$.set_lamm2d$(this, 'draggable', newValue);
            }
          },
          hidden: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'hidden');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'hidden', newValue);
            }
          },
          id: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'id');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'id', newValue);
            }
          },
          itemProp: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'itemprop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'itemprop', newValue);
            }
          },
          onAbort: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onabort');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onabort', newValue);
            }
          },
          onBlur: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onblur');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onblur', newValue);
            }
          },
          onCanPlay: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'oncanplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'oncanplay', newValue);
            }
          },
          onCanPlayThrough: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'oncanplaythrough');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'oncanplaythrough', newValue);
            }
          },
          onChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onchange', newValue);
            }
          },
          onClick: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onclick');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onclick', newValue);
            }
          },
          onContextMenu: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'oncontextmenu');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'oncontextmenu', newValue);
            }
          },
          onDoubleClick: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondblclick');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondblclick', newValue);
            }
          },
          onDrag: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondrag');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondrag', newValue);
            }
          },
          onDragEnter: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondragenter');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondragenter', newValue);
            }
          },
          onDragLeave: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondragleave');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondragleave', newValue);
            }
          },
          onDragOver: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondragover');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondragover', newValue);
            }
          },
          onDragStart: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondragstart');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondragstart', newValue);
            }
          },
          onDrop: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondrop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondrop', newValue);
            }
          },
          onDurationChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ondurationchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ondurationchange', newValue);
            }
          },
          onEmptied: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onemptied');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onemptied', newValue);
            }
          },
          onEnded: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onended');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onended', newValue);
            }
          },
          onError: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onerror');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onerror', newValue);
            }
          },
          onFocus: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onfocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onfocus', newValue);
            }
          },
          onFormChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onformchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onformchange', newValue);
            }
          },
          onFormInput: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onforminput');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onforminput', newValue);
            }
          },
          onInput: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'oninput');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'oninput', newValue);
            }
          },
          onInvalid: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'oninvalid');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'oninvalid', newValue);
            }
          },
          onKeyDown: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onkeydown');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onkeydown', newValue);
            }
          },
          onKeyPress: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onkeypress');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onkeypress', newValue);
            }
          },
          onKeyUp: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onkeyup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onkeyup', newValue);
            }
          },
          onLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onload', newValue);
            }
          },
          onLoadedData: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onloadeddata');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onloadeddata', newValue);
            }
          },
          onLoadedMetaData: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onloadedmetadata');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onloadedmetadata', newValue);
            }
          },
          onLoadStart: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onloadstart');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onloadstart', newValue);
            }
          },
          onMouseDown: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmousedown');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmousedown', newValue);
            }
          },
          onMouseMove: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmousemove');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmousemove', newValue);
            }
          },
          onMouseOut: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmouseout');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmouseout', newValue);
            }
          },
          onMouseOver: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmouseover');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmouseover', newValue);
            }
          },
          onMouseUp: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmouseup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmouseup', newValue);
            }
          },
          onMouseWheel: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmousewheel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmousewheel', newValue);
            }
          },
          onPause: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onpause');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onpause', newValue);
            }
          },
          onPlay: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onplay', newValue);
            }
          },
          onPlaying: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onplaying');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onplaying', newValue);
            }
          },
          onProgress: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onprogress');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onprogress', newValue);
            }
          },
          onRateChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onratechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onratechange', newValue);
            }
          },
          onReadyStateChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onreadystatechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onreadystatechange', newValue);
            }
          },
          onScroll: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onscroll');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onscroll', newValue);
            }
          },
          onSeeked: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onseeked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onseeked', newValue);
            }
          },
          onSeeking: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onseeking');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onseeking', newValue);
            }
          },
          onSelect: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onselect');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onselect', newValue);
            }
          },
          onShow: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onshow');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onshow', newValue);
            }
          },
          onStalled: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onstalled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onstalled', newValue);
            }
          },
          onSubmit: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onsubmit');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onsubmit', newValue);
            }
          },
          onSuspend: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onsuspend');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onsuspend', newValue);
            }
          },
          onTimeUpdate: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ontimeupdate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ontimeupdate', newValue);
            }
          },
          onVolumeChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onvolumechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onvolumechange', newValue);
            }
          },
          onWaiting: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onwaiting');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onwaiting', newValue);
            }
          },
          role: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'role');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'role', newValue);
            }
          },
          runAt: {
            get: function () {
              return _.kotlinx.html.attributeRunAtEnumRunAtValues_v16ys1$.get_txhc1s$(this, 'runat');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeRunAtEnumRunAtValues_v16ys1$.set_lamm2d$(this, 'runat', newValue);
            }
          },
          spellCheck: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'spellcheck');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'spellcheck', newValue);
            }
          },
          style: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'style');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'style', newValue);
            }
          },
          subject: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'subject');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'subject', newValue);
            }
          },
          tabIndex: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'tabIndex');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'tabIndex', newValue);
            }
          },
          title: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'title');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'title', newValue);
            }
          }
        }),
        FormServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.FormServerAttributeGroupFacade.prototype */ {
          defaultButton: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'DefaultButton');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'DefaultButton', newValue);
            }
          },
          defaultFocus: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'DefaultFocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'DefaultFocus', newValue);
            }
          },
          submitDisabledControls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'SubmitDisabledControls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'SubmitDisabledControls', newValue);
            }
          }
        }),
        InputServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.InputServerAttributeGroupFacade.prototype */ {
          causesValidation: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean_pb22sw$.get_txhc1s$(this, 'CausesValidation');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean_pb22sw$.set_lamm2d$(this, 'CausesValidation', newValue);
            }
          },
          validationGroup: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ValidationGroup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ValidationGroup', newValue);
            }
          }
        }),
        SelectServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.SelectServerAttributeGroupFacade.prototype */ {
          dataSourceID: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'DataSourceID');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'DataSourceID', newValue);
            }
          },
          dataTextField: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'DataTextField');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'DataTextField', newValue);
            }
          },
          dataValueField: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'DataValueField');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'DataValueField', newValue);
            }
          }
        }),
        UL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ul', consumer, initialAttributes);
          this.$consumer_fgjzkv$ = consumer;
        }, /** @lends _.kotlinx.html.UL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fgjzkv$;
            }
          }
        }),
        li_2$f: function () {
        },
        li_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        Dir: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_agec4m$ = realValue;
        }, function () {
          return {
            ltr: new _.kotlinx.html.Dir('ltr'),
            rtl: new _.kotlinx.html.Dir('rtl')
          };
        }, /** @lends _.kotlinx.html.Dir.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_agec4m$;
            }
          }
        }),
        Draggable: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_b0hpeu$ = realValue;
        }, function () {
          return {
            true_: new _.kotlinx.html.Draggable('true'),
            false_: new _.kotlinx.html.Draggable('false'),
            auto: new _.kotlinx.html.Draggable('auto')
          };
        }, /** @lends _.kotlinx.html.Draggable.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_b0hpeu$;
            }
          }
        }),
        RunAt: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_c6w72h$ = realValue;
        }, function () {
          return {
            server: new _.kotlinx.html.RunAt('server')
          };
        }, /** @lends _.kotlinx.html.RunAt.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_c6w72h$;
            }
          }
        }),
        AreaShape: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_4h0er1$ = realValue;
        }, function () {
          return {
            rect: new _.kotlinx.html.AreaShape('rect'),
            circle: new _.kotlinx.html.AreaShape('circle'),
            poly: new _.kotlinx.html.AreaShape('poly'),
            default: new _.kotlinx.html.AreaShape('default')
          };
        }, /** @lends _.kotlinx.html.AreaShape.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_4h0er1$;
            }
          }
        }),
        ButtonFormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_fez5ih$ = realValue;
        }, function () {
          return {
            multipartFormData: new _.kotlinx.html.ButtonFormEncType('multipart/form-data'),
            applicationXWwwFormUrlEncoded: new _.kotlinx.html.ButtonFormEncType('application/x-www-form-urlencoded'),
            textPlain: new _.kotlinx.html.ButtonFormEncType('text/plain')
          };
        }, /** @lends _.kotlinx.html.ButtonFormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_fez5ih$;
            }
          }
        }),
        ButtonFormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_6g6hbs$ = realValue;
        }, function () {
          return {
            get: new _.kotlinx.html.ButtonFormMethod('get'),
            post: new _.kotlinx.html.ButtonFormMethod('post'),
            put: new _.kotlinx.html.ButtonFormMethod('put'),
            delete: new _.kotlinx.html.ButtonFormMethod('delete')
          };
        }, /** @lends _.kotlinx.html.ButtonFormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_6g6hbs$;
            }
          }
        }),
        ButtonType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_5rron7$ = realValue;
        }, function () {
          return {
            button: new _.kotlinx.html.ButtonType('button'),
            reset: new _.kotlinx.html.ButtonType('reset'),
            submit: new _.kotlinx.html.ButtonType('submit')
          };
        }, /** @lends _.kotlinx.html.ButtonType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_5rron7$;
            }
          }
        }),
        CommandType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_zclhmq$ = realValue;
        }, function () {
          return {
            command: new _.kotlinx.html.CommandType('command'),
            checkBox: new _.kotlinx.html.CommandType('checkbox'),
            radio: new _.kotlinx.html.CommandType('radio')
          };
        }, /** @lends _.kotlinx.html.CommandType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_zclhmq$;
            }
          }
        }),
        FormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_z1dq3t$ = realValue;
        }, function () {
          return {
            multipartFormData: new _.kotlinx.html.FormEncType('multipart/form-data'),
            applicationXWwwFormUrlEncoded: new _.kotlinx.html.FormEncType('application/x-www-form-urlencoded'),
            textPlain: new _.kotlinx.html.FormEncType('text/plain')
          };
        }, /** @lends _.kotlinx.html.FormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_z1dq3t$;
            }
          }
        }),
        FormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_pfz43u$ = realValue;
        }, function () {
          return {
            get: new _.kotlinx.html.FormMethod('get'),
            post: new _.kotlinx.html.FormMethod('post'),
            put: new _.kotlinx.html.FormMethod('put'),
            delete: new _.kotlinx.html.FormMethod('delete')
          };
        }, /** @lends _.kotlinx.html.FormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_pfz43u$;
            }
          }
        }),
        IframeSandbox: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_215658$ = realValue;
        }, function () {
          return {
            allowSameOrigin: new _.kotlinx.html.IframeSandbox('allow-same-origin'),
            allowFormS: new _.kotlinx.html.IframeSandbox('allow-forms'),
            allowScripts: new _.kotlinx.html.IframeSandbox('allow-scripts')
          };
        }, /** @lends _.kotlinx.html.IframeSandbox.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_215658$;
            }
          }
        }),
        InputType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_dufvwj$ = realValue;
        }, function () {
          return {
            button: new _.kotlinx.html.InputType('button'),
            checkBox: new _.kotlinx.html.InputType('checkbox'),
            color: new _.kotlinx.html.InputType('color'),
            date: new _.kotlinx.html.InputType('date'),
            dateTime: new _.kotlinx.html.InputType('datetime'),
            dateTimeLocal: new _.kotlinx.html.InputType('datetime-local'),
            email: new _.kotlinx.html.InputType('email'),
            file: new _.kotlinx.html.InputType('file'),
            hidden: new _.kotlinx.html.InputType('hidden'),
            image: new _.kotlinx.html.InputType('image'),
            month: new _.kotlinx.html.InputType('month'),
            number: new _.kotlinx.html.InputType('number'),
            password: new _.kotlinx.html.InputType('password'),
            radio: new _.kotlinx.html.InputType('radio'),
            range: new _.kotlinx.html.InputType('range'),
            reset: new _.kotlinx.html.InputType('reset'),
            search: new _.kotlinx.html.InputType('search'),
            submit: new _.kotlinx.html.InputType('submit'),
            text: new _.kotlinx.html.InputType('text'),
            tel: new _.kotlinx.html.InputType('tel'),
            time: new _.kotlinx.html.InputType('time'),
            url: new _.kotlinx.html.InputType('url'),
            week: new _.kotlinx.html.InputType('week')
          };
        }, /** @lends _.kotlinx.html.InputType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_dufvwj$;
            }
          }
        }),
        InputFormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_yc4k7$ = realValue;
        }, function () {
          return {
            multipartFormData: new _.kotlinx.html.InputFormEncType('multipart/form-data'),
            applicationXWwwFormUrlEncoded: new _.kotlinx.html.InputFormEncType('application/x-www-form-urlencoded'),
            textPlain: new _.kotlinx.html.InputFormEncType('text/plain')
          };
        }, /** @lends _.kotlinx.html.InputFormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_yc4k7$;
            }
          }
        }),
        InputFormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_f34bg8$ = realValue;
        }, function () {
          return {
            get: new _.kotlinx.html.InputFormMethod('get'),
            post: new _.kotlinx.html.InputFormMethod('post'),
            put: new _.kotlinx.html.InputFormMethod('put'),
            delete: new _.kotlinx.html.InputFormMethod('delete')
          };
        }, /** @lends _.kotlinx.html.InputFormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_f34bg8$;
            }
          }
        }),
        KeyGenKeyType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_wj0a1r$ = realValue;
        }, function () {
          return {
            rsa: new _.kotlinx.html.KeyGenKeyType('rsa')
          };
        }, /** @lends _.kotlinx.html.KeyGenKeyType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_wj0a1r$;
            }
          }
        }),
        MenuType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_rdn7di$ = realValue;
        }, function () {
          return {
            context: new _.kotlinx.html.MenuType('context'),
            toolbar: new _.kotlinx.html.MenuType('toolbar'),
            list: new _.kotlinx.html.MenuType('list')
          };
        }, /** @lends _.kotlinx.html.MenuType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_rdn7di$;
            }
          }
        }),
        ScriptType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_cf3b8q$ = realValue;
        }, function () {
          return {
            textEcmaScript: new _.kotlinx.html.ScriptType('text/ecmascript'),
            textJavaScript: new _.kotlinx.html.ScriptType('text/javascript'),
            textJavaScript10: new _.kotlinx.html.ScriptType('text/javascript1.0'),
            textJavaScript11: new _.kotlinx.html.ScriptType('text/javascript1.1'),
            textJavaScript12: new _.kotlinx.html.ScriptType('text/javascript1.2'),
            textJavaScript13: new _.kotlinx.html.ScriptType('text/javascript1.3'),
            textJavaScript14: new _.kotlinx.html.ScriptType('text/javascript1.4'),
            textJavaScript15: new _.kotlinx.html.ScriptType('text/javascript1.5'),
            textJScript: new _.kotlinx.html.ScriptType('text/jscript'),
            textXJavaScript: new _.kotlinx.html.ScriptType('text/x-javascript'),
            textXEcmaScript: new _.kotlinx.html.ScriptType('text/x-ecmascript'),
            textVbScript: new _.kotlinx.html.ScriptType('text/vbscript')
          };
        }, /** @lends _.kotlinx.html.ScriptType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_cf3b8q$;
            }
          }
        }),
        TextAreaWrap: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_pww97$ = realValue;
        }, function () {
          return {
            hard: new _.kotlinx.html.TextAreaWrap('hard'),
            soft: new _.kotlinx.html.TextAreaWrap('soft')
          };
        }, /** @lends _.kotlinx.html.TextAreaWrap.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_pww97$;
            }
          }
        }),
        ThScope: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_r227yx$ = realValue;
        }, function () {
          return {
            col: new _.kotlinx.html.ThScope('col'),
            colGroup: new _.kotlinx.html.ThScope('colgroup'),
            row: new _.kotlinx.html.ThScope('row'),
            rowGroup: new _.kotlinx.html.ThScope('rowgroup')
          };
        }, /** @lends _.kotlinx.html.ThScope.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_r227yx$;
            }
          }
        }),
        Q: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'q', consumer, initialAttributes);
          this.$consumer_9o67cv$ = consumer;
        }, /** @lends _.kotlinx.html.Q.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9o67cv$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'cite', newValue);
            }
          }
        }),
        A: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'a', consumer, initialAttributes);
          this.$consumer_9cydyp$ = consumer;
        }, /** @lends _.kotlinx.html.A.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9cydyp$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'href', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'target', newValue);
            }
          },
          ping: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ping');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ping', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rel', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        ABBR: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'abbr', consumer, initialAttributes);
          this.$consumer_nnbvlz$ = consumer;
        }, /** @lends _.kotlinx.html.ABBR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nnbvlz$;
            }
          }
        }),
        ADDRESS: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'address', consumer, initialAttributes);
          this.$consumer_vyvh44$ = consumer;
        }, /** @lends _.kotlinx.html.ADDRESS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vyvh44$;
            }
          }
        }),
        AREA: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'area', consumer, initialAttributes);
          this.$consumer_nwdn8r$ = consumer;
        }, /** @lends _.kotlinx.html.AREA.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nwdn8r$;
            }
          },
          coords: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'coords');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'coords', newValue);
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'href', newValue);
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'alt', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'target', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'media', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rel', newValue);
            }
          },
          ping: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ping');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ping', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        ARTICLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'article', consumer, initialAttributes);
          this.$consumer_kzcnja$ = consumer;
        }, /** @lends _.kotlinx.html.ARTICLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_kzcnja$;
            }
          }
        }),
        ASIDE: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'aside', consumer, initialAttributes);
          this.$consumer_fgcwmg$ = consumer;
        }, /** @lends _.kotlinx.html.ASIDE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fgcwmg$;
            }
          }
        }),
        AUDIO: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'audio', consumer, initialAttributes);
          this.$consumer_3txo1y$ = consumer;
        }, /** @lends _.kotlinx.html.AUDIO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3txo1y$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          autoBuffer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autobuffer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autobuffer', newValue);
            }
          },
          autoPlay: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autoplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autoplay', newValue);
            }
          },
          loop: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'loop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'loop', newValue);
            }
          },
          controls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'controls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'controls', newValue);
            }
          }
        }),
        source$f: function () {
        },
        source: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SOURCE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        H1: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h1', consumer, initialAttributes);
          this.$consumer_wfwiz3$ = consumer;
        }, /** @lends _.kotlinx.html.H1.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wfwiz3$;
            }
          }
        }),
        H2: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h2', consumer, initialAttributes);
          this.$consumer_t6wk6m$ = consumer;
        }, /** @lends _.kotlinx.html.H2.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_t6wk6m$;
            }
          }
        }),
        H3: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h3', consumer, initialAttributes);
          this.$consumer_pxwle5$ = consumer;
        }, /** @lends _.kotlinx.html.H3.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_pxwle5$;
            }
          }
        }),
        H4: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h4', consumer, initialAttributes);
          this.$consumer_mowmlo$ = consumer;
        }, /** @lends _.kotlinx.html.H4.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mowmlo$;
            }
          }
        }),
        H5: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h5', consumer, initialAttributes);
          this.$consumer_jfwnt7$ = consumer;
        }, /** @lends _.kotlinx.html.H5.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_jfwnt7$;
            }
          }
        }),
        H6: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h6', consumer, initialAttributes);
          this.$consumer_g6wp0q$ = consumer;
        }, /** @lends _.kotlinx.html.H6.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_g6wp0q$;
            }
          }
        }),
        HEAD: Kotlin.createClass(function () {
          return [_.kotlinx.html.MetaDataContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'head', consumer, initialAttributes);
          this.$consumer_9ttdk$ = consumer;
        }, /** @lends _.kotlinx.html.HEAD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9ttdk$;
            }
          }
        }),
        HEADER: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'header', consumer, initialAttributes);
          this.$consumer_9fofmd$ = consumer;
        }, /** @lends _.kotlinx.html.HEADER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9fofmd$;
            }
          }
        }),
        HGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'hgroup', consumer, initialAttributes);
          this.$consumer_e38cyp$ = consumer;
        }, /** @lends _.kotlinx.html.HGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_e38cyp$;
            }
          }
        }),
        h1_1$f: function () {
        },
        h1_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H1(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h2_1$f: function () {
        },
        h2_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H2(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h3_1$f: function () {
        },
        h3_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H3(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h4_1$f: function () {
        },
        h4_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H4(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h5_1$f: function () {
        },
        h5_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H5(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h6_1$f: function () {
        },
        h6_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H6(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        HR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'hr', consumer, initialAttributes);
          this.$consumer_3ryb5e$ = consumer;
        }, /** @lends _.kotlinx.html.HR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3ryb5e$;
            }
          }
        }),
        HTML: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'html', consumer, initialAttributes);
          this.$consumer_4tvvd9$ = consumer;
        }, /** @lends _.kotlinx.html.HTML.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4tvvd9$;
            }
          },
          manifest: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'manifest');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'manifest', newValue);
            }
          }
        }),
        body$f: function () {
        },
        body: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.body$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BODY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        head$f: function () {
        },
        head: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.head$f;
          _.kotlinx.html.visit(new _.kotlinx.html.HEAD(_.kotlinx.html.emptyMap_krxeaj$, $receiver.consumer), block);
        },
        P: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'p', consumer, initialAttributes);
          this.$consumer_cx665c$ = consumer;
        }, /** @lends _.kotlinx.html.P.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_cx665c$;
            }
          }
        }),
        PARAM: Kotlin.createClass(function () {
          return [_.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'param', consumer, initialAttributes);
          this.$consumer_su9r8j$ = consumer;
        }, /** @lends _.kotlinx.html.PARAM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_su9r8j$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        PRE: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'pre', consumer, initialAttributes);
          this.$consumer_ah977x$ = consumer;
        }, /** @lends _.kotlinx.html.PRE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ah977x$;
            }
          }
        }),
        PROGRESS: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'progress', consumer, initialAttributes);
          this.$consumer_93pr5h$ = consumer;
        }, /** @lends _.kotlinx.html.PROGRESS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_93pr5h$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'max', newValue);
            }
          }
        }),
        TABLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'table', consumer, initialAttributes);
          this.$consumer_fhr9j6$ = consumer;
        }, /** @lends _.kotlinx.html.TABLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fhr9j6$;
            }
          },
          summary: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'summary');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'summary', newValue);
            }
          }
        }),
        caption$f: function () {
        },
        caption: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.caption$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CAPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        colGroup$f: function () {
        },
        colGroup: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroup$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COLGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        thead$f: function () {
        },
        thead: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.thead$f;
          _.kotlinx.html.visit(new _.kotlinx.html.THEAD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        tfoot$f: function () {
        },
        tfoot: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tfoot$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TFOOT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        tbody$f: function () {
        },
        tbody: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tbody$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TBODY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        tr$f: function () {
        },
        tr: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        TBODY: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tbody', consumer, initialAttributes);
          this.$consumer_1yanuu$ = consumer;
        }, /** @lends _.kotlinx.html.TBODY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_1yanuu$;
            }
          }
        }),
        tr_1$f: function () {
        },
        tr_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        TD: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'td', consumer, initialAttributes);
          this.$consumer_urteoo$ = consumer;
        }, /** @lends _.kotlinx.html.TD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_urteoo$;
            }
          },
          headers: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'headers');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'headers', newValue);
            }
          },
          rowSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rowspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rowspan', newValue);
            }
          },
          colSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'colspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'colspan', newValue);
            }
          }
        }),
        TEXTAREA: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'textarea', consumer, initialAttributes);
          this.$consumer_wq10ki$ = consumer;
        }, /** @lends _.kotlinx.html.TEXTAREA.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wq10ki$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          maxLength: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'maxlength');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'maxlength', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          placeholder: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'placeholder');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'placeholder', newValue);
            }
          },
          readonly: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'readonly');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'readonly', newValue);
            }
          },
          required: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'required');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'required', newValue);
            }
          },
          rows: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rows');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rows', newValue);
            }
          },
          cols: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'cols');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'cols', newValue);
            }
          },
          wrap: {
            get: function () {
              return _.kotlinx.html.attributeTextAreaWrapEnumTextAreaWrapValues_hyb1ob$.get_txhc1s$(this, 'wrap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeTextAreaWrapEnumTextAreaWrapValues_hyb1ob$.set_lamm2d$(this, 'wrap', newValue);
            }
          }
        }),
        TFOOT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tfoot', consumer, initialAttributes);
          this.$consumer_n52x66$ = consumer;
        }, /** @lends _.kotlinx.html.TFOOT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_n52x66$;
            }
          }
        }),
        tr_2$f: function () {
        },
        tr_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        TH: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'th', consumer, initialAttributes);
          this.$consumer_r9as4k$ = consumer;
        }, /** @lends _.kotlinx.html.TH.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_r9as4k$;
            }
          },
          headers: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'headers');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'headers', newValue);
            }
          },
          rowSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rowspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rowspan', newValue);
            }
          },
          colSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'colspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'colspan', newValue);
            }
          },
          scope: {
            get: function () {
              return _.kotlinx.html.attributeThScopeEnumThScopeValues_nr17v5$.get_txhc1s$(this, 'scope');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeThScopeEnumThScopeValues_nr17v5$.set_lamm2d$(this, 'scope', newValue);
            }
          }
        }),
        THEAD: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'thead', consumer, initialAttributes);
          this.$consumer_xyiiik$ = consumer;
        }, /** @lends _.kotlinx.html.THEAD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xyiiik$;
            }
          }
        }),
        tr_3$f: function () {
        },
        tr_3: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_3$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        TIME: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'time', consumer, initialAttributes);
          this.$consumer_gwecvf$ = consumer;
        }, /** @lends _.kotlinx.html.TIME.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gwecvf$;
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        TITLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'title', consumer, initialAttributes);
          this.$consumer_f3mjeg$ = consumer;
        }, /** @lends _.kotlinx.html.TITLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_f3mjeg$;
            }
          }
        }),
        TR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tr', consumer, initialAttributes);
          this.$consumer_58ovs6$ = consumer;
        }, /** @lends _.kotlinx.html.TR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_58ovs6$;
            }
          }
        }),
        th$f: function () {
        },
        th: function ($receiver, scope, classes, block) {
          var tmp$0;
          if (scope === void 0)
            scope = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.th$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', scope != null ? _.kotlinx.html.attributes.enumEncode(scope) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        colTh$f: function () {
        },
        colTh: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colTh$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', _.kotlinx.html.ThScope.object.col.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        colGroupTh$f: function () {
        },
        colGroupTh: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroupTh$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', _.kotlinx.html.ThScope.object.colGroup.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rowTh$f: function () {
        },
        rowTh: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rowTh$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', _.kotlinx.html.ThScope.object.row.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rowGroupTh$f: function () {
        },
        rowGroupTh: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rowGroupTh$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', _.kotlinx.html.ThScope.object.rowGroup.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        td$f: function () {
        },
        td: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.td$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        DATALIST: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'datalist', consumer, initialAttributes);
          this.$consumer_421si8$ = consumer;
        }, /** @lends _.kotlinx.html.DATALIST.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_421si8$;
            }
          }
        }),
        option$f: function () {
        },
        option: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        option_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        option_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.option_1$f(content));
        },
        DD: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dd', consumer, initialAttributes);
          this.$consumer_ij8q54$ = consumer;
        }, /** @lends _.kotlinx.html.DD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ij8q54$;
            }
          }
        }),
        DEL: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'del', consumer, initialAttributes);
          this.$consumer_6pddi3$ = consumer;
        }, /** @lends _.kotlinx.html.DEL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6pddi3$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'cite', newValue);
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        DETAILS: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'details', consumer, initialAttributes);
          this.$consumer_95b1f6$ = consumer;
        }, /** @lends _.kotlinx.html.DETAILS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_95b1f6$;
            }
          },
          open: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'open');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'open', newValue);
            }
          }
        }),
        legEnd$f: function () {
        },
        legEnd: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LEGEND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        DFN: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dfn', consumer, initialAttributes);
          this.$consumer_s3vuck$ = consumer;
        }, /** @lends _.kotlinx.html.DFN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_s3vuck$;
            }
          }
        }),
        DIALOG: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dialog', consumer, initialAttributes);
          this.$consumer_vt3tdc$ = consumer;
        }, /** @lends _.kotlinx.html.DIALOG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vt3tdc$;
            }
          }
        }),
        DIV: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'div', consumer, initialAttributes);
          this.$consumer_g0kjmp$ = consumer;
        }, /** @lends _.kotlinx.html.DIV.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_g0kjmp$;
            }
          }
        }),
        DL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dl', consumer, initialAttributes);
          this.$consumer_7gr06o$ = consumer;
        }, /** @lends _.kotlinx.html.DL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_7gr06o$;
            }
          }
        }),
        dd$f: function () {
        },
        dd: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dd$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        dt$f: function () {
        },
        dt: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dt$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        DT: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dt', consumer, initialAttributes);
          this.$consumer_xgqqig$ = consumer;
        }, /** @lends _.kotlinx.html.DT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xgqqig$;
            }
          }
        }),
        VAR_: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'var', consumer, initialAttributes);
          this.$consumer_tvpxsw$ = consumer;
        }, /** @lends _.kotlinx.html.VAR_.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_tvpxsw$;
            }
          }
        }),
        VIDEO: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'video', consumer, initialAttributes);
          this.$consumer_2b7pjf$ = consumer;
        }, /** @lends _.kotlinx.html.VIDEO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_2b7pjf$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          autoBuffer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autobuffer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autobuffer', newValue);
            }
          },
          autoPlay: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autoplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autoplay', newValue);
            }
          },
          loop: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'loop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'loop', newValue);
            }
          },
          controls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'controls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'controls', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          poster: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'poster');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'poster', newValue);
            }
          }
        }),
        source_1$f: function () {
        },
        source_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SOURCE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        B: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'b', consumer, initialAttributes);
          this.$consumer_clycr6$ = consumer;
        }, /** @lends _.kotlinx.html.B.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_clycr6$;
            }
          }
        }),
        BASE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'base', consumer, initialAttributes);
          this.$consumer_k44xjt$ = consumer;
        }, /** @lends _.kotlinx.html.BASE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_k44xjt$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'href', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'target', newValue);
            }
          }
        }),
        BDI: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'bdi', consumer, initialAttributes);
          this.$consumer_shs1op$ = consumer;
        }, /** @lends _.kotlinx.html.BDI.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_shs1op$;
            }
          }
        }),
        BDO: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'bdo', consumer, initialAttributes);
          this.$consumer_8zs8xv$ = consumer;
        }, /** @lends _.kotlinx.html.BDO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8zs8xv$;
            }
          }
        }),
        BLOCKQUOTE: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'blockquote', consumer, initialAttributes);
          this.$consumer_ca9c2f$ = consumer;
        }, /** @lends _.kotlinx.html.BLOCKQUOTE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ca9c2f$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'cite', newValue);
            }
          }
        }),
        BODY: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'body', consumer, initialAttributes);
          this.$consumer_ze4oza$ = consumer;
        }, /** @lends _.kotlinx.html.BODY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ze4oza$;
            }
          },
          onAfterprint: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onafterprint');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onafterprint', newValue);
            }
          },
          onBeforeprint: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onbeforeprint');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onbeforeprint', newValue);
            }
          },
          onBeforeunLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onbeforeunload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onbeforeunload', newValue);
            }
          },
          onHashChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onhashchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onhashchange', newValue);
            }
          },
          onMessage: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onmessage');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onmessage', newValue);
            }
          },
          onOffline: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onoffline');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onoffline', newValue);
            }
          },
          onOnline: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'ononline');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'ononline', newValue);
            }
          },
          onPopstate: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onpopstate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onpopstate', newValue);
            }
          },
          onRedo: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onredo');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onredo', newValue);
            }
          },
          onResize: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onresize');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onresize', newValue);
            }
          },
          onStorage: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onstorage');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onstorage', newValue);
            }
          },
          onUndo: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onundo');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onundo', newValue);
            }
          },
          onUnLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'onunload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'onunload', newValue);
            }
          }
        }),
        BR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'br', consumer, initialAttributes);
          this.$consumer_wgz05k$ = consumer;
        }, /** @lends _.kotlinx.html.BR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wgz05k$;
            }
          }
        }),
        BUTTON: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'button', consumer, initialAttributes);
          this.$consumer_4939pi$ = consumer;
        }, /** @lends _.kotlinx.html.BUTTON.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4939pi$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          formAction: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'formaction');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'formaction', newValue);
            }
          },
          formEncType: {
            get: function () {
              return _.kotlinx.html.attributeButtonFormEncTypeEnumButtonFormEncTypeValues_rxeoz3$.get_txhc1s$(this, 'formenctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonFormEncTypeEnumButtonFormEncTypeValues_rxeoz3$.set_lamm2d$(this, 'formenctype', newValue);
            }
          },
          formMethod: {
            get: function () {
              return _.kotlinx.html.attributeButtonFormMethodEnumButtonFormMethodValues_rwlfmp$.get_txhc1s$(this, 'formmethod');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonFormMethodEnumButtonFormMethodValues_rwlfmp$.set_lamm2d$(this, 'formmethod', newValue);
            }
          },
          formNovalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'formnovalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'formnovalidate', newValue);
            }
          },
          formTarget: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'formtarget');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'formtarget', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeButtonTypeEnumButtonTypeValues_jbi423$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonTypeEnumButtonTypeValues_jbi423$.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        LABEL: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'label', consumer, initialAttributes);
          this.$consumer_ggpdus$ = consumer;
        }, /** @lends _.kotlinx.html.LABEL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ggpdus$;
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          for_: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'for');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'for', newValue);
            }
          }
        }),
        LEGEND: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'legend', consumer, initialAttributes);
          this.$consumer_gl7u6t$ = consumer;
        }, /** @lends _.kotlinx.html.LEGEND.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gl7u6t$;
            }
          }
        }),
        get_asFlowContent_37l0gb$: {value: function ($receiver) {
          return $receiver;
        }},
        get_asPhrasingContent_37l0gb$: {value: function ($receiver) {
          return $receiver;
        }},
        LI: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'li', consumer, initialAttributes);
          this.$consumer_mda685$ = consumer;
        }, /** @lends _.kotlinx.html.LI.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mda685$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        LINK: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'link', consumer, initialAttributes);
          this.$consumer_6i0t9a$ = consumer;
        }, /** @lends _.kotlinx.html.LINK.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6i0t9a$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'href', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'rel', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'media', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          },
          sizes: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'sizes');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'sizes', newValue);
            }
          }
        }),
        Entities: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, function () {
          return {
            nbsp: new _.kotlinx.html.Entities(),
            lt: new _.kotlinx.html.Entities(),
            gt: new _.kotlinx.html.Entities(),
            quot: new _.kotlinx.html.Entities(),
            amp: new _.kotlinx.html.Entities(),
            apos: new _.kotlinx.html.Entities(),
            iexcl: new _.kotlinx.html.Entities(),
            cent: new _.kotlinx.html.Entities(),
            pound: new _.kotlinx.html.Entities(),
            curren: new _.kotlinx.html.Entities(),
            yen: new _.kotlinx.html.Entities(),
            brvbar: new _.kotlinx.html.Entities(),
            sect: new _.kotlinx.html.Entities(),
            uml: new _.kotlinx.html.Entities(),
            copy: new _.kotlinx.html.Entities(),
            ordf: new _.kotlinx.html.Entities(),
            laquo: new _.kotlinx.html.Entities(),
            not: new _.kotlinx.html.Entities(),
            shy: new _.kotlinx.html.Entities(),
            reg: new _.kotlinx.html.Entities(),
            macr: new _.kotlinx.html.Entities(),
            deg: new _.kotlinx.html.Entities(),
            plusmn: new _.kotlinx.html.Entities(),
            sup2: new _.kotlinx.html.Entities(),
            sup3: new _.kotlinx.html.Entities(),
            acute: new _.kotlinx.html.Entities(),
            micro: new _.kotlinx.html.Entities(),
            para: new _.kotlinx.html.Entities(),
            middot: new _.kotlinx.html.Entities(),
            cedil: new _.kotlinx.html.Entities(),
            sup1: new _.kotlinx.html.Entities(),
            ordm: new _.kotlinx.html.Entities(),
            raquo: new _.kotlinx.html.Entities(),
            frac14: new _.kotlinx.html.Entities(),
            frac12: new _.kotlinx.html.Entities(),
            frac34: new _.kotlinx.html.Entities(),
            iquest: new _.kotlinx.html.Entities(),
            Agrave: new _.kotlinx.html.Entities(),
            Aacute: new _.kotlinx.html.Entities(),
            Acirc: new _.kotlinx.html.Entities(),
            Atilde: new _.kotlinx.html.Entities(),
            Auml: new _.kotlinx.html.Entities(),
            Aring: new _.kotlinx.html.Entities(),
            AElig: new _.kotlinx.html.Entities(),
            Ccedil: new _.kotlinx.html.Entities(),
            Egrave: new _.kotlinx.html.Entities(),
            Eacute: new _.kotlinx.html.Entities(),
            Ecirc: new _.kotlinx.html.Entities(),
            Euml: new _.kotlinx.html.Entities(),
            Igrave: new _.kotlinx.html.Entities(),
            Iacute: new _.kotlinx.html.Entities(),
            Icirc: new _.kotlinx.html.Entities(),
            Iuml: new _.kotlinx.html.Entities(),
            ETH: new _.kotlinx.html.Entities(),
            Ntilde: new _.kotlinx.html.Entities(),
            Ograve: new _.kotlinx.html.Entities(),
            Oacute: new _.kotlinx.html.Entities(),
            Ocirc: new _.kotlinx.html.Entities(),
            Otilde: new _.kotlinx.html.Entities(),
            Ouml: new _.kotlinx.html.Entities(),
            times: new _.kotlinx.html.Entities(),
            Oslash: new _.kotlinx.html.Entities(),
            Ugrave: new _.kotlinx.html.Entities(),
            Uacute: new _.kotlinx.html.Entities(),
            Ucirc: new _.kotlinx.html.Entities(),
            Uuml: new _.kotlinx.html.Entities(),
            Yacute: new _.kotlinx.html.Entities(),
            THORN: new _.kotlinx.html.Entities(),
            szlig: new _.kotlinx.html.Entities(),
            agrave: new _.kotlinx.html.Entities(),
            aacute: new _.kotlinx.html.Entities(),
            acirc: new _.kotlinx.html.Entities(),
            atilde: new _.kotlinx.html.Entities(),
            auml: new _.kotlinx.html.Entities(),
            aring: new _.kotlinx.html.Entities(),
            aelig: new _.kotlinx.html.Entities(),
            ccedil: new _.kotlinx.html.Entities(),
            egrave: new _.kotlinx.html.Entities(),
            eacute: new _.kotlinx.html.Entities(),
            ecirc: new _.kotlinx.html.Entities(),
            euml: new _.kotlinx.html.Entities(),
            igrave: new _.kotlinx.html.Entities(),
            iacute: new _.kotlinx.html.Entities(),
            icirc: new _.kotlinx.html.Entities(),
            iuml: new _.kotlinx.html.Entities(),
            eth: new _.kotlinx.html.Entities(),
            ntilde: new _.kotlinx.html.Entities(),
            ograve: new _.kotlinx.html.Entities(),
            oacute: new _.kotlinx.html.Entities(),
            ocirc: new _.kotlinx.html.Entities(),
            otilde: new _.kotlinx.html.Entities(),
            ouml: new _.kotlinx.html.Entities(),
            divide: new _.kotlinx.html.Entities(),
            oslash: new _.kotlinx.html.Entities(),
            ugrave: new _.kotlinx.html.Entities(),
            uacute: new _.kotlinx.html.Entities(),
            ucirc: new _.kotlinx.html.Entities(),
            uuml: new _.kotlinx.html.Entities(),
            yacute: new _.kotlinx.html.Entities(),
            thorn: new _.kotlinx.html.Entities(),
            yuml: new _.kotlinx.html.Entities()
          };
        }, /** @lends _.kotlinx.html.Entities.prototype */ {
          text: {
            get: function () {
              return '&' + this.toString() + ';';
            }
          }
        }),
        KBD: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'kbd', consumer, initialAttributes);
          this.$consumer_io27gd$ = consumer;
        }, /** @lends _.kotlinx.html.KBD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_io27gd$;
            }
          }
        }),
        KEYGEN: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'keygen', consumer, initialAttributes);
          this.$consumer_vovrmh$ = consumer;
        }, /** @lends _.kotlinx.html.KEYGEN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vovrmh$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          challenge: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'challenge');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'challenge', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          keyType: {
            get: function () {
              return _.kotlinx.html.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues_yv135b$.get_txhc1s$(this, 'keytype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues_yv135b$.set_lamm2d$(this, 'keytype', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        CANVAS: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'canvas', consumer, initialAttributes);
          this.$consumer_9olke8$ = consumer;
        }, /** @lends _.kotlinx.html.CANVAS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9olke8$;
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          }
        }),
        CAPTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'caption', consumer, initialAttributes);
          this.$consumer_izu906$ = consumer;
        }, /** @lends _.kotlinx.html.CAPTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_izu906$;
            }
          }
        }),
        CITE: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'cite', consumer, initialAttributes);
          this.$consumer_xf93kx$ = consumer;
        }, /** @lends _.kotlinx.html.CITE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xf93kx$;
            }
          }
        }),
        CODE: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'code', consumer, initialAttributes);
          this.$consumer_oibbm3$ = consumer;
        }, /** @lends _.kotlinx.html.CODE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_oibbm3$;
            }
          }
        }),
        COL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'col', consumer, initialAttributes);
          this.$consumer_lwcvw0$ = consumer;
        }, /** @lends _.kotlinx.html.COL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_lwcvw0$;
            }
          },
          span: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'span');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'span', newValue);
            }
          }
        }),
        COLGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'colgroup', consumer, initialAttributes);
          this.$consumer_mpkqbr$ = consumer;
        }, /** @lends _.kotlinx.html.COLGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mpkqbr$;
            }
          },
          span: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'span');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'span', newValue);
            }
          }
        }),
        col$f: function () {
        },
        col: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.col$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        COMMAND: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'command', consumer, initialAttributes);
          this.$consumer_823jmt$ = consumer;
        }, /** @lends _.kotlinx.html.COMMAND.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_823jmt$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeCommandTypeEnumCommandTypeValues_gos7w1$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeCommandTypeEnumCommandTypeValues_gos7w1$.set_lamm2d$(this, 'type', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'label', newValue);
            }
          },
          icon: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'icon');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'icon', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          checked: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'checked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'checked', newValue);
            }
          },
          radioGroup: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'radiogroup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'radiogroup', newValue);
            }
          }
        }),
        SAMP: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'samp', consumer, initialAttributes);
          this.$consumer_v2q5ix$ = consumer;
        }, /** @lends _.kotlinx.html.SAMP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_v2q5ix$;
            }
          }
        }),
        SCRIPT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'script', consumer, initialAttributes);
          this.$consumer_idus8d$ = consumer;
        }, /** @lends _.kotlinx.html.SCRIPT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_idus8d$;
            }
          },
          charset: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'charset', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeScriptTypeEnumScriptTypeValues_o7xwcd$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeScriptTypeEnumScriptTypeValues_o7xwcd$.set_lamm2d$(this, 'type', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          defer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'defer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'defer', newValue);
            }
          },
          async: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'async');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'async', newValue);
            }
          }
        }),
        SECTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'section', consumer, initialAttributes);
          this.$consumer_gp3ygl$ = consumer;
        }, /** @lends _.kotlinx.html.SECTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gp3ygl$;
            }
          }
        }),
        SELECT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'select', consumer, initialAttributes);
          this.$consumer_hlyftw$ = consumer;
        }, /** @lends _.kotlinx.html.SELECT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_hlyftw$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          multiple: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'multiple');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'multiple', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          size: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'size');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'size', newValue);
            }
          }
        }),
        option_4$f: function () {
        },
        option_4: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        option_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        option_5: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.option_5$f(content));
        },
        optGroup$f: function () {
        },
        optGroup: function ($receiver, label, classes, block) {
          var tmp$0;
          if (label === void 0)
            label = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.optGroup$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OPTGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('label', label), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        SMALL: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'small', consumer, initialAttributes);
          this.$consumer_brt04p$ = consumer;
        }, /** @lends _.kotlinx.html.SMALL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_brt04p$;
            }
          }
        }),
        SOURCE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'source', consumer, initialAttributes);
          this.$consumer_2n3j19$ = consumer;
        }, /** @lends _.kotlinx.html.SOURCE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_2n3j19$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'media', newValue);
            }
          }
        }),
        SPAN: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'span', consumer, initialAttributes);
          this.$consumer_8wspn2$ = consumer;
        }, /** @lends _.kotlinx.html.SPAN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8wspn2$;
            }
          }
        }),
        STRONG: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'strong', consumer, initialAttributes);
          this.$consumer_999l9b$ = consumer;
        }, /** @lends _.kotlinx.html.STRONG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_999l9b$;
            }
          }
        }),
        STYLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'style', consumer, initialAttributes);
          this.$consumer_j8n81t$ = consumer;
        }, /** @lends _.kotlinx.html.STYLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_j8n81t$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'type', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'media', newValue);
            }
          },
          scoped: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'scoped');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'scoped', newValue);
            }
          }
        }),
        SUB: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'sub', consumer, initialAttributes);
          this.$consumer_8icij4$ = consumer;
        }, /** @lends _.kotlinx.html.SUB.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8icij4$;
            }
          }
        }),
        SUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'sup', consumer, initialAttributes);
          this.$consumer_y1h1fm$ = consumer;
        }, /** @lends _.kotlinx.html.SUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_y1h1fm$;
            }
          }
        }),
        SVG: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'svg', consumer, initialAttributes);
          this.$consumer_xklu0c$ = consumer;
        }, /** @lends _.kotlinx.html.SVG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xklu0c$;
            }
          }
        }),
        a_qw2zl7$f: function () {
        },
        a_qw2zl7$: function ($receiver, href, target, classes, block) {
          var tmp$0;
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_qw2zl7$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.A(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('target', target), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        abbr_sswahv$f: function () {
        },
        abbr_sswahv$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr_sswahv$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.ABBR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        address_ovrhac$f: function () {
        },
        address_ovrhac$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.address_ovrhac$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.ADDRESS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        area_rxebyb$f: function () {
        },
        area_rxebyb$: function ($receiver, shape, alt, classes, block) {
          var tmp$0;
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area_rxebyb$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', shape != null ? _.kotlinx.html.attributes.enumEncode(shape) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        article_hom30m$f: function () {
        },
        article_hom30m$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article_hom30m$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.ARTICLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        aside_i0945k$f: function () {
        },
        aside_i0945k$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside_i0945k$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.ASIDE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        audio_9712sm$f: function () {
        },
        audio_9712sm$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_9712sm$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.AUDIO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        b_9s7oum$f: function () {
        },
        b_9s7oum$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b_9s7oum$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.B(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        base_jhs4oz$f: function () {
        },
        base_jhs4oz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.base_jhs4oz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BASE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        bdi_xkbgtz$f: function () {
        },
        bdi_xkbgtz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi_xkbgtz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BDI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        bdo_txoakj$f: function () {
        },
        bdo_txoakj$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo_txoakj$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BDO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        blockQuote_ymd267$f: function () {
        },
        blockQuote_ymd267$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.blockQuote_ymd267$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BLOCKQUOTE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        body_yq0a1g$f: function () {
        },
        body_yq0a1g$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.body_yq0a1g$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BODY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        br_3rnbya$f: function () {
        },
        br_3rnbya$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_3rnbya$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        button_iugdl9$f: function () {
        },
        button_iugdl9$: function ($receiver, formEncType, formMethod, type, classes, block) {
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
            block = _.kotlinx.html.button_iugdl9$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        canvas_2s9rft$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        canvas_2s9rft$: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, _.kotlinx.html.canvas_2s9rft$f(content));
        },
        canvas_9drsja$f: function () {
        },
        canvas_9drsja$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas_9drsja$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        caption_7prn0q$f: function () {
        },
        caption_7prn0q$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.caption_7prn0q$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.CAPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        cite_vjrrnt$f: function () {
        },
        cite_vjrrnt$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite_vjrrnt$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.CITE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        code_gt0li7$f: function () {
        },
        code_gt0li7$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code_gt0li7$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.CODE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        col_x5xz1s$f: function () {
        },
        col_x5xz1s$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.col_x5xz1s$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.COL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        colGroup_2zs0zz$f: function () {
        },
        colGroup_2zs0zz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroup_2zs0zz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.COLGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        command_4apli$f: function () {
        },
        command_4apli$: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_4apli$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        dataList_pc62re$f: function () {
        },
        dataList_pc62re$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList_pc62re$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DATALIST(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        dd_70idfy$f: function () {
        },
        dd_70idfy$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dd_70idfy$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        del_2m9acb$f: function () {
        },
        del_2m9acb$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del_2m9acb$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        details_l0fpxu$f: function () {
        },
        details_l0fpxu$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details_l0fpxu$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DETAILS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        dfn_qzp5hg$f: function () {
        },
        dfn_qzp5hg$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn_qzp5hg$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DFN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        dialog_djchbu$f: function () {
        },
        dialog_djchbu$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dialog_djchbu$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DIALOG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        div_52npup$f: function () {
        },
        div_52npup$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.div_52npup$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DIV(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        dl_kne006$f: function () {
        },
        dl_kne006$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dl_kne006$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        dt_ya9mke$f: function () {
        },
        dt_ya9mke$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dt_ya9mke$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.DT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        em_45sg9y$f: function () {
        },
        em_45sg9y$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em_45sg9y$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.EM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        embed_d3k8x5$f: function () {
        },
        embed_d3k8x5$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_d3k8x5$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.EMBED(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        fieldSet_ikf44m$f: function () {
        },
        fieldSet_ikf44m$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fieldSet_ikf44m$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.FIELDSET(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        figure_rbaj4m$f: function () {
        },
        figure_rbaj4m$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figure_rbaj4m$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.FIGURE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        footer_a08bm5$f: function () {
        },
        footer_a08bm5$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.footer_a08bm5$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.FOOTER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        form_iif6bn$f: function () {
        },
        form_iif6bn$: function ($receiver, action, encType, method, classes, block) {
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
            block = _.kotlinx.html.form_iif6bn$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', method != null ? _.kotlinx.html.attributes.enumEncode(method) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        h1_ha5cdh$f: function () {
        },
        h1_ha5cdh$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_ha5cdh$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H1(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        h2_7neq1o$f: function () {
        },
        h2_7neq1o$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_7neq1o$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H2(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        h3_wkysgt$f: function () {
        },
        h3_wkysgt$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_wkysgt$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H3(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        h4_dil736$f: function () {
        },
        h4_dil736$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_dil736$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H4(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        h5_beyvbz$f: function () {
        },
        h5_beyvbz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_beyvbz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H5(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        h6_yol480$f: function () {
        },
        h6_yol480$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_yol480$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.H6(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        head_8iwaxo$f: function () {
        },
        head_8iwaxo$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.head_8iwaxo$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.HEAD(_.kotlinx.html.emptyMap_krxeaj$, $receiver), $receiver, block);
        },
        header_8wf0vz$f: function () {
        },
        header_8wf0vz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.header_8wf0vz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.HEADER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        hGroup_p102pj$f: function () {
        },
        hGroup_p102pj$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup_p102pj$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.HGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        hr_o509rw$f: function () {
        },
        hr_o509rw$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hr_o509rw$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.HR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        html_uqh1t$f: function () {
        },
        html_uqh1t$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.html_uqh1t$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.HTML(_.kotlinx.html.emptyMap_krxeaj$, $receiver), $receiver, block);
        },
        i_mogo55$f: function () {
        },
        i_mogo55$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i_mogo55$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.I(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        iframe_bm3sce$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        iframe_bm3sce$: function ($receiver, sandbox, classes, content) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, _.kotlinx.html.iframe_bm3sce$f(content));
        },
        iframe_2mbkkj$f: function () {
        },
        iframe_2mbkkj$: function ($receiver, sandbox, classes, block) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_2mbkkj$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        img_gf7dzd$f: function () {
        },
        img_gf7dzd$: function ($receiver, alt, src, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_gf7dzd$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.IMG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        input_8sv0x$f: function () {
        },
        input_8sv0x$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
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
            block = _.kotlinx.html.input_8sv0x$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        ins_16gn6$f: function () {
        },
        ins_16gn6$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins_16gn6$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.INS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        kbd_eu8ttv$f: function () {
        },
        kbd_eu8ttv$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd_eu8ttv$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.KBD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        keyGen_9sstet$f: function () {
        },
        keyGen_9sstet$: function ($receiver, keyType, classes, block) {
          var tmp$0;
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_9sstet$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode(keyType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        label_sjph50$f: function () {
        },
        label_sjph50$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_sjph50$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.LABEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        legEnd_miwhtt$f: function () {
        },
        legEnd_miwhtt$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_miwhtt$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.LEGEND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        li_kxi8up$f: function () {
        },
        li_kxi8up$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_kxi8up$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.LI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        link_f4utly$f: function () {
        },
        link_f4utly$: function ($receiver, href, rel, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (block === void 0)
            block = _.kotlinx.html.link_f4utly$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.LINK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rel', rel)])), $receiver), $receiver, block);
        },
        map_dl6kn2$f: function () {
        },
        map_dl6kn2$: function ($receiver, name, classes, block) {
          var tmp$0;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map_dl6kn2$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MAP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        mark_3uuvk1$f: function () {
        },
        mark_3uuvk1$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark_3uuvk1$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MARK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        math_oic286$f: function () {
        },
        math_oic286$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math_oic286$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MATH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        mathml_2s9rft$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        mathml_2s9rft$: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MATHML(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, _.kotlinx.html.mathml_2s9rft$f(content));
        },
        mathml_g82u3d$f: function () {
        },
        mathml_g82u3d$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mathml_g82u3d$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MATHML(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        menu_gi7md4$f: function () {
        },
        menu_gi7md4$: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.menu_gi7md4$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        meta_51yi5h$f: function () {
        },
        meta_51yi5h$: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_51yi5h$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.META(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('content', content)])), $receiver), $receiver, block);
        },
        meter_3v0vdl$f: function () {
        },
        meter_3v0vdl$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter_3v0vdl$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.METER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        nav_cb4vxv$f: function () {
        },
        nav_cb4vxv$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav_cb4vxv$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.NAV(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        noScript_2eq8si$f: function () {
        },
        noScript_2eq8si$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_2eq8si$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        object__xbqgeo$f: function () {
        },
        object__xbqgeo$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__xbqgeo$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OBJECT_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        ol_sjaebz$f: function () {
        },
        ol_sjaebz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ol_sjaebz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        optGroup_dszdtg$f: function () {
        },
        optGroup_dszdtg$: function ($receiver, label, classes, block) {
          var tmp$0;
          if (label === void 0)
            label = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.optGroup_dszdtg$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OPTGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('label', label), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        option_2s9rft$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        option_2s9rft$: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, _.kotlinx.html.option_2s9rft$f(content));
        },
        option_9d8bmh$f: function () {
        },
        option_9d8bmh$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_9d8bmh$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OPTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        output_ycbwkz$f: function () {
        },
        output_ycbwkz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output_ycbwkz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.OUTPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        p_fvz0u8$f: function () {
        },
        p_fvz0u8$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.p_fvz0u8$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.P(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        param_y9hjxr$f: function () {
        },
        param_y9hjxr$: function ($receiver, name, value, block) {
          if (name === void 0)
            name = null;
          if (value === void 0)
            value = null;
          if (block === void 0)
            block = _.kotlinx.html.param_y9hjxr$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.PARAM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('value', value)])), $receiver), $receiver, block);
        },
        pre_d3eg99$f: function () {
        },
        pre_d3eg99$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.pre_d3eg99$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.PRE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        progress_euj90h$f: function () {
        },
        progress_euj90h$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress_euj90h$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.PROGRESS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        q_91l1kx$f: function () {
        },
        q_91l1kx$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q_91l1kx$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.Q(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        rp_vwj1yo$f: function () {
        },
        rp_vwj1yo$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rp_vwj1yo$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.RP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        rt_afgsb0$f: function () {
        },
        rt_afgsb0$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rt_afgsb0$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.RT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        ruby_6wpf5g$f: function () {
        },
        ruby_6wpf5g$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby_6wpf5g$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.RUBY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        samp_6y6bod$f: function () {
        },
        samp_6y6bod$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp_6y6bod$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SAMP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        script_u734vm$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        script_u734vm$: function ($receiver, type, src, content) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver), $receiver, _.kotlinx.html.script_u734vm$f(content));
        },
        script_o9zjy0$f: function () {
        },
        script_o9zjy0$: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_o9zjy0$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver), $receiver, block);
        },
        section_adamx7$f: function () {
        },
        section_adamx7$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section_adamx7$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SECTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        select_fnz8nm$f: function () {
        },
        select_fnz8nm$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_fnz8nm$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SELECT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        small_6ktlnb$f: function () {
        },
        small_6ktlnb$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small_6ktlnb$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SMALL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        source_vlshir$f: function () {
        },
        source_vlshir$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source_vlshir$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SOURCE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        span_p2jcl8$f: function () {
        },
        span_p2jcl8$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span_p2jcl8$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SPAN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        strong_k25z5j$f: function () {
        },
        strong_k25z5j$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong_k25z5j$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.STRONG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        style_2s9rft$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        style_2s9rft$: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver), $receiver, _.kotlinx.html.style_2s9rft$f(content));
        },
        style_ucj667$f: function () {
        },
        style_ucj667$: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style_ucj667$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver), $receiver, block);
        },
        sub_oyc7ps$f: function () {
        },
        sub_oyc7ps$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub_oyc7ps$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SUB(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        sup_iukvq6$f: function () {
        },
        sup_iukvq6$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup_iukvq6$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        svg_2s9rft$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        svg_2s9rft$: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, _.kotlinx.html.svg_2s9rft$f(content));
        },
        svg_w22to$f: function () {
        },
        svg_w22to$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg_w22to$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        table_woo42q$f: function () {
        },
        table_woo42q$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.table_woo42q$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TABLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        tbody_qmpnza$f: function () {
        },
        tbody_qmpnza$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tbody_qmpnza$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TBODY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        td_1mkke$f: function () {
        },
        td_1mkke$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.td_1mkke$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        textArea_mmgjrl$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        textArea_mmgjrl$: function ($receiver, rows, cols, wrap, classes, content) {
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
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, _.kotlinx.html.textArea_mmgjrl$f(content));
        },
        textArea_yhv9qc$f: function () {
        },
        textArea_yhv9qc$: function ($receiver, rows, cols, wrap, classes, block) {
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
            block = _.kotlinx.html.textArea_yhv9qc$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        tfoot_r9aycy$f: function () {
        },
        tfoot_r9aycy$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tfoot_r9aycy$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TFOOT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        th_o44qvk$f: function () {
        },
        th_o44qvk$: function ($receiver, scope, classes, block) {
          var tmp$0;
          if (scope === void 0)
            scope = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.th_o44qvk$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('scope', scope != null ? _.kotlinx.html.attributes.enumEncode(scope) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver), $receiver, block);
        },
        thead_d0x57g$f: function () {
        },
        thead_d0x57g$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.thead_d0x57g$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.THEAD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        time_nf3b9b$f: function () {
        },
        time_nf3b9b$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time_nf3b9b$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TIME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        title_7xagd3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        title_7xagd3$: function ($receiver, content) {
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap_krxeaj$, $receiver), $receiver, _.kotlinx.html.title_7xagd3$f(content));
        },
        title_f4ap2i$f: function () {
        },
        title_f4ap2i$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.title_f4ap2i$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap_krxeaj$, $receiver), $receiver, block);
        },
        tr_65dwk0$f: function () {
        },
        tr_65dwk0$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_65dwk0$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.TR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        ul_m4gptj$f: function () {
        },
        ul_m4gptj$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ul_m4gptj$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.UL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        var__8ryal2$f: function () {
        },
        var__8ryal2$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var__8ryal2$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.VAR_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        video_il8myz$f: function () {
        },
        video_il8myz$: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_il8myz$f;
          return _.kotlinx.html.visitAndFinalize(new _.kotlinx.html.VIDEO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver), $receiver, block);
        },
        MAP: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'map', consumer, initialAttributes);
          this.$consumer_nohioc$ = consumer;
        }, /** @lends _.kotlinx.html.MAP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nohioc$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        get_asFlowContent_6sczia$: {value: function ($receiver) {
          return $receiver;
        }},
        get_asPhrasingContent_6sczia$: {value: function ($receiver) {
          return $receiver;
        }},
        MARK: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'mark', consumer, initialAttributes);
          this.$consumer_7rb4x7$ = consumer;
        }, /** @lends _.kotlinx.html.MARK.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_7rb4x7$;
            }
          }
        }),
        MATH: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'math', consumer, initialAttributes);
          this.$consumer_t3pa6o$ = consumer;
        }, /** @lends _.kotlinx.html.MATH.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_t3pa6o$;
            }
          }
        }),
        MATHML: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'mathml', consumer, initialAttributes);
          this.$consumer_b65ejz$ = consumer;
        }, /** @lends _.kotlinx.html.MATHML.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_b65ejz$;
            }
          }
        }),
        MENU: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'menu', consumer, initialAttributes);
          this.$consumer_vn1snt$ = consumer;
        }, /** @lends _.kotlinx.html.MENU.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vn1snt$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeMenuTypeEnumMenuTypeValues_ve5pr9$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeMenuTypeEnumMenuTypeValues_ve5pr9$.set_lamm2d$(this, 'type', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'label', newValue);
            }
          }
        }),
        li$f: function () {
        },
        li: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        META: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'meta', consumer, initialAttributes);
          this.$consumer_an08st$ = consumer;
        }, /** @lends _.kotlinx.html.META.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_an08st$;
            }
          },
          httpEquiv: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'http-equiv');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'http-equiv', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          content: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'content');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'content', newValue);
            }
          },
          charset: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'charset', newValue);
            }
          }
        }),
        METER: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'meter', consumer, initialAttributes);
          this.$consumer_pb37fd$ = consumer;
        }, /** @lends _.kotlinx.html.METER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_pb37fd$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          },
          min: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'min');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'min', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'max', newValue);
            }
          },
          low: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'low');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'low', newValue);
            }
          },
          high: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'high');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'high', newValue);
            }
          },
          optimum: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'optimum');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'optimum', newValue);
            }
          }
        }),
        RP: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'rp', consumer, initialAttributes);
          this.$consumer_ac373a$ = consumer;
        }, /** @lends _.kotlinx.html.RP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ac373a$;
            }
          }
        }),
        RT: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'rt', consumer, initialAttributes);
          this.$consumer_nc3296$ = consumer;
        }, /** @lends _.kotlinx.html.RT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nc3296$;
            }
          }
        }),
        RUBY: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ruby', consumer, initialAttributes);
          this.$consumer_u00bwe$ = consumer;
        }, /** @lends _.kotlinx.html.RUBY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_u00bwe$;
            }
          }
        }),
        rt$f: function () {
        },
        rt: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rt$f;
          _.kotlinx.html.visit(new _.kotlinx.html.RT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        rp$f: function () {
        },
        rp: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rp$f;
          _.kotlinx.html.visit(new _.kotlinx.html.RP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        HTMLTag: Kotlin.createClass(function () {
          return [_.kotlinx.html.Tag];
        }, function (tagName, consumer, initialAttributes) {
          this.$tagName_puewq$ = tagName;
          this.$consumer_prlhpd$ = consumer;
          this.initialAttributes = initialAttributes;
          this.$attributes_in4132$ = new _.kotlinx.html.impl.DelegatingMap(this.initialAttributes, this, _.kotlinx.html.HTMLTag.attributes$f(this));
        }, /** @lends _.kotlinx.html.HTMLTag.prototype */ {
          tagName: {
            get: function () {
              return this.$tagName_puewq$;
            }
          },
          consumer: {
            get: function () {
              return this.$consumer_prlhpd$;
            }
          },
          attributes: {
            get: function () {
              return this.$attributes_in4132$;
            }
          },
          plus_lvwjq7$: function ($receiver) {
            this.consumer.onTagContentEntity_ws8or7$($receiver);
          },
          plus_pdl1w0$: function ($receiver) {
            this.consumer.onTagContent_6bul2c$($receiver);
          }
        }, /** @lends _.kotlinx.html.HTMLTag */ {
          attributes$f: function (this$HTMLTag) {
            return function () {
              return this$HTMLTag.consumer;
            };
          }
        }),
        NAV: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'nav', consumer, initialAttributes);
          this.$consumer_tzhff1$ = consumer;
        }, /** @lends _.kotlinx.html.NAV.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_tzhff1$;
            }
          }
        }),
        NOSCRIPT: Kotlin.createClass(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'noscript', consumer, initialAttributes);
          this.$consumer_e0fbsk$ = consumer;
        }, /** @lends _.kotlinx.html.NOSCRIPT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_e0fbsk$;
            }
          }
        }),
        FlowContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        HeadingContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        InteractiveContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        MetaDataContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        PhrasingContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        SectioningContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        a$f: function () {
        },
        a: function ($receiver, href, target, classes, block) {
          var tmp$0;
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a$f;
          _.kotlinx.html.visit(new _.kotlinx.html.A(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('target', target), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        abbr$f: function () {
        },
        abbr: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ABBR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        area$f: function () {
        },
        area: function ($receiver, shape, alt, classes, block) {
          var tmp$0;
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', shape != null ? _.kotlinx.html.attributes.enumEncode(shape) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rectArea$f: function () {
        },
        rectArea: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rectArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.rect.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        circleArea$f: function () {
        },
        circleArea: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.circleArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.circle.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        polyArea$f: function () {
        },
        polyArea: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.polyArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.poly.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        defaultArea$f: function () {
        },
        defaultArea: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.defaultArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.default.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        address$f: function () {
        },
        address: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.address$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ADDRESS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        article$f: function () {
        },
        article: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ARTICLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        aside$f: function () {
        },
        aside: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ASIDE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        audio$f: function () {
        },
        audio: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AUDIO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        b$f: function () {
        },
        b: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b$f;
          _.kotlinx.html.visit(new _.kotlinx.html.B(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        bdi$f: function () {
        },
        bdi: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BDI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        blockQuote$f: function () {
        },
        blockQuote: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.blockQuote$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BLOCKQUOTE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        bdo$f: function () {
        },
        bdo: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BDO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        br_1$f: function () {
        },
        br_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        button$f: function () {
        },
        button: function ($receiver, formEncType, formMethod, type, classes, block) {
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
            block = _.kotlinx.html.button$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        getButton$f: function () {
        },
        getButton: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.get.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        postButton$f: function () {
        },
        postButton: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.post.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        putButton$f: function () {
        },
        putButton: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.put.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        deleteButton$f: function () {
        },
        deleteButton: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.delete.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        canvas$f: function () {
        },
        canvas: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        canvas_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        canvas_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.canvas_1$f(content));
        },
        cite$f: function () {
        },
        cite: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CITE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        code$f: function () {
        },
        code: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CODE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        command$f: function () {
        },
        command: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        commandCommand$f: function () {
        },
        commandCommand: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.command.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxCommand$f: function () {
        },
        checkBoxCommand: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioCommand$f: function () {
        },
        radioCommand: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dataList$f: function () {
        },
        dataList: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DATALIST(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        del$f: function () {
        },
        del: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        details$f: function () {
        },
        details: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DETAILS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        dfn$f: function () {
        },
        dfn: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DFN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        dialog$f: function () {
        },
        dialog: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dialog$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DIALOG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        div$f: function () {
        },
        div: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.div$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DIV(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        dl$f: function () {
        },
        dl: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dl$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        em$f: function () {
        },
        em: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em$f;
          _.kotlinx.html.visit(new _.kotlinx.html.EM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        embed$f: function () {
        },
        embed: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed$f;
          _.kotlinx.html.visit(new _.kotlinx.html.EMBED(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        fieldSet$f: function () {
        },
        fieldSet: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fieldSet$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FIELDSET(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        figure$f: function () {
        },
        figure: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figure$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FIGURE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        footer$f: function () {
        },
        footer: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.footer$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FOOTER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        form$f: function () {
        },
        form: function ($receiver, action, encType, method, classes, block) {
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
            block = _.kotlinx.html.form$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', method != null ? _.kotlinx.html.attributes.enumEncode(method) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        getForm$f: function () {
        },
        getForm: function ($receiver, action, encType, classes, block) {
          var tmp$0;
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getForm$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', _.kotlinx.html.FormMethod.object.get.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        postForm$f: function () {
        },
        postForm: function ($receiver, action, encType, classes, block) {
          var tmp$0;
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postForm$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', _.kotlinx.html.FormMethod.object.post.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        putForm$f: function () {
        },
        putForm: function ($receiver, action, encType, classes, block) {
          var tmp$0;
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putForm$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', _.kotlinx.html.FormMethod.object.put.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        deleteForm$f: function () {
        },
        deleteForm: function ($receiver, action, encType, classes, block) {
          var tmp$0;
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteForm$f;
          _.kotlinx.html.visit(new _.kotlinx.html.FORM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('action', action), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('enctype', encType != null ? _.kotlinx.html.attributes.enumEncode(encType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('method', _.kotlinx.html.FormMethod.object.delete.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        h1$f: function () {
        },
        h1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H1(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h2$f: function () {
        },
        h2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H2(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h3$f: function () {
        },
        h3: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H3(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h4$f: function () {
        },
        h4: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H4(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h5$f: function () {
        },
        h5: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H5(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h6$f: function () {
        },
        h6: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H6(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        header$f: function () {
        },
        header: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.header$f;
          _.kotlinx.html.visit(new _.kotlinx.html.HEADER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        hGroup$f: function () {
        },
        hGroup: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup$f;
          _.kotlinx.html.visit(new _.kotlinx.html.HGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        hr$f: function () {
        },
        hr: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hr$f;
          _.kotlinx.html.visit(new _.kotlinx.html.HR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        i$f: function () {
        },
        i: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i$f;
          _.kotlinx.html.visit(new _.kotlinx.html.I(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        iframe$f: function () {
        },
        iframe: function ($receiver, sandbox, classes, block) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        iframe_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        iframe_1: function ($receiver, sandbox, classes, content) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.iframe_1$f(content));
        },
        allowSameOriginIframe$f: function () {
        },
        allowSameOriginIframe: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowFormSIframe$f: function () {
        },
        allowFormSIframe: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowScriptsIframe$f: function () {
        },
        allowScriptsIframe: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowSameOriginIframe_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowSameOriginIframe_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_1$f(content));
        },
        allowFormSIframe_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowFormSIframe_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowFormSIframe_1$f(content));
        },
        allowScriptsIframe_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowScriptsIframe_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_1$f(content));
        },
        img$f: function () {
        },
        img: function ($receiver, alt, src, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IMG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        input$f: function () {
        },
        input: function ($receiver, type, formEncType, formMethod, name, classes, block) {
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
            block = _.kotlinx.html.input$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        buttonInput$f: function () {
        },
        buttonInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.button.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxInput$f: function () {
        },
        checkBoxInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        colorInput$f: function () {
        },
        colorInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.color.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateInput$f: function () {
        },
        dateInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.date.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeInput$f: function () {
        },
        dateTimeInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTime.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeLocalInput$f: function () {
        },
        dateTimeLocalInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTimeLocal.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        emailInput$f: function () {
        },
        emailInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.email.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        fileInput$f: function () {
        },
        fileInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.file.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hiddenInput$f: function () {
        },
        hiddenInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.hidden.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        imageInput$f: function () {
        },
        imageInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.image.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        monthInput$f: function () {
        },
        monthInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.month.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        numberInput$f: function () {
        },
        numberInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.number.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        passwordInput$f: function () {
        },
        passwordInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.password.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioInput$f: function () {
        },
        radioInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rangeInput$f: function () {
        },
        rangeInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.range.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        resetInput$f: function () {
        },
        resetInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.reset.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        searchInput$f: function () {
        },
        searchInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.search.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        submitInput$f: function () {
        },
        submitInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.submit.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textInput$f: function () {
        },
        textInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.text.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        telInput$f: function () {
        },
        telInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.tel.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        timeInput$f: function () {
        },
        timeInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.time.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        urlInput$f: function () {
        },
        urlInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.url.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        weekInput$f: function () {
        },
        weekInput: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.week.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        ins$f: function () {
        },
        ins: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        kbd$f: function () {
        },
        kbd: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KBD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        keyGen$f: function () {
        },
        keyGen: function ($receiver, keyType, classes, block) {
          var tmp$0;
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode(keyType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rsaKeyGen$f: function () {
        },
        rsaKeyGen: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', _.kotlinx.html.KeyGenKeyType.object.rsa.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        label$f: function () {
        },
        label: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LABEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        link$f: function () {
        },
        link: function ($receiver, href, rel, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (block === void 0)
            block = _.kotlinx.html.link$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LINK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rel', rel)])), $receiver.consumer), block);
        },
        map$f: function () {
        },
        map: function ($receiver, name, classes, block) {
          var tmp$0;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MAP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        mark$f: function () {
        },
        mark: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MARK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        math$f: function () {
        },
        math: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MATH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        menu$f: function () {
        },
        menu: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.menu$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        contextMenu$f: function () {
        },
        contextMenu: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.contextMenu$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.context.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        toolbarMenu$f: function () {
        },
        toolbarMenu: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.toolbarMenu$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.toolbar.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        listMenu$f: function () {
        },
        listMenu: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.listMenu$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.list.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        meta$f: function () {
        },
        meta: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta$f;
          _.kotlinx.html.visit(new _.kotlinx.html.META(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('content', content)])), $receiver.consumer), block);
        },
        meter$f: function () {
        },
        meter: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter$f;
          _.kotlinx.html.visit(new _.kotlinx.html.METER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        nav$f: function () {
        },
        nav: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav$f;
          _.kotlinx.html.visit(new _.kotlinx.html.NAV(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        noScript$f: function () {
        },
        noScript: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        ol$f: function () {
        },
        ol: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ol$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        object_$f: function () {
        },
        object_: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object_$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OBJECT_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        output$f: function () {
        },
        output: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OUTPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        p$f: function () {
        },
        p: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.p$f;
          _.kotlinx.html.visit(new _.kotlinx.html.P(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        pre$f: function () {
        },
        pre: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.pre$f;
          _.kotlinx.html.visit(new _.kotlinx.html.PRE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        progress$f: function () {
        },
        progress: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress$f;
          _.kotlinx.html.visit(new _.kotlinx.html.PROGRESS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        q$f: function () {
        },
        q: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q$f;
          _.kotlinx.html.visit(new _.kotlinx.html.Q(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        ruby$f: function () {
        },
        ruby: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby$f;
          _.kotlinx.html.visit(new _.kotlinx.html.RUBY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        samp$f: function () {
        },
        samp: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SAMP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        script$f: function () {
        },
        script: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textEcmaScriptScript$f: function () {
        },
        textEcmaScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScriptScript$f: function () {
        },
        textJavaScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript10Script$f: function () {
        },
        textJavaScript10Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript10.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript11Script$f: function () {
        },
        textJavaScript11Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript11.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript12Script$f: function () {
        },
        textJavaScript12Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript12.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript13Script$f: function () {
        },
        textJavaScript13Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript13.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript14Script$f: function () {
        },
        textJavaScript14Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript14.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript15Script$f: function () {
        },
        textJavaScript15Script: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript15.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJScriptScript$f: function () {
        },
        textJScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXJavaScriptScript$f: function () {
        },
        textXJavaScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXEcmaScriptScript$f: function () {
        },
        textXEcmaScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textVbScriptScript$f: function () {
        },
        textVbScriptScript: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textVbScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        section$f: function () {
        },
        section: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SECTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        select$f: function () {
        },
        select: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SELECT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        small$f: function () {
        },
        small: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SMALL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        span$f: function () {
        },
        span: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SPAN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        strong$f: function () {
        },
        strong: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong$f;
          _.kotlinx.html.visit(new _.kotlinx.html.STRONG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        style$f: function () {
        },
        style: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style$f;
          _.kotlinx.html.visit(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver.consumer), block);
        },
        style_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        style_1: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver.consumer), _.kotlinx.html.style_1$f(content));
        },
        sub$f: function () {
        },
        sub: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SUB(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        sup$f: function () {
        },
        sup: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        svg$f: function () {
        },
        svg: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        svg_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        svg_1: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.svg_1$f(content));
        },
        table$f: function () {
        },
        table: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.table$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TABLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        textArea$f: function () {
        },
        textArea: function ($receiver, rows, cols, wrap, classes, block) {
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
            block = _.kotlinx.html.textArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textArea_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        textArea_1: function ($receiver, rows, cols, wrap, classes, content) {
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
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.textArea_1$f(content));
        },
        hardTextArea$f: function () {
        },
        hardTextArea: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        softTextArea$f: function () {
        },
        softTextArea: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hardTextArea_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        hardTextArea_1: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.hardTextArea_1$f(content));
        },
        softTextArea_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        softTextArea_1: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.softTextArea_1$f(content));
        },
        time$f: function () {
        },
        time: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TIME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        ul$f: function () {
        },
        ul: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ul$f;
          _.kotlinx.html.visit(new _.kotlinx.html.UL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        var_$f: function () {
        },
        var_: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var_$f;
          _.kotlinx.html.visit(new _.kotlinx.html.VAR_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        video$f: function () {
        },
        video: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video$f;
          _.kotlinx.html.visit(new _.kotlinx.html.VIDEO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h1_2$f: function () {
        },
        h1_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H1(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h2_2$f: function () {
        },
        h2_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H2(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h3_2$f: function () {
        },
        h3_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H3(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h4_2$f: function () {
        },
        h4_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H4(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h5_2$f: function () {
        },
        h5_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H5(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        h6_2$f: function () {
        },
        h6_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.H6(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        hGroup_1$f: function () {
        },
        hGroup_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.HGROUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        a_1$f: function () {
        },
        a_1: function ($receiver, href, target, classes, block) {
          var tmp$0;
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.A(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('target', target), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        audio_1$f: function () {
        },
        audio_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AUDIO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        button_1$f: function () {
        },
        button_1: function ($receiver, formEncType, formMethod, type, classes, block) {
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
            block = _.kotlinx.html.button_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        getButton_1$f: function () {
        },
        getButton_1: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.get.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        postButton_1$f: function () {
        },
        postButton_1: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.post.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        putButton_1$f: function () {
        },
        putButton_1: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.put.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        deleteButton_1$f: function () {
        },
        deleteButton_1: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.delete.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        details_1$f: function () {
        },
        details_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DETAILS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        embed_1$f: function () {
        },
        embed_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.EMBED(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        iframe_2$f: function () {
        },
        iframe_2: function ($receiver, sandbox, classes, block) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        iframe_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        iframe_3: function ($receiver, sandbox, classes, content) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.iframe_3$f(content));
        },
        allowSameOriginIframe_2$f: function () {
        },
        allowSameOriginIframe_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowFormSIframe_2$f: function () {
        },
        allowFormSIframe_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowScriptsIframe_2$f: function () {
        },
        allowScriptsIframe_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowSameOriginIframe_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowSameOriginIframe_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_3$f(content));
        },
        allowFormSIframe_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowFormSIframe_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowFormSIframe_3$f(content));
        },
        allowScriptsIframe_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowScriptsIframe_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_3$f(content));
        },
        img_1$f: function () {
        },
        img_1: function ($receiver, alt, src, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IMG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        input_1$f: function () {
        },
        input_1: function ($receiver, type, formEncType, formMethod, name, classes, block) {
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
            block = _.kotlinx.html.input_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        buttonInput_1$f: function () {
        },
        buttonInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.button.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxInput_1$f: function () {
        },
        checkBoxInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        colorInput_1$f: function () {
        },
        colorInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.color.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateInput_1$f: function () {
        },
        dateInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.date.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeInput_1$f: function () {
        },
        dateTimeInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTime.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeLocalInput_1$f: function () {
        },
        dateTimeLocalInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTimeLocal.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        emailInput_1$f: function () {
        },
        emailInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.email.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        fileInput_1$f: function () {
        },
        fileInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.file.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hiddenInput_1$f: function () {
        },
        hiddenInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.hidden.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        imageInput_1$f: function () {
        },
        imageInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.image.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        monthInput_1$f: function () {
        },
        monthInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.month.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        numberInput_1$f: function () {
        },
        numberInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.number.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        passwordInput_1$f: function () {
        },
        passwordInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.password.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioInput_1$f: function () {
        },
        radioInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rangeInput_1$f: function () {
        },
        rangeInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.range.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        resetInput_1$f: function () {
        },
        resetInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.reset.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        searchInput_1$f: function () {
        },
        searchInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.search.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        submitInput_1$f: function () {
        },
        submitInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.submit.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textInput_1$f: function () {
        },
        textInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.text.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        telInput_1$f: function () {
        },
        telInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.tel.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        timeInput_1$f: function () {
        },
        timeInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.time.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        urlInput_1$f: function () {
        },
        urlInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.url.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        weekInput_1$f: function () {
        },
        weekInput_1: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.week.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        keyGen_1$f: function () {
        },
        keyGen_1: function ($receiver, keyType, classes, block) {
          var tmp$0;
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode(keyType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rsaKeyGen_1$f: function () {
        },
        rsaKeyGen_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', _.kotlinx.html.KeyGenKeyType.object.rsa.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        label_1$f: function () {
        },
        label_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LABEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        menu_1$f: function () {
        },
        menu_1: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.menu_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        contextMenu_1$f: function () {
        },
        contextMenu_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.contextMenu_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.context.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        toolbarMenu_1$f: function () {
        },
        toolbarMenu_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.toolbarMenu_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.toolbar.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        listMenu_1$f: function () {
        },
        listMenu_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.listMenu_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MENU(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.MenuType.object.list.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        object__1$f: function () {
        },
        object__1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OBJECT_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        select_1$f: function () {
        },
        select_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SELECT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        textArea_2$f: function () {
        },
        textArea_2: function ($receiver, rows, cols, wrap, classes, block) {
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
            block = _.kotlinx.html.textArea_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textArea_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        textArea_3: function ($receiver, rows, cols, wrap, classes, content) {
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
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.textArea_3$f(content));
        },
        hardTextArea_2$f: function () {
        },
        hardTextArea_2: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        softTextArea_2$f: function () {
        },
        softTextArea_2: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hardTextArea_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        hardTextArea_3: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.hardTextArea_3$f(content));
        },
        softTextArea_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        softTextArea_3: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.softTextArea_3$f(content));
        },
        video_1$f: function () {
        },
        video_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.VIDEO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        base$f: function () {
        },
        base: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.base$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BASE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        command_1$f: function () {
        },
        command_1: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        commandCommand_1$f: function () {
        },
        commandCommand_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.command.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxCommand_1$f: function () {
        },
        checkBoxCommand_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioCommand_1$f: function () {
        },
        radioCommand_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        link_1$f: function () {
        },
        link_1: function ($receiver, href, rel, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (block === void 0)
            block = _.kotlinx.html.link_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LINK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rel', rel)])), $receiver.consumer), block);
        },
        meta_1$f: function () {
        },
        meta_1: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.META(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('content', content)])), $receiver.consumer), block);
        },
        noScript_1$f: function () {
        },
        noScript_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        script_1$f: function () {
        },
        script_1: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textEcmaScriptScript_1$f: function () {
        },
        textEcmaScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScriptScript_1$f: function () {
        },
        textJavaScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript10Script_1$f: function () {
        },
        textJavaScript10Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript10.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript11Script_1$f: function () {
        },
        textJavaScript11Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript11.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript12Script_1$f: function () {
        },
        textJavaScript12Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript12.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript13Script_1$f: function () {
        },
        textJavaScript13Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript13.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript14Script_1$f: function () {
        },
        textJavaScript14Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript14.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript15Script_1$f: function () {
        },
        textJavaScript15Script_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript15.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJScriptScript_1$f: function () {
        },
        textJScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXJavaScriptScript_1$f: function () {
        },
        textXJavaScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXEcmaScriptScript_1$f: function () {
        },
        textXEcmaScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textVbScriptScript_1$f: function () {
        },
        textVbScriptScript_1: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textVbScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        style_2$f: function () {
        },
        style_2: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver.consumer), block);
        },
        style_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        style_3: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.STYLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type))), $receiver.consumer), _.kotlinx.html.style_3$f(content));
        },
        title$f: function () {
        },
        title: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.title$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap_krxeaj$, $receiver.consumer), block);
        },
        title_1$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        title_1: function ($receiver, content) {
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap_krxeaj$, $receiver.consumer), _.kotlinx.html.title_1$f(content));
        },
        a_2$f: function () {
        },
        a_2: function ($receiver, href, target, classes, block) {
          var tmp$0;
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.A(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('target', target), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        abbr_1$f: function () {
        },
        abbr_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ABBR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        area_1$f: function () {
        },
        area_1: function ($receiver, shape, alt, classes, block) {
          var tmp$0;
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', shape != null ? _.kotlinx.html.attributes.enumEncode(shape) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rectArea_1$f: function () {
        },
        rectArea_1: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rectArea_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.rect.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        circleArea_1$f: function () {
        },
        circleArea_1: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.circleArea_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.circle.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        polyArea_1$f: function () {
        },
        polyArea_1: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.polyArea_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.poly.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        defaultArea_1$f: function () {
        },
        defaultArea_1: function ($receiver, alt, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.defaultArea_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Shape', _.kotlinx.html.AreaShape.object.default.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        audio_2$f: function () {
        },
        audio_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.AUDIO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        b_1$f: function () {
        },
        b_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.B(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        bdi_1$f: function () {
        },
        bdi_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BDI(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        bdo_1$f: function () {
        },
        bdo_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BDO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        br_2$f: function () {
        },
        br_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BR(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        button_2$f: function () {
        },
        button_2: function ($receiver, formEncType, formMethod, type, classes, block) {
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
            block = _.kotlinx.html.button_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        getButton_2$f: function () {
        },
        getButton_2: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.get.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        postButton_2$f: function () {
        },
        postButton_2: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.post.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        putButton_2$f: function () {
        },
        putButton_2: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.put.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        deleteButton_2$f: function () {
        },
        deleteButton_2: function ($receiver, formEncType, type, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.BUTTON(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', _.kotlinx.html.ButtonFormMethod.object.delete.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        canvas_2$f: function () {
        },
        canvas_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        canvas_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        canvas_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.CANVAS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.canvas_3$f(content));
        },
        cite_1$f: function () {
        },
        cite_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CITE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        code_1$f: function () {
        },
        code_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.CODE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        command_2$f: function () {
        },
        command_2: function ($receiver, type, classes, block) {
          var tmp$0;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        commandCommand_2$f: function () {
        },
        commandCommand_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.command.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxCommand_2$f: function () {
        },
        checkBoxCommand_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioCommand_2$f: function () {
        },
        radioCommand_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.COMMAND(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.CommandType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dataList_1$f: function () {
        },
        dataList_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DATALIST(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        del_1$f: function () {
        },
        del_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        dfn_1$f: function () {
        },
        dfn_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.DFN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        em_1$f: function () {
        },
        em_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.EM(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        embed_2$f: function () {
        },
        embed_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.EMBED(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        i_1$f: function () {
        },
        i_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.I(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        iframe_4$f: function () {
        },
        iframe_4: function ($receiver, sandbox, classes, block) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        iframe_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        iframe_5: function ($receiver, sandbox, classes, content) {
          var tmp$0;
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode(sandbox) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.iframe_5$f(content));
        },
        allowSameOriginIframe_4$f: function () {
        },
        allowSameOriginIframe_4: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowFormSIframe_4$f: function () {
        },
        allowFormSIframe_4: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowScriptsIframe_4$f: function () {
        },
        allowScriptsIframe_4: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        allowSameOriginIframe_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowSameOriginIframe_5: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowSameOrigin.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_5$f(content));
        },
        allowFormSIframe_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowFormSIframe_5: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowFormS.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowFormSIframe_5$f(content));
        },
        allowScriptsIframe_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        allowScriptsIframe_5: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.IFRAME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('sandbox', _.kotlinx.html.IframeSandbox.object.allowScripts.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_5$f(content));
        },
        img_2$f: function () {
        },
        img_2: function ($receiver, alt, src, classes, block) {
          var tmp$0;
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.IMG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('alt', alt), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        input_2$f: function () {
        },
        input_2: function ($receiver, type, formEncType, formMethod, name, classes, block) {
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
            block = _.kotlinx.html.input_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        buttonInput_2$f: function () {
        },
        buttonInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.button.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        checkBoxInput_2$f: function () {
        },
        checkBoxInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.checkBox.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        colorInput_2$f: function () {
        },
        colorInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.color.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateInput_2$f: function () {
        },
        dateInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.date.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeInput_2$f: function () {
        },
        dateTimeInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTime.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        dateTimeLocalInput_2$f: function () {
        },
        dateTimeLocalInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.dateTimeLocal.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        emailInput_2$f: function () {
        },
        emailInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.email.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        fileInput_2$f: function () {
        },
        fileInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.file.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hiddenInput_2$f: function () {
        },
        hiddenInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.hidden.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        imageInput_2$f: function () {
        },
        imageInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.image.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        monthInput_2$f: function () {
        },
        monthInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.month.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        numberInput_2$f: function () {
        },
        numberInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.number.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        passwordInput_2$f: function () {
        },
        passwordInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.password.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        radioInput_2$f: function () {
        },
        radioInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.radio.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rangeInput_2$f: function () {
        },
        rangeInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.range.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        resetInput_2$f: function () {
        },
        resetInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.reset.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        searchInput_2$f: function () {
        },
        searchInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.search.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        submitInput_2$f: function () {
        },
        submitInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.submit.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textInput_2$f: function () {
        },
        textInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.text.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        telInput_2$f: function () {
        },
        telInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.tel.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        timeInput_2$f: function () {
        },
        timeInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.time.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        urlInput_2$f: function () {
        },
        urlInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.url.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        weekInput_2$f: function () {
        },
        weekInput_2: function ($receiver, formEncType, formMethod, name, classes, block) {
          var tmp$0;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.InputType.object.week.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode(formEncType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode(formMethod) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        ins_1$f: function () {
        },
        ins_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.INS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        kbd_1$f: function () {
        },
        kbd_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KBD(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        keyGen_2$f: function () {
        },
        keyGen_2: function ($receiver, keyType, classes, block) {
          var tmp$0;
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode(keyType) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        rsaKeyGen_2$f: function () {
        },
        rsaKeyGen_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.KEYGEN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('keytype', _.kotlinx.html.KeyGenKeyType.object.rsa.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        label_2$f: function () {
        },
        label_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LABEL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        link_2$f: function () {
        },
        link_2: function ($receiver, href, rel, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (block === void 0)
            block = _.kotlinx.html.link_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.LINK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', href), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rel', rel)])), $receiver.consumer), block);
        },
        map_1$f: function () {
        },
        map_1: function ($receiver, name, classes, block) {
          var tmp$0;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MAP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        mark_1$f: function () {
        },
        mark_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MARK(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        math_1$f: function () {
        },
        math_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.MATH(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        meta_2$f: function () {
        },
        meta_2: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.META(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('name', name), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('content', content)])), $receiver.consumer), block);
        },
        meter_1$f: function () {
        },
        meter_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.METER(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        noScript_2$f: function () {
        },
        noScript_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        object__2$f: function () {
        },
        object__2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OBJECT_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        output_1$f: function () {
        },
        output_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.OUTPUT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        progress_1$f: function () {
        },
        progress_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.PROGRESS(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        q_1$f: function () {
        },
        q_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.Q(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        ruby_1$f: function () {
        },
        ruby_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.RUBY(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        samp_1$f: function () {
        },
        samp_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SAMP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        script_2$f: function () {
        },
        script_2: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', type != null ? _.kotlinx.html.attributes.enumEncode(type) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textEcmaScriptScript_2$f: function () {
        },
        textEcmaScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScriptScript_2$f: function () {
        },
        textJavaScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript10Script_2$f: function () {
        },
        textJavaScript10Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript10.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript11Script_2$f: function () {
        },
        textJavaScript11Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript11.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript12Script_2$f: function () {
        },
        textJavaScript12Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript12.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript13Script_2$f: function () {
        },
        textJavaScript13Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript13.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript14Script_2$f: function () {
        },
        textJavaScript14Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript14.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJavaScript15Script_2$f: function () {
        },
        textJavaScript15Script_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJavaScript15.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textJScriptScript_2$f: function () {
        },
        textJScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textJScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXJavaScriptScript_2$f: function () {
        },
        textXJavaScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXJavaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textXEcmaScriptScript_2$f: function () {
        },
        textXEcmaScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textXEcmaScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        textVbScriptScript_2$f: function () {
        },
        textVbScriptScript_2: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SCRIPT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('type', _.kotlinx.html.ScriptType.object.textVbScript.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('src', src)])), $receiver.consumer), block);
        },
        select_2$f: function () {
        },
        select_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SELECT(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        small_1$f: function () {
        },
        small_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SMALL(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        span_1$f: function () {
        },
        span_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SPAN(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        strong_1$f: function () {
        },
        strong_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.STRONG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        sub_1$f: function () {
        },
        sub_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SUB(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        sup_1$f: function () {
        },
        sup_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SUP(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        svg_2$f: function () {
        },
        svg_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        svg_3$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        svg_3: function ($receiver, classes, content) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.SVG(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), _.kotlinx.html.svg_3$f(content));
        },
        textArea_4$f: function () {
        },
        textArea_4: function ($receiver, rows, cols, wrap, classes, block) {
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
            block = _.kotlinx.html.textArea_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        textArea_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        textArea_5: function ($receiver, rows, cols, wrap, classes, content) {
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
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode(wrap) : null), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.textArea_5$f(content));
        },
        hardTextArea_4$f: function () {
        },
        hardTextArea_4: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        softTextArea_4$f: function () {
        },
        softTextArea_4: function ($receiver, rows, cols, classes, block) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea_4$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), block);
        },
        hardTextArea_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        hardTextArea_5: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.hard.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.hardTextArea_5$f(content));
        },
        softTextArea_5$f: function (content) {
          return function () {
            this.plus_pdl1w0$(content);
          };
        },
        softTextArea_5: function ($receiver, rows, cols, classes, content) {
          var tmp$0;
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('rows', rows), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('cols', cols), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('wrap', _.kotlinx.html.TextAreaWrap.object.soft.realValue), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null)])), $receiver.consumer), _.kotlinx.html.softTextArea_5$f(content));
        },
        time_1$f: function () {
        },
        time_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.TIME(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        var__1$f: function () {
        },
        var__1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var__1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.VAR_(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        video_2$f: function () {
        },
        video_2: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_2$f;
          _.kotlinx.html.visit(new _.kotlinx.html.VIDEO(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        article_1$f: function () {
        },
        article_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ARTICLE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        aside_1$f: function () {
        },
        aside_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.ASIDE(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        nav_1$f: function () {
        },
        nav_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.NAV(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        section_1$f: function () {
        },
        section_1: function ($receiver, classes, block) {
          var tmp$0;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section_1$f;
          _.kotlinx.html.visit(new _.kotlinx.html.SECTION(_.kotlinx.html.toAttributesMap(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('class', (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(classes)) != null ? _.kotlinx.html.attributes.stringSetEncode(tmp$0) : null))), $receiver.consumer), block);
        },
        I: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'i', consumer, initialAttributes);
          this.$consumer_zcy4ah$ = consumer;
        }, /** @lends _.kotlinx.html.I.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_zcy4ah$;
            }
          }
        }),
        IFRAME: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'iframe', consumer, initialAttributes);
          this.$consumer_6v99ys$ = consumer;
        }, /** @lends _.kotlinx.html.IFRAME.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6v99ys$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          sandbox: {
            get: function () {
              return _.kotlinx.html.attributeIframeSandboxEnumIframeSandboxValues_se0w1d$.get_txhc1s$(this, 'sandbox');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeIframeSandboxEnumIframeSandboxValues_se0w1d$.set_lamm2d$(this, 'sandbox', newValue);
            }
          },
          seamless: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'seamless');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'seamless', newValue);
            }
          }
        }),
        IMG: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'img', consumer, initialAttributes);
          this.$consumer_4fn5n7$ = consumer;
        }, /** @lends _.kotlinx.html.IMG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4fn5n7$;
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'alt', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          usemap: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'usemap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'usemap', newValue);
            }
          },
          ismap: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'ismap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'ismap', newValue);
            }
          }
        }),
        INPUT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'input', consumer, initialAttributes);
          this.$consumer_suma2i$ = consumer;
        }, /** @lends _.kotlinx.html.INPUT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_suma2i$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeInputTypeEnumInputTypeValues_6dor0x$.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputTypeEnumInputTypeValues_6dor0x$.set_lamm2d$(this, 'type', newValue);
            }
          },
          accept: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'accept');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'accept', newValue);
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'alt', newValue);
            }
          },
          autoComplete: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBooleanOnOff_lhmq3k$.get_txhc1s$(this, 'autocomplete');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBooleanOnOff_lhmq3k$.set_lamm2d$(this, 'autocomplete', newValue);
            }
          },
          checked: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'checked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'checked', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'form', newValue);
            }
          },
          formAction: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'formaction');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'formaction', newValue);
            }
          },
          formEncType: {
            get: function () {
              return _.kotlinx.html.attributeInputFormEncTypeEnumInputFormEncTypeValues_dj9t33$.get_txhc1s$(this, 'formenctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputFormEncTypeEnumInputFormEncTypeValues_dj9t33$.set_lamm2d$(this, 'formenctype', newValue);
            }
          },
          formMethod: {
            get: function () {
              return _.kotlinx.html.attributeInputFormMethodEnumInputFormMethodValues_xxmjld$.get_txhc1s$(this, 'formmethod');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputFormMethodEnumInputFormMethodValues_xxmjld$.set_lamm2d$(this, 'formmethod', newValue);
            }
          },
          formNovalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'formnovalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'formnovalidate', newValue);
            }
          },
          formTarget: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'formtarget');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'formtarget', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'height', newValue);
            }
          },
          list: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'list');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'list', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'max', newValue);
            }
          },
          maxLength: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'maxlength');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'maxlength', newValue);
            }
          },
          min: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'min');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'min', newValue);
            }
          },
          multiple: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'multiple');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'multiple', newValue);
            }
          },
          pattern: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'pattern');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'pattern', newValue);
            }
          },
          placeholder: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'placeholder');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'placeholder', newValue);
            }
          },
          readonly: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'readonly');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'readonly', newValue);
            }
          },
          required: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker_fayr6m$.get_txhc1s$(this, 'required');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker_fayr6m$.set_lamm2d$(this, 'required', newValue);
            }
          },
          size: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'size');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'size', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'src', newValue);
            }
          },
          step: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'step');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'step', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'width', newValue);
            }
          },
          files: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'files');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'files', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'value', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        INS: Kotlin.createClass(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ins', consumer, initialAttributes);
          this.$consumer_24dlpa$ = consumer;
        }, /** @lends _.kotlinx.html.INS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_24dlpa$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'cite', newValue);
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString_igy03y$.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString_igy03y$.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        TagConsumer: Kotlin.createTrait(null),
        Tag: Kotlin.createTrait(null),
        AttributeEnum: Kotlin.createTrait(null),
        visit: function ($receiver, block) {
          $receiver.consumer.onTagStart_tkgjla$($receiver);
          block.call($receiver);
          $receiver.consumer.onTagEnd_tkgjla$($receiver);
        },
        visitAndFinalize: function ($receiver, consumer, block) {
          Kotlin.modules['stdlib'].kotlin.require_eltq40$($receiver.consumer === consumer);
          _.kotlinx.html.visit($receiver, block);
          return consumer.finalize();
        },
        toAttributesMap: function ($receiver) {
          var destination = new Kotlin.ArrayList();
          var tmp$0;
          tmp$0 = $receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (element.second != null) {
              destination.add_za3rmp$(element);
            }
          }
          var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collectionSizeOrDefault_pjxt3m$(destination, 10));
          var tmp$1;
          tmp$1 = destination.iterator();
          while (tmp$1.hasNext()) {
            var item = tmp$1.next();
            var tmp$2;
            destination_0.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$(item.first, (tmp$2 = item.second) != null ? tmp$2 : Kotlin.throwNPE()));
          }
          return Kotlin.modules['stdlib'].kotlin.toMap_jziq3e$(destination_0);
        },
        get_realValue: {value: function ($receiver) {
          return $receiver;
        }},
        plus_t2njqt$: function ($receiver, value) {
          var receiver = Kotlin.modules['stdlib'].java.util.LinkedHashSet_4fm7v2$($receiver);
          receiver.add_za3rmp$(value);
          return receiver;
        },
        minus_t2njqt$: function ($receiver, value) {
          var receiver = Kotlin.modules['stdlib'].java.util.LinkedHashSet_4fm7v2$($receiver);
          receiver.remove_za3rmp$(value);
          return receiver;
        },
        styleLink_98vrb8$f: function (url) {
          return function () {
            this.rel = _.kotlinx.html.LinkRel.stylesheet;
            this.type = _.kotlinx.html.LinkType.textCss;
            this.href = url;
          };
        },
        styleLink_98vrb8$: function ($receiver, url) {
          _.kotlinx.html.link_1($receiver, void 0, void 0, _.kotlinx.html.styleLink_98vrb8$f(url));
        },
        get_br_6s7ubk$: {value: function ($receiver) {
          var tag = new _.kotlinx.html.BR(Kotlin.modules['stdlib'].kotlin.emptyMap(), $receiver.consumer);
          $receiver.consumer.onTagStart_tkgjla$(tag);
          $receiver.consumer.onTagEnd_tkgjla$(tag);
        }},
        attributes: Kotlin.definePackage(function () {
          this.StringEncoder = Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, {
            encode_bm4g0d$: function (attributeName, value) {
              return value;
            },
            decode_puj7f4$: function (attributeName, value) {
              return value;
            }
          });
          this.TickerEncoder = Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, {
            encode_bm4g0d$: function (attributeName, value) {
              return _.kotlinx.html.attributes.tickerEncode(value, attributeName);
            },
            decode_puj7f4$: function (attributeName, value) {
              return Kotlin.equals(value, attributeName);
            }
          });
          this.StringSetEncoder = Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, {
            encode_bm4g0d$: function (attributeName, value) {
              return Kotlin.modules['stdlib'].kotlin.join_raq5lb$(value, ' ');
            },
            decode_puj7f4$: function (attributeName, value) {
              var tmp$0;
              return (tmp$0 = _.kotlinx.html.attributes.stringSetDecode(value)) != null ? tmp$0 : Kotlin.throwNPE();
            },
            empty_l5rr1g$: function (attributeName, tag) {
              return Kotlin.modules['stdlib'].kotlin.emptySet();
            }
          });
        }, /** @lends _.kotlinx.html.attributes */ {
          AttributeEncoder: Kotlin.createTrait(null, /** @lends _.kotlinx.html.attributes.AttributeEncoder.prototype */ {
            empty_l5rr1g$: function (attributeName, tag) {
              throw new Kotlin.IllegalStateException('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.tagName);
            }
          }),
          Attribute: Kotlin.createClass(null, function (encoder) {
            this.encoder = encoder;
          }, /** @lends _.kotlinx.html.attributes.Attribute.prototype */ {
            get_txhc1s$: function (thisRef, attributeName) {
              var tmp$0, tmp$1;
              return (tmp$1 = (tmp$0 = thisRef.attributes.get_za3rmp$(attributeName)) != null ? Kotlin.modules['stdlib'].kotlin.let_7hr6ff$(tmp$0, _.kotlinx.html.attributes.Attribute.get_txhc1s$f(this, attributeName)) : null) != null ? tmp$1 : this.encoder.empty_l5rr1g$(attributeName, thisRef);
            },
            set_lamm2d$: function (thisRef, attributeName, value) {
              thisRef.attributes.put_wn2jw4$(attributeName, this.encoder.encode_bm4g0d$(attributeName, value));
            }
          }, /** @lends _.kotlinx.html.attributes.Attribute */ {
            get_txhc1s$f: function (this$Attribute, attributeName) {
              return function (it) {
                return this$Attribute.encoder.decode_puj7f4$(attributeName, it);
              };
            }
          }),
          StringAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.StringEncoder);
          }, /** @lends _.kotlinx.html.attributes.StringAttribute.prototype */ {
            copy: function () {
              return new _.kotlinx.html.attributes.StringAttribute();
            }
          }),
          booleanEncode: function ($receiver) {
            return $receiver.toString();
          },
          BooleanEncoder: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, function (trueValue, falseValue) {
            if (trueValue === void 0)
              trueValue = 'true';
            if (falseValue === void 0)
              falseValue = 'false';
            this.trueValue = trueValue;
            this.falseValue = falseValue;
          }, /** @lends _.kotlinx.html.attributes.BooleanEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return value ? this.trueValue : this.falseValue;
            },
            decode_puj7f4$: function (attributeName, value) {
              if (value === this.trueValue)
                return true;
              else if (value === this.falseValue)
                return false;
              else
                throw new Kotlin.IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
            }
          }),
          BooleanAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun(trueValue, falseValue) {
            if (trueValue === void 0)
              trueValue = 'true';
            if (falseValue === void 0)
              falseValue = 'false';
            $fun.baseInitializer.call(this, new _.kotlinx.html.attributes.BooleanEncoder(trueValue, falseValue));
          }, /** @lends _.kotlinx.html.attributes.BooleanAttribute.prototype */ {
            copy: function (trueValue, falseValue) {
              return new _.kotlinx.html.attributes.BooleanAttribute(trueValue, falseValue);
            }
          }),
          tickerEncode: function ($receiver, attributeName) {
            return $receiver ? attributeName : '';
          },
          TickerAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.TickerEncoder);
          }, /** @lends _.kotlinx.html.attributes.TickerAttribute.prototype */ {
            set_lamm2d$: function (thisRef, attributeName, value) {
              if (value) {
                thisRef.attributes.put_wn2jw4$(attributeName, attributeName);
              }
               else {
                thisRef.attributes.remove_za3rmp$(attributeName);
              }
            },
            copy: function () {
              return new _.kotlinx.html.attributes.TickerAttribute();
            }
          }),
          EnumEncoder: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, function (valuesMap) {
            this.valuesMap = valuesMap;
          }, /** @lends _.kotlinx.html.attributes.EnumEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return value.realValue;
            },
            decode_puj7f4$: function (attributeName, value) {
              var tmp$0;
              tmp$0 = this.valuesMap.get_za3rmp$(value);
              if (tmp$0 == null)
                throw new Kotlin.IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
              return tmp$0;
            }
          }),
          enumEncode: function ($receiver) {
            return $receiver.realValue;
          },
          EnumAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun(values) {
            $fun.baseInitializer.call(this, new _.kotlinx.html.attributes.EnumEncoder(values));
            this.values = values;
          }, /** @lends _.kotlinx.html.attributes.EnumAttribute.prototype */ {
            component1: function () {
              return this.values;
            },
            copy: function (values) {
              return new _.kotlinx.html.attributes.EnumAttribute(values === void 0 ? this.values : values);
            },
            toString: function () {
              return 'EnumAttribute(values=' + Kotlin.toString(this.values) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.values) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values)));
            }
          }),
          stringSetDecode$f: function (it) {
            return Kotlin.modules['stdlib'].kotlin.isEmpty_pdl1w0$(it);
          },
          stringSetDecode: function (value) {
            var tmp$0, tmp$1;
            return (tmp$1 = (tmp$0 = value != null ? Kotlin.modules['stdlib'].kotlin.split_csixt7$(value, Kotlin.modules['stdlib'].kotlin.toRegex_pdl1w0$('\\s+')) : null) != null ? Kotlin.modules['stdlib'].kotlin.filterNot_azvtw4$(tmp$0, _.kotlinx.html.attributes.stringSetDecode$f) : null) != null ? Kotlin.modules['stdlib'].kotlin.toSet_ir3nkc$(tmp$1) : null;
          },
          stringSetEncode: function ($receiver) {
            return Kotlin.modules['stdlib'].kotlin.join_raq5lb$($receiver, ' ');
          },
          StringSetAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.StringSetEncoder);
          }, /** @lends _.kotlinx.html.attributes.StringSetAttribute.prototype */ {
            copy: function () {
              return new _.kotlinx.html.attributes.StringSetAttribute();
            }
          })
        }),
        impl: Kotlin.definePackage(null, /** @lends _.kotlinx.html.impl */ {
          DelegatingMap: Kotlin.createClass(function () {
            return [Kotlin.modules['builtins'].kotlin.MutableMap];
          }, function (initialValues, tag, consumer) {
            this.tag = tag;
            this.consumer = consumer;
            var $receiver = Kotlin.modules['stdlib'].kotlin.linkedMapOf_eoa9s7$([]);
            $receiver.putAll_48yl7j$(initialValues);
            this.backing_c5bz0b$ = $receiver;
          }, /** @lends _.kotlinx.html.impl.DelegatingMap.prototype */ {
            size: function () {
              return this.backing_c5bz0b$.size();
            },
            isEmpty: function () {
              return this.backing_c5bz0b$.isEmpty();
            },
            containsKey_za3rmp$: function (key) {
              return this.backing_c5bz0b$.containsKey_za3rmp$(key);
            },
            containsValue_za3rmp$: function (value) {
              return this.backing_c5bz0b$.containsValue_za3rmp$(value);
            },
            get_za3rmp$: function (key) {
              return this.backing_c5bz0b$.get_za3rmp$(key);
            },
            put_wn2jw4$: function (key, value) {
              var old = this.backing_c5bz0b$.put_wn2jw4$(key, value);
              if (!Kotlin.equals(old, value)) {
                this.consumer().onTagAttributeChange_kfu432$(this.tag, key, value);
              }
              return old;
            },
            remove_za3rmp$: function (key) {
              var tmp$0;
              return (tmp$0 = this.backing_c5bz0b$.remove_za3rmp$(key)) != null ? Kotlin.modules['stdlib'].kotlin.let_7hr6ff$(tmp$0, _.kotlinx.html.impl.DelegatingMap.remove_za3rmp$f(key, this)) : null;
            },
            putAll_48yl7j$: function (m) {
              var $receiver = m.entrySet();
              var operation = _.kotlinx.html.impl.DelegatingMap.putAll_48yl7j$f(this);
              var tmp$0;
              tmp$0 = $receiver.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                operation(element);
              }
            },
            clear: function () {
              var $receiver = this.backing_c5bz0b$;
              var operation = _.kotlinx.html.impl.DelegatingMap.clear$f(this);
              var tmp$0;
              tmp$0 = Kotlin.modules['stdlib'].kotlin.iterator_acfufl$($receiver);
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                operation(element);
              }
              this.backing_c5bz0b$.clear();
            },
            keySet: function () {
              return this.backing_c5bz0b$.keySet();
            },
            values: function () {
              return this.backing_c5bz0b$.values();
            },
            entrySet: function () {
              return this.backing_c5bz0b$.entrySet();
            }
          }, /** @lends _.kotlinx.html.impl.DelegatingMap */ {
            remove_za3rmp$f: function (key, this$DelegatingMap) {
              return function (removed) {
                if (typeof key === 'string') {
                  this$DelegatingMap.consumer().onTagAttributeChange_kfu432$(this$DelegatingMap.tag, key, null);
                }
                return removed;
              };
            },
            putAll_48yl7j$f: function (this$DelegatingMap) {
              return function (e) {
                this$DelegatingMap.put_wn2jw4$(e.getKey(), e.getValue());
              };
            },
            clear$f: function (this$DelegatingMap) {
              return function (it) {
                this$DelegatingMap.consumer().onTagAttributeChange_kfu432$(this$DelegatingMap.tag, it.getKey(), null);
              };
            }
          })
        }),
        stream: Kotlin.definePackage(function () {
          this.emptyTags_vdbw9o$ = Kotlin.modules['stdlib'].kotlin.toSet_ir3nkc$(Kotlin.modules['stdlib'].kotlin.lines_pdl1w0$('area\nbase\nbasefont\nbgsound\nbr\ncol\ncommand\ndevice\nembed\nframe\nhr\nimg\ninput\nkeygen\nlink\nmenuitem\nmeta\nparam\nsource\ntrack\nwbr'));
          this.inlineTags_iikh58$ = Kotlin.modules['stdlib'].kotlin.toSet_ir3nkc$(Kotlin.modules['stdlib'].kotlin.lines_pdl1w0$('a\nabbr\nacronym\narea\nb\nbase\nbasefont\nbdi\nbdo\nbgsound\nbig\nbr\nbutton\ncite\ncode\ncommand\ndata\ndatalist\ndevice\ndfn\nem\nembed\nfont\ni\niframe\nimg\ninput\nkbd\nkeygen\nlabel\nlegend\nmap\nmark\nmenuitem\nmeter\nobject\noptgroup\noption\noutput\nparam\nprogress\nq\nrp\nrt\nruby\nsamp\nselect\nsmall\nsource\nspan\nstrong\nsub\nsummary\nsup\ntextarea\ntime\ntrack\ntt\nu\nvar\nwbr'));
          this.AVERAGE_PAGE_SIZE_u8z5cd$ = 32768;
          this.escapeMap_cnus55$ = Kotlin.modules['stdlib'].kotlin.mapOf_eoa9s7$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('<', '&lt;'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('>', '&gt;'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('&', '&amp;'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$("'", '&apos;'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('"', '&quot;')]);
        }, /** @lends _.kotlinx.html.stream */ {
          HTMLStreamBuilder: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (out, prettyPrint) {
            this.out = out;
            this.prettyPrint = prettyPrint;
            this.level_p5kad8$ = 0;
            this.ln_m3x20y$ = true;
          }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              if (!_.kotlinx.html.stream.inlineTags_iikh58$.contains_za3rmp$(tag.tagName)) {
                this.indent();
              }
              this.level_p5kad8$++;
              this.out.append('<');
              this.out.append(tag.tagName);
              if (Kotlin.modules['stdlib'].kotlin.isNotEmpty_acfufl$(tag.attributes)) {
                var $receiver = tag.attributes.entrySet();
                var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collectionSizeOrDefault_pjxt3m$($receiver, 10));
                var tmp$0;
                tmp$0 = $receiver.iterator();
                while (tmp$0.hasNext()) {
                  var item = tmp$0.next();
                  if (!_.kotlinx.html.stream.isValidXmlAttributeName(item.getKey())) {
                    throw new Kotlin.IllegalArgumentException('Tag ' + tag.tagName + ' has invalid attribute name ' + item.getKey());
                  }
                  var sb = new Kotlin.StringBuilder();
                  sb.append(item.getKey());
                  sb.append('="');
                  _.kotlinx.html.stream.escapeAppend(sb, item.getValue());
                  sb.append('"');
                  destination.add_za3rmp$(sb);
                }
                Kotlin.modules['stdlib'].kotlin.joinTo_3o8ep9$(destination, this.out, ' ', ' ');
              }
              this.out.append('>');
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              throw new Kotlin.UnsupportedOperationException("tag attribute can't be changed as it was already written to the stream. Use with DelayedConsumer to be able to modify attributes");
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              throw new Kotlin.UnsupportedOperationException("you can't assign lambda event handler when building text");
            },
            onTagEnd_tkgjla$: function (tag) {
              this.level_p5kad8$--;
              if (this.ln_m3x20y$) {
                this.indent();
              }
              if (!_.kotlinx.html.stream.emptyTags_vdbw9o$.contains_za3rmp$(tag.tagName)) {
                this.out.append('<\/');
                this.out.append(tag.tagName);
                this.out.append('>');
              }
              if (this.prettyPrint && !_.kotlinx.html.stream.inlineTags_iikh58$.contains_za3rmp$(tag.tagName)) {
                this.appenln();
              }
            },
            onTagContent_6bul2c$: function (content) {
              _.kotlinx.html.stream.escapeAppend(this.out, content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.out.append(entity.text);
            },
            finalize: function () {
              return this.out;
            },
            appenln: function () {
              if (this.prettyPrint && !this.ln_m3x20y$) {
                this.out.append('\n');
                this.ln_m3x20y$ = true;
              }
            },
            indent: function () {
              var tmp$0;
              if (this.prettyPrint) {
                if (!this.ln_m3x20y$) {
                  this.out.append('\n');
                }
                tmp$0 = this.level_p5kad8$ - 1;
                for (var l = 0; l <= tmp$0; l++) {
                  this.out.append('  ');
                }
                this.ln_m3x20y$ = false;
              }
            }
          }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder */ {
          }),
          createHTML_6taknv$f: function (sb, last) {
            return sb.toString();
          },
          createHTML_6taknv$: function (prettyPrint) {
            if (prettyPrint === void 0)
              prettyPrint = true;
            return _.kotlinx.html.consumers.delayed(_.kotlinx.html.consumers.onFinalizeMap_v5sgtx$(new _.kotlinx.html.stream.HTMLStreamBuilder(new Kotlin.StringBuilder(_.kotlinx.html.stream.AVERAGE_PAGE_SIZE_u8z5cd$), prettyPrint), _.kotlinx.html.stream.createHTML_6taknv$f));
          },
          appendHTML_s21csf$: function ($receiver, prettyPrint) {
            if (prettyPrint === void 0)
              prettyPrint = true;
            return _.kotlinx.html.consumers.delayed(new _.kotlinx.html.stream.HTMLStreamBuilder($receiver, prettyPrint));
          },
          _isLetter: function ($receiver) {
            return (new Kotlin.CharRange('a', 'z')).contains($receiver) || (new Kotlin.CharRange('A', 'Z')).contains($receiver);
          },
          _isDigit: function ($receiver) {
            return (new Kotlin.CharRange('0', '9')).contains($receiver);
          },
          isValidXmlAttributeName: function ($receiver) {
            var tmp$0 = !Kotlin.modules['stdlib'].kotlin.startsWith_41xvrb$($receiver.toLowerCase(), 'xml') && Kotlin.modules['stdlib'].kotlin.isNotEmpty_pdl1w0$($receiver) && (_.kotlinx.html.stream._isLetter($receiver.charAt(0)) || $receiver.charAt(0) === '_');
            if (tmp$0) {
              all_ggikb8$break: {
                var tmp$1;
                tmp$1 = Kotlin.modules['stdlib'].kotlin.iterator_gw00vq$($receiver);
                while (tmp$1.hasNext()) {
                  var element = tmp$1.next();
                  if (!(_.kotlinx.html.stream._isLetter(element) || _.kotlinx.html.stream._isDigit(element) || Kotlin.modules['stdlib'].kotlin.contains_8o9u7g$('._:-', element))) {
                    tmp$0 = false;
                    break all_ggikb8$break;
                  }
                }
                tmp$0 = true;
              }
              tmp$0 = tmp$0;
            }
            return tmp$0;
          },
          escapeAppend: function ($receiver, s) {
            var tmp$0;
            var lastIndex = 0;
            tmp$0 = s.length - 1;
            for (var idx = 0; idx <= tmp$0; idx++) {
              var ch = Kotlin.modules['stdlib'].kotlin.get_kljjvw$(s, idx);
              var escape = _.kotlinx.html.stream.escapeMap_cnus55$.get_za3rmp$(ch);
              if (escape != null) {
                $receiver.append(s, lastIndex, idx);
                $receiver.append(escape);
                lastIndex = idx + 1;
              }
            }
            if (lastIndex < s.length) {
              $receiver.append(s, lastIndex, s.length);
            }
          }
        })
      })
    })
  });
  Kotlin.defineModule('kotlinx.html.shared', _);
}(Kotlin));
