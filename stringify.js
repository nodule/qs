module.exports = {
  name: "stringify",
  ns: "qs",
  description: "Stringify query parameters",
  async: true,
  phrases: {
    active: "Stringifying parameters"
  },
  dependencies: {
    npm: {
      qs: require('qs')
    }
  },
  ports: {
    input: {
      "in": {
        title: "Parameters",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, qs) {
          var r = function() {
            try {
              output({
                out: $.write('in', qs.stringify($.in, $.options))
              });
            } catch (e) {
              output({
                error: $.create(e)
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      options: {
        title: "Options",
        type: "object",
        properties: {
          indices: {
            title: "Indices",
            description: "When arrays are stringified, by default they are given explicit indices",
            type: "boolean",
            "default": true
          }
        },
        delimiter: {
          title: "Delimiter",
          description: "Optional delimiter",
          type: "any",
          required: false
        }
      }
    },
    output: {
      out: {
        title: "Querystring",
        type: "string"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {}
}