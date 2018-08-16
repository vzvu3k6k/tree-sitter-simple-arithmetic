module.exports = grammar({
  name: 'simple_arithmetic',

  rules: {
    source_file: $ => $.node,
    node: $ => choice($.parenthesized, $.binary, $.unary, $.number),

    parenthesized: $ => seq('(', $.node, ')'),

    binary: $ => choice(
      prec.left(1, seq($.node, choice($.plus_op, $.minus_op), $.node)),
      prec.left(2, seq($.node, choice($.mul_op, $.div_op), $.node)),
    ),
    plus_op: $ => '+',
    minus_op: $ => '-',
    mul_op: $ => '*',
    div_op: $ => '/',

    unary: $ => prec(3, seq($.negative_op, $.node)),
    negative_op: $ => '-',

    number: $ => /(0|[1-9]\d*)/
  }
});
