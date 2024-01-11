npm install
npm install @mui/material @emotion/react @emotion/styled
npm i react-router-dom
npm install --save-dev @testing-library/dom
npm install --save-dev @testing-library/jest-dom
npm i @testing-library/user-event


jak dělat comit?
git config --global user.email "AyKira@seznam.cz"
git config --global user.name "AyKira"

git add . ; git commit -m "Musím dodě" ; git push -u origin master
git pull origin master




********************************************************************************************************************************************
29.9.2023 
Použij:
userEvent.setup()
user.click(screen)

Degug:
screen.debug()

Ukol:
Po kliknutí na button close
// že sidebar není vidět když isOpen je false
// že zavření sidebaru vyvolá funkci toggleDrawer DONE
// že kliknutí na jednotlivá tlačítka pushne do historie a vyvolá toggleDrawer (možná jest.spyOn())


poitřebujes redux toolkit a axios 

********************************************************************************************************************************************
27.10.2023

Zeptat se:
1) proč nepoužil create store ale configureStore? 

********************************************************************************************************************************************
12.1.2024 
- jak to že nemusel importovat nic do toho selectoru
- zeptat se na invalidateRandomPicture    
