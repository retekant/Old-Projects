extends CharacterBody2D
@onready var player = $Player
@onready var asdf = $AudioStreamPlayer2D
var isplaying = false
@export var SPEED = 200;
var upodown = true
var direction = 0
func anim():
	
	if velocity != Vector2(0,0):
		if get_tree().get_current_scene().get_name() == "The End"  and isplaying == false:
			asdf.play()
			isplaying = true
		if get_tree().get_current_scene().get_name() == "za warudo"  and isplaying == false:
			asdf.play()
			isplaying = true
		if upodown:
			player.position.y += 0.5
			await(get_tree().create_timer(0.1).timeout)
			upodown = false
		else:
			player.position.y -= 0.5
			await(get_tree().create_timer(0.1).timeout)
			upodown = true
	else:
		asdf.stop()
		isplaying = false
	
func movement():
	direction = Input.get_vector("A", "D", "W", "S");
	velocity = direction * SPEED;
	
	move_and_slide();
	
func _physics_process(delta):
	movement();
	anim()
	

