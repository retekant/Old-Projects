extends Node2D


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_area_2d_body_entered(body):
	if get_tree().get_current_scene().get_name() == "Starting":
		get_tree().change_scene_to_file("res://Scenes/l_2.tscn")
		Startingscene.thingsperlevel = 47.00
		Global.thingsLeft = 47.00
	elif get_tree().get_current_scene().get_name() == "L2":
		get_tree().change_scene_to_file("res://Scenes/za_warudo.tscn")
		Startingscene.thingsperlevel = 1.00
		Global.thingsLeft = 1.00
	elif get_tree().get_current_scene().get_name() == "za warudo":
		get_tree().change_scene_to_file("res://Scenes/the_end.tscn")
		Startingscene.thingsperlevel = 1.00
		Global.thingsLeft = 1.00
		
	
