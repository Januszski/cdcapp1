import { useEffect, useRef, useState } from "react";
import SongInput from "./SongInput";

//const chats: number[] = [];

const usernames = [
  "GroovyBeats88",
  "FestivalFanatic23",
  "RaveQueen42",
  "BassDropper3000",
  "DanceTillDawn",
  "MusicMaven101",
  "NeonGlowParty",
  "ChillVibesOnly",
  "ElectroJunkie77",
  "GuitarGoddess",
  "FestivalFever2023",
  "GrooveMasterX",
  "StarstruckRaver",
  "HarmonyHarbor",
  "BeatDropsAndChill",
  "TechnoTripper23",
  "GlitterGoddess27",
  "ElectroWanderer",
  "BassHead808",
  "TranceTiger",
  "RockNRoller87",
  "MoonlightMelodies",
  "GrooveGalaxy42",
  "FestivalExplorerX",
  "EDMEnthusiast99",
  "GlowStickWarrior",
  "DanceFloorQueen",
  "IndieSoulSearcher",
  "ElectricDreamer24",
  "RockNRaveHero",
  "FestivalFlare",
  "DrumNBassJunkie",
  "StardustStrummer",
  "EDMInnovatorX",
  "GrooveCruiseCaptain",
  "ElectroEnigma42",
  "RetroRaver89",
  "RainbowRhythms",
  "SereneSoundscapes",
  "DanceDiplomat",
  "BassBoosterX",
  "TechnoTwister",
  "FestivalFairy42",
  "GrooveGalore",
  "AcousticHarmony",
  "NeonNights92",
  "BeatBenevolent",
  "EDMTrailblazer",
  "SoundSorcererX",
  "MidnightMaestro",
  "TranceTrekker77",
  "EclecticEargasm",
  "FestivalFusionist",
  "DiscoDynamoX",
  "DrumCircleMaster",
  "NeonNirvana23",
  "ElectroEvolution",
  "SpaceSoundSculptor",
  "GrooveGoddess27",
  "EDMInnovator42",
  "FestivalFamForever",
  "BeatBenderX",
  "RhythmRider99",
  "FunkyFestivalSoul",
  "TechnoTimeTraveler",
  "ElectroEnthusiast88",
  "NeonNomadX",
  "BassBoulevard",
  "CosmicCrescendo",
  "FestivalFairyGlow",
  "GrooveGuardian",
  "BeatBlasterX",
  "TranceTraveler42",
  "SerenadeSeekerX",
  "NeonNectarine23",
  "EDMExperience101",
  "RhythmRevelerX",
  "DiscoDazzler99",
  "TechnoTherapist",
  "BasslineBattler",
  "FestivalFlame",
  "GrooveGalacticX",
  "BeatBuilderX",
  "RaveRevolutionary",
  "SoundSculptorX",
  "DanceDeckDemon",
  "TranceTitan42",
  "HarmonicHarbor",
  "NeonNebula27",
  "EDMEmpireBuilder",
  "MusicalMaven",
  "FLStudioPirateer",
  "FernandoFarts",
  "DJBARNES",
  "MoshMan47",
  "MorseCodeMonster",
  "TheLegend27",
  "МузыкаЛюбитель",
  "BailaTodaLaNoche",
  "MélodieMagique",
  "PartyTier123",
  "BatuqueiroBrasil",
  "DansTotHetOchtendgloren",
  "BalliamoTutti",
  "FestivalFirare",
  "ΡυθμοίΕκρηκτικοί",
  "РитмПрорыв",
  "VibracionesPositivas",
  "MélodieMystique",
  "Feierrausch",
  "SambaBrasileiro",
  "MuziekFanaatNL",
];

