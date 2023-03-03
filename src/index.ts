let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// Tuple
let user: [number, string] = [1, 'John'];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Small;

// function
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.4;
}

calculateTax(10_000, 2022);

// Type Alias
type Employee = {
  id: number;
  name: string;
  salary: number;
};

let employee: Employee = {
  id: 1,
  name: 'John',
  salary: 100_000,
};

// Union
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

// intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type DraggableResizable = Draggable & Resizable;

let draggableResizable: DraggableResizable = {
  drag: () => {},
  resize: () => {},
};

// Literal
type Sizes = 'small' | 'medium' | 'large';
