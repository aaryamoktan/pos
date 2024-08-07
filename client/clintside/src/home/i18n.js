import i18next from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(Backend).use(LanguageDetector).use(initReactI18next)
    .init({
        lng: 'en',
        debug: true,
        resources:{
            en:{
                translation:{
                    greeting:"hellow, Welcome"
                }

            },
            fr:{
                translation:{
                    greeting:"Bonjour, Bienvenue"
                }


            },
           
            
        }
       
    });

export default i18next;
