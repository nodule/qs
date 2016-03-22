module.exports = {
  name: "parse",
  ns: "qs",
  description: "Querystring parsing with some added security",
  async: true,
  phrases: {
    active: "Parsing querystring"
  },
  dependencies: {
    npm: {
      qs: require('qs')
    }
  },
  ports: {
    input: {
      "in": {
        title: "Query string",
        type: "string",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, qs) {
          var r = function() {
            try {
              output({
                out: $.write('in', qs.parse($.in, $.options))
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
          depth: {
            title: "Depth",
            description: "The depth limit helps mitigate abuse when qs is used to parse user input, and it is recommended to keep it a reasonably small number.",
            type: "integer",
            required: false
          },
          parameterLimit: {
            title: "Parameter limit",
            description: "By default qs will only parse up to 1000 parameters. This can be overridden by passing a parameterLimit option",
            type: "integer",
            "default": 1000
          },
          arrayLimit: {
            title: "Array limit",
            description: "qs will limit specifying indices in an array to a maximum index of 20. Any array members with an index of greater than 20 will instead be converted to an object with the index as the key",
            type: "integer",
            "default": 20
          },
          delimiter: {
            title: "Delimiter",
            description: "Optional delimiter, delimiters can be a regular expression too",
            type: "any",
            required: false
          }
        }
      }
    },
    output: {
      out: {
        title: "Query parameters",
        type: "object"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {}
}