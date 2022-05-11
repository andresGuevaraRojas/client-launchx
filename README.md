# Cliente web - App VueJs

Con el objetivo de facilitar la interacción con la api anteriormente desarrollada [ApiConPrismaDB](https://github.com/andresGuevaraRojas/ApiConPrismaDB) se opto por desarrollar una aplicación web con VueJs.

El siguiente diagrama muestra el diseño general de la aplicación.

```mermaid
    flowchart
    App --> Router
    Router --> AddExplorer
    Router --> Explorer
    Router --> ExplorerList
    Router --> AddMissionCommander
    Router --> MissionCommander
    Router --> MissionCommanderList
    Explorer --> ExplorerService
    AddExplorer --> ExplorerService
    ExplorerList --> ExplorerService
    MissionCommander --> MissionCommanderService
    MissionCommanderList --> MissionCommanderService
    AddMissionCommander --> MissionCommanderService
    ExplorerService --> http-common
    MissionCommanderService --> http-common
    http-common --> Api
```


