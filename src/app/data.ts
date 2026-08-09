import { useLang } from "./i18n";

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  year: string;
  duration: string;
  team: number;
  type: string;
  engine: string;
  role: string;
  shortDescription: string;
  description: string[];
  image: string;
  video?: string;
  screenshots: string[];
  tools: string[];
  links: { label: string; url: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface ProfessionalProject {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  type: string;
  shortDescription: string;
  description: string[];
  image: string;
  screenshots: string[];
  tags: string[];
  links: { label: string; url: string }[];
}

// ── Projects — EN ─────────────────────────────────────────────────────────────
export const PROJECTS_EN: Project[] = [
  { // POLITIKITO
    slug: "politikito",
    title: "Politikito: La Carrera de Tiko",
    year: "2026",
    duration: "2 months",
    team: 7,
    type: "Simulator",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "A 2D point-and-click virtual pet game about political corruption, where players raise Tiko by developing his Charisma, Willpower, and Wisdom through interactive minigames.",
    description: [
      "Politikito: La Carrera de Tiko is a 2D point-and-click game inspired by virtual pet games, developed during the TELAR game development workshop around the theme of democracy and political corruption. The player takes care of Tiko, a young character from Madre de Dios with the potential to become a political leader, and helps him develop three core values: Charisma, Willpower, and Wisdom. These values are represented through a progression system where the player takes care of Tiko and participates in minigames related to each statistic, gradually shaping his development and advancing the story. The project went through three development iterations. The first was a one-week MVP focused on validating the core concept and establishing the main gameplay systems. The second iteration, developed over a month, introduced a redesign of the level structure and UI, expanded the progression system with milestones, added new interactive content, and implemented the game's ending. The final two-month iteration focused primarily on polishing the previous version, fixing issues, improving the presentation, and adding full English and Spanish localization.",     
      "As Lead Programmer, I was responsible for roughly 60% of the game's implementation, working collaboratively with another programmer on the remaining systems. My main responsibilities included the statistics and progression systems, achievements, milestones, player interaction, minigames, and localization. The three core statistics use a 0–100 point range and are divided into four progression levels. Each minigame awards a specific amount of points to its corresponding statistic, with predefined thresholds determining when a level is reached. Progression is intentionally synchronized: a statistic cannot continue advancing independently, and each progression stage requires Charisma, Willpower, and Wisdom to reach the same level. This progression directly drives the game's narrative and content. C# events are used to notify other systems whenever a statistic changes level, allowing the achievement system to react independently and display the corresponding achievement. When all three statistics reach the same level, the milestone system advances the story and unlocks additional content. Achievements are presented as post-it notes, while milestones take the form of newspapers that reflect Tiko's growth and the events taking place around him. Progression can also introduce new interactive objects into the room, connecting the player's development of Tiko with changes to the game world.",
      "The minigames were built around a shared architecture designed to keep their lifecycle and progression logic consistent while allowing each activity to have its own gameplay. I implemented an abstract base class that defines four main stages: Start, Update, Complete, and Cancel. Start initializes the minigame, its UI, and its configuration; Update handles the active gameplay and progress; Complete performs the necessary cleanup and communicates the resulting statistic points; and Cancel handles cleanup when the player exits without completing the activity. Each minigame implements its own behavior on top of this common lifecycle. In the watering minigame, the player moves around with a watering can while a raycast determines whether Tiko is underneath it, increasing the progress when the interaction is successful. The cookie minigame restricts the player's movement to the horizontal axis while Tiko moves from side to side, requiring the player to correctly time the cookie drop. The exercise minigame requires the player to give Tiko a dumbbell and then repeatedly press a button to increase a progress bar before it decreases again. Their difficulty is tied to Tiko's current progression level, dynamically modifying parameters such as movement speed, available time, and progress rates. This allows the same minigames to evolve alongside Tiko instead of becoming trivial after the first few progression stages.",
      "The interaction system was built around interfaces, colliders, and raycasts. Interactable objects implement a common interface while defining their own behavior, allowing different objects to respond to clicks, hover events, and other interactions without tightly coupling their implementations to the main interaction system. The mouse position is converted into a raycast against the scene, and when an interactable object is detected, the corresponding interaction callbacks are triggered. For communication between gameplay systems, I primarily used C# events and Actions, allowing systems such as statistics, achievements, and milestones to react to changes without directly depending on each other's implementations. UnityEvents were also used for interactions where configuring behavior directly through the Unity Inspector was more practical.",  
      "A particularly important technical challenge was integrating localization after much of the game had already been implemented. We used Unity Localization to centralize all text and localized assets, including UI elements, dialogue, labels, and text contained within images. Since the system is based on localization keys, existing systems had to be adapted to work with keys and localized values rather than hardcoded strings or assets. Although this required changes across previously implemented systems, it resulted in a considerably more maintainable solution: repeated text could be corrected from a single localization entry instead of being updated throughout the project. The project also uses ScriptableObjects as data-driven databases for achievements, milestones, and interactive objects. These definitions contain information such as the required level and statistic, localized names and descriptions, and Sprite Atlas identifiers. Instead of maintaining a separate prefab for every object unlocked during progression, a shared prefab is configured at runtime using the corresponding data and sprite from the atlas. This reduced the number of individual prefabs required while making the system easier to expand with new content.",
      "The overall architecture relies on system managers that communicate through events, with Singletons used where centralized access was appropriate. ScriptableObjects keep progression and content data separate from gameplay logic, while Tiko's behavior uses a lightweight state machine to manage his different actions inside the minigames. Animator Override Controllers allow the same animation setup to be reused across Tiko's progression levels rather than maintaining separate animation instances for each stage. I also implemented a Shader Graph effect to give Tiko's sprite the hand-drawn, doodle-like visual treatment used throughout the game. These systems allowed the project to evolve substantially across its three development phases while keeping its gameplay logic, content, and progression systems reasonably modular and maintainable."
    ],
    image: "/projects/personal/politikito/Cover.png",
    screenshots: [
      "/projects/personal/politikito/Politikito_SS_1.PNG",
      "/projects/personal/politikito/Politikito_SS_2.PNG",
      "/projects/personal/politikito/Politikito_SS_3.png",
      "/projects/personal/politikito/Politikito_SS_4.png",
      "/projects/personal/politikito/Politikito_SS_5.png",
      "/projects/personal/politikito/Politikito_SS_6.png",
      "/projects/personal/politikito/Politikito_SS_7.png",
      "/projects/personal/politikito/Politikito_SS_8.png",
      "/projects/personal/politikito/Politikito_SS_9.png",
    ],
    tools: [
      "Unity",
      "C#",
      "Unity Localization",
      "FMOD",
      "Shader Graph",
      "ScriptableObjects",
      "Sprite Atlas",
    ],
    links: [
      {
        label: "itch.io",
        url: "https://adrivil.itch.io/politikito-la-carrera-de-tiko"
      }
    ],
  },
  { // LDIH
    slug: "ldih",
    title: "Like Dios Ignora Humanos",
    year: "2026",
    duration: "2 months",
    team: 9,
    type: "Adventure",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "A 2D top-down narrative adventure following Fia, a military cat in a world ruled by divine felines, where her choices shape her path and the fate of those around her.",
    description: [
      "Like Dios Ignora Humanos is a 2D top-down adventure set in a fictional universe where cats rule over both divine and non-divine entities. Despite their seemingly absolute power, their domains are plagued by self-destruction and existential crises, forcing them to confront problems that cannot simply be solved through their status as gods.",
      "The demo follows Fia de Mininos, a military cat whose mission introduces her to a world where the decisions she makes can affect her own fate and that of those around her. The experience combines exploration, character interactions, dialogue, and player choices to present the game's narrative direction and the foundations of a larger story.",
      "I worked as Lead Programmer within a team of three programmers, taking responsibility for most of the project's core systems while coordinating their implementation with the rest of the programming team. My main responsibilities included the character system, dialogue system, interaction, cinematic sequences, progression and flags, audio and music management, scene transitions, as well as the complete implementation of the tutorial and roughly half of the rooms in the first chapter. The remaining rooms and smaller systems were implemented by the other programmers.",
      "The character architecture was built around an abstract Agent class containing shared modules such as movement, animation, and interaction. Player and NPC classes could then extend this foundation with their own behavior. This same approach was used for the state machine, with abstract states providing a common structure and concrete implementations defining behaviors specific to the player or NPC. This allowed shared functionality to remain centralized while keeping character-specific behavior separated and easier to extend.",
      "The input system was built using Unity's New Input System and separated into different action maps for gameplay, UI, and dialogue. Instead of handling different contexts through large conditional structures, an Input Manager exposed the relevant input events while only enabling the action map required by the current context. Other systems could subscribe to these events without needing to know how the input itself was configured.",
      "Interaction was implemented through raycasts and an IInteractable interface. When the player targeted an object or NPC, the system checked whether the collider belonged to an interactable entity and then invoked the functionality provided by its concrete implementation. This allowed different objects to expose completely different behaviors while remaining compatible with the same interaction system.", "The dialogue system was designed around DialogueData ScriptableObjects containing the lines of a conversation and their associated data, including character portraits, names, choices, and events. It supported two presentation modes: a simpler RPG-style dialogue box and a larger format using a half-body character portrait and a contextual background. The system also included a typewriter effect with animated portraits that alternated between sprites while a character was speaking. Character voices used short audio samples with pitch variation to create a lightweight gibberish-style voice effect, inspired by games such as Animal Crossing.",
      "As the narrative grew, branching dialogue became one of the system's main maintenance challenges. Because dialogue data was stored independently from scenes, I implemented an event ID system that allowed a dialogue choice to trigger an identifier. Scene objects containing a DialogueEventListener could listen for that identifier and execute their configured events. This kept the dialogue data decoupled from scene-specific logic while still allowing conversations to modify the game world and progression.",
      "For cinematics and scripted sequences, I created a lightweight action-based system built around sequential coroutines. Instead of relying on Unity's cinematic tools, actions represented predefined behaviors such as waiting, moving characters, shaking the camera, or executing callbacks. A generic Callback Action was also included for one-off behaviors that did not justify creating a dedicated action class. This approach made the sequences quick to iterate on during development and allowed references to scene objects to be changed without rebuilding the entire sequence.",
      "Progression was handled through a lightweight flag system rather than a save system, since the project was a short thesis prototype. A static data structure maintained a HashSet of string identifiers for each level, allowing systems to quickly determine whether specific events had already occurred. These flags were used to track decisions and progression states, such as which path the player had taken or whether a character interaction had already happened.",
      "The project also included a dedicated Music Manager implemented as a singleton. Music tracks were represented through ScriptableObjects containing the clip and fade settings, while the manager provided separate methods for immediate and faded transitions when starting or stopping music. Scene transitions supported both direct loading and a preload workflow, allowing the next scene to be loaded in advance when possible and activated after the player left the current room. Both approaches were combined with UI fades to hide scene changes and maintain a continuous experience.",
      "The project was developed as a focused thesis prototype rather than a complete production release. Its main value for me was the opportunity to design and implement several interconnected systems from the ground up while leading the programming side of a multidisciplinary project. It strengthened my experience with software architecture, event-driven communication, reusable gameplay systems, narrative tools, and the practical trade-offs involved when building systems under a limited development schedule." ],
    image: "/projects/personal/ldih/Cover.png",
    screenshots: 
    [
      "/projects/personal/ldih/LDIH_SS_1.png",
      "/projects/personal/ldih/LDIH_SS_2.png",
      "/projects/personal/ldih/LDIH_SS_3.png",
      "/projects/personal/ldih/LDIH_SS_4.png",
      "/projects/personal/ldih/LDIH_SS_5.png",
      "/projects/personal/ldih/LDIH_SS_6.png",
    ],
    tools: [
      "Unity",
      "C#",
      "New Input System",
      "ScriptableObjects",
      "State Machines",
      "Event-Driven Systems",
    ],
    links: [
      {
        label: "itch.io",
        url: "https://crubcruba.itch.io/like-dios-ignora-humanos",
      },
    ],
  },
  { // CRAZY RAPPI
    slug: "crazy-rappi",
    title: "Crazy Rappi",
    year: "2024",
    duration: "1 month",
    team: 5,
    type: "Racing",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "A 3D arcade delivery game inspired by Crazy Taxi, set in Lima, Peru, where players race through the city to complete deliveries before time runs out.",
    description: [
      "Crazy Rappi is a 3D arcade delivery game inspired by Crazy Taxi and adapted to the streets and landmarks of Lima, Peru. The player works as a delivery driver, accepting orders, picking them up from different locations, and delivering them as quickly as possible. Deliveries reward the player with money based on the distance traveled, which can then be used to unlock new vehicles. The game was developed as a prototype for a five-person team project during the Video Game Programming course at Universidad de Lima.",
      "As Lead Programmer, I was responsible for several of the game's core systems. I implemented the arcade-style vehicle controller for the player's bicycle, the delivery system, the level time limit, level-specific shortcuts, and the game's data persistence. I also implemented the functionality behind the main menus, vehicle selection and purchasing, level selection, HUD, and pause menu. The progression system connected these elements together by tracking completed deliveries and accumulated money, using them to unlock new levels and vehicles with different characteristics.",   
      "The game also incorporated external traffic and pedestrian systems to populate the city with autonomous vehicles and pedestrians. Rather than developing these systems from scratch, we integrated and adapted them to our environments, configuring their navigation around the roads and sidewalks of each level. The project included several Lima-inspired environments, with San Isidro serving as the playable level in the final prototype, while Miraflores and Cercado de Lima were part of the broader design."
    ],
    image: "/projects/personal/crazy-rappi/Cover.png",
    screenshots:
    [
      "/projects/personal/crazy-rappi/CrazyRappi_SS_1.png",
      "/projects/personal/crazy-rappi/CrazyRappi_SS_2.png"
    ],
    tools: [
      "Unity",
      "C#",
      "Unity Traffic Simulation",
      "Pedestrian System"
    ],
    links: [
      {
        label: "itch.io",
        url: "https://godargos.itch.io/crazy-rappi"
      },
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/crazy-rappi"
      }
    ],
  },
  { // AR
    slug: "ar-unity-workshop",
    title: "AR Unity - Workshop Minigame",
    year: "2024",
    duration: "1 week",
    team: 1,
    type: "AR",
    engine: "Unity",
    role: "Solo Developer",
    shortDescription:
      "A mobile AR minigame where the player controls a character projected into the real world and destroys virtual pots to increase their score.",
    description: [
      "This project is a small augmented reality minigame for Android devices, developed independently in approximately one week as part of an AR workshop I taught. The player controls a virtual character projected onto the real world and moves through the detected environment while destroying virtual pots to increase their score. The project was intentionally kept simple to make the technology itself the focus of the experience and to ensure that the prototype could be completed and used effectively during the workshop.",
      "I developed the project entirely on my own and was responsible for the gameplay, AR implementation, mobile build, and interaction systems. This was my first project using Unity's AR tools and my first experience developing a game specifically for mobile devices. One of the main technical challenges was configuring the AR environment so that the player could be correctly placed in the detected space and defining the playable area for the character. The project also required adapting the gameplay to spatial movement and interactions within the real-world environment rather than a conventional game scene.",
      "Testing the project was also an important part of the development process. Although Unity provides an AR simulation environment, I found it less intuitive for testing the complete experience, so I frequently deployed Android builds directly to my phone to verify changes and iterate on the implementation. This project gave me practical experience working with AR spatial tracking, mobile deployment, and the constraints involved in developing and testing interactive experiences that depend on the physical environment."
    ],
    image: "/projects/personal/ar-unity-workshop/AR_2.jpeg",
    screenshots: [
      "/projects/personal/ar-unity-workshop/AR_1.jpeg",
    ],
    tools: [
      "Unity",
      "C#",
      "Unity AR",
      "Android"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/ar-unity-taller-minijuego"
      }
    ],
  },
  { // PAWS
    slug: "paws",
    title: "Paws",
    year: "2023",
    duration: "1 month",
    team: 6,
    type: "Platformer",
    engine: "Unity",
    role: "Programmer",
    shortDescription:
      "A narrative-driven 2.5D adventure where a plush cat explores a mysterious house to reunite with its owner.",
    description: [
      "Paws is a narrative-driven 2.5D adventure developed for a Game Design course at Universidad de Lima. The player controls Paws, a plush cat separated from its owner, and must explore a mysterious house, solve environmental puzzles, collect keys, and uncover memories hidden throughout the rooms. The project was inspired by games such as Little Nightmares, while using a 2D character and visual style within a 3D environment.",
      "I was the sole programmer on the project, responsible for implementing the game's gameplay systems, player controller, interactions, puzzles, camera, and other technical aspects required to connect the different parts of the game. One of the main technical challenges was creating the 2.5D presentation, particularly balancing the 3D physics and collision environment with a character and visual elements designed in 2D. This was also my first significant project working with 3D in Unity, making the interaction between the two dimensions an important technical learning experience.",
      "One of the more challenging mechanics was Paws' climbing system. When the player jumps, a small collider is positioned around the potential grab point. If it detects a climbable surface, the character is moved to the corresponding edge with an offset and an animation is played to create the appearance of climbing over it. Making this work reliably with the game's 3D collision environment while maintaining the intended 2D presentation required considerable iteration.",
      "The camera system presented another technical challenge. Rather than simply following the player along a fixed horizontal path, the house was composed of connected rooms that could extend in different directions. When Paws moved into a room connected at an angle, the camera had to smoothly rotate by 45 degrees and travel along the new path to frame the next area. This resulted in a camera system that behaved somewhat like a trolley moving between connected tracks while maintaining the game's intended composition.",
      "The project also taught me an important lesson about character collision and level design. Initially, I used a box collider for Paws without accounting for how its shape would interact with some of the environment's more unusual obstacles, particularly low swinging doors designed to allow a pet to pass underneath. In some situations, the character could become stuck or lack enough force to move through them correctly. After presenting the game to the public, more experienced developers suggested using a capsule collider to make the character's movement through these shapes more reliable. Another proposed solution was to use controlled door transitions that hide the actual movement behind a short cinematic, creating the perception that the character is physically passing through the door while giving the developer more control over the transition. This was a valuable lesson in considering collision shapes not only from a physics perspective, but also as part of the game's visual design and player experience.",
      "The project also included environmental interactions, key-based progression, collectible stars, tutorials, and narrative sequences. Collecting stars allowed players to uncover additional memories, while exploration and player actions could lead to different narrative outcomes. Paws was completed as an academic prototype and later received first place in the Entertainment — Level 1 category of the 2023 Communication Innovation Contest at Universidad de Lima. The project represented an important step in my development as a Unity programmer, particularly in working with 3D environments, 2.5D presentation, camera systems, character interaction, and physics-based problems."
    ],
    image: "/projects/personal/paws/Cover.png",
    screenshots:
    [
      "/projects/personal/paws/Paws_SS_1.png",
      "/projects/personal/paws/Paws_SS_2.png",
      "/projects/personal/paws/Paws_SS_3.png",
      "/projects/personal/paws/Paws_SS_4.png",
    ],
    tools: [
      "Unity",
      "C#",
      "3D Physics",
      "2.5D"
    ],
    links: [
      {
        label: "itch.io",
        url: "https://godargos.itch.io/paws"
      },
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/paws-unity"
      }
    ],
  },
  { // CALL FROM THE ICE
    slug: "cfti",
    title: "Call From The Ice",
    year: "2021",
    duration: "1 week",
    team: 3,
    type: "Adventure",
    engine: "Unity",
    role: "Programmer & Level Designer",
    shortDescription:
      "A short 2D top-down pixel art adventure developed for the ACM Winter Game Jam 2021, where a husband must rescue his kidnapped wife from a giant spider in a snowy forest.",
    description: [
      "Call from the Ice was my first game and my first game jam project, developed by a three-person team in one week for the ACM Winter Game Jam 2021 under the theme Snowy Chaos. It is a short 2D top-down pixel art adventure where the player explores a snowy forest and cave, using a shotgun to fight a giant spider and destroy environmental obstacles.",
      "I was mainly responsible for the player's programming, including movement, animations, and shooting, as well as contributing to the level design. Given our limited experience with Unity and the one-week deadline, the project focused on implementing a small and complete gameplay loop rather than complex systems.",
      "The project was also my first experience working collaboratively on a game. At the time, we did not know how to use version control, so we shared the Unity project through Google Drive and manually coordinated our changes. This became an early lesson in the importance of version control and collaborative development workflows."
    ],
    image: "/projects/personal/cfti/Cover.png",
    screenshots: [
      "/projects/personal/cfti/CFTI_SS_1.png",
      "/projects/personal/cfti/CFTI_SS_2.png",
      "/projects/personal/cfti/CFTI_SS_3.png",
    ],
    tools: ["Unity", "C#"],
    links: [
      { label: "itch.io", url: "https://godargos.itch.io/call-from-the-ice" },
    ],
  },
];

