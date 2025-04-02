extends Node2D

var speed = 250
var BIGspeed = 300
var Bomba = preload("res://Assets/Prefabs/bomb.tscn")
@onready var firepoint = $firepoint
@onready var bbomarm = $Bbomarm
@onready var bombarm = $Bombarm
var bBomba = preload("res://Assets/Prefabs/bbomb.tscn")


# Called when the node enters the scene tree for the first time.
func _ready():
	if get_tree().get_current_scene().get_name() == "Starting" or get_tree().get_current_scene().get_name() == "The End":
		bbomarm.hide()
	elif get_tree().get_current_scene().get_name() == "L2":
		bombarm.hide()
	else:
		bbomarm.hide()
		bombarm.hide()
	pass # Replace with function body.

func fire():
	if get_tree().get_current_scene().get_name() == "Starting" or get_tree().get_current_scene().get_name() == "The End":
		var bomb = Bomba.instantiate()
		bomb.position = firepoint.global_position
		bomb.linear_velocity = Vector2(speed,0).rotated(rotation)
		get_tree().get_root().call_deferred("add_child", bomb)
	elif get_tree().get_current_scene().get_name() == "L2":
		var bomb = bBomba.instantiate()
		bomb.position = firepoint.global_position
		bomb.rotation = rotation+89.5
		bomb.linear_velocity = Vector2(BIGspeed,0).rotated(rotation)
		get_tree().get_root().call_deferred("add_child", bomb)
	
	
func _process(delta): 
	if Input.is_action_just_pressed("LMB"):
		fire()
	look_at(get_global_mouse_position())
	pass
