enyo.kind(
{
	name: "MiddlePanel",
	kind: "Control",
	content : "ok",
	components: 
	[
		{
			kind: "onyx.Toolbar", 
			components: 
			[
				{
					kind: "onyx.Grabber"
				},
				{
					kind: "onyx.Button", 
					content: "Favorites"
				},
				{
					kind: "onyx.InputDecorator", 
					components: 
					[
						{
							kind: "onyx.Input", 
							placeholder: "Input..."
						}
					]
				},
				{
					kind: "onyx.IconButton",
		        		src: "https://github.com/enyojs/enyo/wiki/assets/remove-icon.png"
				}
			]
		}
	]
});
