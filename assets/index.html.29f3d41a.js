import{_ as d,r as o,o as l,c as u,b as e,d as n,e as r,w as s,a}from"./app.85742c1e.js";const c={},h=e("h1",{id:"iobroker-docker-image-doku",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iobroker-docker-image-doku","aria-hidden":"true"},"#"),n(" ioBroker Docker Image Doku")],-1),k=e("p",null,"Dies ist die offizielle Dokumentation f\xFCr mein ioBroker-Docker-Image. Sie enth\xE4lt alle Informationen die du zum Einrichten und Konfigurieren eines ioBroker-Docker-Containers ben\xF6tigst.",-1),p={href:"https://www.iobroker.net/#de/documentation",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"einstieg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einstieg","aria-hidden":"true"},"#"),n(" Einstieg")],-1),g={href:"https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://forum.iobroker.net/viewtopic.php?f=17&t=5089",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>Bitte vermeide es mich bei Support-Fragen direkt zu kontaktieren. Stelle deine Frage stattdessen lieber in der ioBroker Community und markiere mich bei Bedarf. So k\xF6nnen alle ioBroker Benutzer von der Antwort profitieren und du erh\xE4lst ggf. auch Unterst\xFCtzung von anderen Mitgliedern aus der Community.</p><p>Wenn du einen Fehler im ioBroker Docker Image gefunden oder eine Idee zur Verbesserung hast w\xFCrde ich mich freuen wenn du einen Issue auf Github meldest.</p><p>Die nun folgenden M\xF6glichkeiten einen ioBroker Container zu starten sind nur Beispiele. M\xF6glicherweise musst du Parameter \xE4ndern, hinzuf\xFCgen oder ersetzen um ioBroker f\xFCr dich und deine Umgebung passend zu konfigurieren.</p><h3 id="starten-per-kommandozeile" tabindex="-1"><a class="header-anchor" href="#starten-per-kommandozeile" aria-hidden="true">#</a> Starten per Kommandozeile</h3><p>Um einen ersten Blick auf den Docker-Container von ioBroker zu werfen reicht es aus einfach den folgenden Docker-Run-Befehl auszuf\xFChren:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8081 <span class="token parameter variable">--name</span> iobroker <span class="token parameter variable">-v</span> iobrokerdata:/opt/iobroker buanet/iobroker:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),_={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),B=a(`<h3 id="starten-per-docker-compose" tabindex="-1"><a class="header-anchor" href="#starten-per-docker-compose" aria-hidden="true">#</a> Starten per docker-compose</h3><p>Du kannst deinen ioBroker Container nat\xFCrlich auch per docker-compose starten. Hier ein Beispiel:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iobroker</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> buanet/iobroker<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iobroker
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iobroker
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8081:8081&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> iobrokerdata<span class="token punctuation">:</span>/opt/iobroker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={class:"custom-container tip"},z=e("p",{class:"custom-container-title"},"TIP",-1),D=e("h2",{id:"persistente-daten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#persistente-daten","aria-hidden":"true"},"#"),n(" Persistente Daten")],-1),S=e("p",null,[n("Es wird dringend empfohlen beim ersten Start deines ioBroker Containers einen (leeren) Ordner oder ein Docker Volume unter "),e("code",null,"/opt/iobroker"),n(" zu mounten. Der Container lagert dann alle Daten deiner ioBroker Instanz in dieses Verzeichnis aus. So ist es sp\xE4ter m\xF6glich den Container zu aktualisieren/ neu zu erstellen ohne die ioBroker Konfiguration zu verlieren.")],-1),A=e("h2",{id:"umgebungsvariablen-env",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#umgebungsvariablen-env","aria-hidden":"true"},"#"),n(" Umgebungsvariablen (ENV)")],-1),I=e("p",null,"Zur individuellen Konfiguration des ioBroker Containers werden Umgebungsvariablen verwendet. Die folgende Tabelle gibt einen \xDCberblick \xFCber die verwendbaren Variablen und deren m\xF6gliche Werte. Bitte stelle sicher, dass du nur Umgebungsvariablen setzt, die du auch wirklich ben\xF6tigst.",-1),C=e("thead",null,[e("tr",null,[e("th",null,"ENV"),e("th",null,"Standard"),e("th",null,"Beschreibung")])],-1),E=e("tr",null,[e("td",null,"AVAHI"),e("td",null,"false"),e("td",null,'Installiert und aktiviert den Avahi Dienst welcher z.B. vom yahka Adapter verwendet wird. Kann "true" oder "false" sein.')],-1),T=e("tr",null,[e("td",null,"IOB_ADMINPORT"),e("td",null,"8081"),e("td",null,"\xC4ndert den Port des ioBroker Admin")],-1),x=e("tr",null,[e("td",null,"IOB_MULTIHOST"),e("td",null,"[not set]"),e("td",null,'Definiert den ioBroker als "master" oder "slave" f\xFCr Multihost Unterst\xFCtzung (ben\xF6tigt weitere Konfiguration f\xFCr Objects DB und States DB!)')],-1),V=e("tr",null,[e("td",null,"IOB_OBJECTSDB_HOST"),e("td",null,"127.0.0.1"),e("td",null,"Definiert den Host f\xFCr die ioBroker Objects DB")],-1),O=e("tr",null,[e("td",null,"IOB_OBJECTSDB_PORT"),e("td",null,"9001"),e("td",null,"Definiert denPort f\xFCr die ioBroker Objects DB")],-1),U=e("td",null,"IOB_OBJECTSDB_TYPE",-1),y=e("td",null,"file",-1),P=e("br",null,null,-1),M={href:"https://github.com/ioBroker/ioBroker#databases",target:"_blank",rel:"noopener noreferrer"},H=e("tr",null,[e("td",null,"IOB_STATESDB_HOST"),e("td",null,"127.0.0.1"),e("td",null,"Definiert den Host f\xFCr die ioBroker States DB")],-1),F=e("tr",null,[e("td",null,"IOB_STATESDB_PORT"),e("td",null,"9000"),e("td",null,"Definiert den Port f\xFCr die ioBroker States DB")],-1),K=e("tr",null,[e("td",null,"IOB_STATESDB_TYPE"),e("td",null,"file"),e("td",null,'Definiert den Typ der ioBroker States DB. Kann "file" oder "redis" sein.')],-1),W=e("tr",null,[e("td",null,"LANG"),e("td",null,"de_DE.UTF\u20118"),e("td",null,"Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8")],-1),N=e("tr",null,[e("td",null,"LANGUAGE"),e("td",null,"de_DE:de"),e("td",null,"Die folgenden locales sind vorgeneriert: de_DE:de, en_US:en")],-1),L=e("tr",null,[e("td",null,"LC_ALL"),e("td",null,"de_DE.UTF-8"),e("td",null,"Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8")],-1),G=e("tr",null,[e("td",null,"PACKAGES"),e("td",null,"[not set]"),e("td",null,'Installiert zus\xE4tzliche Linux Pakete. Pakete sollten durch Leerzeichen getrennt sein. Beispiel: "Paket1 Paket2 Paket3".')],-1),j=e("tr",null,[e("td",null,"SETGID"),e("td",null,"1000"),e("td",null,"In manchen F\xE4llen ist es notwendig die GID des ioBroker Benutzers im Container anzupassen, damit diese zu einer entsprechenden Gruppe auf dem Host System passt.")],-1),q=e("tr",null,[e("td",null,"SETUID"),e("td",null,"1000"),e("td",null,"In manchen F\xE4llen ist es notwendig die UID des ioBroker Benutzers im Container anzupassen, damit diese zu einem entsprechenden Benutzer auf dem Host System passt.")],-1),R=e("tr",null,[e("td",null,"TZ"),e("td",null,"Europe/Berlin"),e("td",null,"Definiert die Zeitzonde des Containers. Alle g\xFCltigen Linux Zeitzonen sind m\xF6glich.")],-1),Z=e("tr",null,[e("td",null,"USBDEVICES"),e("td",null,"none"),e("td",null,'Sorgt daf\xFCr, dass ioBroker die notwendigen Berechtigungen auf gemountete Ger\xE4te erh\xE4lt ("/dev/ttyACM0"). Mehrere Ger\xE4te mit Semikolon (";") trennen ("/dev/ttyACM0;/dev/ttyACM1")')],-1),J=e("tr",null,[e("td",null,"ZWAVE"),e("td",null,"false"),e("td",null,'Installiert openzwave was vom zwave Adapter ben\xF6tig wird. Kann "true" or "false" sein.')],-1),Y=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"NOTE"),e("p",null,'In v4.2.0 wurden die Umgebungsvariablen "ADMINPORT" and "REDIS" umbenannt bzw. neu definiert. Bitte pr\xFCfe die Variablen wenn du deinen Container von einer \xE4lteren Version aktualisierst.')],-1),Q=e("h2",{id:"netzwerke",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#netzwerke","aria-hidden":"true"},"#"),n(" Netzwerke")],-1),X={href:"https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge",target:"_blank",rel:"noopener noreferrer"},$={href:"https://en.wikipedia.org/wiki/Multicast",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://en.wikipedia.org/wiki/Broadcasting_(networking)",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://docs.docker.com/network/host/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://docs.docker.com/network/macvlan/",target:"_blank",rel:"noopener noreferrer"},te={href:"https://docs.docker.com/network/",target:"_blank",rel:"noopener noreferrer"},ie=e("h2",{id:"erweiterte-konfiguration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#erweiterte-konfiguration","aria-hidden":"true"},"#"),n(" Erweiterte Konfiguration")],-1),se=e("h3",{id:"einbinden-von-usb-geraten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einbinden-von-usb-geraten","aria-hidden":"true"},"#"),n(" Einbinden von USB-Ger\xE4ten")],-1),ae={href:"https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device",target:"_blank",rel:"noopener noreferrer"},oe=a('<h3 id="startskripte" tabindex="-1"><a class="header-anchor" href="#startskripte" aria-hidden="true">#</a> Startskripte</h3><p>Mit Hilfe der Startscripte (userscripts) ist es m\xF6glich beim Start des ioBroker Containers eigene Scripte ausf\xFChren zu lassen. Aktiviert wird das Feature indem du, analog zum ioBroker Ordner, einen weiteren Ordner (oder Volume) unter <code>/opt/userscripts</code> mountest.</p><p>Nach dem Start befinden sich dann zwei Beispielscripte im Ordner. Zur Aktivierung der Scripte entferne einfach die Endung <code>_example</code> im Namen des Scripts. Das Script \u201Euserscript_firststart.sh\u201C wird nur beim allerersten Start eines neuen Containers ausgef\xFChrt, das Script \u201Euserscript_everystart.sh\u201C bei jedem Containerstart ausgef\xFChrt wird.</p><p>Probiere es einfach aus. In den Scripten ist Beispielcode enthalten der eine Logausgabe beim Start des Containers erzeugt. Den entsprechenden Abschnitt findest du im Log in &quot;Schritt 4 von 5: Spezielle Einstellungen anwenden&quot;.</p><h3 id="multihost" tabindex="-1"><a class="header-anchor" href="#multihost" aria-hidden="true">#</a> Multihost</h3><p>Mit Hilfe der Umgebungsvariable &quot;IOB_MULTIHOST&quot; und den Variablen zu &quot;IOB_OBJECTSDB_[...]&quot; und &quot;IOB_STATESDB_[...]&quot; l\xE4sst sich der ioBroker Container als Multihost System betreiben. Bitte stelle vor der Konfiguration sicher, dass du mit dem Multihost-Feature von ioBroker vertraut bist und wei\xDFt was der Befehl <code>\xECobroker setup custom</code> tut.</p><p>Bei der Verwendung der Umgebungsvariablen f\xFCr den Multihost Betrieb ist keine Ausf\xFChrung von <code>iobroker multihost enable</code> oder <code>iobroker multihost connect</code> innerhalb des Containers notwendig. Bei korrekter Konfiguration wird all dies durch das Startscript des Containers erledigt.</p>',7),de={href:"https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de",target:"_blank",rel:"noopener noreferrer"},le=e("h2",{id:"wartung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wartung","aria-hidden":"true"},"#"),n(" Wartung")],-1),ue=e("h3",{id:"sicherung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sicherung","aria-hidden":"true"},"#"),n(" Sicherung")],-1),ce={href:"https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md",target:"_blank",rel:"noopener noreferrer"},ke=e("p",null,'Eine Weitere M\xF6glichkeit ist das Sichern des Verzeichnisses, welches du unter "/opt/iobroker" in den ConTainer gemountet hast. Die Sicherung erfolgt dabei \xFCber den Docker Host. Beim Kopieren, Verschieben oder Packen der Dateien sollte der ioBroker Container gestoppt sein.',-1),pe=e("h3",{id:"wiederherstellung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wiederherstellung","aria-hidden":"true"},"#"),n(" Wiederherstellung")],-1),me={href:"https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md",target:"_blank",rel:"noopener noreferrer"},be={class:"custom-container tip"},fe=e("p",{class:"custom-container-title"},"Pro Tip",-1),_e={href:"https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md",target:"_blank",rel:"noopener noreferrer"},Be=e("code",null,"_backupiobroker.tar.gz",-1),we=e("p",null,"Das Startup Script des Containers wird dann die Datensicherung erkennen und beim ersten Start automatisch wiederherstellen. Der Fortschritt kann \xFCber das Container Logfile und sp\xE4ter \xFCber den ioBroker Admin verfolgt werden.",-1),ze=a(`<h3 id="aktualisierung-update" tabindex="-1"><a class="header-anchor" href="#aktualisierung-update" aria-hidden="true">#</a> Aktualisierung (Update)</h3><div class="custom-container danger"><p class="custom-container-title">WARNUNG</p><p>Bitte versichere dich, dass du ein g\xFCltiges Backup hast bevor du Updates durchf\xFChrst!</p></div><h4 id="linux-system-pakete-aktualisieren" tabindex="-1"><a class="header-anchor" href="#linux-system-pakete-aktualisieren" aria-hidden="true">#</a> Linux System Pakete aktualisieren</h4><p>Die im ioBroker Docker Image enthaltenen Linux Pakete lassen sich manuell \xFCber den integrierten Paketmanager <code>apt</code> aktualisieren. Dabei unterscheidet sich die Vorgehensweise nicht von der anderer auf Debian basierender Linux Systeme. In der Regel reich das Ausf\xFChren des folgenden Kommandos auf der Kommandozeile innerhalb des Docker Containers:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Da das ioBroker Docker Image regelm\xE4\xDFig neu erstellt wird, sollten die darin enthaltenen Paketversionen grunds\xE4tzlich aktuell sein. Aus diesem Grund kann die Aktualisierung der Linux System Pakete auch durch erneuten Download des ioBroker Docker Images und anschlie\xDFendes Neuerstellen des Containers durchgef\xFChrt werden.</p><h4 id="iobroker-adapter-aktualisierungen" tabindex="-1"><a class="header-anchor" href="#iobroker-adapter-aktualisierungen" aria-hidden="true">#</a> ioBroker Adapter Aktualisierungen</h4>`,7),De={href:"https://www.iobroker.net/#de/documentation",target:"_blank",rel:"noopener noreferrer"},Se=a(`<h4 id="iobroker-js-controller-aktualisierungen" tabindex="-1"><a class="header-anchor" href="#iobroker-js-controller-aktualisierungen" aria-hidden="true">#</a> ioBroker js-controller Aktualisierungen</h4><p>\xC4hnlich wie bei den Adapter Aktualisierungen verh\xE4lt es sich beim js-controller. In der Admin Oberfl\xE4che erh\xE4lst du Informationen ob eine neue Aktualisierung zur Verf\xFCgung steht. Allerdings l\xE4sst sich der js-controller derzeit nur \xFCber die Kommandozeile aktualisieren, da f\xFCr den Vorgang alle Prozesse des js-controllers beendet sein m\xFCssen. Eine manuelle Aktualisierung des js-controllers \xFCber die Kommandozeile des Docker Containers erfolgt mit den folgenden Kommandos:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pkill</span> <span class="token parameter variable">-u</span> iobroker
iobroker update
iobroker upgrade self
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Anschlie\xDFend muss der Container manuell neu gestartet werden.</p>`,4),Ae={class:"custom-container tip"},Ie=e("p",{class:"custom-container-title"},"Pro Tip",-1),Ce=a('<h3 id="hochrustung-upgrade" tabindex="-1"><a class="header-anchor" href="#hochrustung-upgrade" aria-hidden="true">#</a> Hochr\xFCstung (Upgrade)</h3><p>Beim Wechsel der Hauptversion des ioBroker Docker Images (z.B. von v5.x.x auf v6.0.0) sprechen wir von einer Hochr\xFCstung (Upgrade). Im Gegensatz zur Aktualisierung (Update) kann eine Hochr\xFCstung (Upgrade) sogenannte &quot;Breaking Changes&quot; enthalten. Dabei handelt es sich um \xC4nderungen im Image die ggf. weitere Schritte erfordern um ioBroker wieder zum Laufen zu bringen.</p><p>Als Beispiel kann man hier die Aktualisierung der Node Version im Docker Image nennen. Auch wenn aktuelle Versionen des js-controllers mittlerweile gut auf eine \xC4nderung der Node Version reagieren k\xF6nnen und zus\xE4tzliche Schritte automatisiert durchf\xFChren, kann es weiterhin dazu kommen, dass nach einer Hochr\xFCstung einzelne Adapter oder gar der gesamter ioBroker nicht mehr ordnungsgem\xE4\xDF funktionieren.</p><p>Um solche Probleme zu umgehen empfehlen wir beim Wechsel der Hauptversion das Anlegen eines neuen Containers und anschlie\xDFende Wiederherstellen der ioBroker Installation aus eineer ioBroker Backup Datei.<br>Folgendes Vorgehen hat sich dabei bew\xE4hrt:</p><ol><li>Aktualisierung des js-controllers und aller Adapter auf den letzten Stand (stable)</li><li>Erstellen eines neuen Backups (backitup Adapter oder <code>iobroker backup</code>)</li><li>Kopieren des Backups in ein neues, leeres Datenverzeichnis</li><li>Stoppen und/oder L\xF6schen des alten ioBroker Containers</li><li>Herunterladen des neuen ioBroker Docker Images</li><li>Erstellen eines neuen Containers aus dem aktuellen Image und einbinden des neuen Datenverzeichnisses</li><li>Starten des Containers und \xDCberwachen der Log Ausgabe (erst das Container Log, dann das Protokoll in der Admin Oberfl\xE4che)</li></ol><p>Hat alles geklappt wird der neue Container beim ersten Start das abgelegte Backup automatisch wiederherstellen und damit beginnen die Adapter neu zu installieren. Je nach System und Anzahl der Adapter kann dies eine Weile dauern. Den Fortschritt kann man aber gut im ioBroker Protokoll verfolgen. Sind die Adapter installiert m\xFCssen diese noch einmalig \xFCber die Admin Oberfl\xE4che gestartet werden.</p><div class="custom-container warning"><p class="custom-container-title">Der Vollst\xE4ndigkeit halber...</p><p>Generell ist es nat\xFCrlich auch beim Wechsel der Hauptversion des ioBroker Docker Images m\xF6glich den Container einfach nur aus dem neuen Docker Image neu zu erstellen. Allerdings k\xF6nnen wir derzeit noch nicht ausschlie\xDFen, dass es dabei bei einzelnen Adaptern zu Problemen kommt und dann manuell nachgearbeitet werden muss. Aus diesem Grund ist dieses Vorgehen aktuell nur f\xFCr fortgeschrittene Benutzer zu empfehlen.</p></div><h3 id="docker-healthcheck" tabindex="-1"><a class="header-anchor" href="#docker-healthcheck" aria-hidden="true">#</a> Docker Healthcheck</h3><p>Seit v5.1.0 enth\xE4lt das ioBroker Docker Image einen Docker Healthcheck (Gesundheitscheck). Dieser pr\xFCft ob im Container der js-controller l\xE4uft und meldet dem Docker Dienst entsprechend &quot;healthy&quot; (gesund) or &quot;unhealthy&quot; (nicht gesund) zur\xFCck.</p><p>Der Healthcheck macht bei seinem Test bis zu 5 Versuche in einem Interval von 15s mit einem Timeout von 5s. Dementsprechend w\xFCrde der Container fr\xFChestens 60 Sekunden nachdem der js-controller beendet ist den Status &quot;unhealthy&quot; einnehmen.</p>',10),Ee={class:"custom-container tip"},Te=e("p",{class:"custom-container-title"},"Pro Tip",-1),xe={href:"https://github.com/buanet/docker-watchdog",target:"_blank",rel:"noopener noreferrer"},Ve=e("h2",{id:"bewahrte-methoden",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bewahrte-methoden","aria-hidden":"true"},"#"),n(" Bew\xE4hrte Methoden")],-1),Oe=e("h3",{id:"vermeide-latest-tag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vermeide-latest-tag","aria-hidden":"true"},"#"),n(" Vermeide latest Tag")],-1),Ue=e("p",null,'Damit dies nicht geschieht ist es in einer Produktivumgebung sinnvoll einen Versionstag zu verwenden. F\xFCr eine spezielle Version z.B. "buanet/iobroker:v5.2.0" oder f\xFCr einen ganzen Hauptversionszweig z.B. "buanet/iobroker:latest-v5". So sind Aktualisierungen des Docker Images gefahrlos m\xF6glich und man hat immer die Kontrolle \xFCber die verwendete Version.',-1),ye=e("h3",{id:"benutze-maintenance-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#benutze-maintenance-script","aria-hidden":"true"},"#"),n(" Benutze maintenance Script")],-1),Pe=e("p",null,[n("Um mehr \xFCber die M\xF6glichkeiten des Scripts zu erfahren wirf ein Blick auf die Hilfe des Scripts. Zum Aufrufen f\xFChre einfach "),e("code",null,"maintenance --help"),n(" in der Kommandozeile deines ioBroker Docker Containers aus.")],-1),Me=e("h3",{id:"migrieren-der-states-zu-redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#migrieren-der-states-zu-redis","aria-hidden":"true"},"#"),n(" Migrieren der States zu Redis")],-1),He=e("code",null,"iobroker setup custom",-1),Fe={href:"https://www.iobroker.net/#de/documentation",target:"_blank",rel:"noopener noreferrer"},Ke={class:"custom-container warning"},We=e("p",{class:"custom-container-title"},"HINWEIS",-1),Ne=e("code",null,"iobroker setup custom",-1),Le=e("h2",{id:"sonstiges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sonstiges","aria-hidden":"true"},"#"),n(" Sonstiges")],-1),Ge=e("h3",{id:"beta-tester",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beta-tester","aria-hidden":"true"},"#"),n(" Beta Tester")],-1),je={href:"https://github.com/buanet/ioBroker.docker/releases",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://discord.gg/kN7nhx6C",target:"_blank",rel:"noopener noreferrer"},Re=e("br",null,null,-1),Ze=e("h3",{id:"hinweise-fur-entwickler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hinweise-fur-entwickler","aria-hidden":"true"},"#"),n(" Hinweise f\xFCr Entwickler")],-1);function Je(Ye,Qe){const t=o("ExternalLinkIcon"),i=o("RouterLink");return l(),u("div",null,[h,k,e("p",null,[n("Wenn du Fragen zur Konfiguration deines ioBroker und seiner Adapter hast, lies bitte die "),e("a",p,[n("offizielle ioBroker Dokumentation"),r(t)]),n(".")]),m,e("p",null,[n("Ein ausf\xFChrliches Tutorial (basierend auf v3.0.0) findest du hier: "),e("a",g,[n("https://smarthome.buanet.de"),r(t)]),n(".")]),e("p",null,[n("Bei Fragen melde dich einfach im "),e("a",b,[n("ioBroker Forum Thread"),r(t)]),n(" zu Wort oder tritt der ioBroker Community auf Discord, Facebook oder Telegram bei.")]),f,e("div",_,[v,e("p",null,[n('Es ist immer eine gute Wahl, die Verwendung des "latest" Tags f\xFCr deine Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter '),r(i,{to:"/de/iobroker-docker-image/docs/#best-practices"},{default:s(()=>[n('"Best practices"')]),_:1}),n(".")])]),B,e("div",w,[z,e("p",null,[n('Es ist immer eine gute Wahl, die Verwendung des "latest" Tags f\xFCr deine Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter '),r(i,{to:"/de/iobroker-docker-image/docs/#best-practices"},{default:s(()=>[n('"Best practices"')]),_:1}),n(".")])]),D,S,A,I,e("table",null,[C,e("tbody",null,[E,T,x,V,O,e("tr",null,[U,y,e("td",null,[n('Definiert den Typ der ioBroker Objects DB. Kann "file" oder "redis" sein.'),P,n("(Momentan wird redis als Objects DB von ioBroker "),e("a",M,[n("nicht offiziell unterst\xFCtzt"),r(t)]),n(")")])]),H,F,K,W,N,L,G,j,q,R,Z,J])]),Y,Q,e("p",null,[n("Im Standard arbeitet Docker mit einem Default-Bridge-Netzwerk und reicht nach au\xDFen nur die Ports durch, die beim Starten des Containers entsprechend gemappt wurden. F\xFCr einen ersten Einblick in ioBroker sollte dies gen\xFCgen. Es gibt aber auch "),e("a",X,[n("ein paar Gr\xFCnde"),r(t)]),n(" warum es m\xF6glicherweise die bessere Wahl ist zumindest auf ein benutzerdefiniertes Bridge-Netzwerk umzusteigen.")]),e("p",null,[n("Einige ioBroker-Adapter verwenden allerdings Techniken wie "),e("a",$,[n("Multicast"),r(t)]),n(" oder "),e("a",ee,[n("Broadcast"),r(t)]),n(". Zum Beispiel zur automatischen Erkennung von IoT-Ger\xE4ten. In diesem Fall kann es sinnvoll sein bez\xFCglich der Netzwerkkonfiguration auf "),e("a",ne,[n("host"),r(t)]),n(" oder "),e("a",re,[n("MACVLAN"),r(t)]),n(" umzusteigen.")]),e("p",null,[n("Weitere Informationen zu Netzwerk unter Docker findest du in der "),e("a",te,[n("Offiziellen Docker Dokumentation"),r(t)]),n(".")]),ie,se,e("p",null,[n("F\xFCr das Einbinden von USB-Ger\xE4ten in den ioBroker Docker Container ist es erforderlich das Ger\xE4t entsprechend "),e("a",ae,[n("beim Start des Containers einzubinden"),r(t)]),n(". Au\xDFerdem ist es erforderlich das eingebundene Ger\xE4t in der Umgebungsvariable \u201EUSBDEVICES\u201C aufzuf\xFChren. Letzteres sorgt daf\xFCr, dass der ioBroker innerhalb des Containers die n\xF6tigen Berechtigungen auf das Ger\xE4t bekommt.")]),oe,e("p",null,[n("Allgemeine Informationen zur Multihost-Funktion von ioBroker findest du in der "),e("a",de,[n("Offiziellen ioBroker Dokumentation"),r(t)]),n(".")]),le,ue,e("p",null,[n("Der einfachst Weg deinen ioBroker zu sichern ist die Verwendung des integrierten "),e("a",ce,[n('"iobroker backup"'),r(t)]),n(" Kommandos oder des "),e("a",he,[n("iobroker.backitup Adapters"),r(t)]),n(".")]),ke,pe,e("p",null,[n("Die Wiederherstellung eines Backups erfolgt analog zur Erstellung per "),e("a",me,[n('"iobroker backup"'),r(t)]),n(" Kommando oder \xFCber den "),e("a",ge,[n("iobroker.backitup Adapter"),r(t)]),n(". Alternativ \xFCber das Zur\xFCckkopieren/ Entpacken des auf dem Docker Host gesicherten Verzeichnisses bei gestopptem Container.")]),e("div",be,[fe,e("p",null,[n('Beim Erstellen eines neuen Containers mit leerem Datenverzeichnis unter "/opt/iobroker" besteht die M\xF6glichkeit eine Datensicherung vom '),e("a",_e,[n('"iobroker backup"'),r(t)]),n(" Kommando oder dem "),e("a",ve,[n("iobroker.backitup Adapter"),r(t)]),n(" in das Verzeichnis zu legen. Dabei muss der Dateiname auf "),Be,n(" enden.")]),we]),ze,e("p",null,[n("Die ioBroker Adapter sind Teil deiner ioBroker Installation und werden daher nicht durch erneuten Download des Docker Images aktualisiert. Ob Aktualisierungen f\xFCr deine Adapter vorliegen erf\xE4hrst du \xFCber die ioBroker Admin Oberfl\xE4che. In der Regel lassen sich die Aktualisierungen auch dort durchf\xFChren. Mehr Informationen dazu findest du in der "),e("a",De,[n("Offiziellen ioBroker Dokumentation"),r(t)]),n(".")]),Se,e("div",Ae,[Ie,e("p",null,[n("Zur Vereinfachung der Prozedur f\xFCr die Aktualisierung wurde ein Wartungsscript (maintenance script) in das Docker Image integriert. Mehr Informationen im Abschnitt "),r(i,{to:"/de/iobroker-docker-image/docs/#bewahrte-methoden"},{default:s(()=>[n('"Bew\xE4hrte Methoden"')]),_:1}),n(".")])]),Ce,e("div",Ee,[Te,e("p",null,[n("Da Docker selbst keine Aktionen aufgrund des healthy/ unhealthy Status eines Containers erlaubt, braucht es f\xFCr eine Aktion (z.B. Neustart) einen Watchdog. F\xFCr genau diesen Zweck habe ich das folgende Projekt gestartet: "),e("a",xe,[n("Watchdog for Docker"),r(t)]),n(".")])]),Ve,Oe,e("p",null,[n('Das Docker Tag "latest" (buanet/iobroker:latest) zeigt immer auf die aktuellste Version des Docker Images. Daher kann es vorkommen, dass beim Neuladen (z.B. Recreate) des Docker Images unbewusst eine neue Hauptversion geladen wird und ungewollt eine '),r(i,{to:"/de/iobroker-docker-image/docs/#hochrustung-upgrade"},{default:s(()=>[n("Hochr\xFCstung (Upgrade)")]),_:1}),n(" angesto\xDFen wird.")]),Ue,ye,e("p",null,[n("Seit einiger Zeit beinhaltet das ioBroker Docker Image ein Wartungsscript (maintenance script) mit dem es m\xF6glich ist diverser Wartungsaufgaben, wie ein Update des js-controllers, zu erledigen. Dabei \xFCbernimmt das Script zum Beispiel das Beenden und Neustarten des Containers und sorgt daf\xFCr, dass der Container w\xE4hrend des Updates "),r(i,{to:"/de/iobroker-docker-image/docs/#docker-healthcheck"},{default:s(()=>[n('"healthy"')]),_:1}),n(" bleibt (wichtig wenn ein Watchdog eingesetzt wird).")]),Pe,Me,e("p",null,[n("Falls du die States Datenbank von deinem ioBroker auf Redis migrieren m\xF6chtest, willst du sicher die aktuellen States deines ioBrokers mit nehmen und nicht mit einer leeren StatesDB starten. Daher bietet es sich an, vor dem Setzen der Umgebungsvariablen f\xFCr die States Datenbankverbindung in den Einstellungen des Containers, ioBroker zun\xE4chst manuell, innerhalb des Containers auf Redis umzustellen. Dies machst du durch Verwendung des Kommandos "),He,n(' auf der Kommandozeile innerhalb des Containers. Das Kommando ruft einen Wizard auf \xFCber den du die Datenbankverbindung konfigurieren kannst. Mehr Details zu "iobroker setup custom" findest du in der '),e("a",Fe,[n("Offiziellen ioBroker Dokumentation"),r(t)]),n(".")]),e("div",Ke,[We,e("p",null,[n("Damit "),Ne,n(" funktioniert muss der ioBroker innerhalb des Containers gestoppt werden. Dazu empfiehlt es sich den Container in den "),r(i,{to:"/de/iobroker-docker-image/docs/#benutze-maintenance-script"},{default:s(()=>[n("Maintenance Mode")]),_:1}),n(" zu versetzen.")])]),Le,Ge,e("p",null,[n("Falls du stets die neusten Korrekturen und Funktionen des Docker Images nutzen m\xF6chtest bist du herzlich dazu eingeladen unsere Beta-Versionen zu verwenden. F\xFCr mehr Informationen wirf am Besten einen Blick auf die "),e("a",je,[n("Docker image releases"),r(t)]),n(" und/ oder beteilige dich an der Diskussion im "),e("a",qe,[n("ioBroker Discord Channel > Beta Testing & Feedback > docker-image"),r(t)]),n("."),Re,n("Vielen Dank.")]),Ze,e("p",null,[n("...sind leider nur in "),r(i,{to:"/iobroker-docker-image/docs/#notes-for-developers"},{default:s(()=>[n("englisch")]),_:1}),n(" verf\xFCgbar.")])])}const $e=d(c,[["render",Je],["__file","index.html.vue"]]);export{$e as default};
