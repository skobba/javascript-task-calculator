# Kodeoppgave - Kalkulator

Før du starter med oppgaven:
1. Installer avhengigheter `npm run install`
2. Kjør applikasjon med `npm run dev`

Start med å velg hva du skal kode med:

#### Javascript med React og JSX

Velg en av disse tre variantene med ReactJs i `App.js`:

1. Vanlig React: Dersom du skal kode med vanlig setState react, bruk komponenten `<ReactComponent/>`.

2. Hooks: Dersom du vil bruke react med hooks, bruk `<ReactHooksComponent />`.

3. Redux: Dersom du vil bruke react med redux, bruk `<ReduxComponent />`. Husk å kommenter inn <Provider /> som inneholder storen.

#### Ren javascript
Dersom du skal kode med ren javascript uten rammeverk:
- Kommenter vekk linje 5 in filen `index.js` (`ReactDOM.render(<App />, document.getElementById('root'));`)
- Skriv html og javscript rett inn i `index.html`.

### Kjøre applikasjon
Åpne nettleser på adressen: `http://localhost:8080/` 

## Oppgave
Du skal lage en kalkulator! Vi fokuserer ikke på UX her, så standard html5 knapper og inputbokser holder i massevis.
1. Lag et view som tar inn 2 tall i 2 ulike input-felt.
2. Lag en knapp som plusser sammen disse to tallene og viser resultatet.
3. Utvid programmet slik at brukeren kan velge om man vil plusse eller trekke ifra tallene fra inputboksene.
4. Utvid programmet slik at brukere kan velge å også dele eller gange tallene fra inputboksene.

