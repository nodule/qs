on.input.in = function() {
  try {
    output({out: qs.stringify(data, input.options)});
  } catch (e) {
     output({error: e});
  }
};