// ── Projects — ES ─────────────────────────────────────────────────────────────
export const PROJECTS_ES: Project[] = [
  { // POLITIKITO
    slug: "politikito",
    title: "Politikito: La Carrera de Tiko",
    year: "2026",
    duration: "2 meses",
    team: 7,
    type: "Simulador",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "Videojuego 2D point-and-click inspirado en una mascota virtual, donde el jugador acompaña a Tiko en su formación desarrollando su Carisma, Voluntad y Sabiduría mediante minijuegos.",
    description: [
      "Politikito: La Carrera de Tiko es un videojuego 2D point-and-click inspirado en las mascotas virtuales, desarrollado durante el workshop de creación de videojuegos TELAR alrededor de la temática de democracia y corrupción política. El jugador debe cuidar a Tiko, un joven nacido en Madre de Dios con potencial para convertirse en un líder político, y ayudarlo a desarrollar tres valores principales: Carisma, Voluntad y Sabiduría. Estos valores se representan mediante un sistema de progresión en el que el jugador cuida a Tiko y participa en minijuegos relacionados con cada estadística, determinando progresivamente su desarrollo y el avance de la historia. El proyecto pasó por tres versiones durante su desarrollo. La primera fue un MVP desarrollado en una semana, enfocado en validar el concepto principal y establecer los sistemas fundamentales del juego. La segunda versión, desarrollada durante un mes, introdujo un rediseño de la estructura de niveles y la interfaz, amplió el sistema de progresión mediante hitos, añadió nuevo contenido interactivo e implementó el final del juego. La última versión se desarrolló durante dos meses y estuvo enfocada principalmente en pulir la versión anterior, corregir problemas, mejorar la presentación y añadir localización completa al español e inglés.",
      
      "Como Lead Programmer, fui responsable de aproximadamente el 60% de la implementación del juego, trabajando de manera colaborativa con otra programadora en el desarrollo de los sistemas restantes. Mis principales responsabilidades fueron los sistemas de estadísticas y progresión, logros, hitos, interacción, minijuegos y localización. Las tres estadísticas utilizan un rango de 0 a 100 puntos y se dividen en cuatro niveles de progresión. Cada minijuego otorga una cantidad determinada de puntos a su estadística correspondiente, con umbrales definidos que determinan cuándo se alcanza un nuevo nivel. La progresión está intencionalmente sincronizada: una estadística no puede continuar avanzando de manera independiente, sino que cada etapa requiere que Carisma, Voluntad y Sabiduría alcancen el mismo nivel. Esta progresión controla directamente el avance narrativo y el desbloqueo de contenido. Mediante eventos de C#, los sistemas reciben notificaciones cada vez que una estadística cambia de nivel, permitiendo que el sistema de logros reaccione de manera independiente y muestre el logro correspondiente. Cuando las tres estadísticas alcanzan el mismo nivel, el sistema de hitos avanza la historia y desbloquea nuevo contenido. Los logros se presentan como post-its, mientras que los hitos toman la forma de periódicos que reflejan el crecimiento de Tiko y los acontecimientos que ocurren a su alrededor. La progresión también puede añadir nuevos objetos interactuables a la habitación, conectando directamente el desarrollo de Tiko con cambios en el mundo del juego.",
      
      "Los minijuegos fueron construidos alrededor de una arquitectura compartida diseñada para mantener consistente su ciclo de vida y su lógica de progresión, permitiendo al mismo tiempo que cada actividad tuviera su propia jugabilidad. Implementé una clase base abstracta que define cuatro etapas principales: Start, Update, Complete y Cancel. Start inicializa el minijuego, su UI y su configuración; Update controla el gameplay activo y el progreso; Complete realiza la limpieza necesaria y comunica al sistema de estadísticas los puntos obtenidos; y Cancel se encarga de limpiar el estado cuando el jugador abandona la actividad sin completarla. Cada minijuego implementa entonces su propio comportamiento sobre este ciclo de vida común. En el minijuego de regar, el jugador se desplaza con una regadera mientras un raycast determina si Tiko se encuentra debajo, aumentando el progreso cuando la interacción es correcta. El minijuego de la galleta restringe el movimiento del jugador al eje horizontal mientras Tiko se desplaza de un lado a otro, haciendo necesario calcular correctamente el momento para soltar la galleta. En el minijuego de ejercicio, el jugador debe entregarle una mancuerna a Tiko y posteriormente presionar repetidamente un botón para aumentar una barra de progreso antes de que vuelva a disminuir. La dificultad de estos minijuegos está vinculada al nivel actual de Tiko, modificando dinámicamente parámetros como la velocidad de movimiento, el tiempo disponible y la velocidad de progreso. De esta manera, los mismos minijuegos pueden evolucionar junto con Tiko en lugar de volverse triviales después de los primeros niveles.",
      
      "El sistema de interacción fue construido utilizando interfaces, colliders y raycasts. Los objetos interactuables implementan una interfaz común mientras definen su propio comportamiento, permitiendo que diferentes objetos respondan a clicks, eventos de hover y otras interacciones sin acoplar directamente sus implementaciones al sistema principal de interacción. La posición del mouse se convierte en un raycast contra la escena y, cuando se detecta un objeto interactuable, se ejecutan los callbacks correspondientes. Para la comunicación entre los diferentes sistemas de gameplay utilicé principalmente eventos y Actions de C#, permitiendo que sistemas como estadísticas, logros e hitos reaccionen a cambios sin depender directamente de las implementaciones de los demás. También utilicé UnityEvents en aquellas interacciones donde resultaba más práctico configurar el comportamiento directamente desde el Inspector de Unity.",
      
      "Uno de los principales desafíos técnicos fue integrar la localización cuando una parte importante del juego ya había sido implementada. Utilizamos Unity Localization para centralizar todos los textos y assets localizados, incluyendo elementos de UI, diálogos, etiquetas y textos incluidos dentro de imágenes. Debido a que el sistema funciona mediante claves de localización, fue necesario adaptar sistemas existentes para trabajar con estas claves y valores localizados en lugar de utilizar strings o assets escritos directamente en el código. Aunque esto requirió realizar cambios en sistemas que ya estaban implementados, terminó proporcionando una solución considerablemente más mantenible: un texto repetido podía corregirse desde una única entrada de localización en lugar de tener que actualizarlo en múltiples lugares del proyecto. El proyecto también utiliza ScriptableObjects como bases de datos orientadas a datos para los logros, hitos y objetos interactuables. Estas definiciones contienen información como el nivel y estadística requeridos, nombres y descripciones localizadas e identificadores de sprites dentro del Sprite Atlas. En lugar de mantener un prefab diferente para cada objeto que se desbloquea durante la progresión, un prefab compartido se configura en tiempo de ejecución utilizando los datos correspondientes y el sprite del atlas. Esto redujo la cantidad de prefabs individuales necesarios y facilitó la incorporación de nuevo contenido.",
      
      "La arquitectura general utiliza distintos managers de sistemas que se comunican mediante eventos, utilizando Singletons cuando era necesario disponer de acceso centralizado. Los ScriptableObjects mantienen separados los datos de progresión y contenido de la lógica de gameplay, mientras que el comportamiento de Tiko utiliza una máquina de estados sencilla para gestionar sus diferentes acciones dentro de los minijuegos. Los Animator Override Controllers permiten reutilizar el mismo sistema de animaciones a través de los diferentes niveles de progresión de Tiko, evitando mantener instancias de animaciones independientes para cada etapa. También implementé un efecto mediante Shader Graph para darle al sprite de Tiko el estilo visual dibujado a mano y tipo doodle utilizado en el juego. En conjunto, estos sistemas permitieron que el proyecto evolucionara considerablemente a lo largo de sus tres etapas de desarrollo, manteniendo su lógica de gameplay, contenido y progresión de una forma modular y relativamente fácil de mantener."
    ],
    image: "/projects/personal/politikito/Cover.png",
    screenshots: [
      "/projects/personal/politikito/Politikito_SS_1.PNG",
      "/projects/personal/politikito/Politikito_SS_2.PNG",
      "/projects/personal/politikito/Politikito_SS_3.png",
      "/projects/personal/politikito/Politikito_SS_4.png",
      "/projects/personal/politikito/Politikito_SS_5.png",
      "/projects/personal/politikito/Politikito_SS_6.png",
      "/projects/personal/politikito/Politikito_SS_7.png",
      "/projects/personal/politikito/Politikito_SS_8.png",
      "/projects/personal/politikito/Politikito_SS_9.png",
    ],
    tools: [
      "Unity",
      "C#",
      "Unity Localization",
      "FMOD",
      "Shader Graph",
      "ScriptableObjects",
      "Sprite Atlas",
    ],
    links: [
      {
        label: "itch.io",
        url: "https://adrivil.itch.io/politikito-la-carrera-de-tiko"
      }
    ],
  },
  { // LDIH
    slug: "ldih",
    title: "Like Dios Ignora Humanos",
    year: "2026",
    duration: "2 meses",
    team: 9,
    type: "Aventura",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "Una aventura narrativa 2D top-down que sigue a Fia, una gata militar en un mundo gobernado por felinos divinos, donde sus decisiones determinan su camino y el destino de quienes la rodean.",
    description: [
      "Like Dios Ignora Humanos es una aventura 2D top-down ambientada en un universo ficticio donde los gatos gobiernan sobre entidades tanto divinas como no divinas. A pesar de su aparente poder absoluto, sus dominios se encuentran afectados por la autodestrucción y las crisis existenciales, obligándolos a enfrentarse a problemas que no pueden resolverse simplemente por su condición de seres divinos.",
      "La demo sigue a Fia de Mininos, una gata militar cuya misión la introduce en un mundo donde las decisiones que toma pueden afectar tanto su propio destino como el de quienes la rodean. La experiencia combina exploración, interacción con personajes, diálogos y decisiones del jugador para presentar la dirección narrativa del juego y las bases de una historia de mayor escala.",
      "Trabajé como Lead Programmer dentro de un equipo de tres programadores, encargándome de la mayor parte de los sistemas principales del proyecto y coordinando su implementación con el resto del equipo de programación. Mis principales responsabilidades fueron el sistema de personajes, diálogos, interacción, secuencias y cinemáticas, progresión mediante flags, gestión de audio y música y transiciones entre escenas. También implementé completamente el tutorial y aproximadamente la mitad de las habitaciones del primer nivel. El resto de las habitaciones y sistemas menores fueron desarrollados por los otros dos programadores.",
      "La arquitectura de personajes se construyó alrededor de una clase abstracta Agent que contenía módulos compartidos como movimiento, animación e interacción. A partir de esta base se implementaron clases concretas para el jugador y los NPC, permitiendo extender o modificar su comportamiento sin duplicar la funcionalidad común. Se siguió un enfoque similar para la máquina de estados, utilizando estados abstractos como base y posteriormente implementaciones específicas para comportamientos del jugador o de los NPC.",
      "El sistema de inputs se desarrolló utilizando el New Input System de Unity y se dividió en diferentes Action Maps para gameplay, UI y diálogos. En lugar de controlar los diferentes contextos mediante grandes cantidades de condicionales, se utilizó un Input Manager encargado de exponer eventos para los distintos inputs y activar únicamente el mapa correspondiente al contexto actual. De esta forma, los demás sistemas podían suscribirse a los eventos que necesitaban sin depender directamente de la configuración de los controles.",
      "El sistema de interacción se implementó mediante raycasts y una interfaz IInteractable. Cuando el jugador apuntaba hacia un objeto o NPC, el sistema comprobaba si el collider pertenecía a una entidad interactuable y ejecutaba la funcionalidad proporcionada por su implementación concreta. Esto permitía que distintos objetos tuvieran comportamientos completamente diferentes manteniendo una misma estructura de interacción.",
      "El sistema de diálogos se construyó utilizando ScriptableObjects DialogueData que almacenaban las líneas de cada conversación junto con información como retratos, nombres de personajes, decisiones y eventos. Se implementaron dos formatos de diálogo: uno sencillo, inspirado en RPGs como Undertale, y otro de mayor tamaño que incorporaba un retrato de medio cuerpo y un fondo específico. También implementé un efecto de typewriter acompañado de una pequeña animación del retrato, alternando sprites mientras el personaje hablaba. Las voces utilizaban muestras de audio muy cortas con variaciones de pitch para generar un efecto de voz gibberish similar al utilizado en juegos como Animal Crossing.",
      "A medida que la historia creció, las conversaciones ramificadas se convirtieron en uno de los principales retos de mantenimiento del sistema. Debido a que los datos de diálogo estaban desacoplados de las escenas, implementé un sistema basado en Event IDs que permitía que una decisión dentro de un diálogo disparara un identificador. Los objetos de la escena que contaban con un DialogueEventListener podían escuchar ese identificador y ejecutar los eventos configurados en ellos. Esto permitió mantener los diálogos separados de la lógica específica de cada escena sin perder la capacidad de modificar el estado del mundo mediante las conversaciones.",
      "Para las cinemáticas y secuencias guionizadas desarrollé un sistema ligero basado en acciones ejecutadas secuencialmente mediante coroutines. En lugar de utilizar las herramientas de cinemáticas de Unity, cada Action representaba un comportamiento concreto, como esperar un tiempo, mover al jugador o a un NPC, hacer un shake de cámara o ejecutar un callback. También se creó un Callback Action para comportamientos puntuales que no justificaban crear una clase específica. Este enfoque permitió iterar rápidamente sobre las secuencias y cambiar referencias de objetos sin tener que reconstruir toda la cinemática.", 
      "La progresión se manejó mediante un sistema ligero de flags en lugar de implementar un sistema de guardado, debido a que el proyecto era un prototipo de tesis de corta duración. Una estructura estática mantenía un HashSet de identificadores string para cada nivel, permitiendo comprobar rápidamente si determinados eventos ya habían ocurrido. Estos flags se utilizaban para registrar decisiones y estados de progresión, como la ruta elegida por el jugador o si ya había interactuado con determinado personaje.", 
      "El proyecto también contaba con un Music Manager implementado como singleton. Cada música se representaba mediante un ScriptableObject que almacenaba el clip y la configuración de fade, mientras que el manager permitía iniciar y detener pistas tanto de manera inmediata como mediante transiciones progresivas. Las transiciones entre escenas soportaban dos métodos: carga directa y precarga. Cuando era posible, la siguiente escena se cargaba previamente y se activaba cuando el jugador abandonaba la habitación actual. Cuando no era conveniente realizar una precarga, se utilizaba la carga directa. Ambos métodos se combinaban con transiciones de UI para ocultar el cambio de escena y mantener una experiencia continua.",
      "El proyecto fue desarrollado como un prototipo de tesis enfocado en demostrar la dirección de una experiencia de mayor escala, en lugar de buscar una producción completa. Para mí, representó una oportunidad importante para diseñar e implementar múltiples sistemas interconectados desde cero mientras lideraba el apartado de programación de un equipo multidisciplinario. La experiencia fortaleció especialmente mi conocimiento en arquitectura de software, comunicación mediante eventos, sistemas reutilizables de gameplay, herramientas narrativas y los compromisos necesarios al desarrollar sistemas técnicos bajo restricciones de tiempo.",
    ],
    image: "/projects/personal/ldih/Cover.png",
    screenshots: 
    [
      "/projects/personal/ldih/LDIH_SS_1.png",
      "/projects/personal/ldih/LDIH_SS_2.png",
      "/projects/personal/ldih/LDIH_SS_3.png",
      "/projects/personal/ldih/LDIH_SS_4.png",
      "/projects/personal/ldih/LDIH_SS_5.png",
      "/projects/personal/ldih/LDIH_SS_6.png",
    ],
    tools: [
      "Unity",
      "C#",
      "New Input System",
      "ScriptableObjects",
      "State Machines",
      "Event-Driven Systems",
    ],
    links: [
      {
        label: "itch.io",
        url: "https://crubcruba.itch.io/like-dios-ignora-humanos",
      },
    ],
  },
  { // CRAZY RAPPI
    slug: "crazy-rappi",
    title: "Crazy Rappi",
    year: "2024",
    duration: "1 mes",
    team: 5,
    type: "Racing",
    engine: "Unity",
    role: "Lead Programmer",
    shortDescription:
      "Un juego de entregas arcade en 3D inspirado en Crazy Taxi, ambientado en Lima, Perú, donde el jugador debe recorrer la ciudad y completar pedidos antes de que se acabe el tiempo.",
    description: [
      "Crazy Rappi es un juego de entregas arcade en 3D inspirado en Crazy Taxi y adaptado a las calles y lugares representativos de Lima, Perú. El jugador toma el papel de un repartidor que recibe pedidos, debe recogerlos en distintos puntos y entregarlos lo más rápido posible. Cada entrega otorga dinero de acuerdo con la distancia recorrida, que posteriormente puede utilizarse para desbloquear nuevos vehículos. El juego fue desarrollado como un prototipo colaborativo de cinco integrantes para el curso de Programación de Videojuegos de la Universidad de Lima.",
      "Como Lead Programmer, me encargué de varios de los sistemas principales del juego. Implementé el controlador de movimiento arcade del vehículo del jugador, una bicicleta, además del sistema de entregas, el límite de tiempo de los niveles, los atajos específicos de cada nivel y la persistencia de datos. También desarrollé la funcionalidad de los menús principales, la selección y compra de vehículos, la selección de niveles, el HUD y el menú de pausa. El sistema de progresión conectaba estos elementos mediante el seguimiento del dinero acumulado y las entregas completadas, utilizándolos para desbloquear nuevos niveles y vehículos con diferentes características.", 
      "El juego también incorporó sistemas externos de tráfico y peatones para poblar la ciudad con vehículos y transeúntes autónomos. En lugar de desarrollar estos sistemas desde cero, los integramos y adaptamos a nuestros escenarios, configurando su navegación de acuerdo con las pistas y veredas de cada nivel. El proyecto contemplaba distintos escenarios inspirados en Lima, incluyendo San Isidro, Miraflores y el Cercado de Lima, aunque San Isidro fue el único nivel completamente jugable en la versión final del prototipo."
    ],
    image: "/projects/personal/crazy-rappi/Cover.png",
    screenshots:
    [
      "/projects/personal/crazy-rappi/CrazyRappi_SS_1.png",
      "/projects/personal/crazy-rappi/CrazyRappi_SS_2.png"
    ],
    tools: [
      "Unity",
      "C#",
      "Unity Traffic Simulation",
      "Pedestrian System"
    ],
    links: [
      {
        label: "itch.io",
        url: "https://godargos.itch.io/crazy-rappi"
      },
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/crazy-rappi"
      }
    ],
  },
  { // AR
    slug: "ar-unity-workshop",
    title: "AR Unity - Minijuego de Taller",
    year: "2024",
    duration: "1 semana",
    team: 1,
    type: "Realidad Aumentada",
    engine: "Unity",
    role: "Desarrollador Individual",
    shortDescription:
      "Un minijuego de realidad aumentada para dispositivos móviles donde el jugador controla un personaje proyectado sobre el mundo real y destruye vasijas para aumentar su puntaje.",
    description: [
      "Este proyecto es un pequeño minijuego de realidad aumentada para dispositivos Android, desarrollado individualmente en aproximadamente una semana como parte de un taller de AR que dicté. El jugador controla un personaje virtual proyectado sobre el mundo real y se desplaza por el entorno detectado mientras destruye vasijas virtuales para aumentar su puntaje. El proyecto se mantuvo intencionalmente simple para que la tecnología fuera el foco principal de la experiencia y para asegurar que el prototipo pudiera completarse y utilizarse correctamente durante el taller.",
      "Desarrollé el proyecto completamente por mi cuenta y me encargué del gameplay, la implementación de realidad aumentada, la compilación para dispositivos móviles y los sistemas de interacción. Fue mi primer proyecto utilizando las herramientas de AR de Unity y también mi primera experiencia desarrollando un videojuego específicamente para dispositivos móviles. Uno de los principales retos técnicos fue configurar correctamente el entorno AR para poder posicionar al jugador dentro del espacio detectado y definir el área jugable para el personaje. El proyecto también requirió adaptar el gameplay al movimiento y las interacciones dentro del espacio físico real en lugar de trabajar sobre una escena convencional.",
      "Las pruebas también fueron una parte importante del desarrollo. Aunque Unity incluye un simulador de AR para facilitar las pruebas, me resultaba poco intuitivo para comprobar la experiencia completa, por lo que frecuentemente realizaba builds directamente en mi celular para verificar los cambios e iterar sobre la implementación. El proyecto me permitió adquirir experiencia práctica trabajando con detección espacial en AR, despliegue móvil y las limitaciones propias de desarrollar y probar experiencias interactivas que dependen del entorno físico."
    ],
    image: "/projects/personal/ar-unity-workshop/AR_2.jpeg",
    screenshots: [
      "/projects/personal/ar-unity-workshop/AR_1.jpeg",
    ],
    tools: [
      "Unity",
      "C#",
      "Unity AR",
      "Android"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/ar-unity-taller-minijuego"
      }
    ],
  },
  { // PAWS
    slug: "paws",
    title: "Paws",
    year: "2023",
    duration: "1 mes",
    team: 6,
    type: "Plataformas",
    engine: "Unity",
    role: "Programador",
    shortDescription:
      "Una aventura narrativa 2.5D donde un gato de peluche explora una casa misteriosa para reencontrarse con su dueña.",
    description: [
      "Paws es una aventura narrativa 2.5D desarrollada para un curso de Diseño de Videojuegos en la Universidad de Lima. El jugador controla a Paws, un gato de peluche separado de su dueña, y debe explorar una casa misteriosa, resolver puzzles ambientales, recolectar llaves y descubrir recuerdos ocultos a través de las distintas habitaciones. El proyecto tomó inspiración de juegos como Little Nightmares, utilizando un personaje y elementos visuales en 2D dentro de un entorno tridimensional.",
      "Fui el único programador del proyecto, por lo que me encargué de implementar los sistemas de gameplay, el controlador del jugador, las interacciones, puzzles, cámara y otros aspectos técnicos necesarios para conectar las distintas partes del juego. Uno de los principales retos técnicos fue construir la presentación 2.5D, especialmente encontrar un equilibrio entre las físicas y colisiones del entorno 3D y un personaje y elementos visuales diseñados en 2D. También fue mi primer proyecto significativo trabajando con 3D en Unity, por lo que la interacción entre ambas dimensiones representó una parte importante de mi aprendizaje técnico.",
      "Una de las mecánicas que más trabajo requirió fue el sistema para escalar de Paws. Al saltar, el jugador genera un pequeño collider alrededor del punto donde podría agarrarse. Si este detecta una superficie escalable, el personaje es trasladado hasta el borde correspondiente con un offset y se reproduce una animación para simular que está trepando. Conseguir que esto funcionara de manera consistente con las colisiones 3D del escenario, manteniendo al mismo tiempo la apariencia 2D del personaje, requirió bastante iteración.",
      "El sistema de cámara también presentó un reto importante. En lugar de limitarse a seguir al jugador horizontalmente, la casa estaba formada por habitaciones conectadas que podían extenderse en distintas direcciones. Cuando Paws entraba a una habitación conectada en otro ángulo, la cámara debía rotar suavemente 45 grados y desplazarse por la nueva trayectoria hasta encuadrar correctamente la siguiente zona. El comportamiento resultante se asemejaba al de una cámara montada sobre un vagón que puede cambiar de vía al llegar a determinados puntos.",
      "El proyecto también me dejó un aprendizaje importante sobre las colisiones del personaje y su relación con el diseño de niveles. Inicialmente utilicé un box collider para Paws sin considerar cómo su forma interactuaría con algunos obstáculos particulares del escenario, especialmente unas puertas bajas diseñadas para que una mascota pudiera pasar por debajo. En determinadas situaciones, el personaje podía quedarse atascado o no tener suficiente fuerza para atravesarlas correctamente. Después de presentar el juego al público, desarrolladores con mayor experiencia me recomendaron utilizar un capsule collider para hacer más confiable el movimiento del personaje a través de este tipo de geometría. También surgió como alternativa implementar transiciones controladas en las puertas, ocultando el movimiento real detrás de una pequeña cinemática para crear la ilusión de que el personaje atraviesa físicamente la puerta, mientras el desarrollador tiene mayor control sobre la transición. Fue una experiencia valiosa para entender que la forma de las colisiones no solo debe considerarse desde la perspectiva de la física, sino también como parte del diseño visual y la experiencia del jugador.",
      "El proyecto también incluía interacciones con el entorno, progresión mediante llaves, estrellas coleccionables, tutoriales y secuencias narrativas. Las estrellas permitían descubrir recuerdos adicionales, mientras que la exploración y las acciones del jugador podían llevar a distintos desenlaces narrativos. Paws se completó como un prototipo académico y posteriormente obtuvo el primer puesto en la categoría Entretenimiento — Nivel 1 del Concurso de Innovación en Comunicación 2023 de la Universidad de Lima. El proyecto representó un paso importante en mi desarrollo como programador de Unity, especialmente por la experiencia adquirida trabajando con entornos 3D, presentación 2.5D, sistemas de cámara, interacción con el personaje y problemas relacionados con físicas y colisiones."
    ],
    image: "/projects/personal/paws/Cover.png",
    screenshots:
    [
      "/projects/personal/paws/Paws_SS_1.png",
      "/projects/personal/paws/Paws_SS_2.png",
      "/projects/personal/paws/Paws_SS_3.png",
      "/projects/personal/paws/Paws_SS_4.png",
    ],
    tools: [
      "Unity",
      "C#",
      "3D Physics",
      "2.5D"
    ],
    links: [
      {
        label: "itch.io",
        url: "https://godargos.itch.io/paws"
      },
      {
        label: "GitHub",
        url: "https://github.com/GodArgos/paws-unity"
      }
    ],
  },
  { // CALL FROM THE ICE
    slug: "cfti",
    title: "Call From The Ice",
    year: "2021",
    duration: "1 semana",
    team: 3,
    type: "Aventura",
    engine: "Unity",
    role: "Programmer & Level Designer",
    shortDescription:
      "Una corta aventura 2D top-down en pixel art desarrollada para la ACM Winter Game Jam 2021, donde un esposo debe rescatar a su esposa de una araña gigante en un bosque nevado.",
    description: [
      "Call from the Ice fue mi primer videojuego y mi primera participación en una game jam. Fue desarrollado por un equipo de tres personas durante una semana para la ACM Winter Game Jam 2021, bajo la temática Snowy Chaos. Es una aventura 2D top-down en pixel art donde el jugador explora un bosque nevado y una cueva, utilizando una escopeta para enfrentarse a una araña gigante y destruir obstáculos del escenario.",
      "Me encargué principalmente de la programación del jugador, incluyendo movimiento, animaciones y disparo, además de contribuir al diseño de niveles. Debido a nuestra poca experiencia con Unity y al límite de una semana, el proyecto se enfocó en implementar un ciclo de juego pequeño y completo en lugar de sistemas complejos.",
      "El proyecto también fue mi primera experiencia trabajando colaborativamente en un videojuego. En ese momento no conocíamos los sistemas de control de versiones, por lo que compartíamos el proyecto de Unity mediante Google Drive y coordinábamos manualmente nuestros cambios. Esto fue una primera experiencia importante para entender la necesidad de utilizar control de versiones y flujos de trabajo adecuados para el desarrollo colaborativo."
    ],
    image: "/projects/personal/cfti/Cover.png",
    screenshots: [
      "/projects/personal/cfti/CFTI_SS_1.png",
      "/projects/personal/cfti/CFTI_SS_2.png",
      "/projects/personal/cfti/CFTI_SS_3.png",
    ],
    tools: ["Unity", "C#"],
    links: [
      { label: "itch.io", url: "https://godargos.itch.io/call-from-the-ice" },
    ],
  },
];

