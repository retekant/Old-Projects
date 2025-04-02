using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class emov : MonoBehaviour
{
    public float score;
    public int speed;
    // Start is called before the first frame update
    void Start()
    {
        speed = PlayerPrefs.GetInt("speed");
    }

    // Update is called once per frame
    void Update()
    {
        score = scoreaddya.score; 
        transform.Translate(0, -speed * Time.deltaTime, 0);
      /*  if(score > 50){
            speed += 5;
        }
        if(score > 75){
            speed += 5;
        } */
    }
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "nomoree")
        {
            Destroy(gameObject);
            

        }
    }

}
