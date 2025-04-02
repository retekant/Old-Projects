extends StaticBody2D

func _process(delta):
	print(Global.thingsLeft)
	if Global.thingsLeft <= 0:
		queue_free()
	pass
