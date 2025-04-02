using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawnii : MonoBehaviour
{
    public GameObject asdf;
    // Start is called before the first frame update
    void Start()
    {
        Instantiate(asdf, transform.position, Quaternion.identity);
    }

    // Update is called once per frame
    void Update()
    {
        Destroy(gameObject);
    }
}
