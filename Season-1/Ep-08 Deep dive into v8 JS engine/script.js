// v8 JS Engine Architecture

// We write code in JS and JS engine executes code.
// When JS engine executes code, the code has to pass through different phases.
// The first phase is PARSING.
// In parsing, there are 2 steps:-
// 1) Lexical Analysis or Tokenisation:- JS code is break down into small pieces or tokens. JS engine can only read code token by token cannot read code line by line. So code is converted into tokens.
// 2) Syntax Analysis or Syntax Parsing:- This tokens are converted into AST(Abstract Syntax Tree).
// AST is a tree like data structure.
// eg: var x = 10;
// When there is a variable declaration JS engine generates an AST. This AST consist of two parts. Identifier and Literal. Identifier is the name that we given to that variable. Here identifier is 'x' and literal is the value assigned to that variable. Here literal is 10.

// Why Syntax errors are throw?
// When JS engine fails to generate AST, syntax errors are thrown.

// The second phase is Interpreter.
// There are two types of language.
// 1) Interpreted Language :- reads code line by line, contains an interpreter, initial execution is fast.
// 2) Compiled Language :- first compiles code. ie, converts high level code into low level code that our machine can understand, initial execution is heavy, contains a compiler.

// Note:- JavaScript is not a compiled language or an interpreted language. JS engine contains both compiler and interpreter. This method is called Just In Time(JIT) compilation.

// The name of interpreter in JS engine is "Ignition" interpreter.
// This ignition interpreter converts AST into byte code and thus executes code. Along with that it also finds out the code which is repeated a lot....that code needs to be optimised....that piece of code is called 'hot' code and it passes it to compiler.

// The name od compiler in JS engine is "Turbo Fan" compiler.
// Turbo Fan compiler converts this high level code into low level code that our machine can understand and executes code. This process is called optimisation.

// Sometimes deoptimisation happens.
// Deoptimisation means, suppose we have a function to find the sum of two numbers and that function is calling again and again.....Ignitionj interpreter passes that code to Turbo fan compiler for optimasation. Turbo fan compiler converts this high level code into low level code that our machine can understand and executes code. While executing that code, Turbo fan compiler makes assumptions that integers are only passed as arguments inside that function call. Suppose strings are passed as arguments to that function call, Turbo fan compiler will pass that code back to Ignition interpreter and it produces byte code and executes code. This process is called deoptimisation.

// This whole process of interpretation and compilation is called JIT compilation.
// Along with this process garbage collectors collects garbages from memory heap to free up memory space which is no longer in use.

// Some of the garbage collectors in v8 engine are 'Orinoco', 'Oil pan', 'Scavenger'.
