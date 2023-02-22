/* eslint sort-keys: ["error", "asc"] */
const en: BaseTranslation = {
  copyToken: {
    copied: "Kopierats!",
    copy: "Kopiera",
    hide: "Dölja",
    regenerate: "Regenerera",
    reveal: "Avslöja"
  },
  dashboard: {
    greeting: "Hej, {username:string}!",
    languages: "Språk",
    noData: {
      installPrompt: "<link>Installera ett av förlängning<link> för att börja visa din programmering.",
      title: "Inga programmeringsaktivitetsdata att visa."
    },
    noProjects: "Inga projekt",
    notLoggedIn: "Du är inte inloggad.",
    projects: "Projekt",
    projectsFilter: "Välj ett projektfilter",
    statistics: "Din statistik",
    timeFilters: {
      all: "Hela tiden",
      month: "Senaste 30 dagarna",
      week: "Senaste 7 dagarna"
    },
    timePerDay: "Tid per dag",
    timePerProject: "Tid per projekt",
    totalTime: "Total tid kodad under de senaste {days:number} dagarna: {totalTime:string}",
    unknownProject: "Okänd"
  },
  editProject: {
    projectName: "Projektnamn",
    save: "Spara",
    title: "Redigerar {projectName:string}"
  },
  error: "Error",
  extensions: {
    body: "Ladda ner Testaustime-förlängning för din favoritkodredigerare!",
    intellij: "Ladda Testaustime för IntelliJ",
    micro: "Ladda Testaustime för Micro",
    neovim: "Ladda Testaustime för Neovim",
    title: "Förlängningar",
    vscode: "Ladda Testaustime för Visual Studio Code"
  },
  footer: {
    authors: {
      core: "Ledande utvecklare",
      rest: " och bidragsgivare",
      suffix: "Av: "
    },
    copyright: "© {year:number} Testausserveri ry & bidragsgivare",
    license: "Licensierad under MIT-licensen.",
    source: "Källkod",
    supportedBy: "Stöds av Testausserveri ry"
  },
  friends: {
    add: "Lägga",
    addNewFriend: "Lägg till en ny vän",
    error: {
      alreadyFriends: "Du är redan vän med den här användaren",
      notFound: "Användaren hittades inte",
      unknownError: "Okänt fel."
    },
    errorRemovingFriend: "Fel när vännen skulle tas bort",
    friendCode: "Vänkod",
    friendCodeInvalid: "Vänkod måste börja med \"ttfc_\", och följas av 24 alfanumeriska tecken",
    friendCodeRequired: "Vänkod krävs",
    friendDashboardTitle: "Statistik för användare {username:string}",
    friendName: "Vännens namn",
    index: "Index",
    notLoggedIn: "Du är inte inloggad.",
    showDashboard: "Visa",
    timeCoded: "Tid kodad under de senaste {days:number} dagarna",
    unfriend: "Ta bort som vän",
    yourFriends: "Dina vänner"
  },
  leaderboards: {
    admin: "Admin",
    create: "Skapa",
    createNewLeaderboard: "Skapa en ny topplista",
    deleteLeaderboard: "Ta bort topplistan",
    demote: "Degradera",
    inviteCode: "Inbjudningskod",
    join: {
      alreadyMember: "Du är redan medlem på den här topplistan",
      genericError: "Det gick inte att gå med i topplistan",
      join: "Ansluta sig",
      leaderboardCode: "Koden för topplistan",
      leaderboardCodeInvalid:
        "Koden för topplistan måste börja med \"ttlic_\", och följas av 24 alfanumeriska tecken.",
      leaderboardCodeRequired: "Koden för topplistan krävs",
      notFound: "Topplistan hittades inte"
    },
    joinLeaderboard: "Gå med i en topplista",
    kick: "Kick",
    leaderboardCreateError: "Det gick inte att skapa topplistor",
    leaderboardExists: "Topplistan finns redan",
    leaderboards: "Topplistor",
    leaveLeaderboard: "Lämna topplistan",
    members: "Medlemmar",
    name: "Namn",
    notLoggedIn: "Du är inte inloggad.",
    position: "Befattning",
    promote: "Befordra",
    seeMore: "Se mer",
    timeCoded: "Total tid kodad under de senaste {days:number} dagar",
    topMember: "Toppmedlem",
    validation: {
      max: "Topplistans namn får vara högst {max:number} tecken långt",
      min: "Topplistans namn får vara minst {min:number} tecken långt",
      regex: "Topplistans namn får bara innehålla alfanumeriska tecken",
      required: "Topplistans namn krävs"
    },
    yourPosition: "Din position"
  },
  loginPage: {
    invalidCredentials: "Ogiltiga uppgifter",
    loginButton: "Logga in",
    password: "Lösenord",
    title: "Logga in",
    username: "Användarnamn",
    validation: {
      password: {
        required: "Lösenord krävs"
      },
      username: {
        required: "Användarnamn krävs"
      }
    }
  },
  mainPage: {
    download: "Ladda ner nu för din favoritredigerare",
    hero: "Det ultimata verktyget för att spåra tiden för dina kodningssessioner.\
    Visa världen hur dedikerad du är till dina projekt!"
  },
  navbar: {
    account: "Konto",
    dashboard: "Instrumentbräda",
    extensions: "Förlängningar",
    friends: "Friends",
    leaderboards: "Topplistor",
    logOut: "Logga ut",
    login: "Logga in",
    register: "Registrera",
    settings: "Inställningar"
  },
  profile: {
    account: {
      title: "Min konto"
    },
    accountVisibility: {
      description: "Om du gör ditt konto offentligt kan\
      andra söka efter din profil och din programmeringsstatistik blir offentlig.",
      makePrivate: "Gör mitt konto privat",
      makePublic: "Gör mitt konto offentligt",
      title: "Kontosynlighet för andra"
    },
    authenticationToken: {
      title: "Autentiseringstoken",
      tooltip: {
        install: "Få din förlängning härifrån!",
        label: "Denna token används för autentisering i din kodredigerare."
      }
    },
    changePassword: {
      confirm: {
        noMatch: "Nya lösenord måste matcha",
        required: "Lösenordsbekräftelse krävs"
      },
      new: {
        invalid: "Nya lösenordet är ogiltigt",
        required: "Nytt lösenord krävs",
        tooLong: "Lösenordet får inte vara mer än {max:number} tecken långt",
        tooShort: "Lösenordet måste vara minst {min:number} tecken långt"
      },
      newPassword: "Nya lösenord",
      newPasswordConfirm: "Bekräfta lösenord",
      old: {
        incorrect: "Gamla lösenordet är felaktigt",
        required: "Ett gammalt lösenord krävs",
        tooLong: "Lösenordet får inte vara mer än {max:number} tecken långt",
        tooShort: "Lösenordet måste vara minst {min:number} tecken långt"
      },
      oldPassword: "Gammalt lösenord",
      submit: "Ändra lösenord",
      success: {
        message: "Ditt lösenord har ändrats.",
        title: "Lösenordet ändras"
      },
      title: "Ändra lösenord"
    },
    friendCode: {
      title: "Vänkod",
      tooltip: "Denna kod används för att dela din data med dina vänner."
    },
    notLoggedIn: "Du är inte inloggad..",
    registrationTime: "Registration time: {registrationTime:string}",
    settings: {
      defaultDayRange: "Default day range",
      language: "Language",
      smoothCharts: "Smooth charts",
      title: "Settings"
    },
    title: "Min profil",
    username: "Användarnamn: {username:string}"
  },
  prompt: {
    cancel: "Cancel",
    confirmation: "Are you sure?",
    yes: "Yes"
  },
  registrationPage: {
    invalidCredentials: "Invalid credentials",
    password: "Password",
    passwordConfirm: "Confirm password",
    registerButton: "Register",
    username: "Användarnamn",
    validation: {
      password: {
        max: "Lösenordet får inte vara mer än {max:number} tecken långt",
        min: "Lösenordet måste vara minst {min:number} tecken långt",
        required: "Lösenord krävs"
      },
      passwordConfirm: {
        noMatch: "Lösenorden måste matcha",
        required: "Lösenordsbekräftelse krävs"
      },
      username: {
        max: "Användarnamn får inte vara mer än {max:number} tecken långt",
        min: "Användarnamn måste vara minst {min:number} tecken långt",
        regex: "Användarnamn får bara innehålla alfanumeriska tecken",
        required: "Användarnamn krävs"
      }
    }
  },
  theme: {
    dark: "Mörkt läge",
    light: "Ljusläge",
    toggle: "Växla färgtema"
  },
  unknownErrorOccurred: "Ett okänt fel uppstod."
};