const chatList = [
  "Hey everyone, who's ready to dance the night away? 🕺🎶",
  "The lineup is insane! I can't wait for the headliner!",
  "Just got here, and the vibes are already lit! 🔥",
  "Get ready for some heavy bass drops, fam!",
  "Let's make this night unforgettable! 🌟",
  "Which stage has the best acts right now?",
  "My outfit is on point! Who else is rocking neon tonight? 💚💜",
  "Who's here to relax and enjoy the chill tunes?",
  "Can't wait to get lost in the electronic beats!",
  "Ready to be blown away by some epic guitar solos!",
  "This lineup is straight fire! 🔥🎵",
  "Let's groove together all night long!",
  "Anyone else here for the light shows and lasers?",
  "Sending positive vibes to everyone in the chat! ✌️❤️",
  "Who's up for some chill beats and good company?",
  "Techno beats are my happy place!",
  "Sparkles and music - what more do you need? ✨🎶",
  "Exploring every stage for the ultimate experience!",
  "Ready to get my bass fix tonight!",
  "Trance music, trance state. Let's transcend together!",
  "Can't wait to headbang to some epic rock anthems!",
  "Dancing under the moonlight, life is perfect!",
  "Lost in the rhythm of the cosmos.",
  "Discovering new artists is the best part!",
  "Electronic Dance Music all day, every day!",
  "Who's got their glow sticks ready for the night?",
  "Claiming my spot on the dance floor! 💃",
  "Indie vibes and soulful tunes are my jam!",
  "Dreaming of a night filled with electric energy.",
  "Rocking out and raving till dawn!",
  "Keep the festival spirit alive, my friends!",
  "Drum and Bass is the heartbeat of the night.",
  "Strumming to the rhythm of the stars.",
  "Let's push the boundaries of EDM tonight!",
  "Sailing through the night on a sea of beats.",
  "Mysteries of electronic music await!",
  "Bringing the old-school rave vibes back!",
  "Grooving to the colors of the rainbow.",
  "Finding serenity in the festival chaos.",
  "United by music, divided by nothing!",
  "Pump up the bass, and let's get wild!",
  "Twisting and turning to techno beats.",
  "Granting wishes for epic sets tonight! 🧚‍♀️✨",
  "Never enough grooves to explore!",
  "Acoustic vibes and soulful melodies in the air.",
  "Neon lights guide us through the night.",
  "Sharing the beat love with all of you!",
  "Let's pioneer a new era of EDM together.",
  "Conjuring epic sounds from the speakers.",
  "Playing the night's soundtrack with style.",
  "Trekking through trance soundscapes.",
  "My ears are in for a treat tonight!",
  "Mixing genres like a musical alchemist.",
  "Saturday Night Fever all over again!",
  "Join my virtual drum circle, everyone!",
  "Finding bliss in neon dreams tonight.",
  "Witnessing the evolution of electronic music.",
  "Carving melodies from the cosmos.",
  "Dancing like nobody's watching!",
  "Innovating beats, one drop at a time.",
  "We're a festival family, through and through!",
  "Bending beats and minds at the same time!",
  "Riding the waves of rhythm and bass.",
  "Getting funky with it tonight!",
  "Time to travel through techno history!",
  "No such thing as too much EDM!",
  "Wandering the neon desert of sound.",
  "Taking a stroll down Bass Boulevard.",
  "Music that takes us to the stars!",
  "Sparkling like a festival fairy tonight! ✨🧚‍♂️",
  "Protecting the dance floor with epic moves!",
  "Blasting beats, one track at a time.",
  "Ready to embark on a trance journey!",
  "Seeking serenades in every note.",
  "Juicy beats under the neon lights!",
  "Here for the ultimate EDM experience.",
  "Reveling in the rhythm of the night.",
  "Dazzling moves on the disco floor!",
  "Techno is my therapy; let's dance it out!",
  "Battling the basslines with dance moves!",
  "Keeping the festival flame alive! 🔥",
  "Exploring the galaxy of grooves.",
  "Building beats that make you move.",
  "Revolutionizing the rave scene!",
  "Shaping soundscapes like an artist.",
  "Ruling the dance deck tonight!",
  "Unleashing the power of trance music.",
  "Finding harmony in the festival chaos.",
  "Nebulas of neon light and sound!",
  "Building an empire of beats and drops.",
  "I hope the moderator's box is secure!",
  "Somebody hack the DJ and play my mixtape!",
  "This song sounds like a sorting algorithm!",
  "I can smell you",
  "Can't wait for pizza!",
  "Idemo Nole!",
  "I think somebody next to me farted",
  "I can't wait for Avoure!",
  "Sel is a Lithuanian Legend!",
  "Yo Skrill drop it hard!",
  "If Deadmau5 comes on I think I might fall asleep",
  "I hope Elite Anonymous Hackers don't shut this thing down!",
  "Привет всем! Кто здесь из России? 🎶🇷🇺",
  "今晚的音乐节太疯狂了！💥🎉",
  " ¡Vamos a mover el esqueleto! 💃🕺",
  "La musique est la clé de mon cœur! 🎶❤️",
  "Feiern bis die Sonne aufgeht! 🎉☀️",
  " A batida brasileira está contagiante! 🥁🇧🇷",
  "Laten we de hele nacht dansen! 💃🕺",
  "음악으로 미쳐버릴 준비가 되셨나요? 🎶🇰🇷",
  "La musica è la nostra lingua comune! 🎵🇮🇹",
  "Svenska representanter, var är ni? 🇸🇪🎉",
  "Οι ρυθμοί είναι ανεξήγητα καλοί! 🥁🇬🇷",
  "Давайте разорвем танцпол! 💃🎵",
  "Polska Górą 🇵🇱",
  "Lietuva viršuje 🇱🇹",
  "žiauriai gera daina,todel jis ir yra geriausias Lietuvos dainyninkas💟",
  "Thank you for beautiful music :-) Best wishes from Norway :-)",
  "Nu nerealu!! Ačiū Egi!! Tu esi muzika!! woooooow!!🏆❤",
  "As busiu londone ir lauksiu Egidijaus koncerto rugseji🎉🎉🎉😊as busiu o2 arenoj!!! Iki pasimatymo❤❤❤❤",
  "Vienas iš geriausių šiuolaikinės muzikos atlikėjų.",
  "Ačiūū tau, už nuostabia daina! :))",
  "O Wau čia tai bent klausytis ir dar kartą klausytis norisi👍👍👍👍👍👍👍❤❤!Labai graži daina. SEL pirmyn tu pats geriausias🙏",
  "Ritmas pasaka....na nebūtų Sel...mašinoj ir aplamai limpa visur belekaip",
  "visai poh, galima klausyt, muzikai kazko truksta nera skambejimo :)",
  "Negaliu atsiklausyt...🤗♥️",
  "Pagaliau tiek laukiau ❤️❤️❤️",
  "Kada SEL concertas Portugalijoi? Mes labai ateinam  :-)",
  "Va čia tai gabaliukas 😍😍😍",
  "super 🔊🔊🔊",
  "laukiam, kada galesim nusipirkti bilietus i koncerta",
  "viskas cia labai gerai. Super Egi. o kam nepatinka neklausykit ir nekomentuokit",
  "Geriau uz visus radistus ir monikas :)))",
  "Prievartauju replay mygtuką  ;DD",
  "Spotify prasyciau",
  "I hope Brooks has been laying off the fluoride",
  "Somebody get a stool for Martin Garrix",
  "Can't wait for Avoure - Aura",
  "Skytech - Out Of My Mind",
  "Gdy R3HAB remixuje kawałki polaka to znaczy, że polska scena EDM ma się świetnie :D",
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
/* @ts-ignore */

function ChatTest({
  /* @ts-ignore */

  chats,
  /* @ts-ignore */

  setChats,
  /* @ts-ignore */

  userText,
  /* @ts-ignore */

  setUserText,
  /* @ts-ignore */

  buttonPressedAuto,
  /* @ts-ignore */

  setButtonPressedAuto,
  /* @ts-ignore */

  indexRef1,
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentNum, setCurrentNum] = useState<number>(0);
  // const [chats, setChats] = useState<{ username: string; chat: string }[]>([]);
  // const [userText, setUserText] = useState("");
  // const [buttonPressedAuto, setButtonPressedAuto] = useState(false);
  // const indexRef1 = useRef(0); // Use a useRef to store the mutable index value

  //      indexRef.current = (indexRef.current + 1) % gaugeArrNoise.length;

  useEffect(() => {
    const specificChats = [
      { user: "ANDy", chat: "  noise ON x8" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise ON x8" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise ON x8" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise ON x8" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise OFF" },
      { user: "ANDy", chat: "  noise ON" },
      { user: "ANDy", chat: "_" },
      { user: "ANDy", chat: "  noise ON x8" },

      {
        user: "Don Quixote 312",
        chat: "La virtud es más perseguida por los malvados que amada por los buenos. 2YgMjYgbnVtYmVycw==",
      },

      {
        user: "Don Quixote 312",
        chat: "No hubo abrazos, porque donde hay un gran amor muchas veces se muestra poco. QXJlIHlvdSByZWFkeSB0byByZWNlaXZlIHRoZSBtZXNzYWdlIG15",
      },

      {
        user: "Don Quixote 312",
        chat: "Un diente es mucho más valioso que un diamante. IHN0b3V0LCBsb3lhbCwgZG9ua2V5LXJpZGluZyBmcmllbmQ/IEdpdmUgbWUgYSBzdHJpbmcgb",
      },

      {
        user: "Don Quixote 312",
        chat: "¡Lo siento a todos! Mi gato encuentra consuelo en mi teclado.",
      },

      {
        user: "Sancho Panza",
        chat: "22561001740335412023200125",
      },

      {
        user: "Don Quixote 312",
        chat: "Espero que estén disfrutando de la música y la fiesta esta noche. 😃🎉",
      },

      {
        user: "Don Quixote 312",
        chat: "Hola a todos",
      },

      {
        user: "Don Quixote 312",
        chat: "Consta en buena música",
      },

      {
        user: "Don Quixote 312",
        chat: "Empleoy mi para DJ",
      },

      {
        user: "Don Quixote 312",
        chat: "Viento de la musica",
      },

      {
        user: "Don Quixote 312",
        chat: "Tiempo de fiesta",
      },

      {
        user: "Don Quixote 312",
        chat: "Wallflower es mi canción favorita",
      },

      {
        user: "Don Quixote 312",
        chat: "Palabras de buen humor",
      },

      {
        user: "Don Quixote 312",
        chat: "Frustras con esta música convencional",
      },

      {
        user: "Don Quixote 312",
        chat: "Salvar a las abejas",
      },

      {
        user: "Don Quixote 312",
        chat: "Guitarra rocas",
      },

      {
        user: "Don Quixote 312",
        chat: "Pero ¿dónde está la luz estroboscópica?",
      },

      {
        user: "Don Quixote 312",
        chat: "Oído están disfrutando",
      },

      {
        user: "Don Quixote 312",
        chat: "Cándido personalidad",
      },

      {
        user: "Don Quixote 312",
        chat: "Cómodo atmósfera",
      },

      {
        user: "Don Quixote 312",
        chat: "Casa de EDM",
      },

      {
        user: "Don Quixote 312",
        chat: "Hay tanta musica",
      },

      {
        user: "Don Quixote 312",
        chat: "Bailamos",
      },

      {
        user: "Don Quixote 312",
        chat: "Hay mucho que celebrar",
      },

      {
        user: "Don Quixote 312",
        chat: "Familia de musica",
      },

      {
        user: "Don Quixote 312",
        chat: "Mystica musica",
      },

      {
        user: "Don Quixote 312",
        chat: "Escuchemos",
      },

      {
        user: "Don Quixote 312",
        chat: "Cielo es el límite",
      },

      {
        user: "Don Quixote 312",
        chat: "Lugar de musica",
      },

      {
        user: "Don Quixote 312",
        chat: "Bebamos",
      },

      {
        user: "Don Quixote 312",
        chat: "Escuela de Rock",
      },

      {
        user: "Don Quixote 312",
        chat: "Eso es todo, ¡espero que lo hayas entendido!",
      },
    ];

    const interval = setInterval(() => {
      if (indexRef1.current < 62) {
        addChat(
          specificChats[indexRef1.current].user,
          specificChats[indexRef1.current].chat
        );
      } else if (indexRef1.current > 100 && indexRef1.current < 133) {
        addChat(
          specificChats[indexRef1.current - 39].user,
          specificChats[indexRef1.current - 39].chat
        );
      }

      if (indexRef1.current < 133) {
        indexRef1.current = indexRef1.current + 1;
        console.log("INDEX", indexRef1.current);
      }
    }, getRandomInt(2000, 5000));

    return () => clearInterval(interval);
  }, []);

  const addChat = (username: string, chat: string) => {
    /* @ts-ignore */

    setChats((oldChats) => [...oldChats, { username, chat }]);
    console.log("CHAT ADDED");
  };

  const onPress = () => {
    setButtonPressedAuto(!buttonPressedAuto);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedUser = usernames[getRandomInt(0, usernames.length)];
      const selectedChat = chatList[getRandomInt(0, chatList.length)];

      addChat(selectedUser, selectedChat);
    }, getRandomInt(1500, 6000));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userText) {
      addChat("MODERATOR", userText);
    }
    if (userText !== "") {
      setUserText("");
    }
  }, [userText]);

  // useEffect(() => {
  //   setChats((oldChats) => [...oldChats, currentNum]);
  // }, [currentNum]);

  useEffect(() => {
    if (!buttonPressedAuto) {
      scrollRef.current?.scrollIntoView({ block: "end" });
    }
  }, [chats]);

  return (
    <>
      <div
        className="padding-left: 1.25rem;
padding-right: 1.25rem;"
      >
        <div
          className="flex justify-center bg-green-600"
          style={{
            width: "35vw",
          }}
        >
          {" "}
          Live Chat
        </div>
        <div
          style={{
            overflowY: "scroll",
            height: "65vh",
            width: "35vw",
            display: "flex",
            flexDirection: "column",
          }}
          className="border-2 border-green-600 ambient-background-light"
        >
          {/* @ts-ignore */}

          {chats.map((chat, index) => (
            <span key={index}>
              {chat.username === "MODERATOR" ? (
                <span className="text-green-600"> MODERATOR 🔧</span>
              ) : (
                <span className="font-semibold"> {chat.username}</span>
              )}
              : {chat.chat}
            </span>
          ))}
          <div ref={scrollRef}></div>
        </div>
        <div
          className="border-2 border-green-600 ambient-background-light justify-center"
          style={{ width: "35vw", borderTop: 0 }}
        >
          <SongInput
            setText={setUserText}
            buttonName={"Send"}
            desc={"Send a chat message"}
            optionalButton={true}
            onPress={onPress}
          />
          <div className=" justify-self-end self-end">
            <button
              className={`rounded-full p-3 ${
                buttonPressedAuto
                  ? "bg-green-600 text-white"
                  : "bg-green-300 text-gray-700"
              }`}
              onClick={onPress}
            >
              {" "}
              Autoscroll Off{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatTest;