// ── Experience — EN ───────────────────────────────────────────────────────────
export const EXPERIENCE_EN: Experience[] = [
  {
    role: "Game Development Intern — Unity / VR",
    company: "Universidad de Lima",
    period: "Aug. 2023 – Jul. 2025",
    description:
      "Developed Unity applications and games for VR, AR, desktop, and mobile platforms. Programmed gameplay mechanics, interaction systems, and application logic in C#, while working on multiplayer VR experiences, project migrations, optimization, and interactive solutions throughout the development cycle.",
    skills: [
      "Unity",
      "C#",
      "XR Interaction Toolkit",
      "Mirror Networking",
      "Git",
    ],
  },
];

// ── Experience — ES ───────────────────────────────────────────────────────────
export const EXPERIENCE_ES: Experience[] = [
  {
    role: "Practicante Pre de Desarrollo de Videojuegos — Unity / VR",
    company: "Universidad de Lima",
    period: "Ago. 2023 – Jul. 2025",
    description:
      "Desarrollé aplicaciones y videojuegos en Unity para plataformas VR, AR, desktop y mobile. Programé mecánicas de gameplay, sistemas de interacción y lógica de aplicación en C#, participando en experiencias de realidad virtual multijugador, migración de proyectos, optimización y desarrollo de soluciones interactivas durante todo el ciclo de desarrollo.",
    skills: [
      "Unity",
      "C#",
      "XR Interaction Toolkit",
      "Mirror Networking",
      "Git",
    ],
  },
];

