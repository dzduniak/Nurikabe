(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(function () {
    this.BLACK = -1;
    this.YELLOW = -2;
    this.DOT = -3;
    this.debug = true;
  }, /** @lends _ */ {
    PositionValue: Kotlin.createClass(null, function (position, value) {
      this.position = position;
      this.value = value;
    }, /** @lends _.PositionValue.prototype */ {
      toString: function () {
        return '[' + this.position + ' : ' + this.value + ']';
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
      get_bunuun$: function (p) {
        return this.get_vux9f0$(p.first, p.second);
      },
      set_av77s6$: function (p, value) {
        this.set_qt1joh$(p.first, p.second, value);
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
      neighbors_bunuun$: function (p) {
        return this.neighbors_vux9f0$(p.first, p.second);
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
      depthFirst_j3dvhl$: function (x, y, visitor) {
        var visited = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
        var search = _.Board.depthFirst_j3dvhl$search(visited, visitor, this);
        search(new _.PositionValue(new Kotlin.modules['stdlib'].kotlin.Pair(x, y), this.get_vux9f0$(x, y)));
      },
      depthFirst_kn0zno$: function (p, visitor) {
        this.depthFirst_j3dvhl$(p.first, p.second, visitor);
      },
      toString: function () {
        return Kotlin.modules['stdlib'].kotlin.collections.joinToString_ld60a2$(this.rowsList, ',  ', '[ ', ' ]', void 0, void 0, _.Board.toString$f);
      },
      equals_za3rmp$: function (other) {
        var tmp$0;
        if (this === other)
          return true;
        Kotlin.isType(tmp$0 = other, _.Board) ? tmp$0 : Kotlin.throwCCE();
        if (this.rows !== other.rows)
          return false;
        if (this.columns !== other.columns)
          return false;
        if (!Kotlin.equals(this.values_1itv7u$, other.values_1itv7u$))
          return false;
        return true;
      },
      hashCode: function () {
        var result = this.rows;
        result = 31 * result + this.columns;
        result = 31 * result + Kotlin.hashCode(this.values_1itv7u$);
        result = 31 * result + this.size;
        return result;
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
      depthFirst_j3dvhl$search: function (closure$visited, closure$visitor, this$Board) {
        return function closure$search(p) {
          if (closure$visited.contains_za3rmp$(p.position))
            return;
          var c = closure$visitor(p);
          Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(closure$visited, p.position);
          if (c) {
            var tmp$0 = p.position
            , nx = tmp$0.component1()
            , ny = tmp$0.component2();
            var tmp$1;
            tmp$1 = this$Board.neighbors_vux9f0$(nx, ny).iterator();
            while (tmp$1.hasNext()) {
              var element = tmp$1.next();
              closure$search(element);
            }
          }
        };
      },
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
      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8;
      this.rowsInput_9llf0m$ = Kotlin.isType(tmp$0 = document.getElementById('rows'), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
      this.columnsInput_v312bg$ = Kotlin.isType(tmp$1 = document.getElementById('columns'), HTMLInputElement) ? tmp$1 : Kotlin.throwCCE();
      this.solve_u86wag$ = Kotlin.isType(tmp$2 = document.getElementById('solve'), HTMLButtonElement) ? tmp$2 : Kotlin.throwCCE();
      this.next_39onau$ = Kotlin.isType(tmp$3 = document.getElementById('next'), HTMLButtonElement) ? tmp$3 : Kotlin.throwCCE();
      this.update_cozkyo$ = Kotlin.isType(tmp$4 = document.getElementById('update'), HTMLButtonElement) ? tmp$4 : Kotlin.throwCCE();
      this.fail_39tuiz$ = Kotlin.isType(tmp$5 = document.getElementById('notsolved'), HTMLParagraphElement) ? tmp$5 : Kotlin.throwCCE();
      this.table_u7w961$ = Kotlin.isType(tmp$6 = document.getElementById('board'), HTMLTableElement) ? tmp$6 : Kotlin.throwCCE();
      this.tbody_u7vcpt$ = Kotlin.isType(tmp$7 = this.table_u7w961$.tBodies[0], HTMLTableSectionElement) ? tmp$7 : Kotlin.throwCCE();
      this.debug_ugmehw$ = Kotlin.isType(tmp$8 = document.getElementById('debug'), HTMLParagraphElement) ? tmp$8 : Kotlin.throwCCE();
      this.board = _.Board_init_qt1joh$(this.rows, this.columns, 0);
      this.dirty_ugjip1$ = false;
      this.table_u7w961$.ondblclick = _.Nurikabe.Nurikabe$f;
      this.table_u7w961$.addEventListener('selectstart', _.Nurikabe.Nurikabe$f_0);
      this.table_u7w961$.oncontextmenu = _.Nurikabe.Nurikabe$f_1;
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.update_cozkyo$, void 0, _.Nurikabe.Nurikabe$f_2(this));
      this.update();
      var solver = {v: new _.Solver(this.board)};
      var solve = _.Nurikabe.Nurikabe$solve(this, solver);
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.solve_u86wag$, void 0, _.Nurikabe.Nurikabe$f_3(solve));
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this.next_39onau$, void 0, _.Nurikabe.Nurikabe$f_4(solve));
      var counter = {v: 0};
      var button = _.Nurikabe.Nurikabe$button(counter, this, solver);
      button.call(this.debug_ugmehw$, 'Next step', false, _.Nurikabe.Nurikabe$f_5);
      button.call(this.debug_ugmehw$, 'Apply all', false, _.Nurikabe.Nurikabe$f_6(solver));
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
      loadBoard_dvdyvu$: function (board) {
        var tmp$0;
        this.dirty_ugjip1$ = true;
        this.rowsInput_9llf0m$.valueAsNumber = board.rows;
        this.columnsInput_v312bg$.valueAsNumber = board.columns;
        this.board = board;
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
            td.onmouseup = _.Nurikabe.f_1(board, x, y, this);
          }
        }
      },
      update: function () {
        this.loadBoard_dvdyvu$(_.Board_init_qt1joh$(this.rows, this.columns, 0));
        this.refresh();
        this.next_39onau$.style.visibility = 'hidden';
      },
      refresh: function () {
        this.dirty_ugjip1$ = true;
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
          if (item === _.DOT)
            tmp$1 = 'dot';
          else if (item === _.YELLOW)
            tmp$1 = 'yellow';
          else if (item === _.BLACK)
            tmp$1 = 'black';
          else
            tmp$1 = 'white';
          tmp$2.className = tmp$1;
        }
      },
      example1: function () {
        var board = _.Board_init_qt1joh$(11, 9, 0);
        board.set_qt1joh$(0, 0, 1);
        board.set_qt1joh$(7, 0, 1);
        board.set_qt1joh$(1, 1, 4);
        board.set_qt1joh$(4, 1, 1);
        board.set_qt1joh$(8, 2, 2);
        board.set_qt1joh$(5, 3, 9);
        board.set_qt1joh$(1, 5, 11);
        board.set_qt1joh$(7, 5, 3);
        board.set_qt1joh$(6, 7, 1);
        board.set_qt1joh$(3, 8, 1);
        board.set_qt1joh$(7, 8, 2);
        board.set_qt1joh$(0, 9, 9);
        board.set_qt1joh$(8, 10, 1);
        return board;
      },
      example2: function () {
        var board = _.Board_init_qt1joh$(11, 9, 0);
        board.set_qt1joh$(7, 0, 2);
        board.set_qt1joh$(0, 1, 2);
        board.set_qt1joh$(5, 1, 2);
        board.set_qt1joh$(1, 4, 38);
        board.set_qt1joh$(4, 4, 1);
        board.set_qt1joh$(3, 5, 2);
        board.set_qt1joh$(5, 6, 3);
        board.set_qt1joh$(4, 8, 1);
        board.set_qt1joh$(0, 9, 2);
        return board;
      }
    }, /** @lends _.Nurikabe */ {
      f: function () {
      },
      f_0: function () {
      },
      f_1: function (closure$board, closure$x, closure$y, this$Nurikabe) {
        return function (e) {
          var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10, tmp$11;
          var me = Kotlin.isType(tmp$0 = e, MouseEvent) ? tmp$0 : Kotlin.throwCCE();
          var value = closure$board.get_vux9f0$(closure$x, closure$y);
          tmp$1 = me.button;
          if (tmp$1 === 0)
            if (value === _.DOT)
              this$Nurikabe.board.set_qt1joh$(closure$x, closure$y, 0);
            else
              tmp$2 = this$Nurikabe.board, tmp$3 = closure$x, tmp$4 = closure$y, tmp$5 = tmp$2.get_vux9f0$(tmp$3, tmp$4), tmp$6 = tmp$5, tmp$2.set_qt1joh$(tmp$3, tmp$4, tmp$5 + 1), tmp$6;
          else if (tmp$1 === 1)
            this$Nurikabe.board.set_qt1joh$(closure$x, closure$y, _.DOT);
          else if (tmp$1 === 2)
            if (value === _.DOT)
              this$Nurikabe.board.set_qt1joh$(closure$x, closure$y, _.BLACK);
            else if (value > -1)
              tmp$7 = this$Nurikabe.board, tmp$8 = closure$x, tmp$9 = closure$y, tmp$10 = tmp$7.get_vux9f0$(tmp$8, tmp$9), tmp$11 = tmp$10, tmp$7.set_qt1joh$(tmp$8, tmp$9, tmp$10 - 1), tmp$11;
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
      Nurikabe$solve: function (this$Nurikabe, closure$solver) {
        return function (next) {
          if (next === void 0)
            next = false;
          if (!next)
            closure$solver.v = new _.Solver(this$Nurikabe.board);
          var result = closure$solver.v.nextSolution();
          if (result != null) {
            this$Nurikabe.next_39onau$.style.visibility = 'visible';
            this$Nurikabe.fail_39tuiz$.style.display = 'none';
            this$Nurikabe.board = result;
            this$Nurikabe.refresh();
          }
           else {
            this$Nurikabe.next_39onau$.style.visibility = 'hidden';
            this$Nurikabe.fail_39tuiz$.style.display = 'block';
          }
          this$Nurikabe.dirty_ugjip1$ = false;
        };
      },
      Nurikabe$f_3: function (closure$solve) {
        return function (it) {
          closure$solve();
        };
      },
      Nurikabe$f_4: function (closure$solve) {
        return function (it) {
          closure$solve(true);
        };
      },
      f_3: function (this$Nurikabe, closure$solver, closure$a) {
        return function (it) {
          if (this$Nurikabe.dirty_ugjip1$)
            closure$solver.v = new _.Solver(this$Nurikabe.board);
          closure$a.call(closure$solver.v);
          this$Nurikabe.board = closure$solver.v.current;
          this$Nurikabe.refresh();
          this$Nurikabe.dirty_ugjip1$ = false;
        };
      },
      button$f: function (closure$index, closure$string, closure$counter, this$Nurikabe, closure$solver, closure$a) {
        return function () {
          this.textContent = closure$index ? closure$string + ' ' + closure$counter.v : closure$string;
          Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(this, void 0, _.Nurikabe.f_3(this$Nurikabe, closure$solver, closure$a));
        };
      },
      button$f_0: function () {
        this.className = 'divider';
      },
      Nurikabe$button: function (closure$counter, this$Nurikabe, closure$solver) {
        return function (string, index, a) {
          if (string === void 0)
            string = 'Technique';
          if (index === void 0)
            index = true;
          Kotlin.modules['stdlib'].kotlin.dom.build.addElement_hart3b$(this, 'button', void 0, _.Nurikabe.button$f(index, string, closure$counter, this$Nurikabe, closure$solver, a));
          Kotlin.modules['stdlib'].kotlin.dom.build.addElement_hart3b$(this, 'div', void 0, _.Nurikabe.button$f_0);
          closure$counter.v++;
        };
      },
      Nurikabe$f_5: function () {
        this.nextStep();
      },
      Nurikabe$f_6: function (closure$solver) {
        return function () {
          closure$solver.v.currentState.applyAll_6taknv$();
        };
      }
    }),
    white_3ucpiw$f: function (it) {
      return it.value >= 0;
    },
    white_3ucpiw$: function ($receiver) {
      return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.white_3ucpiw$f);
    },
    dot_3ucpiw$f: function (it) {
      return it.value === _.DOT;
    },
    dot_3ucpiw$: function ($receiver) {
      return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.dot_3ucpiw$f);
    },
    whiteOrDot_3ucpiw$f: function (it) {
      return it.value === _.DOT || it.value >= 0;
    },
    whiteOrDot_3ucpiw$: function ($receiver) {
      return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.whiteOrDot_3ucpiw$f);
    },
    black_3ucpiw$f: function (it) {
      return it.value === _.BLACK;
    },
    black_3ucpiw$: function ($receiver) {
      return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.black_3ucpiw$f);
    },
    yellow_3ucpiw$f: function (it) {
      return it.value === _.YELLOW;
    },
    yellow_3ucpiw$: function ($receiver) {
      return Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.yellow_3ucpiw$f);
    },
    isBlackOrYellow_s8ev3o$: function ($receiver) {
      return $receiver === _.BLACK || $receiver === _.YELLOW;
    },
    distance_dptiiy$: function (p1, p2) {
      return _.abs_s8ev3o$(p1.first - p2.first) + _.abs_s8ev3o$(p1.second - p2.second);
    },
    trace_za3rmp$: function (s) {
      if (_.debug)
        Kotlin.println(s);
    },
    SolverState: Kotlin.createClass(null, function (board, numbers, totalWhiteCount, toGo, fail, solved, previousNumber, triedBefore) {
      if (totalWhiteCount === void 0) {
        var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(numbers, 10));
        var tmp$1;
        tmp$1 = numbers.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination.add_za3rmp$(item.value);
        }
        totalWhiteCount = Kotlin.modules['stdlib'].kotlin.collections.sum_q1ah1m$(destination);
      }
      if (toGo === void 0) {
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(numbers, 10));
        var tmp$4;
        tmp$4 = numbers.iterator();
        while (tmp$4.hasNext()) {
          var item_0 = tmp$4.next();
          destination_0.add_za3rmp$(item_0.value - 1);
        }
        toGo = Kotlin.modules['stdlib'].kotlin.collections.toMutableList_mwto7b$(destination_0);
      }
      if (fail === void 0)
        fail = false;
      if (solved === void 0)
        solved = false;
      if (previousNumber === void 0)
        previousNumber = -1;
      if (triedBefore === void 0)
        triedBefore = Kotlin.modules['stdlib'].kotlin.collections.emptySet();
      this.board = board;
      this.numbers = numbers;
      this.totalWhiteCount = totalWhiteCount;
      this.toGo = toGo;
      this.fail = fail;
      this.solved = solved;
      this.previousNumber = previousNumber;
      this.triedBefore = triedBefore;
    }, /** @lends _.SolverState.prototype */ {
      copy: function () {
        return new _.SolverState(this.board.copy(), this.numbers, this.totalWhiteCount, Kotlin.modules['stdlib'].kotlin.collections.toMutableList_mwto7b$(this.toGo));
      },
      copy_8mkkoj$: function (previousNumber, triedBefore) {
        if (previousNumber === void 0)
          previousNumber = -1;
        if (triedBefore === void 0)
          triedBefore = Kotlin.modules['stdlib'].kotlin.collections.emptySet();
        return new _.SolverState(this.board.copy(), this.numbers, this.totalWhiteCount, Kotlin.modules['stdlib'].kotlin.collections.toMutableList_mwto7b$(this.toGo), void 0, void 0, previousNumber, triedBefore);
      },
      current: {
        get: function () {
          this.checkIfSolved();
          return this.postprocess(this.board.copy());
        }
      },
      postprocess: function (board) {
        if (this.solved) {
          var tmp$0;
          tmp$0 = _.yellow_3ucpiw$(board).iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            board.set_av77s6$(element.position, _.BLACK);
          }
        }
        var tmp$1;
        tmp$1 = _.white_3ucpiw$(board).iterator();
        while (tmp$1.hasNext()) {
          var element_0 = tmp$1.next();
          board.set_av77s6$(element_0.position, this.solved ? 0 : _.DOT);
        }
        var tmp$2;
        tmp$2 = this.numbers.iterator();
        while (tmp$2.hasNext()) {
          var element_1 = tmp$2.next();
          board.set_av77s6$(element_1.position, element_1.value);
        }
        return board;
      },
      nextStep: function () {
        if (this.fail)
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        this.applyAll_6taknv$(false);
        this.checkIfSolved();
        if (this.fail)
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        if (this.solved)
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        var yellow = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.map_mzhnvn$(_.yellow_3ucpiw$(this.board), _.SolverState.nextStep$f));
        var $receiver = this.toGo;
        var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver, 10));
        var tmp$2;
        var index = 0;
        tmp$2 = $receiver.iterator();
        while (tmp$2.hasNext()) {
          var item = tmp$2.next();
          destination.add_za3rmp$(new Kotlin.modules['stdlib'].kotlin.Pair(index++, item));
        }
        var destination_0 = new Kotlin.ArrayList();
        var tmp$4;
        tmp$4 = destination.iterator();
        while (tmp$4.hasNext()) {
          var element = tmp$4.next();
          if (element.second > 0) {
            destination_0.add_za3rmp$(element);
          }
        }
        var hungry = destination_0;
        if (hungry.size === 0) {
          _.trace_za3rmp$('Fail hungry');
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        }
        if (Kotlin.modules['stdlib'].kotlin.collections.sum_q1ah1m$(this.toGo) > yellow.size + Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(_.dot_3ucpiw$(this.board))) {
          _.trace_za3rmp$('Fail sum');
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        }
        if (!this.canExpandDots()) {
          _.trace_za3rmp$('Fail expand dots');
          return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
        }
        var tmp$5;
        tmp$5 = hungry.iterator();
        while (tmp$5.hasNext()) {
          var element_0 = tmp$5.next();
          if (!this.canExpand(element_0.first)) {
            _.trace_za3rmp$('Fail expand hungry');
            return Kotlin.modules['stdlib'].kotlin.collections.emptyList();
          }
        }
        var iterator = hungry.iterator();
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty collection can't be reduced.");
        }
        var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var pair1 = accumulator;
          var pair2 = iterator.next();
          accumulator = pair1.second < pair2.second ? pair1 : pair2;
        }
        var firstHungry = accumulator.first;
        var triedBefore = Kotlin.modules['stdlib'].kotlin.collections.toMutableSet_q5oq31$(this.triedBefore);
        var candidates = Kotlin.modules['stdlib'].kotlin.collections.toMutableSet_q5oq31$(yellow);
        if (firstHungry === this.previousNumber)
          Kotlin.modules['stdlib'].kotlin.collections.minusAssign_fwwv5a$(candidates, triedBefore);
        var result = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
        var destination_1 = new Kotlin.ArrayList();
        var tmp$6;
        tmp$6 = candidates.iterator();
        while (tmp$6.hasNext()) {
          var element_1 = tmp$6.next();
          var $receiver_4 = this.board.neighbors_bunuun$(element_1);
          var destination_2 = new Kotlin.ArrayList();
          var tmp$7;
          tmp$7 = $receiver_4.iterator();
          while (tmp$7.hasNext()) {
            var element_2 = tmp$7.next();
            if (element_2.value >= 0) {
              destination_2.add_za3rmp$(element_2);
            }
          }
          var neighbors = destination_2;
          if (neighbors.size > 0 && Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(neighbors).value === firstHungry) {
            destination_1.add_za3rmp$(element_1);
          }
        }
        var tmp$8;
        tmp$8 = destination_1.iterator();
        while (tmp$8.hasNext()) {
          var element_3 = tmp$8.next();
          var state = Kotlin.modules['stdlib'].kotlin.lazy_un3fny$(_.SolverState.f_0(element_3, triedBefore, this, firstHungry));
          result.add_za3rmp$(state);
        }
        return result;
      },
      full: function (i) {
        return i === _.DOT ? false : this.toGo.get_za3lpa$(i) === 0;
      },
      hasBoxes: function () {
        var tmp$0, tmp$1;
        tmp$0 = this.board.columns - 2;
        for (var x = 0; x <= tmp$0; x++) {
          tmp$1 = this.board.rows - 2;
          for (var y = 0; y <= tmp$1; y++) {
            var tmp$2 = this.board.get_vux9f0$(x, y) === _.BLACK;
            if (tmp$2) {
              var $receiver = this.board.neighborsSE_vux9f0$(x, y);
              var destination = new Kotlin.ArrayList();
              var tmp$3;
              tmp$3 = $receiver.iterator();
              while (tmp$3.hasNext()) {
                var element = tmp$3.next();
                if (element.value === _.BLACK) {
                  destination.add_za3rmp$(element);
                }
              }
              tmp$2 = destination.size === 3;
            }
            if (tmp$2)
              return true;
          }
        }
        return false;
      },
      inL_1: function (x, y) {
        var black = _.SolverState.inL_1$black;
        var nw = black.call(this.board.neighborsNW_vux9f0$(x, y)).size === 3;
        var ne = black.call(this.board.neighborsNE_vux9f0$(x, y)).size === 3;
        var sw = black.call(this.board.neighborsSW_vux9f0$(x, y)).size === 3;
        var se = black.call(this.board.neighborsSE_vux9f0$(x, y)).size === 3;
        if (nw || ne || sw || se)
          return true;
        return false;
      },
      inL: function (p) {
        return this.inL_1(p.first, p.second);
      },
      canExpand: function (n) {
        var counter = {v: 0};
        this.board.depthFirst_kn0zno$(this.numbers.get_za3lpa$(n).position, _.SolverState.canExpand$f(counter, n));
        return counter.v >= this.toGo.get_za3lpa$(n);
      },
      canExpandDots: function () {
        var visitedDots = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
        var canExpandDot = _.SolverState.canExpandDots$canExpandDot(visitedDots, this);
        var tmp$0;
        tmp$0 = _.dot_3ucpiw$(this.board).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (!canExpandDot(element.position))
            return false;
        }
        return true;
      },
      checkIfSolved: function () {
        if (!this.connected()) {
          this.fail = true;
          _.trace_za3rmp$('Fail connected');
          return;
        }
        this.solved = (!this.hasBoxes() && Kotlin.modules['stdlib'].kotlin.collections.sum_q1ah1m$(this.toGo) === 0 && Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(_.yellow_3ucpiw$(this.board)) === 0 && Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(_.dot_3ucpiw$(this.board)) === 0);
      },
      connected: function () {
        var blacks = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(this.board.withIndex(), _.SolverState.connected$f);
        var count = {v: Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(blacks)};
        if (count.v === 0)
          return true;
        var tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.first_uya9q7$(blacks).position
        , x = tmp$0.component1()
        , y = tmp$0.component2();
        this.board.depthFirst_j3dvhl$(x, y, _.SolverState.connected$f_0(count));
        return count.v === 0;
      },
      fillNumbers: function () {
        var tmp$0;
        var index = 0;
        tmp$0 = this.numbers.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          var i = index++;
          var filled = _.fill_h8kx0c$(this.board, item.position, i, _.SolverState.f_1(i));
          this.toGo.set_vux3hl$(i, item.value - filled);
          if (this.toGo.get_za3lpa$(i) < 0) {
            this.fail = true;
            _.trace_za3rmp$('Fail fill numbers');
            return;
          }
        }
      },
      paintBlack: function (p) {
        if (this.inL(p)) {
          this.fail = true;
          _.trace_za3rmp$('Fail paint black');
          return false;
        }
        this.board.set_av77s6$(p, _.BLACK);
        return true;
      },
      paintNumber_av71ur$: function (p, n) {
        var neighbors = this.board.neighbors_bunuun$(p);
        var destination = new Kotlin.ArrayList();
        var tmp$2;
        tmp$2 = neighbors.iterator();
        while (tmp$2.hasNext()) {
          var element = tmp$2.next();
          if (element.value >= 0) {
            destination.add_za3rmp$(element);
          }
        }
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
        var tmp$3;
        tmp$3 = destination.iterator();
        while (tmp$3.hasNext()) {
          var item = tmp$3.next();
          destination_0.add_za3rmp$(item.value);
        }
        var white = Kotlin.modules['stdlib'].kotlin.collections.distinct_q5oq31$(destination_0);
        if (white.size > 1) {
          this.fail = true;
          _.trace_za3rmp$('Fail paint number');
          return false;
        }
        this.board.set_av77s6$(p, n);
        this.fillNumbers();
        return true;
      },
      paintDot_bunuun$: function (p) {
        var $receiver = this.board.neighbors_bunuun$(p);
        var destination = new Kotlin.ArrayList();
        var tmp$2;
        tmp$2 = $receiver.iterator();
        while (tmp$2.hasNext()) {
          var element = tmp$2.next();
          if (element.value >= 0) {
            destination.add_za3rmp$(element);
          }
        }
        var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
        var tmp$3;
        tmp$3 = destination.iterator();
        while (tmp$3.hasNext()) {
          var item = tmp$3.next();
          destination_0.add_za3rmp$(item.value);
        }
        var neighbors = Kotlin.modules['stdlib'].kotlin.collections.distinct_q5oq31$(destination_0);
        if (neighbors.size > 1) {
          this.fail = true;
          _.trace_za3rmp$('Fail paint dot');
          return false;
        }
        this.board.set_av77s6$(p, _.DOT);
        this.fillNumbers();
        return true;
      },
      techn0: function () {
        var tmp$0;
        tmp$0 = this.board.withIndex().iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var p1 = element.position;
          var $receiver_0 = this.numbers;
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver_0, 10));
          var tmp$1;
          tmp$1 = $receiver_0.iterator();
          while (tmp$1.hasNext()) {
            var item = tmp$1.next();
            destination.add_za3rmp$(_.distance_dptiiy$(p1, item.position) < item.value);
          }
          var tmp$3;
          var accumulator = false;
          tmp$3 = destination.iterator();
          while (tmp$3.hasNext()) {
            var element_0 = tmp$3.next();
            accumulator = accumulator || element_0;
          }
          var canReach = accumulator;
          if (!canReach) {
            if (_.isBlackOrYellow_s8ev3o$(this.board.get_bunuun$(element.position)))
              this.paintBlack(element.position);
            else {
              this.fail = true;
              return;
            }
          }
        }
      },
      techn1: function () {
        var changes = {v: 0};
        var tmp$0;
        tmp$0 = _.yellow_3ucpiw$(this.board).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var $receiver_0 = this.board.neighbors_bunuun$(element.position);
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver_0, 10));
          var tmp$2;
          tmp$2 = $receiver_0.iterator();
          while (tmp$2.hasNext()) {
            var item = tmp$2.next();
            destination.add_za3rmp$(item.value);
          }
          var destination_0 = new Kotlin.ArrayList();
          var tmp$4;
          tmp$4 = destination.iterator();
          while (tmp$4.hasNext()) {
            var element_0 = tmp$4.next();
            if (element_0 >= 0) {
              destination_0.add_za3rmp$(element_0);
            }
          }
          var whites = Kotlin.modules['stdlib'].kotlin.collections.distinct_q5oq31$(destination_0);
          if (this.board.get_bunuun$(element.position) === _.YELLOW && whites.size >= 2 || (whites.size === 1 && this.full(Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(whites)))) {
            if (this.paintBlack(element.position))
              changes.v++;
          }
        }
        return changes.v;
      },
      techn2: function () {
        var changes = {v: 0};
        var tmp$0;
        tmp$0 = _.yellow_3ucpiw$(this.board).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var $receiver_0 = this.board.neighbors_bunuun$(element.position);
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault($receiver_0, 10));
          var tmp$1;
          tmp$1 = $receiver_0.iterator();
          while (tmp$1.hasNext()) {
            var item = tmp$1.next();
            destination.add_za3rmp$(item.value);
          }
          var neighbors = destination;
          var destination_0 = new Kotlin.ArrayList();
          var tmp$2;
          tmp$2 = neighbors.iterator();
          while (tmp$2.hasNext()) {
            var element_0 = tmp$2.next();
            if (element_0 === _.BLACK) {
              destination_0.add_za3rmp$(element_0);
            }
          }
          var blacks = destination_0;
          if (blacks.size === neighbors.size) {
            if (this.paintBlack(element.position))
              changes.v++;
          }
        }
        return changes.v;
      },
      techn3: function () {
        var changes = {v: 0};
        var blacks = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(_.black_3ucpiw$(this.board));
        var blacksToGo = {v: this.board.size - (this.totalWhiteCount + blacks.size)};
        var tmp$0;
        tmp$0 = blacks.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var parent = null;
          var current = element.position;
          while (true) {
            if (blacksToGo.v <= 0)
              return changes.v;
            var $receiver_0 = this.board.neighbors_bunuun$(current);
            var destination = new Kotlin.ArrayList();
            var tmp$2;
            tmp$2 = $receiver_0.iterator();
            while (tmp$2.hasNext()) {
              var element_0 = tmp$2.next();
              if (_.isBlackOrYellow_s8ev3o$(element_0.value)) {
                destination.add_za3rmp$(element_0);
              }
            }
            var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
            var tmp$3;
            tmp$3 = destination.iterator();
            while (tmp$3.hasNext()) {
              var item = tmp$3.next();
              destination_0.add_za3rmp$(item.position);
            }
            var neighbors = Kotlin.modules['stdlib'].kotlin.collections.minus_cwuzrm$(destination_0, parent);
            var first = Kotlin.modules['stdlib'].kotlin.collections.firstOrNull_a7ptmv$(neighbors);
            if (neighbors.size === 1 && first != null) {
              if (this.board.get_bunuun$(first) === _.YELLOW) {
                if (this.paintBlack(first)) {
                  changes.v++;
                  blacksToGo.v--;
                }
              }
              parent = current;
              current = first;
            }
             else
              break;
          }
        }
        return changes.v;
      },
      techn4: function () {
        var changes = {v: 0};
        var tmp$0;
        tmp$0 = _.whiteOrDot_3ucpiw$(this.board).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          action$break: {
            var value = element.value;
            var current = element.position;
            var parent = null;
            while (true) {
              if (this.full(value))
                break action$break;
              var $receiver_0 = this.board.neighbors_bunuun$(current);
              var destination = new Kotlin.ArrayList();
              var tmp$2;
              tmp$2 = $receiver_0.iterator();
              while (tmp$2.hasNext()) {
                var element_0 = tmp$2.next();
                if (element_0.value >= 0 || element_0.value === _.YELLOW || element_0.value === _.DOT) {
                  destination.add_za3rmp$(element_0);
                }
              }
              var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
              var tmp$3;
              tmp$3 = destination.iterator();
              while (tmp$3.hasNext()) {
                var item = tmp$3.next();
                destination_0.add_za3rmp$(item.position);
              }
              var neighbors = Kotlin.modules['stdlib'].kotlin.collections.minus_cwuzrm$(destination_0, parent);
              var first = Kotlin.modules['stdlib'].kotlin.collections.firstOrNull_a7ptmv$(neighbors);
              if (neighbors.size === 1 && first != null && (this.board.get_bunuun$(first) === value || this.board.get_bunuun$(first) === _.YELLOW)) {
                if (this.board.get_bunuun$(first) === _.YELLOW) {
                  if (value === _.DOT)
                    if (this.paintDot_bunuun$(first))
                      changes.v++;
                    else if (this.paintNumber_av71ur$(first, value))
                      changes.v++;
                }
                parent = current;
                current = first;
              }
               else
                break;
            }
          }
        }
        return changes.v;
      },
      techn5: function () {
        var changes = {v: 0};
        var blacks = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(_.black_3ucpiw$(this.board));
        var count = {v: blacks.size};
        if (count.v > 0) {
          var first = Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(blacks);
          var tmp$0;
          tmp$0 = _.yellow_3ucpiw$(this.board).iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var p = element.position;
            var c = {v: count.v};
            this.board.set_av77s6$(p, _.DOT);
            this.board.depthFirst_kn0zno$(first.position, _.SolverState.f_12(c));
            if (c.v !== 0) {
              if (this.paintBlack(p)) {
                changes.v++;
                count.v++;
              }
            }
             else
              this.board.set_av77s6$(p, _.YELLOW);
          }
        }
        return changes.v;
      },
      techn6: function () {
        var changes = {v: 0};
        var tmp$0;
        tmp$0 = _.yellow_3ucpiw$(this.board).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var p = element.position;
          if (this.inL(p)) {
            if (this.paintDot_bunuun$(p))
              changes.v++;
          }
        }
        return changes.v;
      },
      techn7: function () {
        var changes = {v: 0};
        var tmp$0;
        var index = 0;
        tmp$0 = this.numbers.iterator();
        while (tmp$0.hasNext()) {
          var item = tmp$0.next();
          var i = index++;
          action$break: {
            if (item.value !== 2 || this.toGo.get_za3lpa$(i) === 0)
              break action$break;
            var numPos = item.position;
            var $receiver_0 = this.board.neighbors_bunuun$(numPos);
            var destination = new Kotlin.ArrayList();
            var tmp$1;
            tmp$1 = $receiver_0.iterator();
            while (tmp$1.hasNext()) {
              var element = tmp$1.next();
              if (element.value === _.YELLOW) {
                destination.add_za3rmp$(element);
              }
            }
            var neighbors = destination;
            if (neighbors.size === 2) {
              var first = neighbors.get_za3lpa$(0).position;
              var second = neighbors.get_za3lpa$(1).position;
              var dx = first.first - second.first;
              var dy = first.second - second.second;
              if (_.abs_s8ev3o$(dx) === 1 && _.abs_s8ev3o$(dy) === 1) {
                var x = numPos.first !== first.first ? first.first : second.first;
                var y = numPos.second !== first.second ? first.second : second.second;
                if (this.board.get_vux9f0$(x, y) === _.YELLOW) {
                  if (this.paintBlack(new Kotlin.modules['stdlib'].kotlin.Pair(x, y)))
                    changes.v++;
                }
              }
            }
          }
        }
        return changes.v;
      },
      applyAll_6taknv$: function (zero) {
        if (zero === void 0)
          zero = true;
        var loops = 0;
        if (zero)
          this.techn0();
        do {
          loops++;
          var changes = this.techn1() + this.techn2();
          this.techn6() + this.techn7() + this.techn4() + this.techn3() + this.techn5();
        }
         while (changes > 0);
      }
    }, /** @lends _.SolverState */ {
      nextStep$f: function (it) {
        return it.position;
      },
      f_0: function (closure$it, closure$triedBefore, this$SolverState, closure$firstHungry) {
        return function () {
          Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(closure$triedBefore, closure$it);
          var state = this$SolverState.copy_8mkkoj$(closure$firstHungry, closure$triedBefore);
          state.paintNumber_av71ur$(closure$it, closure$firstHungry);
          return state;
        };
      },
      inL_1$black: function () {
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = this.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (element.value === _.BLACK) {
            destination.add_za3rmp$(element);
          }
        }
        return destination;
      },
      canExpand$f: function (closure$counter, closure$n) {
        return function (it) {
          var value = it.value;
          if (value === _.YELLOW || value === _.DOT)
            closure$counter.v++;
          return value === closure$n || value === _.YELLOW || value === _.DOT;
        };
      },
      canExpandDot$f: function (closure$visitedDots, closure$canExpand) {
        return function (it) {
          if (it.value === _.DOT)
            closure$visitedDots.add_za3rmp$(it.position);
          if (it.value === _.YELLOW) {
            closure$canExpand.v = true;
          }
          return it.value === _.DOT;
        };
      },
      canExpandDots$canExpandDot: function (closure$visitedDots, this$SolverState) {
        return function (p) {
          if (closure$visitedDots.contains_za3rmp$(p))
            return true;
          var canExpand = {v: false};
          this$SolverState.board.depthFirst_kn0zno$(p, _.SolverState.canExpandDot$f(closure$visitedDots, canExpand));
          return canExpand.v;
        };
      },
      connected$f: function (it) {
        return it.value === _.BLACK;
      },
      connected$f_0: function (closure$count) {
        return function (it) {
          if (it.value === _.BLACK) {
            closure$count.v--;
          }
          return _.isBlackOrYellow_s8ev3o$(it.value);
        };
      },
      f_1: function (closure$i) {
        return function (it) {
          return it === closure$i || it === _.DOT;
        };
      },
      f_12: function (closure$c) {
        return function (it) {
          if (_.isBlackOrYellow_s8ev3o$(it.value)) {
            if (it.value === _.BLACK)
              closure$c.v--;
            return true;
          }
          return false;
        };
      }
    }),
    Solver: Kotlin.createClass(null, function (input) {
      this.numbers_934qrz$ = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(input.withIndex(), _.Solver.numbers_934qrz$f));
      this.stack_n7x7v1$ = new _.Stack();
      this.currentState = new _.SolverState(input.copy(), this.numbers_934qrz$);
      this.previousSolutions_f3e5t4$ = Kotlin.modules['stdlib'].kotlin.collections.mutableSetOf_9mqe4v$([]);
      var tmp$0;
      tmp$0 = _.white_3ucpiw$(this.currentState.board).iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        this.currentState.board.set_av77s6$(element.position, _.YELLOW);
      }
      var tmp$1;
      var index = 0;
      tmp$1 = this.currentState.numbers.iterator();
      while (tmp$1.hasNext()) {
        var item = tmp$1.next();
        this.currentState.board.set_av77s6$(item.position, index++);
      }
      this.currentState.fillNumbers();
      this.currentState.techn0();
      this.stack_n7x7v1$.push_za3rmp$(Kotlin.modules['stdlib'].kotlin.lazy_un3fny$(_.Solver.Solver$f_1(this)));
    }, /** @lends _.Solver.prototype */ {
      current: {
        get: function () {
          return this.currentState.current;
        }
      },
      nextSolution: function () {
        while (this.nextStep()) {
          if (this.currentState.solved && !this.previousSolutions_f3e5t4$.contains_za3rmp$(this.current)) {
            this.previousSolutions_f3e5t4$.add_za3rmp$(this.current);
            return this.current;
          }
        }
        return null;
      },
      nextStep: function () {
        if (this.stack_n7x7v1$.isEmpty)
          return false;
        var state = this.stack_n7x7v1$.pop().value;
        this.currentState = state;
        var candidates = state.nextStep();
        var tmp$0;
        tmp$0 = candidates.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          this.stack_n7x7v1$.push_za3rmp$(element);
        }
        return true;
      }
    }, /** @lends _.Solver */ {
      numbers_934qrz$f: function (it) {
        return it.value > 0;
      },
      Solver$f_1: function (this$Solver) {
        return function () {
          return this$Solver.currentState;
        };
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
      peek: function () {
        return this.list_54ut98$.get_za3lpa$(this.list_54ut98$.size - 1);
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
    abs_s8ev3o$: function ($receiver) {
      return $receiver > 0 ? $receiver : -$receiver;
    },
    fill_ulgjb3$f: function (closure$toReplace, closure$filled, closure$color, this$fill) {
      return function (it) {
        if (closure$toReplace(it.value)) {
          closure$filled.v++;
          this$fill.set_av77s6$(it.position, closure$color);
          return true;
        }
        return false;
      };
    },
    fill_ulgjb3$: function ($receiver, x, y, color, toReplace) {
      var filled = {v: 0};
      $receiver.depthFirst_j3dvhl$(x, y, _.fill_ulgjb3$f(toReplace, filled, color, $receiver));
      return filled.v;
    },
    fill_h8kx0c$: function ($receiver, p, color, toReplace) {
      return _.fill_ulgjb3$($receiver, p.first, p.second, color, toReplace);
    },
    fill_m7i36t$f: function (closure$toReplace) {
      return function (it) {
        return it === closure$toReplace;
      };
    },
    fill_m7i36t$: function ($receiver, p, color) {
      var toReplace = $receiver.get_bunuun$(p);
      return _.fill_ulgjb3$($receiver, p.first, p.second, color, _.fill_m7i36t$f(toReplace));
    }
  });
  Kotlin.defineModule('nurikabe', _);
  _.main_kand9s$([]);
}(Kotlin));
