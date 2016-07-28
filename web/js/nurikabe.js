(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    PositionValue: Kotlin.createClass(null, function (position, value) {
      this.position = position;
      this.value = value;
    }, /** @lends _.PositionValue.prototype */ {
      toString: function () {
        return '[' + this.position + ' : ' + this.value + ']';
      },
      equals_za3rmp$: function (other) {
        var tmp$0;
        if (this === other)
          return true;
        Kotlin.isType(tmp$0 = other, _.PositionValue) ? tmp$0 : Kotlin.throwCCE();
        if (!Kotlin.equals(this.position, other.position))
          return false;
        return true;
      },
      hashCode: function () {
        return Kotlin.hashCode(this.position);
      }
    }),
    PositionValue_init_qt1joh$: function (x, y, value, $this) {
      $this = $this || Object.create(_.PositionValue.prototype);
      _.PositionValue.call($this, new Kotlin.modules['stdlib'].kotlin.Pair(x, y), value);
      return $this;
    },
    Board: Kotlin.createClass(function () {
      return [Kotlin.modules['builtins'].kotlin.collections.Iterable];
    }, function (rows, columns, list) {
      this.rows = rows;
      this.columns = columns;
      this.values_1itv7u$ = Kotlin.modules['stdlib'].kotlin.collections.toMutableList_mwto7b$(list);
      this.size = this.rows * this.columns;
    }, /** @lends _.Board.prototype */ {
      rowsList: {
        get: function () {
          var $receiver = new Kotlin.NumberRange(0, this.rows - 1);
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
          var tmp$0;
          tmp$0 = $receiver.iterator();
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            destination.add_za3rmp$(this.row_za3lpa$(item));
          }
          return destination;
        }
      },
      columnsList: {
        get: function () {
          var $receiver = new Kotlin.NumberRange(0, this.columns - 1);
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
          var tmp$0;
          tmp$0 = $receiver.iterator();
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            destination.add_za3rmp$(this.column_za3lpa$(item));
          }
          return destination;
        }
      },
      offset_vux9f0$: function (x, y) {
        return y * this.columns + x;
      },
      inBounds_vux9f0$: function (x, y) {
        return x >= 0 && x < this.columns && y >= 0 && y < this.rows;
      },
      get_za3lpa$: function (offset) {
        return this.values_1itv7u$.get_za3lpa$(offset);
      },
      set_vux3hl$: function (offset, value) {
        this.values_1itv7u$.set_vux3hl$(offset, value);
      },
      get_vux9f0$: function (x, y) {
        if (this.inBounds_vux9f0$(x, y))
          return this.values_1itv7u$.get_za3lpa$(this.offset_vux9f0$(x, y));
        else
          throw new Kotlin.IndexOutOfBoundsException();
      },
      set_qt1joh$: function (x, y, value) {
        if (this.inBounds_vux9f0$(x, y)) {
          this.values_1itv7u$.set_vux3hl$(this.offset_vux9f0$(x, y), value);
        }
         else
          throw new Kotlin.IndexOutOfBoundsException();
      },
      iterator: function () {
        return this.values_1itv7u$.iterator();
      },
      row_za3lpa$: function (i) {
        var $receiver = new Kotlin.NumberRange(0, this.columns - 1);
        var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          destination.add_za3rmp$(this.get_vux9f0$(item, i));
        }
        return destination;
      },
      column_za3lpa$: function (i) {
        var $receiver = new Kotlin.NumberRange(0, this.rows - 1);
        var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          destination.add_za3rmp$(this.get_vux9f0$(i, item));
        }
        return destination;
      },
      copy: function () {
        return new _.Board(this.rows, this.columns, this.values_1itv7u$);
      },
      withIndex: function () {
        return new _.Board.withIndex$f(this);
      },
      neighbors_vux9f0$: function (x, y) {
        var left = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y);
        var right = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y);
        var up = new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1);
        var down = new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([up, right, down, left]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      neighbors8_vux9f0$: function (x, y) {
        var left = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y);
        var right = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y);
        var up = new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1);
        var down = new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1);
        var upLeft = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y - 1);
        var upRight = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y - 1);
        var downLeft = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y + 1);
        var downRight = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y + 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([up, upRight, right, downRight, down, downLeft, left, upLeft]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      neighborsNW_vux9f0$: function (x, y) {
        var left = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y);
        var up = new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1);
        var upLeft = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y - 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([left, upLeft, up]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      neighborsNE_vux9f0$: function (x, y) {
        var right = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y);
        var up = new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1);
        var upRight = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y - 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([up, upRight, right]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      neighborsSE_vux9f0$: function (x, y) {
        var right = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y);
        var down = new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1);
        var downRight = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y + 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([right, downRight, down]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      neighborsSW_vux9f0$: function (x, y) {
        var left = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y);
        var down = new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1);
        var downLeft = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y + 1);
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([down, downLeft, left]);
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (this.inBounds_vux9f0$(element.first, element.second)) {
            destination.add_za3rmp$(element);
          }
        }
        var neighbors = destination;
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination_0.add_za3rmp$(new _.PositionValue(item, this.get_vux9f0$(item.first, item.second)));
        }
        return destination_0;
      },
      depthFirst_j3dvhl$: Kotlin.defineInlineFunction('nurikabe.Board.depthFirst_j3dvhl$', function (x, y, visitor) {
        var stack = new _.Stack();
        var visited = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
        stack.push_za3rmp$(_.PositionValue_init_qt1joh$(x, y, this.get_vux9f0$(x, y)));
        while (!stack.isEmpty) {
          var p = stack.pop();
          if (visited.contains_za3rmp$(p))
            continue;
          var c = visitor(p);
          Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(visited, p);
          if (c) {
            var tmp$0 = p.position
            , nx = tmp$0.component1()
            , ny = tmp$0.component2();
            var tmp$1;
            tmp$1 = this.neighbors_vux9f0$(nx, ny).iterator();
            while (tmp$1.hasNext()) {
              var element = tmp$1.next();
              stack.push_za3rmp$(element);
            }
          }
        }
      }),
      toString: function () {
        return Kotlin.modules['stdlib'].kotlin.collections.joinToString_ld60a2$(this.rowsList, ',  ', '[ ', ' ]', void 0, void 0, _.Board.toString$f);
      }
    }, /** @lends _.Board */ {
      withIndex$f: Kotlin.createClass(function () {
        return [Kotlin.modules['stdlib'].kotlin.sequences.Sequence];
      }, function (this$Board_0) {
        this.this$Board_0 = this$Board_0;
      }, /** @lends _.Board.withIndex$f.prototype */ {
        iterator: function () {
          return new _.Board.withIndex$f.iterator$f(this.this$Board_0);
        }
      }, /** @lends _.Board.withIndex$f */ {
        iterator$f: Kotlin.createClass(function () {
          return [Kotlin.modules['builtins'].kotlin.collections.Iterator];
        }, function (this$Board_0) {
          this.this$Board_0 = this$Board_0;
          this.x = 0;
          this.y = 0;
        }, /** @lends _.Board.withIndex$f.iterator$f.prototype */ {
          hasNext: function () {
            return this.y < this.this$Board_0.rows && this.x < this.this$Board_0.columns;
          },
          next: function () {
            var r = _.PositionValue_init_qt1joh$(this.x, this.y, this.this$Board_0.get_vux9f0$(this.x, this.y));
            this.x += 1;
            if (this.x >= this.this$Board_0.columns) {
              this.x = 0;
              this.y += 1;
            }
            return r;
          }
        }, /** @lends _.Board.withIndex$f.iterator$f */ {
        })
      }),
      toString$f: function (it) {
        return Kotlin.modules['stdlib'].kotlin.collections.joinToString_ld60a2$(it);
      }
    }),
    Board_init_qt1joh$: function (rows, columns, init, $this) {
      $this = $this || Object.create(_.Board.prototype);
      var $receiver = new Kotlin.NumberRange(1, rows * columns);
      var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
      var tmp$4;
      tmp$4 = $receiver.iterator();
      while (tmp$4.hasNext()) {
        var item = tmp$4.next();
        destination.add_za3rmp$(init);
      }
      _.Board.call($this, rows, columns, destination);
      return $this;
    },
    main_kand9s$: function (args) {
      new _.Nurikabe();
    },
    Nurikabe: Kotlin.createClass(null, function () {
      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7;
      this.rowsInput_9llf0m$ = Kotlin.isType(tmp$0 = document.getElementById('rows'), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
      this.columnsInput_v312bg$ = Kotlin.isType(tmp$1 = document.getElementById('columns'), HTMLInputElement) ? tmp$1 : Kotlin.throwCCE();
      this.solve_u86wag$ = Kotlin.isType(tmp$2 = document.getElementById('solve'), HTMLButtonElement) ? tmp$2 : Kotlin.throwCCE();
      this.next_39onau$ = Kotlin.isType(tmp$3 = document.getElementById('next'), HTMLButtonElement) ? tmp$3 : Kotlin.throwCCE();
      this.update_cozkyo$ = Kotlin.isType(tmp$4 = document.getElementById('update'), HTMLButtonElement) ? tmp$4 : Kotlin.throwCCE();
      this.fail_39tuiz$ = Kotlin.isType(tmp$5 = document.getElementById('notsolved'), HTMLParagraphElement) ? tmp$5 : Kotlin.throwCCE();
      this.table_u7w961$ = Kotlin.isType(tmp$6 = document.getElementById('board'), HTMLTableElement) ? tmp$6 : Kotlin.throwCCE();
      this.tbody_u7vcpt$ = Kotlin.isType(tmp$7 = this.table_u7w961$.tBodies[0], HTMLTableSectionElement) ? tmp$7 : Kotlin.throwCCE();
      this.board = _.Board_init_qt1joh$(this.rows, this.columns, 0);
      this.table_u7w961$.ondblclick = _.Nurikabe.Nurikabe$f;
      this.table_u7w961$.addEventListener('selectstart', _.Nurikabe.Nurikabe$f_0);
      this.table_u7w961$.oncontextmenu = _.Nurikabe.Nurikabe$f_1;
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.update_cozkyo$, void 0, _.Nurikabe.Nurikabe$f_2(this));
      this.update();
      var solve = _.Nurikabe.Nurikabe$solve(this);
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.solve_u86wag$, void 0, _.Nurikabe.Nurikabe$f_3(solve));
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.next_39onau$, void 0, _.Nurikabe.Nurikabe$f_4(solve));
    }, /** @lends _.Nurikabe.prototype */ {
      rows: {
        get: function () {
          return _.floor_yrwdxs$(this.rowsInput_9llf0m$.valueAsNumber);
        }
      },
      columns: {
        get: function () {
          return _.floor_yrwdxs$(this.columnsInput_v312bg$.valueAsNumber);
        }
      },
      update: function () {
        var tmp$0;
        this.board = _.Board_init_qt1joh$(this.rows, this.columns, 0);
        this.tbody_u7vcpt$.remove();
        this.tbody_u7vcpt$ = Kotlin.isType(tmp$0 = this.table_u7w961$.createTBody(), HTMLTableSectionElement) ? tmp$0 : Kotlin.throwCCE();
        var tmp$1;
        var index = 0;
        tmp$1 = this.board.rowsList.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          var y = index++;
          var tmp$4;
          var tr = Kotlin.isType(tmp$4 = Kotlin.modules['stdlib'].kotlin.dom.build.addElement_hart3b$(this.tbody_u7vcpt$, 'tr', void 0, _.Nurikabe.f), HTMLTableRowElement) ? tmp$4 : Kotlin.throwCCE();
          var tmp$3;
          var index_0 = 0;
          tmp$3 = item.iterator();
          while (tmp$3.hasNext()) {
            var item_0 = tmp$3.next();
            var x = index_0++;
            var tmp$2;
            var td = Kotlin.isType(tmp$2 = Kotlin.modules['stdlib'].kotlin.dom.build.addElement_hart3b$(tr, 'td', void 0, _.Nurikabe.f_0), HTMLElement) ? tmp$2 : Kotlin.throwCCE();
            td.onmouseup = _.Nurikabe.f_1(this, x, y);
          }
        }
        this.next_39onau$.style.visibility = 'hidden';
      },
      refresh: function () {
        var cells = this.tbody_u7vcpt$.getElementsByTagName('td');
        var tmp$0;
        var index = 0;
        tmp$0 = this.board.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          var tmp$3, tmp$1, tmp$2;
          var cell = Kotlin.isType(tmp$3 = cells[index++], HTMLElement) ? tmp$3 : Kotlin.throwCCE();
          cell.textContent = item > 0 ? item.toString() : '';
          tmp$2 = cell;
          if (item === -2)
            tmp$1 = 'yellow';
          else if (item === -1)
            tmp$1 = 'black';
          else
            tmp$1 = 'white';
          tmp$2.className = tmp$1;
        }
      }
    }, /** @lends _.Nurikabe */ {
      f: function () {
      },
      f_0: function () {
      },
      f_1: function (this$Nurikabe, closure$x, closure$y) {
        return function (e) {
          var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10, tmp$11;
          var me = Kotlin.isType(tmp$0 = e, MouseEvent) ? tmp$0 : Kotlin.throwCCE();
          tmp$1 = me.button;
          if (tmp$1 === 0)
            tmp$2 = this$Nurikabe.board, tmp$3 = closure$x, tmp$4 = closure$y, tmp$5 = tmp$2.get_vux9f0$(tmp$3, tmp$4), tmp$6 = tmp$5, tmp$2.set_qt1joh$(tmp$3, tmp$4, tmp$5 + 1), tmp$6;
          else if (tmp$1 === 2) {
            if (this$Nurikabe.board.get_vux9f0$(closure$x, closure$y) > -1)
              tmp$7 = this$Nurikabe.board, tmp$8 = closure$x, tmp$9 = closure$y, tmp$10 = tmp$7.get_vux9f0$(tmp$8, tmp$9), tmp$11 = tmp$10, tmp$7.set_qt1joh$(tmp$8, tmp$9, tmp$10 - 1), tmp$11;
          }
           else
            _.fill_o6wbmy$(this$Nurikabe.board, closure$x, closure$y, -1);
          this$Nurikabe.refresh();
          return true;
        };
      },
      Nurikabe$f: function (it) {
        return false;
      },
      Nurikabe$f_0: function (it) {
        it.preventDefault();
      },
      Nurikabe$f_1: function (it) {
        return false;
      },
      Nurikabe$f_2: function (this$Nurikabe) {
        return function (it) {
          this$Nurikabe.update();
        };
      },
      Nurikabe$solve: function (this$Nurikabe) {
        return function () {
          this$Nurikabe.fail_39tuiz$.style.visibility = 'hidden';
          var solution = (new _.Solver(this$Nurikabe.board)).solve();
          if (solution != null) {
            this$Nurikabe.board = solution;
            this$Nurikabe.next_39onau$.style.visibility = 'visible';
            this$Nurikabe.refresh();
          }
           else {
            this$Nurikabe.next_39onau$.style.visibility = 'hidden';
            this$Nurikabe.fail_39tuiz$.style.visibility = 'visible';
          }
        };
      },
      Nurikabe$f_3: function (closure$solve) {
        return function (it) {
          closure$solve();
        };
      },
      Nurikabe$f_4: function (closure$solve) {
        return function (it) {
          closure$solve();
        };
      }
    }),
    black: function ($receiver) {
      var destination = new Kotlin.ArrayList();
      var tmp$0;
      tmp$0 = $receiver.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        if (element.value === -1) {
          destination.add_za3rmp$(element);
        }
      }
      return destination;
    },
    connected$f: function (it) {
      return it.value <= -1;
    },
    connected: function ($receiver) {
      var c;
      var blacks = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.connected$f);
      var count = {v: Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(blacks)};
      if (count.v === 0)
        return true;
      var tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.first_uya9q7$(blacks).position
      , x = tmp$0.component1()
      , y = tmp$0.component2();
      var stack = new _.Stack();
      var visited = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
      stack.push_za3rmp$(_.PositionValue_init_qt1joh$(x, y, $receiver.get_vux9f0$(x, y)));
      while (!stack.isEmpty) {
        var p = stack.pop();
        if (visited.contains_za3rmp$(p))
          continue;
        visitor$break: {
          if (p.value <= -1) {
            count.v--;
            c = true;
            break visitor$break;
          }
          c = false;
        }
        Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(visited, p);
        if (c) {
          var tmp$2 = p.position
          , nx = tmp$2.component1()
          , ny = tmp$2.component2();
          var tmp$1;
          tmp$1 = $receiver.neighbors_vux9f0$(nx, ny).iterator();
          while (tmp$1.hasNext()) {
            var element = tmp$1.next();
            stack.push_za3rmp$(element);
          }
        }
      }
      return count.v === 0;
    },
    paintYellow$f: function (it) {
      return it.value === 0;
    },
    paintYellow: function ($receiver) {
      var tmp$0;
      tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.paintYellow$f).iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        var tmp$1 = element.position
        , x = tmp$1.component1()
        , y = tmp$1.component2();
        $receiver.set_qt1joh$(x, y, -2);
      }
    },
    isBox: function ($receiver, x, y) {
      if ($receiver.get_vux9f0$(x, y) !== -1)
        return false;
      var nw = _.black($receiver.neighborsNW_vux9f0$(x, y)).size === 3;
      var ne = _.black($receiver.neighborsNE_vux9f0$(x, y)).size === 3;
      var sw = _.black($receiver.neighborsSW_vux9f0$(x, y)).size === 3;
      var se = _.black($receiver.neighborsSE_vux9f0$(x, y)).size === 3;
      if (nw || ne || sw || se)
        return true;
      return false;
    },
    Counter: Kotlin.createClass(null, function (init) {
      if (init === void 0)
        init = 0;
      this.$value_by46qp$ = init;
    }, /** @lends _.Counter.prototype */ {
      value: {
        get: function () {
          return this.$value_by46qp$;
        },
        set: function (value) {
          this.$value_by46qp$ = value;
        }
      },
      increment: function () {
        this.value++;
      },
      decrement: function () {
        this.value--;
      },
      copy: function () {
        return new _.Counter(this.value);
      },
      toString: function () {
        return this.value.toString();
      }
    }),
    Solver: Kotlin.createClass(null, function (input) {
      this.numbers_934qrz$ = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(input.withIndex(), _.Solver.numbers_934qrz$f));
      this.board_myhj6z$ = this.preprocess(input.copy());
      var $receiver = Kotlin.modules['stdlib'].kotlin.collections.withIndex_q5oq31$(this.numbers_934qrz$);
      var destination = new Kotlin.ArrayList();
      var tmp$8;
      tmp$8 = $receiver.iterator();
      while (tmp$8.hasNext()) {
        var element = tmp$8.next();
        if (element.value.value > 1) {
          destination.add_za3rmp$(element);
        }
      }
      var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
      var tmp$9;
      tmp$9 = destination.iterator();
      while (tmp$9.hasNext()) {
        var item = tmp$9.next();
        destination_0.add_za3rmp$(item.index);
      }
      this.hungry_4brka0$ = Kotlin.modules['stdlib'].kotlin.collections.toSet_q5oq31$(destination_0);
      var tmp$4 = this.board_myhj6z$.size;
      var $receiver_1 = this.numbers_934qrz$;
      var destination_1 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver_1, 10));
      var tmp$11;
      tmp$11 = $receiver_1.iterator();
      while (tmp$11.hasNext()) {
        var item_0 = tmp$11.next();
        destination_1.add_za3rmp$(item_0.value);
      }
      var tmp$6 = tmp$4 - Kotlin.modules['stdlib'].kotlin.collections.sum_q1ah1m$(destination_1);
      var $receiver_2 = this.board_myhj6z$;
      var destination_2 = new Kotlin.ArrayList();
      var tmp$13;
      tmp$13 = $receiver_2.iterator();
      while (tmp$13.hasNext()) {
        var element_0 = tmp$13.next();
        if (element_0 === -1) {
          destination_2.add_za3rmp$(element_0);
        }
      }
      this.blacks_1cbalr$ = tmp$6 - destination_2.size;
      this.last_j2qaup$ = this.board_myhj6z$;
    }, /** @lends _.Solver.prototype */ {
      preprocess: function ($receiver) {
        _.paintYellow($receiver);
        var tmp$0;
        var index = 0;
        tmp$0 = this.numbers_934qrz$.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          var i = index++;
          var tmp$1 = item.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          $receiver.set_qt1joh$(x, y, i);
        }
        return $receiver;
      },
      postprocess: function ($receiver) {
        var wi = $receiver.withIndex();
        var tmp$0;
        tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(wi, _.Solver.postprocess$f).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var tmp$1 = element.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          $receiver.set_qt1joh$(x, y, 0);
        }
        var tmp$2;
        tmp$2 = this.numbers_934qrz$.iterator();
        while (tmp$2.hasNext()) {
          var element_0 = tmp$2.next();
          var tmp$3 = element_0.position
          , x_0 = tmp$3.component1()
          , y_0 = tmp$3.component2();
          $receiver.set_qt1joh$(x_0, y_0, element_0.value);
        }
      },
      solveIn: function (board, offset, blacks, hungry) {
        var tmp$0, tmp$1;
        this.last_j2qaup$ = board;
        var black = _.Solver.solveIn$black(board);
        var yellow = _.Solver.solveIn$yellow(board);
        var paintBlack = _.Solver.solveIn$paintBlack(blacks, board);
        var paintBlack_0 = _.Solver.solveIn$paintBlack_0(board, paintBlack);
        var process = _.Solver.solveIn$process(offset, board, hungry, this, yellow, paintBlack);
        if (offset >= 0) {
          if (board.get_za3lpa$(offset) !== -2)
            return null;
          if (paintBlack_0(offset))
            return null;
        }
        if (!process())
          return null;
        if (!_.connected(board))
          return null;
        if (blacks.value === 0 && hungry.isEmpty())
          return board;
        if (blacks.value === 0) {
          if (!process(board.size))
            return null;
          if (!_.connected(board))
            return null;
          if (!hungry.isEmpty())
            return null;
          return board;
        }
        if (hungry.isEmpty()) {
          var tmp$2;
          tmp$2 = yellow().iterator();
          while (tmp$2.hasNext()) {
            var element = tmp$2.next();
            var tmp$3 = element.position
            , x = tmp$3.component1()
            , y = tmp$3.component2();
            if (paintBlack(x, y))
              return null;
          }
          if (!_.connected(board))
            return null;
          return board;
        }
        tmp$0 = offset + 1;
        tmp$1 = board.size - 1;
        for (var i = tmp$0; i <= tmp$1; i++) {
          var r = this.solveIn(board.copy(), i, blacks.copy(), Kotlin.modules['stdlib'].kotlin.collections.toMutableSet_q5oq31$(hungry));
          if (r != null)
            return r;
        }
        return null;
      },
      solve: function () {
        var solution = this.solveIn(this.board_myhj6z$, -1, new _.Counter(this.blacks_1cbalr$), Kotlin.modules['stdlib'].kotlin.collections.toMutableSet_q5oq31$(this.hungry_4brka0$));
        solution != null ? this.postprocess(solution) : null;
        return solution;
      }
    }, /** @lends _.Solver */ {
      postprocess$f: function (it) {
        return it.value >= 0;
      },
      black$f: function (it) {
        return it.value === -1;
      },
      solveIn$black: function (closure$board) {
        return function () {
          return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(closure$board.withIndex(), _.Solver.black$f);
        };
      },
      yellow$f: function (it) {
        return it.value === -2;
      },
      solveIn$yellow: function (closure$board) {
        return function () {
          return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(closure$board.withIndex(), _.Solver.yellow$f);
        };
      },
      solveIn$paintBlack: function (closure$blacks, closure$board) {
        return function (x, y) {
          closure$blacks.decrement();
          closure$board.set_qt1joh$(x, y, -1);
          return _.isBox(closure$board, x, y);
        };
      },
      solveIn$paintBlack_0: function (closure$board, closure$paintBlack) {
        return function (offset) {
          var y = offset / closure$board.columns | 0;
          var x = offset % closure$board.columns;
          return closure$paintBlack(x, y);
        };
      },
      process$findAP: function (closure$visited, closure$time, closure$disc, closure$low, closure$board, closure$parent, closure$aps) {
        return function closure$findAP(u) {
          var children = {v: 0};
          closure$visited.add_za3rmp$(u);
          closure$time.v++;
          closure$disc.put_wn2jw4$(u, closure$time.v);
          closure$low.put_wn2jw4$(u, ++closure$time.v);
          var tmp$0 = u.position
          , x = tmp$0.component1()
          , y = tmp$0.component2();
          var $receiver = closure$board.neighbors_vux9f0$(x, y);
          var destination = new Kotlin.ArrayList();
          var tmp$1;
          tmp$1 = $receiver.iterator();
          while (tmp$1.hasNext()) {
            var element = tmp$1.next();
            if (element.value <= -1) {
              destination.add_za3rmp$(element);
            }
          }
          var neighbors = destination;
          var tmp$2;
          tmp$2 = neighbors.iterator();
          while (tmp$2.hasNext()) {
            var element_0 = tmp$2.next();
            var closure$visited_0 = closure$visited;
            var closure$parent_0 = closure$parent;
            var closure$findAP_0 = closure$findAP;
            var closure$low_0 = closure$low;
            var closure$aps_0 = closure$aps;
            var closure$disc_0 = closure$disc;
            var tmp$7, tmp$4, tmp$3, tmp$6, tmp$5, tmp$8;
            var v = element_0;
            if (!closure$visited_0.contains_za3rmp$(v)) {
              children.v++;
              closure$parent_0.put_wn2jw4$(v, u);
              closure$findAP_0(v);
              closure$low_0.put_wn2jw4$(u, Math.min((tmp$7 = closure$low_0.get_za3rmp$(u)) != null ? tmp$7 : 0, (tmp$4 = closure$low_0.get_za3rmp$(v)) != null ? tmp$4 : 0));
              if (closure$parent_0.get_za3rmp$(u) == null && children.v > 1)
                closure$aps_0.add_za3rmp$(u);
              if (closure$parent_0.get_za3rmp$(u) != null && ((tmp$3 = closure$low_0.get_za3rmp$(v)) != null ? tmp$3 : 0) >= ((tmp$6 = closure$disc_0.get_za3rmp$(u)) != null ? tmp$6 : 0))
                closure$aps_0.add_za3rmp$(u);
            }
             else if (!Kotlin.equals(v, closure$parent_0.get_za3rmp$(u)))
              closure$low_0.put_wn2jw4$(u, Math.min((tmp$5 = closure$low_0.get_za3rmp$(u)) != null ? tmp$5 : 0, (tmp$8 = closure$disc_0.get_za3rmp$(v)) != null ? tmp$8 : 0));
          }
        };
      },
      process$f_2: function (it) {
        return it.value <= -1;
      },
      solveIn$process: function (closure$offset, closure$board, closure$hungry, this$Solver, closure$yellow, closure$paintBlack) {
        return function (offset) {
          if (offset === void 0)
            offset = closure$offset;
          do {
            var changes = {v: 0};
            var tmp$0;
            tmp$0 = closure$hungry.iterator();
            while (tmp$0.hasNext()) {
              var element = tmp$0.next();
              var this$Solver_0 = this$Solver;
              var closure$board_0 = closure$board;
              var closure$hungry_0 = closure$hungry;
              var c;
              var h = element;
              var n = this$Solver_0.numbers_934qrz$.get_za3lpa$(h);
              var tmp$4 = n.position
              , x = tmp$4.component1()
              , y = tmp$4.component2();
              var off = closure$board_0.offset_vux9f0$(x, y);
              if (off < offset) {
                var counter = {v: n.value};
                var canExpand = {v: false};
                var stack = new _.Stack();
                var visited_0 = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
                stack.push_za3rmp$(_.PositionValue_init_qt1joh$(x, y, closure$board_0.get_vux9f0$(x, y)));
                while (!stack.isEmpty) {
                  var p = stack.pop();
                  if (visited_0.contains_za3rmp$(p))
                    continue;
                  visitor$break: {
                    var tmp$3 = p.position
                    , dx = tmp$3.component1()
                    , dy = tmp$3.component2();
                    var value = p.value;
                    if (closure$board_0.offset_vux9f0$(dx, dy) < offset) {
                      if (value >= 0 && value !== h)
                        return false;
                      if (value === -1) {
                        c = false;
                        break visitor$break;
                      }
                      counter.v--;
                      closure$board_0.set_qt1joh$(dx, dy, h);
                      if (value === -2)
                        changes.v++;
                      c = true;
                      break visitor$break;
                    }
                     else if (value === -2) {
                      canExpand.v = true;
                    }
                    c = false;
                  }
                  Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(visited_0, p);
                  if (c) {
                    var tmp$2 = p.position
                    , nx = tmp$2.component1()
                    , ny = tmp$2.component2();
                    var tmp$1;
                    tmp$1 = closure$board_0.neighbors_vux9f0$(nx, ny).iterator();
                    while (tmp$1.hasNext()) {
                      var element_0 = tmp$1.next();
                      stack.push_za3rmp$(element_0);
                    }
                  }
                }
                if (counter.v === 0)
                  closure$hungry_0.remove_za3rmp$(h);
                if (counter.v < 0)
                  return false;
                if (counter.v > 0 && !canExpand.v)
                  return false;
              }
            }
            var closure$board_2 = closure$board;
            var tmp$6;
            tmp$6 = closure$yellow().iterator();
            while (tmp$6.hasNext()) {
              var element_1 = tmp$6.next();
              var tmp$5 = element_1.position
              , x_0 = tmp$5.component1()
              , y_0 = tmp$5.component2();
              var n_0 = closure$board_2.neighbors_vux9f0$(x_0, y_0);
              var closure$hungry_1 = closure$hungry;
              var closure$paintBlack_0 = closure$paintBlack;
              var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(n_0, 10));
              var tmp$7;
              tmp$7 = n_0.iterator();
              while (tmp$7.hasNext()) {
                var item = tmp$7.next();
                destination.add_za3rmp$(item.value);
              }
              var destination_0 = new Kotlin.ArrayList();
              var tmp$8;
              tmp$8 = destination.iterator();
              while (tmp$8.hasNext()) {
                var element_2 = tmp$8.next();
                if (element_2 >= 0) {
                  destination_0.add_za3rmp$(element_2);
                }
              }
              var whts = Kotlin.modules['stdlib'].kotlin.collections.distinct_q5oq31$(destination_0);
              if (whts.size >= 2 || (whts.size === 1 && !closure$hungry_1.contains_za3rmp$(Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(whts)))) {
                changes.v++;
                if (closure$paintBlack_0(x_0, y_0))
                  return false;
              }
            }
            var closure$board_4 = closure$board;
            var tmp$10;
            tmp$10 = closure$yellow().iterator();
            while (tmp$10.hasNext()) {
              var element_3 = tmp$10.next();
              var tmp$9 = element_3.position
              , x_2 = tmp$9.component1()
              , y_2 = tmp$9.component2();
              var n_2 = closure$board_4.neighbors_vux9f0$(x_2, y_2);
              var closure$paintBlack_1 = closure$paintBlack;
              var destination_1 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(n_2, 10));
              var tmp$11;
              tmp$11 = n_2.iterator();
              while (tmp$11.hasNext()) {
                var item_0 = tmp$11.next();
                destination_1.add_za3rmp$(item_0.value);
              }
              var destination_2 = new Kotlin.ArrayList();
              var tmp$12;
              tmp$12 = destination_1.iterator();
              while (tmp$12.hasNext()) {
                var element_4 = tmp$12.next();
                if (element_4 === -1) {
                  destination_2.add_za3rmp$(element_4);
                }
              }
              var blks = destination_2;
              if (blks.size === n_2.size) {
                changes.v++;
                if (closure$paintBlack_1(x_2, y_2))
                  return false;
              }
            }
            var aps = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
            var visited = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
            var disc = Kotlin.modules['stdlib'].kotlin.collections.mutableMapOf_eoa9s7$([]);
            var low = Kotlin.modules['stdlib'].kotlin.collections.mutableMapOf_eoa9s7$([]);
            var parent = Kotlin.modules['stdlib'].kotlin.collections.mutableMapOf_eoa9s7$([]);
            var time = {v: 0};
            var findAP = _.Solver.process$findAP(visited, time, disc, low, closure$board, parent, aps);
            var first = Kotlin.modules['stdlib'].kotlin.sequences.firstOrNull_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(closure$board.withIndex(), _.Solver.process$f_2));
            if (first != null)
              findAP(first);
            var tmp$13;
            tmp$13 = aps.iterator();
            while (tmp$13.hasNext()) {
              var element_5 = tmp$13.next();
              var closure$board_6 = closure$board;
              var closure$paintBlack_2 = closure$paintBlack;
              var tmp$14 = element_5.position
              , x_4 = tmp$14.component1()
              , y_4 = tmp$14.component2();
              if (closure$board_6.get_vux9f0$(x_4, y_4) === -2) {
                changes.v++;
                if (closure$paintBlack_2(x_4, y_4))
                  return false;
              }
            }
          }
           while (changes.v > 0);
          return true;
        };
      },
      numbers_934qrz$f: function (it) {
        return it.value > 0;
      }
    }),
    Stack: Kotlin.createClass(function () {
      return [Kotlin.modules['builtins'].kotlin.collections.Iterable];
    }, function () {
      this.list_54ut98$ = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
    }, /** @lends _.Stack.prototype */ {
      size: {
        get: function () {
          return this.list_54ut98$.size;
        }
      },
      isEmpty: {
        get: function () {
          return this.size === 0;
        }
      },
      push_za3rmp$: function (element) {
        Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(this.list_54ut98$, element);
      },
      pop: function () {
        return this.list_54ut98$.removeAt_za3lpa$(this.list_54ut98$.size - 1);
      },
      iterator: function () {
        return this.list_54ut98$.iterator();
      }
    }),
    floor_yrwdxs$: function ($receiver) {
      return Math.floor($receiver);
    },
    mousePosition_whqsci$: function ($receiver, element) {
      var rect = element.getBoundingClientRect();
      return new Kotlin.modules['stdlib'].kotlin.Pair($receiver.clientX - rect.left, $receiver.clientY - rect.top);
    },
    fill_o6wbmy$: function ($receiver, x, y, color) {
      var c;
      var toReplace = $receiver.get_vux9f0$(x, y);
      var stack = new _.Stack();
      var visited = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
      stack.push_za3rmp$(_.PositionValue_init_qt1joh$(x, y, $receiver.get_vux9f0$(x, y)));
      while (!stack.isEmpty) {
        var p = stack.pop();
        if (visited.contains_za3rmp$(p))
          continue;
        visitor$break: {
          if (p.value === toReplace) {
            var tmp$2 = p.position
            , nx_0 = tmp$2.component1()
            , ny_0 = tmp$2.component2();
            $receiver.set_qt1joh$(nx_0, ny_0, color);
            c = true;
            break visitor$break;
          }
          c = false;
        }
        Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(visited, p);
        if (c) {
          var tmp$0 = p.position
          , nx = tmp$0.component1()
          , ny = tmp$0.component2();
          var tmp$1;
          tmp$1 = $receiver.neighbors_vux9f0$(nx, ny).iterator();
          while (tmp$1.hasNext()) {
            var element = tmp$1.next();
            stack.push_za3rmp$(element);
          }
        }
      }
    }
  });
  Kotlin.defineModule('nurikabe', _);
  _.main_kand9s$([]);
}(Kotlin));
