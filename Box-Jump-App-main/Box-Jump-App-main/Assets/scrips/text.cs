using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class text : MonoBehaviour
{
    public GameObject speedtxt;
     public GameObject htxt;
    public GameObject ctxt;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        speedtxt.GetComponent<UnityEngine.UI.Text>().text = PlayerPrefs.GetInt("speed").ToString();
        htxt.GetComponent<UnityEngine.UI.Text>().text = PlayerPrefs.GetFloat("highscore").ToString();
        ctxt.GetComponent<UnityEngine.UI.Text>().text = PlayerPrefs.GetInt("coins").ToString();
    }
}
