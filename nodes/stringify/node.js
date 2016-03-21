on.input.in = function() {
  try {
    output({out: qs.stringify(input.in, input.options)});
  } catch (e) {
     output({error: e});
  }
};
