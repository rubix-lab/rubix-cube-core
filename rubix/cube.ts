type A2 = 1;

const zip = (arr: any[], ...arrs: any[]) =>
  arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

class Matrix {
  constructor(public vals: number[]) {}

  eq(other: Matrix): boolean {
    return this.vals === other.vals;
  }

  add(other: Matrix): Matrix {
    return new Matrix(this.vals.map((val, i) => val + other.vals[i]));
  }

  sub(other: Matrix): Matrix {
    return new Matrix(this.vals.map((val, i) => val - other.vals[i]));
  }

  thisAdd(other: Matrix): Matrix {
    this.vals = this.vals.map((val, i) => val + other.vals[i]);
    return this;
  }

  thisSub(other: Matrix): Matrix {
    this.vals = this.vals.map((val, i) => val - other.vals[i]);
    return this;
  }

  // mul(other: Matrix): Matrix {
  //   other.cols().map((col: number[]) => this.rows().map((row) => Point(row).dot(Point(col)))
  //   // return new Matrix();
  // }

  // mul(other: Point | Matrix): Point | Matrix {
  //   // if(other instanceof Matrix)
  //   if (other instanceof Point) {
  //     this.rows().map((row) => other.dot(Point(row)))
  //     return new Point()
  //   } else {
  //     return new Matrix(other.cols.map((col) => this.rows.map(row) => Point(row).dot(Point(col))))
  //   }
  // }

  rows(): number[][] {
    let totalRows: number = Math.sqrt(this.vals.length);
    let rows: number[][] = [];
    for (
      let rowCount = totalRows;
      rowCount < totalRows * totalRows;
      rowCount += totalRows
    ) {
      let row: number[] = [];
      for (
        let rowValCount = rowCount;
        rowValCount < rowCount + totalRows;
        rowValCount++
      ) {
        row.push(this.vals[rowValCount - 1]);
      }
      rows.push(row);
    }
    return rows;
  }

  cols(): number[][] {
    let totalCols: number = Math.sqrt(this.vals.length);
    let cols: number[][] = [];
    for (
      let colCount = totalCols;
      colCount < totalCols * totalCols;
      colCount += totalCols
    ) {
      let col: number[] = [];
      for (
        let colValCount = colCount / totalCols;
        colValCount <
        totalCols * totalCols - totalCols + colCount / totalCols + 1;
        colValCount += totalCols
      ) {
        col.push(this.vals[colValCount - 1]);
      }
      cols.push(col);
    }
    return cols;
  }
}

class Point {
  constructor(public x: number, public y: number, public z: number) {}

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  sub(other: Point): Point {
    return new Point(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  mul(other: number): Point {
    return new Point(this.x * other, this.y * other, this.z * other);
  }

  dot(other: Point): Number {
    // Return the dot product
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross(other: Point): Point {
    return new Point(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }

  count(val: number): Number {
    return (
      Number(this.x === val) + Number(this.y === val) + Number(this.z === val)
    );
  }

  thisAdd(other: Point): Point {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;
    return this;
  }

  thisSub(other: Point): Point {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;
    return this;
  }

  eq(other: Point): boolean {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  ne(other: Point): boolean {
    return !(this === other);
  }
}

class Piece {}

class Cube {
  constructor(cubeStr: string) {
    type A2 = Range<0, 43>;

    let faces = {
      right: new Piece(),
    };
  }
}
// https://stackoverflow.com/a/63918062

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A['length'] ? 0 : 1];

export type Enumerate<N extends number> = EnumerateInternal<
  [],
  N
> extends (infer E)[]
  ? E
  : never;

export type Range<FROM extends number, TO extends number> = Exclude<
  Enumerate<TO>,
  Enumerate<FROM>
>;

type E1 = Enumerate<43>;

type E2 = Enumerate<10>;

type R1 = Range<0, 5>;

type R2 = Range<0, 43>;
