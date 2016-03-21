on.input.in = function() {
  try {
    output({out: $.write('in', qs.parse($.in, $.options))});
  } catch (e) {
     output({error: $.create(e)});
  }
};
