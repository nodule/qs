on.input.in = function() {
  try {
    output({out: qs.parse(data, input.options)});
  } catch (e) {
     output({error: e});
  }
};
