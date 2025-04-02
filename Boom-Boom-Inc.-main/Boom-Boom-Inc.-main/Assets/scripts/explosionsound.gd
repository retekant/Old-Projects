extends AudioStreamPlayer2D
@onready var timecreated = Time.get_ticks_msec()
# Called when the node enters the scene tree for the first time.
func _ready():
	if Time.get_ticks_msec() - timecreated > 10000:
		queue_free()
	pass # Replace with function body.