// ── Certificates — EN ─────────────────────────────────────────────────────────

export const CERTIFICATES_EN: Certificate[] = [
  { title: "Specialization Diploma in Videogame Development", issuer: "Universidad de Lima", year: "2026" },
  { title: "Specialization Diploma in Software Engineering", issuer: "Universidad de Lima", year: "2026" },
  { title: "C++ Fundamentals: Game Programming For Beginners", issuer: "Udemy — GameDev.tv", year: "2026", url: "https://www.udemy.com/certificate/UC-bf11adf0-650f-46dc-8649-45779489d02b/" },
  { title: "Math For Video Games: The Fastest Way To Get Smarter At Math", issuer: "Udemy — GameDev.tv", year: "2026", url: "https://www.udemy.com/certificate/UC-2869fbbf-4171-4fcf-95c4-50ad93cac0ce/" },
  { title: "TELAR — Game Development Workshop", issuer: "TELAR", year: "2026", url: "https://www.telarworkshop.com" }
];

// ── Certificates — ES ─────────────────────────────────────────────────────────
export const CERTIFICATES_ES: Certificate[] = [
  { title: "Diploma de Especialidad en Desarrollo de Videojuegos", issuer: "Universidad de Lima", year: "2026" },
  { title: "Diploma de Especialidad en Ingeniería de Software", issuer: "Universidad de Lima", year: "2026" },
  { title: "C++ Fundamentals: Game Programming For Beginners", issuer: "Udemy — GameDev.tv", year: "2026", url: "https://www.udemy.com/certificate/UC-bf11adf0-650f-46dc-8649-45779489d02b/" },
  { title: "Math For Video Games: The Fastest Way To Get Smarter At Math", issuer: "Udemy — GameDev.tv", year: "2026", url: "https://www.udemy.com/certificate/UC-2869fbbf-4171-4fcf-95c4-50ad93cac0ce/" },
  { title: "TELAR — Workshop de Desarrollo de Videojuegos", issuer: "TELAR", year: "2026", url: "https://www.telarworkshop.com" }
];

