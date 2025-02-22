var APP_DATA = {
  "scenes": [
    {
      "id": "0-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.009051545169812769,
        "pitch": 0.03228678802093654,
        "fov": 1.409453910422369
      },
      "linkHotspots": [
        {
          "yaw": -2.9050450974210342,
          "pitch": 0.10201058939195562,
          "rotation": 0,
          "target": "2-livingroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.35107757076514545,
        "pitch": 0.030214081562490946,
        "fov": 1.409453910422369
      },
      "linkHotspots": [
        {
          "yaw": 2.030937009263309,
          "pitch": 0.21433830231543993,
          "rotation": 0,
          "target": "2-livingroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom1",
      "name": "livingroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.600213309557664,
        "pitch": 0.011738557094691515,
        "fov": 1.409453910422369
      },
      "linkHotspots": [
        {
          "yaw": 0.19614256897248517,
          "pitch": 0.03501396703486748,
          "rotation": 0,
          "target": "0-pantry"
        },
        {
          "yaw": -0.9665429060994484,
          "pitch": 0.24598662198726196,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
