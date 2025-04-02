using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Advertisements;
using UnityEngine.SceneManagement;

public class button : MonoBehaviour
{
 
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        int asdfasdf = PlayerPrefs.GetInt("asdf");
        if(asdfasdf == 0){
            PlayerPrefs.SetInt("speed", 20);
            PlayerPrefs.SetInt("asdf", 123);
        }
    }
    public void sta()
    {
        SceneManager.LoadScene("Game");
    }
    public void opionts(){
        SceneManager.LoadScene("opions");
    }
    public void hom()
    {
        SceneManager.LoadScene("hom");
    }
    public void speedup()
    {
        int speed = PlayerPrefs.GetInt("speed");
        if(speed < 80){
            PlayerPrefs.SetInt("speed", speed + 5);
        }
        
    }
    public void speeddown()
    {
       int speed = PlayerPrefs.GetInt("speed");
        if(speed > 10){
            PlayerPrefs.SetInt("speed", speed - 5);
        }
    }
    public void white()
    {
       
        PlayerPrefs.SetInt("colors", 0);
        
    }
    
    public void lb()
    {
       PlayerPrefs.SetInt("colors", 1);
    }
    public void twob()
    {
       PlayerPrefs.SetInt("colors", 2);
    }
    public void redb()
    {
       PlayerPrefs.SetInt("colors", 3);
    }
    public void gren()
    {
       PlayerPrefs.SetInt("colors", 4);
    }
    
}
