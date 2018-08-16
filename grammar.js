module.exports = grammar({
  name: 'simple_arithmetic',

  rules: {
    source_file: $ => $.node,
    node: $ => choice($.binary, $.unary, $.number),

    binary: $ => prec.left(1, seq($.node, choice($.plus_op, $.minus_op), $.node)),
    plus_op: $ => '+',
    minus_op: $ => '-',

    unary: $ => prec(2, seq($.negative_op, $.node)),
    negative_op: $ => '-',

    number: $ => /(0|[1-9]\d*)/
  }
});
