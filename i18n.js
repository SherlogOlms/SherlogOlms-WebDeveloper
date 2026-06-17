/* =====================================================================
   Module multilingue — Portfolio Sherlog Olms
   Langues : FR (défaut) · EN · DE · IT · NL
   À inclure dans chaque page :  <script src="i18n.js"></script>
   Le script injecte lui-même le sélecteur, le style et traduit le texte.
   ===================================================================== */
(function () {
  // ---- Dictionnaire : "texte FR" : { en, de, it, nl } ----
  var T = {
    // Navigation / commun
    "Services": { en: "Services", de: "Leistungen", it: "Servizi", nl: "Diensten" },
    "Projets": { en: "Projects", de: "Projekte", it: "Progetti", nl: "Projecten" },
    "À propos": { en: "About", de: "Über mich", it: "Chi sono", nl: "Over mij" },
    "Devis gratuit": { en: "Free quote", de: "Kostenloses Angebot", it: "Preventivo gratuito", nl: "Gratis offerte" },
    "Réalisations": { en: "Work", de: "Referenzen", it: "Realizzazioni", nl: "Realisaties" },
    "Accueil": { en: "Home", de: "Startseite", it: "Home", nl: "Home" },
    "Voir le site →": { en: "View site →", de: "Zur Website →", it: "Vedi il sito →", nl: "Bekijk site →" },
    "Voir le projet →": { en: "View project →", de: "Zum Projekt →", it: "Vedi il progetto →", nl: "Bekijk project →" },
    "Ouvrir l'app →": { en: "Open the app →", de: "App öffnen →", it: "Apri l'app →", nl: "Open de app →" },
    "← Retour aux catégories": { en: "← Back to categories", de: "← Zurück zu den Kategorien", it: "← Torna alle categorie", nl: "← Terug naar categorieën" },
    "· Sites web": { en: "· Websites", de: "· Websites", it: "· Siti web", nl: "· Websites" },
    "· Applications": { en: "· Applications", de: "· Anwendungen", it: "· Applicazioni", nl: "· Applicaties" },

    // Hero
    "Développeur web ·": { en: "Web developer ·", de: "Webentwickler ·", it: "Sviluppatore web ·", nl: "Webontwikkelaar ·" },
    "Des sites web modernes qui transforment vos visiteurs en": { en: "Modern websites that turn your visitors into", de: "Moderne Websites, die Ihre Besucher in", it: "Siti web moderni che trasformano i tuoi visitatori in", nl: "Moderne websites die van je bezoekers" },
    "clients": { en: "clients", de: "Kunden verwandeln", it: "clienti", nl: "klanten maken" },
    "Création, refonte et optimisation de sites rapides et soignés — plus des applications sur-mesure pour faire gagner du temps à votre entreprise.": { en: "Creation, redesign and optimisation of fast, polished websites — plus tailor-made applications to save your business time.", de: "Erstellung, Redesign und Optimierung schneller, gepflegter Websites — dazu massgeschneiderte Anwendungen, die Ihrem Unternehmen Zeit sparen.", it: "Creazione, restyling e ottimizzazione di siti veloci e curati — oltre ad applicazioni su misura per far risparmiare tempo alla tua azienda.", nl: "Creatie, herontwerp en optimalisatie van snelle, verzorgde websites — plus applicaties op maat die je bedrijf tijd besparen." },
    "Voir mes projets": { en: "View my projects", de: "Meine Projekte ansehen", it: "Vedi i miei progetti", nl: "Bekijk mijn projecten" },
    "Discuter de votre projet": { en: "Discuss your project", de: "Ihr Projekt besprechen", it: "Parla del tuo progetto", nl: "Bespreek je project" },
    "Réponse sous 24 h · Devis gratuit · Sites livrés clés en main": { en: "Reply within 24 h · Free quote · Turnkey websites", de: "Antwort in 24 Std. · Kostenloses Angebot · Schlüsselfertige Websites", it: "Risposta entro 24 h · Preventivo gratuito · Siti chiavi in mano", nl: "Antwoord binnen 24 u · Gratis offerte · Kant-en-klare websites" },

    // Services
    "Ce que je fais": { en: "What I do", de: "Was ich mache", it: "Cosa faccio", nl: "Wat ik doe" },
    "Mes services": { en: "My services", de: "Meine Leistungen", it: "I miei servizi", nl: "Mijn diensten" },
    "Du site vitrine à l'application sur-mesure, je vous accompagne de l'idée à la mise en ligne.": { en: "From showcase sites to tailor-made apps, I support you from idea to launch.", de: "Von der Visitenkarten-Website bis zur massgeschneiderten App begleite ich Sie von der Idee bis zum Launch.", it: "Dal sito vetrina all'app su misura, ti accompagno dall'idea alla messa online.", nl: "Van vitrinesite tot app op maat, ik begeleid je van idee tot lancering." },
    "Création de site": { en: "Website creation", de: "Website-Erstellung", it: "Creazione di siti", nl: "Website maken" },
    "Sites vitrines modernes, rapides et responsives, orientés conversion.": { en: "Modern, fast, responsive showcase sites built for conversion.", de: "Moderne, schnelle, responsive Visitenkarten-Websites, auf Conversion ausgelegt.", it: "Siti vetrina moderni, veloci e responsive, orientati alla conversione.", nl: "Moderne, snelle, responsieve vitrinesites gericht op conversie." },
    "Refonte": { en: "Redesign", de: "Redesign", it: "Restyling", nl: "Herontwerp" },
    "Je modernise votre site (design, mobile, vitesse) pour relancer son impact.": { en: "I modernise your site (design, mobile, speed) to boost its impact.", de: "Ich modernisiere Ihre Website (Design, Mobile, Tempo), um ihre Wirkung zu steigern.", it: "Modernizzo il tuo sito (design, mobile, velocità) per rilanciarne l'impatto.", nl: "Ik moderniseer je site (design, mobiel, snelheid) om de impact te vergroten." },
    "Optimisation & SEO": { en: "Optimisation & SEO", de: "Optimierung & SEO", it: "Ottimizzazione & SEO", nl: "Optimalisatie & SEO" },
    "Performances, référencement et accessibilité pour être trouvé.": { en: "Performance, SEO and accessibility so you get found.", de: "Performance, SEO und Barrierefreiheit, damit man Sie findet.", it: "Prestazioni, SEO e accessibilità per farti trovare.", nl: "Prestaties, SEO en toegankelijkheid zodat je gevonden wordt." },
    "Applications sur-mesure": { en: "Tailor-made applications", de: "Massgeschneiderte Anwendungen", it: "Applicazioni su misura", nl: "Applicaties op maat" },
    "Apps connectées (réservations, gestion…) pour automatiser votre quotidien.": { en: "Connected apps (bookings, management…) to automate your day-to-day.", de: "Vernetzte Apps (Buchungen, Verwaltung…) zur Automatisierung des Alltags.", it: "App connesse (prenotazioni, gestione…) per automatizzare la quotidianità.", nl: "Verbonden apps (reserveringen, beheer…) om je dagelijks werk te automatiseren." },
    "Maintenance": { en: "Maintenance", de: "Wartung", it: "Manutenzione", nl: "Onderhoud" },
    "Mises à jour, sauvegardes et évolutions pour un site impeccable.": { en: "Updates, backups and improvements for a flawless site.", de: "Updates, Backups und Weiterentwicklungen für eine makellose Website.", it: "Aggiornamenti, backup ed evoluzioni per un sito impeccabile.", nl: "Updates, back-ups en verbeteringen voor een vlekkeloze site." },
    "Conseil": { en: "Consulting", de: "Beratung", it: "Consulenza", nl: "Advies" },
    "Un accompagnement clair, sans jargon, pour les bons choix techniques.": { en: "Clear, jargon-free guidance for the right technical choices.", de: "Klare Beratung ohne Fachjargon für die richtigen technischen Entscheidungen.", it: "Un supporto chiaro, senza tecnicismi, per le scelte tecniche giuste.", nl: "Heldere begeleiding zonder jargon voor de juiste technische keuzes." },

    // Projets (catégories)
    "Mes projets": { en: "My projects", de: "Meine Projekte", it: "I miei progetti", nl: "Mijn projecten" },
    "Deux univers : des sites web pour commerces et des applications sur-mesure. Choisissez une catégorie.": { en: "Two worlds: websites for businesses and tailor-made applications. Choose a category.", de: "Zwei Welten: Websites für Unternehmen und massgeschneiderte Anwendungen. Wählen Sie eine Kategorie.", it: "Due mondi: siti web per attività e applicazioni su misura. Scegli una categoria.", nl: "Twee werelden: websites voor bedrijven en applicaties op maat. Kies een categorie." },
    "Sites web": { en: "Websites", de: "Websites", it: "Siti web", nl: "Websites" },
    "Maquettes de démonstration (restaurant, e-commerce, agence, fitness…) et un site client en ligne.": { en: "Demo mock-ups (restaurant, e-commerce, agency, fitness…) plus one live client site.", de: "Demo-Mockups (Restaurant, E-Commerce, Agentur, Fitness…) sowie eine Live-Kundenwebsite.", it: "Mockup dimostrativi (ristorante, e-commerce, agenzia, fitness…) e un sito cliente online.", nl: "Demo-mock-ups (restaurant, e-commerce, bureau, fitness…) plus één live klantsite." },
    "6 maquettes + 1 site": { en: "6 mock-ups + 1 site", de: "6 Mockups + 1 Website", it: "6 mockup + 1 sito", nl: "6 mock-ups + 1 site" },
    "Applications": { en: "Applications", de: "Anwendungen", it: "Applicazioni", nl: "Applicaties" },
    "Applications connectées et sur-mesure pour automatiser la gestion au quotidien.": { en: "Connected, tailor-made applications to automate day-to-day management.", de: "Vernetzte, massgeschneiderte Anwendungen zur Automatisierung des täglichen Managements.", it: "Applicazioni connesse e su misura per automatizzare la gestione quotidiana.", nl: "Verbonden applicaties op maat om het dagelijkse beheer te automatiseren." },
    "1 réalisation →": { en: "1 project →", de: "1 Referenz →", it: "1 realizzazione →", nl: "1 realisatie →" },

    // À propos
    "Développeur web passionné basé à": { en: "Passionate web developer based in", de: "Leidenschaftlicher Webentwickler mit Sitz in", it: "Sviluppatore web appassionato con sede a", nl: "Gepassioneerde webontwikkelaar gevestigd in" },
    ", je conçois des sites modernes avec une vraie attention au design, à la performance et à l'expérience utilisateur.": { en: ", I design modern websites with real care for design, performance and user experience.", de: ", ich gestalte moderne Websites mit echtem Augenmerk auf Design, Performance und Nutzererlebnis.", it: ", progetto siti moderni con vera attenzione al design, alle prestazioni e all'esperienza utente.", nl: ", ik ontwerp moderne websites met echte aandacht voor design, prestaties en gebruikerservaring." },
    "Mon objectif : vous livrer un site dont vous êtes fier et qui": { en: "My goal: deliver a site you're proud of and that", de: "Mein Ziel: eine Website, auf die Sie stolz sind und die", it: "Il mio obiettivo: consegnarti un sito di cui andare fiero e che", nl: "Mijn doel: een site waar je trots op bent en die" },
    "travaille pour vous": { en: "works for you", de: "für Sie arbeitet", it: "lavora per te", nl: "voor je werkt" },
    "— plus de visibilité, plus de clients, moins de temps perdu.": { en: "— more visibility, more clients, less time wasted.", de: "— mehr Sichtbarkeit, mehr Kunden, weniger verlorene Zeit.", it: "— più visibilità, più clienti, meno tempo perso.", nl: "— meer zichtbaarheid, meer klanten, minder verloren tijd." },
    "Délai de réponse": { en: "Response time", de: "Antwortzeit", it: "Tempo di risposta", nl: "Reactietijd" },
    "Sur-mesure": { en: "Tailor-made", de: "Massgeschneidert", it: "Su misura", nl: "Op maat" },
    "Le devis": { en: "The quote", de: "Das Angebot", it: "Il preventivo", nl: "De offerte" },
    "Design moderne, mobile-first et rapide": { en: "Modern, mobile-first and fast design", de: "Modernes, Mobile-First- und schnelles Design", it: "Design moderno, mobile-first e veloce", nl: "Modern, mobile-first en snel design" },
    "Référencement (SEO) soigné dès le départ": { en: "Careful SEO from the start", de: "Sorgfältiges SEO von Anfang an", it: "SEO curata fin dall'inizio", nl: "Zorgvuldige SEO vanaf het begin" },
    "Applications connectées sur-mesure": { en: "Connected, tailor-made applications", de: "Vernetzte, massgeschneiderte Anwendungen", it: "Applicazioni connesse su misura", nl: "Verbonden applicaties op maat" },
    "Accompagnement clair, sans jargon": { en: "Clear guidance, no jargon", de: "Klare Beratung, ohne Fachjargon", it: "Supporto chiaro, senza tecnicismi", nl: "Heldere begeleiding, zonder jargon" },
    "Livraison clés en main": { en: "Turnkey delivery", de: "Schlüsselfertige Lieferung", it: "Consegna chiavi in mano", nl: "Kant-en-klare oplevering" },

    // Contact
    "Un projet en tête ? Discutons-en.": { en: "Got a project in mind? Let's talk.", de: "Ein Projekt im Kopf? Sprechen wir darüber.", it: "Hai un progetto in mente? Parliamone.", nl: "Een project in gedachten? Laten we praten." },
    "Parlez-moi de votre activité, je vous réponds sous 24 h avec une proposition claire et un devis gratuit.": { en: "Tell me about your business; I'll reply within 24 h with a clear proposal and a free quote.", de: "Erzählen Sie mir von Ihrem Geschäft; ich antworte innerhalb von 24 Std. mit einem klaren Vorschlag und kostenlosem Angebot.", it: "Parlami della tua attività; ti rispondo entro 24 h con una proposta chiara e un preventivo gratuito.", nl: "Vertel me over je activiteit; ik antwoord binnen 24 u met een helder voorstel en een gratis offerte." },
    "Envoyer un e-mail": { en: "Send an e-mail", de: "E-Mail senden", it: "Invia un'e-mail", nl: "Stuur een e-mail" },
    "· Développeur web · Sion, Valais · sherlogolms.wd@gmail.com": { en: "· Web developer · Sion, Valais · sherlogolms.wd@gmail.com", de: "· Webentwickler · Sion, Wallis · sherlogolms.wd@gmail.com", it: "· Sviluppatore web · Sion, Vallese · sherlogolms.wd@gmail.com", nl: "· Webontwikkelaar · Sion, Valais · sherlogolms.wd@gmail.com" },

    // Pages catégories — en-têtes
    "Des sites vitrines modernes, multilingues (FR/EN/DE/IT/ES/PT) et optimisés mobile, classés par type d'établissement.": { en: "Modern, multilingual (FR/EN/DE/IT/ES/PT), mobile-optimised showcase sites, sorted by business type.", de: "Moderne, mehrsprachige (FR/EN/DE/IT/ES/PT), mobil-optimierte Visitenkarten-Websites, nach Branche sortiert.", it: "Siti vetrina moderni, multilingue (FR/EN/DE/IT/ES/PT) e ottimizzati per mobile, ordinati per tipo di attività.", nl: "Moderne, meertalige (FR/EN/DE/IT/ES/PT), mobiel-geoptimaliseerde vitrinesites, gesorteerd per type bedrijf." },
    "Des applications web connectées et sur-mesure, pensées pour automatiser la gestion au quotidien.": { en: "Connected, tailor-made web apps designed to automate day-to-day management.", de: "Vernetzte, massgeschneiderte Web-Apps zur Automatisierung des täglichen Managements.", it: "App web connesse e su misura, pensate per automatizzare la gestione quotidiana.", nl: "Verbonden web-apps op maat, ontworpen om het dagelijkse beheer te automatiseren." },

    // typ-head
    "Restauration": { en: "Dining", de: "Gastronomie", it: "Ristorazione", nl: "Horeca" },
    "Restaurants": { en: "Restaurants", de: "Restaurants", it: "Ristoranti", nl: "Restaurants" },
    "Coiffure": { en: "Hair", de: "Friseur", it: "Parrucchieri", nl: "Kapsalon" },
    "Salons de coiffure": { en: "Hair salons", de: "Friseursalons", it: "Saloni di parrucchiere", nl: "Kapsalons" },
    "Esthétique": { en: "Beauty", de: "Kosmetik", it: "Estetica", nl: "Schoonheid" },
    "Instituts de beauté": { en: "Beauty institutes", de: "Kosmetikinstitute", it: "Istituti di bellezza", nl: "Schoonheidsinstituten" },
    "Bar": { en: "Bar", de: "Bar", it: "Bar", nl: "Bar" },
    "Bars": { en: "Bars", de: "Bars", it: "Bar", nl: "Bars" },
    "Photographie": { en: "Photography", de: "Fotografie", it: "Fotografia", nl: "Fotografie" },
    "Gestion de salle & réservation": { en: "Floor management & booking", de: "Saalverwaltung & Reservierung", it: "Gestione sala & prenotazioni", nl: "Zaalbeheer & reserveren" },

    // Tags
    "Restaurant": { en: "Restaurant", de: "Restaurant", it: "Ristorante", nl: "Restaurant" },
    "Gastronomie": { en: "Fine dining", de: "Gourmet", it: "Gastronomia", nl: "Fijnproeven" },
    "Multilingue": { en: "Multilingual", de: "Mehrsprachig", it: "Multilingue", nl: "Meertalig" },
    "Salon": { en: "Salon", de: "Salon", it: "Salone", nl: "Salon" },
    "Éco-responsable": { en: "Eco-friendly", de: "Nachhaltig", it: "Eco-responsabile", nl: "Milieubewust" },
    "Visagisme": { en: "Face-framing", de: "Visagistik", it: "Visagismo", nl: "Visagie" },
    "Centre-ville": { en: "City centre", de: "Stadtzentrum", it: "Centro città", nl: "Stadscentrum" },
    "Sion & Conthey": { en: "Sion & Conthey", de: "Sion & Conthey", it: "Sion & Conthey", nl: "Sion & Conthey" },
    "Portfolio": { en: "Portfolio", de: "Portfolio", it: "Portfolio", nl: "Portfolio" },
    "Galerie": { en: "Gallery", de: "Galerie", it: "Galleria", nl: "Galerij" },
    "Application": { en: "Application", de: "Anwendung", it: "Applicazione", nl: "Applicatie" },
    "Temps réel": { en: "Real-time", de: "Echtzeit", it: "Tempo reale", nl: "Realtime" },
    "Apéro": { en: "Aperitivo", de: "Apéro", it: "Aperitivo", nl: "Aperitief" },

    // Cartes projets — titres & descriptions
    "La Sitterie — terroir": { en: "La Sitterie — terroir", de: "La Sitterie — Terroir", it: "La Sitterie — terroir", nl: "La Sitterie — terroir" },
    "Akimbo Coiffure": { en: "Akimbo Coiffure", de: "Akimbo Coiffure", it: "Akimbo Coiffure", nl: "Akimbo Coiffure" },
    "JR Coiffure — visagisme": { en: "JR Coiffure — face-framing", de: "JR Coiffure — Visagistik", it: "JR Coiffure — visagismo", nl: "JR Coiffure — visagie" },
    "Institut de Valère": { en: "Institut de Valère", de: "Institut de Valère", it: "Institut de Valère", nl: "Institut de Valère" },
    "Institut de Beauté Caroline": { en: "Institut de Beauté Caroline", de: "Institut de Beauté Caroline", it: "Institut de Beauté Caroline", nl: "Institut de Beauté Caroline" },
    "Institut Fraya Beauté": { en: "Institut Fraya Beauté", de: "Institut Fraya Beauté", it: "Institut Fraya Beauté", nl: "Institut Fraya Beauté" },
    "Institut Éclat Jeunesse": { en: "Institut Éclat Jeunesse", de: "Institut Éclat Jeunesse", it: "Institut Éclat Jeunesse", nl: "Institut Éclat Jeunesse" },
    "Annie Institut": { en: "Annie Institut", de: "Annie Institut", it: "Annie Institut", nl: "Annie Institut" },
    "Mille Frames — photographe": { en: "Mille Frames — photographer", de: "Mille Frames — Fotograf", it: "Mille Frames — fotografo", nl: "Mille Frames — fotograaf" },
    "App de gestion sur-mesure": { en: "Tailor-made management app", de: "Massgeschneiderte Management-App", it: "App di gestione su misura", nl: "Beheer-app op maat" },

    "Restaurant valaisan au Grand-Pont : fondues, raclette, pierre chaude, galerie et réservation en ligne.": { en: "Valais restaurant on the Grand-Pont: fondues, raclette, hot-stone, gallery and online booking.", de: "Walliser Restaurant am Grand-Pont: Fondues, Raclette, heisser Stein, Galerie und Online-Reservierung.", it: "Ristorante vallesano sul Grand-Pont: fondute, raclette, pietra calda, galleria e prenotazione online.", nl: "Walliser restaurant aan de Grand-Pont: fondues, raclette, hete steen, galerij en online reserveren." },
    "Restaurant gastronomique : cuisine de montagne et de terroir, carte estivale et réservation.": { en: "Fine-dining restaurant: mountain and terroir cuisine, summer menu and booking.", de: "Gourmetrestaurant: Berg- und Terroirküche, Sommerkarte und Reservierung.", it: "Ristorante gastronomico: cucina di montagna e di territorio, menù estivo e prenotazione.", nl: "Gastronomisch restaurant: berg- en streekkeuken, zomermenu en reserveren." },
    "Salon éco-responsable à Sion : coloration végétale, prestations et prise de rendez-vous.": { en: "Eco-friendly salon in Sion: plant-based colour, services and online booking.", de: "Nachhaltiger Salon in Sion: Pflanzenfarbe, Leistungen und Terminbuchung.", it: "Salone eco-responsabile a Sion: colore vegetale, servizi e prenotazione.", nl: "Milieubewust salon in Sion: plantaardige kleuring, diensten en afspraken." },
    "Salon de coiffure et visagisme à Sion : prestations, équipe et coiffure de mariage.": { en: "Hair salon and face-framing in Sion: services, team and bridal hair.", de: "Friseursalon und Visagistik in Sion: Leistungen, Team und Brautfrisuren.", it: "Salone di parrucchiere e visagismo a Sion: servizi, team e acconciature da sposa.", nl: "Kapsalon en visagie in Sion: diensten, team en bruidskapsels." },
    "Institut de beauté : maquillage permanent, dermopigmentation et soins esthétiques.": { en: "Beauty institute: permanent make-up, dermopigmentation and beauty treatments.", de: "Kosmetikinstitut: Permanent Make-up, Dermopigmentierung und Kosmetikbehandlungen.", it: "Istituto di bellezza: trucco permanente, dermopigmentazione e trattamenti estetici.", nl: "Schoonheidsinstituut: permanente make-up, dermopigmentatie en schoonheidsbehandelingen." },
    "Institut de beauté à Sion : soins du visage et du corps dans un univers moderne.": { en: "Beauty institute in Sion: face and body treatments in a modern setting.", de: "Kosmetikinstitut in Sion: Gesichts- und Körperbehandlungen in modernem Ambiente.", it: "Istituto di bellezza a Sion: trattamenti viso e corpo in un ambiente moderno.", nl: "Schoonheidsinstituut in Sion: gezichts- en lichaamsbehandelingen in een moderne sfeer." },
    "Institut de beauté à Sion : soins esthétiques pour femmes et hommes.": { en: "Beauty institute in Sion: treatments for women and men.", de: "Kosmetikinstitut in Sion: Behandlungen für Frauen und Männer.", it: "Istituto di bellezza a Sion: trattamenti per donne e uomini.", nl: "Schoonheidsinstituut in Sion: behandelingen voor vrouwen en mannen." },
    "Institut de beauté au cœur de Sion : soins du visage, du corps et mises en beauté.": { en: "Beauty institute in the heart of Sion: face, body and beauty treatments.", de: "Kosmetikinstitut im Herzen von Sion: Gesichts-, Körper- und Beauty-Behandlungen.", it: "Istituto di bellezza nel cuore di Sion: trattamenti viso, corpo e make-up.", nl: "Schoonheidsinstituut in het hart van Sion: gezichts-, lichaams- en beautybehandelingen." },
    "Institut de beauté à Sion : soins anti-âge et de bien-être.": { en: "Beauty institute in Sion: anti-ageing and wellness treatments.", de: "Kosmetikinstitut in Sion: Anti-Aging- und Wellness-Behandlungen.", it: "Istituto di bellezza a Sion: trattamenti anti-age e benessere.", nl: "Schoonheidsinstituut in Sion: anti-aging- en wellnessbehandelingen." },
    "Institut de beauté (Sion & Conthey) : soins esthétiques personnalisés.": { en: "Beauty institute (Sion & Conthey): personalised treatments.", de: "Kosmetikinstitut (Sion & Conthey): individuelle Behandlungen.", it: "Istituto di bellezza (Sion & Conthey): trattamenti personalizzati.", nl: "Schoonheidsinstituut (Sion & Conthey): persoonlijke behandelingen." },
    "Bar d'ambiance à Sion : cocktails aux sirops valaisans, vignerons du Valais et planches à partager.": { en: "Ambiance bar in Sion: cocktails with Valais syrups, Valais winemakers and sharing boards.", de: "Szene-Bar in Sion: Cocktails mit Walliser Sirupen, Walliser Winzer und Platten zum Teilen.", it: "Bar d'atmosfera a Sion: cocktail con sciroppi vallesani, vignaioli del Vallese e taglieri da condividere.", nl: "Sfeerbar in Sion: cocktails met Walliser siropen, Walliser wijnboeren en deelplanken." },
    "Site portfolio pour photographe : galerie interactive et expérience optimisée sur mobile.": { en: "Portfolio site for a photographer: interactive gallery and mobile-optimised experience.", de: "Portfolio-Website für einen Fotografen: interaktive Galerie und mobil optimiertes Erlebnis.", it: "Sito portfolio per fotografo: galleria interattiva ed esperienza ottimizzata per mobile.", nl: "Portfoliosite voor fotograaf: interactieve galerij en mobiel-geoptimaliseerde ervaring." },
    "Réservations midi/soir, liste d'attente walk-in, gestion des tables et disponibilité en temps réel — synchronisée avec le site du restaurant.": { en: "Lunch/dinner bookings, walk-in waitlist, table management and real-time availability — synced with the restaurant's website.", de: "Mittag-/Abendreservierungen, Walk-in-Warteliste, Tischverwaltung und Echtzeit-Verfügbarkeit — synchronisiert mit der Restaurant-Website.", it: "Prenotazioni pranzo/cena, lista d'attesa walk-in, gestione tavoli e disponibilità in tempo reale — sincronizzata con il sito del ristorante.", nl: "Lunch-/dinerreserveringen, walk-in wachtlijst, tafelbeheer en realtime beschikbaarheid — gesynchroniseerd met de website van het restaurant." },

    // ===== Page sites — sous-titre & blocs =====
    "Des sites vitrines modernes, multilingues (FR/EN/DE/IT/ES/PT) et optimisés mobile. Deux catégories : des sites réellement réalisés pour des clients, et des maquettes de démonstration pour illustrer différents styles.": { en: "Modern, multilingual (FR/EN/DE/IT/ES/PT), mobile-optimised showcase sites. Two categories: sites actually built for clients, and demo mock-ups to illustrate different styles.", de: "Moderne, mehrsprachige (FR/EN/DE/IT/ES/PT), mobil-optimierte Visitenkarten-Websites. Zwei Kategorien: tatsächlich für Kunden realisierte Websites und Demo-Mockups, die verschiedene Stile zeigen.", it: "Siti vetrina moderni, multilingue (FR/EN/DE/IT/ES/PT) e ottimizzati per mobile. Due categorie: siti realmente realizzati per clienti e mockup dimostrativi per illustrare stili diversi.", nl: "Moderne, meertalige (FR/EN/DE/IT/ES/PT), mobiel-geoptimaliseerde vitrinesites. Twee categorieën: sites die echt voor klanten zijn gemaakt, en demo-mock-ups om verschillende stijlen te tonen." },
    "En ligne": { en: "Online", de: "Online", it: "Online", nl: "Online" },
    "Réalisations clients": { en: "Client work", de: "Kundenprojekte", it: "Lavori per clienti", nl: "Klantprojecten" },
    "Un site réellement conçu, livré et mis en ligne pour un client.": { en: "One site genuinely designed, delivered and put online for a client.", de: "Eine Website, die tatsächlich für einen Kunden gestaltet, geliefert und online gestellt wurde.", it: "Un sito realmente progettato, consegnato e messo online per un cliente.", nl: "Eén site die echt voor een klant is ontworpen, opgeleverd en online gezet." },
    "Maquettes": { en: "Mock-ups", de: "Mockups", it: "Mockup", nl: "Mock-ups" },
    "Maquettes de démonstration": { en: "Demo mock-ups", de: "Demo-Mockups", it: "Mockup dimostrativi", nl: "Demo-mock-ups" },
    "Des concepts fictifs (marques inventées) créés pour illustrer différents styles et secteurs. Parfaits pour visualiser ce qui est possible avant de lancer votre projet.": { en: "Fictional concepts (invented brands) created to illustrate different styles and sectors. Perfect for picturing what's possible before launching your project.", de: "Fiktive Konzepte (erfundene Marken), die verschiedene Stile und Branchen zeigen. Ideal, um sich vor dem Projektstart vorzustellen, was möglich ist.", it: "Concept fittizi (marchi inventati) creati per illustrare stili e settori diversi. Perfetti per immaginare cosa è possibile prima di avviare il tuo progetto.", nl: "Fictieve concepten (verzonnen merken) om verschillende stijlen en sectoren te tonen. Ideaal om te zien wat mogelijk is voordat je je project start." },
    "Concepts": { en: "Concepts", de: "Konzepte", it: "Concept", nl: "Concepten" },
    "Sites concepts": { en: "Concept sites", de: "Konzept-Websites", it: "Siti concept", nl: "Conceptsites" },
    "Avant / Après": { en: "Before / After", de: "Vorher / Nachher", it: "Prima / Dopo", nl: "Voor / Na" },
    "Voir la maquette →": { en: "View mock-up →", de: "Mockup ansehen →", it: "Vedi il mockup →", nl: "Bekijk mock-up →" },

    // ===== Tags maquettes =====
    "Concept": { en: "Concept", de: "Konzept", it: "Concept", nl: "Concept" },
    "SaaS": { en: "SaaS", de: "SaaS", it: "SaaS", nl: "SaaS" },
    "Dashboard": { en: "Dashboard", de: "Dashboard", it: "Dashboard", nl: "Dashboard" },
    "App fitness": { en: "Fitness app", de: "Fitness-App", it: "App fitness", nl: "Fitness-app" },
    "Landing": { en: "Landing", de: "Landing", it: "Landing", nl: "Landing" },
    "E-commerce": { en: "E-commerce", de: "E-Commerce", it: "E-commerce", nl: "E-commerce" },
    "Boutique": { en: "Shop", de: "Shop", it: "Negozio", nl: "Webshop" },
    "Agence": { en: "Agency", de: "Agentur", it: "Agenzia", nl: "Bureau" },
    "Branding": { en: "Branding", de: "Branding", it: "Branding", nl: "Branding" },
    "Élégant": { en: "Elegant", de: "Elegant", it: "Elegante", nl: "Elegant" },
    "Avant": { en: "Before", de: "Vorher", it: "Prima", nl: "Voor" },
    "Après": { en: "After", de: "Nachher", it: "Dopo", nl: "Na" },
    "Café": { en: "Coffee", de: "Kaffee", it: "Caffè", nl: "Koffie" },

    // ===== Cartes maquettes — titres =====
    "Nuvora — SaaS analytique": { en: "Nuvora — analytics SaaS", de: "Nuvora — Analytics-SaaS", it: "Nuvora — SaaS di analytics", nl: "Nuvora — analytics-SaaS" },
    "Kintora — app fitness": { en: "Kintora — fitness app", de: "Kintora — Fitness-App", it: "Kintora — app fitness", nl: "Kintora — fitness-app" },
    "Velora — boutique de sneakers": { en: "Velora — sneaker shop", de: "Velora — Sneaker-Shop", it: "Velora — negozio di sneaker", nl: "Velora — sneakerwinkel" },
    "Studio Mirage — agence créative": { en: "Studio Mirage — creative agency", de: "Studio Mirage — Kreativagentur", it: "Studio Mirage — agenzia creativa", nl: "Studio Mirage — creatief bureau" },
    "Osteria Lumina — restaurant italien": { en: "Osteria Lumina — Italian restaurant", de: "Osteria Lumina — italienisches Restaurant", it: "Osteria Lumina — ristorante italiano", nl: "Osteria Lumina — Italiaans restaurant" },
    "Saint-Cyr — l'ancienne version": { en: "Saint-Cyr — the old version", de: "Saint-Cyr — die alte Version", it: "Saint-Cyr — la vecchia versione", nl: "Saint-Cyr — de oude versie" },
    "Saint-Cyr — la refonte moderne": { en: "Saint-Cyr — the modern redesign", de: "Saint-Cyr — das moderne Redesign", it: "Saint-Cyr — il restyling moderno", nl: "Saint-Cyr — het moderne herontwerp" },

    // ===== Cartes maquettes — descriptions =====
    "Concept d'application d'analytique produit : thème sombre, tableau de bord animé et micro-interactions.": { en: "Product-analytics app concept: dark theme, animated dashboard and micro-interactions.", de: "Konzept einer Produkt-Analytics-App: dunkles Theme, animiertes Dashboard und Mikrointeraktionen.", it: "Concept di app di analytics di prodotto: tema scuro, dashboard animata e micro-interazioni.", nl: "Concept voor een product-analytics-app: donker thema, geanimeerd dashboard en micro-interacties." },
    "Landing d'application de coaching sportif : mockup de téléphone animé, fonctions et tarifs.": { en: "Fitness-coaching app landing: animated phone mock-up, features and pricing.", de: "Landingpage einer Fitness-Coaching-App: animiertes Telefon-Mockup, Funktionen und Preise.", it: "Landing di un'app di coaching sportivo: mockup di telefono animato, funzioni e prezzi.", nl: "Landingspagina van een fitnesscoaching-app: geanimeerde telefoon-mock-up, functies en prijzen." },
    "Concept e-commerce : bandeau promo, grille produits, panier et animations de cartes.": { en: "E-commerce concept: promo banner, product grid, cart and card animations.", de: "E-Commerce-Konzept: Promo-Banner, Produktraster, Warenkorb und Kartenanimationen.", it: "Concept e-commerce: banner promo, griglia prodotti, carrello e animazioni delle card.", nl: "E-commerce-concept: promobanner, productraster, winkelwagen en kaartanimaties." },
    "Concept d'agence de branding : typographie XXL, dégradés, survols animés et grille de projets.": { en: "Branding-agency concept: XXL typography, gradients, animated hovers and project grid.", de: "Branding-Agentur-Konzept: XXL-Typografie, Verläufe, animierte Hover und Projektraster.", it: "Concept di agenzia di branding: tipografia XXL, gradienti, hover animati e griglia di progetti.", nl: "Concept voor een brandingbureau: XXL-typografie, gradiënten, geanimeerde hovers en projectraster." },
    "Concept de restaurant : ambiance sombre et dorée, carte élégante et réservation.": { en: "Restaurant concept: dark and golden atmosphere, elegant menu and booking.", de: "Restaurant-Konzept: dunkle, goldene Atmosphäre, elegante Karte und Reservierung.", it: "Concept di ristorante: atmosfera scura e dorata, menù elegante e prenotazione.", nl: "Restaurantconcept: donkere en gouden sfeer, elegant menu en reserveren." },
    "Un site volontairement dépassé (style années 2000) qui sert de point de départ à la refonte.": { en: "A deliberately outdated site (early-2000s style) used as the starting point for the redesign.", de: "Eine bewusst veraltete Website (Stil der frühen 2000er) als Ausgangspunkt für das Redesign.", it: "Un sito volutamente datato (stile anni 2000) usato come punto di partenza per il restyling.", nl: "Een bewust verouderde site (stijl begin jaren 2000) als startpunt voor het herontwerp." },
    "La même enseigne, repensée : design chaleureux, mobile-first, carte et réservation.": { en: "The same brand, reimagined: warm design, mobile-first, menu and booking.", de: "Dieselbe Marke, neu gedacht: warmes Design, Mobile-First, Karte und Reservierung.", it: "La stessa insegna, ripensata: design caldo, mobile-first, menù e prenotazione.", nl: "Hetzelfde merk, opnieuw bedacht: warm design, mobile-first, menu en reserveren." },

    // ===== Page applications — maquettes =====
    "Des applications web connectées et sur-mesure, pensées pour automatiser la gestion au quotidien. Voici des maquettes de démonstration qui illustrent ce qu'il est possible de construire.": { en: "Connected, tailor-made web apps designed to automate day-to-day management. Here are demo mock-ups showing what can be built.", de: "Vernetzte, massgeschneiderte Web-Apps zur Automatisierung des täglichen Managements. Hier einige Demo-Mockups, die zeigen, was möglich ist.", it: "App web connesse e su misura per automatizzare la gestione quotidiana. Ecco alcuni mockup dimostrativi di ciò che si può realizzare.", nl: "Verbonden web-apps op maat om het dagelijkse beheer te automatiseren. Hier enkele demo-mock-ups van wat mogelijk is." },
    "Des concepts d'applications fictives (marques inventées) créés pour illustrer différents usages métier. Chaque app peut être conçue sur-mesure pour votre activité.": { en: "Fictional app concepts (invented brands) created to illustrate different business uses. Each app can be tailor-made for your activity.", de: "Fiktive App-Konzepte (erfundene Marken), die verschiedene geschäftliche Anwendungen zeigen. Jede App kann massgeschneidert für Ihre Tätigkeit gebaut werden.", it: "Concept di app fittizie (marchi inventati) per illustrare diversi usi aziendali. Ogni app può essere realizzata su misura per la tua attività.", nl: "Fictieve app-concepten (verzonnen merken) om verschillende zakelijke toepassingen te tonen. Elke app kan op maat voor je activiteit worden gebouwd." },
    "Applications concepts": { en: "Concept apps", de: "Konzept-Apps", it: "App concept", nl: "Concept-apps" },
    "3 maquettes": { en: "3 mock-ups", de: "3 Mockups", it: "3 mockup", nl: "3 mock-ups" },
    "Facturation": { en: "Invoicing", de: "Rechnungen", it: "Fatturazione", nl: "Facturatie" },
    "Indépendants": { en: "Freelancers", de: "Selbstständige", it: "Liberi professionisti", nl: "Zelfstandigen" },
    "Planning": { en: "Scheduling", de: "Dienstplan", it: "Pianificazione", nl: "Planning" },
    "Équipe": { en: "Team", de: "Team", it: "Team", nl: "Team" },
    "Factura — devis & factures": { en: "Factura — quotes & invoices", de: "Factura — Angebote & Rechnungen", it: "Factura — preventivi e fatture", nl: "Factura — offertes & facturen" },
    "Shifty — planning d'équipe": { en: "Shifty — team scheduling", de: "Shifty — Dienstplanung", it: "Shifty — pianificazione del team", nl: "Shifty — teamplanning" },
    "Concept d'outil de facturation pour indépendants et artisans : devis en 2 minutes, relances automatiques et paiement en ligne.": { en: "Invoicing-tool concept for freelancers and tradespeople: quotes in 2 minutes, automatic reminders and online payment.", de: "Konzept eines Rechnungstools für Selbstständige und Handwerker: Angebote in 2 Minuten, automatische Erinnerungen und Online-Zahlung.", it: "Concept di strumento di fatturazione per liberi professionisti e artigiani: preventivi in 2 minuti, solleciti automatici e pagamento online.", nl: "Facturatietool-concept voor zelfstandigen en vaklieden: offertes in 2 minuten, automatische herinneringen en online betalen." },
    "Concept de gestion des horaires pour commerces et restaurants : planning glisser-déposer, alertes de couverture et horaires sur mobile.": { en: "Scheduling concept for shops and restaurants: drag-and-drop planning, coverage alerts and mobile schedules.", de: "Dienstplan-Konzept für Geschäfte und Restaurants: Drag-and-drop-Planung, Abdeckungswarnungen und Dienstpläne aufs Handy.", it: "Concept di gestione orari per negozi e ristoranti: pianificazione drag-and-drop, avvisi di copertura e orari su mobile.", nl: "Roosterconcept voor winkels en restaurants: drag-and-drop-planning, dekkingswaarschuwingen en roosters op mobiel." },
    "Menu QR": { en: "QR menu", de: "QR-Menü", it: "Menu QR", nl: "QR-menu" },
    "Ardoise — menu digital QR": { en: "Ardoise — digital QR menu", de: "Ardoise — digitale QR-Karte", it: "Ardoise — menu digitale QR", nl: "Ardoise — digitaal QR-menu" },
    "Concept de carte digitale par QR code pour restaurants et bars : photos, allergènes et mise à jour en temps réel.": { en: "Digital QR-code menu concept for restaurants and bars: photos, allergens and real-time updates.", de: "Konzept einer digitalen QR-Code-Karte für Restaurants und Bars: Fotos, Allergene und Echtzeit-Updates.", it: "Concept di menu digitale tramite QR code per ristoranti e bar: foto, allergeni e aggiornamenti in tempo reale.", nl: "Digitaal QR-menu-concept voor restaurants en bars: foto's, allergenen en realtime updates." },
    "Démo": { en: "Demo", de: "Demo", it: "Demo", nl: "Demo" },
    "PWA": { en: "PWA", de: "PWA", it: "PWA", nl: "PWA" },
    "Rendez-vous": { en: "Booking", de: "Termine", it: "Appuntamenti", nl: "Afspraken" },
    "Fidélité": { en: "Loyalty", de: "Treue", it: "Fedeltà", nl: "Loyaliteit" },
    "Mobile": { en: "Mobile", de: "Mobil", it: "Mobile", nl: "Mobiel" },
    "Gestion": { en: "Management", de: "Verwaltung", it: "Gestione", nl: "Beheer" },
    "Planéo — prise de rendez-vous": { en: "Planéo — appointment booking", de: "Planéo — Terminbuchung", it: "Planéo — prenotazione appuntamenti", nl: "Planéo — afspraken boeken" },
    "Fidélo — carte de fidélité": { en: "Fidélo — loyalty card", de: "Fidélo — Treuekarte", it: "Fidélo — carta fedeltà", nl: "Fidélo — loyaliteitskaart" },
    "Stockly — gestion de stock": { en: "Stockly — stock management", de: "Stockly — Lagerverwaltung", it: "Stockly — gestione del magazzino", nl: "Stockly — voorraadbeheer" },
    "Concept d'agenda en ligne pour salons et instituts : réservation 24/7, rappels automatiques et fiche client.": { en: "Online booking concept for salons and institutes: 24/7 booking, automatic reminders and client records.", de: "Online-Terminkonzept für Salons und Institute: Buchung rund um die Uhr, automatische Erinnerungen und Kundenkartei.", it: "Concept di agenda online per saloni e istituti: prenotazione 24/7, promemoria automatici e scheda cliente.", nl: "Online boekingsconcept voor salons en instituten: 24/7 boeken, automatische herinneringen en klantfiche." },
    "Concept de fidélité digitale pour commerces : points, récompenses, scan en caisse et tableau de bord commerçant.": { en: "Digital loyalty concept for shops: points, rewards, checkout scan and merchant dashboard.", de: "Digitales Treuekonzept für Geschäfte: Punkte, Prämien, Kassen-Scan und Händler-Dashboard.", it: "Concept di fedeltà digitale per negozi: punti, premi, scansione alla cassa e dashboard commerciante.", nl: "Digitaal loyaliteitsconcept voor winkels: punten, beloningen, kassascan en handelaarsdashboard." },
    "Concept de suivi de stock pour commerces et restaurants : alertes de rupture, mouvements et commandes fournisseurs.": { en: "Stock-tracking concept for shops and restaurants: out-of-stock alerts, movements and supplier orders.", de: "Lagerkonzept für Geschäfte und Restaurants: Warnungen bei Ausverkauf, Bewegungen und Lieferantenbestellungen.", it: "Concept di gestione scorte per negozi e ristoranti: avvisi di esaurimento, movimenti e ordini fornitori.", nl: "Voorraadconcept voor winkels en restaurants: waarschuwingen bij uitverkoop, mutaties en leveranciersbestellingen." }
  };

  var LANGS = [["fr", "FR"], ["en", "EN"], ["de", "DE"], ["it", "IT"], ["nl", "NL"]];
  var DICT = { en: {}, de: {}, it: {}, nl: {} };
  Object.keys(T).forEach(function (k) {
    ["en", "de", "it", "nl"].forEach(function (l) { if (T[k][l] != null) DICT[l][k] = T[k][l]; });
  });

  function run() {
    // ---- style ----
    var css =
      ".lang-switch{position:relative;display:inline-flex;align-items:center;margin-left:10px}" +
      ".lang-switch .lang-btn{display:inline-flex;align-items:center;gap:6px;font:inherit;font-size:14px;font-weight:600;color:var(--muted,#9AA7BC);background:transparent;border:1px solid var(--bord,#243043);border-radius:999px;padding:6px 12px;cursor:pointer}" +
      ".lang-switch .lang-btn:hover{color:#fff}" +
      ".lang-switch .lang-menu{position:absolute;top:calc(100% + 8px);right:0;min-width:88px;list-style:none;margin:0;padding:6px;background:var(--surface,#141B27);border:1px solid var(--bord,#243043);border-radius:14px;box-shadow:0 18px 40px rgba(0,0,0,.5);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .18s,transform .18s,visibility .18s;z-index:60}" +
      ".lang-switch.open .lang-menu{opacity:1;visibility:visible;transform:none}" +
      ".lang-switch .lang-menu li{margin:0}" +
      ".lang-switch .lang-menu button{display:block;width:100%;text-align:left;font:inherit;font-size:14px;font-weight:600;color:var(--txt,#E7ECF3);background:transparent;border:0;border-radius:8px;padding:7px 12px;cursor:pointer}" +
      ".lang-switch .lang-menu button:hover{background:rgba(255,255,255,.06)}" +
      ".lang-switch .lang-menu button.active{color:var(--acc,#5B8DEF)}" +
      "@media(max-width:860px){.lang-switch{margin:6px 0}.lang-switch .lang-menu{right:auto;left:0}}";
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

    // ---- sélecteur ----
    var wrap = document.createElement("div"); wrap.className = "lang-switch";
    var btn = document.createElement("button"); btn.type = "button"; btn.className = "lang-btn"; btn.setAttribute("aria-haspopup", "listbox");
    btn.innerHTML = '<span class="lang-cur">FR</span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    var menu = document.createElement("ul"); menu.className = "lang-menu"; menu.setAttribute("role", "listbox");
    LANGS.forEach(function (l) {
      var li = document.createElement("li");
      var b = document.createElement("button"); b.type = "button"; b.textContent = l[1]; b.setAttribute("data-l", l[0]);
      b.addEventListener("click", function (e) { e.stopPropagation(); setLang(l[0]); wrap.classList.remove("open"); });
      li.appendChild(b); menu.appendChild(li);
    });
    btn.addEventListener("click", function (e) { e.stopPropagation(); wrap.classList.toggle("open"); });
    document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) wrap.classList.remove("open"); });
    wrap.appendChild(btn); wrap.appendChild(menu);
    var nav = document.querySelector(".liens");
    if (nav) nav.appendChild(wrap);

    // ---- moteur de traduction ----
    var cache = null;
    function nodes() {
      if (cache) return cache; cache = [];
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n;
      while (n = w.nextNode()) {
        var p = n.parentNode; if (!p) continue;
        var nm = p.nodeName; if (nm === "SCRIPT" || nm === "STYLE") continue;
        if (p.closest && p.closest(".lang-switch")) continue;
        if (n.nodeValue.trim()) { n.__fr = n.nodeValue; cache.push(n); }
      }
      return cache;
    }
    function norm(s) { return s.trim().replace(/\s+/g, " "); }
    function setLang(lang) {
      try { localStorage.setItem("portfolio_lang", lang); } catch (e) {}
      document.documentElement.lang = lang;
      var d = (lang === "fr") ? null : (DICT[lang] || {});
      nodes().forEach(function (n) {
        var raw = n.__fr;
        if (!d) { n.nodeValue = raw; return; }
        var t = d[norm(raw)];
        if (t != null) {
          var lead = (raw.match(/^\s*/) || [""])[0], trail = (raw.match(/\s*$/) || [""])[0];
          n.nodeValue = lead + t + trail;
        } else { n.nodeValue = raw; }
      });
      var L = lang.toUpperCase();
      document.querySelectorAll(".lang-cur").forEach(function (x) { x.textContent = L; });
      menu.querySelectorAll("button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-l") === lang); });
    }
    window.__setLang = setLang;

    function detectLang() {
      try { var s = localStorage.getItem("portfolio_lang"); if (s) return s; } catch (e) {}
      var supported = ["fr", "en", "de", "it", "nl"];
      var navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || "fr"];
      for (var i = 0; i < navs.length; i++) {
        var code = (navs[i] || "").slice(0, 2).toLowerCase();
        if (supported.indexOf(code) !== -1) return code;
      }
      return "fr";
    }
    setLang(detectLang());
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
