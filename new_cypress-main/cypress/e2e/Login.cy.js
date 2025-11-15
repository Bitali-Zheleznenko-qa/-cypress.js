it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru');    // Ввели правильный логин
        cy.get('#pass').type('qa_one_love1');         // Ввели правильный пароль
        cy.get('#loginButton').click();              //  Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авториз.виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
         })

         it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#forgotEmailButton').click();           //  Нажать Забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru');    // Ввели  логин
        cy.get('#restoreEmailButton').click();         // Нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю,что виден текст
   
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
      
      })

       it('Ввели не правильный логин', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#mail').type('german@dolniko.ru');    // Ввели не правильный логин
        cy.get('#pass').type('qa_one_love1');         // Ввели правильный пароль
        cy.get('#loginButton').click();              //  Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
   
      })

      it('Ввелине не правильный пароль :', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru');    // Ввели правильный логин
        cy.get('#pass').type('qa_one_love');         // Ввели не правильный пароль
        cy.get('#loginButton').click();              //  Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
         })


         it('негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru');    // Ввели  логин без @
        cy.get('#pass').type('qa_one_love1');         // Ввели правильный пароль
        cy.get('#loginButton').click();              //  Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю,что виден текст
        
         })


         it('Вводим логин строчными буквами', function () {
        cy.visit('https://login.qa.studio/');           //  Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');    // Ввели правильный логин строчными буквами
        cy.get('#pass').type('qa_one_love1');         // Ввели правильный пароль
        cy.get('#loginButton').click();              //  Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авториз.виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
         })
