module.exports = grammar({
  name: 'simple_arithmetic',

  rules: {
    source_file: $ => $.node,
    node: $ => choice($.unary, $.number),
    unary: $ => seq($.negative_operator, $.node),
    negative_operator: $ => '-',
    number: $ => /\d+/
  }
});
