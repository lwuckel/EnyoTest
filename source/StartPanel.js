enyo.kind(
{
	name: "StartPanel",
	kind: "Control",
	components: 
	[
		{
			kind: "onyx.Toolbar", 
			components: 
			[
				{
					kind: "onyx.RadioGroup", 
					components: 
					[
						{
							content: "Listen",
							active:true
						},
						{
							content: "Ansichten"
						}
					]
				}
			]		
		},
		{
			name: "list",
			fit: true,
			kind: "Repeater",
			count: 20,
//			multiSelect : false,
			onSetupItem: "setupItem",
			components : 
			[
				{
					name : "item",
					components :
					[
						{
							name : "index",
							content: "ok"
						},
						{
							name: "name",
							style: "float: right;"
						}
					]	
				}
			]
		}
	],
	setupItem: function(inSender, inEvent) {
		var i = inEvent.index;
		var item = inEvent.item;
		var ni = ("00000000" + i).slice(-7);
		item.$.index.setContent(ni);
		item.$.name.setContent(i);
//		item.$.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));

		return true;
	}
}
);