// ── Professional Projects — EN ────────────────────────────────────────────────
export const PROFESSIONAL_PROJECTS_EN: ProfessionalProject[] = [
  { // LA RUTA DEL CHOCOLATE
    slug: "ruta-chocolate",
    title: "La Ruta del Chocolate",
    company: "Universidad de Lima — ITLAB",
    year: "2025",
    role: "Unity Developer",
    type: "VR Singleplayer/Multiplayer",
    shortDescription:
      "Educational VR experience simulating the early stages of cocoa production, developed in both single-player and cooperative multiplayer versions using XR Interaction Toolkit and Mirror.",
    description: [
      "La Ruta del Chocolate was developed in collaboration with the Faculty of Engineering as part of an educational experience that complemented the university's chocolate production laboratories. While visitors could observe the industrial stages of chocolate manufacturing in the physical laboratories, the VR application recreated the agricultural process that precedes them: harvesting cocoa pods, drying cocoa beans, and transporting them to the processing facilities. The project was presented in both single-player and cooperative multiplayer versions during guided demonstrations.",
      "The experience is divided into three interactive stages. In the first level, players harvest cocoa pods using VR pruning shears after waiting for each fruit to complete a simulated ripening cycle represented through gradual color changes. When the stem is cut, the fruit's Rigidbody switches from kinematic to dynamic, allowing it to fall naturally and be collected inside wooden crates. The second level focuses on opening cocoa pods with a machete, replacing the intact pod with a collection of independently interactable halves and cocoa beans. Players then spread the beans on drying racks, where they gradually change color before being collected inside burlap sacks. Finally, the last stage requires transporting the completed sacks onto a truck that departs once every delivery has been completed.",
      "To reinforce the educational objective, the experience incorporated a contextual guidance system composed of instructional boards and narrated voice-over explanations. Rather than acting as a traditional gameplay tutorial, the system explained every production stage while guiding visitors through the required interactions, making the experience suitable for users with no previous knowledge of cocoa processing.",
      "The multiplayer version was developed using Mirror Networking and supported two cooperative VR players connected through a host-client architecture. Each avatar independently synchronized the transforms of the head, torso, and both hands while hiding the local body meshes to prevent duplicated rendering in first-person VR. The networking architecture was adapted specifically for on-site demonstrations, allowing one headset to host the session while the second joined directly using the local network.",
      "One of the main technical challenges was synchronizing XR interactions across the network. Every interactable object implemented an authority-transfer system where players requested ownership before grabbing an object through XR Interaction Toolkit. Once authority was granted by the host, the player became responsible for synchronizing that object's movement until it was released, at which point authority returned to the server. This prevented multiple users from manipulating the same object simultaneously while maintaining consistent physics across both clients.",
      "Several gameplay systems also required synchronized cooperative progression. Tutorial pages only advanced after both players confirmed each step, scene transitions required every participant to enter the teleport area, and shared objectives such as harvested fruits, dried beans, and transported sacks used synchronized counters to ensure both clients remained in the same gameplay state. Additionally, a custom network spawning system was developed for dynamically created objects—particularly the cocoa pod fragments generated after cutting—allowing each individual object to be synchronized independently while avoiding Mirror's NetworkIdentity transform limitations."
    ],
    image: "/projects/professional/ruta-chocolate/Cover.png",
    screenshots: 
    [
      "/projects/professional/ruta-chocolate/Chocolate_SS_1.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_2.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_3.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_4.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_5.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_6.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_7.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_8.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_9.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_10.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_11.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_12.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_13.png",
    ],
    tags: [
      "Unity",
      "C#",
      "Virtual Reality",
      "XR Interaction Toolkit",
      "Mirror",
      "Multiplayer",
      "Networking"
    ],
    links: [],
  },
  { // ULIMA RECUERDO
    slug: "ulimarecuerdovr",
    title: "UlimaRecuerdoVR",
    company: "Universidad de Lima — ITLab",
    year: "2025",
    role: "Unity Developer",
    type: "VR",
    shortDescription:
      "Interactive VR experience that lets visitors explore a life-sized model of Universidad de Lima and discover its past and future through location-based video experiences.",
    description: [
      "Developed in collaboration with the Cultural Center of Universidad de Lima for the exhibition “Transformando generaciones: La Universidad de Lima en el tiempo”, created as part of the university's 63rd anniversary. The experience recreates the university campus at real-world scale, allowing visitors to explore it in VR and discover points of interest that reveal different moments in the university's history.",
      "I implemented the interaction system behind the points of interest. When the player enters a marked area, directional indicators appear through a fade transition and guide them toward the available content. The system uses a raycast from the VR headset to determine where the player is looking. Looking toward one direction plays a video representing the location's past, while looking toward the other reveals its future.",
      "The video system was designed to avoid abrupt transitions when the player briefly moves their head away from the content. Videos are paused when the gaze leaves the target and only begin fading out after a short delay. If the player looks toward the opposite direction while another video is playing, the current video fades out while the new one fades in, allowing the experience to transition smoothly between the different points in time.",
      "The points of interest are visually marked by cylindrical areas using a wave-based shader. Once the player leaves the interaction area, the indicators and video content are smoothly faded out, returning the experience to the exploration state."
    ],
    image: "/projects/professional/ulimarecuerdovr/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_1.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_2.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_3.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_4.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_5.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_6.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "XR Interaction Toolkit",
      "Video Player",
      "Shaders"
    ],
    links: [],
  },
  { // ULIMA EXPO
    slug: "ulima-expo",
    title: "UlimaExpo",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Unity Developer",
    type: "WebGL Interactive Experience",
    shortDescription:
      "WebGL interactive exhibition for presenting student projects and research papers in a virtual gallery environment.",
    description: [
      "UlimaExpo is a WebGL interactive experience designed to present student research papers and projects in a virtual exhibition environment. The experience recreates a simple art gallery where traditional artwork is replaced by interactive displays containing posters that summarize and present each project or paper.",
      "I worked on the 2024 iteration of the project, created for the VII International Congress of Systems Engineering. My main responsibility was maintaining and adapting an existing project to new content and organizational requirements. One of the main changes involved restructuring the original single gallery into separate exhibition areas for research papers and student projects, requiring modifications to the environment layout and content organization.",
      "I also worked on the system used to dynamically populate the exhibition. Instead of manually placing every poster in the Unity scene, the application reads a JSON dataset containing the position and image information for each item. During initialization, the GameManager runs a generation routine that instantiates the required number of poster prefabs, separates them according to their category, and positions them based on the data provided by the JSON.",
      "Each generated poster also receives its corresponding paper or project image as a texture. This allowed the exhibition content to be updated through external data rather than requiring the scene to be manually modified for every new collection of papers and projects."
    ],
    image: "/projects/professional/ulima-expo/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulima-expo/UlimaExpo_SS_1.png",
      "/projects/professional/ulima-expo/UlimaExpo_SS_2.png",
      "/projects/professional/ulima-expo/UlimaExpo_SS_3.png",
    ],
    tags: [
      "Unity",
      "C#",
      "WebGL",
      "JSON",
      "Dynamic Content Generation"
    ],
    links: [],
  },
  { // ULIMA FERIA
    slug: "ulima-feria",
    title: "Ulima Virtual Job Fair",
    company: "ITLAB — Universidad de Lima",
    year: "2023 – 2025",
    role: "Unity Developer",
    type: "WebGL Interactive Experience",
    shortDescription:
      "WebGL virtual career fair that dynamically builds company stands and exhibition spaces from external data, designed to scale across yearly editions and changing numbers of participants.",
    description: [
      "Ulima Virtual Job Fair is a WebGL application developed in Unity that provides students and alumni with a virtual environment where they can explore participating companies, access information about them, view institutional content, and find links to job opportunities and virtual talks.",
      "I contributed to the 2023 and 2024 editions, with my main responsibility in 2023 being the implementation of a major redesign of the common areas and the dynamic environment generation system. Since the number and categories of participating companies changed every year, the application could not rely on fixed layouts. Instead, the environment was generated according to the data received for each edition, dynamically creating category areas, doors, halls, and company stands while adapting their layout to the amount of content available.",
      "Company information was received through a SOAP service as XML and transformed into a Dictionary<string, List<StandData>> organized by company category. The resulting data was then consumed by the world-building systems to generate the appropriate environments and configure each stand. Stand prefabs were designed with reusable components so their branding, descriptions, images, videos, links, social networks, colors, and other content could be populated from the external data without manually modifying each instance. The environment itself also used JSON configuration to define spatial information such as positions, rotations, scales, and reusable objects. This architecture allowed the application to adapt to different event configurations without rebuilding the environment manually.",
      "In 2024, I continued maintaining the application and implemented additional features, including the company and talk information panels, updated stand models, visual changes, and simple NPC navigation between stands. The project also required WebGL-oriented optimization due to its browser-based deployment and the amount of dynamically generated content.",
      "For the 2025 edition, I restructured the existing project and migrated it to Unity 6. Rather than adding another layer of changes to the accumulated legacy code and assets from previous editions, the goal was to clean up the project, remove unused assets and obsolete functionality, improve organization and performance where possible, and eliminate problematic practices. I also documented the resulting architecture so future developers could maintain and update the project more easily."
    ],
    image: "/projects/professional/ulima-feria/Cover.jpeg",
    screenshots: 
    [
      "/projects/professional/ulima-feria/Feria_SS_1.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_2.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_3.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_4.jpeg",
    ],
    tags: [
      "Unity",
      "C#",
      "WebGL",
      "XML",
      "JSON",
      "SOAP",
    ],
    links: [],
  },
  { // ULIMA FERIA SHOWCASE
    slug: "ulima-feria-showcase",
    title: "Ulima Feria Laboral Stand Showcase",
    company: "Universidad de Lima — ITLAB",
    year: "2025",
    role: "Unity Developer",
    type: "WebGL Interactive Experience",
    shortDescription:
      "Interactive Unity application for previewing and reviewing branded virtual company stands before their integration into the annual virtual job fair.",
    description: [
      "Ulima Feria Laboral Stand Showcase was developed as a complementary tool for the annual Ulima Virtual Job Fair, allowing companies and organizers to preview how their virtual stand would look before being integrated into the main event.",
      "The application presents the five available stand models and allows users to search for a company and apply its branding to the selected stand. The stand can then be rotated and inspected from different angles, providing a practical way to review the final appearance and gather feedback without requiring access to the complete virtual fair.",
      "The project reused the stand-generation architecture from the main fair, including the StandController and the data structures used to organize company information. The selected company data is used to dynamically populate the stand's configurable elements, keeping the showcase consistent with the actual generation process used in the main application.",
      "The project was developed in 2025 alongside the rebuild of the virtual job fair, taking advantage of the cleaned-up and reorganized architecture created for the new version. Its focused scope allowed the stand preview process to be separated from the full fair application, making it easier for companies and organizers to review branding and provide feedback during the preparation period."
    ],
    image: "/projects/professional/ulima-feria-showcase/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_1.png",
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_2.png",
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_3.png",
    ],
    tags: ["Unity", "C#", "WebGL", "XML", "SOAP",],
    links: [],
  },
  { // ASESORIAS VR
    slug: "asesorias-vr-ulima",
    title: "Asesorias VR Ulima",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Unity Developer",
    type: "VR Multiplayer",
    shortDescription:
      "VR multiplayer prototype for virtual university advising, connecting students and professors in dedicated one-on-one virtual rooms.",
    description: [
      "Asesorías VR Ulima is a VR multiplayer prototype developed in collaboration with the Faculty of Engineering at Universidad de Lima as a potential alternative to traditional professor-student advising sessions conducted through video conferencing platforms. Students could log in using their university credentials, browse careers, courses, and professors, and enter a professor's virtual advising room when they were available.",   
      "I was primarily responsible for establishing the core VR multiplayer flow. The application used Unity's XR Interaction Toolkit for the VR experience and Mirror for networking. The multiplayer architecture used dedicated advising room instances running on a Docker server, with the backend API providing the connection information required to join the corresponding room. This allowed each advising session to operate as an isolated multiplayer instance.", 
      "A key technical challenge was synchronizing the VR representation of each player. Instead of synchronizing a single transform, the player was represented through multiple tracked components: the root of the character, torso, head, and both hands. I implemented the system that propagated the local VR player's position and rotations to the corresponding networked representation, allowing the remote participant to see the other user's movements accurately. The local player's networked body was also hidden to avoid rendering a duplicate of their own VR avatar.",
      "I also worked on the VR character representation, including the addition of a visible torso and head model instead of relying exclusively on the standard VR hands-and-camera setup. The torso followed the headset movement using an offset designed to maintain its position relative to the player's body, providing a more complete representation of the user in the virtual environment.",
      "The prototype also integrated university authentication and backend services to determine professor availability and retrieve the connection information for their advising rooms. Voice communication through Vivox and the virtual whiteboard were implemented by other team members, while my contribution focused on the VR experience, multiplayer flow, and synchronization between the two."
    ],
    image: "/projects/professional/asesorias-vr-ulima/Cover.png",
    screenshots: 
    [
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_1.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_2.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_3.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_4.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_5.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "XR Interaction Toolkit",
      "Mirror Networking",
      "Multiplayer",
      "Docker",
      "REST APIs"
    ],
    links: [],
  },
  { // CACHIMBO VR
    slug: "cachimbo-vr",
    title: "BienvenidaCachimboVR",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Unity Developer",
    type: "VR",
    shortDescription:
      "VR adaptation of an interactive campus tour designed to introduce incoming Systems Engineering students to key locations and services at Universidad de Lima.",
    description: [
      "BienvenidaCachimboVR is an interactive VR experience created in collaboration with the Systems Engineering program at Universidad de Lima to welcome incoming students and introduce them to relevant locations and services around campus. The experience uses a virtual representation of the university and guides students through points of interest such as cafeterias, computer areas, and the engineering faculty, eventually unlocking a welcome video from the program director.",
      "The original experience had already been developed for PC, and my main responsibility was adapting its existing logic and interaction systems to VR. This involved implementing the VR player and adapting the point-of-interest interactions for Meta Quest 2 controllers. Instead of using the original PC interaction flow, the VR version uses the controller trigger to cast a raycast and detect interactive points. While the trigger is held and the raycast is targeting a valid point, the corresponding 3D information popup is displayed.",
      "I also adapted the progression system that tracks which points of interest have already been visited. Once all required locations have been explored, a final point of interest becomes available, allowing the student to watch a welcome video from the program director.",
      "One of the main VR-specific changes involved how the final point of interest was presented. The original PC version used a camera transition to move the player's view toward the location. For VR, I replaced this approach to avoid the motion sickness and loss of immersion that can result from taking control of the player's camera. Instead, the final location is revealed through an interactable pillar of light that becomes available after completing the tour."
    ],
    image: "/projects/professional/cachimbo-vr/Cover.png",
    screenshots: 
    [
      "/projects/professional/cachimbo-vr/CachimboVR_SS_1.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_2.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_3.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_4.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_5.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_6.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_7.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "Meta Quest 2",
      "XR Interaction Toolkit",
    ],
    links: [],
  },
];

