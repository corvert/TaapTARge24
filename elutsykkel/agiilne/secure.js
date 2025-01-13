document.addEventListener('DOMContentLoaded', function() {
    // Create and set basic HTML structure
    document.documentElement.lang = 'en';
    
    // Create head elements
    const head = document.head;
    const meta1 = document.createElement('meta');
    meta1.charset = 'UTF-8';
    const meta2 = document.createElement('meta');
    meta2.name = 'viewport';
    meta2.content = 'width=device-width, initial-scale=1.0';
    const title = document.createElement('title');
    title.textContent = 'Secure by design';
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = '../../styles.css';
    const link2 = document.createElement('link');
    link2.rel = 'icon';
    link2.href = '../../pildid/icon.jpeg';
    link2.type = 'image/x-icon';
    
    head.append(meta1, meta2, title, link1, link2);

    // Create main content structure
    const body = document.body;
    
    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Secure by design';
    header.appendChild(h1);
    
    // Main container
    const mainRow = document.createElement('div');
    mainRow.className = 'row';
    
    // Left column with navigation
    const leftCol = document.createElement('div');
    leftCol.className = 'column left';
    const nav = document.createElement('nav');
    
    const navButtons = [
        { text: 'Behavior-driven development', href: 'behavior-driven.html' },
        { text: 'Design-driven development', href: 'design-driven.html' },
        { text: 'Domain-driven design', href: 'domain-driven.html' },
        { text: 'Secure by design', href: 'secure.html' },
        { text: 'Test-driven development', href: 'test-driven.html' },
        { text: 'Acceptance test-driven development', href: 'acceptance.html' },
        { text: 'Continuous test-driven development', href: 'continuous.html' },
        { text: 'Specification by example', href: 'specification.html' },
        { text: 'Data-driven development', href: 'data-driven.html' },
        { text: 'Data-oriented design', href: 'data-oriented.html' }
    ];
    
    navButtons.forEach(btn => {
        const button = document.createElement('button');
        button.className = 'floating';
        button.textContent = btn.text;
        button.addEventListener('click', () => window.location.href = btn.href);
        nav.appendChild(button);
    });
    
    leftCol.appendChild(nav);
    
    // Middle column with content
    const middleCol = document.createElement('div');
    middleCol.className = 'column middle';
    
    // Add main content
    const h2 = document.createElement('h2');
    h2.textContent = 'Secure by design';
    
    const mainText = document.createElement('p');
    mainText.textContent = 'Secure by design on tarkvaratehnika kontseptsioon, mis tähendab, et tarkvara tooted ja võimalused on loodud turvalisena algusest peale. See lähenemine erineb traditsioonilisest "turvalisus hiljem" meetodist, kus turvalisus lisatakse alles hiljem. Turvalisus disainist alates on muutumas tarkvararengu standardiks, kus turvalisus on arvestatud kõigil tasanditel, alates arhitektuuri disainist kuni testimiseni ja hoolduseni.';
    
    const principlesTitle = document.createElement('b');
    principlesTitle.textContent = 'Põhimõtted:';
    
    const principlesList = document.createElement('ul');
    const principles = [
        'Turvalisuse integreerimine kogu arendusprotsessi: Turvalisus on arvestatud kõigil arendusprotsessi etappidel, mitte ainult lõpus.',
        'Turvalisusest kui põhieeldusest: Turvalisus on käsitletud mitte ainult tehnilise funktsioonina, vaid ka ärieesmärgina.',
        'Turvalisuse testimine: Kasutatakse staatilist ja dünaamilist testimist, et leida ja parandada turvalisusvigasid varakult.',
        'Turvalisus vaikimisi: Tarkvara on turvaline vaikimisi, ilma lisakonfiguratsioonita.'
    ];
    
    principles.forEach(principle => {
        const li = document.createElement('li');
        li.textContent = principle;
        principlesList.appendChild(li);
    });
    
    // Create figure with image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = '../agiilne/picture/Secure.png';
    img.alt = 'Secure by design';
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = 'Software development vs Secure by design development';
    figure.append(img, figcaption);
    
    // Create comparison table
    const table = document.createElement('table');
    const createTableHeader = () => {
        const tr1 = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.colSpan = 2;
        th1.textContent = 'Secure by design';
        tr1.appendChild(th1);
        
        const tr2 = document.createElement('tr');
        const th2 = document.createElement('th');
        th2.textContent = 'Eelised';
        const th3 = document.createElement('th');
        th3.textContent = 'Puudused';
        tr2.append(th2, th3);
        
        return [tr1, tr2];
    };
    
    const createTableContent = () => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        
        const eelisedList = document.createElement('ul');
        const eelised = [
            'Vähendab haavatavusi: Vigade parandamine algstaadiumis on oluliselt odavam kui hiljem.',
            'Parandab stabiilsust: Turvalisus disainist alates tagab, et tarkvara on stabiilsem ja vähem häiretele vastuvõtlik.',
            'Lihtsustab kooskõla: Kergem on vastavus turvalisus- ja privaatsusnõuetele, mis vähendab bürokraatiat ja karistusi.',
            'Parandab mainet: Ettevõtted, mis prioriteetsevad turvalisust, on usaldusväärsed ja võidavad klientide usalduse.'
        ];
        
        const puudusedList = document.createElement('ul');
        const puudused = [
            'Kõrgemad arenduskulud: Turvalisus disainist alates võib tähendada kõrgemaid arenduskulusid.',
            'Komplekssus: Turvalisusest kui põhieeldusest arvestamine võib tarkvaraprojekte komplekssemaks teha.',
            'Vajadus spetsialistidele: Efektiivne turvalisus disainist alates nõuab spetsialistide oskusi.',
            'Regulatiivne koormus: Vastavus turvalisusstandarditele võib lisada bürokraatiat.',
            'Piiratud paindlikkus: Turvalisus disainis võib piirata hilisemaid muudatusi.'
        ];
        
        eelised.forEach(eelis => {
            const li = document.createElement('li');
            li.textContent = eelis;
            eelisedList.appendChild(li);
        });
        
        puudused.forEach(puudus => {
            const li = document.createElement('li');
            li.textContent = puudus;
            puudusedList.appendChild(li);
        });
        
        td1.appendChild(eelisedList);
        td2.appendChild(puudusedList);
        tr.append(td1, td2);
        
        return tr;
    };
    
    table.append(...createTableHeader(), createTableContent());
    
    // Create references section
    const referencesTitle = document.createElement('p');
    referencesTitle.textContent = 'Kasutatud kirjandus:';
    
    const referencesList = document.createElement('div');
    const references = [
        'https://en.wikipedia.org/wiki/Secure_by_design',
        'https://www.ivanti.com/blog/secure-by-design-principles-are-more-important-than-ever',
        'https://www.jit.io/resources/app-security/secure-design-principles'
    ];
    
    references.forEach(ref => {
        const link = document.createElement('a');
        link.href = ref;
        link.textContent = ref;
        link.target = '_blank';
        const br = document.createElement('br');
        referencesList.append(link, br);
    });
    
    // Create navigation buttons
    const navRow = document.createElement('div');
    navRow.className = 'floating row';
    
    const createNavColumn = (className, buttonId, buttonText, onClick) => {
        const col = document.createElement('div');
        col.className = `column ${className}`;
        const button = document.createElement('button');
        if (buttonId) button.id = buttonId;
        button.textContent = buttonText;
        button.addEventListener('click', onClick);
        col.appendChild(button);
        return col;
    };
    
    const topCol = createNavColumn('left', 'myBtn', 'Algusesse', () => window.scrollTo(0, 0));
    const homeCol = createNavColumn('middle', null, 'Koju', () => window.location.href = '../../index.html');
    homeCol.style.textAlign = 'center';
    homeCol.style.backgroundColor = 'transparent';
    const backCol = createNavColumn('right', 'backBtn', 'Tagasi', () => window.history.back());
    
    navRow.append(topCol, homeCol, backCol);
    
    // Add all content to middle column
    middleCol.append(
        h2, mainText, principlesTitle, principlesList, 
        document.createElement('br'),
        figure,
        document.createElement('br'),
        table,
        document.createElement('br'),
        referencesTitle, referencesList,
        document.createElement('br'),
        navRow
    );
    
    // Right column (empty)
    const rightCol = document.createElement('div');
    rightCol.className = 'column right';
    
    // Add columns to main row
    mainRow.append(leftCol, middleCol, rightCol);
    
    // Create footer
    const footer = document.createElement('footer');
    footer.textContent = 'Orvet Priimägi - TARge24';
    
    // Add all main elements to body
    body.append(header, mainRow, footer);
    
    // Add scroll functionality
    window.onscroll = function() {
        const myButton = document.getElementById('myBtn');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = 'block';
        } else {
            myButton.style.display = 'none';
        }
    };
});
