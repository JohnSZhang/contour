#### **stacked** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

Whether a single column visualization that has data with multiple series is displayed with each series stacked (`true`) or side by side (`false`).

**Example:**

		new Contour({
		    el: '.myColumnChart',
		    column: { stacked: true }
		  })
		.cartesian()
		.column([
		    {name: 'series1', data: [1,2,3,4]}, 
		    {name: 'series2', data: [5,6,7,8]}
		  ])
		.render()

*[Try it.](<%= jsFiddleLink %>)*

<% if(notes) { %><%= notes %><% } %>


