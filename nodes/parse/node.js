on.input.in = function() {
  try {
    output({out: qs.parse($.in, $.options)});
  } catch (e) {
     output({error: e});
  }
};
