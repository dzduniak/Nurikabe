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
      get_vux9f0$: function (x, y) {
        if (this.inBounds_vux9f0$(x, y))
          return this.values_1itv7u$.get_za3lpa$(y * this.columns + x);
        else
          throw new Kotlin.IndexOutOfBoundsException();
      },
      inBounds_vux9f0$: function (x, y) {
        return x >= 0 && x < this.columns && y >= 0 && y < this.rows;
      },
      set_qt1joh$: function (x, y, b) {
        if (x >= 0 && x < this.columns && y >= 0 && y < this.rows) {
          this.values_1itv7u$.set_vux3hl$(y * this.columns + x, b);
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
        var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([up, left, right, down]);
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
      },
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
    main_kand9s$f: function (it) {
      Kotlin.println(it);
    },
    main_kand9s$: function (args) {
      new _.Nurikabe();
      _.Tree_init_p3fpvf$(1, Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([_.Tree_init_p3fpvf$(2, Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([_.Tree_init_za3rmp$(4), _.Tree_init_p3fpvf$(5, Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([_.Tree_init_za3rmp$(6), _.Tree_init_za3rmp$(7)]))])), _.Tree_init_za3rmp$(3)])).depthFirst_lm9z1s$(_.main_kand9s$f);
    },
    Nurikabe: Kotlin.createClass(null, function () {
      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
      this.rowsInput_9llf0m$ = Kotlin.isType(tmp$0 = document.getElementById('rows'), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
      this.columnsInput_v312bg$ = Kotlin.isType(tmp$1 = document.getElementById('columns'), HTMLInputElement) ? tmp$1 : Kotlin.throwCCE();
      this.table = Kotlin.isType(tmp$2 = document.getElementById('board'), HTMLTableElement) ? tmp$2 : Kotlin.throwCCE();
      this.tbody_u7vcpt$ = Kotlin.isType(tmp$3 = this.table.tBodies[0], HTMLTableSectionElement) ? tmp$3 : Kotlin.throwCCE();
      this.board = _.Board_init_qt1joh$(this.rows, this.columns, 0);
      this.next_39onau$ = Kotlin.isType(tmp$4 = document.getElementById('next'), HTMLButtonElement) ? tmp$4 : Kotlin.throwCCE();
      this.table.ondblclick = _.Nurikabe.Nurikabe$f;
      this.table.addEventListener('selectstart', _.Nurikabe.Nurikabe$f_0);
      this.table.oncontextmenu = _.Nurikabe.Nurikabe$f_1;
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(document.getElementById('update'), void 0, _.Nurikabe.Nurikabe$f_2(this));
      var fail = Kotlin.isType(tmp$5 = document.getElementById('notsolved'), HTMLParagraphElement) ? tmp$5 : Kotlin.throwCCE();
      Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(document.getElementById('solve'), void 0, _.Nurikabe.Nurikabe$f_3(fail, this));
      this.update();
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
        this.tbody_u7vcpt$ = Kotlin.isType(tmp$0 = this.table.createTBody(), HTMLTableSectionElement) ? tmp$0 : Kotlin.throwCCE();
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
      Nurikabe$f_3: function (closure$fail, this$Nurikabe) {
        return function (it) {
          closure$fail.style.visibility = 'hidden';
          var solution = _.solve_3ucpiw$(this$Nurikabe.board);
          if (solution != null) {
            this$Nurikabe.board = solution;
            this$Nurikabe.refresh();
          }
           else {
            closure$fail.style.visibility = 'visible';
          }
        };
      }
    }),
    solve_3ucpiw$f: function (it) {
      return it.value > 0;
    },
    solve_3ucpiw$f_0: function (it) {
      return it.value - 1;
    },
    paintYellow$f: function (it) {
      return it.value === 0;
    },
    solve_3ucpiw$paintYellow: function () {
      var tmp$0;
      tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(this.withIndex(), _.paintYellow$f).iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        var tmp$1 = element.position
        , x = tmp$1.component1()
        , y = tmp$1.component2();
        this.set_qt1joh$(x, y, -2);
      }
    },
    connected$f: function (it) {
      return it.value === -1 || it.value === -2;
    },
    solve_3ucpiw$connected: function () {
      var copy = this.copy();
      var blacks = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(this.withIndex(), _.connected$f);
      var size = Kotlin.modules['stdlib'].kotlin.sequences.count_uya9q7$(blacks);
      if (size > 0) {
        var stack = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([Kotlin.modules['stdlib'].kotlin.sequences.first_uya9q7$(blacks).position]);
        var count = 0;
        while (!stack.isEmpty()) {
          var p = Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(stack);
          Kotlin.modules['stdlib'].kotlin.collections.minusAssign_4kvzvw$(stack, p);
          var tmp$0 = p
          , x = tmp$0.component1()
          , y = tmp$0.component2();
          if (x >= 0 && x < this.columns && y >= 0 && y < this.rows && (copy.get_vux9f0$(x, y) === -1 || copy.get_vux9f0$(x, y) === -2)) {
            count++;
            copy.set_qt1joh$(x, y, -10);
            Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(stack, new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y));
            Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(stack, new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y));
            Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(stack, new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1));
            Kotlin.modules['stdlib'].kotlin.collections.plusAssign_4kvzvw$(stack, new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1));
          }
        }
        return count === size;
      }
      return true;
    },
    solve_3ucpiw$value: function (x, y) {
      return x >= 0 && x < this.columns && y >= 0 && y < this.rows ? this.get_vux9f0$(x, y) : null;
    },
    solve_3ucpiw$hasBoxes: function () {
      var tmp$0, tmp$1;
      tmp$0 = this.columns - 2;
      for (var x = 0; x <= tmp$0; x++) {
        tmp$1 = this.rows - 2;
        for (var y = 0; y <= tmp$1; y++) {
          var list = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([new Kotlin.modules['stdlib'].kotlin.Pair(x, y), new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y), new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1), new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y + 1)]);
          var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(list, 10));
          var tmp$3;
          tmp$3 = list.iterator();
          while (tmp$3.hasNext()) {
            var item = tmp$3.next();
            destination.add_za3rmp$(this.get_vux9f0$(item.first, item.second) === -1);
          }
          var destination_0 = new Kotlin.ArrayList();
          var tmp$5;
          tmp$5 = destination.iterator();
          while (tmp$5.hasNext()) {
            var element = tmp$5.next();
            if (element) {
              destination_0.add_za3rmp$(element);
            }
          }
          var c = destination_0.size;
          if (c === 4)
            return true;
        }
      }
      return false;
    },
    solve_3ucpiw$neighbors: function (closure$value) {
      return function (x, y) {
        var left = new Kotlin.modules['stdlib'].kotlin.Pair(x - 1, y);
        var right = new Kotlin.modules['stdlib'].kotlin.Pair(x + 1, y);
        var up = new Kotlin.modules['stdlib'].kotlin.Pair(x, y - 1);
        var down = new Kotlin.modules['stdlib'].kotlin.Pair(x, y + 1);
        var neighbors = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([left, right, up, down]);
        var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(neighbors, 10));
        var tmp$1;
        tmp$1 = neighbors.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          var tmp$3;
          destination.add_za3rmp$(new _.PositionValue(item, (tmp$3 = closure$value.call(this, item.first, item.second)) != null ? tmp$3 : -10));
        }
        var destination_0 = new Kotlin.ArrayList();
        var tmp$4;
        tmp$4 = destination.iterator();
        while (tmp$4.hasNext()) {
          var element = tmp$4.next();
          if (element.value !== -10) {
            destination_0.add_za3rmp$(element);
          }
        }
        var values = destination_0;
        return values;
      };
    },
    solve_3ucpiw$onlyBlackNeighbors: function (x, y) {
      var neighbors = this.neighbors_vux9f0$(x, y);
      var destination = new Kotlin.ArrayList();
      var tmp$0;
      tmp$0 = neighbors.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        if (element.value === -1) {
          destination.add_za3rmp$(element);
        }
      }
      return destination.size === neighbors.size;
    },
    fixWithOnlyBlackNeighbors$f: function (it) {
      return it.value === -2;
    },
    solve_3ucpiw$fixWithOnlyBlackNeighbors: function (closure$onlyBlackNeighbors) {
      return function () {
        var wi = this.withIndex();
        var tmp$0;
        tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(wi, _.fixWithOnlyBlackNeighbors$f).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var closure$onlyBlackNeighbors_0 = closure$onlyBlackNeighbors;
          var tmp$1 = element.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          if (closure$onlyBlackNeighbors_0.call(this, x, y))
            this.set_qt1joh$(x, y, -1);
        }
      };
    },
    process$f: function (it) {
      return it.value === -2;
    },
    process$f_1: function (it) {
      return it.value === -1;
    },
    solve_3ucpiw$process: function (closure$fixWithOnlyBlackNeighbors) {
      return function (toGo) {
        var tmp$0;
        tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(this.withIndex(), _.process$f).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var tmp$1 = element.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          var $receiver_0 = this.neighbors_vux9f0$(x, y);
          var destination = new Kotlin.ArrayList();
          var tmp$3;
          tmp$3 = $receiver_0.iterator();
          while (tmp$3.hasNext()) {
            var element_0 = tmp$3.next();
            if (element_0.value >= 0) {
              destination.add_za3rmp$(element_0);
            }
          }
          var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault(destination, 10));
          var tmp$4;
          tmp$4 = destination.iterator();
          while (tmp$4.hasNext()) {
            var item = tmp$4.next();
            destination_0.add_za3rmp$(item.value);
          }
          var n = Kotlin.modules['stdlib'].kotlin.collections.distinct_q5oq31$(destination_0);
          if (n.size >= 2)
            this.set_qt1joh$(x, y, -1);
          if (n.size === 1 && toGo.get_za3lpa$(Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(n)) === 0)
            this.set_qt1joh$(x, y, -1);
        }
        closure$fixWithOnlyBlackNeighbors.call(this);
        var tmp$2;
        tmp$2 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(this.withIndex(), _.process$f_1).iterator();
        while (tmp$2.hasNext()) {
          var element_1 = tmp$2.next();
          var tmp$8 = element_1.position
          , x_0 = tmp$8.component1()
          , y_0 = tmp$8.component2();
          var neighbors = this.neighbors_vux9f0$(x_0, y_0);
          var tmp$7;
          var first = new Kotlin.ArrayList();
          var second = new Kotlin.ArrayList();
          tmp$7 = neighbors.iterator();
          while (tmp$7.hasNext()) {
            var element_2 = tmp$7.next();
            if (element_2.value >= 0) {
              first.add_za3rmp$(element_2);
            }
             else {
              second.add_za3rmp$(element_2);
            }
          }
          var tmp$6 = new Kotlin.modules['stdlib'].kotlin.Pair(first, second)
          , whites = tmp$6.component1()
          , rest = tmp$6.component2();
          if (whites.size === neighbors.size - 1) {
            var fourth = Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(rest);
            var tmp$5 = fourth.position
            , fx = tmp$5.component1()
            , fy = tmp$5.component2();
            if (fourth.value === -2)
              this.set_qt1joh$(fx, fy, -1);
            else if (fourth.value >= 0)
              return false;
          }
        }
        closure$fixWithOnlyBlackNeighbors.call(this);
        return true;
      };
    },
    cleanUp$f: function (it) {
      return it.value < -1;
    },
    cleanUp$f_1: function (it) {
      return it.value > 0;
    },
    solve_3ucpiw$cleanUp: function (closure$numbers) {
      return function () {
        var wi = this.withIndex();
        var tmp$0;
        tmp$0 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(wi, _.cleanUp$f).iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var tmp$1 = element.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          this.set_qt1joh$(x, y, -1);
        }
        var tmp$2;
        tmp$2 = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(wi, _.cleanUp$f_1).iterator();
        while (tmp$2.hasNext()) {
          var element_0 = tmp$2.next();
          var tmp$3 = element_0.position
          , x_0 = tmp$3.component1()
          , y_0 = tmp$3.component2();
          this.set_qt1joh$(x_0, y_0, 0);
        }
        var tmp$4;
        tmp$4 = closure$numbers.iterator();
        while (tmp$4.hasNext()) {
          var element_1 = tmp$4.next();
          var tmp$5 = element_1.position
          , x_1 = tmp$5.component1()
          , y_1 = tmp$5.component2();
          this.set_qt1joh$(x_1, y_1, element_1.value);
        }
      };
    },
    solveIn$f: function (it) {
      return it.value === -2;
    },
    solve_3ucpiw$solveIn: function (closure$process, closure$connected, closure$hasBoxes, closure$cleanUp) {
      return function closure$solveIn(board, toGo) {
        if (!closure$process.call(board, toGo))
          return null;
        if (!closure$connected.call(board))
          return null;
        if (closure$hasBoxes.call(board))
          return null;
        var sum = Kotlin.modules['stdlib'].kotlin.collections.sum_q1ah1m$(toGo);
        if (sum === 0) {
          closure$cleanUp.call(board);
          if (closure$hasBoxes.call(board))
            return null;
          return board;
        }
        var candidates = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$(board.withIndex(), _.solveIn$f));
        if (candidates.size < sum)
          return null;
        var tmp$0;
        tmp$0 = candidates.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          var closure$solveIn_0 = closure$solveIn;
          var tmp$1 = element.position
          , x = tmp$1.component1()
          , y = tmp$1.component2();
          var $receiver_0 = board.neighbors_vux9f0$(x, y);
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
          var neighbors = destination_0;
          if (neighbors.size > 0) {
            var n = Kotlin.modules['stdlib'].kotlin.collections.first_a7ptmv$(neighbors);
            if (toGo.get_za3lpa$(n) > 0) {
              var copy = board.copy();
              copy.set_qt1joh$(x, y, n);
              var tgc = Kotlin.modules['stdlib'].kotlin.collections.toMutableList_mwto7b$(toGo);
              tgc.set_vux3hl$(n, tgc.get_za3lpa$(n) - 1);
              var result = closure$solveIn_0(copy, tgc);
              if (result != null)
                return result;
            }
          }
        }
        return null;
      };
    },
    solve_3ucpiw$: function ($receiver) {
      var numbers = Kotlin.modules['stdlib'].kotlin.sequences.filter_6bub1b$($receiver.withIndex(), _.solve_3ucpiw$f);
      var toGo = Kotlin.modules['stdlib'].kotlin.sequences.toList_uya9q7$(Kotlin.modules['stdlib'].kotlin.sequences.map_mzhnvn$(numbers, _.solve_3ucpiw$f_0));
      var tmp$0;
      var accumulator = 0;
      tmp$0 = numbers.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        accumulator = accumulator + element.value;
      }
      var white = accumulator;
      if ($receiver.rows * $receiver.columns - white < 0)
        return null;
      var paintYellow = _.solve_3ucpiw$paintYellow;
      var connected = _.solve_3ucpiw$connected;
      var value = _.solve_3ucpiw$value;
      var hasBoxes = _.solve_3ucpiw$hasBoxes;
      var neighbors = _.solve_3ucpiw$neighbors(value);
      var onlyBlackNeighbors = _.solve_3ucpiw$onlyBlackNeighbors;
      var fixWithOnlyBlackNeighbors = _.solve_3ucpiw$fixWithOnlyBlackNeighbors(onlyBlackNeighbors);
      var process = _.solve_3ucpiw$process(fixWithOnlyBlackNeighbors);
      var cleanUp = _.solve_3ucpiw$cleanUp(numbers);
      var b = $receiver.copy();
      paintYellow.call(b);
      var tmp$1;
      var index = 0;
      tmp$1 = numbers.iterator();
      while (tmp$1.hasNext()) {
        var item = tmp$1.next();
        var i = index++;
        var tmp$2 = item.position
        , x = tmp$2.component1()
        , y = tmp$2.component2();
        b.set_qt1joh$(x, y, i);
      }
      process.call(b, toGo);
      var solveIn = _.solve_3ucpiw$solveIn(process, connected, hasBoxes, cleanUp);
      return solveIn(b, toGo);
    },
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
    Tree: Kotlin.createClass(null, function (value, childGetter, degree) {
      this.value = value;
      this.childGetter = childGetter;
      this.degree = degree;
      this.children = new Kotlin.modules['stdlib'].kotlin.collections.Iterable$f(_.Tree.children$f(this));
    }, /** @lends _.Tree.prototype */ {
      get_za3lpa$: function (i) {
        return this.childGetter(i);
      },
      depthFirstWithAbort_ocw5cw$: function (visitor) {
        var stack = new _.Stack();
        stack.push_za3rmp$(new Kotlin.modules['stdlib'].kotlin.Pair(this, 0));
        while (!stack.isEmpty) {
          var tmp$0 = stack.pop()
          , node = tmp$0.component1()
          , index = tmp$0.component2();
          if (index === 0)
            if (!visitor(node.value))
              continue;
          if (index < node.degree) {
            stack.push_za3rmp$(new Kotlin.modules['stdlib'].kotlin.Pair(node, index + 1));
            stack.push_za3rmp$(new Kotlin.modules['stdlib'].kotlin.Pair(node.get_za3lpa$(index), 0));
          }
        }
      },
      depthFirst_lm9z1s$: function (visitor) {
        this.depthFirstWithAbort_ocw5cw$(_.Tree.depthFirst_lm9z1s$f(visitor));
      }
    }, /** @lends _.Tree */ {
      depthFirst_lm9z1s$f: function (closure$visitor) {
        return function (it) {
          closure$visitor(it);
          return true;
        };
      },
      children$f$f: Kotlin.createClass(function () {
        return [Kotlin.modules['builtins'].kotlin.collections.Iterator];
      }, function (this$Tree_0) {
        this.this$Tree_0 = this$Tree_0;
        this.i = 0;
      }, /** @lends _.Tree.children$f$f.prototype */ {
        hasNext: function () {
          return this.i < this.this$Tree_0.degree;
        },
        next: function () {
          var ret = this.this$Tree_0.get_za3lpa$(this.i);
          this.i++;
          return ret;
        }
      }, /** @lends _.Tree.children$f$f */ {
      }),
      children$f: function (this$Tree) {
        return function () {
          return new _.Tree.children$f$f(this$Tree);
        };
      },
      Tree_init_p3fpvf$f: function (closure$children) {
        return function (it) {
          return closure$children.get_za3lpa$(it);
        };
      }
    }),
    Tree_init_p3fpvf$: function (value, children, $this) {
      $this = $this || Object.create(_.Tree.prototype);
      _.Tree.call($this, value, _.Tree.Tree_init_p3fpvf$f(children), children.size);
      return $this;
    },
    Tree_init_za3rmp$: function (value, $this) {
      $this = $this || Object.create(_.Tree.prototype);
      _.Tree_init_p3fpvf$(value, Kotlin.modules['stdlib'].kotlin.collections.emptyList(), $this);
      return $this;
    },
    floor_yrwdxs$: function ($receiver) {
      return Math.floor($receiver);
    },
    mousePosition_whqsci$: function ($receiver, element) {
      var rect = element.getBoundingClientRect();
      return new Kotlin.modules['stdlib'].kotlin.Pair($receiver.clientX - rect.left, $receiver.clientY - rect.top);
    },
    fill_o6wbmy$f: function (closure$toReplace, closure$color, this$fill) {
      return function (it) {
        if (it.value === closure$toReplace) {
          var tmp$0 = it.position
          , nx = tmp$0.component1()
          , ny = tmp$0.component2();
          this$fill.set_qt1joh$(nx, ny, closure$color);
          return true;
        }
        return false;
      };
    },
    fill_o6wbmy$: function ($receiver, x, y, color) {
      var toReplace = $receiver.get_vux9f0$(x, y);
      $receiver.depthFirst_j3dvhl$(x, y, _.fill_o6wbmy$f(toReplace, color, $receiver));
    }
  });
  Kotlin.defineModule('nurikabe', _);
  _.main_kand9s$([]);
}(Kotlin));
