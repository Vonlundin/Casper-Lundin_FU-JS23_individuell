AirBean
Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

Figmaskiss: https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.0?node-id=0%3A1

APIDOCS: https://airbean-api-xjlcn.ondigitalocean.app/api/docs/ API: https://airbean-api-xjlcn.ondigitalocean.app/

Instruktioner
Kravspecifikation
För att få Godkänt ska ni:

Gjort enligt Figma skissen
Är en single psge application (SPA) med react-router-dom
Använder sig av Zustand som global state
Gå att lägga till produkter i en varukorg
I varukorgen ändra antal/ta bort produkter
Kunna skicka sin order och få ett svar med en ETA och ordernummer
För att Väl Godkänt ska ni:

Hämta alla produkter med fetch
Integrera API:et med SPAn
Lägga till en profilsida där du kan skapa konto/logga in (enbart namn och email)
Om man gör en beställning när man är inloggad ska ordern kopplas till den inloggade användaren
Det ska även finnas en orderhistorik-sida där den inloggade användarens ordrar listas
För att få stilpoäng ska ni:

Göra applikationen säkrare genom att lägga till lösenord på användaren
Authentication ska ske med hjälp av JWT
