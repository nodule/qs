on.input.in = function() {
  try {
    output({out: $.write('in', qs.stringify($.in, $.options))});
  } catch (e) {
     output({error: $.create(e)});
  }
};
