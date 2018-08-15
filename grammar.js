module.exports = grammar({
  name: 'simple_arithmetic',

  rules: {
    source_file: $ => $.node,
    node: $ => choice($.unary, $.number),
    unary: $ => seq($.negative_op, $.node),
    negative_op: $ => '-',
    number: $ => /(0|[1-9]\d+)/
  }
});
