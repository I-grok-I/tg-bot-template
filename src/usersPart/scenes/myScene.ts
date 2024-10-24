import { Composer, Scenes } from "telegraf";
import { MyContext } from "../../types/interface";




const firstStep = new Composer<MyContext>;

const secondStep = new Composer<MyContext>;

const thirdStep = new Composer<MyContext>;







export const myScene = new Scenes.WizardScene<MyContext>(
    'myScene',
    firstStep,
    secondStep,
    thirdStep
);
