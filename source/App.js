enyo.kind(
{
	name: "App",
	kind: "Panels",
	fit: true,
	classes:"app-panels", 
	arrangerKind: "CollapsingArranger",
	components: [
	{
		kind:"StartPanel",
	}
	,
	{
		kind:"MiddlePanel"
	}	
	]
});
