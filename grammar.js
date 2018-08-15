module.exports = grammar({
  name: 'simple_arithmetic',

  rules: {
    source_file: $ => choice($.number),
    number: $ => /\d+/
  }
});
