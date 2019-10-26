var root = {
 "name": "flare",
 "children": [
      {
        name: "display",
        children: [
                  {name:"display1",size:1,
                   children: [
                            {name:"display1.a",size:1}
                              ]
                  },
                   {name:"display2",size:2},
                    {name:"display3",size:3}
                  ]
      },
         {
        name: "data",
        children: [
                  {name:"happy",size:4}
                  ]
      },
         {
        name: "data",
        children: [
                  {name:"quadro",size:9}
                  ]
      }
   ]};


var diameter = 300,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(10);

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

  var node = svg.selectAll(".node")
      .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className + ": " + format(d.value); });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.packageName); });

  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.className.substring(0, d.r / 3); });


// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
    console.log({packageName: name, className: node.name, value: node.size})
  }

  recurse(null, root);
 return {children: classes};
//return root
}

d3.select(self.frameElement).style("height", diameter + "px");
