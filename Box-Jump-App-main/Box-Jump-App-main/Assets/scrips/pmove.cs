using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pmove : MonoBehaviour
{
    public static bool canstart;
    Rigidbody rig;
    public GameObject button;
    public GameObject nomore;
    public float sped;


    public void left(){
        if (transform.position.x > -12)
        {
            transform.Translate(-6f, 0, 0);
        }
    }
    public void right(){
        if (transform.position.x < 12)
        {
            transform.Translate(6f, 0, 0);
        }
    }


    // Start is called before the first frame update
    void Start()
    {
        canstart = true;
    }
    
    // Update is called once per frame
    void Update()
    {
        Vector3 mousepos = Input.mousePosition;
        Vector3 asdf = Camera.main.ScreenToWorldPoint(mousepos);
        Debug.Log(asdf.x);
        transform.position = new Vector3(asdf.x, -18, 0);
        


    }
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "enemy")
        {
            Destroy(gameObject);
            nomore.SetActive(true);
            button.SetActive(true);

        }
    }
}
