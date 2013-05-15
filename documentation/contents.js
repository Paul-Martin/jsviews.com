﻿var content = $.views.documentation.content;
var useStorage = content.allowEdit;
content.topics = useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics")) ||
{
  "tmplrender": {
    "title": "APIs to render a template against data objects or arrays",
    "path": "",
    "sections": [
      {
        "_type": "data",
        "title": "The data",
        "data": {
          "name": "Fred"
        }
      },
      {
        "_type": "para",
        "title": "The title",
        "text": "paragraph"
      },
      {
        "_type": "template",
        "title": "The template",
        "markup": "<div>{{:expression}}</div>"
      },
      {
        "_type": "code",
        "title": "The code",
        "code": "code...\nvar foo = { a: \"fff\" };"
      },
      {
        "_type": "api",
        "title": "template.render()",
        "name": "render",
        "object": "template",
        "method": true,
        "tag": false,
        "returns": "string",
        "signatures": [
          {
            "_type": "signature",
            "title": "Basic",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              }
            ],
            "sections": [],
            "example": "var htmlString = myTemplate.render(myData);",
            "description": "Render template against data"
          },
          {
            "_type": "signature",
            "title": "With options",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              },
              {
                "_type": "param",
                "name": "helpersOrContext",
                "type": "object",
                "optional": true,
                "description": "Contextual helper methods or properties - available to template as <em>~keyName</em>"
              }
            ],
            "sections": [],
            "example": "var htmlString = myTemplate.render(myData);",
            "description": "Render template against data, and pass in helpers"
          }
        ],
        "description": "Render a template against data, and return a string.",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      }
    ]
  },
  "documentation": {
    "title": "JsViews Documentation",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "api",
            "label": "API"
          },
          {
            "hash": "tags",
            "label": "Tags"
          }
        ]
      }
    ]
  },
  "api": {
    "title": "API",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrapi",
            "label": "JsRender"
          },
          {
            "hash": "jsvapi",
            "label": "JsViews"
          },
          {
            "hash": "jsoapi",
            "label": "JsObservable"
          }
        ]
      }
    ]
  },
  "tags": {
    "title": "Tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "hash": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "hash": "includetag",
            "label": "{{include ...}}"
          },
          {
            "hash": "fortag",
            "label": "{{for ...}}"
          },
          {
            "hash": "iftag",
            "label": "{{if ...}}"
          },
          {
            "hash": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "hash": "commenttag",
            "label": "{{!-- ... --}}"
          },
          {
            "hash": "customtags",
            "label": "Custom Tags"
          }
        ]
      }
    ]
  },
  "assigntag": {
    "title": "{{: ...}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "title": "",
        "name": "name",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "title",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": false,
                "description": "ddddddd"
              }
            ],
            "sections": [],
            "example": "ddddddddd",
            "description": "fffffffasdf"
          }
        ],
        "description": "asdf",
        "sectionTypes": {}
      }
    ]
  },
  "jsvapi": {
    "title": "JsViews",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "tmplink",
            "label": "Linking data to HTML"
          }
        ]
      }
    ]
  },
  "jsrapi": {
    "title": "JsRender",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrtags",
            "label": "Built-in tags"
          },
          {
            "hash": "tmplrender",
            "label": "Render a template"
          },
          {
            "hash": "tmplcompile",
            "label": "Compile a template"
          }
        ]
      }
    ]
  },
  "tmplcompile": {
    "title": "Compile a template",
    "path": "",
    "sections": []
  },
  "htmltag": {
    "title": "{{> ...}}",
    "path": "",
    "sections": []
  },
  "includetag": {
    "title": "{{include ...}}",
    "path": "",
    "sections": []
  },
  "fortag": {
    "title": "{{for ...}}",
    "path": "",
    "sections": []
  },
  "elsetag": {
    "title": "{{else ...}}",
    "path": "",
    "sections": []
  },
  "commenttag": {
    "title": "{{!-- ... --}}",
    "path": "",
    "sections": []
  },
  "customtags": {
    "title": "Custom Tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrcustomtags",
            "label": "JsRender custom tags"
          },
          {
            "hash": "tagsascontrols",
            "label": "Custom tags as controls"
          }
        ]
      }
    ]
  },
  "jsoapi": {
    "title": "JsObservable",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "observe",
            "label": "Observing data"
          }
        ]
      }
    ]
  },
  "iftag": {
    "title": "{{if ...}}",
    "path": "",
    "sections": []
  },
  "gettingstarted": {
    "title": "Getting started",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [
          {
            "_type": "link",
            "hash": "hash",
            "label": ""
          }
        ],
        "topics": [
          {
            "hash": "jsrplaying",
            "label": "Playing with JsRender"
          },
          {
            "hash": "jsvplaying",
            "label": "Playing with JsViews"
          },
          {
            "_type": "topic",
            "hash": "hash",
            "label": ""
          }
        ]
      }
    ]
  },
  "jsrplaying": {
    "title": "Playing with JsRender",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "JsRender templates",
        "text": "JsRender templates are probably the most powerful and at the same time the most intuitive of template engines out there."
      },
      {
        "_type": "para",
        "title": "",
        "text": " To get started, let's just create a template, and run it against some data. The way you do that in code is like this:"
      },
      {
        "_type": "template",
        "title": "Here's a template:",
        "markup": "<label>Name:</label> {{:name}}"
      },
      {
        "_type": "code",
        "title": "Here's some code:",
        "code": "var person = {\n    name: \"Adriana\"\n};\n\nvar htmlOutput = myTemplate.render(person);"
      },
      {
        "_type": "para",
        "title": "And here it is as a working sample:",
        "text": "Let's go straight to a sample showing how that template renders against the data. Like all the samples in this documentation, it is a working sample that you can experiment with. \n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "You can hit <em>Try it</em>, modify the template or the data, then hit <em>Run Code</em> to see the effect immediately, in the running sample above."
          },
          {
            "_type": "para",
            "title": "",
            "text": "For example, replace the data with the following:"
          },
          {
            "_type": "data",
            "title": "",
            "data": [
              {
                "name": "Adriana"
              },
              {
                "name": "Robert"
              }
            ]
          },
          {
            "_type": "para",
            "title": "",
            "text": "Or try replacing the template with the following:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<table><tbody><tr>\n    <td>Name:</label> {{:name}}</td>\n</tr></tbody><table>"
          }
        ],
        "title": "A first template:",
        "markup": "<label>Name:</label> {{:name}}<br/>",
        "data": {
          "name": "Adriana"
        },
        "height": "90px",
        "onlyJsRender": true
      },
      {
        "_type": "para",
        "title": "",
        "text": "OK - a few interesting things there. For example, if you tried changing the data, and providing an array instead of an object, you will have seen that the template rendered once for each item in the array. <br/><br/>But before we look at more details on the template rendering, let's look at how you get a compiled template object for you markup, (<em>myTemplate</em> in the code example above) so you can call the render method. <br/><br/>The next working example shows you that."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "In the html you see that we put our markup in a script block with <em>type=\"text/x-jsrender\"</em> and then in the code we called the $.templates method with a jQuery selector for that script block, to get the compiled template."
          },
          {
            "_type": "para",
            "title": "",
            "text": "After that we run the code we have already seen to render the template against our data, and get the HTML output as a string. (We pass the data - this time we used an array - to the render() method of our compiled template.)"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Finally we simply insert that output into the HTML DOM using the jQuery html() method."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Again, you can play with the sample, by changing the data, or the markup, or the code."
          },
          {
            "_type": "para",
            "title": "",
            "text": "For example if you change the template to produce a <em>&lt;tr></em>, you will want to insert the output into the tbody of a table, by adding a <em>&lt;table>&lt;tbody></em> target container - as in the following:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n    <tr><td>Name:</label> {{:name}}</td></tr>\n</script>"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n    <label>Name:</label> {{:name}}\n</script>",
        "code": "var myTemplate = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nvar htmlOutput = myTemplate.render(people);\n\n$(\"#peopleList\").html(htmlOutput);",
        "title": "Complete code for template rendering:",
        "onlyJsRender": true,
        "height": "110px"
      },
      {
        "_type": "para",
        "title": "What else is in templates?",
        "text": "JsRender template have a very rich feature set, yet a small number of predefined tags. The links at the moment of this topic give details on some of the features."
      },
      {
        "_type": "para",
        "title": "",
        "text": " But let's try one more sample, where this time, instead of passing our people array to the template.render() method, we will pass an object (our <em>app</em> object) which will have a <em>people</em> property. Now in the template we will use a <em>{{for}}</em> tag to iterate over the <em>people</em>. "
      },
      {
        "_type": "para",
        "title": "",
        "text": "Also we'll use an <em>{{if}}</em> tag to test whether the person has a <em>nickname</em> field, and if so we will render out the nickname too..."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "The <em>{{for people}}...{{/for}}</em> block tag, in the template, looks at the current data item (the <em>app</em> that we passed in) and navigates a data-path that you provide as parameter - in this case <em>people</em>."
          },
          {
            "_type": "para",
            "title": "",
            "text": "JsRender supports different kinds of paths, as well as expressions of various kinds. The data-path can be something like <em>address.street</em>, with 'dot' separators, but in this case it is simply the <em>people</em> property of the app object."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Now, because <em>people</em> is an array, JsRender will render the content of the <em>{{for}}...{{/for}}</em> block <b><em>once for each item in the array</em></b>.  "
          },
          {
            "_type": "para",
            "title": "",
            "text": "Within the block the current item is now the person (item in the array), and there we have an <em>{{if people}}...{{/if}}</em> block tag, which takes an expression as parameter."
          },
          {
            "_type": "para",
            "title": "",
            "text": " In this case the expression is another data-path, <em>nickname</em>. So it renders the content of the <em>{{if}}...{{/if}}</em> block if the nickname is not undefined (or is not null, or the empty string)."
          },
          {
            "_type": "para",
            "title": "",
            "text": "You can experiment by replacing the <em>{{if nickname}}</em> expression. For example, try giving <em>Adriana</em> the nickname <em>Adriana</em>! Then try replacing <em>{{if nickname}}</em> with:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{if nickname && nickname !== name}} "
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n          {{if nickname}}\n            ( {{:nickname}} )\n          {{/if}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\",\n      nickname: \"Bob\"\n    }\n  ];\n\n  app = {\n    people: people\n  };\n\nvar htmlOutput = myTemplate.render(app);\n\n$(\"#peopleList\").html(htmlOutput);\n",
        "onlyJsRender": true,
        "title": "Some template tags...",
        "height": "110px"
      },
      {
        "_type": "links",
        "title": "Links",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "jsrtags",
            "label": "Built-in tags"
          },
          {
            "_type": "topic",
            "hash": "data",
            "label": "Data"
          },
          {
            "_type": "topic",
            "hash": "templates",
            "label": "Templates"
          },
          {
            "_type": "topic",
            "hash": "views",
            "label": "Views"
          },
          {
            "_type": "topic",
            "hash": "tagexpressions",
            "label": "Tag expressions"
          },
          {
            "_type": "topic",
            "hash": "customtags",
            "label": "Custom tags"
          },
          {
            "_type": "topic",
            "hash": "jsrapi",
            "label": "JsRender APIs"
          }
        ]
      }
    ]
  },
  "jsvplaying": {
    "title": "Playing with JsViews",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "JsViews: A platform for data-bound single-page apps",
        "text": "JsViews provides dynamic data-bound views, built on top of JsRender templates. It \"brings JsRender templates to life\". So lets start with the JsRender template we ended up with in the <a href=\"#jsrplaying\">Playing with JsViews</a> topic:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "If you look at the code you will see it is almost identical to the previous JsRender sample. One difference though: The two lines for rendering the template as a string and then inserting it into the DOM:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var htmlOutput = myTemplate.render(app);\n\n$(\"#peopleList\").html(htmlOutput);\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "...have been replaced by a single line:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "myTemplate.link(\"#peopleList\", app);"
          },
          {
            "_type": "para",
            "title": "",
            "text": "That line of code renders the template against the data (second parameter) and then inserts that data under the container element (first parameter), <em>and data-binds the HTML</em>. "
          }
        ],
        "sampleName": "",
        "url": "",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n</script>\n",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nmyTemplate.link(\"#peopleList\", app);",
        "height": "120px",
        "title": "Using the template.link() method"
      },
      {
        "_type": "para",
        "title": "Data-linking",
        "text": "In JsViews we refer to <em>data-linking</em>. It means data-binding, but refers to the particular approach used in JsViews, which is based on <em>observable arrays and objects</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "If you take an object and assign a new value to one of its properties (fields), there is no corresponding event that can allow other code to know you modified the object. Similarly, mutating an array will not provide any events or notifications to other code.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "\nThat's where <em>JsObservable</em> comes in. It provides ways of changing objects and arrays, <em>observably</em>.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The next sample shows what happens when the template renders against an array, and then that array is modified 'observably' (<em>observable collection change</em>).\n"
      },
      {
        "_type": "code",
        "title": "",
        "code": "$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Click on the Add button, and a new row gets added to the array. The template rendering automatically updates to show the new row."
          },
          {
            "_type": "para",
            "title": "",
            "text": "It uses the code:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.observable(people).insert(people.length, {name: \"name\"});"
          },
          {
            "_type": "para",
            "title": "",
            "text": "But notice that the template is different from previously. It has that extra carat sign: <em style=\"white-space:nowrap\">{<b>^</b>{for ...}}</em>. Try removing the <b>^</b> and then clicking the <em>Add</em> button. - Nothing happens."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Any regular JsRender tag <em>{{someTag ...}}</em> - whether built-in or custom - can be data-linked by adding the <b>^</b>: <em style=\"white-space:nowrap\">{<b>^</b>{someTag ...}}</em>. That tag has become 'dynamic' and will re-render itself whenever it needs to, if the underlying data changes ('observably')."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Remove the <b>^</b>, and the tag is 'dead'..."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr><td>\n      {{:name}}\n    </td></tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar htmlOutput = myTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})",
        "height": "200px",
        "title": "Data-linked tags and observable arrays and objects "
      },
      {
        "_type": "para",
        "title": "",
        "text": "What about changing an object? Let's modify the <em>name</em> on a <em>person</em> object (<em>observable property change</em>):"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Here is the code when you click <em>Change</em>:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "function(){\n  var dataItem = $.view(this).data;\n\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "The code for \"setProperty\" makes sense, given what we have already seen. You call <em style=\"white-space:nowrap\">$.observable(myObject)</em> to get an 'observable form of your object' which will provide you appropriate methods you can call: <em style=\"white-space:nowrap\">setProperty(...)</em> if it was an object, and <em>insert, remove, refresh</em> and <em>move</em>, if it was an array. "
          },
          {
            "_type": "para",
            "title": "",
            "text": "But in our case, the first problem is to know <em>which</em> person object should be modified by this particular button. The <em>this</em> pointer in the click-handler is the element, and our code: "
          },
          {
            "_type": "code",
            "title": "",
            "code": "var dataItem = $.view(this).data;"
          },
          {
            "_type": "para",
            "title": "",
            "text": "let's us get the <em>view</em> (an 'instance' of a rendered template, or template tag block) and hence to the data item (in this case the <em>person</em>) we want to modify."
          },
          {
            "_type": "para",
            "title": "",
            "text": "As in the previous sample, we have 'brought a tag to life' by writing:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{^{:name}}</td>\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Change it back to:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{^{:name}}</td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "and you will see that the name no longer updates when you click on the <em>Change</em> button."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td>{^{:name}}</td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "height": "200px",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function(){\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n})\n",
        "title": "Observable change: propertyChange"
      },
      {
        "_type": "para",
        "title": "Data-linked tags...",
        "text": "So far have used data-linked template tags for data-linking, as in:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "<td>{^{:name}}</td>"
      },
      {
        "_type": "para",
        "title": "",
        "text": "But the fact that the data-linked tag is wrapped by an HTML element means that if we want we can replace it by an 'element-base' syntax:"
      },
      {
        "_type": "template",
        "title": "...or element-based data-linking",
        "markup": "<td data-link=\"name\"></td>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "So this version of the sample uses:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"name\"></td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Try changing it back to the data-linked tag syntax. You will see that the sample works just the same..."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function(){\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n})\n",
        "height": "200px",
        "title": "Element-based linking: \"data-link\""
      },
      {
        "_type": "para",
        "title": "",
        "text": "But what about <em>two-way</em> data-binding?"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "This is where the element-based data-linking comes into its own. The textbox uses declarative binding:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"name\"></td>\n<td>\n  <input data-link=\"name\"/>\n</td>\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "The <em>&lt;input></em> and the <em>&lt;td></em> are both data-linked. The underlying data gets modified when you change the name in the textbox - and updates the <em>&lt;td></em>, without you needing to write any <em>propertyChange</em> code at all."
          }
        ],
        "title": "Two-way data-binding",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <input data-link=\"name\"/>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n",
        "height": "200px"
      },
      {
        "_type": "para",
        "title": "A more complete sample:",
        "text": "This was just a glimpse of some of the richness of JsViews data-linking. The next sample let's you see a more fully-fledged example, which you can experiment with."
      },
      {
        "_type": "para",
        "title": "",
        "text": "See the links section below, for more details on features and APIs..."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [],
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n  {\n    ID: \"Ad0\",\n    name: \"Adriana\"\n  },\n  {\n    ID: \"Ro0\",\n    name: \"Robert\",\n    nickname: \"Bob\"\n  }\n];\n\nvar counter = 1;\n\nvar app = {\n    people: people,\n    selectedID: people[1].ID,\n    selected: function() {\n      for (var i=0; i<people.length; i++) {\n        if (people[i].ID === this.selectedID) {\n          return people[i];\n        }\n      }\n      return {};\n    }\n  };\n\napp.selected.depends = \"selectedID\";\n\n// Data-link details container to people, using the peopleTmpl template\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\nvar newID = \"new\" + counter++;\n  $.observable(people).insert(people.length, {ID: newID, name: \"name\"});\n  $.observable(app).setProperty(\"selectedID\", newID);\n\n})\n\n$(\"#removeBtn\").on(\"click\", function(){\n  $.observable(people).remove($.inArray(app.selected(), people));\n  $.observable(app).setProperty(\"selectedID\", \"0\");\n})\n",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n    <button id=\"removeBtn\" data-link=\"disabled{:selectedID === '0'}\">Remove</button>\n  </td></tr>\n  <tr><td>\n    <select data-link=\"selectedID\" size=\"5\">\n      <option value=\"0\">Choose a person to edit</option>\n        {^{for people}}\n          <option data-link=\"{:name} value{:ID} selected{:ID === ~root.selectedID}\"></option>\n        {{/for}}\n    </select>\n  </td></tr>\n  <tr><td>\n    <label>Name:<input data-link=\"{:selected().name:} disabled{:selectedID === '0'}\" /></label>\n    <label>Nickname:<input data-link=\"{:selected().nickname:} disabled{:selectedID === '0'}\" /></label>\n  </td></tr>\n  <tr><td class=\"center\">\n    {^{for selected()}}\n      {^{:name}}\t\n      {^{if nickname}}\n        ( {^{:nickname}} )\n      {{/if}}\n    {{/for}}\n  </td></tr>\n</script>",
        "height": "220px",
        "title": "data-linking to &lt;select>... and much more..."
      },
      {
        "_type": "links",
        "title": "Links",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "renderorlink",
            "label": "Rendering versus linking"
          },
          {
            "_type": "topic",
            "hash": "data",
            "label": "Data"
          },
          {
            "_type": "topic",
            "hash": "views",
            "label": "Views"
          },
          {
            "_type": "topic",
            "hash": "linkobservedispose",
            "label": "Linking, observing, disposing"
          },
          {
            "_type": "topic",
            "hash": "computed",
            "label": "Computed observables"
          },
          {
            "_type": "topic",
            "hash": "dependencies",
            "label": "Declaring dependencies"
          },
          {
            "_type": "topic",
            "hash": "tagcontrols",
            "label": "Tag Controls"
          },
          {
            "_type": "topic",
            "hash": "mvvm-mvp",
            "label": "MVVM and MVP"
          },
          {
            "_type": "topic",
            "hash": "jsvapi",
            "label": "JsViews APIs"
          },
          {
            "_type": "topic",
            "hash": "jsoapi",
            "label": "JsObservable APIs"
          }
        ]
      }
    ]
  },
  "concepts": {
    "title": "Concepts",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "data",
            "label": "Data"
          },
          {
            "hash": "templates",
            "label": "Templates"
          },
          {
            "hash": "views",
            "label": "Views"
          },
          {
            "hash": "renderorlink",
            "label": "Rendering versus linking"
          },
          {
            "hash": "customtags",
            "label": "Custom tags"
          },
          {
            "hash": "tagexpressions",
            "label": "Tag expressions"
          },
          {
            "hash": "linkobservedispose",
            "label": "Linking, observing, disposing"
          },
          {
            "hash": "tagcontrols",
            "label": "Tag Controls"
          }
        ]
      }
    ]
  },
  "data": {
    "title": "Data",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "objectsorvm",
            "label": "Plain objects or View Model"
          },
          {
            "hash": "ajax",
            "label": "Ajax requests"
          },
          {
            "hash": "observabledata",
            "label": "Observable data"
          },
          {
            "hash": "computed",
            "label": "Computed observables"
          },
          {
            "hash": "dependencies",
            "label": "Declaring dependencies"
          }
        ]
      }
    ]
  },
  "objectsorvm": {
    "title": "Plain objects or View Model",
    "path": "",
    "sections": []
  },
  "ajax": {
    "title": "Ajax requests",
    "path": "",
    "sections": []
  },
  "observabledata": {
    "title": "Observable data",
    "path": "",
    "sections": []
  },
  "computed": {
    "title": "Computed observables",
    "path": "",
    "sections": []
  },
  "dependencies": {
    "title": "Declaring dependencies",
    "path": "",
    "sections": []
  },
  "templates": {
    "title": "Templates",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "composition",
            "label": "Composition"
          }
        ]
      }
    ]
  },
  "composition": {
    "title": "Composition",
    "path": "",
    "sections": []
  },
  "views": {
    "title": "Views",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "viewhierarchy",
            "label": "View hierarchy"
          }
        ]
      }
    ]
  },
  "viewhierarchy": {
    "title": "View hierarchy",
    "path": "",
    "sections": []
  },
  "renderorlink": {
    "title": "Rendering versus linking",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "renderasstring",
            "label": "String-based rendering"
          },
          {
            "hash": "linkingtohtml",
            "label": "Data-binding to HTML"
          },
          {
            "hash": "data-link",
            "label": "Element-based: data-link"
          },
          {
            "hash": "inlinebinding",
            "label": "Inline tag binding"
          }
        ]
      }
    ]
  },
  "renderasstring": {
    "title": "String-based rendering",
    "path": "",
    "sections": []
  },
  "linkingtohtml": {
    "title": "Data-binding to HTML",
    "path": "",
    "sections": []
  },
  "data-link": {
    "title": "Element-based: data-link",
    "path": "",
    "sections": []
  },
  "inlinebinding": {
    "title": "Inline tag binding",
    "path": "",
    "sections": []
  },
  "jsrcustomtags": {
    "title": "JsRender custom tags",
    "path": "",
    "sections": []
  },
  "tagsascontrols": {
    "title": "Custom tags as controls",
    "path": "",
    "sections": []
  },
  "expressions": {
    "title": "Tag expressions",
    "path": "",
    "sections": []
  },
  "allowcode": {
    "title": "Allow code?",
    "path": "",
    "sections": []
  },
  "tagexpressions": {
    "title": "Tag expressions",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "allowcode",
            "label": "Allow code?"
          },
          {
            "hash": "expressions",
            "label": "Expressions"
          },
          {
            "hash": "expressions/datapath",
            "label": "Data paths"
          },
          {
            "hash": "expressions/helperpath",
            "label": "Helper paths"
          },
          {
            "hash": "expressions/viewpath",
            "label": "View paths"
          }
        ]
      }
    ]
  },
  "expressions/datapath": {
    "title": "Data paths",
    "path": "",
    "sections": []
  },
  "expressions/helperpath": {
    "title": "Helper paths",
    "path": "",
    "sections": []
  },
  "expressions/viewpath": {
    "title": "View paths",
    "path": "",
    "sections": []
  },
  "linkobservedispose": {
    "title": "Linking, observing, disposing",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": []
      }
    ]
  },
  "tagcontrols": {
    "title": "Tag Controls",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "taghierarchy",
            "label": "Tag hierarchy"
          },
          {
            "hash": "taglifecycle",
            "label": "Tag lifecycle"
          },
          {
            "hash": "tagmethods",
            "label": "Tag methods and properties"
          }
        ]
      }
    ]
  },
  "taghierarchy": {
    "title": "Tag hierarchy",
    "path": "",
    "sections": []
  },
  "taglifecycle": {
    "title": "Tag lifecycle",
    "path": "",
    "sections": []
  },
  "tagmethods": {
    "title": "Tag methods and properties",
    "path": "",
    "sections": []
  },
  "jsrtags": {
    "title": "Built-in tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "hash": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "hash": "includetag",
            "label": "{{include ...}}"
          },
          {
            "hash": "fortag",
            "label": "{{for ...}}"
          },
          {
            "hash": "iftag",
            "label": "{{if ...}}"
          },
          {
            "hash": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "hash": "commenttag",
            "label": "{{!-- ... --}}"
          }
        ]
      }
    ]
  },
  "tmplink": {
    "title": "Linking data to HTML",
    "path": "",
    "sections": []
  },
  "observe": {
    "title": "Observing data",
    "path": "",
    "sections": []
  },
  "mvvm-mvp": {
    "title": "MVVM and MVP",
    "path": "",
    "sections": []
  }
};
content.categories = useStorage && $.parseJSON(localStorage.getItem("JsViewsDocCategories")) ||
[
  {
    "name": "gettingstarted",
    "label": "Getting started",
    "categories": [
      {
        "name": "jsrplaying",
        "label": "Playing with JsRender"
      },
      {
        "name": "jsvplaying",
        "label": "Playing with JsViews"
      }
    ],
    "expanded": true
  },
  {
    "name": "concepts",
    "label": "Concepts",
    "categories": [
      {
        "name": "data",
        "label": "Data",
        "categories": [
          {
            "name": "objectsorvm",
            "label": "Plain objects or View Model"
          },
          {
            "name": "ajax",
            "label": "Ajax requests"
          },
          {
            "name": "observabledata",
            "label": "Observable data"
          },
          {
            "name": "computed",
            "label": "Computed observables"
          },
          {
            "name": "dependencies",
            "label": "Declaring dependencies"
          }
        ],
        "expanded": true
      },
      {
        "name": "templates",
        "label": "Templates",
        "categories": [
          {
            "name": "composition",
            "label": "Composition"
          }
        ],
        "expanded": true
      },
      {
        "name": "views",
        "label": "Views",
        "categories": [
          {
            "name": "viewhierarchy",
            "label": "View hierarchy"
          }
        ],
        "expanded": true
      },
      {
        "name": "renderorlink",
        "label": "Rendering versus linking",
        "categories": [
          {
            "name": "renderasstring",
            "label": "String-based rendering"
          },
          {
            "name": "linkingtohtml",
            "label": "Data-binding to HTML"
          },
          {
            "name": "data-link",
            "label": "Element-based: data-link"
          },
          {
            "name": "inlinebinding",
            "label": "Inline tag binding"
          }
        ],
        "expanded": true
      },
      {
        "name": "customtags",
        "label": "Custom tags",
        "categories": [
          {
            "name": "jsrcustomtags",
            "label": "JsRender custom tags"
          },
          {
            "name": "tagsascontrols",
            "label": "Custom tags as controls"
          }
        ],
        "expanded": true
      },
      {
        "name": "tagexpressions",
        "label": "Tag expressions",
        "categories": [
          {
            "name": "allowcode",
            "label": "Allow code?"
          },
          {
            "name": "expressions",
            "label": "Expressions"
          },
          {
            "name": "expressions/datapath",
            "label": "Data paths"
          },
          {
            "name": "expressions/helperpath",
            "label": "Helper paths"
          },
          {
            "name": "expressions/viewpath",
            "label": "View paths"
          }
        ],
        "expanded": true
      },
      {
        "name": "linkobservedispose",
        "label": "Linking, observing, disposing"
      },
      {
        "name": "tagcontrols",
        "label": "Tag Controls",
        "categories": [
          {
            "name": "taghierarchy",
            "label": "Tag hierarchy"
          },
          {
            "name": "taglifecycle",
            "label": "Tag lifecycle"
          },
          {
            "name": "tagmethods",
            "label": "Tag methods and properties"
          }
        ],
        "expanded": true
      },
      {
        "name": "mvvm-mvp",
        "label": "MVVM and MVP"
      }
    ],
    "expanded": true
  },
  {
    "name": "api",
    "label": "API Topics",
    "categories": [
      {
        "name": "jsrapi",
        "label": "JsRender",
        "categories": [
          {
            "name": "jsrtags",
            "label": "Built-in tags",
            "categories": [
              {
                "name": "assigntag",
                "label": "{{: ...}}"
              },
              {
                "name": "htmltag",
                "label": "{{> ...}}"
              },
              {
                "name": "includetag",
                "label": "{{include ...}}"
              },
              {
                "name": "fortag",
                "label": "{{for ...}}"
              },
              {
                "name": "iftag",
                "label": "{{if ...}}"
              },
              {
                "name": "elsetag",
                "label": "{{else ...}}"
              },
              {
                "name": "commenttag",
                "label": "{{!-- ... --}}"
              }
            ],
            "expanded": true
          },
          {
            "name": "tmplrender",
            "label": "Render a template"
          },
          {
            "name": "tmplcompile",
            "label": "Compile a template",
            "categories": [],
            "expanded": true
          }
        ],
        "expanded": true
      },
      {
        "name": "jsvapi",
        "label": "JsViews",
        "categories": [
          {
            "name": "tmplink",
            "label": "Linking data to HTML"
          }
        ],
        "expanded": true
      },
      {
        "name": "jsoapi",
        "label": "JsObservable",
        "categories": [
          {
            "name": "observe",
            "label": "Observing data"
          }
        ],
        "expanded": true
      }
    ],
    "expanded": true
  }
];