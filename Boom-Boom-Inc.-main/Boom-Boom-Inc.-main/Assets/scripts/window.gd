extends StaticBody2D

@onready var winnormal = $Winnormal

@onready var winsad = $Winsad

var notdestroyed = true



func _on_area_2d_body_entered(body):
	if body.is_in_group("explosive") and notdestroyed:
		winnormal.hide()
		winsad.show()
		Global.thingsLeft -= 1.00
		notdestroyed = false
	pass # Replace with function body.
