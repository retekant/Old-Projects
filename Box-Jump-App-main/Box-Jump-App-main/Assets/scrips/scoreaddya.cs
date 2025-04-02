using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scoreaddya : MonoBehaviour
{
    public static float score = 0.0f;
    public GameObject txt;
    public float s = 0.0f;
    public float hscore;
    // Start is called before the first frame update
    void Start()
    {
        score = 0.0f;
        hscore = PlayerPrefs.GetFloat("highscore");
    }

    // Update is called once per frame
    void Update()
    {
        
        txt.GetComponent<UnityEngine.UI.Text>().text = score.ToString();
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if(other.gameObject.tag == "enemy")
        {

            score += 0.25f;
            if (score > hscore)
            {
                PlayerPrefs.SetFloat("highscore", score);
            }
            Destroy(other.gameObject);
        }
    }
  
}
