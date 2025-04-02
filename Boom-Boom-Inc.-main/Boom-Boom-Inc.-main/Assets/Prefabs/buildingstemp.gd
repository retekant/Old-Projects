extends StaticBody2D

@export var snormal : Sprite2D
@export var ssad : Sprite2D
var notdestroyed = true


func _on_area_2d_body_entered(body):
	if body.is_in_group("explosive") and notdestroyed:
		snormal.hide()
		ssad.show()
		Global.thingsLeft -= 1.00
		notdestroyed = false
