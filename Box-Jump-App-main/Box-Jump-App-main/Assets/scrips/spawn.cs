using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawn : MonoBehaviour
{

    private float timeBtwSpawns;
    public float startTimeBtwSpawns;
    public float timeDecrease;
    public float minTime;
    public float timenewya = 0.0f;

    public GameObject[] obstacleTemplate;

    private void Start()
    {
        timeBtwSpawns = startTimeBtwSpawns;
    }

    void Update()
    {

        if (timeBtwSpawns <= 0)
        {
            int rand = Random.Range(0, obstacleTemplate.Length);
            Instantiate(obstacleTemplate[rand], transform.position, Quaternion.identity);
            timeBtwSpawns = startTimeBtwSpawns;
            if (startTimeBtwSpawns > minTime)
            {
                startTimeBtwSpawns -= timeDecrease;
            }
        }
        else
        {
            timeBtwSpawns -= Time.deltaTime;
        }
    }

}