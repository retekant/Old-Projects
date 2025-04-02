using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cmanager : MonoBehaviour
{
    public GameObject pw;
    public GameObject bw;
    public GameObject plb;
    public GameObject blb;

    public GameObject bg;
    public GameObject pg;
     public GameObject bgre;
    public GameObject pgre;

 public GameObject br;
    public GameObject pr;


    public int color;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
       color = PlayerPrefs.GetInt("colors");
        switch(color){
            case 0:
                pw.SetActive(true);
                bw.SetActive(true);
                break;
            case 1:

                plb.SetActive(true);
                blb.SetActive(true);
                break;
            case 2:

                pg.SetActive(true);
                bg.SetActive(true);
                break;
            case 3:

                pr.SetActive(true);
                br.SetActive(true);
                break;
             case 4:

                pgre.SetActive(true);
                bgre.SetActive(true);
            break;
        } 
    }
}
