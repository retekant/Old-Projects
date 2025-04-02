extends StaticBody2D
@onready var theend = $"../Control/theend"

var real = 0
func _on_area_2d_body_entered(body):
	if body.is_in_group("explosive"):
		theend.show()
		get_tree().quit()
		
	pass # Replace with function body.