// ── Professional Projects — ES ────────────────────────────────────────────────
export const PROFESSIONAL_PROJECTS_ES: ProfessionalProject[] = [
  { // LA RUTA DE CHOCOLATE
    slug: "ruta-chocolate",
    title: "La Ruta del Chocolate",
    company: "Universidad de Lima — ITLAB",
    year: "2025",
    role: "Desarrollador Unity",
    type: "VR Un jugador/Multijugador",
    shortDescription:
      "Experiencia educativa en realidad virtual que recrea las primeras etapas del procesamiento del cacao, desarrollada tanto en modo individual como cooperativo utilizando XR Interaction Toolkit y Mirror.",
    description: [
      "La Ruta del Chocolate fue desarrollada en colaboración con la Facultad de Ingeniería como una experiencia educativa destinada a complementar el recorrido por los laboratorios de fabricación de chocolate de la Universidad de Lima. Mientras las instalaciones permitían observar las etapas industriales del proceso, la aplicación en realidad virtual recreaba las fases agrícolas previas: la cosecha de los frutos de cacao, el secado de los granos y su transporte hacia la planta de procesamiento. El proyecto fue presentado tanto en una versión para un jugador como en una versión cooperativa para dos participantes durante visitas guiadas.",
      "La experiencia se divide en tres etapas interactivas. En la primera, el jugador debe recolectar frutos de cacao utilizando unas tijeras de poda en realidad virtual, esperando previamente a que cada fruto complete un ciclo de maduración representado mediante un cambio progresivo de color. Al cortar el tallo, el Rigidbody del fruto cambia de cinemático a dinámico, permitiendo que caiga de forma natural para luego ser almacenado en jabas de madera. En la segunda etapa, los frutos son abiertos con un machete, reemplazando el modelo original por un conjunto de mitades y granos de cacao completamente interactuables. Posteriormente, los granos deben colocarse sobre mallas de secado, donde cambian gradualmente de color antes de ser almacenados en sacos de yute. Finalmente, el jugador transporta los sacos completos hasta un camión que inicia su recorrido una vez recibida toda la carga.",
      "Para reforzar el carácter educativo de la experiencia se desarrolló un sistema de guía contextual compuesto por paneles informativos y narraciones con voz en off. Más que un tutorial tradicional, este sistema explicaba cada etapa del proceso de producción mientras guiaba al usuario durante las interacciones necesarias, permitiendo que cualquier visitante pudiera comprender el flujo completo del procesamiento del cacao.",
      "La versión multijugador fue desarrollada utilizando Mirror Networking y permitía la participación cooperativa de dos usuarios en realidad virtual mediante una arquitectura host-cliente. Cada avatar sincronizaba de forma independiente la posición y rotación de la cabeza, el torso y ambas manos, ocultando localmente los modelos del propio jugador para evitar la duplicación del cuerpo en primera persona. Esta arquitectura fue diseñada específicamente para las demostraciones presenciales, donde uno de los visores actuaba como host y el segundo se conectaba directamente a través de la red local.",
      "Uno de los principales desafíos técnicos fue sincronizar correctamente todas las interacciones de XR entre ambos jugadores. Cada objeto interactuable implementó un sistema de transferencia de autoridad donde el jugador solicitaba la propiedad del objeto antes de tomarlo mediante XR Interaction Toolkit. Una vez concedida por el host, dicho jugador era responsable de sincronizar la posición y rotación del objeto hasta liberarlo, momento en el que la autoridad regresaba nuevamente al servidor. Este sistema evitaba que ambos jugadores pudieran manipular simultáneamente un mismo objeto y mantenía un comportamiento físico consistente en ambos clientes.",
      "La versión cooperativa también incorporó diversos sistemas de progreso compartido. Los paneles informativos únicamente avanzaban cuando ambos jugadores confirmaban haber completado cada paso, las transiciones entre niveles requerían que los dos participantes ingresaran a la zona de teletransporte y objetivos como la cantidad de frutos cosechados, granos secos o sacos transportados utilizaban contadores sincronizados para mantener ambos clientes en el mismo estado de la experiencia. Además, se desarrolló un sistema propio de instanciación en red para objetos generados dinámicamente —especialmente los fragmentos del fruto de cacao creados al abrirlo— permitiendo sincronizar cada componente de manera independiente sin superar las limitaciones de NetworkIdentity de Mirror."
    ],
    image: "/projects/professional/ruta-chocolate/Cover.png",
    screenshots: 
    [
      "/projects/professional/ruta-chocolate/Chocolate_SS_1.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_2.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_3.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_4.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_5.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_6.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_7.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_8.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_9.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_10.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_11.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_12.png",
      "/projects/professional/ruta-chocolate/Chocolate_SS_13.png",
    ],
    tags: [
      "Unity",
      "C#",
      "Realidad Virtual",
      "XR Interaction Toolkit",
      "Mirror",
      "Multijugador",
      "Networking"
    ],
    links: [],
  },
  { // ULIMA RECUERDO
    slug: "ulimarecuerdovr",
    title: "UlimaRecuerdoVR",
    company: "Universidad de Lima — ITLab",
    year: "2025",
    role: "Desarrollador Unity",
    type: "Experiencia Interactiva VR",
    shortDescription:
      "Experiencia interactiva en realidad virtual que permite recorrer una representación a escala real de la Universidad de Lima y descubrir su pasado y futuro mediante contenidos audiovisuales.",
    description: [
      "Desarrollado en colaboración con el Centro Cultural de la Universidad de Lima para la exposición “Transformando generaciones: La Universidad de Lima en el tiempo”, realizada por el 63.º aniversario de la universidad. La experiencia recrea el campus a escala real y permite a los visitantes recorrerlo en realidad virtual y descubrir diferentes puntos de interés relacionados con el pasado y futuro de la universidad.",
      "Me encargué de implementar el sistema de interacción de los puntos de interés. Cuando el jugador ingresa a una zona determinada, aparecen indicadores mediante una transición de fade que señalan las direcciones en las que puede encontrar contenido. El sistema utiliza un raycast desde la cámara del headset para determinar hacia dónde está mirando el usuario. Al mirar hacia una dirección se reproduce un video relacionado con el pasado de la ubicación, mientras que al mirar hacia la dirección opuesta se muestra su futuro.",
      "El sistema de reproducción fue diseñado para evitar transiciones bruscas cuando el usuario mueve ligeramente la cabeza fuera del contenido. Los videos se pausan cuando el raycast deja de detectar el objetivo y solo comienzan a desaparecer después de un breve periodo sin contacto. Si el jugador cambia directamente hacia la dirección opuesta mientras un video continúa reproduciéndose, el contenido actual realiza un fade out mientras el nuevo video realiza un fade in, permitiendo una transición fluida entre ambos momentos.",
      "Los puntos de interés se identifican visualmente mediante zonas cilíndricas con un shader que genera un efecto de ondas. Cuando el jugador abandona la zona de interacción, tanto los indicadores como el contenido audiovisual realizan un fade out para regresar al estado de exploración del campus."
    ],
    image: "/projects/professional/ulimarecuerdovr/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_1.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_2.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_3.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_4.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_5.png",
      "/projects/professional/ulimarecuerdovr/UlimaRecuerdo_SS_6.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "XR Interaction Toolkit",
      "Video Player",
      "Shaders"
    ],
    links: [],
  },
  { // ULIMA EXPO
    slug: "ulima-expo",
    title: "UlimaExpo",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Desarrollador Unity",
    type: "Experiencia Interactiva WebGL",
    shortDescription:
      "Exposición interactiva en WebGL para presentar proyectos estudiantiles y trabajos de investigación dentro de una galería virtual.",
    description: [
      "UlimaExpo es una experiencia interactiva en WebGL diseñada para presentar trabajos de investigación y proyectos de estudiantes dentro de un entorno de exposición virtual. La experiencia recrea una galería de arte sencilla donde las obras tradicionales son reemplazadas por paneles que contienen posters con información resumida sobre cada proyecto o paper.",
      "Trabajé en la versión de 2024, desarrollada para el VII Congreso Internacional de Ingeniería de Sistemas. Mi principal responsabilidad fue realizar el mantenimiento y adaptar un proyecto existente a nuevos contenidos y requerimientos de organización. Uno de los principales cambios consistió en reorganizar la galería original, que contenía todos los posters en un mismo espacio, para separar los trabajos de investigación de los proyectos estudiantiles en diferentes salas.",
      "También trabajé en el sistema utilizado para poblar dinámicamente la exposición. En lugar de colocar manualmente cada poster dentro de la escena de Unity, la aplicación utiliza un archivo JSON que contiene información como la posición y la imagen correspondiente a cada elemento. Durante el inicio, el GameManager ejecuta una rutina de generación que instancia la cantidad necesaria de prefabs de posters, los separa según su categoría y los posiciona de acuerdo con los datos proporcionados por el JSON.",
      "Cada poster generado recibe además la imagen correspondiente al paper o proyecto como textura. Esto permite actualizar el contenido de la exposición mediante datos externos, sin necesidad de modificar manualmente la escena cada vez que se presenta una nueva colección de trabajos."
    ],
    image: "/projects/professional/ulima-expo/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulima-expo/UlimaExpo_SS_1.png",
      "/projects/professional/ulima-expo/UlimaExpo_SS_2.png",
      "/projects/professional/ulima-expo/UlimaExpo_SS_3.png",
    ],
    tags: [
      "Unity",
      "C#",
      "WebGL",
      "JSON",
      "Generación Dinámica de Contenido"
    ],
    links: [],
  },
  { // ULIMA FERIA
    slug: "ulima-feria",
    title: "Feria del Trabajo Virtual Ulima",
    company: "ITLAB — Universidad de Lima",
    year: "2023 – 2025",
    role: "Desarrollador Unity",
    type: "Experiencia Interactiva WebGL",
    shortDescription:
      "Feria laboral virtual en WebGL que genera dinámicamente stands y espacios de exposición a partir de datos externos, adaptándose a cada edición y a un número variable de empresas participantes.",
    description: [
      "La Feria del Trabajo Virtual Ulima es una aplicación WebGL desarrollada en Unity que ofrece a estudiantes y egresados un entorno virtual donde pueden explorar empresas participantes, consultar información sobre ellas, visualizar contenido institucional y acceder a enlaces de postulación y charlas virtuales.",
      "Participé en las ediciones de 2023 y 2024, teniendo como principal responsabilidad durante 2023 la implementación de un rediseño importante de las áreas comunes y del sistema de generación dinámica del entorno. Debido a que la cantidad y categorías de empresas participantes cambiaban cada año, la aplicación no podía depender de una distribución fija. En su lugar, el entorno se generaba de acuerdo con los datos recibidos para cada edición, creando dinámicamente las áreas por categoría, puertas, salas y stands, mientras adaptaba su distribución a la cantidad de contenido disponible.",
      "La información de las empresas se recibía mediante un servicio SOAP en formato XML y posteriormente se transformaba en un Dictionary<string, List<StandData>> organizado por categoría. Estos datos eran utilizados por los sistemas de construcción del mundo para generar los ambientes correspondientes y configurar cada stand. Los prefabs de los stands estaban diseñados con componentes reutilizables que permitían configurar su identidad visual, descripción, imágenes, videos, enlaces, redes sociales, colores y demás contenido a partir de los datos externos, sin tener que modificar manualmente cada instancia. El entorno también utilizaba archivos JSON para definir información espacial como posiciones, rotaciones, escalas y objetos reutilizables. Esta arquitectura permitía adaptar la aplicación a distintas configuraciones del evento sin reconstruir manualmente el entorno.",
      "En 2024 continué realizando mantenimiento e implementando nuevas funcionalidades, entre ellas los paneles de información de empresas y charlas, actualización de modelos de stands, cambios visuales y un sistema sencillo de NPCs que se desplazaban entre stands. El proyecto también requería optimización específica para WebGL debido a su ejecución en navegador y a la cantidad de contenido generado dinámicamente.",
      "Para la edición de 2025 realicé una reestructuración del proyecto y su migración a Unity 6. En lugar de seguir acumulando cambios sobre el código y los assets heredados de las ediciones anteriores, el objetivo fue limpiar el proyecto, eliminar assets y funcionalidades que ya no se utilizaban, mejorar su organización y rendimiento dentro de lo posible y corregir malas prácticas o implementaciones problemáticas. También documenté la arquitectura resultante para facilitar el mantenimiento y futuras actualizaciones por parte de nuevos desarrolladores."
    ],
    image: "/projects/professional/ulima-feria/Cover.jpeg",
    screenshots: 
    [
      "/projects/professional/ulima-feria/Feria_SS_1.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_2.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_3.jpeg",
      "/projects/professional/ulima-feria/Feria_SS_4.jpeg",
    ],
    tags: [
      "Unity",
      "C#",
      "WebGL",
      "XML",
      "JSON",
      "SOAP",
    ],
    links: [],
  },
  { // ULIMA FERIA SHOWCASE
    slug: "ulima-feria-showcase",
    title: "Ulima Feria Laboral Stand Showcase",
    company: "Universidad de Lima — ITLAB",
    year: "2025",
    role: "Unity Developer",
    type: "Experiencia Interactiva WebGL",
    shortDescription:
      "Aplicación interactiva en Unity para previsualizar y revisar stands virtuales personalizados antes de integrarlos a la feria laboral virtual anual.",
    description: [
      "Ulima Feria Laboral Stand Showcase fue desarrollado como una herramienta complementaria para la Feria Laboral Virtual Ulima, permitiendo a las empresas y organizadores previsualizar cómo quedaría su stand virtual antes de integrarlo a la feria principal.",
      "La aplicación presenta los cinco modelos de stand disponibles y permite buscar una empresa para aplicar su identidad visual al modelo seleccionado. El stand puede rotarse y visualizarse desde distintos ángulos, facilitando la revisión de su apariencia final y la recopilación de feedback sin necesidad de acceder a toda la feria virtual.",
      "El proyecto reutilizó la arquitectura de generación de stands de la feria principal, incluyendo el StandController y las estructuras de datos utilizadas para organizar la información de las empresas. Los datos de la empresa seleccionada se utilizan para completar dinámicamente los elementos configurables del stand, manteniendo el visualizador consistente con el proceso de generación utilizado en la aplicación principal.",
      "El proyecto fue desarrollado en 2025 en paralelo con la reconstrucción de la feria laboral virtual, aprovechando la arquitectura reorganizada y depurada creada para la nueva versión. Su alcance reducido permitió separar el proceso de previsualización de stands de la aplicación completa de la feria, facilitando que empresas y organizadores revisaran la identidad visual y proporcionaran feedback durante la etapa de preparación."
    ],
    image: "/projects/professional/ulima-feria-showcase/Cover.png",
    screenshots: 
    [
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_1.png",
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_2.png",
      "/projects/professional/ulima-feria-showcase/UlimaShowcase_SS_3.png",
    ],
    tags: ["Unity", "C#", "WebGL", "XML", "SOAP",],
    links: [],
  },
  { // ASESORIAS VR
    slug: "asesorias-vr-ulima",
    title: "Asesorías VR Ulima",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Desarrollador Unity",
    type: "VR Multijugador",
    shortDescription:
      "Prototipo multijugador en realidad virtual para asesorías universitarias, conectando a estudiantes y profesores en salas virtuales individuales.",
    description: [
      "Asesorías VR Ulima es un prototipo multijugador en realidad virtual desarrollado en conjunto con la Facultad de Ingeniería de la Universidad de Lima como una posible alternativa a las asesorías tradicionales entre profesores y alumnos realizadas mediante plataformas de videollamada. Los estudiantes podían ingresar utilizando sus credenciales universitarias, navegar entre carreras, cursos y profesores, y acceder a la sala virtual de asesoría de un profesor cuando este se encontraba disponible.",
      "Me encargué principalmente de establecer el flujo principal de realidad virtual y multijugador. La aplicación utilizaba el XR Interaction Toolkit de Unity para la experiencia VR y Mirror para la comunicación en red. La arquitectura multijugador utilizaba instancias independientes de las salas de asesoría ejecutándose en un servidor mediante Docker, mientras que la API del backend proporcionaba la información necesaria para conectarse a la sala correspondiente. De esta manera, cada asesoría podía funcionar como una instancia multijugador aislada.",
      "Uno de los principales retos técnicos fue sincronizar la representación VR de cada usuario. En lugar de sincronizar únicamente un transform, el jugador estaba compuesto por varios elementos rastreados: la raíz del personaje, el torso, la cabeza y ambas manos. Implementé el sistema encargado de transmitir las posiciones y rotaciones del jugador local hacia sus correspondientes representaciones en red, permitiendo que el otro participante pudiera visualizar correctamente los movimientos del usuario. A nivel local, el cuerpo de la representación multijugador se ocultaba para evitar que el jugador visualizara una copia duplicada de su propio avatar.",
      "También trabajé en la representación del personaje dentro de VR, incorporando un modelo visible del torso y la cabeza en lugar de utilizar únicamente las manos y la cámara habituales en una experiencia VR. El torso seguía el movimiento del headset mediante un offset que permitía mantenerlo en una posición coherente con el cuerpo del usuario, proporcionando una representación más completa dentro del entorno virtual.",
      "El prototipo también integraba la autenticación universitaria y servicios del backend para determinar la disponibilidad de los profesores y obtener la información necesaria para conectarse a sus salas de asesoría. La comunicación por voz mediante Vivox y el sistema de pizarra virtual fueron implementados por otros integrantes del equipo, mientras que mi contribución se centró en la experiencia VR, el flujo multijugador y la sincronización entre usuarios."
    ],
    image: "/projects/professional/asesorias-vr-ulima/Cover.png",
    screenshots: 
    [
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_1.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_2.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_3.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_4.png",
      "/projects/professional/asesorias-vr-ulima/AsesoriaVR_SS_5.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "XR Interaction Toolkit",
      "Mirror Networking",
      "Multiplayer",
      "Docker",
      "REST APIs"
    ],
    links: [],
  },
  { // CACHIMBO VR
    slug: "cachimbo-vr",
    title: "BienvenidaCachimboVR",
    company: "Universidad de Lima — ITLab",
    year: "2024",
    role: "Desarrollador Unity",
    type: "VR",
    shortDescription:
      "Adaptación a realidad virtual de un recorrido interactivo por el campus, diseñado para introducir a los nuevos estudiantes de Ingeniería de Sistemas a las principales ubicaciones y servicios de la Universidad de Lima.",
    description: [
      "BienvenidaCachimboVR es una experiencia interactiva en realidad virtual desarrollada en colaboración con la carrera de Ingeniería de Sistemas de la Universidad de Lima para dar la bienvenida a los nuevos estudiantes e introducirlos a diferentes ubicaciones y servicios relevantes del campus. La experiencia utiliza una representación virtual de la universidad y presenta puntos de interés como cafeterías, zonas de cómputo y la facultad de ingeniería, culminando con un video de bienvenida de la directora de la carrera.",
      "La experiencia original ya había sido desarrollada para PC, por lo que mi principal responsabilidad fue adaptar su lógica y sistemas de interacción existentes a realidad virtual. Esto implicó implementar el jugador VR y adaptar la interacción con los puntos de interés para los controles del Meta Quest 2. En lugar del sistema de interacción original para PC, la versión VR utiliza el trigger de los mandos para lanzar un raycast y detectar los puntos interactuables. Mientras el usuario mantiene presionado el trigger y el raycast apunta a un punto válido, se muestra el popup 3D con la información correspondiente.",
      "También adapté el sistema de progresión encargado de registrar qué puntos de interés habían sido visitados. Una vez exploradas todas las ubicaciones requeridas, se habilitaba un punto de interés final que permitía al estudiante visualizar un video de bienvenida de la directora de la carrera.",
      "Uno de los principales cambios específicos para VR estuvo en la presentación del punto final. La versión para PC utilizaba una transición de cámara que desplazaba la vista del jugador hacia la ubicación correspondiente. En realidad virtual reemplacé este comportamiento para evitar posibles mareos y pérdida de inmersión causados por tomar el control de la cámara del usuario. En su lugar, la ubicación final se presenta mediante un pilar de luz interactuable que aparece después de completar el recorrido."
    ],
    image: "/projects/professional/cachimbo-vr/Cover.png",
    screenshots: 
    [
      "/projects/professional/cachimbo-vr/CachimboVR_SS_1.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_2.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_3.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_4.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_5.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_6.png",
      "/projects/professional/cachimbo-vr/CachimboVR_SS_7.png",
    ],
    tags: [
      "Unity",
      "C#",
      "VR",
      "Meta Quest 2",
      "XR Interaction Toolkit",
    ],
    links: [],
  },
];

// ── Hook — returns the right data set for the current language ─────────────────

export function useData() {
  const { lang } = useLang();
  const es = lang === "es";
  return {
    PROJECTS:              es ? PROJECTS_ES              : PROJECTS_EN,
    EXPERIENCE:            es ? EXPERIENCE_ES            : EXPERIENCE_EN,
    CERTIFICATES:          es ? CERTIFICATES_ES          : CERTIFICATES_EN,
    PROFESSIONAL_PROJECTS: es ? PROFESSIONAL_PROJECTS_ES : PROFESSIONAL_PROJECTS_EN,
  };
}

// Keep old names as aliases for any direct imports that bypass useData
export const PROJECTS              = PROJECTS_EN;
export const EXPERIENCE            = EXPERIENCE_EN;
export const CERTIFICATES          = CERTIFICATES_EN;
export const PROFESSIONAL_PROJECTS = PROFESSIONAL_PROJECTS_EN;
