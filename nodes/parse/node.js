on.input.in = function() {
  try {
    output({out: qs.parse(input.in, input.options)});
  } catch (e) {
     output({error: e});
  }
};
