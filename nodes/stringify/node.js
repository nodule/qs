on.input.in = function() {
  try {
    output({out: qs.stringify($.in, $.options)});
  } catch (e) {
     output({error: e});
  }
};
