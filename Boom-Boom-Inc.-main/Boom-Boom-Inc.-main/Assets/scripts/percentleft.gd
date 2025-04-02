extends Label

var totalinlevel 
@export var color : Color

# Called when the node enters the scene tree for the first time.
func _ready():
	if get_tree().get_current_scene().get_name() == "za warudo":
		set_modulate(color)

	totalinlevel = Startingscene.thingsperlevel
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	#print(str(Global.thingsLeft)+"/"+str(totalinlevel))
	
	var percent = int(round(-((Global.thingsLeft-totalinlevel)/totalinlevel)*100))
	if percent == -0:
		self.text =  "0%"
	else:
		self.text =  str(percent)+"%"
	pass
