# Angular Zárthelyi Feladat – Frontend Fejlesztés Kurzus

Ez a projekt a Frontend fejlesztés kurzus 2. zárthelyi dolgozatának megoldását tartalmazza. A feladatsort emlékezetből rekonstruáltam, és a következő pontok mentén valósítottam meg:

## Feladatleírás

1. **User komponens létrehozása és megjelenítése**
   - Hozzon létre egy `User` komponenst.
   - Ezt jelenítse meg az `AppModule`-ban.
   - A komponens tetején szerepeljen egy `<h1>` címke a felhasználó teljes nevével.

2. **DataService és User osztály létrehozása**
   - Készítsen egy `DataService` nevű szolgáltatást.
   - Hozzon létre egy `User` osztályt, amely tartalmaz egy `name` és egy `age` mezőt.
   - A `DataService`-ben hozzon létre egy `User` típusú tömböt, és töltse fel néhány kezdeti (seed) adattal.

3. **Adatszolgáltatás felhasználása a komponensben**
   - A `User` komponensben használja fel a `DataService`-t dependency injection segítségével.
   - A komponens jelenítse meg a felhasználókat `<p>` tagekben a következő formátumban: `username - age`.

4. **Interaktív input és gomb hozzáadása**
   - A `User` komponens tetején szerepeljen egy szövegbevitel (text input) és egy `Hozzáadás` gomb.

5. **Felhasználók korának módosítása**
   - A `Hozzáadás` gombra kattintva növelje meg az összes felhasználó életkorát a beírt értékkel.

---

## Megjegyzés

Ez a megoldás az oktatási célokat szolgálja, és az Angular alapvető funkcióinak (komponens, szolgáltatás, osztály, adatbinding, eseménykezelés, dependency injection) gyakorlására készült.











# Szczuka

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
