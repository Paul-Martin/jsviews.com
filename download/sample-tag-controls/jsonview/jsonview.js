﻿/*
 * Sample JsViews tag control: {{jsonview}} control
 * http://www.jsviews.com/download/sample-tag-controls/jsonview/jsonview.js

 * Copyright 2014, Boris Moore
 * Released under the MIT License.
*/

(function($) {
  "use strict";

  function isObject(val) {
    return val && typeof val === "object";
  }

  function notEmpty(val) {
    return $.views.tags.props.getTgt(val).length;
  }

  notEmpty.depends = "*";

  $.views.tags("jsonview", {
    template: {
      markup:
        '{{if ~isArray(#data)}}'
        + '[{^{if length}}'
        + '<ul class="jsonview">'
          + '{^{for #data}}'
          + '<li>{^{jsonview/}}{^{if #index < #parent.data.length-1}},{{/if}}</li>'
          + '{{/for}}'
        + '</ul>'
        + '{{/if}}]'
      + '{{else ~isObject(#data)}}'
        + '{{^{if ~notEmpty(#data)}}'
        + '<ul class="jsonview">'
          + '{^{props #data}}'
          + '<li>'
            + '<b>{^{>key}}: </b>'
            + '{^{jsonview prop/}}{^{if #index < #parent.data.length-1}},{{/if}}'
          + '</li>'
          + '{{/props}}'
        + '</ul>'
        + '{{/if}}}'
      + '{{else #data+""===#data}}'
        + '"{^{>#data}}"'
      + '{{else}}'
        + '{^{>#data+""}}'
      + '{{/if}}',
      helpers: {
        isObject: isObject,
        notEmpty: notEmpty,
        isArray: $.isArray
      }
    },
    autoBind: true
  });
})(this.jQuery);
