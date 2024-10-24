import { Context, Scenes } from "telegraf";





export interface MyContext extends Context {

    session: MyWizardSession

    // declare scene type
    scene: Scenes.SceneContextScene<MyContext, Scenes.WizardSessionData>;
    wizard: Scenes.WizardContextWizard<MyContext>;
}


export interface MyWizardSession extends Scenes.WizardSession {
    
    firstNum?: number
   
}
